// Enrutador sin IA: elige el nodo por palabras clave (red/claves.json)
// y devuelve el nodo filtrado para el público. No llama a ningún modelo.
import { leerTexto } from "./archivos";
import { join } from "node:path";
import { leerIndice, visiblesPara, RAIZ_RED, RANGO, type Indice, type Publico } from "./indice";
import { cargarNodo, fragmentar, leerProcedimiento, type Procedimiento } from "./nodos";
import { recuperar, terminos } from "./recuperar";
import { palabras } from "./texto";

export { palabras };

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
  // Por nodo fragmentado: cuántos fragmentos tiene y cuántos se entregaron.
  fragmentos: Record<string, { total: number; mostrados: number }>;
  // Quedó en dos temas sin conexión: la pregunta no alcanzó para decidir.
  empate: boolean;
  // Se decidió por el tema de la respuesta anterior de la conversación.
  porContexto: boolean;
  // Sin tema y sin ninguna palabra contable o de núvara: no es una pregunta de
  // núvara ("¿me cuentas un chiste?"). Se responde que solo se ayuda con núvara.
  fueraDeTema: boolean;
  // En un empate, la pregunta para que la persona elija el tema.
  aclarar: string | null;
};

// Raíces que delatan una pregunta de núvara o de contabilidad aunque ninguna
// clave coincida: sin tema, esa pregunta se escala a un asesor; las demás,
// no son de núvara.
const DOMINIO = /^(nuvar|factur|caus|dian|contab|contador|iva|retenc|credit|recarg|nomin|emplead|empres|siig|world|alegr|helis|export|import|plataform|puc|tercer|proveed|comprador|vent|compr|pag|banc|caj|tesor|radian|acus|document|soport|preci|cuest|cobr|plan|modul|usuari|corre|certific|resolu|impuest|declar|exogen|asient|saldo|asesor|demostra|capacit|integra|program|softwar|regl|aprob|proveedor|cufe|nit|rut|celul|movil|app|aplicac|navegad|chrom|extens|contrasen|sesion|acces|miembr|rol|segur|dato|xml|pdf|excel)/;
const esDeNuvara = (pregunta: string) => palabras(pregunta).some((p) => DOMINIO.test(p));

const PUNTOS_POR_PALABRA = 2;
// Una cifra en pesos ("$870") delata una pregunta de precios.
const PUNTOS_CIFRA_EN_PESOS = 3;

function contiene(texto: string[], frase: string[]) {
  for (let i = 0; i + frase.length <= texto.length; i++)
    if (frase.every((p, j) => texto[i + j] === p)) return true;
  return false;
}

type Clave = { texto: string; raices: string[]; llave: string; largas: number };
let clavesGuardadas: { fuente: string; claves: Record<string, Clave[]> } | null = null;

// Las claves se normalizan una sola vez por versión de claves.json.
function leerClaves(): Record<string, Clave[]> {
  const fuente = leerTexto(join(RAIZ_RED, "claves.json"));
  if (clavesGuardadas?.fuente === fuente) return clavesGuardadas.claves;
  const { _como, ...crudas } = JSON.parse(fuente) as Record<string, string[]>;
  void _como;
  const claves = Object.fromEntries(
    Object.entries(crudas).map(([id, lista]) => [
      id,
      lista.map((texto) => {
        const raices = palabras(texto);
        return { texto, raices, llave: raices.join(" "), largas: raices.filter((p) => p.length > 2).length };
      }),
    ]),
  );
  clavesGuardadas = { fuente, claves };
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
        if (vistas.has(c.llave) || !contiene(texto, c.raices)) return false;
        vistas.add(c.llave);
        return true;
      });
      // Las palabras cortas ("de", "la", "me") ayudan a encajar la frase
      // pero no suman puntos.
      let puntos = encontradas.reduce((s, c) => s + PUNTOS_POR_PALABRA * c.largas, 0);
      const nombres = encontradas.map((c) => c.texto);
      if (id === "precios" && /\$\s?\d/.test(pregunta)) {
        puntos += PUNTOS_CIFRA_EN_PESOS;
        nombres.push("cifra en pesos");
      }
      return { id, puntos, claves: nombres };
    })
    .filter((p) => p.puntos > 0)
    .sort((a, b) => b.puntos - a.puntos);
}

