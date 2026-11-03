// Pruebas de la red: el validador general y las pruebas por archivo de
// red/pruebas/. Las usan la terminal (validar.ts, probar.ts) y la interfaz.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { buscar, palabras } from "./buscar";
import { leerIndice, RAIZ_RED, RANGO, type Conexion, type Publico } from "./indice";

// ====================================================================
// Validador general
// ====================================================================

export type Fallo = { id: string; pregunta: string; eligio: string[] };
export type Grupo = { total: number; enTema: number; sinRuta: number; fuera: Fallo[]; vacias: string[] };

// Si un cambio en las claves o en el mapa baja de aquí, el validador falla.
export const MINIMOS = { mapa: 90, ajuste: 90, control: 70, fragmentos: 90 };

// Preguntas reales de preguntas-frecuentes.md: cada sección acepta los
// nodos de su tema.
const TEMA: Record<string, string[]> = {
  "Configuración inicial": ["onboarding", "usuarios-roles-y-empresas", "conectar-dian", "conectar-correo"],
  "DIAN y correo": ["conectar-dian", "conectar-correo", "importar-facturas", "archivo-y-comparacion-dian", "papelera-y-limpieza"],
  "Causación y revisión": ["causar-y-revisar", "correcciones-y-aprendizaje", "aprobacion-en-bloque", "notas-credito-y-documento-soporte", "papelera-y-limpieza", "creditos-y-recargas"],
  "Retenciones e impuestos": ["proveedores-y-retenciones", "ventas-y-autorretencion", "glosario", "notas-credito-y-documento-soporte"],
  "Centros de costo y reglas": ["reglas-y-centros-de-costo", "correcciones-y-aprendizaje"],
  "Productos e inventario": ["inventario-y-productos"],
  "Exportación y software contable": ["exportacion", "exportar-archivo", "enviar-a-siigo", "exportar-world-office", "integraciones", "inventario-y-productos"],
  "Ventas, nómina y otros módulos": ["ventas-y-autorretencion", "nomina", "tesoreria", "facturacion-electronica-y-radian", "conciliacion-bancaria", "modulos-disponibles", "facturas-del-exterior", "notas-credito-y-documento-soporte"],
  "Precios y comercial": ["precios", "creditos-y-recargas", "seguridad-y-soporte"],
  "Créditos y soporte": ["creditos-y-recargas", "precios", "seguridad-y-soporte", "problemas-conocidos"],
};

// De un núcleo solo debe llegar lo que aplica a la pregunta.
const FRAGMENTOS: { pregunta: string; publico: Publico; incluye: RegExp; excluye?: RegExp }[] = [
  { pregunta: "¿Cuánto cuesta causar una factura de venta?", publico: "P", incluye: /\$200/, excluye: /\$510/ },
  { pregunta: "¿Cuánto cuesta causar una factura de compra?", publico: "P", incluye: /\$510/, excluye: /\$200 COP/ },
  { pregunta: "¿Cuánto cuesta la habilitación de facturación electrónica?", publico: "P", incluye: /150\.000/, excluye: /\$510/ },
  { pregunta: "¿Qué incluye el precio?", publico: "P", incluye: /empresas ilimitadas/, excluye: /\$510/ },
  { pregunta: "¿Quién puede emitir facturas?", publico: "P", incluye: /administrador, operador o contador/, excluye: /Documento soporte/ },
  { pregunta: "¿Qué hace la tesorería?", publico: "P", incluye: /Cuentas bancarias/, excluye: /Solicitar habilitación/ },
  { pregunta: "¿Dónde está la nómina en la plataforma?", publico: "P", incluye: /Menú \*\*Nómina/, excluye: /cupos/ },
  { pregunta: "¿La nómina se cobra por empleado?", publico: "P", incluye: /cupos de empleados al mes/, excluye: /Tesorería › Pago de nómina/ },
  { pregunta: "¿Cuál es la recarga mínima?", publico: "P", incluye: /70\.000/, excluye: /150\.000/ },
  { pregunta: "¿Cuánto cuesta la tesorería?", publico: "P", incluye: /Tesorería y Caja/, excluye: /\$150\.000/ },
];

const pct = (a: number, b: number) => `${Math.round((100 * a) / b)} %`;
const tasa = (a: number, b: number) => (100 * a) / b;

