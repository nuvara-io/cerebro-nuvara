import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { font } from "../brand/fonts";
import { color, motion, radius, shadow, type } from "../brand/tokens";
import { Emphasis } from "./Emphasis";

type Props = {
  // Palabras clave entre asteriscos van en Bold azul: "Revisa el *asiento contable*"
  readonly text: string;
  // Arriba cuando la acción de la pantalla está en el tercio inferior
  readonly posicion?: "abajo" | "arriba";
};

// Tarjeta blanca en el tercio inferior, como "Eso es lo que hace núvara." en las piezas.
// Cuando haya narración, se reemplaza por subtítulos por palabra desde la transcripción.
export const Caption: React.FC<Props> = ({ text, posicion = "abajo" }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const enter = motion.enter * fps;
  const exit = motion.exit * fps;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        ...(posicion === "abajo" ? { bottom: 80 } : { top: 216 }),
        translate: "-50% 0",
        maxWidth: 1400,
        padding: "20px 40px",
        borderRadius: radius.card,
        background: color.white,
        boxShadow: shadow.card,
        color: color.textBody,
        fontFamily: font.sans,
        ...type.caption,
        textAlign: "center",
        opacity: interpolate(
          frame,
          [0, enter, durationInFrames - exit, durationInFrames],
          [0, 1, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        ),
      }}
    >
      <Emphasis text={text} />
    </div>
  );
};
