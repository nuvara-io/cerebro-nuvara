// Servidor MCP del cerebro: deja que un agente de Claude consulte núvara desde
// cualquier carpeta. Solo lee: no llama a ningún modelo ni escribe nada. El
// agente redacta con el texto oficial que recibe. Habla JSON-RPC por stdio, una
// línea por mensaje, así que nada más puede escribir en stdout.
import { buscar, candidatos } from "./buscar";
import { leerIndice, visiblesPara, type Publico } from "./indice";
import { cargarNodo } from "./nodos";

const PUBLICOS = ["P", "C", "I"];
const AVISO =
  "Responde solo con este texto. Las cifras van tal cual: no las combines ni calcules otras. Si no alcanza, llama leer_nodo con un candidato o di que no está en el cerebro. Lo marcado por confirmar no es oficial.";

const publicoDe = (v: unknown): Publico => (PUBLICOS.includes(String(v)) ? (v as Publico) : "I");

function consultar(pregunta: string, publico: Publico, contexto: string[]) {
  const b = buscar(pregunta, publico, contexto);
  const lista = candidatos(pregunta, publico)
    .filter((n) => !b.nodos.includes(n.id))
    .map((n) => `- ${n.id} (${n.procedimiento ? "pasos" : "tema"}): ${n.cuando}`)
    .join("\n");
  const partes = [
    `Público: ${publico}. Tema elegido: ${b.nodos.join(" + ") || "ninguno"}${b.conexion ? ` → ${b.conexion}` : ""}.`,
    b.fueraDeTema ? "La pregunta no parece de núvara." : "",
    b.aclarar ? `Empate entre temas: ${b.aclarar}` : "",
    b.resultado,
    lista ? `Otros temas que podrían responder mejor (léelos con leer_nodo):\n${lista}` : "",
    AVISO,
  ];
  return partes.filter(Boolean).join("\n\n");
}

function leerNodo(id: string, publico: Publico) {
  const visible = visiblesPara(leerIndice(), publico).some((n) => n.id === id);
  const texto = visible ? cargarNodo(id, publico) : null;
  return texto ? `<nodo id="${id}">\n${texto}\n</nodo>\n\n${AVISO}` : `No hay un nodo "${id}" para el público ${publico}.`;
}

const PUBLICO = {
  type: "string",
  enum: PUBLICOS,
  description: "Qué puede ver quien pregunta: P usuario, C comercial, I equipo interno (por defecto).",
};
const HERRAMIENTAS = [
  {
    name: "consultar_cerebro",
    description:
      "Consulta el cerebro de núvara: producto, precios, módulos (causación, facturación electrónica, nómina, tesorería), pasos en la plataforma, marca y marketing. Úsala antes de afirmar algo de núvara. Devuelve el texto oficial del tema y otros temas candidatos.",
    inputSchema: {
      type: "object",
      properties: {
        pregunta: { type: "string", description: "La pregunta en lenguaje natural." },
        publico: PUBLICO,
        contexto: { type: "array", items: { type: "string" }, description: "Ids de los nodos de la respuesta anterior, para preguntas de seguimiento." },
      },
      required: ["pregunta"],
    },
    annotations: { readOnlyHint: true },
  },
  {
    name: "leer_nodo",
    description: "Lee completo un nodo del cerebro de núvara por su id, como los candidatos que devuelve consultar_cerebro. Sirve para ver todos los pasos de una neurona o un tema entero.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", description: "Id del nodo, por ejemplo causar-por-lote." }, publico: PUBLICO },
      required: ["id"],
    },
    annotations: { readOnlyHint: true },
  },
];

type Pedido = { id?: number | string; method: string; params?: { name?: string; arguments?: Record<string, unknown>; protocolVersion?: string } };

function responder(p: Pedido): unknown {
  if (p.method === "initialize")
    return {
      protocolVersion: p.params?.protocolVersion ?? "2025-06-18",
      capabilities: { tools: {} },
      serverInfo: { name: "cerebro-nuvara", version: "1.0.0" },
      instructions: "Consulta consultar_cerebro antes de afirmar algo sobre núvara: precios, módulos, pasos o marca.",
    };
  if (p.method === "ping") return {};
  if (p.method === "tools/list") return { tools: HERRAMIENTAS };
  if (p.method === "tools/call") {
    const a = p.params?.arguments ?? {};
    const publico = publicoDe(a.publico);
    if (p.params?.name === "consultar_cerebro") {
      if (typeof a.pregunta !== "string" || !a.pregunta.trim())
        return { content: [{ type: "text", text: "Falta la pregunta." }], isError: true };
      const contexto = Array.isArray(a.contexto) ? a.contexto.map(String) : [];
      return { content: [{ type: "text", text: consultar(a.pregunta, publico, contexto) }] };
    }
    if (p.params?.name === "leer_nodo")
      return { content: [{ type: "text", text: leerNodo(String(a.id ?? ""), publico) }] };
    return { content: [{ type: "text", text: `Herramienta desconocida: ${p.params?.name}` }], isError: true };
  }
  throw Object.assign(new Error(`Método no disponible: ${p.method}`), { code: -32601 });
}

const enviar = (m: unknown) => process.stdout.write(`${JSON.stringify(m)}\n`);

function atender(linea: string) {
  let p: Pedido;
  try {
    p = JSON.parse(linea) as Pedido;
  } catch {
    return enviar({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "JSON inválido" } });
  }
  if (p.id === undefined) return; // Las notificaciones no llevan respuesta.
  try {
    enviar({ jsonrpc: "2.0", id: p.id, result: responder(p) });
  } catch (e) {
    const error = e as Error & { code?: number };
    enviar({ jsonrpc: "2.0", id: p.id, error: { code: error.code ?? -32603, message: error.message } });
  }
}

let pendiente = "";
const decodificar = new TextDecoder();
for await (const trozo of Bun.stdin.stream()) {
  pendiente += decodificar.decode(trozo, { stream: true });
  const lineas = pendiente.split("\n");
  pendiente = lineas.pop() ?? "";
  for (const l of lineas) if (l.trim()) atender(l);
}