export function evaluarRed() {
  const indice = leerIndice();
  const enrutables = indice.nodos.filter((n) => !n.transversal);
  const claves: Record<string, string[]> = JSON.parse(readFileSync(join(RAIZ_RED, "claves.json"), "utf8"));

  // 1. Preguntas de ejemplo del mapa (las que van entre comillas en "Cuándo se activa").
  let total = 0;
  let aciertos = 0;
  let empates = 0;
  const fallos: Fallo[] = [];
  const porNodo: Record<string, { total: number; ok: number }> = {};
  for (const n of enrutables) {
    const preguntas = [...n.cuando.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    porNodo[n.id] = { total: preguntas.length, ok: 0 };
    // Se pregunta con el público más amplio que ve el nodo.
    for (const pregunta of preguntas) {
      total++;
      const b = buscar(pregunta, n.publico);
      if (b.nodos.length > 1) empates++;
      if (b.nodos.length === 1 && b.nodos[0] === n.id) {
        aciertos++;
        porNodo[n.id].ok++;
      } else fallos.push({ id: n.id, pregunta, eligio: b.nodos });
    }
  }

  // 2. Preguntas reales. Una de cada tres queda de control: no se usa para
  //    ajustar las claves y mide si el ajuste sirve con preguntas nuevas.
  const conocimiento = (archivo: string) => readFileSync(join(RAIZ_RED, "..", "conocimiento", archivo), "utf8");
  const grupo = (): Grupo => ({ total: 0, enTema: 0, sinRuta: 0, fuera: [], vacias: [] });
  const reales = { ajuste: grupo(), control: grupo() };
  const temaDe = (id: string) => indice.nodos.find((x) => x.id === id)?.tema ?? id;
  let seccion = "";
  let n = 0;
  for (const linea of conocimiento("preguntas-frecuentes.md").split("\n")) {
    if (linea.startsWith("## ")) seccion = linea.slice(3).trim();
    const m = linea.match(/^\*\*(.+\?)\*\*$/);
    if (!m || !TEMA[seccion]) continue;
    const g = n++ % 3 === 2 ? reales.control : reales.ajuste;
    const b = buscar(m[1], "I");
    g.total++;
    if (!b.nodos.length) {
      g.sinRuta++;
      g.vacias.push(m[1]);
      continue;
    }
    // Acierto si el tema llega por el nodo, por la conexión o por una neurona de ese tema.
    if ([...b.nodos, b.conexion].some((id) => id && (TEMA[seccion].includes(id) || TEMA[seccion].includes(temaDe(id)))))
      g.enTema++;
    else g.fuera.push({ id: seccion, pregunta: m[1], eligio: b.nodos });
  }

  // 3. Preguntas de prospectos: nunca se usaron para ajustar; solo se mide si encuentran nodo.
  const prospectos = { total: 0, conRuta: 0 };
  let enPreguntas = false;
  for (const linea of conocimiento("demostraciones-y-ventas.md").split("\n")) {
    if (linea.startsWith("## ")) enPreguntas = linea.startsWith("## Preguntas frecuentes de prospectos");
    const m = enPreguntas && linea.match(/\*\*(¿[^*]+\?)\*\*/);
    if (!m) continue;
    prospectos.total++;
    if (buscar(m[1], "C").nodos.length) prospectos.conRuta++;
  }

  // 4. Fragmentos.
  const fragmentos = FRAGMENTOS.map((f) => {
    const r = buscar(f.pregunta, f.publico).resultado;
    const fallas = [!f.incluye.test(r) && `falta ${f.incluye}`, f.excluye?.test(r) && `sobra ${f.excluye}`].filter(
      (x): x is string => Boolean(x),
    );
    return { pregunta: f.pregunta, publico: f.publico, fallas };
  });
  const fragmentosOk = fragmentos.filter((f) => !f.fallas.length).length;

  // 5. Por red neuronal: núcleos, neuronas, conexiones internas y con otras redes.
  const redDe = new Map(indice.nodos.map((x) => [x.id, x.red]));
  const porRed = indice.redes.map((r) => {
    const nodos = indice.nodos.filter((x) => x.red === r.id);
    const ids = new Set(nodos.map((x) => x.id));
    const propias = indice.conexiones.filter((c) => ids.has(c.hacia) || (c.desde !== "*" && ids.has(c.desde)));
    const internas = propias.filter((c) => c.desde !== "*" && redDe.get(c.desde) === r.id && redDe.get(c.hacia) === r.id);
    const ejemplos = Object.entries(porNodo).filter(([id]) => ids.has(id));
    const tot = ejemplos.reduce((s, [, v]) => s + v.total, 0);
    const ok = ejemplos.reduce((s, [, v]) => s + v.ok, 0);
    return {
      id: r.id,
      nombre: r.nombre,
      nucleos: nodos.filter((x) => !x.procedimiento).length,
      neuronas: nodos.filter((x) => x.procedimiento).length,
      escritas: nodos.filter((x) => x.escrito).length,
      internas: internas.length,
      externas: propias.length - internas.length,
      acierto: tot ? Math.round((100 * ok) / tot) : null,
    };
  });

  // 6. Palabras clave compartidas, nodos sin claves y claves sin nodo.
  const duenos = new Map<string, Set<string>>();
  for (const [id, lista] of Object.entries(claves)) {
    if (id.startsWith("_")) continue;
    for (const c of lista) {
      const llave = palabras(c).join(" ");
      if (!duenos.has(llave)) duenos.set(llave, new Set());
      duenos.get(llave)!.add(id);
    }
  }
  const choques = [...duenos].filter(([, s]) => s.size > 1).map(([llave, s]) => ({ llave, nodos: [...s] }));
  const ids = new Set(indice.nodos.map((x) => x.id));
  const sinClaves = enrutables.filter((x) => !claves[x.id]?.length).map((x) => x.id);
  const clavesHuerfanas = Object.keys(claves).filter((k) => !k.startsWith("_") && !ids.has(k));

  // 7. Conexiones.
  const grado = new Map<string, number>(enrutables.map((x) => [x.id, 0]));
  for (const c of indice.conexiones) {
    if (c.desde !== "*") grado.set(c.desde, (grado.get(c.desde) ?? 0) + 1);
    grado.set(c.hacia, (grado.get(c.hacia) ?? 0) + 1);
  }
  const aisladas = [...grado].filter(([, g]) => g === 0).map(([id]) => id);
  const rotas = indice.conexiones.filter((c) => (c.desde !== "*" && !ids.has(c.desde)) || !ids.has(c.hacia));
  const publicoDe = new Map(indice.nodos.map((x) => [x.id, x.publico]));
  // Una conexión que sube de público (P → C) solo sirve a comerciales e internos.
  const suben: (Conexion & { de: Publico; a: Publico })[] = indice.conexiones
    .filter((c) => c.desde !== "*" && RANGO[publicoDe.get(c.hacia)!] > RANGO[publicoDe.get(c.desde)!])
    .map((c) => ({ ...c, de: publicoDe.get(c.desde)!, a: publicoDe.get(c.hacia)! }));

  // 8. Velocidad del enrutador sin IA.
  const muestras = enrutables.flatMap((x) => [...x.cuando.matchAll(/"([^"]+)"/g)].map((m) => m[1]));
  const inicio = performance.now();
  for (let i = 0; i < 20; i++) for (const p of muestras) buscar(p, "I");
  const msPorConsulta = (performance.now() - inicio) / (20 * muestras.length);
  const conConexion = muestras.filter((p) => buscar(p, "I").conexion).length;

  const caidas = [
    tasa(fragmentosOk, fragmentos.length) < MINIMOS.fragmentos && `fragmentos ${pct(fragmentosOk, fragmentos.length)} < ${MINIMOS.fragmentos} %`,
    tasa(aciertos, total) < MINIMOS.mapa && `mapa ${pct(aciertos, total)} < ${MINIMOS.mapa} %`,
    tasa(reales.ajuste.enTema, reales.ajuste.total) < MINIMOS.ajuste && `ajuste ${pct(reales.ajuste.enTema, reales.ajuste.total)} < ${MINIMOS.ajuste} %`,
    tasa(reales.control.enTema, reales.control.total) < MINIMOS.control && `control ${pct(reales.control.enTema, reales.control.total)} < ${MINIMOS.control} %`,
    rotas.length > 0 && `${rotas.length} conexiones rotas`,
    aisladas.length > 0 && `${aisladas.length} nodos sin conexiones`,
  ].filter((x): x is string => Boolean(x));

  return {
    porRed,
    mapa: { total, aciertos, empates, fallos, nodos: enrutables.length, nodosConFallo: Object.values(porNodo).filter((v) => v.total && v.ok < v.total).length },
    fragmentos: { total: fragmentos.length, ok: fragmentosOk, casos: fragmentos },
    // Solo se exponen los fallos del grupo de ajuste: los de control no se
    // miran, para no ajustar las claves a ellos.
    reales: {
      ajuste: reales.ajuste,
      control: { total: reales.control.total, enTema: reales.control.enTema, sinRuta: reales.control.sinRuta, fuera: reales.control.fuera.length },
    },
    prospectos,
    claves: { choques, sinClaves, clavesHuerfanas },
    conexiones: { total: indice.conexiones.length, rotas: rotas.length, aisladas, suben, conConexion, muestras: muestras.length },
    msPorConsulta,
    minimos: MINIMOS,
    caidas,
  };
}

// ====================================================================
// Pruebas por archivo (red/pruebas/<nombre>.json)
// ====================================================================

export type Caso = {
  pregunta: string;
  publico: Publico;
  nodos: string[];
  noNodos?: string[];
  incluye?: string[][];
  excluye?: string[];
  noAplicarExcluyeSiempre?: string[];
  // Nodos de la respuesta anterior, para probar preguntas de seguimiento.
  contexto?: string[];
};

type Prueba = { descripcion?: string; excluyeSiempre: Record<Publico, string[]>; casos: Caso[] };

export type Salida = {
  nodos: string[];
  conexion: string | null;
  sinEscribir: string[];
  texto: string;
  uso: { entrada: number; salida: number };
};

const EN_PARALELO = 4;

export function listarPruebas() {
  return readdirSync(join(RAIZ_RED, "pruebas"))
    .filter((f) => f.endsWith(".json") && !f.endsWith(".resultado.json"))
    .map((f) => f.replace(/\.json$/, ""))
    .sort();
}

export async function correrPrueba(nombre: string, conIa = false) {
  const prueba: Prueba = JSON.parse(readFileSync(join(RAIZ_RED, "pruebas", `${nombre}.json`), "utf8"));
  const consultar = conIa ? (await import("./red")).consultar : null;

  async function ejecutar(caso: Caso): Promise<Salida> {
    if (consultar) {
      const c = await consultar(caso.pregunta, caso.publico);
      return { ...c.ruta, sinEscribir: c.sinEscribir, texto: c.respuesta, uso: c.uso };
    }
    const b = buscar(caso.pregunta, caso.publico, caso.contexto);
    return { nodos: b.nodos, conexion: b.conexion, sinEscribir: b.sinEscribir, texto: b.resultado, uso: { entrada: 0, salida: 0 } };
  }

  function revisar(caso: Caso, s: Salida) {
    const fallas: string[] = [];
    const elegidos = [...s.nodos, ...(s.conexion ? [s.conexion] : [])];
    for (const id of caso.nodos) if (!s.nodos.includes(id)) fallas.push(`ruta sin ${id}`);
    for (const id of caso.noNodos ?? []) if (elegidos.includes(id)) fallas.push(`ruta con ${id}, que no tocaba`);

    // Sin IA el texto es el nodo: lo que debe incluir la respuesta se revisa con IA.
    if (conIa)
      for (const g of caso.incluye ?? [])
        if (!g.some((p) => new RegExp(p, "i").test(s.texto))) fallas.push(`falta /${g.join("|")}/`);

    // Sin IA, la lista fija solo se aplica al público P: ahí sirve para pillar
    // fugas. Comerciales e internos sí ven las cifras y nombres descartados.
    const omitir = new Set(caso.noAplicarExcluyeSiempre ?? []);
    const fijas = conIa || caso.publico === "P" ? prueba.excluyeSiempre[caso.publico] : [];
    const excluye = [...fijas.filter((p) => !omitir.has(p)), ...(conIa ? (caso.excluye ?? []) : [])];
    for (const p of excluye) {
      // "Núvara" y "Nuvara" distinguen mayúsculas: lo correcto es "núvara".
      const flags = /[NÑ]/.test(p.charAt(0)) ? "" : "i";
      const m = s.texto.match(new RegExp(p, flags));
      if (m) fallas.push(`dice "${m[0]}"`);
    }
    return fallas;
  }

  const resultados: { caso: Caso; salida: Salida; fallas: string[] }[] = [];
  for (let i = 0; i < prueba.casos.length; i += EN_PARALELO) {
    const tanda = await Promise.all(
      prueba.casos.slice(i, i + EN_PARALELO).map(async (caso) => {
        const salida = await ejecutar(caso);
        return { caso, salida, fallas: revisar(caso, salida) };
      }),
    );
    resultados.push(...tanda);
  }

  return {
    nombre,
    descripcion: prueba.descripcion ?? "",
    conIa,
    resultados,
    pasaron: resultados.filter((r) => !r.fallas.length).length,
    total: resultados.length,
    uso: {
      entrada: resultados.reduce((s, r) => s + r.salida.uso.entrada, 0),
      salida: resultados.reduce((s, r) => s + r.salida.uso.salida, 0),
    },
  };
}
