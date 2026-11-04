import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import {
  interpolate,
  Sequence,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { font } from "../brand/fonts";
import { color, motion, radius, shadow, space, type } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { Caption } from "../components/Caption";
import { FadeUp } from "../components/FadeUp";
import { Highlight } from "../components/Highlight";
import {
  PantallaReal,
  type Punto,
  type Toma,
} from "../components/PantallaReal";
import { StepHeader } from "../components/StepHeader";
import { TwoToneTitle } from "../components/TwoToneTitle";
import { IntroScene } from "../scenes/IntroScene";
import { OutroScene } from "../scenes/OutroScene";

// "Eventos RADIAN en núvara": el lado del usuario, grabado en la copia local contra el
// simulador (nada sale a la DIAN) y anonimizado al grabar, con la voz de Eduardo (ElevenLabs).
// Tiempos en segundos de la grabación. El aviso de error de la falla se corta: muestra una ruta del simulador.
const voz = (n: string) => staticFile(`voz/radian/${n}.wav`);
const sonido = (n: string) => staticFile(`sonido/${n}.wav`);
// Duración de cada línea de voz (acelerada 10 %), para bajar la música mientras se habla
const DURACION_VOZ: Record<string, number> = {
  "00-intro": 2.63,
  "01-que-es": 9.02,
  "02-mano": 8.01,
  "03-cadena": 6.05,
  "04-cumplimiento": 6.56,
  "05-reglas": 12.96,
  "06-falla": 4.45,
  "07-cierre": 4.59,
};

const GRABACION = "recordings/radian-usuario.mp4";
const CURSOR: Punto[] = [
  { t: 6.4, x: 960, y: 540 },
  { t: 6.9, x: 620, y: 360 },
  { t: 9.4, x: 1812, y: 436 },
  { t: 12.6, x: 1828, y: 1044 },
  { t: 20.0, x: 1400, y: 900 },
  { t: 28.3, x: 1680, y: 32 },
  { t: 31.6, x: 1814, y: 194 },
  { t: 34.1, x: 1633, y: 168 },
  { t: 36.2, x: 1633, y: 305 },
  { t: 38.2, x: 1633, y: 274 },
  { t: 40.5, x: 1828, y: 1044 },
  { t: 53.8, x: 457, y: 273 },
  { t: 57.8, x: 900, y: 370 },
  { t: 60.1, x: 1856, y: 896 },
  { t: 62.2, x: 1761, y: 969 },
  { t: 65.9, x: 1856, y: 896 },
  { t: 67.9, x: 1768, y: 969 },
  { t: 81.1, x: 1000, y: 300 },
  { t: 83.3, x: 1701, y: 514 },
  { t: 87.8, x: 1856, y: 657 },
  { t: 89.8, x: 1737, y: 698 },
  { t: 93.0, x: 1856, y: 710 },
  { t: 94.9, x: 1737, y: 751 },
  { t: 98.1, x: 1819, y: 533 },
  { t: 100.8, x: 960, y: 386 },
  { t: 102.9, x: 938, y: 432 },
  { t: 105.5, x: 1100, y: 734 },
  { t: 109.5, x: 1848, y: 415 },
  { t: 169.0, x: 1100, y: 500 },
  { t: 174.1, x: 1812, y: 832 },
  { t: 176.9, x: 1828, y: 1044 },
  { t: 191.5, x: 1851, y: 216 },
  { t: 193.2, x: 1500, y: 1014 },
];
const CLICS = [
  9.7, 12.9, 32.0, 34.4, 36.5, 38.5, 40.8, 54.2, 60.4, 62.5, 66.2, 68.2, 83.6,
  88.1, 90.1, 93.3, 95.2, 98.5, 101.1, 103.2, 105.8, 174.4, 177.2, 191.8,
];

type Clip = {
  readonly desde: number;
  readonly hasta: number;
  // La grabación corre más rápido que en vivo para que el video no se sienta lento
  readonly velocidad: number;
  readonly camara: Toma[];
};
type Subtitulo = {
  readonly texto: string;
  readonly en: number;
  readonly arriba?: boolean;
};
type Paso = {
  readonly titulo: string;
  readonly clips: Clip[];
  readonly voz: string;
  readonly subtitulos: Subtitulo[];
};

const PASOS: Paso[] = [
  {
    titulo: "Envía un evento a mano",
    clips: [
      {
        desde: 6.4,
        hasta: 18,
        velocidad: 2,
        camara: [
          { t: 6.4, x: 960, y: 540, zoom: 1 },
          { t: 8.6, x: 1200, y: 460, zoom: 1.4 },
          { t: 10.4, x: 1640, y: 320, zoom: 1.6 },
          { t: 12.6, x: 1640, y: 900, zoom: 1.7 },
          { t: 15.0, x: 960, y: 800, zoom: 1.5 },
        ],
      },
      {
        desde: 20,
        hasta: 22,
        velocidad: 2,
        camara: [{ t: 20, x: 1100, y: 960, zoom: 1.6 }],
      },
      {
        desde: 27.9,
        hasta: 30.9,
        velocidad: 1.2,
        camara: [
          { t: 27.9, x: 1500, y: 160, zoom: 1.6 },
          { t: 28.9, x: 1560, y: 100, zoom: 2.4 },
        ],
      },
    ],
    voz: "02-mano",
    subtitulos: [
      { texto: "Pulsa *Acusar*, revisa y envía", en: 0.4 },
      { texto: "Queda *enviado* y en tu lista", en: 3.6, arriba: true },
      // La cámara ya está en el saldo, arriba a la derecha
      { texto: "Cada evento: *$100* en créditos", en: 6.8 },
    ],
  },
  {
    titulo: "Encadena los eventos",
    clips: [
      {
        desde: 30.9,
        hasta: 52.3,
        velocidad: 2,
        camara: [
          { t: 30.9, x: 960, y: 540, zoom: 1 },
          { t: 32.6, x: 1640, y: 280, zoom: 1.6 },
          { t: 38.8, x: 1640, y: 280, zoom: 1.6 },
          { t: 40.5, x: 1640, y: 900, zoom: 1.7 },
          { t: 43.0, x: 1000, y: 960, zoom: 1.7 },
          { t: 47.5, x: 1000, y: 960, zoom: 1.7 },
          { t: 49.8, x: 1100, y: 900, zoom: 1.5 },
        ],
      },
    ],
    voz: "03-cadena",
    subtitulos: [
      { texto: "Envía la *aceptación expresa*", en: 0.4 },
      {
        texto: "*Acuse*, *recibo* y *aceptación*, en orden",
        en: 5.6,
        arriba: true,
      },
    ],
  },
  {
    titulo: "Vigila el cumplimiento",
    clips: [
      {
        desde: 53.1,
        hasta: 70.6,
        velocidad: 1.7,
        camara: [
          { t: 53.1, x: 960, y: 540, zoom: 1 },
          { t: 55.2, x: 1100, y: 420, zoom: 1.35 },
          { t: 58.4, x: 1100, y: 640, zoom: 1.35 },
          { t: 60.4, x: 1500, y: 860, zoom: 1.7 },
          { t: 63.2, x: 800, y: 880, zoom: 1.5 },
          { t: 65.2, x: 800, y: 880, zoom: 1.5 },
          { t: 66.4, x: 1500, y: 860, zoom: 1.7 },
          { t: 69.0, x: 1100, y: 780, zoom: 1.3 },
        ],
      },
    ],
    voz: "04-cumplimiento",
    subtitulos: [
      {
        texto: "*Por vencer*, *sin acuse* y *sin recibo*",
        en: 0.4,
        arriba: true,
      },
      {
        texto: "¿Vas a reclamar? *Sácala* del envío automático",
        en: 3.8,
        arriba: true,
      },
    ],
  },
  {
    titulo: "Crea tus reglas",
    clips: [
      {
        desde: 80.7,
        hasta: 112,
        velocidad: 2,
        camara: [
          { t: 80.7, x: 960, y: 540, zoom: 1 },
          { t: 82.8, x: 1300, y: 460, zoom: 1.3 },
          { t: 85.4, x: 1300, y: 640, zoom: 1.4 },
          { t: 88.2, x: 1500, y: 680, zoom: 1.6 },
          { t: 96.0, x: 1500, y: 680, zoom: 1.6 },
          { t: 98.4, x: 1500, y: 560, zoom: 1.5 },
          { t: 100.6, x: 960, y: 540, zoom: 1.5 },
          { t: 106.2, x: 960, y: 540, zoom: 1.5 },
          { t: 108.0, x: 1300, y: 640, zoom: 1.35 },
        ],
      },
      {
        desde: 168.5,
        hasta: 172.5,
        velocidad: 1.2,
        camara: [{ t: 168.5, x: 960, y: 620, zoom: 1.25 }],
      },
    ],
    voz: "05-reglas",
    subtitulos: [
      { texto: "*Acuse* al llegar, *recibo* al aprobar", en: 0.4 },
      { texto: "Reglas *por proveedor* o *excepciones*", en: 7.2 },
      { texto: "El *reclamo* siempre lo decides tú", en: 10.8 },
      { texto: "Y los eventos *salen solos*", en: 15.7 },
    ],
  },
  {
    titulo: "Cuando algo falla",
    clips: [
      {
        desde: 174,
        hasta: 177.4,
        velocidad: 1.6,
        camara: [
          { t: 174, x: 1400, y: 760, zoom: 1.4 },
          { t: 175.2, x: 1640, y: 420, zoom: 1.5 },
          { t: 176.9, x: 1640, y: 900, zoom: 1.7 },
        ],
      },
      {
        desde: 190.5,
        hasta: 195.4,
        velocidad: 1.2,
        camara: [
          { t: 190.5, x: 1400, y: 300, zoom: 1.3 },
          { t: 191.9, x: 1400, y: 300, zoom: 1.3 },
          { t: 193.0, x: 1300, y: 950, zoom: 1.9 },
        ],
      },
    ],
    voz: "06-falla",
    subtitulos: [
      { texto: "Queda marcado con su *motivo*", en: 2.2, arriba: true },
      { texto: "Y el cobro *se devuelve solo*", en: 4.2, arriba: true },
    ],
  },
];

// Los eventos que explica la escena "Qué es RADIAN"
const EVENTOS = [
  { codigo: "030", nombre: "Acuse de recibo", nota: "" },
  { codigo: "032", nombre: "Recibo del bien o servicio", nota: "" },
  { codigo: "033", nombre: "Aceptación expresa", nota: "" },
  { codigo: "031", nombre: "Reclamo", nota: "siempre a mano" },
  { codigo: "034", nombre: "Aceptación tácita", nota: "la registra la DIAN" },
] as const;

const INTRO = 3.5;
const CONCEPTO = 10;
const CIERRE = 5.5;
const VOZ_INTRO = 0.3;
const VOZ_CONCEPTO = 0.3;
const VOZ_PASO = 0.3;
const VOZ_CIERRE = 0.4;
const duracionClip = (c: Clip) => (c.hasta - c.desde) / c.velocidad;
const duracionPaso = (p: Paso) =>
  p.clips.reduce((s, c) => s + duracionClip(c), 0);
// Duración total en segundos: escenas menos los fundidos entre ellas
export const DURACION_RADIAN =
  INTRO +
  CONCEPTO +
  PASOS.reduce((s, p) => s + duracionPaso(p), 0) +
  CIERRE -
  (PASOS.length + 2) * motion.exit;

// Dónde empieza cada escena en el video (los fundidos se solapan)
const INICIO_CONCEPTO = INTRO - motion.exit;
const INICIOS = PASOS.reduce<number[]>(
  (acc, p, i) => [
    ...acc,
    acc[i] + (i === 0 ? CONCEPTO : duracionPaso(PASOS[i - 1])) - motion.exit,
  ],
  [INICIO_CONCEPTO],
).slice(1);
const INICIO_CIERRE =
  INICIOS[INICIOS.length - 1] +
  duracionPaso(PASOS[PASOS.length - 1]) -
  motion.exit;
// Tramos con voz: la música baja para que se entienda
const CON_VOZ: [number, number][] = [
  [VOZ_INTRO, VOZ_INTRO + DURACION_VOZ["00-intro"]],
  [
    INICIO_CONCEPTO + VOZ_CONCEPTO,
    INICIO_CONCEPTO + VOZ_CONCEPTO + DURACION_VOZ["01-que-es"],
  ],
  ...PASOS.map((p, i): [number, number] => [
    INICIOS[i] + VOZ_PASO,
    INICIOS[i] + VOZ_PASO + DURACION_VOZ[p.voz],
  ]),
  [
    INICIO_CIERRE + VOZ_CIERRE,
    INICIO_CIERRE + VOZ_CIERRE + DURACION_VOZ["07-cierre"],
  ],
];
const volumenMusica = (seg: number) => {
  const cerca = Math.min(
    ...CON_VOZ.map(([a, b]) => (seg < a ? a - seg : seg > b ? seg - b : 0)),
  );
  // Se apaga al final, aunque la pista siga
  const salida = interpolate(
    seg,
    [DURACION_RADIAN - 1.8, DURACION_RADIAN],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  return (
    interpolate(cerca, [0, 0.4], [0.09, 0.26], {
      extrapolateRight: "clamp",
    }) * salida
  );
};

// Un tramo de grabación con su cámara, su cursor y el sonido de cada clic
const TramoReal: React.FC<{ readonly clip: Clip }> = ({ clip }) => {
  const { fps } = useVideoConfig();
  return (
    <>
      <PantallaReal
        recording={GRABACION}
        desde={clip.desde}
        hasta={clip.hasta}
        velocidad={clip.velocidad}
        camara={clip.camara}
        cursor={CURSOR}
        clics={CLICS}
      />
      {CLICS.filter((c) => c >= clip.desde && c < clip.hasta).map((c) => (
        <Sequence
          key={`clic-${c}`}
          name="Clic"
          from={Math.round(((c - clip.desde) / clip.velocidad) * fps)}
          layout="none"
        >
          <Audio src={sonido("clic")} volume={0.55} />
        </Sequence>
      ))}
    </>
  );
};

const EscenaPaso: React.FC<{ readonly paso: Paso; readonly n: number }> = ({
  paso,
  n,
}) => {
  const { fps } = useVideoConfig();
  const fin = Math.round(duracionPaso(paso) * fps);
  return (
    <>
      <Backdrop />
      <StepHeader step={n} total={PASOS.length} title={paso.titulo} />
      <Series>
        {paso.clips.map((c, i) => (
          <Series.Sequence
            key={i}
            name={`Tramo ${i + 1}`}
            durationInFrames={Math.round(duracionClip(c) * fps)}
            layout="none"
          >
            <TramoReal clip={c} />
          </Series.Sequence>
        ))}
      </Series>
      {paso.subtitulos.map((s, i) => {
        const desde = Math.round(s.en * fps);
        const hasta =
          i + 1 < paso.subtitulos.length
            ? Math.round(paso.subtitulos[i + 1].en * fps)
            : fin;
        return (
          <Sequence
            key={i}
            name="Subtítulo"
            from={desde}
            durationInFrames={hasta - desde}
            layout="none"
          >
            <Caption text={s.texto} posicion={s.arriba ? "arriba" : "abajo"} />
            <Audio src={sonido("pop")} volume={0.35} />
          </Sequence>
        );
      })}
      <Sequence
        name={`Voz ${paso.voz}`}
        from={Math.round(VOZ_PASO * fps)}
        layout="none"
      >
        <Audio src={voz(paso.voz)} />
      </Sequence>
    </>
  );
};

// Qué es RADIAN: el titular a la izquierda y los cinco eventos a la derecha
const EscenaConcepto: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      <Backdrop />
      <div
        style={{
          position: "absolute",
          left: space.marginX,
          top: 0,
          bottom: 180,
          width: 680,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: space.s48,
        }}
      >
        <TwoToneTitle
          lead="Tus respuestas"
          rest="a la DIAN."
          size="sceneTitle"
          delay={4}
        />
        <FadeUp delay={14}>
          <Highlight text="en facturas a crédito" />
        </FadeUp>
      </div>
      <div
        style={{
          position: "absolute",
          right: space.marginX,
          top: 170,
          width: 800,
          display: "flex",
          flexDirection: "column",
          gap: space.s24,
        }}
      >
        {EVENTOS.map((e, i) => (
          <FadeUp key={e.codigo} delay={30 + i * 14}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: space.s24,
                padding: "24px 32px",
                borderRadius: radius.card,
                background: color.white,
                boxShadow: shadow.card,
                fontFamily: font.sans,
              }}
            >
              <span style={{ ...type.badge, color: color.accent }}>
                {e.codigo}
              </span>
              <span style={{ ...type.badge, fontWeight: 400, color: color.textTitle }}>
                {e.nombre}
              </span>
              {e.nota ? (
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 24,
                    color: color.textBody,
                  }}
                >
                  {e.nota}
                </span>
              ) : null}
            </div>
          </FadeUp>
        ))}
      </div>
      <Sequence
        name="Subtítulo"
        from={Math.round(5.6 * fps)}
        layout="none"
      >
        <Caption text="Soportan el *costo* y el *IVA descontable*" />
        <Audio src={sonido("pop")} volume={0.35} />
      </Sequence>
      <Sequence from={Math.round(VOZ_CONCEPTO * fps)} layout="none">
        <Audio src={voz("01-que-es")} />
      </Sequence>
    </>
  );
};

