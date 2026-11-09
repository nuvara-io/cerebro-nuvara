import { Audio } from "@remotion/media";
import { AbsoluteFill, Img, interpolate, Sequence, Series, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius, shadow, type } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { FadeUp } from "../components/FadeUp";
import { TwoToneTitle } from "../components/TwoToneTitle";
import { GanchoFuerte } from "./Reels";

// Reel 9:16 del cambio de nombre de la unidad: las nuvicoins pasan a ser
// créditos y 1 crédito = $1 (decisión del 05/11/2026, en la plataforma desde
// la PR #2013 de platform). Las cifras salen de red/precios.md: si cambian
// allá, se cambian acá. Voz de Eduardo (ElevenLabs, eleven_v4), recortada.
const voz = (n: string) => staticFile(`voz/creditos/${n}.wav`);
const sonido = (n: string) => staticFile(`sonido/${n}.wav`);
const DURACION_VOZ: Record<string, number> = { c1: 2.92, c2: 2.97, c3: 3.41, c4: 4.47, c5: 5.32 };

const ANTES = 0.3;
const DESPUES = 0.6;
const MX = 64;

type Escena = { readonly id: "gancho" | "valor" | "recarga" | "consumo" | "saldo" | "cierre"; readonly voz?: string; readonly minimo?: number };

const ESCENAS: Escena[] = [
  { id: "gancho", voz: "c1", minimo: 2.6 },
  { id: "valor", voz: "c2" },
  { id: "recarga", voz: "c3" },
  { id: "consumo", voz: "c4" },
  { id: "saldo", voz: "c5" },
  { id: "cierre", minimo: 2.8 },
];

const duracion = (e: Escena) => Math.max(e.minimo ?? 0, e.voz ? ANTES + DURACION_VOZ[e.voz] + DESPUES : 0);
const frames = (e: Escena) => Math.round(duracion(e) * 30);
export const DURACION_REEL_CREDITOS = ESCENAS.reduce((s, e) => s + frames(e), 0);

const Titulo: React.FC<{ readonly lead: string; readonly rest: string }> = ({ lead, rest }) => (
  <div style={{ position: "absolute", left: MX, right: MX, top: 300 }}>
    <TwoToneTitle lead={lead} rest={rest} size="tagline" />
  </div>
);

const Tarjeta: React.FC<{ readonly children: React.ReactNode; readonly delay?: number; readonly fondo?: string }> = ({ children, delay = 0, fondo = color.white }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entra = spring({ frame: frame - delay, fps, config: { damping: 15, stiffness: 150 } });
  return (
    <div
      style={{
        padding: "44px 52px",
        borderRadius: radius.card * 1.5,
        background: fondo,
        boxShadow: shadow.card,
        opacity: entra,
        translate: `0px ${interpolate(entra, [0, 1], [40, 0])}px`,
      }}
    >
      {children}
    </div>
  );
};

const etiqueta: React.CSSProperties = { margin: 0, fontFamily: font.sans, fontSize: 40, fontWeight: 400, lineHeight: 1.2, color: color.textBody };
const cifra: React.CSSProperties = { margin: 0, fontFamily: font.sans, fontSize: 104, fontWeight: 700, lineHeight: 1.05, color: color.accent, fontVariantNumeric: "tabular-nums" };

const Valor: React.FC = () => (
  <>
    <Backdrop />
    <Titulo lead="Más fácil," rest="sin conversiones." />
    <div style={{ position: "absolute", left: MX, right: MX, top: 720 }}>
      <Tarjeta delay={10}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 36 }}>
          <p style={{ ...cifra, color: color.textTitle }}>1 crédito</p>
          <p style={{ ...cifra, color: color.textBody, fontWeight: 300 }}>=</p>
          <p style={cifra}>$1</p>
        </div>
      </Tarjeta>
    </div>
  </>
);

const Flecha: React.FC<{ readonly delay: number }> = ({ delay }) => (
  <FadeUp delay={delay}>
    <p style={{ margin: 0, textAlign: "center", fontFamily: font.sans, fontSize: 90, lineHeight: 1, color: color.accent }}>↓</p>
  </FadeUp>
);

