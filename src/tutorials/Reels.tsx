import { Audio, Video } from "@remotion/media";
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  Series,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, gradient, radius, shadow, type } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { Emphasis } from "../components/Emphasis";
import { FadeUp } from "../components/FadeUp";
import {
  PantallaReal,
  type Punto,
  type Toma,
} from "../components/PantallaReal";
import { TwoToneTitle } from "../components/TwoToneTitle";
import { CLICS, CURSOR } from "./EventosRadian";
import { GRABACIONES } from "./FlujoCausacion";

// Reels 1080×1920 sacados de los tutoriales, con la voz de Eduardo (ElevenLabs).
// Texto arriba de los 420 px de abajo, que tapa la app. Sin Nuvi: pueden ir a pauta.
const voz = (n: string) => staticFile(`voz/reels/${n}.wav`);
const sonido = (n: string) => staticFile(`sonido/${n}.wav`);
const DURACION_VOZ: Record<string, number> = {"n1": 2.8, "n2": 4.64, "p1": 2.41, "r1": 4.16, "r3": 6.56, "r2": 4.53, "r4": 3.87, "a2": 5.04, "a3": 5.9, "a1": 1.91, "a4": 4.08, "c3": 4.0, "c2": 6.55, "c1": 3.42, "c4": 5.67, "rp1": 2.9, "rp2": 4.15, "rp3": 2.21, "rp4": 5.63, "rp5": 5.32, "rp6": 2.97};

const MX = 48;
const MARCO = { left: MX, top: 420, ancho: 1080 - MX * 2, alto: 920 };
const TOP_SUBTITULO = 1362;
const TELEFONO = { ancho: 425, alto: 920 };

type Base = { readonly voz?: string; readonly vozEn?: number };
type Gancho = Base & { readonly tipo: "gancho"; readonly linea1: string; readonly linea2: string; readonly dura: number; readonly fuerte?: boolean };
type Pantalla = Base & {
  readonly tipo: "pantalla";
  readonly lead: string;
  readonly rest: string;
  readonly subtitulo: string;
  readonly recording: string;
  readonly desde: number;
  readonly hasta: number;
  readonly velocidad: number;
  readonly camara: Toma[];
  readonly cursor: readonly Punto[];
  readonly clics: readonly number[];
};
type Telefono = Base & {
  readonly tipo: "telefono";
  readonly lead: string;
  readonly rest: string;
  readonly subtitulo: string;
  readonly recording: string;
  readonly velocidad: number;
  readonly dura: number;
};
type Pareja = Base & { readonly tipo: "pareja"; readonly lead: string; readonly rest: string; readonly subtitulo: string; readonly dura: number };
type Cierre = Base & { readonly tipo: "cierre"; readonly dura: number; readonly aviso?: string };
// Lo que se pierde: tarjetas que se tachan una tras otra
type Riesgo = Base & { readonly tipo: "riesgo"; readonly lead: string; readonly rest: string; readonly tarjetas: readonly string[]; readonly dura: number };
type Escena = Gancho | Pantalla | Telefono | Pareja | Cierre | Riesgo;

const duracion = (e: Escena) =>
  e.tipo === "pantalla" ? (e.hasta - e.desde) / e.velocidad : e.dura;
const duracionReel = (r: readonly Escena[]) =>
  r.reduce((s, e) => s + Math.round(duracion(e) * 30) / 30, 0);

const flujo = GRABACIONES.flujo;
const agrupada = GRABACIONES.agrupada;
const extra = GRABACIONES.extra;

