// Modo de pruebas sin costo: el enrutador por palabras clave elige los nodos
// y un modelo local de Ollama redacta la respuesta con las mismas reglas que
// Claude. Los datos no salen del computador.
// Se enciende con Ollama corriendo (ollama serve) y el modelo descargado.
import { buscar, candidatos, PIDE_PRECIO, sinTildes } from "./buscar";
import { leerIndice, visiblesPara, type Publico } from "./indice";
import { cargarNodo, fragmentar } from "./nodos";
import { calculoDePrecio, ESCALAR, FUERA_DE_TEMA, revisarRespuesta, sistemaRespuesta } from "./redaccion";

export const OLLAMA = process.env.OLLAMA_URL ?? "http://localhost:11434";
export const MODELO_LOCAL = process.env.OLLAMA_MODEL ?? "qwen2.5:7b";

// Si Ollama responde y tiene el modelo descargado.
export async function hayModeloLocal() {
  try {
    const r = await fetch(`${OLLAMA}/api/tags`, { signal: AbortSignal.timeout(800) });
    const { models } = (await r.json()) as { models: { name: string }[] };
    return models.some((m) => m.name === MODELO_LOCAL);
  } catch {
    return false;
  }
}

type Mensaje = { role: "system" | "user"; content: string };

async function chat(messages: Mensaje[], formato?: "json") {
  const r = await fetch(`${OLLAMA}/api/chat`, {
    method: "POST",
    body: JSON.stringify({
      model: MODELO_LOCAL,
      stream: false,
      ...(formato ? { format: formato } : {}),
      // Temperatura baja: que se ciña a los nodos.
      options: { temperature: formato ? 0 : 0.2, num_ctx: 8192 },
      messages,
    }),
  });
  if (!r.ok) throw new Error(`Ollama respondió ${r.status}: ${await r.text()}`);
  const d = (await r.json()) as { message: { content: string }; prompt_eval_count?: number; eval_count?: number };
  return { texto: d.message.content.trim(), entrada: d.prompt_eval_count ?? 0, salida: d.eval_count ?? 0 };
}

// Respaldo cuando ninguna palabra clave coincide pero la pregunta es de núvara:
// el modelo elige un tema del mapa por su significado. Solo vale un id que
// exista y que ese público pueda ver.
async function elegirTema(pregunta: string, publico: Publico) {
  const visibles = visiblesPara(leerIndice(), publico).filter((n) => !n.transversal);
  const lista = visibles.map((n) => `- ${n.id}: ${n.cuando}`).join("\n");
  const r = await chat(
    [
      {
        role: "system",
        content: `Eliges el tema de núvara que mejor responde una pregunta. No respondes la pregunta.\nLos ejemplos de cada tema son orientativos: elige el tema más cercano por su significado aunque la pregunta use otras palabras.\nDevuelve solo JSON: {"tema": "<id>"} con un id de la lista. Usa {"tema": null} solo si la pregunta no tiene relación con ningún tema.\n\nTemas:\n${lista}`,
      },
      { role: "user", content: pregunta },
    ],
    "json",
  );
  let tema: unknown = null;
  try {
    tema = (JSON.parse(r.texto) as { tema?: unknown }).tema;
  } catch {
    tema = null;
  }
  const nodo = visibles.find((n) => n.id === tema);
  return { nodo, uso: { entrada: r.entrada, salida: r.salida } };
}

