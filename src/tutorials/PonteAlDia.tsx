import { Audio } from "@remotion/media";
import { AbsoluteFill, Img, interpolate, Sequence, Series, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius, shadow, type } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { Emphasis } from "../components/Emphasis";
import { FadeUp } from "../components/FadeUp";
import { PantallaReal } from "../components/PantallaReal";
import { TwoToneTitle } from "../components/TwoToneTitle";
import { GRABACIONES } from "./FlujoCausacion";
import { GanchoFuerte } from "./Reels";

// Pauta "Ponte al día": reel 1080×1920 y video 1920×1080 con las mismas escenas y
// la voz de Eduardo. Sin Nuvi: es una pieza de promoción. La oferta sale de
// red/precios.md §Promoción de primera recarga: si cambia allá, se cambia acá.
const voz = (n: string) => staticFile(`voz/ponte-al-dia/${n}.wav`);
const sonido = (n: string) => staticFile(`sonido/${n}.wav`);
const DURACION_VOZ: Record<string, number> = { d1: 2.08, d2: 3.84, d3: 6.24, d4: 4.16, d5: 6.8, d6: 4.88 };

const CONDICION = "Solo en la primera recarga. Válido hasta el 30 de noviembre de 2026.";

type Base = { readonly voz: string; readonly dura: number };
type Clip = { readonly grabacion: "flujo" | "agrupada"; readonly desde: number; readonly hasta: number; readonly velocidad: number; readonly camara: { t: number; x: number; y: number; zoom: number }[] };
type Escena =
  | (Base & { readonly tipo: "gancho" })
  | (Base & { readonly tipo: "pila" })
  | (Base & { readonly tipo: "pantalla"; readonly lead: string; readonly rest: string; readonly subtitulo: string; readonly clip: Clip })
  | (Base & { readonly tipo: "oferta" })
  | (Base & { readonly tipo: "cierre" });

const pantallaDura = (c: Clip) => (c.hasta - c.desde) / c.velocidad;
const TRAER: Clip = { grabacion: "flujo", desde: 5.6, hasta: 14.5, velocidad: 1.25, camara: [{ t: 5.6, x: 760, y: 420, zoom: 1.8 }, { t: 11, x: 760, y: 620, zoom: 1.8 }] };
const APROBAR: Clip = { grabacion: "agrupada", desde: 15, hasta: 26.5, velocidad: 1.7, camara: [{ t: 15, x: 900, y: 560, zoom: 1.75 }, { t: 22, x: 800, y: 640, zoom: 1.8 }] };

const ESCENAS: Escena[] = [
  { tipo: "gancho", voz: "d1", dura: 2.7 },
  { tipo: "pila", voz: "d2", dura: 4.4 },
  { tipo: "pantalla", voz: "d3", lead: "Ponte", rest: "al día.", subtitulo: "De la *DIAN* y de tu *correo*, por lotes", clip: TRAER, dura: pantallaDura(TRAER) },
  { tipo: "pantalla", voz: "d4", lead: "Tú revisas", rest: "y apruebas.", subtitulo: "Nada se exporta *sin tu aprobación*", clip: APROBAR, dura: pantallaDura(APROBAR) },
  { tipo: "oferta", voz: "d5", dura: 7.8 },
  { tipo: "cierre", voz: "d6", dura: 5.8 },
];

export const DURACION_PONTE_AL_DIA = ESCENAS.reduce((s, e) => s + Math.round(e.dura * 30) / 30, 0);

const useVertical = () => {
  const { height, width } = useVideoConfig();
  return height > width;
};

const Hoja: React.FC<{ readonly i: number; readonly x: number; readonly y: number; readonly giro: number }> = ({ i, x, y, giro }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const caida = spring({ frame: frame - i * 7, fps, config: { damping: 15, stiffness: 120 } });
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 300,
        height: 390,
        padding: "44px 38px",
        boxSizing: "border-box",
        borderRadius: 14,
        background: color.white,
        boxShadow: shadow.card,
        rotate: `${giro}deg`,
        opacity: caida,
        translate: `0 ${interpolate(caida, [0, 1], [-260, 0])}px`,
        display: "grid",
        alignContent: "start",
        gap: 22,
      }}
    >
      {["100%", "70%", "85%", "55%", "78%"].map((ancho) => (
        <div key={ancho} style={{ width: ancho, height: 15, borderRadius: 8, background: color.gray200 }} />
      ))}
    </div>
  );
};

