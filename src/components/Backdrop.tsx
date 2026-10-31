import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { logo } from "../brand/assets";
import { gradient } from "../brand/tokens";

// Isotipo gigante como marca de agua, en una sola tinta: la máscara usa solo la silueta del SVG
const Watermark: React.FC<{
  readonly size: number;
  readonly left: number;
  readonly top: number;
  readonly rotate: number;
  readonly tint: string;
  // Píxeles por segundo de deriva; muy lento, nunca pulsa
  readonly drift: number;
}> = ({ size, left, top, rotate, tint, drift }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        left,
        top,
        background: tint,
        maskImage: `url(${logo.isotipo})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: `url(${logo.isotipo})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        rotate: `${rotate}deg`,
        translate: `${(frame / fps) * drift}px ${(frame / fps) * drift * 0.5}px`,
      }}
    />
  );
};

// Fondo de toda escena: degradado gris claro con el isotipo de marca de agua,
// como en las piezas de redes. Detrás de intro, pasos y cierre.
// "post" acomoda las marcas de agua al formato vertical 1080×1350 de redes.
export const Backdrop: React.FC<{ readonly format?: "video" | "post" }> = ({ format = "video" }) => {
  return (
    <AbsoluteFill style={{ background: gradient.backdrop, overflow: "hidden" }}>
      {format === "video" ? (
        <>
          <Watermark size={1500} left={1050} top={-520} rotate={-28} tint="rgba(255,255,255,0.55)" drift={-6} />
          <Watermark size={1100} left={-520} top={560} rotate={-28} tint="rgba(0,0,0,0.035)" drift={5} />
        </>
      ) : (
        <>
          <Watermark size={1100} left={520} top={-380} rotate={-28} tint="rgba(255,255,255,0.55)" drift={0} />
          <Watermark size={900} left={-420} top={760} rotate={-28} tint="rgba(0,0,0,0.035)" drift={0} />
        </>
      )}
    </AbsoluteFill>
  );
};
