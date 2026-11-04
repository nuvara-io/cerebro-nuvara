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
import { motion } from "../brand/tokens";
import { Backdrop } from "../components/Backdrop";
import { Caption } from "../components/Caption";
import {
  PantallaReal,
  type Punto,
  type Toma,
} from "../components/PantallaReal";
import { StepHeader } from "../components/StepHeader";
import { IntroScene } from "../scenes/IntroScene";
import { OutroScene } from "../scenes/OutroScene";

// "Así causas en núvara": el flujo real de la plataforma (cuenta de prueba local,
// anonimizada al grabar) con zoom de cámara, cursor y la voz de Eduardo (ElevenLabs).
// Acompaña al brochure de propuesta comercial. Tiempos en segundos de cada grabación.
const voz = (n: string) => staticFile(`voz/flujo/${n}.wav`);
// Música y efectos sintetizados para este video (scratchpad sintetizar.py)
const sonido = (n: string) => staticFile(`sonido/${n}.wav`);
// Duración de cada línea de voz (Eduardo, ElevenLabs, acelerada 10 %), para bajar la música mientras se habla
const DURACION_VOZ: Record<string, number> = {
  "00-intro": 2.12,
  "01-pendientes": 5.82,
  "03-asiento": 7.13,
  "04-proveedor": 6.05,
  "07-cierre": 2.92,
  "08-lote": 10.19,
  "09-grupo": 3.36,
  "10-plano": 10.33,
  "11-agrupada": 6.13,
};

type Grabacion = {
  readonly src: string;
  readonly cursor: Punto[];
  readonly clics: number[];
};

// Tres grabaciones de la cuenta de prueba (scratchpad grab/video, grab/extra y grab/extra2).
// Ninguna causa, aprueba, guarda ni exporta: solo abren, seleccionan y pasan el mouse.
export const GRABACIONES: Record<"flujo" | "extra" | "agrupada", Grabacion> = {
  // Bandeja, detalle de la factura, proveedor y Aprobar
  flujo: {
    src: "recordings/causacion-flujo.mp4",
    cursor: [
      { t: 5.6, x: 960, y: 540 },
      { t: 6.6, x: 700, y: 260 },
      { t: 7.8, x: 428, y: 370 },
      { t: 12.3, x: 900, y: 700 },
      { t: 14.4, x: 551, y: 370 },
      { t: 18.8, x: 1820, y: 753 },
      { t: 26.7, x: 1250, y: 298 },
      { t: 28.2, x: 1250, y: 362 },
      { t: 29.8, x: 1250, y: 426 },
      { t: 31.3, x: 1250, y: 490 },
      { t: 32.8, x: 1600, y: 541 },
      { t: 35.1, x: 1358, y: 678 },
      { t: 37.4, x: 1093, y: 119 },
      { t: 41.9, x: 1100, y: 800 },
      { t: 43.5, x: 989, y: 119 },
      { t: 46.9, x: 1867, y: 1048 },
      { t: 50.3, x: 1770, y: 1048 },
    ],
    clics: [8.12, 14.74, 19.17, 37.79, 43.85],
  },
  // Vista agrupada: Pre-causadas de abril, agrupadas por causación idéntica
  agrupada: {
    src: "recordings/causacion-agrupada.mp4",
    cursor: [
      { t: 9.18, x: 960, y: 540 },
      { t: 9.7, x: 1234, y: 456 },
      { t: 11.48, x: 1343, y: 608 },
      { t: 14.98, x: 776, y: 456 },
      { t: 19.43, x: 1087, y: 542 },
      { t: 21.7, x: 406, y: 596 },
      { t: 23.86, x: 800, y: 660 },
      { t: 25.98, x: 1811, y: 681 },
    ],
    clics: [10.05, 11.83, 15.33],
  },
  // Causar por lote, causación automática, selección en grupo y asistente de exportación
  extra: {
    src: "recordings/causacion-extra.mp4",
    cursor: [
      { t: 5.65, x: 960, y: 540 },
      { t: 6.17, x: 1827, y: 370 },
      { t: 8.56, x: 1739, y: 865 },
      { t: 11.8, x: 1528, y: 387 },
      { t: 12.6, x: 1640, y: 451 },
      { t: 13.4, x: 1751, y: 515 },
      { t: 14.2, x: 1862, y: 579 },
      { t: 15.2, x: 1831, y: 1044 },
      { t: 18.36, x: 1697, y: 1044 },
      { t: 20.83, x: 1739, y: 801 },
      { t: 24.26, x: 1876, y: 155 },
      { t: 27.32, x: 1744, y: 1044 },
      { t: 30.28, x: 551, y: 370 },
      { t: 34.73, x: 317, y: 559 },
      { t: 36.13, x: 317, y: 607 },
      { t: 37.51, x: 317, y: 655 },
      { t: 38.9, x: 317, y: 703 },
      { t: 41.08, x: 949, y: 1023 },
      { t: 50.28, x: 518, y: 556 },
      { t: 51.83, x: 518, y: 909 },
      { t: 53.38, x: 518, y: 743 },
      { t: 54.93, x: 1298, y: 909 },
      { t: 58.35, x: 1710, y: 602 },
    ],
    clics: [
      6.52, 8.92, 18.72, 21.18, 24.61, 27.66, 30.63, 35.08, 36.48, 37.87, 39.25,
      55.28,
    ],
  },
};