const HOJAS = [
  { x: 0, y: 150, giro: -12 },
  { x: 250, y: 130, giro: 9 },
  { x: 120, y: 90, giro: -5 },
  { x: 30, y: 30, giro: 7 },
  { x: 220, y: 10, giro: -9 },
  { x: 120, y: -40, giro: 3 },
];

const Descuento: React.FC<{ readonly valor: string; readonly desde: string; readonly fuerte?: boolean; readonly delay: number }> = ({ valor, desde, fuerte, delay }) => (
  <FadeUp delay={delay}>
    <div
      style={{
        padding: "34px 40px 38px",
        borderRadius: radius.card,
        background: fuerte ? color.white : "rgba(255,255,255,0.14)",
        border: fuerte ? "none" : `2px solid ${color.white}`,
        boxShadow: fuerte ? shadow.card : "none",
        display: "grid",
        gap: 6,
      }}
    >
      <p style={{ margin: 0, fontFamily: font.sans, fontSize: 150, fontWeight: 700, lineHeight: 1, color: fuerte ? color.accent : color.white }}>{valor}</p>
      <p style={{ margin: 0, fontFamily: font.sans, fontSize: 42, lineHeight: 1.2, color: fuerte ? color.textTitle : color.white }}>
        desde <strong style={{ fontWeight: 700 }}>{desde}</strong>
      </p>
    </div>
  </FadeUp>
);

const Contenido: React.FC<{ readonly e: Escena }> = ({ e }) => {
  const vertical = useVertical();
  const { fps } = useVideoConfig();

  if (e.tipo === "gancho") return <GanchoFuerte linea1="¿Se te acumularon las" linea2="causaciones?" />;

  if (e.tipo === "pila") {
    return (
      <>
        <Backdrop />
        <div style={vertical ? { position: "absolute", left: 48, right: 48, top: 240 } : { position: "absolute", left: 120, top: 370, width: 800 }}>
          <TwoToneTitle lead="A mano toma tiempo." rest="Y se quedan para después." size="sceneTitle" />
        </div>
        <div style={{ position: "absolute", width: 560, height: 560, ...(vertical ? { left: 240, top: 720 } : { left: 1120, top: 280 }) }}>
          {HOJAS.map((h, i) => (
            <Hoja key={i} i={i} {...h} />
          ))}
        </div>
      </>
    );
  }

  if (e.tipo === "pantalla") {
    const g = GRABACIONES[e.clip.grabacion];
    const marco = vertical ? { left: 48, top: 420, ancho: 984, alto: 920 } : { left: 700, top: 130, ancho: 1130, alto: 820 };
    return (
      <>
        <Backdrop />
        <div style={vertical ? { position: "absolute", left: 48, right: 48, top: 216 } : { position: "absolute", left: 90, top: 340, width: 560 }}>
          <TwoToneTitle lead={e.lead} rest={e.rest} size="sceneTitle" />
        </div>
        <PantallaReal recording={g.src} desde={e.clip.desde} hasta={e.clip.hasta} velocidad={e.clip.velocidad} camara={e.clip.camara} cursor={g.cursor} clics={g.clics} marco={marco} />
        <div style={vertical ? { position: "absolute", left: 0, right: 0, top: 1362, display: "flex", justifyContent: "center" } : { position: "absolute", left: 90, top: 590, width: 560 }}>
          <FadeUp>
            <div style={{ padding: "18px 32px", borderRadius: radius.card, background: color.white, boxShadow: shadow.card, color: color.textBody, fontFamily: font.sans, ...type.caption, textAlign: vertical ? "center" : "left" }}>
              <Emphasis text={e.subtitulo} />
            </div>
          </FadeUp>
        </div>
        {g.clics
          .filter((c) => c >= e.clip.desde && c < e.clip.hasta)
          .map((c) => (
            <Sequence key={c} name="Clic" from={Math.round(((c - e.clip.desde) / e.clip.velocidad) * fps)} layout="none">
              <Audio src={sonido("clic")} volume={0.55} />
            </Sequence>
          ))}
      </>
    );
  }

  if (e.tipo === "oferta") {
    return (
      <AbsoluteFill style={{ background: color.accent }}>
        <Img src={logo.wordmarkWhite} style={{ position: "absolute", top: vertical ? 240 : 70, left: vertical ? 435 : 860, width: 200 }} />
        <div style={{ position: "absolute", left: vertical ? 64 : 160, right: vertical ? 64 : 160, top: vertical ? 480 : 260, display: "grid", gap: 40 }}>
          <FadeUp>
            <p style={{ margin: 0, fontFamily: font.sans, fontSize: vertical ? 70 : 72, fontWeight: 700, lineHeight: 1.12, color: color.white }}>Descuento en tu primera recarga</p>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: vertical ? "1fr" : "1fr 1fr", gap: 30 }}>
            <Descuento valor="10 %" desde="500 facturas" delay={80} />
            <Descuento valor="20 %" desde="1.000 facturas" delay={145} fuerte />
          </div>
          <FadeUp delay={185}>
            <p style={{ margin: 0, fontFamily: font.sans, fontSize: 34, fontWeight: 500, lineHeight: 1.3, color: color.white }}>{CONDICION}</p>
          </FadeUp>
        </div>
      </AbsoluteFill>
    );
  }

  return (
    <>
      <Backdrop />
      <div style={{ position: "absolute", left: 48, right: 48, top: vertical ? 520 : 170, display: "grid", gap: 44, justifyItems: "center", textAlign: "center" }}>
        <Img src={logo.wordmark} style={{ width: 340 }} />
        <TwoToneTitle lead="Tú mantienes" rest="el control." size="tagline" delay={4} />
        <FadeUp delay={12}>
          <span style={{ display: "inline-block", padding: "22px 40px", borderRadius: radius.pill, background: color.accent, color: color.white, fontFamily: font.sans, ...type.button, fontSize: 38 }}>
            Agenda tu demostración en vivo
          </span>
        </FadeUp>
        <FadeUp delay={16}>
          <p style={{ margin: 0, maxWidth: 820, fontFamily: font.sans, fontSize: 30, lineHeight: 1.3, textWrap: "balance", color: color.textTitle }}>{CONDICION}</p>
        </FadeUp>
        <FadeUp delay={18}>
          <p style={{ margin: 0, fontFamily: font.sans, ...type.badge, color: color.textTitle }}>nuvara.com.co</p>
        </FadeUp>
      </div>
    </>
  );
};

