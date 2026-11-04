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
import { PantallaReal, type Toma } from "../components/PantallaReal";
import { StepHeader } from "../components/StepHeader";
import { IntroScene } from "../scenes/IntroScene";
import { OutroScene } from "../scenes/OutroScene";
import GRABACIONES from "./tesoreria-grabaciones.json";

// "Tesorería en núvara": el flujo completo en la empresa ficticia de la semilla local
// (Comercializadora Andina), con la voz de Eduardo (ElevenLabs). Nada es de un usuario real.
// Tiempos en segundos de cada grabación; cursor y clics salen de lo que se registró al grabar.
const voz = (n: string) => staticFile(`voz/tesoreria/${n}.wav`);
const sonido = (n: string) => staticFile(`sonido/${n}.wav`);
// Duración de cada línea de voz (acelerada 10 %), para bajar la música mientras se habla
const DURACION_VOZ: Record<string, number> = {
  "00-intro": 3.65,
  "01-cuentas": 9.03,
  "02-cobro": 8.45,
  "03-pago": 8.38,
  "04-programar": 5.39,
  "05-nomina": 6.63,
  "06-concilia": 10.7,
  "07-caja": 5.32,
  "08-comprobantes": 6.71,
  "09-cierre": 4.44,
};

type Escena = keyof typeof GRABACIONES;
type Clip = {
  readonly escena: Escena;
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
  readonly clips: Clip[];
  readonly voces: Linea[];
  readonly subtitulos: Subtitulo[];
};

const PASOS: Paso[] = [
  {
    titulo: "Crea tus cuentas",
    clips: [
      {
        escena: "s1",
        desde: 3.9,
        hasta: 8.9,
        velocidad: 1.1,
        camara: [
          { t: 3.9, x: 960, y: 540, zoom: 1 },
          { t: 5.0, x: 1000, y: 300, zoom: 1.4 },
        ],
      },
      {
        escena: "s1",
        desde: 8.9,
        hasta: 28.1,
        velocidad: 2,
        camara: [
          { t: 8.9, x: 1000, y: 300, zoom: 1.4 },
          { t: 10.2, x: 1650, y: 300, zoom: 1.6 },
          { t: 18.5, x: 1650, y: 360, zoom: 1.6 },
          { t: 20.2, x: 1650, y: 640, zoom: 1.6 },
          { t: 24.4, x: 1650, y: 900, zoom: 1.5 },
          { t: 25.9, x: 960, y: 540, zoom: 1 },
        ],
      },
      {
        escena: "s1",
        desde: 33.0,
        hasta: 41.8,
        velocidad: 1.5,
        camara: [
          { t: 33.0, x: 960, y: 540, zoom: 1 },
          { t: 40.0, x: 900, y: 420, zoom: 1.3 },
        ],
      },
    ],
    voces: [{ archivo: "01-cuentas", en: 0.3 }],
    subtitulos: [
      { texto: "*Cuánto tienes*, cuánto te deben y qué sale", en: 0.4, arriba: true },
      { texto: "Cuenta, *PUC* y saldo inicial", en: 4.8 },
    ],
  },
  {
    titulo: "Cobra y paga",
    clips: [
      {
        escena: "s2",
        desde: 5.1,
        hasta: 25.6,
        velocidad: 1.8,
        camara: [
          { t: 5.1, x: 960, y: 540, zoom: 1 },
          { t: 6.5, x: 1000, y: 330, zoom: 1.3 },
          { t: 9.6, x: 1450, y: 330, zoom: 1.5 },
          { t: 15.5, x: 1450, y: 420, zoom: 1.5 },
          { t: 18.5, x: 540, y: 300, zoom: 1.6 },
          { t: 21.0, x: 540, y: 300, zoom: 1.6 },
          { t: 22.2, x: 1500, y: 900, zoom: 1.4 },
        ],
      },
      {
        escena: "s2",
        desde: 27.0,
        hasta: 33.0,
        velocidad: 1.4,
        camara: [{ t: 27.0, x: 1000, y: 560, zoom: 1.2 }],
      },
      {
        escena: "s3",
        desde: 6.0,
        hasta: 26.9,
        velocidad: 1.8,
        camara: [
          { t: 6.0, x: 1000, y: 560, zoom: 1.2 },
          { t: 10.8, x: 1200, y: 800, zoom: 1.4 },
          { t: 13.5, x: 1450, y: 340, zoom: 1.5 },
          { t: 16.6, x: 1450, y: 420, zoom: 1.5 },
          { t: 19.6, x: 560, y: 300, zoom: 1.6 },
          { t: 22.4, x: 560, y: 300, zoom: 1.6 },
          { t: 23.4, x: 1500, y: 900, zoom: 1.4 },
        ],
      },
      {
        escena: "s4",
        desde: 6.0,
        hasta: 22.5,
        velocidad: 1.9,
        camara: [
          { t: 6.0, x: 1000, y: 620, zoom: 1.25 },
          { t: 9.0, x: 1000, y: 760, zoom: 1.3 },
          { t: 11.2, x: 1500, y: 500, zoom: 1.4 },
          { t: 14.0, x: 960, y: 540, zoom: 1 },
          { t: 18.5, x: 1100, y: 720, zoom: 1.4 },
        ],
      },
    ],
    voces: [
      { archivo: "02-cobro", en: 0.3 },
      { archivo: "03-pago", en: 16.0 },
      { archivo: "04-programar", en: 27.8 },
    ],
    subtitulos: [
      { texto: "*Comprobante de ingreso*, con abonos por antigüedad", en: 0.4 },
      { texto: "*Comprobante de egreso*: ves lo ya retenido y lo que falta", en: 16.0 },
      { texto: "*Programa el pago*: no mueve dinero hasta que se apruebe", en: 27.8 },
    ],
  },
  {
    titulo: "Paga la nómina",
    clips: [
      {
        escena: "s5",
        desde: 6.4,
        hasta: 46.3,
        velocidad: 2.5,
        camara: [
          { t: 6.4, x: 960, y: 540, zoom: 1 },
          { t: 9.8, x: 1000, y: 380, zoom: 1.3 },
          { t: 14.8, x: 1560, y: 460, zoom: 1.5 },
          { t: 28.0, x: 1560, y: 460, zoom: 1.5 },
          { t: 30.8, x: 900, y: 760, zoom: 1.3 },
          { t: 36.5, x: 900, y: 760, zoom: 1.3 },
          { t: 42.0, x: 800, y: 860, zoom: 1.5 },
        ],
      },
    ],
    voces: [{ archivo: "05-nomina", en: 0.3 }],
    subtitulos: [
      { texto: "Del *lote bancario* al archivo *PAB*", en: 0.4, arriba: true },
    ],
  },
  {
    titulo: "Concilia el banco",
    clips: [
      {
        escena: "s6",
        desde: 6.0,
        hasta: 22.6,
        velocidad: 1.9,
        camara: [
          { t: 6.0, x: 900, y: 620, zoom: 1.25 },
          { t: 8.0, x: 960, y: 500, zoom: 1.3 },
          { t: 12.0, x: 800, y: 640, zoom: 1.3 },
          { t: 17.5, x: 720, y: 780, zoom: 1.6 },
        ],
      },
      {
        escena: "s6b",
        desde: 7.2,
        hasta: 20.2,
        velocidad: 1.8,
        camara: [
          { t: 7.2, x: 720, y: 760, zoom: 1.5 },
          { t: 9.6, x: 800, y: 760, zoom: 1.7 },
        ],
      },
      {
        escena: "s6b",
        desde: 26.6,
        hasta: 30.5,
        velocidad: 1,
        camara: [
          { t: 26.6, x: 720, y: 760, zoom: 1.4 },
          { t: 28.6, x: 700, y: 260, zoom: 1.6 },
        ],
      },
    ],
    voces: [{ archivo: "06-concilia", en: 0.3 }],
    subtitulos: [
      { texto: "Confirma *lo seguro* y sugiere *el resto*", en: 0.4, arriba: true },
      { texto: "Lo que no tiene factura, *contra el PUC*", en: 8.8, arriba: true },
    ],
  },
  {
    titulo: "Controla cajas y comprobantes",
    clips: [
      {
        escena: "s7",
        desde: 3.8,
        hasta: 29.6,
        velocidad: 2.1,
        camara: [
          { t: 3.8, x: 960, y: 640, zoom: 1.2 },
          { t: 6.6, x: 1500, y: 720, zoom: 1.4 },
          { t: 9.6, x: 960, y: 540, zoom: 1.5 },
          { t: 14.6, x: 1200, y: 720, zoom: 1.3 },
          { t: 19.2, x: 960, y: 540, zoom: 1.5 },
          { t: 25.0, x: 1500, y: 720, zoom: 1.4 },
        ],
      },
      {
        escena: "s9",
        desde: 11.6,
        hasta: 19.2,
        velocidad: 1.4,
        camara: [
          { t: 11.6, x: 960, y: 560, zoom: 1.2 },
          { t: 13.6, x: 1560, y: 460, zoom: 1.5 },
        ],
      },
      {
        escena: "s8",
        desde: 28.8,
        hasta: 33.8,
        velocidad: 1.2,
        camara: [{ t: 28.8, x: 1000, y: 620, zoom: 1.25 }],
      },
    ],
    voces: [
      { archivo: "07-caja", en: 0.3 },
      { archivo: "08-comprobantes", en: 12.4 },
    ],
    subtitulos: [
      { texto: "*Fondeos*, *arqueos* y reposiciones", en: 0.4 },
      { texto: "A *tu programa contable*; si no está, *lo generamos*", en: 12.4 },
    ],
  },
];