type Clip = {
  readonly grabacion: keyof typeof GRABACIONES;
  readonly desde: number;
  readonly hasta: number;
  // La grabación corre más rápido que en vivo para que el video no se sienta lento
  readonly velocidad: number;
  readonly camara: Toma[];
};
type Linea = { readonly archivo: string; readonly en: number };
type Subtitulo = {
  readonly texto: string;
  readonly en: number;
  readonly arriba?: boolean;
};
type Paso = {
  readonly titulo: string;
  // Uno o más tramos de grabación seguidos bajo el mismo título
  readonly clips: Clip[];
  readonly voces: Linea[];
  readonly subtitulos: Subtitulo[];
};

const PASOS: Paso[] = [
  {
    titulo: "Trae tus facturas",
    clips: [
      {
        grabacion: "flujo",
        desde: 5.6,
        hasta: 14.5,
        velocidad: 1.35,
        camara: [
          { t: 5.6, x: 960, y: 540, zoom: 1 },
          { t: 7.4, x: 760, y: 300, zoom: 1.6 },
          { t: 9.4, x: 760, y: 300, zoom: 1.6 },
          { t: 11.2, x: 900, y: 620, zoom: 1.3 },
        ],
      },
    ],
    voces: [{ archivo: "01-pendientes", en: 0.3 }],
    subtitulos: [
      { texto: "Tus facturas llegan solas: revisa las *Pendientes*", en: 0.4 },
    ],
  },
  {
    titulo: "Causa en lote o en automático",
    clips: [
      {
        grabacion: "extra",
        desde: 6.0,
        hasta: 19.0,
        velocidad: 2,
        camara: [
          { t: 6.0, x: 1500, y: 500, zoom: 1.2 },
          { t: 7.4, x: 1640, y: 620, zoom: 1.5 },
          { t: 10.4, x: 1640, y: 450, zoom: 1.6 },
          { t: 15.2, x: 1700, y: 880, zoom: 1.8 },
        ],
      },
      {
        grabacion: "extra",
        desde: 20.5,
        hasta: 29.0,
        velocidad: 1.3,
        camara: [
          { t: 20.5, x: 1640, y: 620, zoom: 1.5 },
          { t: 22.6, x: 1690, y: 200, zoom: 2 },
          { t: 26.6, x: 1690, y: 200, zoom: 2 },
          { t: 27.6, x: 1700, y: 880, zoom: 1.7 },
        ],
      },
    ],
    voces: [{ archivo: "08-lote", en: 0.3 }],
    subtitulos: [
      { texto: "Causa *en lote* por rango de fechas", en: 0.4 },
      { texto: "O activa la *causación automática*", en: 6.5 },
    ],
  },
  {
    titulo: "Revisa el asiento",
    clips: [
      {
        grabacion: "flujo",
        desde: 17.0,
        hasta: 19.7,
        velocidad: 1.5,
        camara: [
          { t: 17.0, x: 1000, y: 620, zoom: 1.3 },
          { t: 18.8, x: 1560, y: 720, zoom: 1.8 },
        ],
      },
      {
        grabacion: "flujo",
        desde: 25.8,
        hasta: 46.5,
        velocidad: 1.5,
        camara: [
          { t: 25.8, x: 960, y: 540, zoom: 1 },
          { t: 27.0, x: 1240, y: 400, zoom: 1.75 },
          { t: 31.4, x: 1240, y: 420, zoom: 1.75 },
          { t: 33.0, x: 1440, y: 560, zoom: 2 },
          { t: 35.3, x: 1360, y: 640, zoom: 1.8 },
          { t: 37.2, x: 1150, y: 260, zoom: 1.5 },
          { t: 39.0, x: 1250, y: 430, zoom: 1.3 },
          { t: 43.0, x: 1250, y: 430, zoom: 1.3 },
          { t: 44.4, x: 1300, y: 420, zoom: 1.6 },
        ],
      },
    ],
    voces: [
      { archivo: "03-asiento", en: 0.3 },
      { archivo: "04-proveedor", en: 8.2 },
    ],
    subtitulos: [
      {
        texto: "PUC, IVA y retenciones: el *asiento* llega *cuadrado*",
        en: 0.4,
      },
      { texto: "Revisa el *neto* y los datos del *proveedor*", en: 8.2 },
    ],
  },
  {
    titulo: "Aprueba en grupo",
    clips: [
      {
        grabacion: "flujo",
        desde: 46.0,
        hasta: 49.5,
        velocidad: 1.7,
        camara: [{ t: 46.0, x: 1720, y: 1000, zoom: 2.3 }],
      },
      {
        grabacion: "extra",
        desde: 34.0,
        hasta: 43.9,
        velocidad: 1.9,
        camara: [
          { t: 34.0, x: 700, y: 620, zoom: 1.4 },
          { t: 39.4, x: 700, y: 640, zoom: 1.4 },
          { t: 41.2, x: 960, y: 940, zoom: 1.8 },
        ],
      },
      {
        grabacion: "agrupada",
        desde: 14.5,
        hasta: 28.9,
        velocidad: 1.3,
        camara: [
          { t: 14.5, x: 800, y: 480, zoom: 1.5 },
          { t: 15.4, x: 800, y: 480, zoom: 1.5 },
          { t: 17.0, x: 960, y: 560, zoom: 1.1 },
          { t: 19.6, x: 1000, y: 540, zoom: 1.5 },
          { t: 22.0, x: 760, y: 640, zoom: 1.6 },
          { t: 24.2, x: 900, y: 680, zoom: 1.5 },
          { t: 26.2, x: 1640, y: 680, zoom: 1.9 },
        ],
      },
    ],
    voces: [
      { archivo: "09-grupo", en: 0.3 },
      { archivo: "11-agrupada", en: 7.5 },
    ],
    subtitulos: [
      { texto: "Apruebas *una por una* o *en grupo*", en: 0.4, arriba: true },
      {
        texto: "*Vista agrupada*: revisas una vez y apruebas el grupo",
        en: 7.4,
      },
    ],
  },
  {
    titulo: "Exporta a tu programa",
    clips: [
      {
        grabacion: "extra",
        desde: 49.0,
        hasta: 61.2,
        velocidad: 1.1,
        camara: [
          { t: 49.0, x: 960, y: 540, zoom: 1 },
          { t: 50.6, x: 820, y: 680, zoom: 1.35 },
          { t: 55.2, x: 1100, y: 800, zoom: 1.5 },
          { t: 58.6, x: 1700, y: 500, zoom: 1.7 },
        ],
      },
    ],
    voces: [{ archivo: "10-plano", en: 0.3 }],
    subtitulos: [
      { texto: "Siigo, World Office, Alegra, Helisa, Contai…", en: 0.4 },
      {
        texto:
          "¿Otro programa? *Archivo plano*, y si no existe, *lo armamos contigo*",
        en: 5.8,
      },
    ],
  },
];