const Recarga: React.FC = () => (
  <>
    <Backdrop />
    <Titulo lead="Recargas en pesos," rest="recibes lo mismo." />
    <div style={{ position: "absolute", left: MX, right: MX, top: 640, display: "grid", gap: 28 }}>
      <Tarjeta delay={8}>
        <p style={etiqueta}>Recargas</p>
        <p style={{ ...cifra, color: color.textTitle }}>$70.000</p>
      </Tarjeta>
      <Flecha delay={22} />
      <Tarjeta delay={30} fondo={color.accentTint}>
        <p style={etiqueta}>Tienes</p>
        <p style={cifra}>70.000 créditos</p>
      </Tarjeta>
    </div>
  </>
);

const Fila: React.FC<{ readonly que: string; readonly creditos: string; readonly delay: number }> = ({ que, creditos, delay }) => (
  <Tarjeta delay={delay}>
    <p style={etiqueta}>{que}</p>
    <p style={cifra}>
      {creditos} <span style={{ fontSize: 56, fontWeight: 500, color: color.textTitle }}>créditos</span>
    </p>
  </Tarjeta>
);

const Consumo: React.FC = () => (
  <>
    <Backdrop />
    <Titulo lead="Lo que cuesta" rest="causar." />
    <div style={{ position: "absolute", left: MX, right: MX, top: 660, display: "grid", gap: 36 }}>
      <Fila que="Factura de compra" creditos="510" delay={14} />
      <Fila que="Factura de venta" creditos="200" delay={60} />
    </div>
  </>
);

const Saldo: React.FC = () => (
  <>
    <Backdrop />
    <Titulo lead="Tu saldo" rest="vale lo mismo." />
    <div style={{ position: "absolute", left: MX, right: MX, top: 700, display: "grid", gap: 36 }}>
      <Tarjeta delay={10}>
        <p style={{ ...etiqueta, fontSize: 52, color: color.textTitle, textAlign: "center" }}>Solo cambió cómo lo ves.</p>
      </Tarjeta>
      <Tarjeta delay={70} fondo={color.accent}>
        <p style={{ ...etiqueta, fontSize: 52, fontWeight: 600, color: color.white, textAlign: "center" }}>Recarga en Cuenta › Saldo</p>
      </Tarjeta>
    </div>
  </>
);

const Cierre: React.FC = () => (
  <>
    <Backdrop />
    <div style={{ position: "absolute", left: MX, right: MX, top: 560, display: "grid", gap: 44, justifyItems: "center", textAlign: "center" }}>
      <Img src={logo.wordmark} style={{ width: 340 }} />
      <TwoToneTitle lead="Tú mantienes" rest="el control." size="tagline" delay={4} />
      <FadeUp delay={16}>
        <p style={{ margin: 0, fontFamily: font.sans, ...type.badge, color: color.textTitle }}>nuvara.com.co</p>
      </FadeUp>
    </div>
  </>
);

const Contenido: React.FC<{ readonly e: Escena }> = ({ e }) => {
  switch (e.id) {
    case "gancho":
      return <GanchoFuerte linea1="Ya no son nuvicoins." linea2="Son créditos." />;
    case "valor":
      return <Valor />;
    case "recarga":
      return <Recarga />;
    case "consumo":
      return <Consumo />;
    case "saldo":
      return <Saldo />;
    default:
      return <Cierre />;
  }
};

export const ReelCreditos: React.FC = () => {
  const { fps } = useVideoConfig();
  const inicios = ESCENAS.reduce<number[]>((a, e, i) => [...a, a[i] + frames(e) / fps], [0]);
  const fin = inicios[ESCENAS.length];
  const conVoz = ESCENAS.flatMap((e, i): [number, number][] => (e.voz ? [[inicios[i] + ANTES, inicios[i] + ANTES + DURACION_VOZ[e.voz]]] : []));
  const musica = (seg: number) => {
    const cerca = Math.min(...conVoz.map(([a, b]) => (seg < a ? a - seg : seg > b ? seg - b : 0)));
    const salida = interpolate(seg, [fin - 1.2, fin], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return interpolate(cerca, [0, 0.4], [0.1, 0.28], { extrapolateRight: "clamp" }) * salida;
  };
  return (
    <AbsoluteFill>
      <Series>
        {ESCENAS.map((e) => (
          <Series.Sequence key={e.id} name={e.id} durationInFrames={frames(e)}>
            <Contenido e={e} />
            {e.voz ? (
              <Sequence from={Math.round(ANTES * fps)} layout="none">
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
    </AbsoluteFill>
  );
};
