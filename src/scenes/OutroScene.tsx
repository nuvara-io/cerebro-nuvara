import { Img, Interactive } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius, type } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { FadeUp } from "../components/FadeUp";
import { Nuvi } from "../components/Nuvi";
import { TwoToneTitle } from "../components/TwoToneTitle";

type Props = {
  // CTA concreto y accionable. Nunca "demo": "demostración en vivo".
  readonly primary: string;
  readonly secondary: string;
  // Frase de cierre en dos tonos
  readonly taglineLead: string;
  readonly taglineRest: string;
};

const buttonBase: React.CSSProperties = {
  height: 112,
  padding: "0 52px",
  display: "inline-flex",
  alignItems: "center",
  boxSizing: "border-box",
  borderRadius: radius.pill,
  fontFamily: font.sans,
  ...type.button,
};

const OutroSceneInner = ({ primary, secondary, taglineLead, taglineRest }: Props) => (
  <>
    <Backdrop />
    <div
      style={{
        position: "absolute",
        left: 192,
        top: 0,
        bottom: 0,
        width: 1100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 56,
      }}
    >
      <FadeUp>
        <Img src={logo.wordmark} style={{ width: 360 }} />
      </FadeUp>
      <TwoToneTitle lead={taglineLead} rest={taglineRest} size="tagline" delay={6} />
      <FadeUp delay={14}>
        <div style={{ display: "flex", gap: 28 }}>
          <span style={{ ...buttonBase, color: color.white, background: color.accent }}>{primary}</span>
          {secondary ? (
            <span
              style={{
                ...buttonBase,
                color: color.accent,
                background: color.white,
                border: `3px solid ${color.accent}`,
              }}
            >
              {secondary}
            </span>
          ) : null}
        </div>
      </FadeUp>
    </div>
    <Nuvi pose="celebrating" height={560} right={100} bottom={240} delay={10} />
  </>
);

export const OutroScene = Interactive.create({
  Component: OutroSceneInner,
  layout: "absolute-fill",
  schema: {
    primary: { type: "string", default: "", description: "CTA primario" },
    secondary: { type: "string", default: "", description: "CTA secundario (opcional)" },
    taglineLead: { type: "string", default: "", description: "Cierre, línea azul" },
    taglineRest: { type: "string", default: "", description: "Cierre, línea gris" },
  },
});
