import { ReceiptText } from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { font } from "../../brand/fonts";
import { color, radius } from "../../brand/tokens";
import { useFormato, Categoria, MARGEN, Pie, Tarjeta, texto, Wordmark } from "./kit";

// M4 · Tesorería y caja (1080×1350, fondo de foto). Foto del banco Nuvara-152:
// mujer de pie que revisa la tablet, a la derecha; la pared de arcos deja el
// texto a la izquierda.
// Copy desde red/tesoreria.md. Los módulos se cotizan: sin precios.

const EXTRACTOS = ["Bancolombia", "Davivienda", "Nu", "CSV"] as const;

export const TesoreriaConciliada: React.FC = () => {
  const f = useFormato();
  return (
  <AbsoluteFill style={{ background: color.accentDeep, overflow: "hidden" }}>
    <Img src={staticFile("posts/banco-152.jpg")} style={{ position: "absolute", top: 0, right: f.historia ? -420 : -190, height: "100%" }} />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(90deg, ${color.accentDeep} 0%, ${color.accent} 26%, ${color.accent}d9 44%, ${color.accent}4d 66%, ${color.accent}00 84%)`,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: f.historia ? 760 : 440,
        background: "linear-gradient(0deg, rgba(10,30,70,0.6) 0%, rgba(10,30,70,0) 100%)",
      }}
    />
    <Wordmark blanco />

    <div style={{ position: "absolute", left: MARGEN, top: f.contenido, width: 620, display: "grid", gap: f.hueco }}>
      <Categoria texto="TESORERÍA Y CAJA" sobreOscuro />
      <div>
        <p style={texto(56, { fontWeight: 300, color: color.white, lineHeight: 1.08 })}>Bancos, cobros</p>
        <p style={texto(56, { fontWeight: 300, color: color.white, lineHeight: 1.08 })}>y pagos,</p>
        <p style={texto(92, { fontWeight: 700, color: color.white, lineHeight: 1 })}>conciliados.</p>
      </div>
      <p style={texto(31, { color: color.white, lineHeight: 1.35 })}>
        Concilia con el extracto de tu banco y deja cada movimiento con{" "}
        <strong style={{ fontWeight: 700 }}>su comprobante contable.</strong>
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {EXTRACTOS.map((e) => (
          <span
            key={e}
            style={{
              padding: "10px 22px",
              borderRadius: radius.pill,
              border: `2px solid ${color.white}`,
              color: color.white,
              fontFamily: font.sans,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {e}
          </span>
        ))}
      </div>
    </div>

    <Tarjeta
      icono={<ReceiptText size={52} color={color.accent} strokeWidth={1.75} />}
      style={{ position: "absolute", left: MARGEN, right: MARGEN, bottom: f.tarjeta }}
    >
      Cuentas por cobrar y por pagar, pago de nómina y <strong style={{ color: color.accent }}>cajas menores con arqueo.</strong>
    </Tarjeta>

    <Pie blanco />
  </AbsoluteFill>
  );
};
