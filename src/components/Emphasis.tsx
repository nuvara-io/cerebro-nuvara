import { color } from "../brand/tokens";

type Props = {
  // Texto con las palabras clave entre asteriscos: "Revisa el *asiento contable* antes de aprobar"
  readonly text: string;
  readonly emphasisColor?: string;
};

// Recurso de las piezas de redes: cuerpo en Regular y palabras clave en Bold azul.
export const Emphasis: React.FC<Props> = ({ text, emphasisColor = color.accent }) => {
  const parts = text.split("*");

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} style={{ fontWeight: 700, color: emphasisColor }}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
};
