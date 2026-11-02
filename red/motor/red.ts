// Motor de consulta: enruta la pregunta a 1 o 2 nodos (+ máximo 1 conexión)
// y responde solo con lo que esos nodos dicen para ese público.
import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";
import { leerIndice, visiblesPara, type Indice, type Publico } from "./indice";
import { cargarNodo, fragmentar } from "./nodos";

const MODELO = "claude-opus-5-5";
const RESPALDO = {
  betas: ["server-side-fallback-2026-07-01"],
  fallbacks: "default" as const,
};

export const ESCALAR = "Eso te lo confirma un asesor de núvara.";

const NOMBRE_PUBLICO: Record<Publico, string> = {
  P: "un usuario o prospecto (chat abierto)",
  C: "alguien del equipo comercial",
  I: "alguien del equipo interno de núvara",
};

export type Ruta = {
  nodos: string[];
  conexion: string | null;
  aclarar: string | null;
};

export type Consulta = {
  pregunta: string;
  publico: Publico;
  ruta: Ruta;
  cargados: string[];
  sinEscribir: string[];
  respuesta: string;
  uso: { entrada: number; salida: number };
};

if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) {
  console.error(
    "Falta la API key de Claude: crea un archivo .env en la raíz del repo con la línea ANTHROPIC_API_KEY=<tu key>.",
  );
  process.exit(1);
}

const client = new Anthropic();

function sistemaEnrutador(indice: Indice, publico: Publico) {
  const visibles = visiblesPara(indice, publico);
  const ids = new Set(visibles.map((n) => n.id));
  const lista = visibles.map((n) => `- ${n.id}: ${n.cuando}`).join("\n");
  const conexiones = indice.conexiones
    .filter((c) => (c.desde === "*" || ids.has(c.desde)) && ids.has(c.hacia))
    .map((c) => `- ${c.desde === "*" ? "cualquiera" : c.desde} → ${c.hacia}: ${c.cuando}`)
    .join("\n");

  return `Eres el enrutador de la red de conocimiento de núvara. No respondes la pregunta: eliges qué nodos se leen para responderla.

Reglas:
- Elige el nodo cuyo tema responde la pregunta. Casi siempre es 1. Elige 2 solo si la pregunta pide dos temas distintos.
- Pon una conexión solo si aparece en la lista de conexiones, sale de un nodo elegido y la pregunta toca los dos temas. Si no, null.
- No elijas nodos "por si acaso": un nodo de más es un error igual que uno de menos.
- Si la pregunta no es de núvara o ningún nodo aplica, devuelve nodos vacío.
- Si la pregunta es tan ambigua que caben más de 2 nodos, devuelve nodos vacío y en aclarar una pregunta corta, de tú, para precisar.

Nodos:
${lista}

Conexiones permitidas:
${conexiones}`;
}

export async function enrutar(
  pregunta: string,
  publico: Publico,
  indice = leerIndice(),
) {
  const visibles = visiblesPara(indice, publico).map((n) => n.id);
  const Esquema = z.object({
    nodos: z.array(z.enum(visibles as [string, ...string[]])),
    conexion: z.enum(visibles as [string, ...string[]]).nullable(),
    aclarar: z.string().nullable(),
  });

  const r = await client.beta.messages.parse({
    model: MODELO,
    max_tokens: 4000,
    ...RESPALDO,
    output_config: { effort: "low", format: betaZodOutputFormat(Esquema) },
    system: sistemaEnrutador(indice, publico),
    messages: [{ role: "user", content: pregunta }],
  });

  const salida = r.parsed_output ?? { nodos: [], conexion: null, aclarar: null };
  const nodos = [...new Set(salida.nodos)].slice(0, 2);

  // La conexión tiene que existir en el mapa y salir de un nodo elegido.
  const conexion =
    salida.conexion &&
    !nodos.includes(salida.conexion) &&
    indice.conexiones.some(
      (c) =>
        c.hacia === salida.conexion && (c.desde === "*" || nodos.includes(c.desde)),
    )
      ? salida.conexion
      : null;

  const ruta: Ruta = { nodos, conexion, aclarar: salida.aclarar };
  return { ruta, uso: r.usage };
}

