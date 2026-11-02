// Lee red/mapa.md y arma el índice que usa el enrutador: nodos y conexiones.
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

export type Publico = "P" | "C" | "I";

export const RANGO: Record<Publico, number> = { P: 0, C: 1, I: 2 };

export type NodoIndice = {
  id: string;
  publico: Publico;
  cuando: string;
  transversal: boolean;
  escrito: boolean;
  // Los procedimientos (capa 4) dicen cómo se hace algo y cuelgan de un tema.
  procedimiento: boolean;
  tema?: string;
};

export type Conexion = { desde: string; hacia: string; cuando: string };

export type Indice = {
  nodos: NodoIndice[];
  conexiones: Conexion[];
};

export const RAIZ_RED = join(import.meta.dir, "..");

const celdas = (fila: string) =>
  fila
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());

const ids = (celda: string) =>
  [...celda.matchAll(/`([a-z0-9-]+)`/g)].map((m) => m[1]);

export function leerIndice(): Indice {
  const mapa = readFileSync(join(RAIZ_RED, "mapa.md"), "utf8");
  const nodos: NodoIndice[] = [];
  const conexiones: Conexion[] = [];
  let seccion = "";

  for (const linea of mapa.split("\n")) {
    if (linea.startsWith("## ")) {
      seccion = linea.slice(3);
      continue;
    }
    if (!linea.startsWith("| ")) continue;

    if (seccion.startsWith("Capa")) {
      const [nodo, publico, cuando, tema] = celdas(linea);
      const [id] = ids(nodo);
      if (!id) continue;
      const procedimiento = seccion.startsWith("Capa 4");
      const padre = procedimiento ? ids(tema ?? "")[0] : undefined;
      nodos.push({
        id,
        publico: publico.charAt(0) as Publico,
        cuando,
        transversal: seccion.startsWith("Capa 0"),
        escrito: existsSync(join(RAIZ_RED, `${id}.md`)),
        procedimiento,
        tema: padre,
      });
      // El tema queda conectado con su procedimiento sin escribirlo en el mapa.
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

  return { nodos, conexiones };
}

export function visiblesPara(indice: Indice, publico: Publico) {
  return indice.nodos.filter(
    (n) => !n.transversal && RANGO[n.publico] <= RANGO[publico],
  );
}
