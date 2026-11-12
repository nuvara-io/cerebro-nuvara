// API HTTP de solo lectura del cerebro, para agentes que no hablan MCP (por
// ejemplo el CRM de WhatsApp). No llama a ningún modelo ni escribe nada.
//
// Seguridad:
// - Toda ruta, salvo /salud, pide "Authorization: Bearer <CEREBRO_API_KEY>".
// - El público I (equipo interno) nunca sale por aquí. El tope lo fija
//   CEREBRO_PUBLICO_MAX (P o C; por defecto C).
//
// Rutas:
//   GET  /salud
//   GET  /nodos?publico=P                 → ids, tipo y "cuándo usarlo" de los nodos visibles
//   GET  /nodos/:id?publico=P             → texto del nodo filtrado para ese público
//   POST /consultar {pregunta, publico?, contexto?} → igual que consultar_cerebro del MCP
//   GET  /bloques?ids=a,b&publico=P       → nodos limpios para cargar en una base de conocimiento
import { timingSafeEqual } from "node:crypto";
import { buscar, candidatos } from "./buscar";
import { leerIndice, RANGO, visiblesPara, type Publico } from "./indice";
import { cargarNodo } from "./nodos";

const LLAVE = process.env.CEREBRO_API_KEY ?? "";
if (LLAVE.length < 24) {
  console.error("Falta CEREBRO_API_KEY (mínimo 24 caracteres).");
  process.exit(1);
}
const TOPE: Publico = process.env.CEREBRO_PUBLICO_MAX === "P" ? "P" : "C";
const PUERTO = Number(process.env.PORT ?? 8080);

const AVISO =
  "Responde solo con este texto. Las cifras van tal cual: no las combines ni calcules otras. Lo marcado por confirmar no es oficial.";

function autorizado(req: Request) {
  const dada = Buffer.from((req.headers.get("authorization") ?? "").replace(/^Bearer /, ""));
  const esperada = Buffer.from(LLAVE);
  return dada.length === esperada.length && timingSafeEqual(dada, esperada);
}

// Público pedido, recortado al tope. Lo desconocido cae en P, el más restringido.
function publicoDe(v: unknown): Publico {
  const p: Publico = v === "C" ? "C" : "P";
  return RANGO[p] > RANGO[TOPE] ? TOPE : p;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8" } });

// Lo que no debe llegar a un cliente: datos sin confirmar, notas internas e
// instrucciones de redacción pensadas para el chat del cerebro.
const FUERA = [/por confirmar/i, /sin confirmar/i, /pendiente de confirmar/i, /para el equipo/i, /^Fuente:/, /^Definida por el equipo/, /<calculo>/];

function limpiar(texto: string, ids: Set<string>): string {
  return texto
    .split(/\n(?=## )/)
    .filter((s) => !/^## (Para el equipo|Descartado|Cómo responder)/.test(s))
    .join("\n")
    .split("\n")
    .filter((l) => !FUERA.some((r) => r.test(l)))
    .filter((l) => {
      const refs = [...l.matchAll(/`([a-z0-9-]+)`/g)].map((m) => m[1]);
      return !(refs.length > 0 && refs.every((r) => ids.has(r)) && /^- (Cómo|Detalle|Ver)/.test(l.trim()));
    })
    .map((l) => l.replace(/\s*\(ver `[a-z0-9-]+`\)/g, "").replace(/`([a-z0-9-]+)`/g, (m, r) => (ids.has(r) ? r.replace(/-/g, " ") : m)))
    .join("\n")
    .replace(/ \(\d{2}\/\d{2}\/\d{4}\)/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^# .*\n+/, "")
    .trim();
}

function visibles(publico: Publico) {
  return visiblesPara(leerIndice(), publico);
}

Bun.serve({
  port: PUERTO,
  async fetch(req) {
    const url = new URL(req.url);
    const ruta = url.pathname.replace(/\/+$/, "") || "/";

    if (ruta === "/salud") return json({ ok: true, nodos: leerIndice().nodos.length, tope: TOPE });
    if (!autorizado(req)) return json({ error: "No autorizado" }, 401);

    if (req.method === "GET" && ruta === "/nodos") {
      const publico = publicoDe(url.searchParams.get("publico"));
      return json({ publico, nodos: visibles(publico).map((n) => ({ id: n.id, tipo: n.procedimiento ? "pasos" : "tema", cuando: n.cuando })) });
    }

    const uno = ruta.match(/^\/nodos\/([a-z0-9-]+)$/);
    if (req.method === "GET" && uno) {
      const publico = publicoDe(url.searchParams.get("publico"));
      const id = uno[1];
      const texto = visibles(publico).some((n) => n.id === id) ? cargarNodo(id, publico) : null;
      return texto ? json({ id, publico, texto }) : json({ error: `No hay un nodo "${id}" para el público ${publico}` }, 404);
    }

    if (req.method === "POST" && ruta === "/consultar") {
      const cuerpo = (await req.json().catch(() => null)) as { pregunta?: string; publico?: string; contexto?: string[] } | null;
      const pregunta = cuerpo?.pregunta?.trim();
      if (!pregunta) return json({ error: "Falta la pregunta" }, 400);
      const publico = publicoDe(cuerpo?.publico);
      const contexto = Array.isArray(cuerpo?.contexto) ? cuerpo.contexto.filter((x) => typeof x === "string") : [];
      const b = buscar(pregunta, publico, contexto);
      const otros = candidatos(pregunta, publico)
        .filter((n) => !b.nodos.includes(n.id))
        .map((n) => ({ id: n.id, cuando: n.cuando }));
      return json({ publico, nodos: b.nodos, fueraDeTema: b.fueraDeTema, texto: b.resultado, otros, aviso: AVISO });
    }

    if (req.method === "GET" && ruta === "/bloques") {
      const publico = publicoDe(url.searchParams.get("publico"));
      const pedidos = (url.searchParams.get("ids") ?? "").split(",").map((s) => s.trim()).filter(Boolean);
      const todos = new Set(leerIndice().nodos.map((n) => n.id));
      const vis = new Set(visibles(publico).map((n) => n.id));
      const bloques = pedidos
        .filter((id) => vis.has(id))
        .map((id) => ({ id, texto: limpiar(cargarNodo(id, publico) ?? "", todos) }))
        .filter((b) => b.texto);
      return json({ publico, bloques });
    }

    return json({ error: "No existe" }, 404);
  },
});

console.log(`API del cerebro en :${PUERTO} (tope ${TOPE})`);
