// Lee red/mapa.md y arma el índice que usa el enrutador: nodos y conexiones.
import { existsSync } from "node:fs";
import { leerTexto, marcaDe } from "./archivos";
import { join } from "node:path";

export type Publico = "P" | "C" | "I";

export const RANGO: Record<Publico, number> = { P: 0, C: 1, I: 2 };

export type NodoIndice = {
  id: string;
  publico: Publico;
  cuando: string;
  transversal: boolean;
  escrito: boolean;
  // Una neurona (procedimiento) dice cómo se hace algo y cuelga de un núcleo.
  procedimiento: boolean;
  tema?: string;
  // Red neuronal (módulo) a la que pertenece; las siempre activas no tienen.
  red?: string;
};

export type RedNeuronal = { id: string; nombre: string; descripcion: string };

export type Conexion = { desde: string; hacia: string; cuando: string };

export type Indice = {
  nodos: NodoIndice[];
  conexiones: Conexion[];
  redes: RedNeuronal[];
};

const slug = (texto: string) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const RAIZ_RED = join(import.meta.dir, "..");

const celdas = (fila: string) =>
  fila
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());

const ids = (celda: string) =>
  [...celda.matchAll(/`([a-z0-9-]+)`/g)].map((m) => m[1]);

let indiceGuardado: { marca: string; indice: Indice } | null = null;

// El índice se rearma solo si cambió el mapa o se creó o borró un nodo.
export function leerIndice(): Indice {
  const marca = marcaDe(join(RAIZ_RED, "mapa.md"), RAIZ_RED);
  if (indiceGuardado?.marca === marca) return indiceGuardado.indice;
  const indice = armarIndice();
  indiceGuardado = { marca, indice };
  return indice;
}

function armarIndice(): Indice {
  const mapa = leerTexto(join(RAIZ_RED, "mapa.md"));
  const nodos: NodoIndice[] = [];
  const conexiones: Conexion[] = [];
  const redes: RedNeuronal[] = [];
  let seccion = "";
  let red: RedNeuronal | null = null;
  let esperandoDescripcion = false;

  for (const linea of mapa.split("\n")) {
    if (linea.startsWith("## ")) {
      seccion = linea.slice(3);
      const nombre = seccion.match(/^Red neuronal: (.+)$/)?.[1];
      red = nombre ? { id: slug(nombre), nombre, descripcion: "" } : null;
      if (red) redes.push(red);
      esperandoDescripcion = Boolean(red);
      continue;
    }
    // La primera línea de texto bajo "Red neuronal" es su descripción.
    if (red && esperandoDescripcion && linea.trim() && !linea.startsWith("|")) {
      red.descripcion = linea.trim();
      esperandoDescripcion = false;
      continue;
    }
    if (!linea.startsWith("| ")) continue;

    if (seccion === "Siempre activas") {
      const [nodo, publico, contenido] = celdas(linea);
      const [id] = ids(nodo);
      if (!id) continue;
      nodos.push({
        id,
        publico: publico.charAt(0) as Publico,
        cuando: contenido,
        transversal: true,
        escrito: existsSync(join(RAIZ_RED, `${id}.md`)),
        procedimiento: false,
      });
    } else if (red) {
      const [nodo, tipo, publico, cuando, nucleo] = celdas(linea);
      const [id] = ids(nodo);
      if (!id) continue;
      const procedimiento = tipo.startsWith("neurona");
      const padre = procedimiento ? ids(nucleo ?? "")[0] : undefined;
      nodos.push({
        id,
        publico: publico.charAt(0) as Publico,
        cuando,
        transversal: false,
        escrito: existsSync(join(RAIZ_RED, `${id}.md`)),
        procedimiento,
        tema: padre,
        red: red.id,
      });
      // El núcleo queda conectado con su neurona sin escribirlo en el mapa.
      if (padre) conexiones.push({ desde: padre, hacia: id, cuando: "Cómo se hace" });
    } else if (seccion.startsWith("Conexiones")) {
      const [desde, hacia, cuando] = celdas(linea);
      const destinos = ids(hacia);
      // "cualquiera" → glosario: se resuelve al validar la conexión.
      const origenes = desde === "cualquiera" ? ["*"] : ids(desde);
      for (const d of origenes)
        for (const h of destinos) conexiones.push({ desde: d, hacia: h, cuando });
    }
  }

  return { nodos, conexiones, redes };
}

export function visiblesPara(indice: Indice, publico: Publico) {
  return indice.nodos.filter(
    (n) => !n.transversal && RANGO[n.publico] <= RANGO[publico],
  );
}
