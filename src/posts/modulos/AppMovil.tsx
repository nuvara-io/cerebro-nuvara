import { Smartphone } from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { color, gradient, radius, shadow } from "../../brand/tokens";
import { useFormato, Categoria, MarcaDeAgua, MARGEN, Pie, Tarjeta, texto, Wordmark } from "./kit";

// App móvil (1080×1350 y 1080×1920). Dos versiones del mismo post: "Próximamente" hasta
// que esté en las tiendas y "Ya disponible" para el día del lanzamiento. Sin fecha ni precio.
// Copy desde red/app-movil.md; las pantallas son de la empresa ficticia.

const Telefono: React.FC<{ readonly src: string; readonly ancho: number }> = ({ src, ancho }) => (
  <Img
    src={staticFile(src)}
    style={{ width: ancho, borderRadius: radius.frame * 2.5, border: `8px solid ${color.gray700}`, boxShadow: shadow.frame }}
  />
);

const Pieza: React.FC<{ readonly pill: string; readonly linea1: string; readonly linea2: string; readonly tarjeta: React.ReactNode }> = ({ pill, linea1, linea2, tarjeta }) => {
  const f = useFormato();
  const ancho = f.historia ? 330 : 290;
  return (
    <AbsoluteFill style={{ background: gradient.fondoMarca, overflow: "hidden" }}>
      <MarcaDeAgua size={900} left={380} top={f.historia ? 700 : 420} />
      <Wordmark blanco />
      <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: f.contenido - (f.historia ? 0 : 40), display: "grid", gap: f.historia ? 36 : 22 }}>
        <Categoria texto={pill} sobreOscuro />
        <div>
          <p style={texto(56, { fontWeight: 300, color: color.white, lineHeight: 1.08 })}>{linea1}</p>
          <p style={texto(84, { fontWeight: 700, color: color.white, lineHeight: 1.04 })}>{linea2}</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: f.historia ? 770 : 490, display: "flex", justifyContent: "center", gap: 36, height: f.historia ? 500 : 480, overflow: "hidden" }}>
        <Telefono src="brochure-tesoreria/app-cliente.png" ancho={ancho} />
        <Telefono src="brochure-tesoreria/app-operador.png" ancho={ancho} />
      </div>
      <Tarjeta
        icono={<Smartphone size={52} color={color.accent} strokeWidth={1.75} />}
        style={{ position: "absolute", left: MARGEN, right: MARGEN, bottom: f.tarjeta - (f.historia ? 0 : 30) }}
      >
        {tarjeta}
      </Tarjeta>
      <Pie blanco />
    </AbsoluteFill>
  );
};

export const AppProximamente: React.FC = () => (
  <Pieza
    pill="PRÓXIMAMENTE"
    linea1="Tus clientes y tu equipo,"
    linea2="en el celular."
    tarjeta={<>La app móvil de núvara llega muy pronto a <strong style={{ color: color.accent }}>iOS y Android.</strong></>}
  />
);

export const AppDisponible: React.FC = () => (
  <Pieza
    pill="YA DISPONIBLE"
    linea1="Tus clientes y tu equipo,"
    linea2="en el celular."
    tarjeta={<>Aprueba pagos y registra gastos desde la <strong style={{ color: color.accent }}>app móvil de núvara.</strong></>}
  />
);
