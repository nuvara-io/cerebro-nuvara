// Reglas con las que se redacta una respuesta a partir de los nodos. Las usan
// Claude (red.ts) y el modelo local de pruebas (local.ts), así responden igual.
import type { Publico } from "./indice";
import { cargarNodo } from "./nodos";

export const ESCALAR = "Eso te lo confirma un asesor de núvara.";
export const FUERA_DE_TEMA =
  "Solo puedo ayudarte con núvara: la causación de tus facturas, la facturación electrónica, la nómina, la tesorería y cómo usar la plataforma. ¿En qué de eso te ayudo?";

export const NOMBRE_PUBLICO: Record<Publico, string> = {
  P: "un usuario o prospecto (chat abierto)",
  C: "alguien del equipo comercial",
  I: "alguien del equipo interno de núvara",
};

export function sistemaRespuesta(publico: Publico) {
  const voz = ["voz-de-marca", "limites"].map((id) => cargarNodo(id, publico) ?? "").join("\n\n");
  const porPublico: Record<Publico, string> = {
    P: `Quien pregunta es ${NOMBRE_PUBLICO.P}. Solo tienes datos oficiales. No menciones que existen datos internos o sin confirmar.`,
    C: `Quien pregunta es ${NOMBRE_PUBLICO.C}. Puedes usar los datos por confirmar, pero márcalos siempre como "sin confirmar" y aclara que no se le dicen a un prospecto. Si piden una cifra descartada, dilo y da la oficial.`,
    I: `Quien pregunta es ${NOMBRE_PUBLICO.I}. Puedes usar todo lo que tienes, marcando qué es oficial, qué está sin confirmar y qué es interno.`,
  };

  return `Eres el cerebro de núvara: respondes preguntas sobre qué hace núvara y cómo se usa.

${porPublico[publico]}

Reglas:
- Responde solo con lo que está en <nodos>. No uses lo que sabes por fuera.
- Si la respuesta no está en <nodos>, responde exactamente: "${ESCALAR}"
- No inventes cifras. Solo puedes multiplicar o sumar tarifas que estén en <nodos>.
- Responde corto: de 1 a 4 oraciones, en español de Colombia, sin títulos.
- Si un nodo trae "## Pasos", la persona quiere hacer algo: empieza con la ruta en la plataforma (Menú › Pantalla › Botón) y da los pasos numerados tal como están, sin resumirlos. Aquí sí puedes pasar de 4 oraciones.

${voz}`;
}

// Control de cifras: el prompt no basta para que un modelo no invente. Cada
// número de la respuesta tiene que estar en los nodos consultados o en el cálculo.
const CIFRA = /\d[\d.,]*\d|\d/g;
const limpiarCifra = (c: string) => c.replace(/[.,]/g, "");
export function cifrasInventadas(respuesta: string, fuente: string) {
  const conocidas = new Set((fuente.match(CIFRA) ?? []).map(limpiarCifra));
  // Los números de una lista ("1. Entra a…") no son datos.
  const sinListas = respuesta.replace(/^\s*\d+[.)]\s/gm, "");
  return [...new Set((sinListas.match(CIFRA) ?? []).map(limpiarCifra))].filter((c) => !conocidas.has(c));
}

// Lo que dicen los nodos, sin redactar: se usa cuando la respuesta no pasa el control.
export function textoOficial(resultado: string) {
  return resultado
    .replace(/<\/?nodo[^>]*>/g, "")
    .split(/\n(?=## )/)
    .filter((s) => !/^## (Cómo responder|Si no está aquí)/.test(s.trim()))
    .join("\n")
    .replace(/^# .+$/gm, "")
    .replace(/^## (.+)$/gm, "**$1**")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Revisa lo redactado: sin cifras inventadas y sin el "te lo confirma un asesor"
// pegado al final de una respuesta que sí tenía contenido.
export function revisarRespuesta(respuesta: string, resultado: string, calculo: string | null) {
  const inventadas = cifrasInventadas(respuesta, `${resultado} ${calculo ?? ""}`);
  if (inventadas.length) return { respuesta: textoOficial(resultado), inventadas };
  const limpia = respuesta.endsWith(ESCALAR) && respuesta !== ESCALAR ? respuesta.slice(0, -ESCALAR.length).trim() : respuesta;
  return { respuesta: limpia, inventadas };
}

// Las cuentas de precio no las hace el modelo: se calculan aquí con las tarifas
// oficiales de red/precios.md y se le pasan hechas. "300 facturas de compra"
// → 300 × $510 = $153.000 (1.530 créditos).
const pesos = (n: number) => `$${Math.round(n).toLocaleString("es-CO")}`;
const leerTarifa = (texto: string, re: RegExp) => Number(texto.match(re)?.[1].replace(/\./g, "") ?? NaN);

export function calculoDePrecio(pregunta: string) {
  const precios = cargarNodo("precios", "P") ?? "";
  const compra = leerTarifa(precios, /factura de compra: \$([\d.]+)/);
  const venta = leerTarifa(precios, /factura de venta: \$([\d.]+)/);
  const minimo = leerTarifa(precios, /Mínimo mensual de consumo: \$([\d.]+)/);
  const credito = leerTarifa(precios, /1 crédito = \$([\d.]+)/);
  if ([compra, venta, minimo, credito].some(Number.isNaN)) return null;

  const t = pregunta.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const partes: string[] = [];
  let total = 0;
  for (const m of t.matchAll(/(\d[\d.]*)\s*(?:facturas?|causacion(?:es)?|documentos?)?\s*(?:de\s+)?(compras?|ventas?)/g)) {
    const n = Number(m[1].replace(/\./g, ""));
    const esVenta = m[2].startsWith("venta");
    const tarifa = esVenta ? venta : compra;
    total += n * tarifa;
    partes.push(`${n.toLocaleString("es-CO")} ${esVenta ? "ventas" : "compras"} × ${pesos(tarifa)} = ${pesos(n * tarifa)}`);
  }
  if (!partes.length) return null;
  const creditos = (total / credito).toLocaleString("es-CO", { maximumFractionDigits: 1 });
  const cobro = total < minimo
    ? ` Como es menos que el mínimo mensual, ese mes se descuentan ${pesos(minimo)} y la diferencia se pierde.`
    : "";
  return `Cálculo ya hecho con las tarifas oficiales (úsalo tal cual, no lo rehagas): ${partes.join("; ")}. Total: ${pesos(total)} (${creditos} créditos).${cobro}`;
}
