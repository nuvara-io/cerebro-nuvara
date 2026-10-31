import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { easeEnter, motion } from "../brand/tokens";

type Props = {
  readonly children: React.ReactNode;
  // Frame de inicio relativo a la escena; el orden de entrada se arma con este valor
  readonly delay?: number;
};

// Entrada estándar del cerebro gráfico: fade + subida de 24px en motion.enter, sin rebote.
export const FadeUp: React.FC<Props> = ({ children, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const end = delay + motion.enter * fps;

  return (
    <div
      style={{
        opacity: interpolate(frame, [delay, end], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        translate: interpolate(frame, [delay, end], ["0px 24px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: easeEnter,
        }),
      }}
    >
      {children}
    </div>
  );
};
