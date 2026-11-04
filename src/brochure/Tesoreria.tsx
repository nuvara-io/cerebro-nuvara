import { ArrowLeftRight, Banknote, HandCoins, Landmark, MessageCircle, Receipt, Rocket, Send, ShieldCheck, Users, Wallet } from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius } from "../brand/tokens";
import { Emphasis } from "../components/Emphasis";
import { Circulo, Dividida as DivididaBase, Inicio, MX, PanelReal, Pill, Slide, t, Tarjeta, Titular } from "./kit";

// Brochure comercial de tesorería (12 diapositivas 1920×1080 → PDF). Copy desde
// red/tesoreria.md, sus neuronas y red/precios.md. Los paneles son capturas reales
// de la empresa ficticia de la semilla local (Comercializadora Andina).

const TOTAL_TESORERIA = 12;
const icono = { size: 34, color: color.white, strokeWidth: 2.1 } as const;
const Dividida: React.FC<Omit<React.ComponentProps<typeof DivididaBase>, "total">> = (props) => <DivididaBase total={TOTAL_TESORERIA} {...props} />;

// 01 · Portada
export const PortadaTesoreria: React.FC = () => (
  <AbsoluteFill style={{ background: color.accentDeep, overflow: "hidden" }}>
    <Img src={staticFile("posts/banco-45.jpg")} style={{ position: "absolute", top: 0, right: -400, height: "100%" }} />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(90deg, ${color.accentDeep} 0%, ${color.accent} 38%, ${color.accent}d9 45%, ${color.accent}40 56%, ${color.accent}00 66%)`,
      }}
    />
    <Img src={logo.wordmarkWhite} style={{ position: "absolute", left: MX, top: 72, width: 170 }} />
    <div style={{ position: "absolute", left: MX, top: 300, width: 860, display: "grid", gap: 36 }}>
      <Pill blanco>PROPUESTA COMERCIAL</Pill>
      <div>
        <p style={t(76, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Tu tesorería completa,</p>
        <p style={t(104, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>del cobro</p>
        <p style={t(104, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>al banco.</p>
      </div>
      <p style={t(34, { color: color.white, maxWidth: 760 })}>
        Cobra, paga, concilia y controla tus cajas, con su asiento contable.{" "}
        <strong style={{ fontWeight: 700 }}>Tú revisas y apruebas.</strong>
      </p>
    </div>
    <p style={t(24, { position: "absolute", left: MX, bottom: 64, fontWeight: 700, color: color.white, letterSpacing: "0.02em" })}>nuvara.com.co</p>
  </AbsoluteFill>
);

const Parte: React.FC<{ readonly icon: React.ReactNode; readonly titulo: string; readonly texto: string }> = ({ icon, titulo, texto }) => (
  <Tarjeta style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, alignContent: "start", padding: 28 }}>
    <Circulo size={60}>{icon}</Circulo>
    <div style={{ display: "grid", gap: 8 }}>
      <p style={t(28, { fontWeight: 700, color: color.textTitle, lineHeight: 1.15 })}>{titulo}</p>
      <p style={t(22)}>
        <Emphasis text={texto} />
      </p>
    </div>
  </Tarjeta>
);

// 02 · Qué incluye
export const QueIncluyeTesoreria: React.FC = () => (
  <Slide n={2} total={TOTAL_TESORERIA}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 180, display: "grid", gap: 48 }}>
      <div style={{ display: "grid", gap: 24 }}>
        <Pill>QUÉ INCLUYE</Pill>
        <Titular azul="Todo tu dinero," gris="con su asiento contable." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        <Parte icon={<Landmark {...icono} />} titulo="Bancos" texto="*Cuentas* con saldo inicial, movimientos y transferencias." />
        <Parte icon={<HandCoins {...icono} />} titulo="Cobros" texto="*Comprobante de ingreso*, abonos, anticipos y cartera por antigüedad." />
        <Parte icon={<Receipt {...icono} />} titulo="Pagos" texto="*Comprobante de egreso*, retención, pagos programados y aprobaciones." />
        <Parte icon={<Users {...icono} />} titulo="Nómina" texto="Pago individual o por *lote bancario*, y desprendibles por correo." />
        <Parte icon={<ArrowLeftRight {...icono} />} titulo="Conciliación" texto="Extractos en *PDF o CSV*, cruzados con tus movimientos." />
        <Parte icon={<Wallet {...icono} />} titulo="Cajas" texto="Cajas operativas y menores, *arqueos*, fondeos y reposiciones." />
      </div>
    </div>
  </Slide>
);

// 03 · Cómo empiezas
export const ComoEmpiezasTesoreria: React.FC = () => (
  <Dividida
    n={3}
    pill="CÓMO EMPIEZAS"
    azul="Creas tus cuentas"
    gris="y arrancas con tu saldo real."
    lineas={[
      "Pides la activación en *Cuenta › Módulos*.",
      "Creas cada cuenta con su *banco*, tipo y moneda.",
      "La vinculas a su *cuenta del PUC* y registras el saldo inicial.",
    ]}
  >
    <PanelReal src={staticFile("brochure-tesoreria/cuentas.png")} etiqueta="cuentas bancarias" proporcion={1600 / 620} />
  </Dividida>
);

// 04 · Cobros
export const Cobros: React.FC = () => (
  <Dividida
    n={4}
    pill="CUENTAS POR COBRAR"
    azul="Tus ventas a crédito"
    gris="llegan a cartera."
    lineas={[
      "Marcas las facturas de *un comprador* y registras lo que pagó.",
      "Abonas por saldo, *uniforme* o *por antigüedad*.",
      "Sigues tu cartera con informes por *antigüedad*.",
    ]}
  >
    <PanelReal src={staticFile("brochure-tesoreria/ingreso.png")} etiqueta="comprobante de ingreso" proporcion={900 / 470} />
  </Dividida>
);

// 05 · Pagos
export const Pagos: React.FC = () => (
  <Dividida
    n={5}
    pill="CUENTAS POR PAGAR"
    azul="Pagas a tus proveedores"
    gris="sin doble retención."
    lineas={[
      "Ves lo *ya retenido* y lo que falta, con aviso de posible doble retención.",
      "El egreso trae el *GMF 4x1000* estimado.",
      "*Programa el pago*: no mueve dinero hasta que se apruebe.",
    ]}
  >
    <PanelReal src={staticFile("brochure-tesoreria/egreso.png")} etiqueta="comprobante de egreso" proporcion={900 / 670} />
  </Dividida>
);

// 06 · Pago de nómina
export const PagoNomina: React.FC = () => (
  <Dividida
    n={6}
    pill="PAGO DE NÓMINA"
    azul="Toda tu nómina"
    gris="en un lote bancario."
    lineas={[
      "Pagas a *un empleado* o preparas el lote para todos.",
      "Descargas el archivo *PAB* y lo subes a tu banco.",
      "Cada pago queda con su egreso y envías los *desprendibles*.",
    ]}
  >
    <PanelReal src={staticFile("brochure-tesoreria/lote.png")} etiqueta="lote bancario" proporcion={1000 / 420} />
  </Dividida>
);

// 07 · Conciliación
export const Conciliacion: React.FC = () => (
  <Dividida
    n={7}
    pill="CONCILIACIÓN BANCARIA"
    azul="Cargas el extracto"
    gris="y revisas lo que queda."
    lineas={[
      "Extractos en PDF de *Bancolombia, Davivienda o Nu*, o en CSV.",
      "Cruza por tus reglas, monto, tercero y fecha: *confirma lo seguro* y sugiere el resto.",
      "Descargas el *informe* en PDF o Excel.",
    ]}
  >
    <PanelReal src={staticFile("brochure-tesoreria/conciliacion.png")} etiqueta="conciliación bancaria" proporcion={1600 / 950} />
  </Dividida>
);

// 08 · Cajas
export const Cajas: React.FC = () => (
  <Dividida
    n={8}
    pill="CAJAS"
    azul="Tu efectivo,"
    gris="contado y con responsable."
    lineas={[
      "Cada caja tiene su *custodio* y su cuenta contable.",
      "Fondeas desde el banco y *repones* lo gastado.",
      "Si el arqueo no cuadra, la diferencia queda para que un contador la *clasifique*.",
    ]}
  >
    <PanelReal src={staticFile("brochure-tesoreria/caja.png")} etiqueta="cajas" proporcion={1600 / 700} />
  </Dividida>
);

// 09 · Comprobantes
export const Comprobantes: React.FC = () => (
  <Dividida
    n={9}
    pill="COMPROBANTES"
    azul="Cada movimiento"
    gris="deja su comprobante."
    lineas={[
      "Cobros, pagos, fondeos y reposiciones quedan con su *asiento*.",
      "Exportas egresos e ingresos a *tu programa contable*. ¿No está? *Lo generamos*.",
      "Las líneas sin factura se clasifican contra una *cuenta del PUC*.",
    ]}
  >
    <PanelReal src={staticFile("brochure-tesoreria/exportar.png")} etiqueta="exportar comprobantes" proporcion={1240 / 600} />
  </Dividida>
);

const Telefono: React.FC<{ readonly src: string }> = ({ src }) => (
  <Img src={staticFile(src)} style={{ width: 268, borderRadius: radius.frame * 2, border: `6px solid ${color.gray700}` }} />
);

// 10 · App móvil
export const AppMovil: React.FC = () => (
  <Dividida
    n={10}
    pill="APP MÓVIL"
    azul="Tus clientes y tu equipo,"
    gris="también en el celular."
    lineas={[
      "Tus clientes ven su empresa y *aprueban los pagos*.",
      "Tu equipo registra gastos con la *foto del soporte*.",
      "Cada uno ve *solo lo que le asignas*.",
    ]}
  >
    <div style={{ display: "flex", justifyContent: "center", gap: 36 }}>
      <Telefono src="brochure-tesoreria/app-cliente.png" />
      <Telefono src="brochure-tesoreria/app-operador.png" />
    </div>
  </Dividida>
);

// 11 · Precio
export const PrecioTesoreria: React.FC = () => (
  <Slide n={11} total={TOTAL_TESORERIA}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 200, display: "grid", gap: 44 }}>
      <div style={{ display: "grid", gap: 18 }}>
        <Pill>PRECIO</Pill>
        <Titular azul="Tesorería va incluida" gris="con tu suscripción de causación." size={60} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        <Tarjeta style={{ background: color.accent, display: "grid", gap: 12, alignContent: "start", padding: 32 }}>
          <Banknote {...icono} />
          <p style={t(52, { fontWeight: 700, color: color.white, lineHeight: 1 })}>$270.000</p>
          <p style={t(26, { color: color.white })}>Al mes, con 500 causaciones</p>
        </Tarjeta>
        <Tarjeta style={{ background: color.accent, display: "grid", gap: 12, alignContent: "start", padding: 32 }}>
          <Banknote {...icono} />
          <p style={t(52, { fontWeight: 700, color: color.white, lineHeight: 1 })}>$510.000</p>
          <p style={t(26, { color: color.white })}>Al mes, con 1.000 causaciones</p>
        </Tarjeta>
        <Tarjeta style={{ display: "grid", gap: 12, alignContent: "start", padding: 32 }}>
          <Wallet size={34} color={color.accent} strokeWidth={2.1} />
          <p style={t(34, { fontWeight: 700, color: color.textTitle, lineHeight: 1.1 })}>Caja es un módulo aparte</p>
          <p style={t(24)}>Si manejas efectivo, pídelo junto con Tesorería.</p>
        </Tarjeta>
      </div>
      <p style={t(26)}>
        <Emphasis text="La activas en *Cuenta › Módulos › Solicitar habilitación*, que abre el chat con el equipo." />
      </p>
    </div>
  </Slide>
);

// 12 · Cómo empezamos
export const EmpezamosTesoreria: React.FC = () => {
  const i = { size: 32, color: color.accent, strokeWidth: 2.1 } as const;
  const circulo: React.CSSProperties = { background: color.white, borderRadius: "50%", padding: 16, display: "grid" };
  return (
    <Slide n={12} total={TOTAL_TESORERIA} fondo="azul">
      <div style={{ position: "absolute", left: MX, right: MX, top: 200, display: "grid", gap: 56 }}>
        <div style={{ display: "grid", gap: 24 }}>
          <Pill blanco>CÓMO EMPEZAMOS</Pill>
          <div>
            <p style={t(60, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Lleva tu tesorería a núvara</p>
            <p style={t(88, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>con el control en tus manos.</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          <Inicio icon={<div style={circulo}><MessageCircle {...i} /></div>} titulo="Demostración en vivo" texto="Te mostramos el módulo y resolvemos tus dudas." />
          <Inicio icon={<div style={circulo}><ShieldCheck {...i} /></div>} titulo="Activamos el módulo" texto="El equipo lo habilita en las empresas que necesitas." />
          <Inicio icon={<div style={circulo}><Send {...i} /></div>} titulo="Primera conciliación" texto="Creas tus cuentas y cargas tu primer extracto." />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "20px 40px", borderRadius: radius.pill, background: color.white, color: color.accent, fontFamily: font.sans, fontSize: 32, fontWeight: 700 }}>
            <Rocket size={32} color={color.accent} strokeWidth={2.2} /> Agenda tu demostración en vivo
          </span>
          <span style={t(28, { fontWeight: 600, color: color.white })}>WhatsApp +57 312 748 3536</span>
        </div>
      </div>
    </Slide>
  );
};

export const DIAPOSITIVAS_TESORERIA = [PortadaTesoreria, QueIncluyeTesoreria, ComoEmpiezasTesoreria, Cobros, Pagos, PagoNomina, Conciliacion, Cajas, Comprobantes, AppMovil, PrecioTesoreria, EmpezamosTesoreria] as const;
