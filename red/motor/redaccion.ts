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
    ? ` Como es menos que el mínimo mensual, ese mes se descuentan ${pesos(minimo)} y lo no consumido se acumula.`
    : "";
  return `Cálculo ya hecho con las tarifas oficiales (úsalo tal cual, no lo rehagas): ${partes.join("; ")}. Total: ${pesos(total)} (${creditos} créditos).${cobro}`;
}
