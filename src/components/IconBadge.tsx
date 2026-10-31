import { CalendarDays, CircleCheck, Clock, FileText, Gift, Lock, ShieldCheck, TrendingUp, UserRound } from "lucide-react";
import { color } from "../brand/tokens";

// Íconos Lucide que aparecen en las piezas de redes. Se eligen por nombre
// para que el ícono quede editable como texto desde Studio.
const ICONS = {
  factura: FileText,
  tiempo: Clock,
  calendario: CalendarDays,
  crecer: TrendingUp,
  seguridad: ShieldCheck,
  candado: Lock,
  usuario: UserRound,
  regalo: Gift,
  listo: CircleCheck,
} as const;

export type IconName = keyof typeof ICONS;

const isIconName = (name: string): name is IconName => name in ICONS;

type Props = {
  // Uno de los nombres de ICONS; un nombre desconocido muestra el de factura
  readonly icon: string;
  readonly size?: number;
};

// Círculo azul relleno con el ícono en blanco, como en "La contabilidad no es una receta"
export const IconBadge: React.FC<Props> = ({ icon, size = 88 }) => {
  const Icon = isIconName(icon) ? ICONS[icon] : ICONS.factura;

  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: "50%",
        background: color.accent,
        display: "grid",
        placeItems: "center",
      }}
    >
      <Icon size={size * 0.46} color={color.white} strokeWidth={2.25} />
    </div>
  );
};
