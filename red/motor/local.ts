// Modo de pruebas sin costo: el enrutador por palabras clave elige los nodos
// y un modelo local de Ollama redacta la respuesta con las mismas reglas que
// Claude. Los datos no salen del computador.
// Se enciende con Ollama corriendo (ollama serve) y el modelo descargado.
import { buscar } from "./buscar";
import type { Publico } from "./indice";
import { calculoDePrecio, ESCALAR, sistemaRespuesta } from "./redaccion";

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

export async function consultarLocal(pregunta: string, publico: Publico, contexto: string[] = []) {
  const b = buscar(pregunta, publico, contexto);
  const ruta = { nodos: b.nodos, conexion: b.conexion, aclarar: null };
  const base = { pregunta, publico, ruta, modelo: MODELO_LOCAL };
  // Sin nodos no hay nada que leer: se escala sin llamar al modelo, para que no invente.
  if (!b.resultado) return { ...base, respuesta: ESCALAR, uso: { entrada: 0, salida: 0 } };

  const calculo = b.nodos.includes("precios") || b.conexion === "precios" ? calculoDePrecio(pregunta) : null;
  const r = await fetch(`${OLLAMA}/api/chat`, {
    method: "POST",
    body: JSON.stringify({
      model: MODELO_LOCAL,
      stream: false,
      // Temperatura baja: que se ciña a los nodos.
      options: { temperature: 0.2, num_ctx: 8192 },
      messages: [
        { role: "system", content: sistemaRespuesta(publico) },
        { role: "user", content: `<nodos>\n${b.resultado}\n</nodos>\n\n${calculo ? `<calculo>${calculo}</calculo>\n\n` : ""}<pregunta>${pregunta}</pregunta>` },
      ],
    }),
  });
  if (!r.ok) throw new Error(`Ollama respondió ${r.status}: ${await r.text()}`);
  const d = (await r.json()) as { message: { content: string }; prompt_eval_count?: number; eval_count?: number };
  return {
    ...base,
    respuesta: d.message.content.trim(),
    uso: { entrada: d.prompt_eval_count ?? 0, salida: d.eval_count ?? 0 },
  };
}
