// Enrutador sin IA: elige el nodo por palabras clave (red/claves.json)
// y devuelve el nodo filtrado para el público. No llama a ningún modelo.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { leerIndice, visiblesPara, RAIZ_RED, type Publico } from "./indice";
import { cargarNodo } from "./nodos";

export type Puntaje = { id: string; puntos: number; claves: string[] };

export type Busqueda = {
  pregunta: string;
  publico: Publico;
  nodos: string[];
  puntajes: Puntaje[];
  sinEscribir: string[];
  resultado: string;
};

const PUNTOS_POR_PALABRA = 2;
// Una cifra en pesos ("$870") delata una pregunta de precios.
const PUNTOS_CIFRA_EN_PESOS = 3;

// Minúsculas, sin tildes y con un recorte simple de plurales y vocal final,
// para que "recargas", "mínima" y "mínimo" se comparen igual.
function raiz(palabra: string) {
  let p = palabra;
  if (p.length > 5 && p.endsWith("es")) p = p.slice(0, -2);
  else if (p.length > 3 && p.endsWith("s")) p = p.slice(0, -1);
  if (p.length > 4 && /[aeiou]$/.test(p)) p = p.slice(0, -1);
  return p;
}

function palabras(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map(raiz);
}

function contiene(texto: string[], frase: string[]) {
  for (let i = 0; i + frase.length <= texto.length; i++)
    if (frase.every((p, j) => texto[i + j] === p)) return true;
  return false;
}

function leerClaves(): Record<string, string[]> {
  const { _como, ...claves } = JSON.parse(
    readFileSync(join(RAIZ_RED, "claves.json"), "utf8"),
  );
  void _como;
  return claves;
}

export function puntuar(pregunta: string, publico: Publico): Puntaje[] {
  const claves = leerClaves();
  const texto = palabras(pregunta);
  const visibles = visiblesPara(leerIndice(), publico).map((n) => n.id);

  return visibles
    .map((id) => {
      // "recarga" y "recargo" tienen la misma raíz: cuentan una sola vez.
      const vistas = new Set<string>();
      const encontradas = (claves[id] ?? []).filter((c) => {
        const raices = palabras(c);
        const llave = raices.join(" ");
        if (vistas.has(llave) || !contiene(texto, raices)) return false;
        vistas.add(llave);
        return true;
      });
      // Las palabras cortas ("de", "la", "me") ayudan a encajar la frase
      // pero no suman puntos.
      let puntos = encontradas.reduce(
        (s, c) => s + PUNTOS_POR_PALABRA * palabras(c).filter((p) => p.length > 2).length,
        0,
      );
      if (id === "precios" && /\$\s?\d/.test(pregunta)) {
        puntos += PUNTOS_CIFRA_EN_PESOS;
        encontradas.push("cifra en pesos");
      }
      return { id, puntos, claves: encontradas };
    })
    .filter((p) => p.puntos > 0)
    .sort((a, b) => b.puntos - a.puntos);
}

export function buscar(pregunta: string, publico: Publico): Busqueda {
  const puntajes = puntuar(pregunta, publico);
  const mejor = puntajes[0]?.puntos ?? 0;
  // Gana el de más puntos; si hay empate arriba, se devuelven los dos.
  const nodos = puntajes
    .filter((p) => p.puntos === mejor)
    .slice(0, 2)
    .map((p) => p.id);

  const textos = nodos.map((id) => ({ id, texto: cargarNodo(id, publico) }));
  const sinEscribir = textos.filter((t) => !t.texto).map((t) => t.id);
  const resultado = textos
    .filter((t) => t.texto)
    .map((t) => `<nodo id="${t.id}">\n${t.texto}\n</nodo>`)
    .join("\n\n");

  return { pregunta, publico, nodos, puntajes, sinEscribir, resultado };
}
