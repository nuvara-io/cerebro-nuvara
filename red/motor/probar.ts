// Corre una prueba de red/pruebas/ y revisa ruta y texto con reglas fijas.
// Uso: bun run red:probar [precios] [--ia]
// Sin --ia prueba el enrutador por palabras clave y que el nodo devuelto no
// filtre datos al público equivocado. Con --ia prueba además la respuesta de Claude.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buscar } from "./buscar";
import { RAIZ_RED, type Publico } from "./indice";

type Caso = {
  pregunta: string;
  publico: Publico;
  nodos: string[];
  noNodos?: string[];
  incluye?: string[][];
  excluye?: string[];
  noAplicarExcluyeSiempre?: string[];
};

type Prueba = {
  excluyeSiempre: Record<Publico, string[]>;
  casos: Caso[];
};

type Salida = {
  nodos: string[];
  conexion: string | null;
  sinEscribir: string[];
  texto: string;
  uso: { entrada: number; salida: number };
};

// Opus 5.5: USD por millón de tokens.
const PRECIO = { entrada: 4, salida: 20 };
const EN_PARALELO = 4;

const args = process.argv.slice(2);
const conIa = args.includes("--ia");
const nombre = args.find((a) => !a.startsWith("--")) ?? "precios";
const prueba: Prueba = JSON.parse(
  readFileSync(join(RAIZ_RED, "pruebas", `${nombre}.json`), "utf8"),
);

const consultar = conIa ? (await import("./red")).consultar : null;

async function ejecutar(caso: Caso): Promise<Salida> {
  if (consultar) {
    const c = await consultar(caso.pregunta, caso.publico);
    return { ...c.ruta, sinEscribir: c.sinEscribir, texto: c.respuesta, uso: c.uso };
  }
  const b = buscar(caso.pregunta, caso.publico);
  return {
    nodos: b.nodos,
    conexion: null,
    sinEscribir: b.sinEscribir,
    texto: b.resultado,
    uso: { entrada: 0, salida: 0 },
  };
}

function revisar(caso: Caso, s: Salida) {
  const fallas: string[] = [];
  const elegidos = [...s.nodos, ...(s.conexion ? [s.conexion] : [])];

  for (const id of caso.nodos)
    if (!s.nodos.includes(id)) fallas.push(`ruta sin ${id}`);
  for (const id of caso.noNodos ?? [])
    if (elegidos.includes(id)) fallas.push(`ruta con ${id}, que no tocaba`);

  // Sin IA el texto es el nodo entero: solo tiene sentido revisar lo que no
  // debe aparecer. Lo que debe incluir la respuesta se revisa con --ia.
  if (conIa)
    for (const grupo of caso.incluye ?? [])
      if (!grupo.some((p) => new RegExp(p, "i").test(s.texto)))
        fallas.push(`falta /${grupo.join("|")}/`);

  // Sin IA, la lista fija solo se aplica al público P: ahí sirve para pillar
  // fugas. Comerciales e internos sí ven en el nodo las cifras y nombres
  // descartados, porque los necesitan para corregirlos.
  const omitir = new Set(caso.noAplicarExcluyeSiempre ?? []);
  const fijas = conIa || caso.publico === "P" ? prueba.excluyeSiempre[caso.publico] : [];
  const excluye = [
    ...fijas.filter((p) => !omitir.has(p)),
    ...(conIa ? (caso.excluye ?? []) : []),
  ];
  for (const p of excluye) {
    // "Núvara" y "Nuvara" distinguen mayúsculas: lo correcto es "núvara".
    const flags = /[NÑ]/.test(p.charAt(0)) ? "" : "i";
    const m = s.texto.match(new RegExp(p, flags));
    if (m) fallas.push(`dice "${m[0]}"`);
  }
  return fallas;
}

async function correr(caso: Caso) {
  const salida = await ejecutar(caso);
  return { caso, salida, fallas: revisar(caso, salida) };
}

const resultados: Awaited<ReturnType<typeof correr>>[] = [];
for (let i = 0; i < prueba.casos.length; i += EN_PARALELO) {
  const tanda = await Promise.all(prueba.casos.slice(i, i + EN_PARALELO).map(correr));
  for (const r of tanda) {
    const ruta = `${r.salida.nodos.join("+") || "-"}${r.salida.conexion ? `→${r.salida.conexion}` : ""}`;
    console.log(`${r.fallas.length ? "FALLA" : "ok   "} [${r.caso.publico}] ${r.caso.pregunta}  (${ruta})`);
    for (const f of r.fallas) console.log(`        ${f}`);
    if (r.fallas.length && conIa) console.log(`        respuesta: ${r.salida.texto.replace(/\n/g, " ")}`);
  }
  resultados.push(...tanda);
}

const pasaron = resultados.filter((r) => r.fallas.length === 0).length;
let resumen = `\n${pasaron}/${resultados.length} casos pasaron (${conIa ? "con IA" : "sin IA"})`;
if (conIa) {
  const entrada = resultados.reduce((s, r) => s + r.salida.uso.entrada, 0);
  const salida = resultados.reduce((s, r) => s + r.salida.uso.salida, 0);
  const costo = (entrada * PRECIO.entrada + salida * PRECIO.salida) / 1e6;
  resumen += ` · ${entrada} tokens de entrada, ${salida} de salida · USD ${costo.toFixed(3)}`;
}
console.log(resumen);

writeFileSync(
  join(RAIZ_RED, "pruebas", `${nombre}.resultado.json`),
  JSON.stringify(
    resultados.map((r) => ({
      pregunta: r.caso.pregunta,
      publico: r.caso.publico,
      nodos: r.salida.nodos,
      conexion: r.salida.conexion,
      sinEscribir: r.salida.sinEscribir,
      texto: r.salida.texto,
      fallas: r.fallas,
    })),
    null,
    2,
  ) + "\n",
);

process.exit(pasaron === resultados.length ? 0 : 1);