export const EventosRadian = () => {
  const { fps } = useVideoConfig();
  const fundido = (clave: string) => (
    <TransitionSeries.Transition
      key={clave}
      presentation={fade()}
      timing={linearTiming({ durationInFrames: motion.exit * fps })}
    />
  );

  return (
    <>
      <TransitionSeries>
        <TransitionSeries.Sequence
          name="Intro"
          durationInFrames={Math.round(INTRO * fps)}
        >
          <IntroScene
            name="Intro"
            titleLead="Eventos RADIAN"
            titleRest="en núvara."
            highlight="a mano o con reglas"
            statValue={0}
            statLabel=""
            statIcon="factura"
          />
          <Sequence from={Math.round(VOZ_INTRO * fps)} layout="none">
            <Audio src={voz("00-intro")} />
          </Sequence>
        </TransitionSeries.Sequence>
        {fundido("f-concepto")}
        <TransitionSeries.Sequence
          name="Qué es RADIAN"
          durationInFrames={Math.round(CONCEPTO * fps)}
        >
          <EscenaConcepto />
        </TransitionSeries.Sequence>
        {PASOS.flatMap((p, i) => [
          fundido(`f${i}`),
          <TransitionSeries.Sequence
            key={p.titulo}
            name={`Paso ${i + 1}`}
            durationInFrames={Math.round(duracionPaso(p) * fps)}
          >
            <EscenaPaso paso={p} n={i + 1} />
          </TransitionSeries.Sequence>,
        ])}
        {fundido("f-cierre")}
        <TransitionSeries.Sequence
          name="Cierre"
          durationInFrames={Math.round(CIERRE * fps)}
        >
          <OutroScene
            name="Cierre"
            primary="Habilitar mi cuenta"
            secondary="Agendar demostración en vivo"
            taglineLead="Tú mantienes"
            taglineRest="el control."
          />
          <Sequence from={Math.round(VOZ_CIERRE * fps)} layout="none">
            <Audio src={voz("07-cierre")} />
          </Sequence>
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <Audio src={sonido("musica")} loop volume={(f) => volumenMusica(f / fps)} />
      {[INICIO_CONCEPTO, ...INICIOS, INICIO_CIERRE].map((s) => (
        <Sequence
          key={`whoosh-${s}`}
          name="Whoosh"
          from={Math.max(0, Math.round((s - 0.2) * fps))}
          layout="none"
        >
          <Audio src={sonido("whoosh")} volume={0.4} />
        </Sequence>
      ))}
    </>
  );
};
