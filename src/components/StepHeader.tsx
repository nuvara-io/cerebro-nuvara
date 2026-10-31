import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { font } from "../brand/fonts";
import { color, easeEnter, motion, radius, space, type } from "../brand/tokens";

type Props = {
  readonly step: number;
  readonly total: number;
  // Verbo en imperativo + objeto, máx. 4 palabras. Nunca "IA" sola.
  readonly title: string;
};

// Pill azul "Paso N de M" (como "empresa a" en las piezas) y el título en gris Bold.
// Entra el pill y el título 4 frames después. Después queda fijo toda la escena.
export const StepHeader: React.FC<Props> = ({ step, total, title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = motion.enter * fps;

  return (
    <div
      style={{
        position: "absolute",
        left: space.marginX,
        top: space.marginTop,
        display: "flex",
        alignItems: "center",
        gap: space.s24,
      }}
    >
      <span
        style={{
          height: 64,
          padding: "0 24px",
          display: "inline-flex",
          alignItems: "center",
          borderRadius: radius.pill,
          background: color.accent,
          color: color.white,
          fontFamily: font.sans,
          ...type.badge,
          opacity: interpolate(frame, [0, enter], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, enter], ["0px 24px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeEnter,
          }),
        }}
      >
        Paso {step} de {total}
      </span>
      <h2
        style={{
          margin: 0,
          fontFamily: font.sans,
          ...type.sceneTitle,
          color: color.textTitle,
          opacity: interpolate(frame, [4, 4 + enter], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [4, 4 + enter], ["0px 24px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeEnter,
          }),
        }}
      >
        {title}
      </h2>
    </div>
  );
};
