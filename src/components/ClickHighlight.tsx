import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { color, easeEnter, motion } from "../brand/tokens";

type Props = {
  // Coordenadas dentro de la composición de 1920×1080
  readonly x: number;
  readonly y: number;
};

// Punto de cursor con halo al hacer clic. El clic ocurre en el frame 0 de su Sequence.
export const ClickHighlight: React.FC<Props> = ({ x, y }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const halo = motion.cursorMove * fps;

  return (
    <div style={{ position: "absolute", left: x, top: y, width: 0, height: 0 }}>
      <div
        style={{
          position: "absolute",
          width: 96,
          height: 96,
          left: -48,
          top: -48,
          borderRadius: "50%",
          background: color.electricBlue400,
          opacity: interpolate(frame, [0, halo], [0.45, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, halo], [0.4, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeEnter,
            output: "perceptual-scale",
          }),
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 20,
          height: 20,
          left: -10,
          top: -10,
          borderRadius: "50%",
          background: color.accent,
          boxShadow: `0 0 0 4px ${color.white}`,
        }}
      />
    </div>
  );
};
