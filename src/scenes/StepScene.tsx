import { Video } from "@remotion/media";
import { Interactive, Sequence, staticFile } from "remotion";
import { Backdrop } from "../components/Backdrop";
import { Caption } from "../components/Caption";
import { ScreenFrame } from "../components/ScreenFrame";
import { ScreenPlaceholder } from "../components/ScreenPlaceholder";
import { StepHeader } from "../components/StepHeader";

type Props = {
  readonly step: number;
  readonly total: number;
  readonly title: string;
  // Ruta dentro de public/ de la grabación de la plataforma. Vacío = vista ilustrativa.
  readonly recording: string;
  // Palabras clave entre asteriscos van en Bold azul
  readonly caption: string;
};

const StepSceneInner = ({ step, total, title, recording, caption }: Props) => (
  <>
    <Backdrop />
    <StepHeader step={step} total={total} title={title} />
    <ScreenFrame>
      {recording ? (
        <Video
          src={staticFile(recording)}
          muted
          objectFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <ScreenPlaceholder />
      )}
    </ScreenFrame>
    {caption ? (
      <Sequence name="Subtítulo" from={20} layout="none">
        <Caption text={caption} />
      </Sequence>
    ) : null}
  </>
);

export const StepScene = Interactive.create({
  Component: StepSceneInner,
  layout: "absolute-fill",
  schema: {
    step: {
      type: "number",
      default: 1,
      min: 1,
      integer: true,
      keyframable: false,
      hiddenFromList: false,
      description: "Número de paso",
    },
    total: {
      type: "number",
      default: 3,
      min: 1,
      max: 5,
      integer: true,
      keyframable: false,
      hiddenFromList: false,
      description: "Total de pasos (máx. 5)",
    },
    title: { type: "string", default: "", description: "Título del paso" },
    recording: { type: "string", default: "", description: "Grabación en public/" },
    caption: { type: "string", default: "", description: "Subtítulo" },
  },
});
