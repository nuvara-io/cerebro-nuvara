import { font } from "../brand/fonts";
import { color, radius } from "../brand/tokens";

type Props = {
  readonly text: string;
  readonly fontSize?: number;
};

// Pill turquesa sólido con texto blanco en Bold ("hasta nuevo aviso").
// El blanco sobre turquesa no llega a 3:1: solo para frases cortas a 40px o más.
export const Highlight: React.FC<Props> = ({ text, fontSize = 44 }) => {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "10px 28px",
        borderRadius: radius.pill,
        background: color.brandVerdeTurquesa,
        color: color.white,
        fontFamily: font.sans,
        fontSize,
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
      }}
    >
      {text}
    </span>
  );
};
