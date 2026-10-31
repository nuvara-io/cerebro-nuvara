import { font } from "../brand/fonts";
import { color, type } from "../brand/tokens";
import { FadeUp } from "./FadeUp";

type Props = {
  // Primera línea, en azul: "La contabilidad"
  readonly lead: string;
  // Segunda línea, en gris: "no es una receta."
  readonly rest: string;
  readonly size?: "hero" | "sceneTitle" | "tagline";
  readonly delay?: number;
};

// Titular de las piezas de redes: Poppins Bold, dos líneas en dos tonos.
// Cada línea entra por separado, la gris 4 frames después de la azul.
export const TwoToneTitle: React.FC<Props> = ({ lead, rest, size = "hero", delay = 0 }) => {
  const style = { margin: 0, fontFamily: font.sans, ...type[size] };

  return (
    <div>
      <FadeUp delay={delay}>
        <p style={{ ...style, color: color.accent }}>{lead}</p>
      </FadeUp>
      {rest ? (
        <FadeUp delay={delay + 4}>
          <p style={{ ...style, color: color.textTitle }}>{rest}</p>
        </FadeUp>
      ) : null}
    </div>
  );
};
