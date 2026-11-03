// Interfaz local para probar el flujo de la red: pregunta → enrutador → nodo → respuesta.
// Uso: bun run red:interfaz  (abre http://localhost:3100)
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buscar } from "../motor/buscar";
import { correrPrueba, evaluarRed, listarPruebas } from "../motor/evaluacion";
import { leerIndice, RAIZ_RED, type Publico } from "../motor/indice";
import { cargarNodo, leerProcedimiento } from "../motor/nodos";
import { consultarLocal, hayModeloLocal, MODELO_LOCAL } from "../motor/local";
import { leerRegistro, registrar } from "../motor/registro";

const PUERTO = Number(process.env.PORT ?? 3100);
const HAY_IA = Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);
const PAGINA = join(import.meta.dir, "index.html");
const LOGOS = join(RAIZ_RED, "..", "public", "brand", "logo");

type Pedido = { pregunta?: string; publico?: string; contexto?: string[] };

const titulos = (texto: string) =>
  [...texto.matchAll(/^## (.+)$/gm)].map((m) => m[1]);

// Qué secciones del nodo existen pero este público no ve.
function ocultas(id: string, publico: Publico) {
  const completo = cargarNodo(id, "I");
  const visible = cargarNodo(id, publico);
  if (!completo || !visible) return [];
  const vistas = new Set(titulos(visible));
  return titulos(completo).filter((t) => !vistas.has(t));
}

function leerPedido(cuerpo: Pedido) {
  const pregunta = (cuerpo.pregunta ?? "").trim();
  const publico = (["P", "C", "I"].includes(cuerpo.publico ?? "") ? cuerpo.publico : "P") as Publico;
  return { pregunta, publico };
}

const json = (datos: unknown, status = 200) => Response.json(datos, { status });

Bun.serve({
  port: PUERTO,
  async fetch(req) {
    const { pathname } = new URL(req.url);

    // Sin caché: así cada cambio a index.html se ve al recargar.
    if (pathname === "/")
      return new Response(Bun.file(PAGINA), { headers: { "Cache-Control": "no-store" } });

    // Logos oficiales de public/brand/logo/.
    const logo = pathname.match(/^\/logo\/([a-z-]+\.svg)$/);
    if (logo) return new Response(Bun.file(join(LOGOS, logo[1])));

    if (pathname === "/api/estado") {
      const prueba = JSON.parse(readFileSync(join(RAIZ_RED, "pruebas", "precios.json"), "utf8"));
      const indice = leerIndice();
      // Con la llave de Claude redacta Claude; sin ella, el modelo local de Ollama si está corriendo.
      const local = !HAY_IA && (await hayModeloLocal());
      return json({
        ia: HAY_IA || local,
        motorIa: HAY_IA ? "Claude" : local ? MODELO_LOCAL : null,
        nodos: indice.nodos,
        conexiones: indice.conexiones,
        redes: indice.redes,
        titulos: Object.fromEntries(
          indice.nodos.map((n) => [n.id, cargarNodo(n.id, "I")?.match(/^# (.+)$/m)?.[1] ?? null]).filter(([, t]) => t),
        ),
        ejemplos: prueba.casos.map((c: Pedido) => ({ pregunta: c.pregunta, publico: c.publico })),
      });
    }

    if (req.method === "POST" && pathname === "/api/buscar") {
      const cuerpo = (await req.json()) as Pedido;
      const { pregunta, publico } = leerPedido(cuerpo);
      if (!pregunta) return json({ error: "Escribe una pregunta." }, 400);
      const contexto = Array.isArray(cuerpo.contexto) ? cuerpo.contexto.filter((x) => typeof x === "string").slice(0, 3) : [];
      const b = buscar(pregunta, publico, contexto);
      registrar(b);
      return json({
        ...b,
        ocultas: Object.fromEntries(
          [...b.nodos, ...(b.conexion ? [b.conexion] : [])].map((id) => [id, ocultas(id, publico)]),
        ),
      });
    }

    // Corre todas las pruebas de red/pruebas/ y el validador, sin IA (no cuesta).
    if (req.method === "POST" && pathname === "/api/evaluar") {
      const inicio = performance.now();
      const validador = evaluarRed();
      const pruebas = [];
      for (const nombre of listarPruebas()) {
        const p = await correrPrueba(nombre, false);
        pruebas.push({
          nombre: p.nombre,
          descripcion: p.descripcion,
          pasaron: p.pasaron,
          total: p.total,
          casos: p.resultados.map((r) => ({
            pregunta: r.caso.pregunta,
            publico: r.caso.publico,
            esperado: r.caso.nodos,
            nodos: r.salida.nodos,
            conexion: r.salida.conexion,
            fallas: r.fallas,
          })),
        });
      }
      return json({ validador, pruebas, sinTema: leerRegistro().slice(0, 50), ms: Math.round(performance.now() - inicio) });
    }

    // Para otros agentes: la ruta y los pasos de un procedimiento en datos.
    // GET /api/procedimiento/causar-por-lote?publico=P
    const proc = pathname.match(/^\/api\/procedimiento\/([a-z0-9-]+)$/);
    if (proc) {
      const { publico } = leerPedido({ publico: new URL(req.url).searchParams.get("publico") ?? "P" });
      const p = leerProcedimiento(proc[1], publico);
      return p ? json(p) : json({ error: "No existe ese procedimiento." }, 404);
    }

    if (req.method === "POST" && pathname === "/api/consultar") {
      const cuerpo = (await req.json()) as Pedido;
      const { pregunta, publico } = leerPedido(cuerpo);
      if (!pregunta) return json({ error: "Escribe una pregunta." }, 400);
      try {
        if (!HAY_IA) {
          if (!(await hayModeloLocal()))
            return json({ error: `Falta ANTHROPIC_API_KEY en .env, o Ollama corriendo con ${MODELO_LOCAL}.` }, 503);
          const contexto = Array.isArray(cuerpo.contexto) ? cuerpo.contexto.filter((x) => typeof x === "string").slice(0, 3) : [];
          return json(await consultarLocal(pregunta, publico, contexto));
        }
        const { consultar } = await import("../motor/red");
        return json(await consultar(pregunta, publico));
      } catch (e) {
        return json({ error: e instanceof Error ? e.message : String(e) }, 502);
      }
    }

    return new Response("No encontrado", { status: 404 });
  },
});

console.log(`Red de consulta en http://localhost:${PUERTO} (${HAY_IA ? "redacta Claude" : `redacta ${MODELO_LOCAL} si Ollama está corriendo`})`);