const INTRO = 3.5;
const CIERRE = 5;
const VOZ_INTRO = 0.3;
const VOZ_CIERRE = 0.4;
const duracionClip = (c: Clip) => (c.hasta - c.desde) / c.velocidad;
const duracionPaso = (p: Paso) =>
  p.clips.reduce((s, c) => s + duracionClip(c), 0);
// Duración total en segundos: escenas menos los fundidos entre ellas
export const DURACION_FLUJO =
  INTRO +
  PASOS.reduce((s, p) => s + duracionPaso(p), 0) +
  CIERRE -
  (PASOS.length + 1) * motion.exit;

// Dónde empieza cada paso y el cierre en el video (los fundidos se solapan)
const INICIOS = PASOS.reduce<number[]>(
  (acc, p, i) => [
    ...acc,
    acc[i] + (i === 0 ? INTRO : duracionPaso(PASOS[i - 1])) - motion.exit,
  ],
  [0],
).slice(1);
const INICIO_CIERRE =
  INICIOS[INICIOS.length - 1] +
  duracionPaso(PASOS[PASOS.length - 1]) -
  motion.exit;
// Tramos con voz: la música baja para que se entienda
const CON_VOZ: [number, number][] = [
  [VOZ_INTRO, VOZ_INTRO + DURACION_VOZ["00-intro"]],
  ...PASOS.flatMap((p, i) =>
    p.voces.map((v): [number, number] => [
      INICIOS[i] + v.en,
      INICIOS[i] + v.en + DURACION_VOZ[v.archivo],
    ]),
  ),
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
    [DURACION_FLUJO - 1.8, DURACION_FLUJO],
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
  const g = GRABACIONES[clip.grabacion];
  return (
    <>
      <PantallaReal
        recording={g.src}
        desde={clip.desde}
        hasta={clip.hasta}
        velocidad={clip.velocidad}
        camara={clip.camara}
        cursor={g.cursor}
        clics={g.clics}
      />
      {g.clics
        .filter((c) => c >= clip.desde && c < clip.hasta)
        .map((c) => (
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
      {paso.voces.map((v) => (
        <Sequence
          key={v.archivo}
          name={`Voz ${v.archivo}`}
          from={Math.round(v.en * fps)}
          layout="none"
        >
          <Audio src={voz(v.archivo)} />
        </Sequence>
      ))}
    </>
  );
};

export const FlujoCausacion = () => {
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
            titleLead="Así causas"
            titleRest="en núvara."
            highlight="el flujo real"
            statValue={0}
            statLabel=""
            statIcon="factura"
          />
          <Sequence from={Math.round(VOZ_INTRO * fps)} layout="none">
            <Audio src={voz("00-intro")} />
          </Sequence>
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
      <Audio src={sonido("musica")} volume={(f) => volumenMusica(f / fps)} />
      {[...INICIOS, INICIO_CIERRE].map((s) => (
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