// Puntos mínimos del segundo nodo para seguir la conexión hacia él: dos
// palabras clave o una frase. Con una sola palabra suelta no basta.
const PUNTOS_PARA_CONECTAR = 4;

// Puntaje BM25 mínimo para tomar en serio la búsqueda por contenido.
const MINIMO_CONTENIDO = 1;
export const PIDE_PRECIO = /\b(cuanto|cuantos|precio|precios|vale|valen|cuesta|cuestan|cobran|tarifa|tarifas)\b/;
export const sinTildes = (t: string) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// "¿Cómo causo…?", "¿dónde se…?", "pasos para…" piden hacer algo; "¿cómo
// funciona…?" o "¿qué es…?" piden una explicación y van al tema.
const PIDE_HACER = /\b(como|donde|pasos?|paso a paso|que hago|que debo hacer|quiero|necesito|se hace|hago)\b/;
const PIDE_EXPLICAR = /\b(como (funciona|decide|aprende|calcula|sabe)|que es|que significa|por que|cuanto|donde (quedan|estan|se guardan))\b/;

const PREGUNTA_SI_EXISTE = /\b(tienen|tiene|hacen|hace|manejan|maneja|hay|ofrecen|existe|incluye|soportan?|permite)\b/;
// Claves de módulos disponibles que solo dicen "¿existe?", sin tema propio.
const GENERICAS = new Set(["tienen", "hacen", "ofrecen", "disponible", "funcionalidad"]);
function preguntaSiExiste(pregunta: string) {
  return PREGUNTA_SI_EXISTE.test(pregunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
}

export function pideHacer(pregunta: string) {
  const t = pregunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return PIDE_HACER.test(t) && !PIDE_EXPLICAR.test(t);
}

// "¿Cómo…?" o "pasos para…" piden el paso a paso aunque no nombren la acción;
// "¿dónde está…?" sin una acción concreta se responde desde el núcleo.
const PIDE_PASOS = /\b(como|pasos?|paso a paso|hago|hacer|que hago|que debo hacer)\b/;

// Entre los procedimientos, el que más puntos sacó con sus propias claves;
// si ninguno puntuó y la pregunta pide pasos, el primero del tema que ganó.
function elegirProcedimiento(
  puntajes: Puntaje[],
  elegidos: string[],
  indice: Indice,
  publico: Publico,
  pregunta: string,
) {
  const esProc = new Map(indice.nodos.filter((n) => n.procedimiento).map((n) => [n.id, n]));
  const tema = elegidos.find((id) => !esProc.has(id)) ?? null;
  const puntosTema = puntajes.find((p) => p.id === tema)?.puntos ?? 0;
  const mejor = puntajes.find((p) => esProc.has(p.id));
  if (mejor && (!tema || esProc.get(mejor.id)!.tema === tema || mejor.puntos >= puntosTema))
    return mejor.id;
  const normal = pregunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (!tema || !PIDE_PASOS.test(normal)) return null;
  // Sin claves de ninguna neurona, se toma la del tema cuyo nombre comparte
  // una palabra con la pregunta ("pasos para causar" → causar-facturas). Si
  // ninguna la comparte, responde el núcleo: "¿cómo recargo?" no es pagar el corte.
  const buscadas = new Set(palabras(pregunta).filter((p) => p.length > 3));
  let elegida: string | null = null, mas = 0;
  for (const n of indice.nodos) {
    if (!n.procedimiento || n.tema !== tema || RANGO[n.publico] > RANGO[publico]) continue;
    const comunes = palabras(n.id.replace(/-/g, " ")).filter((p) => buscadas.has(p)).length;
    if (comunes > mas) { mas = comunes; elegida = n.id; }
  }
  return elegida;
}

// contexto: los nodos de la respuesta anterior de la misma conversación. Solo
// decide cuando la pregunta sola no alcanza: "¿y dónde lo veo?" no tiene tema
// propio, y en un empate gana el tema del que se venía hablando.
// Una pregunta corta que empieza con "y" o que señala algo ya dicho ("lo",
// "eso", "ahí"). Solo esas se responden con el tema anterior sin claves propias.
const SENALA = /\b(y|se|lo|la|los|las|le|eso|esto|ese|esa|ahi|alli|aqui|tambien|entonces)\b/;
function esSeguimiento(pregunta: string) {
  const normal = pregunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[¿?¡!.,]/g, " ").trim();
  return normal.split(/\s+/).length <= 6 && SENALA.test(normal);
}

