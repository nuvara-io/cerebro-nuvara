import { Audio } from "@remotion/media";
import { Img, interpolate, Sequence, Series, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius, shadow, type } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { FadeUp } from "../components/FadeUp";
import { TwoToneTitle } from "../components/TwoToneTitle";
import { GanchoFuerte } from "./Reels";

// Versiones 9:16 con voz de los anuncios de imagen de NUVARA20 (N2 a N5).
// Meta también entrega esos anuncios en Reels, y una imagen quieta ahí sale
// muda: estos videos van en la ubicación de Stories y Reels de cada anuncio,
// y la imagen se queda en los feeds. Las placas son los mismos PNG del anuncio
// (public/pauta/); si cambia una pieza, se vuelve a exportar y se copia acá.
// Voz de Eduardo (ElevenLabs, eleven_v4), acelerada 10 % y recortada.
// Las cifras de N5 salen de red/precios.md: si cambian allá, se cambian acá.

const voz = (n: string) => staticFile(`voz/pauta/${n}.wav`);
const sonido = (n: string) => staticFile(`sonido/${n}.wav`);
const DURACION_VOZ: Record<string, number> = { e1: 2.57, e2: 5.81, e3: 5.03, g1: 2.94, g2: 4.46, g3: 5.29, g4: 2.41, t1: 2.01, t2: 3.19, t3: 5.11, t4: 3.28, t5: 4.31, v1: 3.04, v2: 5.63, v3: 4.96 };

// Aire antes de la primera frase, entre frases y al final de cada escena
const ANTES = 0.3;
const ENTRE = 0.35;
const DESPUES = 0.55;

type Base = { readonly voces: readonly string[]; readonly minimo?: number };
type Escena =
  | (Base & { readonly tipo: "gancho"; readonly linea1: string; readonly linea2: string })
  | (Base & { readonly tipo: "placa"; readonly placa: string })
  | (Base & { readonly tipo: "cierre" });

const duracion = (e: Escena) => {
  const habla = e.voces.reduce((s, v, i) => s + DURACION_VOZ[v] + (i ? ENTRE : 0), 0);
  return Math.max(e.minimo ?? 0, e.voces.length ? ANTES + habla + DESPUES : 0);
};
const frames = (e: Escena) => Math.round(duracion(e) * 30);
const total = (r: readonly Escena[]) => r.reduce((s, e) => s + frames(e), 0);

const CIERRE: Escena = { tipo: "cierre", voces: [], minimo: 2.6 };

const N2: Escena[] = [
  { tipo: "placa", placa: "N2-Dian1", voces: ["t1"], minimo: 2.9 },
  { tipo: "placa", placa: "N2-Dian2", voces: ["t2"] },
  { tipo: "placa", placa: "N2-Dian3", voces: ["t3"] },
  { tipo: "placa", placa: "N2-Dian4", voces: ["t4"] },
  { tipo: "placa", placa: "N2-Dian5", voces: ["t5"] },
  CIERRE,
];

const N3: Escena[] = [
  { tipo: "gancho", linea1: "500 causaciones.", linea2: "¿Una hora?", voces: ["e1"] },
  { tipo: "placa", placa: "Post500Causaciones", voces: ["e2", "e3"] },
  CIERRE,
];

const N4: Escena[] = [
  { tipo: "gancho", linea1: "¿Tus clientes usan", linea2: "otro programa?", voces: ["v1"] },
  { tipo: "placa", placa: "N4-VariosProgramas", voces: ["v2", "v3"] },
  CIERRE,
];

const N5: Escena[] = [
  { tipo: "gancho", linea1: "Sin permanencia.", linea2: "Pagas lo que causas.", voces: ["g1"] },
  { tipo: "placa", placa: "N5-PagasLoQueCausas", voces: ["g2", "g3"] },
  { tipo: "cierre", voces: ["g4"], minimo: 2.6 },
];

export const DURACION_PAUTA = { N2: total(N2), N3: total(N3), N4: total(N4), N5: total(N5) };

