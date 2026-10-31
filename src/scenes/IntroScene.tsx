import { Img, Interactive } from "remotion";
import { logo } from "../brand/assets";
import { space } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { FadeUp } from "../components/FadeUp";
import { Highlight } from "../components/Highlight";
import { Nuvi } from "../components/Nuvi";
import { StatCard } from "../components/StatCard";
import { TwoToneTitle } from "../components/TwoToneTitle";

type Props = {
  // Titular en dos tonos: lead en azul, rest en gris. Máx. ~14 caracteres por línea.
  readonly titleLead: string;
  readonly titleRest: string;
  // Pill turquesa opcional bajo el título
  readonly highlight: string;
  // Cifra verificable; 0 oculta la tarjeta
  readonly statValue: number;
  readonly statLabel: string;
  readonly statIcon: string;
};

const IntroSceneInner = ({ titleLead, titleRest, highlight, statValue, statLabel, statIcon }: Props) => (
  <>
    <Backdrop />
    <FadeUp>
      <div style={{ position: "absolute", top: space.marginTop, width: 1920, display: "flex", justifyContent: "center" }}>
        <Img src={logo.wordmark} style={{ width: 240 }} />
      </div>
    </FadeUp>
    <div
      style={{
        position: "absolute",
        left: space.marginX,
        top: 0,
        bottom: 0,
        width: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 48,
      }}
    >
      <TwoToneTitle lead={titleLead} rest={titleRest} delay={6} />
      {highlight ? (
        <FadeUp delay={14}>
          <Highlight text={highlight} />
        </FadeUp>
      ) : null}
      {statValue > 0 ? <StatCard value={statValue} label={statLabel} icon={statIcon} delay={18} /> : null}
    </div>
    <Nuvi pose="onboarding" height={720} right={170} bottom={150} delay={10} />
  </>
);

export const IntroScene = Interactive.create({
  Component: IntroSceneInner,
  layout: "absolute-fill",
  schema: {
    titleLead: { type: "string", default: "", description: "Título, línea azul" },
    titleRest: { type: "string", default: "", description: "Título, línea gris" },
    highlight: { type: "string", default: "", description: "Pill turquesa (opcional)" },
    statValue: {
      type: "number",
      default: 0,
      min: 0,
      integer: true,
      keyframable: false,
      hiddenFromList: false,
      description: "Cifra de la tarjeta (0 la oculta)",
    },
    statLabel: { type: "string", default: "", description: "Etiqueta de la cifra" },
    statIcon: { type: "string", default: "factura", description: "Ícono de la cifra" },
  },
});
