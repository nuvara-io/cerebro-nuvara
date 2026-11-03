import { History } from "lucide-react";
import { AbsoluteFill } from "remotion";
import { font } from "../../brand/fonts";
import { color, gradient, radius } from "../../brand/tokens";
import { Emphasis } from "../../components/Emphasis";
import { useFormato, Categoria, MARGEN, MarcaDeAgua, Pie, Tarjeta, texto, Wordmark } from "./kit";

// M3 · Nómina (1080×1350, degradado de marca). Lista numerada de la línea de
// redes: círculo azul con el número y el paso en pill blanco al 85 %.
// Copy desde red/nomina.md. El módulo se cotiza: sin precios.

const PASOS = [
  "*Empleados* y novedades",
  "*Liquidación* y prestaciones",
  "*Nómina electrónica* y PILA",
  "*Causación* de la nómina",
] as const;

export const NominaCompleta: React.FC = () => {
  const f = useFormato();
  return (
  <AbsoluteFill style={{ background: gradient.fondoMarca, overflow: "hidden" }}>
    <MarcaDeAgua size={1100} left={-460} top={720} />
    <Wordmark blanco />

    <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: f.contenido, display: "grid", gap: f.hueco }}>
      <Categoria texto="NÓMINA" sobreOscuro />
      <div>
        <p style={texto(104, { fontWeight: 700, color: color.white, lineHeight: 1 })}>Nómina</p>
        <p style={texto(62, { fontWeight: 300, color: color.white, lineHeight: 1.1 })}>de principio a fin.</p>
      </div>

      <div style={{ display: "grid", gap: 18, marginTop: 14 }}>
        {PASOS.map((paso, i) => (
          <div key={paso} style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 66,
                height: 66,
                flexShrink: 0,
                borderRadius: "50%",
                background: color.accent,
                border: `3px solid ${color.white}`,
                display: "grid",
                placeItems: "center",
                fontFamily: font.sans,
                fontSize: 30,
                fontWeight: 700,
                color: color.white,
              }}
            >
              {i + 1}
            </div>
            <p
              style={texto(32, {
                padding: "14px 30px",
                borderRadius: radius.pill,
                background: "rgba(255,255,255,0.88)",
                color: color.textTitle,
              })}
            >
              <Emphasis text={paso} />
            </p>
          </div>
        ))}
      </div>

      <p style={texto(30, { color: color.white, marginTop: 10, maxWidth: 820 })}>
        Liquidación quincenal o mensual, prima y cesantías, y el pago a tus empleados desde Tesorería.
      </p>
    </div>

    <Tarjeta
      icono={<History size={52} color={color.accent} strokeWidth={1.75} />}
      style={{ position: "absolute", left: MARGEN, right: MARGEN, bottom: f.tarjeta }}
    >
      Trae tu histórico de <strong style={{ color: color.accent }}>World Office, Siigo Nómina, Helisa, Alegra o Contai.</strong>
    </Tarjeta>

    <Pie blanco />
  </AbsoluteFill>
  );
};