function sistemaRespuesta(publico: Publico) {
  const voz = ["voz-de-marca", "limites"].map((id) => cargarNodo(id, publico) ?? "").join("\n\n");
  const porPublico: Record<Publico, string> = {
    P: `Quien pregunta es ${NOMBRE_PUBLICO.P}. Solo tienes datos oficiales. No menciones que existen datos internos o sin confirmar.`,
    C: `Quien pregunta es ${NOMBRE_PUBLICO.C}. Puedes usar los datos por confirmar, pero márcalos siempre como "sin confirmar" y aclara que no se le dicen a un prospecto. Si piden una cifra descartada, dilo y da la oficial.`,
    I: `Quien pregunta es ${NOMBRE_PUBLICO.I}. Puedes usar todo lo que tienes, marcando qué es oficial, qué está sin confirmar y qué es interno.`,
  };

  return `Eres el cerebro de núvara: respondes preguntas sobre qué hace núvara y cómo se usa.

${porPublico[publico]}

Reglas:
- Responde solo con lo que está en <nodos>. No uses lo que sabes por fuera.
- Si la respuesta no está en <nodos>, responde exactamente: "${ESCALAR}"
- No inventes cifras. Solo puedes multiplicar o sumar tarifas que estén en <nodos>.
- Responde corto: de 1 a 4 oraciones, en español de Colombia, sin títulos.
- Si un nodo trae "## Pasos", la persona quiere hacer algo: empieza con la ruta en la plataforma (Menú › Pantalla › Botón) y da los pasos numerados tal como están, sin resumirlos. Aquí sí puedes pasar de 4 oraciones.

${voz}`;
}

export async function consultar(
  pregunta: string,
  publico: Publico,
): Promise<Consulta> {
  const indice = leerIndice();
  const { ruta, uso: usoRuta } = await enrutar(pregunta, publico, indice);
  const uso = { entrada: usoRuta.input_tokens, salida: usoRuta.output_tokens };
  const base = { pregunta, publico, ruta, uso };

  if (ruta.nodos.length === 0) {
    return {
      ...base,
      cargados: [],
      sinEscribir: [],
      respuesta: ruta.aclarar ?? ESCALAR,
    };
  }

  const pedidos = [...ruta.nodos, ...(ruta.conexion ? [ruta.conexion] : [])];
  // Igual que sin IA: una neurona viaja completa; de un núcleo o de una
  // conexión, solo los fragmentos que aplican a la pregunta.
  const textos = pedidos.map((id) => {
    const completo = cargarNodo(id, publico);
    const neurona = indice.nodos.some((n) => n.id === id && n.procedimiento);
    return { id, texto: completo && !neurona ? fragmentar(completo, pregunta).texto : completo };
  });
  const cargados = textos.filter((t) => t.texto).map((t) => t.id);
  const sinEscribir = textos.filter((t) => !t.texto).map((t) => t.id);

  // Si ninguno de los nodos elegidos está escrito, no hay nada que leer:
  // se escala sin llamar al modelo, para que no invente.
  if (!ruta.nodos.some((id) => cargados.includes(id))) {
    return { ...base, cargados, sinEscribir, respuesta: ESCALAR };
  }

  const nodos = textos
    .filter((t) => t.texto)
    .map((t) => `<nodo id="${t.id}">\n${t.texto}\n</nodo>`)
    .join("\n\n");

  const r = await client.beta.messages.create({
    model: MODELO,
    max_tokens: 8000,
    ...RESPALDO,
    output_config: { effort: "medium" },
    system: sistemaRespuesta(publico),
    messages: [
      {
        role: "user",
        content: `<nodos>\n${nodos}\n</nodos>\n\n<pregunta>${pregunta}</pregunta>`,
      },
    ],
  });

  uso.entrada += r.usage.input_tokens;
  uso.salida += r.usage.output_tokens;

  const respuesta =
    r.stop_reason === "refusal"
      ? ESCALAR
      : r.content
          .flatMap((b) => (b.type === "text" ? [b.text] : []))
          .join("")
          .trim();

  return { ...base, cargados, sinEscribir, respuesta };
}
