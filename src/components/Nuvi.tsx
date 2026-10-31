import { Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { nuvi, type NuviPose } from "../brand/assets";
import { easeEnter, motion } from "../brand/tokens";

type Props = {
  readonly pose: NuviPose;
  // Alto en px. Mínimo 120 (Brand OS). En intro y cierre puede ir grande, como en las piezas.
  readonly height?: number;
  readonly right?: number;
  readonly bottom?: number;
  readonly delay?: number;
};

// Una aparición por video. Sin contornos, sombras ni recoloreo.
// Nunca en piezas de reclamos, cobros, errores graves, contenido legal o publicidad.
export const Nuvi: React.FC<Props> = ({ pose, height = 640, right = 160, bottom = 0, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const end = delay + motion.enter * fps;

  return (
    <Img
      src={nuvi[pose]}
      style={{
        position: "absolute",
        right,
        bottom,
        height: Math.max(120, height),
        opacity: interpolate(frame, [delay, end], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        translate: interpolate(frame, [delay, end], ["0px 48px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: easeEnter,
        }),
      }}
    />
  );
};
