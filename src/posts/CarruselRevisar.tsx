import { CircleCheck, FileText, Scale } from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, gradient, radius, shadow } from "../brand/tokens";
import { PortadaFoto } from "../components/PortadaFoto";
import { MarcaDeAgua } from "./modulos/kit";

// Carrusel orgánico «Antes de aprobar una causación, revisa esto» (p66).
// Primera pieza con la estructura de «Carruseles que se leen hasta el final»
// (diseno/redes.md): gancho, ejemplo, diagrama, información práctica y un solo
// llamado. Formato 3:4 en prueba: 1080×1440, con el contenido dentro de 180px
// arriba y abajo y 50px a los lados. Datos de red/causar-y-revisar.md.

const W = 1080;
const H = 1440;
const SEGURO = { arriba: 180, abajo: 180, lado: 90 };
const TOTAL = 10;

const t = (fontSize: number, extra: React.CSSProperties = {}): React.CSSProperties => ({
  margin: 0,
  fontFamily: font.sans,
  fontSize,
  lineHeight: 1.25,
  letterSpacing: "-0.01em",
  color: color.textTitle,
  ...extra,
});

// Lámina base: fondo gris con marca de agua, wordmark arriba, número y >>> abajo
const Lamina: React.FC<{ readonly n: number; readonly children: React.ReactNode }> = ({ n, children }) => (
  <AbsoluteFill style={{ background: gradient.backdrop, overflow: "hidden" }}>
    <MarcaDeAgua size={1250} left={-520} top={560} tinta="rgba(255,255,255,0.75)" />
    <div style={{ position: "absolute", top: SEGURO.arriba - 70, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
      <Img src={logo.wordmark} style={{ width: 150 }} />
    </div>
    <div style={{ position: "absolute", top: SEGURO.arriba + 40, left: SEGURO.lado, right: SEGURO.lado, bottom: SEGURO.abajo + 60, display: "grid", alignContent: "center", gap: 40 }}>
      {children}
    </div>
    <div style={{ position: "absolute", bottom: SEGURO.abajo - 40, left: SEGURO.lado, right: SEGURO.lado, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={t(24, { fontWeight: 600, color: color.gray500 })}>
        {n} / {TOTAL}
      </span>
      {n < TOTAL ? <span style={t(44, { fontWeight: 700, color: color.accent, letterSpacing: "-0.18em" })}>&gt;&gt;&gt;</span> : null}
    </div>
  </AbsoluteFill>
);

const Pill: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => (
  <span style={{ justifySelf: "start", padding: "8px 22px", borderRadius: radius.pill, background: color.accent, color: color.white, fontFamily: font.sans, fontSize: 24, fontWeight: 700, letterSpacing: "0.04em" }}>
    {children}
  </span>
);

const Titular: React.FC<{ readonly azul: string; readonly gris: string; readonly size?: number }> = ({ azul, gris, size = 70 }) => (
  <div>
    <p style={t(size, { fontWeight: 700, color: color.accent, lineHeight: 1.08 })}>{azul}</p>
    <p style={t(size, { fontWeight: 700, lineHeight: 1.08 })}>{gris}</p>
  </div>
);

const Tarjeta: React.FC<{ readonly children: React.ReactNode; readonly style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ padding: "44px 44px", borderRadius: radius.card * 1.5, background: color.white, boxShadow: shadow.card, display: "grid", gap: 14, ...style }}>{children}</div>
);

// `**texto**` pasa a Bold azul, una o dos palabras por bloque
const Cuerpo: React.FC<{ readonly texto: string; readonly size?: number }> = ({ texto, size = 36 }) => (
  <p style={t(size, { color: color.textBody, lineHeight: 1.35 })}>
    {texto.split(/(\*\*[^*]+\*\*)/).map((p, i) =>
      p.startsWith("**") ? (
        <strong key={i} style={{ fontWeight: 700, color: color.accent }}>
          {p.slice(2, -2)}
        </strong>
      ) : (
        p
      ),
    )}
  </p>
);

// Una revisión práctica: número en círculo, pregunta y respuesta
const Revision: React.FC<{ readonly n: number; readonly pregunta: string; readonly respuesta: string }> = ({ n, pregunta, respuesta }) => (
  <Tarjeta>
    <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
      <span style={{ width: 76, height: 76, flexShrink: 0, borderRadius: 38, background: color.accent, color: color.white, display: "grid", placeItems: "center", fontFamily: font.sans, fontSize: 38, fontWeight: 700 }}>{n}</span>
      <p style={t(50, { fontWeight: 700, lineHeight: 1.12 })}>{pregunta}</p>
    </div>
    <Cuerpo texto={respuesta} size={40} />
  </Tarjeta>
);

// 1 · Gancho, con la portada de foto y marco
export const C1 = () => (
  <PortadaFoto foto={staticFile("posts/banco-79.jpg")} enfoque="55% 30%" linea1="Antes de aprobar una causación," linea2="revisa esto." linea3="**Guárdalo** para tu próximo cierre." animar={false} />
);

// 2 · Ejemplo
export const C2 = () => (
  <Lamina n={2}>
    <Pill>UN EJEMPLO</Pill>
    <Titular azul="Una sola factura" gris="puede implicar más de diez decisiones contables." size={64} />
    <Tarjeta>
      <FileText size={44} color={color.accent} strokeWidth={1.75} />
      <Cuerpo texto="Una factura de restaurante puede traer **impuesto al consumo** y **propina**. Cada línea va a una cuenta distinta, y ninguna es IVA descontable." />
    </Tarjeta>
  </Lamina>
);

// 3 · Ejemplo: por qué importa
export const C3 = () => (
  <Lamina n={3}>
    <Pill>POR QUÉ IMPORTA</Pill>
    <Titular azul="Lo que apruebas" gris="también enseña." />
    <Cuerpo texto="núvara aprende de tus correcciones y de tus aprobaciones, **por empresa**. Si un error pasa sin revisar, puede repetirse en las siguientes facturas del mismo proveedor." size={38} />
    <Cuerpo texto="Por eso conviene revisar unas pocas facturas de cada proveedor **antes** de aprobar en bloque." size={38} />
  </Lamina>
);

// 4 · Diagrama: cómo se arma el asiento de una compra
const Fila: React.FC<{ readonly de: string; readonly a: string }> = ({ de, a }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 64px 1.25fr", alignItems: "center", gap: 10 }}>
    <div style={{ padding: "30px 28px", borderRadius: radius.card, background: color.white, boxShadow: shadow.card }}>
      <p style={t(36, { fontWeight: 700 })}>{de}</p>
    </div>
    <span style={t(40, { fontWeight: 700, color: color.accent, textAlign: "center" })}>→</span>
    <div style={{ padding: "30px 28px", borderRadius: radius.card, background: color.accentTint, border: `2px solid ${color.accent}` }}>
      <p style={t(32, { fontWeight: 600, color: color.accentDeep })}>{a}</p>
    </div>
  </div>
);
export const C4 = () => (
  <Lamina n={4}>
    <Pill>EL ASIENTO DE UNA COMPRA</Pill>
    <Titular azul="Cada valor" gris="tiene su lugar." size={64} />
    <div style={{ display: "grid", gap: 26 }}>
      <Fila de="Valor bruto" a="Gasto (5), costo (6 o 7), inventario (14) o activo fijo (15)" />
      <Fila de="IVA descontable" a="Grupo 24" />
      <Fila de="Retenciones" a="Según la condición del proveedor" />
      <Fila de="Total" a="Cuenta por pagar" />
    </div>
  </Lamina>
);

// 5 · Diagrama: el cuadre
export const C5 = () => (
  <Lamina n={5}>
    <Pill>EL CUADRE</Pill>
    <Titular azul="Débitos y créditos" gris="siempre suman igual." size={64} />
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 24 }}>
      <Tarjeta style={{ justifyItems: "center", textAlign: "center" }}>
        <p style={t(30, { fontWeight: 600, color: color.gray500 })}>Débitos</p>
        <p style={t(46, { fontWeight: 700 })}>Gasto + IVA</p>
      </Tarjeta>
      <Scale size={72} color={color.accent} strokeWidth={1.75} />
      <Tarjeta style={{ justifyItems: "center", textAlign: "center" }}>
        <p style={t(30, { fontWeight: 600, color: color.gray500 })}>Créditos</p>
        <p style={t(46, { fontWeight: 700 })}>Retenciones + por pagar</p>
      </Tarjeta>
    </div>
    <Cuerpo texto="Y el total del asiento coincide con el de la factura. Si no cuadra, **núvara te avisa**: casi siempre es un impuesto, un descuento o un cargo que no se detectó." />
  </Lamina>
);

