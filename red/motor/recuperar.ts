// Búsqueda por contenido: puntúa cada nodo con BM25 sobre lo que dice de verdad
// (título, ejemplos del mapa, claves, encabezados y texto), ya filtrado por
// público. Sin IA. Encuentra lo que las claves exactas no alcanzan a nombrar.
import { leerTexto } from "./archivos";
import { join } from "node:path";
import { leerIndice, RAIZ_RED, visiblesPara, type Publico } from "./indice";
import { cargarNodo } from "./nodos";

const normal = (texto: string) =>
  texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

// De la más larga a la más corta: "habilito", "habilitar" y "habilitación" dan
// la misma raíz. Es un recorte simple; solo tiene que ser consistente.
const SUFIJOS = [
  "amientos", "imientos", "amiento", "imiento", "aciones", "iciones", "adoras", "adores",
  "acion", "icion", "adora", "ador", "ables", "ibles", "able", "ible", "ando", "iendo",
  "aron", "ieron", "aban", "ados", "adas", "idos", "idas", "ado", "ada", "ido", "ida",
  "amos", "emos", "imos", "aste", "iste", "ar", "er", "ir", "io", "es", "as", "os", "an", "en",
  "a", "e", "o", "s",
];

// Formas irregulares que el recorte no une.
const IRREGULARES: Record<string, string> = {
  corrijo: "correg", corriges: "correg", corrige: "correg", correccion: "correg", correcciones: "correg",
  plano: "archiv", planos: "archiv", traigo: "tra", traer: "tra", pongo: "pon", poner: "pon",
};

// Palabras del oficio que dicen lo mismo: todas caen en la primera raíz.
const SINONIMOS = [
  ["activ", "habilit", "prend", "encend", "solicit"],
  ["cre", "agreg", "met", "anad", "registr"],
  ["gener", "sac", "emit", "elabor"],
  ["import", "sub", "carg", "tra"],
  ["elimin", "borr", "quit"],
  ["restaur", "recuper"],
  ["comprador", "client"],
  ["emple", "trabaj"],
  ["certific", "firm"],
  ["correg", "cambi", "modific", "edit", "arregl"],
  ["program", "softwar"],
  ["lot", "grup", "bloque", "masiv"],
  ["agrup", "junt"],
];
const CANONICA = new Map(SINONIMOS.flatMap((g) => g.map((r) => [r, g[0]] as const)));

const VACIAS = new Set(
  "a al algo alguien algun alguna ante aqui asi aun cada como con cual cuales cuando de del desde donde el ella en entre es esa ese eso esta estan este esto estoy fue ha hacer hago hay la las le les lo los mas me mi mis muy ni no nos nuestro o otra otro para pero poco por porque puede pueden puedo que quiero se sea ser si sin sobre son su sus te tengo tiene tienen tu tus un una uno unos unas usted ustedes y ya yo nuvara plataforma".split(" "),
);

export function terminos(texto: string) {
  return normal(texto)
    .split(/[^a-z0-9]+/)
    .filter((p) => p.length > 1 && !VACIAS.has(p))
    .map((p) => {
      let r = IRREGULARES[p];
      if (!r) {
        const s = SUFIJOS.find((x) => p.endsWith(x) && p.length - x.length >= 3);
        r = s ? p.slice(0, -s.length) : p;
      }
      return CANONICA.get(r) ?? r;
    });
}

type Documento = { id: string; frecuencia: Map<string, number>; largo: number };
type Corpus = { documentos: Documento[]; presentes: Map<string, number>; promedio: number };

const veces = (texto: string, n: number) => Array(n).fill(terminos(texto)).flat() as string[];

function armar(publico: Publico): Corpus {
  const claves = JSON.parse(leerTexto(join(RAIZ_RED, "claves.json"))) as Record<string, string[]>;
  const documentos: Documento[] = [];
  for (const n of visiblesPara(leerIndice(), publico)) {
    if (n.transversal) continue;
    const cuerpo = cargarNodo(n.id, publico);
    if (!cuerpo) continue;
    const titulo = cuerpo.match(/^# (.+)$/m)?.[1] ?? "";
    const encabezados = [...cuerpo.matchAll(/^## (.+)$/gm)].map((m) => m[1]).join(" ");
    // Lo que nombra el nodo pesa más que lo que apenas menciona.
    const lista = [
      ...veces(`${titulo} ${n.id.replace(/-/g, " ")}`, 4),
      ...veces(n.cuando, 3),
      ...veces((claves[n.id] ?? []).join(" "), 2),
      ...veces(encabezados, 2),
      ...terminos(cuerpo),
    ];
    const frecuencia = new Map<string, number>();
    for (const t of lista) frecuencia.set(t, (frecuencia.get(t) ?? 0) + 1);
    documentos.push({ id: n.id, frecuencia, largo: lista.length });
  }
  const presentes = new Map<string, number>();
  for (const d of documentos) for (const t of d.frecuencia.keys()) presentes.set(t, (presentes.get(t) ?? 0) + 1);
  const promedio = documentos.reduce((s, d) => s + d.largo, 0) / Math.max(1, documentos.length);
  return { documentos, presentes, promedio };
}

const guardados = new Map<Publico, { marca: unknown; corpus: Corpus }>();
function corpusDe(publico: Publico) {
  const marca = leerIndice();
  const g = guardados.get(publico);
  if (g?.marca === marca) return g.corpus;
  const corpus = armar(publico);
  guardados.set(publico, { marca, corpus });
  return corpus;
}

const K1 = 1.2;
const B = 0.6;

export type Recuperado = { id: string; puntos: number };

// Nodos ordenados por BM25; una palabra rara pesa más que una que está en todos.
export function recuperar(pregunta: string, publico: Publico): Recuperado[] {
  const { documentos, presentes, promedio } = corpusDe(publico);
  const buscados = [...new Set(terminos(pregunta))];
  const N = documentos.length;
  return documentos
    .map((d) => {
      let puntos = 0;
      for (const t of buscados) {
        const f = d.frecuencia.get(t);
        if (!f) continue;
        const n = presentes.get(t) ?? 0;
        const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
        puntos += (idf * f * (K1 + 1)) / (f + K1 * (1 - B + (B * d.largo) / promedio));
      }
      return { id: d.id, puntos };
    })
    .filter((r) => r.puntos > 0)
    .sort((a, b) => b.puntos - a.puntos);
}