const CAUSACION: Escena[] = [
  { tipo: "gancho", linea1: "Del 11 al 25 vence el IVA.", linea2: "¿Ya causaste todo?", dura: 3.9, voz: "c1", vozEn: 0.2 },
  {
    tipo: "pantalla", lead: "Tus facturas", rest: "llegan solas.", subtitulo: "De la *DIAN* y de tu *correo*",
    recording: flujo.src, desde: 5.6, hasta: 14.5, velocidad: 1.25,
    camara: [{ t: 5.6, x: 760, y: 420, zoom: 1.8 }, { t: 11, x: 760, y: 620, zoom: 1.8 }],
    cursor: flujo.cursor, clics: flujo.clics, voz: "c2", vozEn: 0.2,
  },
  {
    tipo: "pantalla", lead: "Tú revisas", rest: "el asiento.", subtitulo: "*PUC*, *IVA* y *retenciones*",
    recording: flujo.src, desde: 25.8, hasta: 37.5, velocidad: 1.6,
    camara: [{ t: 25.8, x: 1240, y: 400, zoom: 1.9 }, { t: 33, x: 1400, y: 560, zoom: 2 }],
    cursor: flujo.cursor, clics: flujo.clics, voz: "c3", vozEn: 0.2,
  },
  {
    tipo: "pantalla", lead: "Y apruebas", rest: "en grupo.", subtitulo: "*Tú decides* qué se aprueba",
    recording: agrupada.src, desde: 15, hasta: 26.5, velocidad: 1.7,
    camara: [{ t: 15, x: 900, y: 560, zoom: 1.75 }, { t: 22, x: 800, y: 640, zoom: 1.8 }],
    cursor: agrupada.cursor, clics: agrupada.clics,
  },
  {
    tipo: "pantalla", lead: "Exportas a tu", rest: "programa contable.", subtitulo: "Nada sale *sin tu aprobación*",
    recording: extra.src, desde: 50, hasta: 60.5, velocidad: 1.5,
    camara: [{ t: 50, x: 820, y: 680, zoom: 1.75 }, { t: 55, x: 1100, y: 800, zoom: 1.8 }],
    cursor: extra.cursor, clics: extra.clics, voz: "c4", vozEn: 0.2,
  },
  { tipo: "cierre", dura: 3.6 },
];

// N1 de la pauta de cierre: arranca más fuerte y sin tramos largos sin voz
const CIERRE_IVA: Escena[] = [
  { tipo: "gancho", linea1: "Faltan días para el IVA.", linea2: "¿Y tus facturas?", dura: 3.1, voz: "n1", vozEn: 0.1, fuerte: true },
  CAUSACION[1],
  { ...(CAUSACION[2] as Pantalla), velocidad: 2.4 },
  { ...(CAUSACION[3] as Pantalla), velocidad: 2.28, voz: "n2", vozEn: 0.1 },
  CAUSACION[4],
  CAUSACION[5],
];

const RADIAN: Escena[] = [
  { tipo: "gancho", linea1: "¿Recibes facturas", linea2: "a crédito?", dura: 4.4, voz: "r1", vozEn: 0.2 },
  {
    tipo: "pantalla", lead: "Acusa en", rest: "un momento.", subtitulo: "Pulsas *Acusar*, revisas y envías",
    recording: "recordings/radian-usuario.mp4", desde: 6.4, hasta: 18, velocidad: 2,
    camara: [
      { t: 6.4, x: 780, y: 440, zoom: 2 }, { t: 9.4, x: 1600, y: 460, zoom: 2.8 },
      { t: 10.6, x: 1640, y: 330, zoom: 3.2 }, { t: 12.6, x: 1640, y: 820, zoom: 3.2 }, { t: 14.6, x: 800, y: 800, zoom: 2 },
    ],
    cursor: CURSOR, clics: CLICS, voz: "r2", vozEn: 0.2,
  },
  {
    tipo: "pantalla", lead: "Con reglas,", rest: "se envían solos.", subtitulo: "*Acuse* y *recibo* con tus reglas",
    recording: "recordings/radian-usuario.mp4", desde: 80.7, hasta: 100, velocidad: 2.2,
    camara: [
      { t: 80.7, x: 1300, y: 560, zoom: 2.3 }, { t: 84.5, x: 1150, y: 820, zoom: 2.3 }, { t: 87.6, x: 1560, y: 680, zoom: 2.9 },
      { t: 91, x: 1250, y: 820, zoom: 2.4 }, { t: 94.6, x: 1560, y: 700, zoom: 2.9 }, { t: 98.4, x: 1350, y: 620, zoom: 2.2 },
    ],
    cursor: CURSOR, clics: CLICS, voz: "r3", vozEn: 0.2,
  },
  {
    tipo: "pantalla", lead: "Vigila lo", rest: "que vence.", subtitulo: "El *reclamo* siempre lo decides tú",
    recording: "recordings/radian-usuario.mp4", desde: 53.1, hasta: 64, velocidad: 1.6,
    camara: [
      { t: 53.1, x: 700, y: 400, zoom: 2.2 }, { t: 57.5, x: 900, y: 700, zoom: 2.3 },
      { t: 60.2, x: 1550, y: 860, zoom: 2.6 }, { t: 62.9, x: 1000, y: 860, zoom: 2.1 },
    ],
    cursor: CURSOR, clics: CLICS,
  },
  { tipo: "cierre", dura: 4.3, voz: "r4", vozEn: 0.2 },
];

