import { Img, useVideoConfig } from "remotion";
import { logo } from "../../brand/assets";
import { font } from "../../brand/fonts";
import { color, radius, shadow } from "../../brand/tokens";

// Piezas compartidas de la serie "Más que causación" (posts 1080×1350).
// Una sola línea gráfica: wordmark arriba al centro, pill de categoría en
// mayúsculas, titular en dos tonos o dos pesos y pie con el llamado y la web.

export const MARGEN = 80;

// Medidas por formato. Post 1080×1350; historia 1080×1920, que deja libres
// 220px arriba y 300px abajo para la interfaz de la app (línea de redes).
export function useFormato() {
  const { height } = useVideoConfig();
  const historia = height > 1500;
  return {
    historia,
    wordmark: historia ? 250 : 84,
    contenido: historia ? 400 : 200,
    tarjeta: historia ? 440 : 170,
    pie: historia ? 320 : 60,
    // Separación entre bloques: la historia tiene más alto para repartir
    hueco: historia ? 56 : 30,
  };
}

export const texto = (fontSize: number, extra: React.CSSProperties = {}): React.CSSProperties => ({
  margin: 0,
  fontFamily: font.sans,
  fontSize,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  ...extra,
});

// Isotipo gigante de una sola tinta, como marca de agua
export const MarcaDeAgua: React.FC<{
  readonly size: number;
  readonly left: number;
  readonly top: number;
  readonly tinta?: string;
}> = ({ size, left, top, tinta = "rgba(255,255,255,0.07)" }) => (
  <div
    style={{
      position: "absolute",
      width: size,
      height: size,
      left,
      top,
      rotate: "-28deg",
      background: tinta,
      maskImage: `url(${logo.isotipo})`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      WebkitMaskImage: `url(${logo.isotipo})`,
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
    }}
  />
);

export const Wordmark: React.FC<{ readonly blanco?: boolean }> = ({ blanco }) => {
  const f = useFormato();
  return (
    <div style={{ position: "absolute", top: f.wordmark, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
      <Img src={blanco ? logo.wordmarkWhite : logo.wordmark} style={{ width: f.historia ? 170 : 150 }} />
    </div>
  );
};

// Pill de encabezado: en mayúsculas, azul sobre claro o blanco sobre azul y foto
export const Categoria: React.FC<{ readonly texto: string; readonly sobreOscuro?: boolean }> = ({ texto: t, sobreOscuro }) => (
  <span
    style={{
      justifySelf: "start",
      padding: "8px 22px",
      borderRadius: radius.pill,
      background: sobreOscuro ? color.white : color.accent,
      color: sobreOscuro ? color.accent : color.white,
      fontFamily: font.sans,
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "0.04em",
    }}
  >
    {t}
  </span>
);

// Pie: llamado a la acción y la web, centrados abajo
export const Pie: React.FC<{ readonly blanco?: boolean; readonly llamado?: string }> = ({
  blanco,
  llamado = "Agenda tu demostración en vivo",
}) => {
  const f = useFormato();
  return (
    <div style={{ position: "absolute", bottom: f.pie, left: 0, right: 0, display: "grid", justifyItems: "center", gap: 10 }}>
      <p style={texto(f.historia ? 30 : 26, { fontWeight: 600, color: blanco ? color.white : color.textTitle })}>{llamado}</p>
      <p style={texto(f.historia ? 28 : 24, { fontWeight: 700, letterSpacing: "0.02em", color: blanco ? color.white : color.accent })}>
        nuvara.com.co
      </p>
    </div>
  );
};

// Tarjeta blanca de remate con un ícono de línea azul
export const Tarjeta: React.FC<{ readonly icono: React.ReactNode; readonly children: React.ReactNode; readonly style?: React.CSSProperties }> = ({
  icono,
  children,
  style,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "24px 32px 24px 26px",
      borderRadius: radius.card,
      background: color.white,
      boxShadow: shadow.card,
      ...style,
    }}
  >
    <div style={{ flexShrink: 0, display: "grid" }}>{icono}</div>
    <div style={texto(27, { color: color.textTitle })}>{children}</div>
  </div>
);
