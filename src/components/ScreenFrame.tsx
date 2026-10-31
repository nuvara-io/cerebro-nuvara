import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { color, easeEnter, motion, radius, shadow, space } from "../brand/tokens";

type Props = {
  // La grabación real de la plataforma (<Video>) o un placeholder mientras no exista
  readonly children: React.ReactNode;
  readonly delay?: number;
};

// Marco de la captura: sin dispositivo dibujado alrededor. La protagonista es la plataforma.
export const ScreenFrame: React.FC<Props> = ({ children, delay = 8 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enterEnd = delay + motion.enter * fps;

  return (
    <div
      style={{
        position: "absolute",
        left: space.marginX,
        top: space.frameTop,
        width: space.frameWidth,
        height: 1080 - space.frameTop - space.s48,
        boxSizing: "border-box",
        background: color.white,
        borderRadius: radius.frame,
        boxShadow: shadow.frame,
        overflow: "hidden",
        opacity: interpolate(frame, [delay, enterEnd], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        scale: interpolate(frame, [delay, enterEnd], [0.96, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: easeEnter,
          output: "perceptual-scale",
        }),
      }}
    >
      {children}
    </div>
  );
};
