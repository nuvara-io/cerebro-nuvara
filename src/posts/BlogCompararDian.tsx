import { CircleAlert, CircleCheck, FileSearch } from "lucide-react";
import { AbsoluteFill, Img, useVideoConfig } from "remotion";
import { logo } from "../brand/assets";
import { color, gradient, radius, shadow } from "../brand/tokens";
import { MarcaDeAgua, texto } from "./modulos/kit";

// Portada del artículo s01 del blog: "Cómo comparar tus facturas con la DIAN antes del IVA".
// Se diseña sobre un lienzo de 1536×864 (hero del blog) y se escala al alto del formato:
// 1536×864 hero, 920×517 miniatura (misma proporción) y 1200×630 para compartir.
// Línea de redes: fondo gris con marca de agua, titular en dos tonos y tarjeta blanca.
// Sin cifras: los grupos de la comparación van con su nombre, no con números de ejemplo.

const BASE = { w: 1536, h: 864 } as const;

const GRUPOS = [
  { icono: "ok", nombre: "Conciliadas", detalle: "En la DIAN y en núvara" },
  { icono: "falta", nombre: "Solo en la DIAN", detalle: "Te faltan: tráelas y caúsalas" },
  { icono: "revisa", nombre: "Solo en núvara", detalle: "Revisa el mes o el listado" },
] as const;

const Icono: React.FC<{ readonly tipo: (typeof GRUPOS)[number]["icono"] }> = ({ tipo }) => {
  if (tipo === "ok") return <CircleCheck size={44} color={color.emerald100} strokeWidth={1.9} />;
  if (tipo === "falta") return <CircleAlert size={44} color={color.white} strokeWidth={1.9} />;
  return <FileSearch size={44} color={color.accent} strokeWidth={1.9} />;
};

export const BlogCompararDian: React.FC = () => {
  const { width, height } = useVideoConfig();
  const escala = height / BASE.h;
  // El lienzo escalado se centra; en 1200×630 sobra ancho y el fondo lo cubre
  const izquierda = (width - BASE.w * escala) / 2;

  return (
    <AbsoluteFill style={{ background: gradient.backdrop, overflow: "hidden" }}>
      <MarcaDeAgua size={height * 1.25} left={width * 0.52} top={-height * 0.18} tinta="rgba(30,133,255,0.06)" />
      <div
        style={{
          position: "absolute",
          left: izquierda,
          top: 0,
          width: BASE.w,
          height: BASE.h,
          transform: `scale(${escala})`,
          transformOrigin: "top left",
        }}
      >
        {/* Columna de texto */}
        <div style={{ position: "absolute", left: 104, top: 112, width: 720, display: "grid", gap: 34 }}>
          <span
            style={texto(24, {
              justifySelf: "start",
              padding: "8px 22px",
              borderRadius: radius.pill,
              background: color.accent,
              color: color.white,
              fontWeight: 700,
              letterSpacing: "0.04em",
            })}
          >
            ANTES DE PRESENTAR EL IVA
          </span>
          <div>
            <p style={texto(84, { fontWeight: 700, lineHeight: 1.06, color: color.textTitle })}>Compara tus facturas</p>
            <p style={texto(84, { fontWeight: 700, lineHeight: 1.06, color: color.accent })}>con la DIAN</p>
          </div>
          <p style={texto(36, { fontWeight: 300, lineHeight: 1.35, color: color.textTitle, maxWidth: 620 })}>
            Encuentra las que te faltan <strong style={{ fontWeight: 700 }}>antes de declarar.</strong>
          </p>
        </div>

        {/* Pie: logo y dirección del blog */}
        <div style={{ position: "absolute", left: 104, bottom: 92, display: "flex", alignItems: "center", gap: 28 }}>
          <Img src={logo.wordmark} style={{ width: 170 }} />
          <span style={{ width: 2, height: 34, background: color.gray200 }} />
          <p style={texto(26, { fontWeight: 600, color: color.textBody, letterSpacing: "0.01em" })}>nuvara.com.co/blog</p>
        </div>

        {/* Tarjeta de la comparación */}
        <div
          style={{
            position: "absolute",
            right: 104,
            top: 150,
            width: 560,
            padding: "34px 34px 26px",
            borderRadius: radius.card,
            background: color.white,
            boxShadow: shadow.card,
            display: "grid",
            gap: 18,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <p style={texto(26, { fontWeight: 700, color: color.textTitle })}>Facturas del mes</p>
            <p style={texto(20, { fontWeight: 600, color: color.textBody, letterSpacing: "0.06em" })}>CRUCE POR CUFE</p>
          </div>
          {GRUPOS.map((g) => {
            const destacado = g.icono === "falta";
            return (
              <div
                key={g.nombre}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 22,
                  padding: "22px 24px",
                  borderRadius: radius.card,
                  background: destacado ? color.accent : color.gray100,
                }}
              >
                <Icono tipo={g.icono} />
                <div style={{ display: "grid", gap: 2 }}>
                  <p style={texto(29, { fontWeight: 700, color: destacado ? color.white : color.textTitle })}>{g.nombre}</p>
                  <p style={texto(22, { color: destacado ? color.white : color.textBody })}>{g.detalle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