const INTRO = 3.5;
const CIERRE = 5.5;
const VOZ_INTRO = 0.3;
const VOZ_CIERRE = 0.4;
const duracionClip = (c: Clip) => (c.hasta - c.desde) / c.velocidad;
const duracionPaso = (p: Paso) =>
  p.clips.reduce((s, c) => s + duracionClip(c), 0);
// Duración total en segundos: escenas menos los fundidos entre ellas
export const DURACION_TESORERIA =
  INTRO +
  PASOS.reduce((s, p) => s + duracionPaso(p), 0) +
  CIERRE -
  (PASOS.length + 1) * motion.exit;

// Dónde empieza cada escena en el video (los fundidos se solapan)
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
    INICIO_CIERRE + VOZ_CIERRE + DURACION_VOZ["09-cierre"],
  ],
];
const volumenMusica = (seg: number) => {
  const cerca = Math.min(
    ...CON_VOZ.map(([a, b]) => (seg < a ? a - seg : seg > b ? seg - b : 0)),
  );
  // Se apaga al final, aunque la pista siga
  const salida = interpolate(
    seg,
    [DURACION_TESORERIA - 1.8, DURACION_TESORERIA],
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
  const g = GRABACIONES[clip.escena];
  return (
    <>
      <PantallaReal
        recording={`recordings/tesoreria-${clip.escena}.mp4`}
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

export const FlujoTesoreria = () => {
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
            titleLead="Tu tesorería"
            titleRest="en núvara."
            highlight="el flujo completo"
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
            <Audio src={voz("09-cierre")} />
          </Sequence>
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <Audio src={sonido("musica")} loop volume={(f) => volumenMusica(f / fps)} />
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
