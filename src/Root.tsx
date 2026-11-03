import { Composition, Folder, Still } from "remotion";
import { CausacionAprobar } from "./posts/modulos/CausacionAprobar";
import { FacturacionElectronica } from "./posts/modulos/FacturacionElectronica";
import { MasQueCausacion } from "./posts/modulos/MasQueCausacion";
import { NominaCompleta } from "./posts/modulos/NominaCompleta";
import { TesoreriaConciliada } from "./posts/modulos/TesoreriaConciliada";
import { PortadaCausaciones } from "./posts/PortadaCausaciones";
import { Post500Causaciones } from "./posts/Post500Causaciones";
import { QueEsNuvara } from "./posts/QueEsNuvara";
import { IntroScene } from "./scenes/IntroScene";
import { OutroScene } from "./scenes/OutroScene";
import { StepScene } from "./scenes/StepScene";
import { CausarFactura } from "./tutorials/CausarFactura";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Tutoriales">
        <Composition
          id="CausarFactura"
          component={CausarFactura}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={1074}
        />
      </Folder>
      <Folder name="Redes">
        <Still id="Post500Causaciones" component={Post500Causaciones} width={1080} height={1350} />
        <Still id="PortadaCausaciones" component={PortadaCausaciones} width={1080} height={1350} />
        <Still id="QueEsNuvara" component={QueEsNuvara} width={1080} height={1350} />
      </Folder>
      <Folder name="Campana-modulos">
        <Still id="M0-MasQueCausacion" component={MasQueCausacion} width={1080} height={1350} />
        <Still id="M1-Causacion" component={CausacionAprobar} width={1080} height={1350} />
        <Still id="M2-FacturacionElectronica" component={FacturacionElectronica} width={1080} height={1350} />
        <Still id="M3-Nomina" component={NominaCompleta} width={1080} height={1350} />
        <Still id="M4-Tesoreria" component={TesoreriaConciliada} width={1080} height={1350} />
        <Still id="H0-MasQueCausacion" component={MasQueCausacion} width={1080} height={1920} />
        <Still id="H1-Causacion" component={CausacionAprobar} width={1080} height={1920} />
        <Still id="H2-FacturacionElectronica" component={FacturacionElectronica} width={1080} height={1920} />
        <Still id="H3-Nomina" component={NominaCompleta} width={1080} height={1920} />
        <Still id="H4-Tesoreria" component={TesoreriaConciliada} width={1080} height={1920} />
      </Folder>
      <Folder name="Escenas">
        <Composition
          id="Intro"
          component={IntroScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={210}
          defaultProps={{
            titleLead: "Tu prueba",
            titleRest: "gratis.",
            highlight: "",
            statValue: 20,
            statLabel: "facturas gratis para causar",
            statIcon: "factura",
          }}
        />
        <Composition
          id="Paso"
          component={StepScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={240}
          defaultProps={{
            step: 2,
            total: 3,
            title: "Revisa la causación",
            recording: "",
            caption: "Revisa el *asiento contable* antes de *aprobar*",
          }}
        />
        <Composition
          id="Cierre"
          component={OutroScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={180}
          defaultProps={{
            primary: "Habilitar mi cuenta",
            secondary: "Agendar demostración en vivo",
            taglineLead: "Causa en horas",
            taglineRest: "lo que te tomaba días.",
          }}
        />
      </Folder>
    </>
  );
};