// Versión de pauta (a18): arranca por lo que se pierde y no por la función
const RADIAN_PAUTA: Escena[] = [
  { tipo: "gancho", linea1: "¿Compraste a crédito?", linea2: "¿Y el acuse?", dura: 3.4, voz: "rp1", vozEn: 0.1, fuerte: true },
  { tipo: "riesgo", lead: "En una fiscalización", rest: "te pueden desconocer:", tarjetas: ["El costo", "El IVA descontable"], dura: 4.6, voz: "rp2", vozEn: 0.1 },
  { ...(RADIAN[1] as Pantalla), lead: "Lo envías", rest: "en un clic.", subtitulo: "Pulsas *Acusar* y listo", velocidad: 2.4, voz: "rp3", vozEn: 0.1 },
  { ...(RADIAN[2] as Pantalla), subtitulo: "*Acuse* al llegar, *recibo* al causar", velocidad: 2.6, voz: "rp4", vozEn: 0.1 },
  { ...(RADIAN[3] as Pantalla), velocidad: 1.9, voz: "rp5", vozEn: 0.1 },
  { tipo: "cierre", dura: 3.4, voz: "rp6", vozEn: 0.1, aviso: "Escríbenos por WhatsApp" },
];

const APP: Escena[] = [
  { tipo: "gancho", linea1: "Lleva tu operación", linea2: "al celular.", dura: 2.6, voz: "a1", vozEn: 0.2 },
  {
    tipo: "telefono", lead: "Tus clientes", rest: "aprueban pagos.", subtitulo: "Ven *cómo va su empresa*",
    recording: "recordings/tesoreria-app-cliente.mp4", velocidad: 1, dura: 12.8, voz: "a2", vozEn: 0.2,
  },
  {
    tipo: "telefono", lead: "Tu equipo", rest: "registra gastos.", subtitulo: "Con la *foto del soporte*",
    recording: "recordings/tesoreria-app-operador.mp4", velocidad: 1, dura: 6.3, voz: "a3", vozEn: 0.2,
  },
  { tipo: "pareja", lead: "Cada uno ve", rest: "solo lo suyo.", subtitulo: "Tú asignas *qué ve cada persona*", dura: 4.6, voz: "a4", vozEn: 0.2 },
  { tipo: "cierre", dura: 3.2 },
];

// Hasta que la app esté en las tiendas: sin fecha ni precio
const APP_PROXIMAMENTE: Escena[] = [
  { tipo: "gancho", linea1: "Próximamente:", linea2: "núvara en tu celular.", dura: 2.6, voz: "a1", vozEn: 0.2 },
  ...APP.slice(1, -1),
  { tipo: "cierre", dura: 3.2, voz: "p1", vozEn: 0.2, aviso: "Muy pronto en iOS y Android" },
];

export const DURACION_REEL_CAUSACION = duracionReel(CAUSACION);
export const DURACION_REEL_CIERRE_IVA = duracionReel(CIERRE_IVA);
export const DURACION_REEL_RADIAN = duracionReel(RADIAN);
export const DURACION_REEL_RADIAN_PAUTA = duracionReel(RADIAN_PAUTA);
export const DURACION_REEL_APP = duracionReel(APP);
export const DURACION_REEL_APP_PROXIMAMENTE = duracionReel(APP_PROXIMAMENTE);

const Titulo: React.FC<{ readonly lead: string; readonly rest: string }> = ({ lead, rest }) => (
  <div style={{ position: "absolute", left: MX, top: 216, width: 1080 - MX * 2 }}>
    <TwoToneTitle lead={lead} rest={rest} size="sceneTitle" />
  </div>
);

const Subtitulo: React.FC<{ readonly texto: string }> = ({ texto }) => (
  <div style={{ position: "absolute", left: 0, right: 0, top: TOP_SUBTITULO, display: "flex", justifyContent: "center" }}>
    <FadeUp>
      <div style={{ padding: "18px 32px", borderRadius: radius.card, background: color.white, boxShadow: shadow.card, color: color.textBody, fontFamily: font.sans, ...type.caption, textAlign: "center" }}>
        <Emphasis text={texto} />
      </div>
    </FadeUp>
  </div>
);

