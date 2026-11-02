// Carga un nodo de red/ y deja solo lo que el público puede ver.
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { RAIZ_RED, RANGO, type Publico } from "./indice";

const ETIQUETA = /^- \[(P|C|I)\] /;

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
      if (RANGO[m[1] as Publico] > RANGO[publico]) return [];
      visibles++;
      return [linea.replace(ETIQUETA, "- ")];
    });

    // Una sección con datos etiquetados que quedó vacía se quita entera,
    // para que el público ni siquiera vea que existe.
    if (etiquetadas > 0 && visibles === 0) continue;
    salida.push(lineas.join("\n").trimEnd());
  }

  return salida.join("\n\n").trim();
}
