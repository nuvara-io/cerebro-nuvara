import { ArrowRightLeft, FileCheck2, Landmark, ReceiptText, Users } from "lucide-react";
import { AbsoluteFill } from "remotion";
import { font } from "../../brand/fonts";
import { color, radius, shadow } from "../../brand/tokens";
import { useFormato, Categoria, MARGEN, MarcaDeAgua, Pie, texto, Wordmark } from "./kit";

// M0 · Paraguas de la serie "Más que causación" (1080×1350, fondo azul sólido).
// Copy desde red/modulos-disponibles.md. Los módulos se cotizan: sin precios.

const MODULOS = [
  { icono: FileCheck2, nombre: "Causación", linea: "Compras y ventas desde la DIAN y tu correo" },
  { icono: ReceiptText, nombre: "Facturación electrónica", linea: "Factura, notas, documento soporte y RADIAN" },
  { icono: Users, nombre: "Nómina", linea: "Liquidación, nómina electrónica y PILA" },
  { icono: Landmark, nombre: "Tesorería y caja", linea: "Bancos, cobros, pagos y conciliación" },
] as const;

export const MasQueCausacion: React.FC = () => {
  const f = useFormato();
  return (
  <AbsoluteFill style={{ background: color.accent, overflow: "hidden" }}>
    <MarcaDeAgua size={1100} left={-420} top={700} />
    <MarcaDeAgua size={700} left={640} top={-260} tinta="rgba(255,255,255,0.05)" />
    <Wordmark blanco />

    <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: f.contenido, display: "grid", gap: f.hueco }}>
      <Categoria texto="MÁS QUE CAUSACIÓN" sobreOscuro />
      <div>
        <p style={texto(58, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Tu operación contable</p>
        <p style={texto(84, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>en un solo lugar.</p>
      </div>
      <p style={texto(30, { color: color.white, maxWidth: 840 })}>
        núvara prepara el trabajo de cada módulo. <strong style={{ fontWeight: 700 }}>Tú revisas y apruebas.</strong>
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 10 }}>
        {MODULOS.map(({ icono: Icono, nombre, linea }) => (
          <div
            key={nombre}
            style={{
              display: "grid",
              gap: 14,
              alignContent: "start",
              padding: "26px 26px 28px",
              borderRadius: radius.card,
              background: color.white,
              boxShadow: shadow.card,
              minHeight: 230,
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                background: color.accent,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icono size={34} color={color.white} strokeWidth={2.1} />
            </div>
            <p style={texto(30, { fontWeight: 700, color: color.textTitle, lineHeight: 1.15 })}>{nombre}</p>
            <p style={texto(23, { color: color.textBody })}>{linea}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          justifySelf: "start",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "12px 24px",
          borderRadius: radius.pill,
          border: `2px solid ${color.white}`,
          color: color.white,
          fontFamily: font.sans,
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        <ArrowRightLeft size={26} strokeWidth={2.2} />
        Y exportas a Siigo, World Office, Alegra y más
      </div>
    </div>

    <Pie blanco />
  </AbsoluteFill>
  );
};
