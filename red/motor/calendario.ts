// Valida las propuestas del calendario de marketing antes de subirlas.
// La revisión, la aprobación y las notas viven en el calendario, no aquí.
// Uso: bun run red:calendario            valida red/calendario.json
//      bun run red:calendario --lotes d  además deja un JSON por fila en d/
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type Fila = Record<string, unknown> & {
  id: string;
  linea: string;
  fecha: string;
  pieza: string;
  copy: string;
  nota: string;
  archivo: string;
  estadoPieza: string;
  relaciones: string[];
};

const raiz = join(import.meta.dir, "..", "..");
const filas: Fila[] = JSON.parse(readFileSync(join(raiz, "red/calendario.json"), "utf8"));

const LINEAS: Record<string, string[]> = {
  Pauta: ["titulo", "objetivo", "presupuesto", "codigo", "destino"],
  Redes: ["hora", "archivo"],
  SEO: ["url", "palabraClave", "intencion", "tituloSeo", "metaDescripcion"],
};
const ESTADOS = ["porhacer", "corte", "bloqueada", "lista"];
const MODULOS = ["Causación", "Facturación electrónica", "RADIAN", "Nómina", "Tesorería", "App móvil", "General"];
const COMUNES = ["fecha", "hora", "orden", "pieza", "formato", "canales", "tema", "porque", "copy", "estadoPieza"];
const FESTIVOS = ["2026-11-16", "2026-12-08", "2026-12-25", "2027-01-01", "2027-01-11"];

// Lo que no se dice, según revisar-pieza-antes-de-publicar y mensajes-y-afirmaciones.
const PROHIBIDO: [RegExp, string][] = [
  [/Núvara|Nuvara|NUVARA/, "el nombre va en minúscula y con tilde"],
  [/\bIA\b/, "la sigla sola: se escribe inteligencia artificial"],
  [/\bdemo\b/i, "se dice demostración en vivo"],
  [/automatizamos/i, "se dice eliminas la carga operativa"],
  [/revolucionari/i, "palabra prohibida"],
  [/\busted\b|\bcontactanos\b/i, "siempre de tú"],
  [/nuvicoin/i, "se dice créditos"],
  [/\bsistema\b/i, "se dice plataforma"],
  [/se acumula|\b(80|88|90) ?%/i, "afirmación o cifra que no se puede publicar"],
  [/sin intervención|sin revisión|núvara decide/i, "quita el control al usuario"],
];

const errores: string[] = [];
const avisos: string[] = [];
const ids = new Set(filas.map((f) => f.id));
if (ids.size !== filas.length) errores.push("hay ids repetidos");

for (const f of filas) {
  const mal = (m: string) => errores.push(`${f.id}: ${m}`);
  const campos = LINEAS[f.linea];
  if (!campos) {
    mal(`línea desconocida "${f.linea}"`);
    continue;
  }
  for (const c of [...COMUNES, ...campos]) if (f[c] === undefined || f[c] === "") mal(`falta ${c}`);
  if (!MODULOS.includes(String(f.modulo))) mal(`módulo desconocido "${f.modulo}"`);
  if (!ESTADOS.includes(f.estadoPieza)) mal(`estado de pieza desconocido "${f.estadoPieza}"`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(f.fecha)) mal(`fecha inválida "${f.fecha}"`);
  if (FESTIVOS.includes(f.fecha)) mal(`cae en festivo (${f.fecha})`);
  const dia = new Date(`${f.fecha}T12:00:00`).getDay();
  if (dia === 0 || dia === 6) avisos.push(`${f.id}: cae en fin de semana`);
  for (const r of f.relaciones) if (!ids.has(r)) mal(`relación a "${r}", que no existe`);

  const publico = [f.pieza, f.copy, f.titulo, f.tituloSeo, f.metaDescripcion].filter(Boolean).join("\n");
  for (const [re, motivo] of PROHIBIDO) if (re.test(publico)) mal(`${motivo} (${re.source})`);
  if (/\bclientes?\b/i.test(publico.replace(/tus clientes/gi, "")) && !/sus clientes/i.test(publico))
    avisos.push(`${f.id}: revisa la palabra cliente`);

  if (f.linea === "Pauta" && /\bNuvi\b/.test(f.copy)) mal("Nuvi no va en anuncios");
  if (f.linea === "SEO") {
    if (String(f.tituloSeo).length > 60) mal(`título de ${String(f.tituloSeo).length} caracteres (máximo 60)`);
    if (String(f.metaDescripcion).length > 155) mal(`descripción de ${String(f.metaDescripcion).length} caracteres (máximo 155)`);
  }
  if (f.linea !== "SEO" && f.estadoPieza === "lista" && !existsSync(join(raiz, f.archivo)))
    avisos.push(`${f.id}: no está el archivo ${f.archivo} (out/ no va en git)`);
}

const claves = new Map<string, string>();
for (const f of filas.filter((x) => x.linea === "SEO")) {
  const k = String(f.palabraClave);
  if (claves.has(k)) errores.push(`${f.id}: compite con ${claves.get(k)} por "${k}"`);
  claves.set(k, f.id);
}

const cuenta = (l: string) => filas.filter((f) => f.linea === l).length;
console.log(`${filas.length} propuestas: ${cuenta("Pauta")} de pauta, ${cuenta("Redes")} de redes, ${cuenta("SEO")} de SEO`);
for (const a of avisos) console.log(`  aviso  ${a}`);
for (const e of errores) console.log(`  ✗ ${e}`);

const i = process.argv.indexOf("--lotes");
if (i > 0 && !errores.length) {
  const dir = process.argv[i + 1];
  mkdirSync(dir, { recursive: true });
  for (const { id, ...f } of filas) writeFileSync(join(dir, `${id}.json`), JSON.stringify(f));
  console.log(`Lotes en ${dir}: solo campos editoriales`);
}
process.exit(errores.length ? 1 : 0);
