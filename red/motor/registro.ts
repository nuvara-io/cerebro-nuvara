// Registro de preguntas que la red no supo ubicar: sin tema o en empate entre
// dos temas sin conexión. Sirve para saber qué neurona o qué clave falta,
// guiado por lo que la gente pregunta de verdad.
// Se guarda solo en local (red/registro/ está fuera de git): las preguntas
// pueden traer datos de quien escribe.
// Uso: bun run red:sin-tema
import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Busqueda } from "./buscar";
import { RAIZ_RED } from "./indice";

const CARPETA = join(RAIZ_RED, "registro");
const ARCHIVO = join(CARPETA, "sin-tema.jsonl");

export type Registro = {
  fecha: string;
  pregunta: string;
  publico: string;
  motivo: "sin tema" | "empate" | "fuera de tema";
  nodos: string[];
  claves: string[];
};

export function registrar(b: Busqueda) {
  if (b.nodos.length && !b.empate) return;
  const r: Registro = {
    fecha: new Date().toISOString(),
    pregunta: b.pregunta,
    publico: b.publico,
    motivo: b.nodos.length ? "empate" : b.fueraDeTema ? "fuera de tema" : "sin tema",
    nodos: b.nodos,
    claves: b.puntajes.slice(0, 3).flatMap((p) => p.claves),
  };
  mkdirSync(CARPETA, { recursive: true });
  appendFileSync(ARCHIVO, JSON.stringify(r) + "\n");
}

export type Agrupado = Registro & { veces: number };

// Agrupa por pregunta (sin tildes ni mayúsculas): la más repetida primero.
export function leerRegistro(): Agrupado[] {
  if (!existsSync(ARCHIVO)) return [];
  const llave = (t: string) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[¿?¡!.,]/g, "").trim();
  const grupos = new Map<string, Agrupado>();
  for (const linea of readFileSync(ARCHIVO, "utf8").split("\n")) {
    if (!linea.trim()) continue;
    const r = JSON.parse(linea) as Registro;
    const g = grupos.get(llave(r.pregunta));
    grupos.set(llave(r.pregunta), g ? { ...r, veces: g.veces + 1 } : { ...r, veces: 1 });
  }
  return [...grupos.values()].sort((a, b) => b.veces - a.veces || b.fecha.localeCompare(a.fecha));
}

if (import.meta.main) {
  const lista = leerRegistro();
  if (!lista.length) console.log("Todavía no hay preguntas sin tema ni empates registrados.");
  for (const r of lista)
    console.log(`${String(r.veces).padStart(3)}× [${r.publico}] ${r.motivo === "empate" ? `empate ${r.nodos.join(" / ")}` : r.motivo}  ${r.pregunta}`);
}
