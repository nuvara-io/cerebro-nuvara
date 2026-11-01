import { Building2, CircleCheck, Inbox, ListChecks, Wallet } from "lucide-react";
import { Img } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius, shadow } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { Emphasis } from "../components/Emphasis";
import { Highlight } from "../components/Highlight";

// Post 1080×1350 que define núvara con la línea de redes del cerebro gráfico.
// Copy desde conocimiento/producto.md y sitio-web.md; solo datos confirmados, sin cifras de marketing.
// Pieza estática: se renderiza como <Still>.

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: font.sans,
  fontSize: 68,
  fontWeight: 700,
  whiteSpace: "nowrap",
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
};

const bodyStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: font.sans,
  fontSize: 31,
  lineHeight: 1.35,
  color: color.textBody,
};

const Step: React.FC<{
  readonly number: string;
  readonly icon: React.ReactNode;
  readonly label: string;
  readonly text: string;
}> = ({ number, icon, label, text }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 30,
      padding: "26px 36px 26px 28px",
      borderRadius: radius.card,
      background: color.white,
      boxShadow: shadow.card,
    }}
  >
    <div
      style={{
        width: 88,
        height: 88,
        flexShrink: 0,
        borderRadius: "50%",
        background: color.accent,
        display: "grid",
        placeItems: "center",
      }}
    >
      {icon}
    </div>
    <div style={{ display: "grid", gap: 6 }}>
      <p style={{ margin: 0, fontFamily: font.sans, fontSize: 30, fontWeight: 700, color: color.textTitle }}>
        <span style={{ color: color.accent, marginRight: 14, fontVariantNumeric: "tabular-nums" }}>{number}</span>
        {label}
      </p>
      <p style={{ ...bodyStyle, fontSize: 25, lineHeight: 1.3 }}>
        <Emphasis text={text} />
      </p>
    </div>
  </div>
);

const Fact: React.FC<{ readonly icon: React.ReactNode; readonly text: string }> = ({ icon, text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
    {icon}
    <p style={{ margin: 0, fontFamily: font.sans, fontSize: 24, fontWeight: 600, color: color.textTitle }}>{text}</p>
  </div>
);

export const QueEsNuvara: React.FC = () => {
  const iconProps = { size: 40, color: color.white, strokeWidth: 2.25 } as const;
  const factIconProps = { size: 34, color: color.accent, strokeWidth: 2 } as const;

  return (
    <>
      <Backdrop format="post" />

      <div style={{ position: "absolute", top: 84, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Img src={logo.wordmark} style={{ width: 150 }} />
      </div>

      <div style={{ position: "absolute", left: 76, right: 76, top: 196, display: "grid", gap: 40 }}>
        <div>
          <Highlight text="¿Qué es núvara?" fontSize={40} />
        </div>

        <div>
          <p style={{ ...titleStyle, color: color.accent }}>Causación contable</p>
          <p style={{ ...titleStyle, color: color.textTitle }}>sin digitar, con control.</p>
        </div>

        <p style={bodyStyle}>
          <Emphasis text="La plataforma que *interpreta tus facturas electrónicas* y prepara cada causación para que *tú revises y apruebes.*" />
        </p>

        <div style={{ display: "grid", gap: 20, marginTop: 4 }}>
          <Step
            number="01"
            icon={<Inbox {...iconProps} />}
            label="Trae"
            text="Tus facturas desde la *DIAN* y tu *correo.*"
          />
          <Step
            number="02"
            icon={<ListChecks {...iconProps} />}
            label="Prepara"
            text="Arma la causación: *PUC, IVA, retenciones* y bases."
          />
          <Step
            number="03"
            icon={<CircleCheck {...iconProps} />}
            label="Tú apruebas"
            text="Y exportas a *Siigo, World Office* y más."
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <Fact icon={<Building2 {...factIconProps} />} text="Todas tus empresas, una cuenta" />
          <Fact icon={<Wallet {...factIconProps} />} text="Pagas tu consumo real" />
        </div>
      </div>

      <p
        style={{
          position: "absolute",
          bottom: 64,
          left: 0,
          right: 0,
          margin: 0,
          textAlign: "center",
          fontFamily: font.sans,
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: "0.02em",
          color: color.accent,
        }}
      >
        nuvara.com.co
      </p>
    </>
  );
};
