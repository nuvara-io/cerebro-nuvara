import { ArrowRight, FileCheck2, FileText, Landmark, MessageCircle, Receipt, Rocket, Send, ShieldCheck, Users, Wallet } from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius } from "../brand/tokens";
import { Emphasis } from "../components/Emphasis";
import { Circulo, Dividida as DivididaBase, Inicio, MX, PanelReal, Pill, Slide, t, Tarjeta, Titular } from "./kit";
import { PanelCumplimiento, PanelEventos, PanelSoporte } from "./PanelesFE";

// Brochure comercial de facturación electrónica (10 diapositivas 1920×1080 → PDF).
// Copy desde red/facturacion-electronica-y-radian.md, configuracion-facturacion-
// electronica.md, factura-de-venta-y-notas.md, documento-soporte-electronico.md,
// eventos-radian.md y precios.md. Factura y Documentos son capturas reales
// anonimizadas; soporte y RADIAN son ilustrativos porque no están habilitados.

const TOTAL_FE = 10;
const icono = { size: 34, color: color.white, strokeWidth: 2.1 } as const;

const Dividida: React.FC<Omit<React.ComponentProps<typeof DivididaBase>, "total">> = (props) => <DivididaBase total={TOTAL_FE} {...props} />;

// 01 · Portada
export const PortadaFE: React.FC = () => (
  <AbsoluteFill style={{ background: color.accentDeep, overflow: "hidden" }}>
    <Img src={staticFile("posts/banco-156.jpg")} style={{ position: "absolute", top: 0, right: -400, height: "100%" }} />
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
        <p style={t(76, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Facturación electrónica</p>
        <p style={t(104, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>en la misma</p>
        <p style={t(104, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>plataforma.</p>
      </div>
      <p style={t(34, { color: color.white, maxWidth: 760 })}>
        Emite ante la DIAN, soporta tus compras y responde tus eventos RADIAN{" "}
        <strong style={{ fontWeight: 700 }}>sin salir de núvara.</strong>
      </p>
    </div>
    <p style={t(24, { position: "absolute", left: MX, bottom: 64, fontWeight: 700, color: color.white, letterSpacing: "0.02em" })}>nuvara.com.co</p>
  </AbsoluteFill>
);

const Tipo: React.FC<{ readonly icon: React.ReactNode; readonly titulo: string; readonly texto: string }> = ({ icon, titulo, texto }) => (
  <Tarjeta style={{ display: "grid", gap: 18, alignContent: "start", padding: 32 }}>
    <Circulo size={64}>{icon}</Circulo>
    <p style={t(30, { fontWeight: 700, color: color.textTitle, lineHeight: 1.15 })}>{titulo}</p>
    <p style={t(24)}>
      <Emphasis text={texto} />
    </p>
  </Tarjeta>
);

// 02 · Qué puedes emitir
export const QueEmites: React.FC = () => (
  <Slide n={2} total={TOTAL_FE}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 230, display: "grid", gap: 56 }}>
      <div style={{ display: "grid", gap: 24 }}>
        <Pill>QUÉ PUEDES EMITIR</Pill>
        <Titular azul="Tus documentos electrónicos," gris="en un solo lugar." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
        <Tipo icon={<FileText {...icono} />} titulo="Factura de venta" texto="Con sus *notas crédito y débito*." />
        <Tipo icon={<Receipt {...icono} />} titulo="Documento soporte" texto="Para compras a *no obligados a facturar*, con su nota de ajuste." />
        <Tipo icon={<FileCheck2 {...icono} />} titulo="Eventos RADIAN" texto="*Acuse*, *recibo*, *aceptación* y *reclamo* de tus compras a crédito." />
        <Tipo icon={<Users {...icono} />} titulo="Nómina electrónica" texto="Desde el módulo de *Nómina*, con sus notas de ajuste." />
      </div>
      <p style={t(24, { color: color.textBody })}>Hoy no se emite POS ni factura por contingencia, de exportación, AIU o de mandato.</p>
    </div>
  </Slide>
);

const Etapa: React.FC<{ readonly n: string; readonly titulo: string; readonly texto: string; readonly ultima?: boolean }> = ({ n, titulo, texto, ultima }) => (
  <div style={{ display: "flex", alignItems: "stretch", gap: 16 }}>
    <Tarjeta style={{ display: "grid", gap: 14, alignContent: "start", padding: 28, flex: 1 }}>
      <span style={t(40, { fontWeight: 700, color: color.accent })}>{n}</span>
      <p style={t(28, { fontWeight: 700, color: color.textTitle, lineHeight: 1.15 })}>{titulo}</p>
      <p style={t(23)}>
        <Emphasis text={texto} />
      </p>
    </Tarjeta>
    {ultima ? null : <ArrowRight size={30} color={color.accent} strokeWidth={2.4} style={{ alignSelf: "center", flexShrink: 0 }} />}
  </div>
);

// 03 · Cómo empiezas
export const ComoEmpiezas: React.FC = () => (
  <Slide n={3} total={TOTAL_FE}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 240, display: "grid", gap: 60 }}>
      <div style={{ display: "grid", gap: 24 }}>
        <Pill>CÓMO EMPIEZAS</Pill>
        <Titular azul="Lo dejas listo una vez" gris="y empiezas a emitir." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        <Etapa n="01" titulo="Solicitas el módulo" texto="Con tu *paquete anual*, que incluye firma digital y configuración." />
        <Etapa n="02" titulo="Habilitas ante la DIAN" texto="Pruebas, aprobación y producción. *Las pruebas no se cobran.*" />
        <Etapa n="03" titulo="Cargas tus resoluciones" texto="La de factura se puede *sincronizar desde MUISCA*." />
        <Etapa ultima n="04" titulo="Personalizas y emites" texto="Tu *logo*, tu plantilla de PDF y tus notas al pie." />
      </div>
    </div>
  </Slide>
);

// 04 · Emitir una factura
export const EmitirFactura: React.FC = () => (
  <Dividida
    n={4}
    pill="FACTURA DE VENTA"
    azul="Emitir una factura,"
    gris="en una sola hoja."
    lineas={[
      "En una sola hoja o *paso a paso*.",
      "*Vista previa* del PDF real, sin gastar consecutivo.",
      "Creas compradores *subiendo su RUT*.",
      "Contado o crédito, con *IVA y ReteIVA*.",
    ]}
  >
    <PanelReal src={staticFile("brochure-fe/factura.png")} etiqueta="nueva factura electrónica" proporcion={980 / 928} ancho={560} />
  </Dividida>
);

// 05 · Documentos
export const Documentos: React.FC = () => (
  <Dividida
    n={5}
    pill="DOCUMENTOS"
    azul="Sabes en qué va"
    gris="cada documento."
    lineas={[
      "De *En cola* a *Enviado a DIAN* y *Aceptado*.",
      "Si la DIAN rechaza, *el saldo se devuelve*.",
      "Descargas *PDF y XML* y reenvías por correo.",
      "Exportas a *Excel* o al libro auxiliar.",
    ]}
  >
    <PanelReal src={staticFile("brochure-fe/documentos.png")} etiqueta="documentos" proporcion={1260 / 444} />
  </Dividida>
);

// 06 · Notas y documento soporte
export const NotasYSoporte: React.FC = () => (
  <Dividida
    n={6}
    pill="NOTAS Y SOPORTE"
    azul="Corrige y soporta"
    gris="lo que compras."
    lineas={[
      "*Nota crédito* para devolver, rebajar o anular; *nota débito* para aumentar.",
      "*Documento soporte* para compras a no obligados, en Colombia o en el exterior.",
      "*Legalización de gastos* para recibos de viaje o de empleados.",
    ]}
  >
    <PanelSoporte />
  </Dividida>
);

// 07 · RADIAN
export const Radian: React.FC = () => (
  <Dividida
    n={7}
    pill="EVENTOS RADIAN"
    azul="Protege tu costo"
    gris="y tu IVA descontable."
    lineas={[
      "Responde a la DIAN sobre las facturas que *recibes a crédito*.",
      "Sin esos eventos, en una fiscalización *pueden desconocerte el costo*.",
      "Al enviar el recibo o la aceptación, núvara *envía antes los pasos que falten*.",
    ]}
  >
    <PanelEventos />
  </Dividida>
);

// 08 · Reglas y cumplimiento
export const Reglas: React.FC = () => (
  <Dividida
    n={8}
    pill="REGLAS Y CUMPLIMIENTO"
    azul="Tú pones las reglas,"
    gris="núvara las cumple."
    lineas={[
      "Reglas recomendadas que *tú habilitas*, o las tuyas.",
      "Generales o *por proveedor*, con espera en días hábiles.",
      "El *reclamo* siempre es a mano: nunca se automatiza.",
      "Ves lo *por vencer*, sin acuse y sin recibo.",
    ]}
  >
    <PanelCumplimiento />
  </Dividida>
);

const PAQUETES = [
  ["120", "$198.000"],
  ["1.000", "$580.000"],
  ["3.000", "$1.350.000"],
] as const;

// 09 · Precios
export const PreciosFE: React.FC = () => (
  <Slide n={9} total={TOTAL_FE}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 170, display: "grid", gap: 30 }}>
      <div style={{ display: "grid", gap: 18 }}>
        <Pill>PRECIOS</Pill>
        <Titular azul="Paquetes anuales." gris="Con el certificado incluido." size={60} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr", gap: 28 }}>
        <Tarjeta style={{ background: color.accent, display: "grid", gap: 12, alignContent: "start", padding: 30 }}>
          <Landmark {...icono} />
          <p style={t(56, { fontWeight: 700, color: color.white, lineHeight: 1 })}>$150.000</p>
          <p style={t(28, { fontWeight: 700, color: color.white })}>Paquete inicial</p>
          <p style={t(23, { color: color.white })}>30 documentos, certificado digital y configuración ante la DIAN.</p>
        </Tarjeta>
        <Tarjeta style={{ display: "grid", gap: 10, alignContent: "start", padding: 30 }}>
          <p style={t(28, { fontWeight: 700, color: color.textTitle })}>Más documentos al año</p>
          {PAQUETES.map(([docs, precio]) => (
            <div key={docs} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: `1px solid ${color.gray200}` }}>
              <span style={t(25)}>{docs} documentos</span>
              <strong style={t(27, { fontWeight: 700, color: color.accent })}>{precio}</strong>
            </div>
          ))}
          <p style={t(22)}>Más de 3.000 documentos: se cotiza.</p>
        </Tarjeta>
        <Tarjeta style={{ display: "grid", gap: 12, alignContent: "start", padding: 30 }}>
          <Wallet size={34} color={color.accent} strokeWidth={2.1} />
          <p style={t(56, { fontWeight: 700, color: color.accent, lineHeight: 1 })}>$100</p>
          <p style={t(28, { fontWeight: 700, color: color.textTitle })}>Por evento RADIAN</p>
          <p style={t(23)}>100 créditos por cada acuse o evento. No consume el paquete.</p>
        </Tarjeta>
      </div>
      <p style={t(24)}>
        <Emphasis text="Consumen el paquete la factura, las *notas* y el *documento soporte*. Vigencia de *un año*: si se acaban antes, el siguiente tiene *10 % de descuento*. El certificado sirve también para *nómina electrónica*." />
      </p>
    </div>
  </Slide>
);

