import { AbsoluteFill } from "remotion";
import { color, radius, shadow } from "../../brand/tokens";
import { Backdrop } from "../../components/Backdrop";
import { Emphasis } from "../../components/Emphasis";
import { Categoria, MarcaDeAgua, MARGEN, Pie, texto, Wordmark } from "./kit";

// Historias de la semana del 9 al 15 de noviembre (1080×1920).
// Las fechas del IVA salen de docs/campana-cierre-iva-2026-11.md y la promoción
// de red/precios.md §Promoción de primera recarga: si cambian allá, se cambian acá.

const Fecha: React.FC<{ readonly dia: string; readonly que: string; readonly fuerte?: boolean }> = ({ dia, que, fuerte }) => (
  <div
    style={{
      flex: 1,
      padding: "30px 32px",
      borderRadius: radius.card,
      background: fuerte ? color.accent : color.white,
      boxShadow: shadow.card,
      display: "grid",
      gap: 6,
    }}
  >
    <p style={texto(96, { fontWeight: 700, lineHeight: 1, color: fuerte ? color.white : color.accent })}>{dia}</p>
    <p style={texto(30, { fontWeight: 600, color: fuerte ? color.white : color.textTitle })}>{que}</p>
  </div>
);

// H6 · 11 de noviembre: empieza a vencer el IVA bimestral
export const HistoriaVenceIva: React.FC = () => (
  <>
    <Backdrop format="post" />
    <Wordmark />
    <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: 420, display: "grid", gap: 56 }}>
      <Categoria texto="CIERRE DE IVA" />
      <div>
        <p style={texto(80, { fontWeight: 700, lineHeight: 1.08, color: color.accent })}>Hoy empieza</p>
        <p style={texto(80, { fontWeight: 700, lineHeight: 1.08, color: color.textTitle })}>a vencer el IVA.</p>
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        <Fecha dia="11" que="de noviembre" />
        <Fecha dia="25" que="de noviembre" fuerte />
      </div>
      <p style={texto(36, { color: color.textBody, lineHeight: 1.35 })}>
        <Emphasis text="¿Ya causaste todo? núvara trae tus facturas de la DIAN y del correo y prepara la causación. *Tú revisas y apruebas.*" />
      </p>
    </div>
    <Pie />
  </>
);

// H7 · 15 de noviembre: la promoción sigue hasta el 30
export const HistoriaPonteHasta30: React.FC = () => (
  <AbsoluteFill style={{ background: color.accent, overflow: "hidden" }}>
    <MarcaDeAgua size={1300} left={-260} top={480} />
    <Wordmark blanco />
    <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: 420, display: "grid", gap: 56 }}>
      <Categoria texto="PONTE AL DÍA" sobreOscuro />
      <div>
        <p style={texto(54, { fontWeight: 300, color: color.white, lineHeight: 1.1 })}>Tu descuento sigue</p>
        <p style={texto(84, { fontWeight: 700, color: color.white, lineHeight: 1.08 })}>hasta el 30 de noviembre.</p>
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        {[
          ["10 %", "desde 500 facturas", false],
          ["20 %", "desde 1.000 facturas", true],
        ].map(([valor, desde, fuerte]) => (
          <div
            key={String(valor)}
            style={{
              flex: 1,
              padding: "28px 30px",
              borderRadius: radius.card,
              background: fuerte ? color.white : "rgba(255,255,255,0.14)",
              border: fuerte ? "none" : `2px solid ${color.white}`,
              display: "grid",
              gap: 6,
            }}
          >
            <p style={texto(104, { fontWeight: 700, lineHeight: 1, color: fuerte ? color.accent : color.white })}>{valor}</p>
            <p style={texto(30, { color: fuerte ? color.textTitle : color.white })}>{desde}</p>
          </div>
        ))}
      </div>
      <p style={texto(34, { color: color.white, lineHeight: 1.35 })}>
        Ponte al día con tus causaciones acumuladas. <strong style={{ fontWeight: 700 }}>Solo en tu primera recarga.</strong>
      </p>
    </div>
    <Pie blanco llamado="Escríbenos y agenda tu demostración en vivo" />
  </AbsoluteFill>
);
