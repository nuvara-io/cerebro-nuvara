import { Video } from "@remotion/media";
import { Easing, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { color, motion, radius, shadow, space } from "../brand/tokens";

// Todo en segundos y píxeles de la grabación (1920×1080), no de la composición.
export type Toma = { readonly t: number; readonly x: number; readonly y: number; readonly zoom: number };
export type Punto = { readonly t: number; readonly x: number; readonly y: number };

type Props = {
  // Ruta dentro de public/
  readonly recording: string;
  // Tramo de la grabación que se muestra
  readonly desde: number;
  readonly hasta: number;
  // Velocidad de reproducción de la grabación (1 = en vivo)
  readonly velocidad?: number;
  // Cámara: centro y zoom en cada instante; entre tomas se mueve con easing
  readonly camara: readonly Toma[];
  // Cursor: dónde llega en cada instante. La grabación no lo trae; se dibuja acá.
  readonly cursor: readonly Punto[];
  // Instantes de clic (halo)
  readonly clics: readonly number[];
};

const ANCHO = 1920;
const ALTO = 1080;
// La grabación entra al marco de la línea de tutoriales (1536 px de ancho)
const ESCALA = space.frameWidth / ANCHO;
const ALTO_MARCO = 1080 - space.frameTop - space.s48;
const suave = Easing.bezier(0.45, 0, 0.2, 1);

const tramo = <T extends { t: number }>(lista: readonly T[], t: number) => {
  let i = 0;
  while (i < lista.length - 1 && lista[i + 1].t <= t) i++;
  return [lista[i], lista[Math.min(i + 1, lista.length - 1)]] as const;
};

// Cada toma se alcanza en su t; el movimiento arranca 0,9 s antes (o al soltar la anterior)
const camaraEn = (tomas: readonly Toma[], t: number) => {
  if (t <= tomas[0].t) return tomas[0];
  const [a, b] = tramo(tomas, t);
  if (a === b || t >= b.t) return b;
  const inicio = Math.max(a.t, b.t - 0.9);
  const p = interpolate(t, [inicio, b.t], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: suave });
  return { t, x: a.x + (b.x - a.x) * p, y: a.y + (b.y - a.y) * p, zoom: a.zoom * Math.pow(b.zoom / a.zoom, p) };
};

// El mouse de la grabación tarda ~0,5 s en llegar a cada punto
const cursorEn = (puntos: readonly Punto[], t: number) => {
  if (t <= puntos[0].t) return puntos[0];
  const [a, b] = tramo(puntos, t);
  if (a === b || t >= b.t) return b;
  const inicio = Math.max(a.t, b.t - 0.5);
  const p = interpolate(t, [inicio, b.t], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: suave });
  return { t, x: a.x + (b.x - a.x) * p, y: a.y + (b.y - a.y) * p };
};

// La plataforma real dentro del marco, con zoom de cámara, cursor y halo de clic.
export const PantallaReal: React.FC<Props> = ({ recording, desde, hasta, velocidad = 1, camara, cursor, clics }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = desde + (frame / fps) * velocidad;
  const c = camaraEn(camara, t);

  // Escala total y desplazamiento para que (c.x, c.y) quede al centro sin mostrar bordes
  const s = ESCALA * c.zoom;
  const ancho = space.frameWidth;
  const dx = Math.min(0, Math.max(ancho - ANCHO * s, ancho / 2 - c.x * s));
  const dy = Math.min(0, Math.max(ALTO_MARCO - ALTO * s, ALTO_MARCO / 2 - c.y * s));

  const m = cursorEn(cursor, t);
  const ultimoClic = [...clics].reverse().find((k) => k <= t);
  const halo = ultimoClic === undefined ? 1 : (t - ultimoClic) / velocidad / motion.cursorMove;

  return (
    <div
      style={{
        position: "absolute",
        left: space.marginX,
        top: space.frameTop,
        width: ancho,
        height: ALTO_MARCO,
        borderRadius: radius.frame,
        boxShadow: shadow.frame,
        overflow: "hidden",
        background: color.white,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: ANCHO,
          height: ALTO,
          transformOrigin: "0 0",
          transform: `translate(${dx}px, ${dy}px) scale(${s})`,
        }}
      >
        <Video
          src={staticFile(recording)}
          muted
          trimBefore={Math.round(desde * fps)}
          trimAfter={Math.round(hasta * fps)}
          playbackRate={velocidad}
          style={{ width: ANCHO, height: ALTO }}
        />
        <div style={{ position: "absolute", left: m.x, top: m.y, width: 0, height: 0 }}>
          {halo < 1 ? (
            <div
              style={{
                position: "absolute",
                width: 96 / c.zoom,
                height: 96 / c.zoom,
                left: -48 / c.zoom,
                top: -48 / c.zoom,
                borderRadius: "50%",
                background: color.electricBlue400,
                opacity: 0.5 * (1 - halo),
                scale: String(0.4 + 0.6 * halo),
              }}
            />
          ) : null}
          {/* Flecha del cursor: tamaño constante aunque la cámara haga zoom */}
          <svg
            width={34}
            height={34}
            viewBox="0 0 24 24"
            style={{ position: "absolute", left: -3, top: -2, transformOrigin: "3px 2px", scale: String(1.25 / c.zoom), filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.25))" }}
          >
            <path d="M3 2 L3 19 L7.5 14.8 L10.6 21.5 L13.4 20.3 L10.4 13.8 L16.5 13.8 Z" fill={color.gray700} stroke={color.white} strokeWidth={1.6} strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};
