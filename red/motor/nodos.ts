// Carga un nodo de red/ y deja solo lo que el público puede ver.
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { RAIZ_RED, RANGO, type Publico } from "./indice";

// Viñetas ("- [P] …") y pasos numerados ("1. [P] …").
const ETIQUETA = /^(- |\d+\. )\[(P|C|I)\] /;

// Secciones sin etiquetas que solo ven comerciales e internos.
const SOLO_EQUIPO = /^Descartado/;

export function cargarNodo(id: string, publico: Publico): string | null {
  const ruta = join(RAIZ_RED, `${id}.md`);
  if (!existsSync(ruta)) return null;

  const texto = readFileSync(ruta, "utf8").replace(/^---\n[\s\S]*?\n---\n/, "");
  const secciones = texto.split(/\n(?=## )/);
  const salida: string[] = [];

  for (const seccion of secciones) {
    const titulo = seccion.startsWith("## ") ? seccion.slice(3, seccion.indexOf("\n")) : "";
    if (SOLO_EQUIPO.test(titulo) && publico === "P") continue;

    let etiquetadas = 0;
    let visibles = 0;
    const lineas = seccion.split("\n").flatMap((linea) => {
      const m = linea.match(ETIQUETA);
      if (!m) return [linea];
      etiquetadas++;
      if (RANGO[m[2] as Publico] > RANGO[publico]) return [];
      visibles++;
      return [linea.replace(ETIQUETA, "$1")];
    });

    // Una sección con datos etiquetados que quedó vacía se quita entera,
    // para que el público ni siquiera vea que existe.
    if (etiquetadas > 0 && visibles === 0) continue;
    salida.push(lineas.join("\n").trimEnd());
  }

  return salida.join("\n\n").trim();
}

export type Procedimiento = {
  id: string;
  titulo: string;
  tema: string | null;
  ruta: string[];
  url: string | null;
  estado: string;
  siguiente: string | null;
  antes: string[];
  pasos: string[];
  resultado: string[];
  siFalla: string[];
};

// Lee la cabecera de un nodo: "clave: valor" y listas "[a, b]".
function cabecera(id: string): Record<string, string> {
  const texto = readFileSync(join(RAIZ_RED, `${id}.md`), "utf8");
  const bloque = texto.match(/^---\n([\s\S]*?)\n---\n/)?.[1] ?? "";
  return Object.fromEntries(
    bloque
      .split("\n")
      .map((l) => l.match(/^([a-z]+):\s*(.*)$/))
      .filter((m): m is RegExpMatchArray => Boolean(m))
      .map((m) => [m[1], m[2].trim()]),
  );
}

// Un procedimiento en datos, ya filtrado para el público: lo usan el chat
// y cualquier agente que necesite la ruta y los pasos.
export function leerProcedimiento(id: string, publico: Publico): Procedimiento | null {
  const texto = cargarNodo(id, publico);
  if (!texto) return null;
  const c = cabecera(id);
  if (c.tipo !== "procedimiento") return null;

  const items = (seccion: string) => {
    const bloque = texto.split(/\n(?=## )/).find((s) => s.startsWith(`## ${seccion}`)) ?? "";
    return bloque
      .split("\n")
      .filter((l) => /^(- |\d+\. )/.test(l))
      .map((l) => l.replace(/^(- |\d+\. )/, ""));
  };
  const lista = (v = "") => v.replace(/^\[|\]$/g, "").split(",").map((x) => x.trim()).filter(Boolean);

  return {
    id,
    titulo: c.titulo ?? id,
    tema: c.tema || null,
    ruta: lista(c.ruta),
    url: c.url || null,
    estado: c.estado ?? "sin verificar",
    siguiente: c.siguiente || null,
    antes: items("Antes de empezar"),
    pasos: items("Pasos"),
    resultado: items("Resultado"),
    siFalla: items("Si algo falla"),
  };
}