// La búsqueda propone candidatos y el modelo elige por significado: "le compro a
// alguien que no factura" es documento soporte aunque no compartan palabras. Solo
// vale un id de la lista; si no responde uno, se queda lo que decidió la búsqueda.
export async function elegirCandidato(pregunta: string, publico: Publico) {
  const opciones = candidatos(pregunta, publico);
  const ids = opciones.map((n) => n.id);
  if (ids.length < 2) return ids[0] ?? null;
  const lista = opciones
    .map((n) => `- ${n.id} (${n.procedimiento ? "pasos para hacer algo" : "explicación de un tema"}): ${n.cuando}`)
    .join("\n");
  const r = await chat(
    [
      {
        role: "system",
        content: `Eres el enrutador de núvara, un software contable colombiano. Eliges qué tema responde mejor una pregunta. No respondes la pregunta.\nPiensa qué quiere lograr la persona, no solo qué palabras usa. Si quiere hacer algo, prefiere "pasos para hacer algo"; si pregunta qué es, para qué sirve o si existe, prefiere "explicación de un tema".\nEjemplos: anular o corregir una factura emitida es una nota crédito. Comprarle a quien no factura es documento soporte. Borrar una factura sin querer es restaurarla.\nDevuelve solo JSON: {"tema": "<id>"} con un id de la lista.\n\nTemas:\n${lista}`,
      },
      { role: "user", content: pregunta },
    ],
    "json",
  );
  try {
    const tema = (JSON.parse(r.texto) as { tema?: string }).tema;
    return tema && ids.includes(tema) ? tema : null;
  } catch {
    return null;
  }
}

export async function consultarLocal(pregunta: string, publico: Publico, contexto: string[] = []) {
  const b = buscar(pregunta, publico, contexto);
  const ruta = { nodos: b.nodos, conexion: b.conexion, aclarar: b.aclarar, porModelo: false };
  const base = { pregunta, publico, ruta, modelo: MODELO_LOCAL };
  const uso = { entrada: 0, salida: 0 };
  // Estas no llaman al modelo para redactar, para que no invente: fuera de
  // núvara o empate entre dos temas (se pregunta cuál).
  if (b.fueraDeTema) return { ...base, respuesta: FUERA_DE_TEMA, uso };

  // El modelo elige el tema por significado. Los precios y los seguimientos de
  // una conversación se quedan con lo que decidió el enrutador.
  let resultado = b.resultado;
  if (!b.porContexto && !PIDE_PRECIO.test(sinTildes(pregunta))) {
    const elegido = await elegirCandidato(pregunta, publico).catch(() => null);
    const nodo = visiblesPara(leerIndice(), publico).find((n) => n.id === elegido);
    const texto = nodo ? cargarNodo(nodo.id, publico) : null;
    if (nodo && texto && !(b.nodos.length === 1 && b.nodos[0] === nodo.id)) {
      resultado = `<nodo id="${nodo.id}">\n${nodo.procedimiento ? texto : fragmentar(texto, pregunta).texto}\n</nodo>`;
      Object.assign(ruta, { nodos: [nodo.id], conexion: null, aclarar: null, porModelo: true });
    }
  }
  if (ruta.aclarar) return { ...base, respuesta: ruta.aclarar, uso };

  if (!b.nodos.length) {
    const { nodo, uso: u } = await elegirTema(pregunta, publico);
    [uso.entrada, uso.salida] = [u.entrada, u.salida];
    const texto = nodo ? cargarNodo(nodo.id, publico) : null;
    if (nodo && texto) {
      // Igual que con claves: una neurona viaja completa; de un núcleo, sus fragmentos.
      resultado = `<nodo id="${nodo.id}">\n${nodo.procedimiento ? texto : fragmentar(texto, pregunta).texto}\n</nodo>`;
      ruta.nodos = [nodo.id];
      ruta.porModelo = true;
    }
  }
  if (!resultado) return { ...base, respuesta: ESCALAR, uso };

  const calculo = ruta.nodos.includes("precios") || ruta.conexion === "precios" ? calculoDePrecio(pregunta) : null;
  const r = await chat([
    { role: "system", content: sistemaRespuesta(publico) },
    { role: "user", content: `<nodos>\n${resultado}\n</nodos>\n\n${calculo ? `<calculo>${calculo}</calculo>\n\n` : ""}<pregunta>${pregunta}</pregunta>` },
  ]);
  uso.entrada += r.entrada;
  uso.salida += r.salida;
  const { respuesta, inventadas } = revisarRespuesta(r.texto, resultado, calculo);
  return { ...base, respuesta, inventadas, uso };
}
