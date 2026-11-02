// Revisa la salud de la red sin IA: si el enrutador acierta, si llegan solo
// los fragmentos que aplican, dónde chocan las palabras clave y cómo están
// las conexiones. La lógica está en evaluacion.ts (la usa también la interfaz).
// Uso: bun run red:validar
import { evaluarRed, type Grupo } from "./evaluacion";

const e = evaluarRed();
const pct = (a: number, b: number) => `${Math.round((100 * a) / b)} %`;

console.log("REDES NEURONALES");
console.log("  Red                        Núcleos  Neuronas  Escritas  Conex. internas  Con otras redes  Acierto");
for (const r of e.porRed)
  console.log(`  ${r.nombre.padEnd(26)} ${String(r.nucleos).padStart(7)}  ${String(r.neuronas).padStart(8)}  ${String(r.escritas).padStart(8)}  ${String(r.internas).padStart(15)}  ${String(r.externas).padStart(15)}  ${r.acierto === null ? "   —" : `${String(r.acierto).padStart(4)} %`}`);

console.log("\nENRUTADOR (preguntas de ejemplo del mapa)");
console.log(`  Aciertos exactos: ${e.mapa.aciertos}/${e.mapa.total} (${pct(e.mapa.aciertos, e.mapa.total)}) · empates: ${e.mapa.empates}`);
console.log(`  Nodos con algún fallo: ${e.mapa.nodosConFallo}/${e.mapa.nodos}`);
for (const f of e.mapa.fallos)
  console.log(`  ✗ ${f.id.padEnd(34)} "${f.pregunta}" → ${f.eligio.join(" + ") || "(ninguno)"}`);

console.log(`\nFRAGMENTOS (de un núcleo solo llega lo que aplica)`);
console.log(`  ${e.fragmentos.ok}/${e.fragmentos.total} preguntas traen el fragmento correcto sin ruido`);
for (const f of e.fragmentos.casos.filter((c) => c.fallas.length))
  console.log(`  ✗ [${f.publico}] "${f.pregunta}": ${f.fallas.join(", ")}`);

const linea = (g: Pick<Grupo, "total" | "enTema" | "sinRuta"> & { fuera: number | unknown[] }) =>
  `${g.enTema}/${g.total} en el tema correcto (${pct(g.enTema, g.total)}) · sin ruta: ${g.sinRuta} · tema equivocado: ${Array.isArray(g.fuera) ? g.fuera.length : g.fuera}`;
console.log(`\nENRUTADOR (preguntas reales de preguntas-frecuentes.md)`);
console.log(`  Ajuste:  ${linea(e.reales.ajuste)}`);
console.log(`  Control: ${linea(e.reales.control)}`);
// Solo se listan los fallos del grupo de ajuste: los de control no se miran
// para no ajustar las claves a ellos.
for (const f of e.reales.ajuste.fuera) console.log(`  ✗ [${f.id}] "${f.pregunta}" → ${f.eligio.join(" + ")}`);
for (const p of e.reales.ajuste.vacias) console.log(`  ∅ "${p}"`);
console.log(`  Prospectos (demostraciones-y-ventas.md): ${e.prospectos.conRuta}/${e.prospectos.total} encuentran algún nodo (${pct(e.prospectos.conRuta, e.prospectos.total)})`);

console.log(`\nPALABRAS CLAVE`);
console.log(`  Claves compartidas entre nodos: ${e.claves.choques.length}`);
for (const c of e.claves.choques) console.log(`  ⚠ "${c.llave}" en ${c.nodos.join(", ")}`);
if (e.claves.sinClaves.length) console.log(`  Nodos sin claves: ${e.claves.sinClaves.join(", ")}`);
if (e.claves.clavesHuerfanas.length) console.log(`  Claves de nodos que no existen: ${e.claves.clavesHuerfanas.join(", ")}`);

console.log(`\nCONEXIONES`);
console.log(`  Total: ${e.conexiones.total} · rotas: ${e.conexiones.rotas} · nodos sin ninguna conexión: ${e.conexiones.aisladas.length}`);
if (e.conexiones.aisladas.length) console.log(`  Aislados: ${e.conexiones.aisladas.join(", ")}`);
for (const c of e.conexiones.suben)
  console.log(`  ↑ ${c.desde} (${c.de}) → ${c.hacia} (${c.a}): solo se sigue para ${c.a === "I" ? "I" : "C e I"}`);
console.log(`  Preguntas de ejemplo que siguen una conexión: ${e.conexiones.conConexion}/${e.conexiones.muestras}`);

console.log(`\nVELOCIDAD`);
console.log(`  ${e.msPorConsulta.toFixed(2)} ms por consulta sin IA (lee mapa y claves en cada consulta)`);

const m = e.minimos;
console.log(`\nMÍNIMOS (mapa ${m.mapa} %, ajuste ${m.ajuste} %, control ${m.control} %, fragmentos ${m.fragmentos} %, sin conexiones rotas ni nodos aislados)`);
console.log(e.caidas.length ? `  ✗ ${e.caidas.join(" · ")}` : "  ✓ Se cumplen todos");
process.exit(e.caidas.length ? 1 : 0);
