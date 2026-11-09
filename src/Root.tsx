import { Composition, Folder, Still } from "remotion";
import { DIAPOSITIVAS } from "./brochure/Diapositivas";
import { DIAPOSITIVAS_FE } from "./brochure/FacturacionElectronica";
import { DIAPOSITIVAS_NOMINA } from "./brochure/Nomina";
import { DIAPOSITIVAS_TESORERIA } from "./brochure/Tesoreria";
import { AppDisponible, AppProximamente } from "./posts/modulos/AppMovil";
import { CausacionAprobar } from "./posts/modulos/CausacionAprobar";
import { DianPlaca1, DianPlaca2, DianPlaca3, DianPlaca4, DianPlaca5, PagasLoQueCausas, VariosProgramas } from "./posts/modulos/CierreIva";
import { FacturacionElectronica } from "./posts/modulos/FacturacionElectronica";
import { MasQueCausacion } from "./posts/modulos/MasQueCausacion";
import { NominaCompleta } from "./posts/modulos/NominaCompleta";
import { PonteAlDia } from "./posts/modulos/PonteAlDia";
import { HistoriaPonteHasta30, HistoriaVenceIva } from "./posts/modulos/Semana";
import { TesoreriaConciliada } from "./posts/modulos/TesoreriaConciliada";
import { BlogCompararDian } from "./posts/BlogCompararDian";
import { PortadaCausaciones } from "./posts/PortadaCausaciones";
import { Post500Causaciones } from "./posts/Post500Causaciones";
import { QueEsNuvara } from "./posts/QueEsNuvara";
import { IntroScene } from "./scenes/IntroScene";
import { OutroScene } from "./scenes/OutroScene";
import { StepScene } from "./scenes/StepScene";
import { CausarFactura } from "./tutorials/CausarFactura";
import { DURACION_RADIAN, EventosRadian } from "./tutorials/EventosRadian";
import { DURACION_FLUJO, FlujoCausacion } from "./tutorials/FlujoCausacion";
import { DURACION_TESORERIA, FlujoTesoreria } from "./tutorials/FlujoTesoreria";
import { DURACION_PONTE_AL_DIA, PonteAlDiaVideo } from "./tutorials/PonteAlDia";
import { DURACION_REEL_CREDITOS, ReelCreditos } from "./tutorials/ReelCreditos";
import { DURACION_REEL_APP, DURACION_REEL_APP_PROXIMAMENTE, DURACION_REEL_CAUSACION, DURACION_REEL_CIERRE_IVA, DURACION_REEL_RADIAN, ReelApp, ReelAppProximamente, ReelCausacion, ReelCierreIva, ReelRadian } from "./tutorials/Reels";

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
        <Composition
          id="FlujoCausacion"
          component={FlujoCausacion}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={Math.round(DURACION_FLUJO * 30)}
        />
        <Composition
          id="EventosRadian"
          component={EventosRadian}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={Math.round(DURACION_RADIAN * 30)}
        />
        <Composition
          id="FlujoTesoreria"
          component={FlujoTesoreria}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={Math.round(DURACION_TESORERIA * 30)}
        />
      </Folder>
      <Folder name="Reels">
        <Composition id="ReelCausacion" component={ReelCausacion} width={1080} height={1920} fps={30} durationInFrames={Math.round(DURACION_REEL_CAUSACION * 30)} />
        <Composition id="ReelCierreIva" component={ReelCierreIva} width={1080} height={1920} fps={30} durationInFrames={Math.round(DURACION_REEL_CIERRE_IVA * 30)} />
        <Composition id="ReelRadian" component={ReelRadian} width={1080} height={1920} fps={30} durationInFrames={Math.round(DURACION_REEL_RADIAN * 30)} />
        <Composition id="ReelAppProximamente" component={ReelAppProximamente} width={1080} height={1920} fps={30} durationInFrames={Math.round(DURACION_REEL_APP_PROXIMAMENTE * 30)} />
        <Composition id="ReelPonteAlDia" component={PonteAlDiaVideo} width={1080} height={1920} fps={30} durationInFrames={Math.round(DURACION_PONTE_AL_DIA * 30)} />
        <Composition id="VideoPonteAlDia" component={PonteAlDiaVideo} width={1920} height={1080} fps={30} durationInFrames={Math.round(DURACION_PONTE_AL_DIA * 30)} />
        <Composition id="ReelCreditos" component={ReelCreditos} width={1080} height={1920} fps={30} durationInFrames={DURACION_REEL_CREDITOS} />
        <Composition id="ReelApp" component={ReelApp} width={1080} height={1920} fps={30} durationInFrames={Math.round(DURACION_REEL_APP * 30)} />
      </Folder>
      <Folder name="Redes">
        <Still id="Post500Causaciones" component={Post500Causaciones} width={1080} height={1350} />
        <Still id="PortadaCausaciones" component={PortadaCausaciones} width={1080} height={1350} />
        {/* Portadas del artículo s01 del blog: hero, miniatura y para compartir */}
        <Still id="Blog-CompararDian-Hero" component={BlogCompararDian} width={1536} height={864} />
        <Still id="Blog-CompararDian-Card" component={BlogCompararDian} width={920} height={517} />
        <Still id="Blog-CompararDian-OG" component={BlogCompararDian} width={1200} height={630} />
        <Still id="QueEsNuvara" component={QueEsNuvara} width={1080} height={1350} />
        <Still id="N2-Dian1" component={DianPlaca1} width={1080} height={1350} />
        <Still id="N2-Dian2" component={DianPlaca2} width={1080} height={1350} />
        <Still id="N2-Dian3" component={DianPlaca3} width={1080} height={1350} />
        <Still id="N2-Dian4" component={DianPlaca4} width={1080} height={1350} />
        <Still id="N2-Dian5" component={DianPlaca5} width={1080} height={1350} />
        <Still id="N4-VariosProgramas" component={VariosProgramas} width={1080} height={1350} />
        <Still id="N5-PagasLoQueCausas" component={PagasLoQueCausas} width={1080} height={1350} />
        <Still id="PonteAlDia" component={PonteAlDia} width={1080} height={1350} />
        <Still id="PonteAlDia-Historia" component={PonteAlDia} width={1080} height={1920} />
        <Still id="H6-VenceIva" component={HistoriaVenceIva} width={1080} height={1920} />
        <Still id="H7-PonteHasta30" component={HistoriaPonteHasta30} width={1080} height={1920} />
      </Folder>
      <Folder name="Campana-modulos">
        <Still id="M0-MasQueCausacion" component={MasQueCausacion} width={1080} height={1350} />
        <Still id="M1-Causacion" component={CausacionAprobar} width={1080} height={1350} />
        <Still id="M2-FacturacionElectronica" component={FacturacionElectronica} width={1080} height={1350} />
        <Still id="M3-Nomina" component={NominaCompleta} width={1080} height={1350} />
        <Still id="M4-Tesoreria" component={TesoreriaConciliada} width={1080} height={1350} />
        <Still id="M5-AppProximamente" component={AppProximamente} width={1080} height={1350} />
        <Still id="M5-AppDisponible" component={AppDisponible} width={1080} height={1350} />
        <Still id="H5-AppProximamente" component={AppProximamente} width={1080} height={1920} />
        <Still id="H5-AppDisponible" component={AppDisponible} width={1080} height={1920} />
        <Still id="H0-MasQueCausacion" component={MasQueCausacion} width={1080} height={1920} />
        <Still id="H1-Causacion" component={CausacionAprobar} width={1080} height={1920} />
        <Still id="H2-FacturacionElectronica" component={FacturacionElectronica} width={1080} height={1920} />
        <Still id="H3-Nomina" component={NominaCompleta} width={1080} height={1920} />
        <Still id="H4-Tesoreria" component={TesoreriaConciliada} width={1080} height={1920} />
      </Folder>
      <Folder name="Brochure">
        {DIAPOSITIVAS.map((D, i) => (
          <Still key={i} id={`Brochure-${String(i + 1).padStart(2, "0")}`} component={D} width={1920} height={1080} />
        ))}
      </Folder>
      <Folder name="Brochure-facturacion">
        {DIAPOSITIVAS_FE.map((D, i) => (
          <Still key={i} id={`BrochureFE-${String(i + 1).padStart(2, "0")}`} component={D} width={1920} height={1080} />
        ))}
      </Folder>
      <Folder name="Brochure-tesoreria">
        {DIAPOSITIVAS_TESORERIA.map((D, i) => (
          <Still key={i} id={`BrochureTesoreria-${String(i + 1).padStart(2, "0")}`} component={D} width={1920} height={1080} />
        ))}
      </Folder>
      <Folder name="Brochure-nomina">
        {DIAPOSITIVAS_NOMINA.map((D, i) => (
          <Still key={i} id={`BrochureNomina-${String(i + 1).padStart(2, "0")}`} component={D} width={1920} height={1080} />
        ))}
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
