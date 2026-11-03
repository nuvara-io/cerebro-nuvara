// Lectura de los archivos de red/ con caché: el enrutador consulta el mapa,
// las claves y los nodos en cada pregunta, y el validador hace miles de
// preguntas seguidas. Se vuelve a leer solo si el archivo cambió.
import { readFileSync, statSync } from "node:fs";

const cache = new Map<string, { marca: number; texto: string }>();

export function leerTexto(ruta: string): string {
  const marca = statSync(ruta).mtimeMs;
  const previo = cache.get(ruta);
  if (previo && previo.marca === marca) return previo.texto;
  const texto = readFileSync(ruta, "utf8");
  cache.set(ruta, { marca, texto });
  return texto;
}

// Cambia cuando se edita un archivo o cuando se crea o borra uno en la carpeta.
export function marcaDe(...rutas: string[]) {
  return rutas.map((r) => statSync(r).mtimeMs).join("|");
}
