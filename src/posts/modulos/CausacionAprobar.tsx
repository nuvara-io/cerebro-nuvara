import { MousePointer2, ShieldCheck } from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { font } from "../../brand/fonts";
import { color, radius } from "../../brand/tokens";
import { useFormato, Categoria, MARGEN, Pie, Tarjeta, texto, Wordmark } from "./kit";

// M1 · Causación (1080×1350, fondo de foto). Foto del banco Nuvara-80: hombre
// con la mano en el mouse, a la derecha; el velo azul deja el texto sobre la pared.
// Copy desde red/causar-y-revisar.md y red/modulos-disponibles.md.

export const CausacionAprobar: React.FC = () => {
  const f = useFormato();
  return (
  <AbsoluteFill style={{ background: color.accentDeep, overflow: "hidden" }}>
    {/* A su alto natural (900px de ancho) y pegada a la derecha */}
    <Img src={staticFile("posts/banco-80.jpg")} style={{ position: "absolute", top: 0, right: f.historia ? -300 : -60, height: "100%" }} />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(90deg, ${color.accentDeep} 0%, ${color.accent} 24%, ${color.accent}d9 42%, ${color.accent}4d 64%, ${color.accent}00 82%)`,
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

    <div style={{ position: "absolute", left: MARGEN, top: f.contenido, width: 600, display: "grid", gap: f.hueco }}>
      <Categoria texto="CAUSACIÓN" sobreOscuro />
      <div>
        <p style={texto(62, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Tus facturas,</p>
        <p style={texto(96, { fontWeight: 700, color: color.white, lineHeight: 1 })}>causadas.</p>
      </div>
      <p style={texto(31, { color: color.white, lineHeight: 1.35 })}>
        núvara trae tus compras y ventas de la DIAN y del correo, y prepara cada asiento con{" "}
        <strong style={{ fontWeight: 700 }}>IVA, retenciones y centros de costo.</strong>
      </p>

      {/* Botón simulado: la promesa de control, el usuario solo aprueba */}
      <div style={{ position: "relative", justifySelf: "start", marginTop: 8 }}>
        <span
          style={{
            display: "inline-block",
            padding: "18px 46px",
            borderRadius: radius.pill,
            background: color.white,
            color: color.accent,
            fontFamily: font.sans,
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          Aprobar
        </span>
        <MousePointer2
          size={56}
          color={color.white}
          fill={color.textTitle}
          strokeWidth={1.5}
          style={{ position: "absolute", right: -30, bottom: -34 }}
        />
      </div>
    </div>

    <Tarjeta
      icono={<ShieldCheck size={52} color={color.accent} strokeWidth={1.75} />}
      style={{ position: "absolute", left: MARGEN, right: MARGEN, bottom: f.tarjeta }}
    >
      Tú revisas con la factura al lado. <strong style={{ color: color.accent }}>Nada se exporta sin tu aprobación.</strong>
    </Tarjeta>

    <Pie blanco />
  </AbsoluteFill>
  );
};
