import { AbsoluteFill, Img } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius, shadow } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";

// Piezas compartidas del brochure comercial (diapositivas 1920×1080 que se
// exportan juntas a PDF). Misma línea gráfica de redes llevada a 16:9.

export const MX = 128;
export const TOTAL = 13;

export const t = (fontSize: number, extra: React.CSSProperties = {}): React.CSSProperties => ({
  margin: 0,
  fontFamily: font.sans,
  fontSize,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: color.textBody,
  ...extra,
});

// Diapositiva de fondo gris con wordmark arriba a la izquierda y número abajo
export const Slide: React.FC<{ readonly n: number; readonly children: React.ReactNode; readonly fondo?: "gris" | "azul" }> = ({
  n,
  children,
  fondo = "gris",
}) => (
  <AbsoluteFill style={{ background: fondo === "azul" ? color.accent : undefined, overflow: "hidden" }}>
    {fondo === "gris" ? <Backdrop /> : null}
    <Img src={fondo === "azul" ? logo.wordmarkWhite : logo.wordmark} style={{ position: "absolute", left: MX, top: 72, width: 150 }} />
    <p
      style={t(22, {
        position: "absolute",
        right: MX,
        bottom: 56,
        fontWeight: 600,
        color: fondo === "azul" ? color.white : color.textBody,
        fontVariantNumeric: "tabular-nums",
      })}
    >
      {String(n).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
    </p>
    <p
      style={t(22, {
        position: "absolute",
        left: MX,
        bottom: 56,
        fontWeight: 700,
        letterSpacing: "0.02em",
        color: fondo === "azul" ? color.white : color.accent,
      })}
    >
      nuvara.com.co
    </p>
    {children}
  </AbsoluteFill>
);

// Titular en dos tonos: primera línea azul, segunda gris
export const Titular: React.FC<{ readonly azul: string; readonly gris: string; readonly size?: number }> = ({ azul, gris, size = 72 }) => (
  <div>
    <p style={t(size, { fontWeight: 700, lineHeight: 1.05, color: color.accent })}>{azul}</p>
    <p style={t(size, { fontWeight: 700, lineHeight: 1.05, color: color.textTitle })}>{gris}</p>
  </div>
);

export const Pill: React.FC<{ readonly children: React.ReactNode; readonly blanco?: boolean }> = ({ children, blanco }) => (
  <span
    style={{
      justifySelf: "start",
      alignSelf: "start",
      padding: "8px 22px",
      borderRadius: radius.pill,
      background: blanco ? color.white : color.accent,
      color: blanco ? color.accent : color.white,
      fontFamily: font.sans,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "0.04em",
    }}
  >
    {children}
  </span>
);

export const Tarjeta: React.FC<{ readonly children: React.ReactNode; readonly style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ background: color.white, borderRadius: radius.card, boxShadow: shadow.card, padding: 36, ...style }}>{children}</div>
);

// Ícono en círculo azul con ícono blanco
export const Circulo: React.FC<{ readonly children: React.ReactNode; readonly size?: number }> = ({ children, size = 72 }) => (
  <div
    style={{
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: "50%",
      background: color.accent,
      display: "grid",
      placeItems: "center",
    }}
  >
    {children}
  </div>
);

// Marco para una captura real de la plataforma (o su espacio mientras no exista)
export const Captura: React.FC<{ readonly src?: string; readonly style?: React.CSSProperties; readonly etiqueta: string }> = ({ src, style, etiqueta }) => (
  <div
    style={{
      background: color.white,
      borderRadius: radius.frame,
      boxShadow: shadow.frame,
      overflow: "hidden",
      display: "grid",
      placeItems: "center",
      ...style,
    }}
  >
    {src ? (
      <Img src={src} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left" }} />
    ) : (
      <p style={t(24, { color: color.gray500, textAlign: "center", padding: 40 })}>Captura de la plataforma: {etiqueta}</p>
    )}
  </div>
);
