import { ArrowDown, CircleCheck, Clock, ShieldCheck, Workflow } from "lucide-react";
import { Img } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius, shadow } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { Emphasis } from "../components/Emphasis";
import { Highlight } from "../components/Highlight";

// Post 1080×1350 con la línea de redes del cerebro gráfico.
// Cifras tomadas del Brand OS (propuesta de valor racional, tiempo medido).
// Es una pieza estática: nada se anima, se renderiza como <Still>.

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: font.sans,
  fontSize: 58,
  fontWeight: 700,
  whiteSpace: "nowrap",
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
};

const bodyStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: font.sans,
  fontSize: 30,
  lineHeight: 1.3,
  color: color.textBody,
};

const Row: React.FC<{ readonly icon: React.ReactNode; readonly text: string }> = ({ icon, text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
    <div
      style={{
        width: 84,
        height: 84,
        flexShrink: 0,
        borderRadius: "50%",
        background: color.accent,
        display: "grid",
        placeItems: "center",
      }}
    >
      {icon}
    </div>
    <p style={{ ...bodyStyle, fontSize: 28 }}>
      <Emphasis text={text} />
    </p>
  </div>
);

// Línea gris simulada de texto dentro de un documento
const Line: React.FC<{ readonly width: string }> = ({ width }) => (
  <div style={{ width, height: 10, borderRadius: 5, background: color.gray200 }} />
);

const EntryRow: React.FC<{ readonly side: "D" | "C"; readonly account: string; readonly name: string }> = ({
  side,
  account,
  name,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontFamily: font.sans,
      fontSize: 20,
      color: color.textTitle,
      whiteSpace: "nowrap",
    }}
  >
    <span
      style={{
        width: 30,
        height: 30,
        borderRadius: 8,
        display: "grid",
        placeItems: "center",
        fontWeight: 700,
        fontSize: 16,
        background: side === "D" ? color.accentTint : color.emerald20,
        color: side === "D" ? color.accent : color.emerald100,
      }}
    >
      {side}
    </span>
    <span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{account}</span>
    <span>{name}</span>
  </div>
);

export const Post500Causaciones: React.FC = () => {
  return (
    <>
      <Backdrop format="post" />

      <div style={{ position: "absolute", top: 100, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Img src={logo.wordmark} style={{ width: 120 }} />
      </div>

      {/* Columna de texto */}
      <div style={{ position: "absolute", left: 76, top: 260, width: 580, display: "grid", gap: 64 }}>
        <div>
          <p style={{ ...titleStyle, color: color.accent }}>500 causaciones.</p>
          <p style={{ ...titleStyle, color: color.textTitle }}>Una hora o menos.</p>
        </div>
        <div>
          <Highlight text="sin digitar" fontSize={40} />
        </div>
        <p style={bodyStyle}>
          <Emphasis text="núvara interpreta cada factura y construye el *asiento contable* para que tú *revises y apruebes.*" />
        </p>
        <Row
          icon={<Clock size={38} color={color.white} strokeWidth={2.25} />}
          text="Cerca de *15 segundos* por causación."
        />
        <Row
          icon={<ShieldCheck size={38} color={color.white} strokeWidth={2.25} />}
          text="IVA, retenciones y PUC, con el *criterio de tu empresa.*"
        />
        <div
          style={{
            justifySelf: "start",
            display: "inline-flex",
            alignItems: "center",
            gap: 32,
            padding: "26px 48px 26px 30px",
            borderRadius: radius.card,
            background: color.white,
            boxShadow: shadow.card,
          }}
        >
          <CircleCheck size={48} color={color.accent} strokeWidth={1.75} />
          <p style={{ margin: 0, fontFamily: font.sans, fontSize: 30, lineHeight: 1.25, color: color.textTitle }}>
            Tú mantienes
            <br />
            <strong style={{ color: color.accent }}>el control.</strong>
          </p>
        </div>
      </div>

      {/* Diagrama: factura → núvara interpreta → asiento contable */}
      <div
        style={{
          position: "absolute",
          left: 696,
          top: 380,
          width: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
        }}
      >
        <div
          style={{
            width: 210,
            padding: "28px 26px",
            boxSizing: "border-box",
            borderRadius: 10,
            background: color.white,
            boxShadow: shadow.card,
            display: "grid",
            gap: 14,
          }}
        >
          <p style={{ margin: "0 0 6px", fontFamily: font.sans, fontSize: 24, fontWeight: 700, color: color.accentDeep }}>
            Factura
          </p>
          <Line width="100%" />
          <Line width="70%" />
          <Line width="85%" />
          <Line width="55%" />
        </div>

        <ArrowDown size={34} color={color.gray500} strokeWidth={2} />

        <div
          style={{
            width: 104,
            height: 68,
            borderRadius: radius.pill,
            background: color.accent,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Workflow size={36} color={color.white} strokeWidth={2} />
        </div>

        <ArrowDown size={34} color={color.gray500} strokeWidth={2} />

        <div
          style={{
            width: 320,
            padding: "24px 22px",
            boxSizing: "border-box",
            borderRadius: radius.card,
            background: color.white,
            boxShadow: shadow.card,
            display: "grid",
            gap: 14,
          }}
        >
          <p style={{ margin: "0 0 4px", fontFamily: font.sans, fontSize: 22, fontWeight: 700, color: color.accentDeep }}>
            Asiento contable
          </p>
          <EntryRow side="D" account="5135" name="Servicios" />
          <EntryRow side="D" account="2408" name="IVA descontable" />
          <EntryRow side="C" account="2365" name="Retención" />
          <EntryRow side="C" account="2205" name="Proveedores" />
        </div>
      </div>
    </>
  );
};