export function buscar(pregunta: string, publico: Publico, contexto: string[] = []): Busqueda {
  const indice = leerIndice();
  const { conexiones } = indice;
  let hacer = pideHacer(pregunta);
  // Si la pregunta no pide hacer algo, un procedimiento pesa un tercio: así
  // "¿cuánto cuesta causar una factura?" va a precios y no a los pasos.
  const procedimientos = new Set(indice.nodos.filter((n) => n.procedimiento).map((n) => n.id));
  const crudos = puntuar(pregunta, publico);
  // Las claves deciden. El contenido de los nodos solo entra en dos casos seguros:
  // ninguna clave coincide, o el tema ya está claro y la pregunta pide hacer algo,
  // y baja a la neurona de ese tema ("¿cómo habilito facturación?"). Sin tema de
  // núvara no entra ("¿me cuentas un chiste?" comparte "cuent" con medio cerebro).
  const delContenido = crudos.length || esDeNuvara(pregunta) ? recuperar(pregunta, publico) : [];
  const propuesto = delContenido[0];
  const ganadorClaves = crudos.reduce<Puntaje | null>((m, p) => (!m || p.puntos > m.puntos ? p : m), null);
  if (propuesto && propuesto.puntos >= MINIMO_CONTENIDO && !PIDE_PRECIO.test(sinTildes(pregunta))) {
    if (!ganadorClaves) {
      crudos.push({ id: propuesto.id, puntos: 2, claves: ["contenido"] });
      if (procedimientos.has(propuesto.id) && !PIDE_EXPLICAR.test(sinTildes(pregunta))) hacer = true;
    } else if (hacer && !procedimientos.has(ganadorClaves.id)) {
      // Su nombre debe compartir con la pregunta una palabra que no sea del tema:
      // "habilito" apunta a solicitar; "pasos para causar" no elige ninguna.
      const buscados = terminos(pregunta);
      const delTema = terminos(ganadorClaves.id.replace(/-/g, " "));
      const neurona = delContenido.find(
        (h) =>
          indice.nodos.find((n) => n.id === h.id)?.tema === ganadorClaves.id &&
          terminos(h.id.replace(/-/g, " ")).some((t) => buscados.includes(t) && !delTema.includes(t)),
      );
      if (neurona && !crudos.some((p) => procedimientos.has(p.id)))
        crudos.push({ id: neurona.id, puntos: ganadorClaves.puntos, claves: ["contenido"] });
    }
  }
  // "¿Tienen acuse de facturas?" pregunta si existe algo que nombra una
  // neurona: su núcleo recibe los puntos completos de la neurona, para que la
  // palabra genérica de módulos disponibles ("tienen") no le gane.
  const visiblesIds = new Set(visiblesPara(indice, publico).map((n) => n.id));
  if (!hacer && preguntaSiExiste(pregunta)) {
    for (const p of [...crudos]) {
      const tema = indice.nodos.find((n) => n.id === p.id && n.procedimiento)?.tema;
      if (!tema || !visiblesIds.has(tema)) continue;
      const delTema = crudos.find((x) => x.id === tema);
      if (!delTema) crudos.push({ id: tema, puntos: p.puntos, claves: [`${p.claves[0]} (de ${p.id})`] });
      else if (delTema.puntos < p.puntos) delTema.puntos = p.puntos;
    }
  }
  const puntajes = crudos
    .map((p) => (hacer || !procedimientos.has(p.id) ? p : { ...p, puntos: p.puntos / 3 }))
    .sort((a, b) => b.puntos - a.puntos);
  const conecta = (desde: string, hacia: string) =>
    conexiones.some((c) => (c.desde === desde || c.desde === "*") && c.hacia === hacia);

  const [primero, segundo] = puntajes;
  let nodos: string[] = [];
  let conexion: string | null = null;
  let porContexto = false;
  const visibles = new Set(visiblesPara(indice, publico).map((n) => n.id));
  const previo = contexto.filter((id) => visibles.has(id));
  const redDe = (id: string) => indice.nodos.find((n) => n.id === id)?.red;

  if (primero && segundo && segundo.puntos === primero.puntos) {
    // Empate: si el mapa conecta los dos, se responde desde el nodo de
    // origen y se sigue la conexión; si no, se devuelven los dos.
    if (conecta(primero.id, segundo.id)) [nodos, conexion] = [[primero.id], segundo.id];
    else if (conecta(segundo.id, primero.id)) [nodos, conexion] = [[segundo.id], primero.id];
    else {
      // Sin conexión: si uno de los dos es del tema anterior, gana ese.
      const redesPrevias = new Set(previo.map(redDe));
      const delTema = [primero.id, segundo.id].filter((id) => previo.includes(id) || redesPrevias.has(redDe(id)));
      // "¿Tienen acuse de facturas?": módulos disponibles empata solo por
      // "tienen" o "hacen"; responde el tema concreto.
      const generico = [primero, segundo].find((p) => p.id === "modulos-disponibles" && p.claves.every((c) => GENERICAS.has(c)));
      if (delTema.length === 1) [nodos, porContexto] = [delTema, true];
      else if (generico) nodos = [primero, segundo].filter((p) => p !== generico).map((p) => p.id);
      else nodos = [primero.id, segundo.id];
    }
  } else if (primero) {
    nodos = [primero.id];
    // La pregunta también toca el segundo tema y el mapa lo permite.
    if (segundo && segundo.puntos >= PUNTOS_PARA_CONECTAR && conecta(primero.id, segundo.id))
      conexion = segundo.id;
  } else if (previo.length && esSeguimiento(pregunta)) {
    // Ninguna clave: es una pregunta de seguimiento del tema anterior.
    [nodos, porContexto] = [[previo[0]], true];
  }

  // "¿Y las ventas?" después de exportar: la pregunta empieza con "y", toca
  // apenas una palabra de otro tema y se sigue hablando del anterior. Responde
  // el tema anterior y el nuevo llega como conexión.
  const seguimiento = /^[¿¡\s]*y\s/i.test(pregunta);
  if (seguimiento && previo.length && primero && primero.puntos < PUNTOS_PARA_CONECTAR &&
      !previo.includes(primero.id) && redDe(primero.id) !== redDe(previo[0])) {
    [nodos, conexion, porContexto] = [[previo[0]], primero.id, true];
  }

  // El precio de un módulo ("¿cuánto cuesta la facturación electrónica?"):
  // responde el módulo, que sabe cómo se cobra, y sigue a precios.
  if (nodos.length === 1 && nodos[0] === "precios") {
    const modulo = puntajes.find((p) => p.id !== "precios" && conecta(p.id, "precios"));
    if (modulo) [nodos, conexion] = [[modulo.id], "precios"];
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
    const proc = elegirProcedimiento(puntajes, [...nodos, ...(conexion ? [conexion] : [])], indice, publico, pregunta);
    if (proc) [nodos, conexion] = [[proc], null];
  }

  const pedidos = [...nodos, ...(conexion ? [conexion] : [])];
  // Una neurona viaja completa (es una sola acción con sus pasos); de un
  // núcleo o de una conexión solo viajan los fragmentos que aplican.
  const esNeurona = (id: string) => indice.nodos.some((n) => n.id === id && n.procedimiento);
  const fragmentos: Record<string, { total: number; mostrados: number }> = {};
  const textos = pedidos.map((id) => {
    const completo = cargarNodo(id, publico);
    if (!completo || esNeurona(id)) return { id, texto: completo };
    const f = fragmentar(completo, pregunta);
    fragmentos[id] = { total: f.total, mostrados: f.mostrados };
    return { id, texto: f.texto };
  });
  const sinEscribir = textos.filter((t) => !t.texto).map((t) => t.id);
  const resultado = textos
    .filter((t) => t.texto)
    .map((t) => `<nodo id="${t.id}">\n${t.texto}\n</nodo>`)
    .join("\n\n");

  const procedimiento = nodos.length === 1 ? leerProcedimiento(nodos[0], publico) : null;
  const empate = nodos.length > 1;
  const fueraDeTema = nodos.length === 0 && !esDeNuvara(pregunta);
  const tituloDe = (id: string) => cargarNodo(id, "I")?.match(/^# (.+)$/m)?.[1] ?? id;
  const aclarar = empate ? `¿Te refieres a ${nodos.map((id) => `«${tituloDe(id)}»`).join(" o a ")}?` : null;
  return { pregunta, publico, nodos, conexion, puntajes, sinEscribir, resultado, procedimiento, fragmentos, empate, porContexto, fueraDeTema, aclarar };
}
