// Corre una prueba de red/pruebas/ y revisa ruta y texto con reglas fijas.
// La lógica está en evaluacion.ts (la usa también la interfaz).
// Uso: bun run red:probar [precios] [--ia]
// Sin --ia prueba el enrutador por palabras clave y que el nodo devuelto no
// filtre datos al público equivocado. Con --ia prueba además la respuesta de Claude.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { correrPrueba } from "./evaluacion";
import { RAIZ_RED } from "./indice";

// Opus 5.5: USD por millón de tokens.
const PRECIO = { entrada: 4, salida: 20 };

const args = process.argv.slice(2);
const conIa = args.includes("--ia");
const nombre = args.find((a) => !a.startsWith("--")) ?? "precios";

const p = await correrPrueba(nombre, conIa);
for (const r of p.resultados) {
  const ruta = `${r.salida.nodos.join("+") || "-"}${r.salida.conexion ? `→${r.salida.conexion}` : ""}`;
  console.log(`${r.fallas.length ? "FALLA" : "ok   "} [${r.caso.publico}] ${r.caso.pregunta}  (${ruta})`);
  for (const f of r.fallas) console.log(`        ${f}`);
  if (r.fallas.length && conIa) console.log(`        respuesta: ${r.salida.texto.replace(/\n/g, " ")}`);
}

let resumen = `\n${p.pasaron}/${p.total} casos pasaron (${conIa ? "con IA" : "sin IA"})`;
if (conIa) {
  const costo = (p.uso.entrada * PRECIO.entrada + p.uso.salida * PRECIO.salida) / 1e6;
  resumen += ` · ${p.uso.entrada} tokens de entrada, ${p.uso.salida} de salida · USD ${costo.toFixed(3)}`;
}
console.log(resumen);

writeFileSync(
  join(RAIZ_RED, "pruebas", `${nombre}.resultado.json`),
  JSON.stringify(
    p.resultados.map((r) => ({
      pregunta: r.caso.pregunta,
      publico: r.caso.publico,
      nodos: r.salida.nodos,
      conexion: r.salida.conexion,
      sinEscribir: r.salida.sinEscribir,
      texto: r.salida.texto,
      fallas: r.fallas,
    })),
    null,
    2,
  ) + "\n",
);

process.exit(p.pasaron === p.total ? 0 : 1);