// 6 a 9 · Información práctica
export const C6 = () => (
  <Lamina n={6}>
    <Pill>REVISA ESTO</Pill>
    <Revision n={1} pregunta="¿Cuadra?" respuesta="Débitos y créditos suman igual y el total coincide con la factura **original**, que ves al lado del asiento." />
    <Revision n={2} pregunta="¿Cada valor en su grupo?" respuesta="El IVA en el **grupo 24**; el valor bruto en 5, 6, 7, 14 o 15, y el total en una **cuenta por pagar**." />
  </Lamina>
);
export const C7 = () => (
  <Lamina n={7}>
    <Pill>REVISA ESTO</Pill>
    <Revision n={3} pregunta="¿Trae impuesto al consumo?" respuesta="No es IVA descontable: va como **mayor valor del gasto**." />
    <Revision n={4} pregunta="¿Trae propina?" respuesta="Los «otros cargos» de un restaurante van con una línea de débito a la **cuenta de propinas**." />
  </Lamina>
);
export const C8 = () => (
  <Lamina n={8}>
    <Pill>REVISA ESTO</Pill>
    <Revision n={5} pregunta="¿El proveedor tiene un anticipo?" respuesta="Asócialo: la contrapartida pasa a la **cuenta del anticipo**." />
    <Revision n={6} pregunta="¿Es una nota crédito?" respuesta="La cuenta debe ser la de **devoluciones en compras**." />
  </Lamina>
);
export const C9 = () => (
  <Lamina n={9}>
    <Pill>Y UNA MÁS</Pill>
    <Titular azul="¿Es gasto" gris="de la empresa?" />
    <Cuerpo texto="Las facturas que no son gasto de la empresa, o los documentos internos, se **eliminan antes de causar**. Así no se cuelan en el cierre." size={38} />
    <Tarjeta style={{ display: "flex", alignItems: "center", gap: 22 }}>
      <CircleCheck size={48} color={color.accent} strokeWidth={2} />
      <Cuerpo texto="Si corriges una cuenta, eliges si **núvara la aprende** o si vale solo para esa factura." size={36} />
    </Tarjeta>
  </Lamina>
);

// 10 · Un solo llamado
export const C10 = () => (
  <Lamina n={10}>
    <Titular azul="Tú revisas, validas" gris="y apruebas." size={72} />
    <Cuerpo texto="En núvara ves la **factura original al lado del asiento** y nada se exporta a tu programa contable sin tu aprobación." size={38} />
    <div style={{ display: "flex", alignItems: "center", gap: 18, justifySelf: "start", padding: "24px 36px", borderRadius: radius.pill * 2, background: color.accent }}>
      <CircleCheck size={40} color={color.white} strokeWidth={2} />
      <span style={t(36, { fontWeight: 700, color: color.white })}>Agenda tu demostración en vivo</span>
    </div>
    <p style={t(32, { fontWeight: 700, color: color.accent })}>nuvara.com.co</p>
    <p style={t(28, { color: color.gray500 })}>Guarda este carrusel para tu próximo cierre.</p>
  </Lamina>
);

export const CARRUSEL_REVISAR = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10] as const;
export const CARRUSEL = { ancho: W, alto: H } as const;
