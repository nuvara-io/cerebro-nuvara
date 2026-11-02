// Uso: bun run red "<pregunta>" [--publico P|C|I] [--ia]
// Sin --ia devuelve el nodo que encuentra por palabras clave, tal cual.
// Con --ia, Claude enruta y redacta la respuesta (necesita ANTHROPIC_API_KEY).
import { buscar } from "./buscar";
import type { Publico } from "./indice";

const args = process.argv.slice(2);
const conIa = args.includes("--ia");
const i = args.indexOf("--publico");
const publico = (i >= 0 ? args[i + 1] : "P") as Publico;
const pregunta = args
  .filter((a, j) => a !== "--ia" && (i < 0 || (j !== i && j !== i + 1)))
  .join(" ")
  .trim();

if (!pregunta || !["P", "C", "I"].includes(publico)) {
  console.error('Uso: bun run red "<pregunta>" [--publico P|C|I] [--ia]');
  process.exit(1);
}

if (conIa) {
  const { consultar } = await import("./red");
  const c = await consultar(pregunta, publico);
  console.log(`Ruta: ${c.ruta.nodos.join(" + ") || "(ninguno)"}${c.ruta.conexion ? ` → ${c.ruta.conexion}` : ""}`);
  if (c.sinEscribir.length) console.log(`Sin escribir: ${c.sinEscribir.join(", ")}`);
  console.log(`\n${c.respuesta}\n`);
  console.log(`Tokens: ${c.uso.entrada} de entrada, ${c.uso.salida} de salida`);
} else {
  const b = buscar(pregunta, publico);
  console.log(`Ruta: ${b.nodos.join(" + ") || "(ninguno)"}${b.conexion ? ` → ${b.conexion}` : ""}`);
  console.log(
    `Puntajes: ${b.puntajes.slice(0, 4).map((p) => `${p.id} ${p.puntos} (${p.claves.join(", ")})`).join(" · ") || "-"}`,
  );
  if (b.sinEscribir.length) console.log(`Sin escribir: ${b.sinEscribir.join(", ")}`);
  const p = b.procedimiento;
  if (p) {
    console.log(`\n${p.titulo} (${p.estado})`);
    console.log(`Dónde: ${p.ruta.join(" › ")}${p.url ? `  ${p.url}` : ""}`);
    if (p.antes.length) console.log(`\nAntes de empezar:\n${p.antes.map((x) => `  • ${x}`).join("\n")}`);
    console.log(`\nPasos:\n${p.pasos.map((x, i) => `  ${i + 1}. ${x}`).join("\n")}`);
    if (p.resultado.length) console.log(`\nResultado:\n${p.resultado.map((x) => `  • ${x}`).join("\n")}`);
    if (p.siFalla.length) console.log(`\nSi algo falla:\n${p.siFalla.map((x) => `  • ${x}`).join("\n")}`);
    process.exit(0);
  }
  const vacio = b.nodos.length
    ? "(el nodo existe en el mapa pero todavía no está escrito)"
    : "(ningún nodo coincide con la pregunta)";
  console.log(`\n${b.resultado || vacio}`);
}
