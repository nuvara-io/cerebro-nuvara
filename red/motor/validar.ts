// Revisa la salud de la red sin IA: si el enrutador acierta, dónde chocan
// las palabras clave y cómo están las conexiones del mapa.
// Uso: bun run red:validar
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buscar, palabras } from "./buscar";
import { leerIndice, RAIZ_RED, RANGO, type Publico } from "./indice";

const indice = leerIndice();
const enrutables = indice.nodos.filter((n) => !n.transversal);
const claves: Record<string, string[]> = JSON.parse(
  readFileSync(join(RAIZ_RED, "claves.json"), "utf8"),
);

// 1. Precisión del enrutador con las preguntas de ejemplo del mapa
//    (las que van entre comillas en "Cuándo se activa").
type Fallo = { id: string; pregunta: string; eligio: string[] };
let total = 0;
let aciertos = 0;
let empates = 0;
const fallos: Fallo[] = [];
const porNodo: Record<string, { total: number; ok: number }> = {};

for (const n of enrutables) {
  const preguntas = [...n.cuando.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  porNodo[n.id] = { total: preguntas.length, ok: 0 };
  // Se pregunta con el público más amplio que ve el nodo.
  const publico: Publico = n.publico;
  for (const pregunta of preguntas) {
    total++;
    const b = buscar(pregunta, publico);
    if (b.nodos.length > 1) empates++;
    if (b.nodos.length === 1 && b.nodos[0] === n.id) {
      aciertos++;
      porNodo[n.id].ok++;
    } else fallos.push({ id: n.id, pregunta, eligio: b.nodos });
  }
}

// 1b. Preguntas reales (anonimizadas) de preguntas-frecuentes.md. No se
//     escribieron pensando en las claves, así que miden mejor. Cada sección
//     acepta los nodos de su tema.
const TEMA: Record<string, string[]> = {
  "Configuración inicial": ["onboarding", "usuarios-roles-y-empresas", "conectar-dian", "conectar-correo"],
  "DIAN y correo": ["conectar-dian", "conectar-correo", "importar-facturas", "archivo-y-comparacion-dian", "papelera-y-limpieza"],
  "Causación y revisión": ["causar-y-revisar", "correcciones-y-aprendizaje", "aprobacion-en-bloque", "notas-credito-y-documento-soporte", "papelera-y-limpieza", "creditos-y-recargas"],
  "Retenciones e impuestos": ["proveedores-y-retenciones", "ventas-y-autorretencion", "glosario", "notas-credito-y-documento-soporte"],
  "Centros de costo y reglas": ["reglas-y-centros-de-costo", "correcciones-y-aprendizaje"],
  "Productos e inventario": ["inventario-y-productos"],
  "Exportación y software contable": ["exportar-siigo", "exportar-world-office", "integraciones", "inventario-y-productos"],
  "Ventas, nómina y otros módulos": ["ventas-y-autorretencion", "nomina", "facturacion-electronica-y-radian", "conciliacion-bancaria", "modulos-disponibles", "facturas-del-exterior", "notas-credito-y-documento-soporte"],
  "Precios y comercial": ["precios", "creditos-y-recargas", "seguridad-y-soporte"],
  "Créditos y soporte": ["creditos-y-recargas", "precios", "seguridad-y-soporte", "problemas-conocidos"],
};
// Una de cada tres preguntas queda de control: no se usa para ajustar las
// claves y por eso mide si el ajuste sirve con preguntas nuevas.
const conocimiento = (archivo: string) =>
  readFileSync(join(RAIZ_RED, "..", "conocimiento", archivo), "utf8");
type Grupo = { total: number; enTema: number; sinRuta: number; fuera: Fallo[]; vacias: string[] };
const grupo = (): Grupo => ({ total: 0, enTema: 0, sinRuta: 0, fuera: [], vacias: [] });
const reales = { ajuste: grupo(), control: grupo() };
let seccion = "";
let n = 0;
for (const linea of conocimiento("preguntas-frecuentes.md").split("\n")) {
  if (linea.startsWith("## ")) seccion = linea.slice(3).trim();
  const m = linea.match(/^\*\*(.+\?)\*\*$/);
  if (!m || !TEMA[seccion]) continue;
  const g = n++ % 3 === 2 ? reales.control : reales.ajuste;
  const b = buscar(m[1], "I");
  g.total++;
  if (!b.nodos.length) { g.sinRuta++; g.vacias.push(m[1]); continue; }
  // Cuenta como acierto si el tema llega por el nodo o por la conexión seguida.
  if ([...b.nodos, b.conexion].some((id) => id && TEMA[seccion].includes(id))) g.enTema++;
  else g.fuera.push({ id: seccion, pregunta: m[1], eligio: b.nodos });
}

// 1c. Preguntas de prospectos (demostraciones-y-ventas.md): nunca se usaron
//     para ajustar. Sin tema asignado, solo mide cuántas encuentran algún nodo.
const prospectos = { total: 0, conRuta: 0 };
let enPreguntas = false;
for (const linea of conocimiento("demostraciones-y-ventas.md").split("\n")) {
  if (linea.startsWith("## ")) enPreguntas = linea.startsWith("## Preguntas frecuentes de prospectos");
  const m = enPreguntas && linea.match(/\*\*(¿[^*]+\?)\*\*/);
  if (!m) continue;
  prospectos.total++;
  if (buscar(m[1], "C").nodos.length) prospectos.conRuta++;
}

// 2. Choques: la misma raíz usada como clave en varios nodos.
const duenos = new Map<string, Set<string>>();
for (const [id, lista] of Object.entries(claves)) {
  if (id.startsWith("_")) continue;
  for (const c of lista) {
    const llave = palabras(c).join(" ");
    if (!duenos.has(llave)) duenos.set(llave, new Set());
    duenos.get(llave)!.add(id);
  }
}
const choques = [...duenos].filter(([, s]) => s.size > 1);

// 3. Nodos sin claves o con claves que no existen en el mapa.
const ids = new Set(indice.nodos.map((n) => n.id));
const sinClaves = enrutables.filter((n) => !(claves[n.id]?.length)).map((n) => n.id);
const clavesHuerfanas = Object.keys(claves).filter((k) => !k.startsWith("_") && !ids.has(k));

// 4. Conexiones.
const grado = new Map<string, number>(enrutables.map((n) => [n.id, 0]));
for (const c of indice.conexiones) {
  if (c.desde !== "*") grado.set(c.desde, (grado.get(c.desde) ?? 0) + 1);
  grado.set(c.hacia, (grado.get(c.hacia) ?? 0) + 1);
}
const aisladas = [...grado].filter(([, g]) => g === 0).map(([id]) => id);
const rotas = indice.conexiones.filter(
  (c) => (c.desde !== "*" && !ids.has(c.desde)) || !ids.has(c.hacia),
);
const publicoDe = new Map(indice.nodos.map((n) => [n.id, n.publico]));
// Una conexión que sube de público (P → C) solo sirve a comerciales e internos.
const suben = indice.conexiones.filter(
  (c) => c.desde !== "*" && RANGO[publicoDe.get(c.hacia)!] > RANGO[publicoDe.get(c.desde)!],
);

// 5. Velocidad del enrutador sin IA.
const muestras = enrutables.flatMap((n) => [...n.cuando.matchAll(/"([^"]+)"/g)].map((m) => m[1]));
const inicio = performance.now();
for (let i = 0; i < 20; i++) for (const p of muestras) buscar(p, "I");
const msPorConsulta = (performance.now() - inicio) / (20 * muestras.length);

// ---------- Informe ----------
const pct = (a: number, b: number) => `${Math.round((100 * a) / b)} %`;
console.log("ENRUTADOR (preguntas de ejemplo del mapa)");
console.log(`  Aciertos exactos: ${aciertos}/${total} (${pct(aciertos, total)}) · empates: ${empates}`);
const flojos = Object.entries(porNodo).filter(([, v]) => v.total && v.ok < v.total);
console.log(`  Nodos con algún fallo: ${flojos.length}/${enrutables.length}`);
for (const f of fallos)
  console.log(`  ✗ ${f.id.padEnd(34)} "${f.pregunta}" → ${f.eligio.join(" + ") || "(ninguno)"}`);

const linea = (g: Grupo) =>
  `${g.enTema}/${g.total} en el tema correcto (${pct(g.enTema, g.total)}) · sin ruta: ${g.sinRuta} · tema equivocado: ${g.fuera.length}`;
console.log(`\nENRUTADOR (preguntas reales de preguntas-frecuentes.md)`);
console.log(`  Ajuste:  ${linea(reales.ajuste)}`);
console.log(`  Control: ${linea(reales.control)}`);
// Solo se listan los fallos del grupo de ajuste: los de control no se miran
// para no ajustar las claves a ellos.
for (const f of reales.ajuste.fuera)
  console.log(`  ✗ [${f.id}] "${f.pregunta}" → ${f.eligio.join(" + ")}`);
for (const p of reales.ajuste.vacias) console.log(`  ∅ "${p}"`);
console.log(`  Prospectos (demostraciones-y-ventas.md): ${prospectos.conRuta}/${prospectos.total} encuentran algún nodo (${pct(prospectos.conRuta, prospectos.total)})`);

console.log(`\nPALABRAS CLAVE`);
console.log(`  Claves compartidas entre nodos: ${choques.length}`);
for (const [llave, s] of choques) console.log(`  ⚠ "${llave}" en ${[...s].join(", ")}`);
if (sinClaves.length) console.log(`  Nodos sin claves: ${sinClaves.join(", ")}`);
if (clavesHuerfanas.length) console.log(`  Claves de nodos que no existen: ${clavesHuerfanas.join(", ")}`);

console.log(`\nCONEXIONES`);
console.log(`  Total: ${indice.conexiones.length} · rotas: ${rotas.length} · nodos sin ninguna conexión: ${aisladas.length}`);
if (aisladas.length) console.log(`  Aislados: ${aisladas.join(", ")}`);
for (const c of suben)
  console.log(`  ↑ ${c.desde} (${publicoDe.get(c.desde)}) → ${c.hacia} (${publicoDe.get(c.hacia)}): solo se sigue para ${publicoDe.get(c.hacia) === "I" ? "I" : "C e I"}`);
const conConexion = muestras.filter((p) => buscar(p, "I").conexion).length;
console.log(`  Preguntas de ejemplo que siguen una conexión: ${conConexion}/${muestras.length}`);

console.log(`\nVELOCIDAD`);
console.log(`  ${msPorConsulta.toFixed(2)} ms por consulta sin IA (lee mapa y claves en cada consulta)`);

// ---------- Mínimos ----------
// Si un cambio en las claves o en el mapa baja de aquí, el validador falla.
const MINIMOS = { mapa: 90, ajuste: 90, control: 70 };
const tasa = (a: number, b: number) => (100 * a) / b;
const caidas = [
  tasa(aciertos, total) < MINIMOS.mapa && `mapa ${pct(aciertos, total)} < ${MINIMOS.mapa} %`,
  tasa(reales.ajuste.enTema, reales.ajuste.total) < MINIMOS.ajuste && `ajuste ${pct(reales.ajuste.enTema, reales.ajuste.total)} < ${MINIMOS.ajuste} %`,
  tasa(reales.control.enTema, reales.control.total) < MINIMOS.control && `control ${pct(reales.control.enTema, reales.control.total)} < ${MINIMOS.control} %`,
  rotas.length > 0 && `${rotas.length} conexiones rotas`,
  aisladas.length > 0 && `${aisladas.length} nodos sin conexiones`,
].filter(Boolean);
console.log(`
MÍNIMOS (mapa ${MINIMOS.mapa} %, ajuste ${MINIMOS.ajuste} %, control ${MINIMOS.control} %, sin conexiones rotas ni nodos aislados)`);
console.log(caidas.length ? `  ✗ ${caidas.join(" · ")}` : "  ✓ Se cumplen todos");
process.exit(caidas.length ? 1 : 0);