// La placa del anuncio (1080×1350) como tarjeta: deja libres los 260 px de
// arriba y los ~560 de abajo, donde Reels pone la cuenta, el texto y el botón.
const ANCHO_PLACA = 860;
const Placa: React.FC<{ readonly placa: string; readonly dura: number }> = ({ placa, dura }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entra = spring({ frame, fps, config: { damping: 16, stiffness: 140 } });
  const acerca = interpolate(frame, [0, dura * fps], [1, 1.035]);
  return (
    <>
      <Backdrop format="post" />
      <div
        style={{
          position: "absolute",
          left: (1080 - ANCHO_PLACA) / 2,
          top: 250,
          width: ANCHO_PLACA,
          height: (ANCHO_PLACA * 1350) / 1080,
          borderRadius: radius.card,
          overflow: "hidden",
          boxShadow: shadow.card,
          opacity: entra,
          scale: String(interpolate(entra, [0, 1], [0.94, 1]) * acerca),
        }}
      >
        <Img src={staticFile(`pauta/${placa}.png`)} style={{ width: "100%", height: "100%" }} />
      </div>
    </>
  );
};

const Cierre: React.FC = () => (
  <>
    <Backdrop />
    <div style={{ position: "absolute", left: 48, right: 48, top: 560, display: "grid", gap: 44, justifyItems: "center", textAlign: "center" }}>
      <Img src={logo.wordmark} style={{ width: 340 }} />
      <TwoToneTitle lead="Tú mantienes" rest="el control." size="tagline" delay={4} />
      <FadeUp delay={12}>
        <span style={{ display: "inline-block", padding: "22px 40px", borderRadius: radius.pill, background: color.accent, color: color.white, fontFamily: font.sans, ...type.button, fontSize: 38 }}>
          Agenda tu demostración en vivo
        </span>
      </FadeUp>
      <FadeUp delay={16}>
        <p style={{ margin: 0, fontFamily: font.sans, ...type.badge, color: color.textTitle }}>nuvara.com.co</p>
      </FadeUp>
    </div>
  </>
);

const Voces: React.FC<{ readonly voces: readonly string[] }> = ({ voces }) => {
  const { fps } = useVideoConfig();
  let t = ANTES;
  return (
    <>
      {voces.map((v) => {
        const desde = t;
        t += DURACION_VOZ[v] + ENTRE;
        return (
          <Sequence key={v} name={`Voz ${v}`} from={Math.round(desde * fps)} layout="none">
            <Audio src={voz(v)} />
          </Sequence>
        );
      })}
    </>
  );
};

const Reel: React.FC<{ readonly escenas: readonly Escena[] }> = ({ escenas }) => {
  const { fps } = useVideoConfig();
  const inicios = escenas.reduce<number[]>((a, e, i) => [...a, a[i] + frames(e) / fps], [0]);
  const fin = inicios[escenas.length];
  // Tramos con voz, para bajar la música mientras se habla
  const conVoz = escenas.flatMap((e, i) => {
    let t = inicios[i] + ANTES;
    return e.voces.map((v): [number, number] => {
      const tramo: [number, number] = [t, t + DURACION_VOZ[v]];
      t += DURACION_VOZ[v] + ENTRE;
      return tramo;
    });
  });
  const musica = (seg: number) => {
    const cerca = Math.min(...conVoz.map(([a, b]) => (seg < a ? a - seg : seg > b ? seg - b : 0)));
    const salida = interpolate(seg, [fin - 1.2, fin], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return interpolate(cerca, [0, 0.4], [0.1, 0.28], { extrapolateRight: "clamp" }) * salida;
  };
  return (
    <>
      <Series>
        {escenas.map((e, i) => (
          <Series.Sequence key={i} name={e.tipo === "placa" ? e.placa : e.tipo} durationInFrames={frames(e)}>
            {e.tipo === "gancho" ? <GanchoFuerte linea1={e.linea1} linea2={e.linea2} /> : e.tipo === "placa" ? <Placa placa={e.placa} dura={duracion(e)} /> : <Cierre />}
            <Voces voces={e.voces} />
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

export const ReelN2 = () => <Reel escenas={N2} />;
export const ReelN3 = () => <Reel escenas={N3} />;
export const ReelN4 = () => <Reel escenas={N4} />;
export const ReelN5 = () => <Reel escenas={N5} />;
