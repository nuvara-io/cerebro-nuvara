import { CircleCheck } from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius, shadow } from "../brand/tokens";

// Portada de carrusel 1080×1350. La foto real del banco (Nuvara-172) va dentro de un arco:
// la forma de los arcos de la oficina y de las letras del isotipo. Fondo de degradado de marca
// con la marca de agua del isotipo y una tarjeta blanca que se superpone al arco.
// Titular tomado del carrusel de Marketing en Canva. Pieza estática: se renderiza como <Still>.

const ARCH = { left: 500, top: 300, width: 500 } as const;

const line: React.CSSProperties = {
  margin: 0,
  fontFamily: font.sans,
  color: color.white,
  letterSpacing: "-0.01em",
};

// Isotipo gigante de una sola tinta, como marca de agua
const Watermark: React.FC = () => (
  <div
    style={{
      position: "absolute",
      width: 1100,
      height: 1100,
      left: -420,
      top: 640,
      rotate: "-28deg",
      background: "rgba(255,255,255,0.08)",
      maskImage: `url(${logo.isotipo})`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      WebkitMaskImage: `url(${logo.isotipo})`,
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
    }}
  />
);

export const PortadaCausaciones: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        // Azul arriba a la izquierda, donde va el texto; turquesa abajo a la derecha
        background: `linear-gradient(160deg, ${color.accent} 0%, ${color.accent} 38%, #2fa6d6 70%, ${color.brandVerdeTurquesa} 100%)`,
        overflow: "hidden",
      }}
    >
      <Watermark />

      {/* Contorno del arco desplazado: da profundidad sin sombra dura */}
      <div
        style={{
          position: "absolute",
          left: ARCH.left + 28,
          top: ARCH.top - 28,
          width: ARCH.width,
          bottom: -40,
          borderRadius: `${ARCH.width / 2}px ${ARCH.width / 2}px 0 0`,
          border: "3px solid rgba(255,255,255,0.55)",
        }}
      />

      {/* La foto, recortada en forma de arco y sangrando por abajo */}
      <div
        style={{
          position: "absolute",
          left: ARCH.left,
          top: ARCH.top,
          width: ARCH.width,
          bottom: 0,
          borderRadius: `${ARCH.width / 2}px ${ARCH.width / 2}px 0 0`,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(8,40,90,0.30)",
        }}
      >
        <Img
          src={staticFile("posts/banco-172.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "58% 12%" }}
        />
      </div>

      <Img src={logo.wordmarkWhite} style={{ position: "absolute", left: 88, top: 96, width: 180 }} />
      <span style={{ ...line, position: "absolute", right: 88, top: 92, fontSize: 52, fontWeight: 700, letterSpacing: "-0.18em" }}>
        &gt;&gt;&gt;
      </span>

      <div style={{ position: "absolute", left: 88, top: 330, width: 390, display: "grid", gap: 28 }}>
        <span
          style={{
            justifySelf: "start",
            padding: "8px 24px",
            borderRadius: radius.pill,
            background: color.white,
            color: color.accent,
            fontFamily: font.sans,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          causaciones
        </span>
        <div>
          <p style={{ ...line, fontSize: 44, fontWeight: 300, lineHeight: 1.1 }}>Todo lo que</p>
          <p style={{ ...line, fontSize: 100, fontWeight: 700, lineHeight: 0.98 }}>cambia</p>
          <p style={{ ...line, fontSize: 44, fontWeight: 300, lineHeight: 1.18, marginTop: 14 }}>
            cuando dejas de
            <br />
            <strong style={{ fontWeight: 700 }}>causar factura</strong>
            <br />
            <strong style={{ fontWeight: 700 }}>por factura.</strong>
          </p>
        </div>
      </div>

      {/* Tarjeta de remate: se monta sobre el borde del arco */}
      <div
        style={{
          position: "absolute",
          left: 88,
          bottom: 120,
          display: "flex",
          alignItems: "center",
          gap: 26,
          padding: "26px 40px 26px 28px",
          borderRadius: radius.card,
          background: color.white,
          boxShadow: shadow.card,
        }}
      >
        <CircleCheck size={50} color={color.accent} strokeWidth={1.75} />
        <p style={{ margin: 0, fontFamily: font.sans, fontSize: 28, lineHeight: 1.3, color: color.textTitle }}>
          Tú revisas y apruebas.
          <br />
          Con núvara, <strong style={{ color: color.accent }}>eliminas la digitación.</strong>
        </p>
      </div>
    </AbsoluteFill>
  );
};
