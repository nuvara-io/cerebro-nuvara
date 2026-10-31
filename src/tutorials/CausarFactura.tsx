import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { useVideoConfig } from "remotion";
import { motion } from "../brand/tokens";
import { IntroScene } from "../scenes/IntroScene";
import { OutroScene } from "../scenes/OutroScene";
import { StepScene } from "../scenes/StepScene";

// Tutorial "Causa tu primera factura", guion tomado del tour de onboarding
// (NUVARA/apps/web/src/features/trial-onboarding/tours/causar.ts).
// Duración total: 7 + 8 × 3 + 6 s menos 4 transiciones de motion.exit.
export const CausarFactura = () => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence name="Intro" durationInFrames={7 * fps}>
        <IntroScene
          name="Intro"
          titleLead="Causa tu"
          titleRest="primera factura."
          highlight="en 3 pasos"
          statValue={20}
          statLabel="facturas gratis para causar"
          statIcon="factura"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: motion.exit * fps })}
      />
      <TransitionSeries.Sequence name="Paso 1" durationInFrames={8 * fps}>
        <StepScene
          name="Paso 1"
          step={1}
          total={3}
          title="Trae tus facturas"
          recording=""
          caption="En *Acciones*, importa el XML o ZIP de la *DIAN*"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: motion.exit * fps })}
      />
      <TransitionSeries.Sequence name="Paso 2" durationInFrames={8 * fps}>
        <StepScene
          name="Paso 2"
          step={2}
          total={3}
          title="Filtra por estado"
          recording=""
          caption="Elige *Pendientes* para ver lo que aún no has causado"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: motion.exit * fps })}
      />
      <TransitionSeries.Sequence name="Paso 3" durationInFrames={8 * fps}>
        <StepScene
          name="Paso 3"
          step={3}
          total={3}
          title="Revisa y aprueba"
          recording=""
          caption="Revisa el *asiento contable* antes de *aprobar*"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: motion.exit * fps })}
      />
      <TransitionSeries.Sequence name="Cierre" durationInFrames={6 * fps}>
        <OutroScene
          name="Cierre"
          primary="Habilitar mi cuenta"
          secondary="Agendar demostración en vivo"
          taglineLead="Causa en horas"
          taglineRest="lo que te tomaba días."
        />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