// 10 · Cómo empezamos
export const EmpezamosFE: React.FC = () => {
  const i = { size: 32, color: color.accent, strokeWidth: 2.1 } as const;
  const blanco: React.CSSProperties = { background: color.white };
  return (
    <Slide n={10} total={TOTAL_FE} fondo="azul">
      <div style={{ position: "absolute", left: MX, right: MX, top: 200, display: "grid", gap: 56 }}>
        <div style={{ display: "grid", gap: 24 }}>
          <Pill blanco>CÓMO EMPEZAMOS</Pill>
          <div>
            <p style={t(60, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Empieza a facturar</p>
            <p style={t(88, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>con control desde el inicio.</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          <Inicio icon={<div style={{ ...blanco, borderRadius: "50%", padding: 16, display: "grid" }}><MessageCircle {...i} /></div>} titulo="Demostración en vivo" texto="Te mostramos el módulo y resolvemos tus dudas." />
          <Inicio icon={<div style={{ ...blanco, borderRadius: "50%", padding: 16, display: "grid" }}><ShieldCheck {...i} /></div>} titulo="Habilitación" texto="Te acompañamos ante la DIAN, con pruebas sin costo." />
          <Inicio icon={<div style={{ ...blanco, borderRadius: "50%", padding: 16, display: "grid" }}><Send {...i} /></div>} titulo="Primera factura" texto="Con tus resoluciones cargadas, emites desde núvara." />
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

export const DIAPOSITIVAS_FE = [PortadaFE, QueEmites, ComoEmpiezas, EmitirFactura, Documentos, NotasYSoporte, Radian, Reglas, PreciosFE, EmpezamosFE] as const;
