import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, easeEnter } from "../brand/tokens";

// Portada con foto: la línea de las portadas de reel y de los posts con persona que ya
// salieron en el perfil (Drive › Piezas graficas › portadas de reels, 73 a 77).
// - Foto real del banco a sangre, con un fundido oscuro abajo y otro suave arriba.
// - Wordmark blanco chico, centrado arriba.
// - Marco blanco delgado de esquinas redondeadas, abierto abajo: se desvanece hacia el texto.
// - Titular a la izquierda dentro del marco: una línea en Regular blanca, la frase clave en
//   Bold azul y, si hace falta, un remate blanco. `**palabra**` pasa a Bold.
// - Arco de marca (turquesa → azul) que entra por la esquina de abajo.
// Sirve como portada estática (<Still>) y como gancho animado de los reels.

type Props = {
  readonly foto: string;
  // object-position de la foto, para dejar la cara dentro del marco
  readonly enfoque?: string;
  readonly linea1: string;
  readonly linea2: string;
  readonly linea3?: string;
  readonly arco?: "derecha" | "izquierda";
  // Gancho de reel: la frase clave entra de golpe en vez de subir suave
  readonly golpe?: boolean;
  // false para el <Still>: todo quieto en su lugar final
  readonly animar?: boolean;
};

const Linea: React.FC<{ readonly texto: string; readonly size: number }> = ({ texto, size }) => (
  <p style={{ margin: 0, fontFamily: font.sans, fontSize: size, fontWeight: 400, lineHeight: 1.12, color: color.white, letterSpacing: "-0.01em" }}>
    {texto.split(/(\*\*[^*]+\*\*)/).map((t, i) =>
      t.startsWith("**") ? (
        <strong key={i} style={{ fontWeight: 700 }}>
          {t.slice(2, -2)}
        </strong>
      ) : (
        t
      ),
    )}
  </p>
);

export const PortadaFoto: React.FC<Props> = ({ foto, enfoque = "50% 30%", linea1, linea2, linea3, arco = "derecha", golpe = false, animar = true }) => {
  const actual = useCurrentFrame();
  const frame = animar ? actual : 10_000;
  const { fps, width: W, height: H } = useVideoConfig();
  const vertical = H / W > 1.5;
  const k = W / 1080;

  // Medidas tomadas de las portadas publicadas (1080×1920); el 4:5 las comprime
  const marco = { x: 110 * k, top: (vertical ? 272 : 150) * k, alto: H * (vertical ? 0.62 : 0.66) };
  const texto = { x: marco.x + 56 * k, abajo: vertical ? 470 * k : 130 * k };
  const s = (vertical ? 1 : 0.86) * k;

  const t = (desde: number, dura = 0.6) =>
    interpolate(frame, [desde * fps, (desde + dura) * fps], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeEnter });
  const pop = golpe ? spring({ frame: frame - 0.5 * fps, fps, config: { damping: 11, stiffness: 190 } }) : t(0.35);

  // El arco vive en la esquina de abajo, por debajo del titular: nunca lo cruza
  const r = (vertical ? 440 : 360) * k;
  const grueso = 46 * k;
  const cx = arco === "derecha" ? W - 10 * k : 10 * k;
  const cy = H + (vertical ? 60 : 150) * k;

  return (
    <AbsoluteFill style={{ background: color.brandNavy, overflow: "hidden" }}>
      <Img
        src={foto}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: enfoque, scale: String(interpolate(frame, [0, 4 * fps], [1.08, 1], { extrapolateRight: "clamp" })) }}
      />
      {/* Fundidos: oscuro abajo para el titular, suave arriba para el wordmark */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(0deg, rgba(8,12,20,0.9) 0%, rgba(8,12,20,0.62) ${vertical ? 26 : 30}%, rgba(8,12,20,0) ${vertical ? 52 : 60}%), linear-gradient(180deg, rgba(8,12,20,0.38) 0%, rgba(8,12,20,0) 16%)`,
        }}
      />

      {/* Arco de marca: un cuarto de círculo grueso que entra por la esquina */}
      <svg width={W} height={H} style={{ position: "absolute", inset: 0, opacity: t(0.2, 0.8) }}>
        <defs>
          <linearGradient id="arcoMarca" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={color.brandVerdeTurquesa} />
            <stop offset="100%" stopColor={color.accent} />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="url(#arcoMarca)" strokeWidth={grueso} />
      </svg>

      {/* Marco abierto abajo: se desvanece antes del titular */}
      <div
        style={{
          position: "absolute",
          left: marco.x,
          right: marco.x,
          top: marco.top,
          height: marco.alto,
          border: `${3 * k}px solid rgba(255,255,255,0.92)`,
          borderBottom: "none",
          borderRadius: `${46 * k}px ${46 * k}px 0 0`,
          maskImage: "linear-gradient(180deg, #000 0%, #000 62%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 62%, transparent 100%)",
          opacity: t(0, 0.8),
          scale: String(interpolate(t(0, 0.8), [0, 1], [1.03, 1])),
        }}
      />

      <Img src={logo.wordmarkWhite} style={{ position: "absolute", top: (vertical ? 125 : 64) * k, left: (W - 210 * k) / 2, width: 210 * k, opacity: t(0) }} />

      <div style={{ position: "absolute", left: texto.x, right: marco.x + 30 * k, bottom: texto.abajo, display: "grid", gap: 6 * k }}>
        <div style={{ opacity: t(0.15), translate: `0 ${(1 - t(0.15)) * 24}px` }}>
          <Linea texto={linea1} size={60 * s} />
        </div>
        <p
          style={{
            margin: 0,
            fontFamily: font.sans,
            fontSize: 94 * s,
            fontWeight: 700,
            lineHeight: 1.04,
            color: color.accent,
            letterSpacing: "-0.015em",
            opacity: Math.min(1, pop * 1.4),
            scale: golpe ? String(interpolate(pop, [0, 1], [1.6, 1])) : "1",
            transformOrigin: "left center",
            translate: golpe ? "0 0" : `0 ${(1 - pop) * 24}px`,
          }}
        >
          {linea2}
        </p>
        {linea3 ? (
          <div style={{ opacity: t(0.55), translate: `0 ${(1 - t(0.55)) * 24}px` }}>
            <Linea texto={linea3} size={60 * s} />
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
