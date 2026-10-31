import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { font } from "../brand/fonts";
import { color, easeEnter, motion, radius, shadow, type } from "../brand/tokens";
import { IconBadge } from "./IconBadge";

type Props = {
  readonly value: number;
  readonly label: string;
  readonly icon: string;
  // Frame en que la tarjeta empieza a entrar, relativo a la escena
  readonly delay?: number;
};

// Tarjeta blanca con ícono en círculo azul y una cifra verificable que cuenta hacia arriba.
export const StatCard: React.FC<Props> = ({ value, label, icon, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enterEnd = delay + motion.enter * fps;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 36,
        padding: "32px 48px 32px 32px",
        borderRadius: radius.card,
        background: color.white,
        boxShadow: shadow.card,
        opacity: interpolate(frame, [delay, enterEnd], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        translate: interpolate(frame, [delay, enterEnd], ["0px 24px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: easeEnter,
        }),
      }}
    >
      <IconBadge icon={icon} size={104} />
      <span
        style={{
          fontFamily: font.sans,
          ...type.statNumber,
          color: color.accent,
          fontVariantNumeric: "tabular-nums",
          // Reserva el ancho del valor final para que la tarjeta no cambie de tamaño al contar
          minWidth: `${String(value).length * 0.62}em`,
          textAlign: "right",
        }}
      >
        {Math.round(
          interpolate(frame, [enterEnd, enterEnd + motion.countUp * fps], [0, value], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeEnter,
          }),
        )}
      </span>
      <span style={{ fontFamily: font.sans, ...type.statLabel, color: color.textBody, maxWidth: 420 }}>
        {label}
      </span>
    </div>
  );
};