const MarcoTelefono: React.FC<{ readonly children: React.ReactNode; readonly escala?: number }> = ({ children, escala = 1 }) => (
  <div style={{ width: TELEFONO.ancho * escala, height: TELEFONO.alto * escala, borderRadius: radius.frame * 3, border: `10px solid ${color.gray700}`, boxShadow: shadow.frame, overflow: "hidden", background: color.white }}>
    {children}
  </div>
);

// Primer segundo: la frase entra de golpe, grande, con un pop
export const GanchoFuerte: React.FC<{ readonly linea1: string; readonly linea2: string }> = ({ linea1, linea2 }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const vertical = height > width;
  const golpe = spring({ frame: frame - 18, fps, config: { damping: 11, stiffness: 190 } });
  return (
    <AbsoluteFill style={{ background: color.accentDeep, display: "grid", alignContent: "center", justifyItems: "center", gap: 26, padding: 48, textAlign: "center" }}>
      <Img src={logo.wordmarkWhite} style={{ position: "absolute", top: vertical ? 240 : 80, left: (width - 250) / 2, width: 250 }} />
      <p style={{ margin: 0, fontFamily: font.sans, fontSize: vertical ? 74 : 84, fontWeight: 500, lineHeight: 1.1, color: color.white, scale: String(interpolate(frame, [0, 6], [1.25, 1], { extrapolateRight: "clamp" })) }}>{linea1}</p>
      <p style={{ margin: 0, fontFamily: font.sans, fontSize: vertical ? 138 : 170, fontWeight: 700, lineHeight: 1.05, color: color.white, opacity: golpe, scale: String(interpolate(golpe, [0, 1], [2.1, 1])) }}>{linea2}</p>
      <Sequence from={18} layout="none">
        <Audio src={staticFile("sonido/pop.wav")} volume={0.6} />
      </Sequence>
    </AbsoluteFill>
  );
};

// Cada tarjeta entra y, un momento después, una línea roja la tacha
const EscenaRiesgo: React.FC<{ readonly e: Riesgo }> = ({ e }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <>
      <Backdrop />
      <Titulo lead={e.lead} rest={e.rest} />
      <div style={{ position: "absolute", left: MX, right: MX, top: 520, display: "grid", gap: 48 }}>
        {e.tarjetas.map((t, i) => {
          // Entran juntas; cada tacha cae cuando la voz nombra la tarjeta
          const entra = 6 + i * 8;
          const golpe = 72 + i * 30;
          const tacha = spring({ frame: frame - golpe, fps, config: { damping: 16, stiffness: 170 } });
          return (
            <FadeUp key={t} delay={entra}>
              <div style={{ position: "relative", padding: "56px 48px", borderRadius: radius.card, background: tacha > 0.5 ? color.riesgoTint : color.white, boxShadow: shadow.card }}>
                <p style={{ margin: 0, fontFamily: font.sans, fontSize: 92, fontWeight: 700, lineHeight: 1.05, color: color.textTitle }}>
                  <span style={{ position: "relative", display: "inline-block" }}>
                    {t}
                    <span style={{ position: "absolute", left: -12, top: "54%", height: 12, borderRadius: 6, background: color.riesgo, width: `calc((100% + 24px) * ${tacha})`, rotate: "-2deg" }} />
                  </span>
                </p>
              </div>
              <Sequence from={golpe} layout="none">
                <Audio src={sonido("clic")} volume={0.5} />
              </Sequence>
            </FadeUp>
          );
        })}
      </div>
    </>
  );
};

