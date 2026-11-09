import { AbsoluteFill } from "remotion";
import { color, radius, shadow } from "../../brand/tokens";
import { useFormato, Categoria, MarcaDeAgua, MARGEN, Pie, texto, Wordmark } from "./kit";

// Anuncio "Ponte al día" (post 1080×1350 e historia 1080×1920, fondo azul sólido).
// El dolor: las causaciones que se van acumulando. La oferta sale de red/precios.md
// §Promoción de primera recarga: si cambia allá, se cambia acá.

const Hoja: React.FC<{ readonly giro: number; readonly x: number; readonly y: number }> = ({ giro, x, y }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: 210,
      height: 270,
      padding: "30px 26px",
      boxSizing: "border-box",
      borderRadius: 10,
      background: color.white,
      boxShadow: shadow.card,
      rotate: `${giro}deg`,
      display: "grid",
      alignContent: "start",
      gap: 16,
    }}
  >
    {["100%", "70%", "85%", "55%", "78%"].map((ancho) => (
      <div key={ancho} style={{ width: ancho, height: 11, borderRadius: 6, background: color.gray200 }} />
    ))}
  </div>
);

const Descuento: React.FC<{ readonly valor: string; readonly desde: string; readonly fuerte?: boolean }> = ({ valor, desde, fuerte }) => (
  <div
    style={{
      flex: 1,
      padding: "26px 30px 28px",
      borderRadius: radius.card,
      background: fuerte ? color.white : "rgba(255,255,255,0.14)",
      border: fuerte ? "none" : `2px solid ${color.white}`,
      boxShadow: fuerte ? shadow.card : "none",
      display: "grid",
      gap: 4,
    }}
  >
    <p style={texto(104, { fontWeight: 700, lineHeight: 1, color: fuerte ? color.accent : color.white })}>{valor}</p>
    <p style={texto(29, { lineHeight: 1.2, color: fuerte ? color.textTitle : color.white })}>
      desde <strong style={{ fontWeight: 700 }}>{desde}</strong>
    </p>
  </div>
);

export const PonteAlDia: React.FC = () => {
  const f = useFormato();
  return (
    <AbsoluteFill style={{ background: color.accent, overflow: "hidden" }}>
      <MarcaDeAgua size={1300} left={-260} top={f.historia ? 420 : 150} />
      <Wordmark blanco />

      {/* La pila de facturas que se fue quedando para después */}
      <div style={{ position: "absolute", right: 56, top: f.historia ? 480 : 270, width: 320, height: 340 }}>
        <Hoja giro={-13} x={10} y={40} />
        <Hoja giro={8} x={90} y={30} />
        <Hoja giro={-4} x={50} y={10} />
      </div>

      <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: f.contenido, display: "grid", gap: f.hueco }}>
        <Categoria texto="PONTE AL DÍA" sobreOscuro />
        <div style={{ width: 620 }}>
          <p style={texto(52, { fontWeight: 300, color: color.white, lineHeight: 1.1, whiteSpace: "nowrap" })}>¿Se te acumularon las</p>
          <p style={texto(80, { fontWeight: 700, color: color.white, lineHeight: 1.1 })}>causaciones?</p>
        </div>
        <p style={texto(31, { width: 600, color: color.white, lineHeight: 1.35 })}>
          núvara trae tus facturas de la DIAN y del correo y prepara la causación por lotes.{" "}
          <strong style={{ fontWeight: 700 }}>Tú revisas y apruebas.</strong>
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: f.historia ? 40 : 60 }}>
          <p style={texto(36, { fontWeight: 700, color: color.white })}>Descuento en tu primera recarga</p>
          <div style={{ display: "flex", gap: 24 }}>
            <Descuento valor="10 %" desde="500 facturas" />
            <Descuento valor="20 %" desde="1.000 facturas" fuerte />
          </div>
          <p style={texto(25, { fontWeight: 500, color: color.white })}>Solo en la primera recarga. Válido hasta el 30 de noviembre de 2026.</p>
        </div>
      </div>

      <Pie blanco llamado="Escríbenos y agenda tu demostración en vivo" />
    </AbsoluteFill>
  );
};