export const PonteAlDiaVideo: React.FC = () => {
  const { fps } = useVideoConfig();
  const VOZ_EN = 0.2;
  const inicios = ESCENAS.reduce<number[]>((a, e, i) => [...a, a[i] + Math.round(e.dura * fps) / fps], [0]);
  const total = inicios[ESCENAS.length];
  const conVoz = ESCENAS.map((e, i): [number, number] => [inicios[i] + VOZ_EN, inicios[i] + VOZ_EN + DURACION_VOZ[e.voz]]);
  const musica = (seg: number) => {
    const cerca = Math.min(...conVoz.map(([a, b]) => (seg < a ? a - seg : seg > b ? seg - b : 0)));
    const salida = interpolate(seg, [total - 1.2, total], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return interpolate(cerca, [0, 0.4], [0.1, 0.28], { extrapolateRight: "clamp" }) * salida;
  };
  return (
    <>
      <Series>
        {ESCENAS.map((e, i) => (
          <Series.Sequence key={i} name={e.tipo} durationInFrames={Math.round(e.dura * fps)}>
            <Contenido e={e} />
            <Sequence from={Math.round(VOZ_EN * fps)} layout="none">
              <Audio src={voz(e.voz)} />
            </Sequence>
          </Series.Sequence>
        ))}
      </Series>
      <Audio src={sonido("musica")} loop volume={(f) => musica(f / fps)} />
      {inicios.slice(1, -1).map((s) => (
        <Sequence key={s} name="Whoosh" from={Math.max(0, Math.round((s - 0.15) * fps))} layout="none">
          <Audio src={sonido("whoosh")} volume={0.35} />
        </Sequence>
      ))}
    </>
  );
};