const Contenido: React.FC<{ readonly e: Escena }> = ({ e }) => {
  const { fps } = useVideoConfig();
  if (e.tipo === "gancho" && e.fuerte) return <GanchoFuerte linea1={e.linea1} linea2={e.linea2} />;
  if (e.tipo === "gancho") {
    return (
      <AbsoluteFill style={{ background: gradient.fondoMarca }}>
        <Img src={logo.wordmarkWhite} style={{ position: "absolute", top: 240, left: 415, width: 250 }} />
        <div style={{ position: "absolute", left: MX, right: MX, top: 640 }}>
          <FadeUp>
            <p style={{ margin: 0, fontFamily: font.sans, fontSize: 84, fontWeight: 300, lineHeight: 1.1, color: color.white }}>{e.linea1}</p>
          </FadeUp>
          <FadeUp delay={8}>
            <p style={{ margin: 0, fontFamily: font.sans, fontSize: 104, fontWeight: 700, lineHeight: 1.1, color: color.white }}>{e.linea2}</p>
          </FadeUp>
        </div>
      </AbsoluteFill>
    );
  }
  if (e.tipo === "riesgo") return <EscenaRiesgo e={e} />;
  if (e.tipo === "cierre") {
    return (
      <>
        <Backdrop />
        <div style={{ position: "absolute", left: MX, right: MX, top: 560, display: "grid", gap: 44, justifyItems: "center", textAlign: "center" }}>
          <Img src={logo.wordmark} style={{ width: 340 }} />
          <TwoToneTitle lead="Tú mantienes" rest="el control." size="tagline" delay={4} />
          <FadeUp delay={12}>
            <span style={{ display: "inline-block", padding: "22px 40px", borderRadius: radius.pill, background: color.accent, color: color.white, fontFamily: font.sans, ...type.button, fontSize: 38 }}>
              {e.aviso ?? "Agenda tu demostración en vivo"}
            </span>
          </FadeUp>
          <FadeUp delay={16}>
            <p style={{ margin: 0, fontFamily: font.sans, ...type.badge, color: color.textTitle }}>nuvara.com.co</p>
          </FadeUp>
        </div>
      </>
    );
  }
  if (e.tipo === "pantalla") {
    return (
      <>
        <Backdrop />
        <Titulo lead={e.lead} rest={e.rest} />
        <PantallaReal recording={e.recording} desde={e.desde} hasta={e.hasta} velocidad={e.velocidad} camara={e.camara} cursor={e.cursor} clics={e.clics} marco={MARCO} />
        <Subtitulo texto={e.subtitulo} />
        {e.clics
          .filter((c) => c >= e.desde && c < e.hasta)
          .map((c) => (
            <Sequence key={c} name="Clic" from={Math.round(((c - e.desde) / e.velocidad) * fps)} layout="none">
              <Audio src={sonido("clic")} volume={0.55} />
            </Sequence>
          ))}
      </>
    );
  }
  return (
    <>
      <Backdrop />
      <Titulo lead={e.lead} rest={e.rest} />
      <div style={{ position: "absolute", left: 0, right: 0, top: MARCO.top, display: "flex", justifyContent: "center", gap: 28 }}>
        {e.tipo === "telefono" ? (
          <MarcoTelefono>
            <Video src={staticFile(e.recording)} muted playbackRate={e.velocidad} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </MarcoTelefono>
        ) : (
          ["app-cliente", "app-operador"].map((n) => (
            <MarcoTelefono key={n}>
              <Img src={staticFile(`brochure-tesoreria/${n}.png`)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </MarcoTelefono>
          ))
        )}
      </div>
      <Subtitulo texto={e.subtitulo} />
    </>
  );
};

const Reel: React.FC<{ readonly escenas: readonly Escena[] }> = ({ escenas }) => {
  const { fps } = useVideoConfig();
  const inicios = escenas.reduce<number[]>((a, e, i) => [...a, a[i] + Math.round(duracion(e) * fps) / fps], [0]);
  const total = inicios[escenas.length];
  const conVoz = escenas.flatMap((e, i): [number, number][] =>
    e.voz ? [[inicios[i] + (e.vozEn ?? 0), inicios[i] + (e.vozEn ?? 0) + DURACION_VOZ[e.voz]]] : [],
  );
  const musica = (seg: number) => {
    const cerca = Math.min(...conVoz.map(([a, b]) => (seg < a ? a - seg : seg > b ? seg - b : 0)));
    const salida = interpolate(seg, [total - 1.2, total], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return interpolate(cerca, [0, 0.4], [0.1, 0.28], { extrapolateRight: "clamp" }) * salida;
  };
  return (
    <>
      <Series>
        {escenas.map((e, i) => (
          <Series.Sequence key={i} name={e.tipo} durationInFrames={Math.round(duracion(e) * fps)}>
            <Contenido e={e} />
            {e.voz ? (
              <Sequence from={Math.round((e.vozEn ?? 0) * fps)} layout="none">
                <Audio src={voz(e.voz)} />
              </Sequence>
            ) : null}
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

export const ReelCausacion = () => <Reel escenas={CAUSACION} />;
export const ReelCierreIva = () => <Reel escenas={CIERRE_IVA} />;
export const ReelRadian = () => <Reel escenas={RADIAN} />;
export const ReelRadianPauta = () => <Reel escenas={RADIAN_PAUTA} />;
export const ReelApp = () => <Reel escenas={APP} />;
export const ReelAppProximamente = () => <Reel escenas={APP_PROXIMAMENTE} />;
