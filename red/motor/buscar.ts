// Enrutador sin IA: elige el nodo por palabras clave (red/claves.json)
// y devuelve el nodo filtrado para el público. No llama a ningún modelo.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { leerIndice, visiblesPara, RAIZ_RED, RANGO, type Indice, type Publico } from "./indice";
import { cargarNodo, leerProcedimiento, type Procedimiento } from "./nodos";

export type Puntaje = { id: string; puntos: number; claves: string[] };

export type Busqueda = {
  pregunta: string;
  publico: Publico;
  nodos: string[];
  conexion: string | null;
  puntajes: Puntaje[];
  sinEscribir: string[];
  resultado: string;
  // Cuando la pregunta pide hacer algo y hay un procedimiento: ruta y pasos.
  procedimiento: Procedimiento | null;
};

const PUNTOS_POR_PALABRA = 2;
// Una cifra en pesos ("$870") delata una pregunta de precios.
const PUNTOS_CIFRA_EN_PESOS = 3;

// Minúsculas, sin tildes y con un recorte simple de plurales, infinitivos y
// vocal final, para que "recargas", "recargar" y "recargo", o "crear" y
// "creo", se comparen igual.
function raiz(palabra: string) {
  let p = palabra;
  if (p.length > 5 && p.endsWith("es")) p = p.slice(0, -2);
  else if (p.length > 3 && p.endsWith("s")) p = p.slice(0, -1);
  if (p.length > 4 && /[aei]r$/.test(p)) p = p.slice(0, -2);
  else if (p.length > 3 && /[aeiou]$/.test(p)) p = p.slice(0, -1);
  return p;
}

export function palabras(texto: string) {
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

// Puntos mínimos del segundo nodo para seguir la conexión hacia él: dos
// palabras clave o una frase. Con una sola palabra suelta no basta.
const PUNTOS_PARA_CONECTAR = 4;

// "¿Cómo causo…?", "¿dónde se…?", "pasos para…" piden hacer algo; "¿cómo
// funciona…?" o "¿qué es…?" piden una explicación y van al tema.
const PIDE_HACER = /\b(como|donde|pasos?|paso a paso|que hago|que debo hacer|quiero|necesito|se hace|hago)\b/;
const PIDE_EXPLICAR = /\b(como (funciona|decide|aprende|calcula|sabe)|que es|que significa|por que|cuanto|donde (quedan|estan|se guardan))\b/;

export function pideHacer(pregunta: string) {
  const t = pregunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return PIDE_HACER.test(t) && !PIDE_EXPLICAR.test(t);
}

// Entre los procedimientos, el que más puntos sacó con sus propias claves;
// si ninguno puntuó, el primero del tema que ganó.
function elegirProcedimiento(
  puntajes: Puntaje[],
  elegidos: string[],
  indice: Indice,
  publico: Publico,
) {
  const esProc = new Map(indice.nodos.filter((n) => n.procedimiento).map((n) => [n.id, n]));
  const tema = elegidos.find((id) => !esProc.has(id)) ?? null;
  const puntosTema = puntajes.find((p) => p.id === tema)?.puntos ?? 0;
  const mejor = puntajes.find((p) => esProc.has(p.id));
  if (mejor && (!tema || esProc.get(mejor.id)!.tema === tema || mejor.puntos >= puntosTema))
    return mejor.id;
  if (!tema) return null;
  const delTema = indice.nodos.find(
    (n) => n.procedimiento && n.tema === tema && RANGO[n.publico] <= RANGO[publico],
  );
  return delTema?.id ?? null;
}

export function buscar(pregunta: string, publico: Publico): Busqueda {
  const indice = leerIndice();
  const { conexiones } = indice;
  const hacer = pideHacer(pregunta);
  // Si la pregunta no pide hacer algo, un procedimiento pesa un tercio: así
  // "¿cuánto cuesta causar una factura?" va a precios y no a los pasos.
  const procedimientos = new Set(indice.nodos.filter((n) => n.procedimiento).map((n) => n.id));
  const puntajes = puntuar(pregunta, publico)
    .map((p) => (hacer || !procedimientos.has(p.id) ? p : { ...p, puntos: p.puntos / 3 }))
    .sort((a, b) => b.puntos - a.puntos);
  const conecta = (desde: string, hacia: string) =>
    conexiones.some((c) => (c.desde === desde || c.desde === "*") && c.hacia === hacia);

  const [primero, segundo] = puntajes;
  let nodos: string[] = [];
  let conexion: string | null = null;

  if (primero && segundo && segundo.puntos === primero.puntos) {
    // Empate: si el mapa conecta los dos, se responde desde el nodo de
    // origen y se sigue la conexión; si no, se devuelven los dos.
    if (conecta(primero.id, segundo.id)) [nodos, conexion] = [[primero.id], segundo.id];
    else if (conecta(segundo.id, primero.id)) [nodos, conexion] = [[segundo.id], primero.id];
    else nodos = [primero.id, segundo.id];
  } else if (primero) {
    nodos = [primero.id];
    // La pregunta también toca el segundo tema y el mapa lo permite.
    if (segundo && segundo.puntos >= PUNTOS_PARA_CONECTAR && conecta(primero.id, segundo.id))
      conexion = segundo.id;
  }

  // Si la pregunta no pide hacer algo y solo puntuaron procedimientos, se
  // responde desde su tema y el procedimiento llega como conexión.
  const nodoDe = (id: string) => indice.nodos.find((n) => n.id === id);
  const principal = nodos.length === 1 ? nodoDe(nodos[0]) : undefined;
  if (!hacer && principal?.procedimiento && principal.tema) {
    [nodos, conexion] = [[principal.tema], principal.id];
  }

  // Si la pregunta pide hacer algo, se responde con el procedimiento.
  if (hacer) {
    const proc = elegirProcedimiento(puntajes, [...nodos, ...(conexion ? [conexion] : [])], indice, publico);
    if (proc) [nodos, conexion] = [[proc], null];
  }

  const pedidos = [...nodos, ...(conexion ? [conexion] : [])];
  const textos = pedidos.map((id) => ({ id, texto: cargarNodo(id, publico) }));
  const sinEscribir = textos.filter((t) => !t.texto).map((t) => t.id);
  const resultado = textos
    .filter((t) => t.texto)
    .map((t) => `<nodo id="${t.id}">\n${t.texto}\n</nodo>`)
    .join("\n\n");

  const procedimiento = nodos.length === 1 ? leerProcedimiento(nodos[0], publico) : null;
  return { pregunta, publico, nodos, conexion, puntajes, sinEscribir, resultado, procedimiento };
}
