// Carga un nodo de red/ y deja solo lo que el público puede ver.
import { existsSync } from "node:fs";
import { leerTexto } from "./archivos";
import { join } from "node:path";
import { RAIZ_RED, RANGO, type Publico } from "./indice";
import { palabras } from "./texto";

// Viñetas ("- [P] …") y pasos numerados ("1. [P] …").
const ETIQUETA = /^(- |\d+\. )\[(P|C|I)\] /;

// Secciones sin etiquetas que solo ven comerciales e internos.
const SOLO_EQUIPO = /^Descartado/;

export function cargarNodo(id: string, publico: Publico): string | null {
  const ruta = join(RAIZ_RED, `${id}.md`);
  if (!existsSync(ruta)) return null;

  const texto = leerTexto(ruta).replace(/^---\n[\s\S]*?\n---\n/, "");
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
  const texto = leerTexto(join(RAIZ_RED, `${id}.md`));
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

// ---------- Fragmentos ----------

// Palabras de la pregunta que no ayudan a elegir un fragmento.
const VACIAS = new Set(
  palabras(
    "como cual cuales cuanto cuanta cuantos cuantas donde cuando para pero esta este esto eso esos " +
      "tengo tiene tienen tener hacer hago puedo puede pueden quiero necesito sobre entre desde hasta " +
      "nuvara plataforma favor hola saber debo tambien solo todo todos cada alguna alguno algun mucho " +
      "muchas porque estoy estan hay",
  ),
);
// Palabras que dicen qué tipo de pregunta es (precio, panorama) pero no de
// qué parte del nodo: no eligen fragmento. Si son lo único que coincide
// ("¿cuánto cuesta núvara?", "¿qué temas hay en general?"), llega la primera
// sección como resumen, en vez de la línea suelta que repite la palabra.
const GENERICAS = new Set(
  palabras(
    "cuesta cuestan costo costos vale valen precio precios tarifa tarifas " +
      "general generales tema temas indice resumen",
  ),
);
// Secciones con instrucciones para el chat: siempre viajan completas.
const SIEMPRE = /^(Cómo responder|Si no está aquí)/;
// Un fragmento entra si llega a esta parte del mejor puntaje.
const PROPORCION = 0.75;
const MAXIMO = 4;
// Si la pregunta empieza como el título de una sección ("¿Quién puede…?",
// "¿Qué hace…?", "¿Cuánto cuesta…?"), esa sección gana este extra.
const BONO_TITULO = 3;

export type Fragmentado = { texto: string; total: number; mostrados: number };

// Deja del nodo solo las viñetas y párrafos que comparten palabras con la
// pregunta; cada línea cuenta también las palabras del título de su sección.
// El nombre del nodo no cuenta: si es lo único que coincide ("¿qué hace la
// tesorería?"), entrega la primera sección como resumen.
export function fragmentar(texto: string, pregunta: string): Fragmentado {
  const [cabeza, ...secciones] = texto.split(/\n(?=## )/);
  const titulo = cabeza.split("\n").find((l) => l.startsWith("# ")) ?? "";
  const delNodo = new Set(palabras(titulo));
  const buscadas = new Set(
    palabras(pregunta).filter((p) => p.length > 3 && !VACIAS.has(p) && !GENERICAS.has(p) && !delNodo.has(p)),
  );

  type Item = { seccion: number; linea: string; propias: Set<string>; titulo: string; puntos: number };
  const inicio = palabras(pregunta).slice(0, 2).join(" ");
  const items: Item[] = [];
  secciones.forEach((sec, n) => {
    const [cab, ...lineas] = sec.split("\n");
    if (SIEMPRE.test(cab.slice(3))) return;
    for (const linea of lineas) {
      if (!linea.trim() || linea.startsWith("<!--")) continue;
      const propias = new Set([...palabras(linea), ...palabras(cab.slice(3))]);
      items.push({ seccion: n, linea, propias, titulo: palabras(cab.slice(3)).join(" "), puntos: 0 });
    }
  });
  // Una palabra que aparece en pocas líneas del nodo pesa más que una que
  // está en casi todas ("venta" pesa más que "factura" en precios).
  const peso = (p: string) => Math.log(1 + items.length / Math.max(1, items.filter((i) => i.propias.has(p)).length));
  for (const item of items) {
    item.puntos = [...buscadas].filter((p) => item.propias.has(p)).reduce((s, p) => s + peso(p), 0);
    if (inicio.includes(" ") && ` ${item.titulo} `.includes(` ${inicio} `)) item.puntos += BONO_TITULO;
  }

  const mejor = Math.max(0, ...items.map((i) => i.puntos));
  const elegidos =
    mejor === 0
      ? items.filter((i) => i.seccion === 0)
      : items
          .filter((i) => i.puntos >= mejor * PROPORCION)
          .sort((a, b) => b.puntos - a.puntos)
          .slice(0, MAXIMO);
  const quedan = new Set(elegidos);
  // Los pasos numerados viajan juntos: si llega uno, llega la lista entera.
  const NUMERADA = /^\d+\. /;
  for (const i of elegidos)
    if (NUMERADA.test(i.linea))
      for (const j of items) if (j.seccion === i.seccion && NUMERADA.test(j.linea)) quedan.add(j);
  // Una línea que termina en ":" presenta una lista: viaja con el resto de su sección.
  for (const i of elegidos)
    if (i.linea.trimEnd().endsWith(":"))
      for (const j of items) if (j.seccion === i.seccion) quedan.add(j);

  const salida = [titulo];
  secciones.forEach((sec, n) => {
    const [cab] = sec.split("\n");
    if (SIEMPRE.test(cab.slice(3))) return void salida.push(sec.trimEnd());
    const propias = items.filter((i) => i.seccion === n && quedan.has(i)).map((i) => i.linea);
    if (propias.length) salida.push([cab, ...propias].join("\n"));
  });

  return {
    texto: salida.filter(Boolean).join("\n\n"),
    total: items.length,
    mostrados: elegidos.length,
  };
}
