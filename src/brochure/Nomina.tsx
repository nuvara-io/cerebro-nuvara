import { BarChart3, Banknote, BookOpenCheck, Calculator, CalendarClock, FileCheck2, Landmark, MessageCircle, Network, Rocket, Send, ShieldCheck, Users } from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius } from "../brand/tokens";
import { Emphasis } from "../components/Emphasis";
import { Circulo, Dividida as DivididaBase, Inicio, MX, PanelReal, Pill, Slide, t, Tarjeta, Titular } from "./kit";
import { PanelAsiento, PanelCosto, PanelNovedades, PanelObligaciones, PanelPago } from "./PanelesNomina";

// Brochure comercial de nómina (13 diapositivas 1920×1080 → PDF). Copy desde
// red/nomina.md, sus neuronas y red/precios.md, y lo que tiene la plataforma en
// apps/web/.../payroll (verificado el 09/11/2026: estructura, historia laboral,
// incremento salarial, pactos no salariales, recargos, costo e informes).
// Resumen, empleados, generar y liquidación son capturas reales anonimizadas;
// novedades, obligaciones, pago, asiento y costo son ilustrativos.

const TOTAL_NOMINA = 13;
const icono = { size: 34, color: color.white, strokeWidth: 2.1 } as const;
const Dividida: React.FC<Omit<React.ComponentProps<typeof DivididaBase>, "total">> = (props) => <DivididaBase total={TOTAL_NOMINA} {...props} />;

// 01 · Portada
export const PortadaNomina: React.FC = () => (
  <AbsoluteFill style={{ background: color.accentDeep, overflow: "hidden" }}>
    <Img src={staticFile("posts/banco-45.jpg")} style={{ position: "absolute", top: 0, right: 0, width: 1240, height: "100%", objectFit: "cover", objectPosition: "100% 50%" }} />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(90deg, ${color.accentDeep} 0%, ${color.accent} 38%, ${color.accent}d9 45%, ${color.accent}40 56%, ${color.accent}00 66%)`,
      }}
    />
    <Img src={logo.wordmarkWhite} style={{ position: "absolute", left: MX, top: 72, width: 170 }} />
    <div style={{ position: "absolute", left: MX, top: 300, width: 860, display: "grid", gap: 36 }}>
      <Pill blanco>PROPUESTA COMERCIAL</Pill>
      <div>
        <p style={t(76, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Tu nómina completa,</p>
        <p style={t(104, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>de la novedad</p>
        <p style={t(104, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>al asiento.</p>
      </div>
      <p style={t(34, { color: color.white, maxWidth: 760 })}>
        Liquida, emite a la DIAN, genera la PILA y deja la causación lista.{" "}
        <strong style={{ fontWeight: 700 }}>Tú revisas y apruebas.</strong>
      </p>
    </div>
    <p style={t(24, { position: "absolute", left: MX, bottom: 64, fontWeight: 700, color: color.white, letterSpacing: "0.02em" })}>nuvara.com.co</p>
  </AbsoluteFill>
);

const Parte: React.FC<{ readonly icon: React.ReactNode; readonly titulo: string; readonly texto: string }> = ({ icon, titulo, texto }) => (
  <Tarjeta style={{ display: "grid", gap: 12, alignContent: "start", padding: 26 }}>
    <Circulo size={54}>{icon}</Circulo>
    <p style={t(26, { fontWeight: 700, color: color.textTitle, lineHeight: 1.15 })}>{titulo}</p>
    <p style={t(21)}>
      <Emphasis text={texto} />
    </p>
  </Tarjeta>
);

const chico = { ...icono, size: 28 } as const;

// 02 · Qué incluye
export const QueIncluye: React.FC = () => (
  <Slide n={2} total={TOTAL_NOMINA}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 170, display: "grid", gap: 40 }}>
      <div style={{ display: "grid", gap: 20 }}>
        <Pill>QUÉ INCLUYE</Pill>
        <Titular azul="Todo el ciclo de la nómina," gris="en un solo lugar." size={60} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
        <Parte icon={<Users {...chico} />} titulo="Personal" texto="Empleados, contratos, *historia laboral* e incrementos salariales." />
        <Parte icon={<Network {...chico} />} titulo="Estructura" texto="*Áreas, cargos y sedes* de trabajo, con sus asignaciones." />
        <Parte icon={<CalendarClock {...chico} />} titulo="Novedades" texto="Incapacidades, vacaciones, *recargos*, préstamos y embargos." />
        <Parte icon={<Calculator {...chico} />} titulo="Liquidación" texto="Quincenal o mensual, con *retención en la fuente* incluida." />
        <Parte icon={<BookOpenCheck {...chico} />} titulo="Prestaciones y retiros" texto="Prima, cesantías, intereses y *liquidación de contratos*." />
        <Parte icon={<FileCheck2 {...chico} />} titulo="DIAN y PILA" texto="*Nómina electrónica*, notas de ajuste y planilla PILA." />
        <Parte icon={<Banknote {...chico} />} titulo="Pago y contabilidad" texto="*Lote bancario*, desprendibles por correo y asiento contable." />
        <Parte icon={<BarChart3 {...chico} />} titulo="Informes" texto="*Costo de nómina*, ausentismo y certificado de ingresos." />
      </div>
    </div>
  </Slide>
);

// 03 · Cómo empiezas
export const ComoEmpiezasNomina: React.FC = () => (
  <Dividida
    n={3}
    pill="CÓMO EMPIEZAS"
    azul="Traes lo que tienes"
    gris="y sigues desde ahí."
    lineas={[
      "Activas el módulo eligiendo tu *tramo de empleados*.",
      "Configuras con los *valores legales del año* y las cuentas del *PUC sugeridas*.",
      "Traes tu histórico desde *World Office, Siigo Nómina, Helisa, Alegra Nómina o Contai*, y lo validas antes de cargarlo.",
      "El *Resumen* te dice si está lista o qué falta.",
    ]}
  >
    <PanelReal src={staticFile("brochure-nomina/resumen.png")} etiqueta="funciones de nómina" proporcion={1270 / 439} />
  </Dividida>
);

// 04 · Personal y estructura
export const PersonalEstructura: React.FC = () => (
  <Dividida
    n={4}
    pill="PERSONAL Y ESTRUCTURA"
    azul="Tu equipo,"
    gris="bien organizado."
    lineas={[
      "*Empleados* con contrato, salario, banco y seguridad social, uno a uno o *desde Excel*.",
      "*Áreas, cargos y sedes* de trabajo, con las asignaciones de cada persona.",
      "La *historia laboral* de cada empleado: cambios de cargo, salario y contrato.",
      "*Incremento salarial* a varios empleados a la vez, con vista previa antes de aplicar.",
    ]}
  >
    <PanelReal src={staticFile("brochure-nomina/empleados.png")} etiqueta="empleados" proporcion={1260 / 750} />
  </Dividida>
);

// 05 · Novedades
export const NovedadesTiempo: React.FC = () => (
  <Dividida
    n={5}
    pill="NOVEDADES"
    azul="Todo lo que pasa"
    gris="en el periodo."
    lineas={[
      "*Incapacidades y licencias*, con quién asume cada una.",
      "*Vacaciones* con sus documentos, y *horas extra y recargos* nocturnos, dominicales y festivos según la jornada.",
      "*Préstamos, embargos*, beneficios y *pactos no salariales*.",
      "Las *solicitudes de los jefes* llegan para que las apruebes antes de liquidar.",
    ]}
  >
    <PanelNovedades />
  </Dividida>
);

// 06 · Liquidación
export const Liquidacion: React.FC = () => (
  <Dividida
    n={6}
    pill="LIQUIDACIÓN"
    azul="Revisas antes"
    gris="de confirmar."
    lineas={["*Primera quincena, segunda o mensual*, con *vista previa* por empleado.", "Calcula la *retención en la fuente* y el *Fondo de Solidaridad*.", "Si tu empresa lo pide, con *doble aprobación* o visto bueno profesional.", "Si confirmaste con un error, *anulas o corriges* el periodo."]}
  >
    <PanelReal src={staticFile("brochure-nomina/generar.png")} etiqueta="generar nómina" proporcion={1280 / 720} />
  </Dividida>
);

// 07 · Prestaciones y liquidaciones
export const Prestaciones: React.FC = () => (
  <Dividida
    n={7}
    pill="PRESTACIONES Y RETIROS"
    azul="Prima, cesantías"
    gris="y liquidaciones."
    lineas={["*Prima*, *cesantías*, intereses y anticipo de cesantías.", "Revisas el *borrador por empleado* y lo liquidas.", "*Simulas la liquidación* de un contrato antes de crearla.", "Ajustes manuales si tu caso lo necesita."]}
  >
    <PanelReal src={staticFile("brochure-nomina/liquidacion.png")} etiqueta="liquidación laboral" proporcion={1280 / 799} />
  </Dividida>
);

// 08 · Obligaciones
export const Obligaciones: React.FC = () => (
  <Dividida
    n={8}
    pill="DIAN Y PILA"
    azul="Tus obligaciones,"
    gris="al día."
    lineas={["Emites la *nómina electrónica* del periodo o por empleado, o *sola al confirmar*.", "Ves el estado de cada documento y corriges con *notas de ajuste*.", "Generas la *planilla PILA* y la subes a tu operador.", "Registras cuándo la *radicas* y la *pagas*."]}
  >
    <PanelObligaciones />
  </Dividida>
);

// 09 · Pago a empleados
export const PagoEmpleados: React.FC = () => (
  <Dividida
    n={9}
    pill="PAGO A EMPLEADOS"
    azul="Pagas y concilias"
    gris="desde tesorería."
    lineas={[
      "Registras el pago de cada empleado con su *egreso*.",
      "*Lote bancario*: lo apruebas, descargas el archivo *PAB* y lo subes a tu banco.",
      "Registras el resultado del banco y *concilias el lote*.",
      "Envías los *desprendibles por correo* a todo el equipo.",
    ]}
  >
    <PanelPago />
  </Dividida>
);

// 10 · Contabilidad
export const Contabilidad: React.FC = () => (
  <Dividida
    n={10}
    pill="CONTABILIDAD"
    azul="La nómina,"
    gris="lista para causar."
    lineas={["Revisas la *cuenta de cada concepto*, con las del PUC sugeridas.", "*Vista previa del asiento* antes de aprobar.", "Las *liquidaciones de contrato* también quedan causadas.", "Si hace falta, *reviertes* la causación y vuelves a causar."]}
  >
    <PanelAsiento />
  </Dividida>
);

// 11 · Informes y costo
export const Informes: React.FC = () => (
  <Dividida
    n={11}
    pill="INFORMES"
    azul="Sabes cuánto cuesta"
    gris="y en qué se va."
    lineas={[
      "*Tablero de costo*: qué requiere atención, en qué se va la nómina y cómo cambia.",
      "*Rotación, ausentismo* y composición del equipo.",
      "Informes de *horas extra, aportes, deducciones, incapacidades* y provisiones.",
      "*Certificado de ingresos y retenciones*, y exportes para tu programa contable.",
    ]}
  >
    <PanelCosto />
  </Dividida>
);

const TRAMOS = [
  ["1 a 10", "Solo emisión", "$260.000"],
  ["1 a 10", "Con todo", "$480.000"],
  ["11 a 20", "Con todo", "$771.000"],
  ["21 a 45", "Con todo", "$1.400.000"],
  ["46 a 90", "Con todo", "$2.480.000"],
] as const;
const COLUMNAS = "1fr 1.2fr 1fr";

// 12 · Precios
export const PreciosNomina: React.FC = () => (
  <Slide n={12} total={TOTAL_NOMINA}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 170, display: "grid", gap: 30 }}>
      <div style={{ display: "grid", gap: 18 }}>
        <Pill>PRECIOS</Pill>
        <Titular azul="Un plan por tramo." gris="Pagas al año." size={60} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "2.3fr 1fr", gap: 28 }}>
        <Tarjeta style={{ display: "grid", gap: 10, alignContent: "start", padding: 30 }}>
          <div style={{ display: "grid", gridTemplateColumns: COLUMNAS, gap: 12, ...t(22, { fontWeight: 600, color: color.textBody }) }}>
            <span>Empleados</span><span>Incluye</span><span>Al año</span>
          </div>
          {TRAMOS.map(([tramo, incluye, anual]) => (
            <div key={tramo + incluye} style={{ display: "grid", gridTemplateColumns: COLUMNAS, gap: 12, paddingBottom: 8, borderBottom: `1px solid ${color.gray200}`, ...t(26) }}>
              <span>{tramo}</span><span>{incluye}</span>
              <strong style={{ fontWeight: 700, color: color.accent }}>{anual}</strong>
            </div>
          ))}
          <p style={t(22)}>Más de 90 empleados: se cotiza.</p>
        </Tarjeta>
        <Tarjeta style={{ background: color.accent, display: "grid", gap: 12, alignContent: "start", padding: 30 }}>
          <Landmark {...icono} />
          <p style={t(52, { fontWeight: 700, color: color.white, lineHeight: 1 })}>$300.000</p>
          <p style={t(26, { fontWeight: 700, color: color.white })}>Plan inicial al año + IVA</p>
          <p style={t(22, { color: color.white })}>Hasta 5 empleados, con el certificado digital incluido.</p>
        </Tarjeta>
      </div>
      <p style={t(24)}>
        <Emphasis text="Cada tramo es *por empresa* e incluye el *certificado*. Pagas el tramo completo, aunque tengas menos empleados." />
      </p>
    </div>
  </Slide>
);

// 13 · Cómo empezamos
export const EmpezamosNomina: React.FC = () => {
  const i = { size: 32, color: color.accent, strokeWidth: 2.1 } as const;
  const circulo: React.CSSProperties = { background: color.white, borderRadius: "50%", padding: 16, display: "grid" };
  return (
    <Slide n={13} total={TOTAL_NOMINA} fondo="azul">
      <div style={{ position: "absolute", left: MX, right: MX, top: 200, display: "grid", gap: 56 }}>
        <div style={{ display: "grid", gap: 24 }}>
          <Pill blanco>CÓMO EMPEZAMOS</Pill>
          <div>
            <p style={t(60, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Lleva tu nómina a núvara</p>
            <p style={t(88, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>con el control en tus manos.</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          <Inicio icon={<div style={circulo}><MessageCircle {...i} /></div>} titulo="Demostración en vivo" texto="Te mostramos el módulo y resolvemos tus dudas." />
          <Inicio icon={<div style={circulo}><ShieldCheck {...i} /></div>} titulo="Eliges tu tramo" texto="Según tus empleados, con pago anual." />
          <Inicio icon={<div style={circulo}><Send {...i} /></div>} titulo="Primera liquidación" texto="Traes tu histórico y liquidas tu primer periodo." />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "20px 40px", borderRadius: radius.pill, background: color.white, color: color.accent, fontFamily: font.sans, fontSize: 32, fontWeight: 700 }}>
            <Rocket size={32} color={color.accent} strokeWidth={2.2} /> Agenda tu demostración en vivo
          </span>
          <span style={t(28, { fontWeight: 600, color: color.white })}>WhatsApp +57 312 748 3536</span>
        </div>
      </div>
    </Slide>
  );
};

export const DIAPOSITIVAS_NOMINA = [PortadaNomina, QueIncluye, ComoEmpiezasNomina, PersonalEstructura, NovedadesTiempo, Liquidacion, Prestaciones, Obligaciones, PagoEmpleados, Contabilidad, Informes, PreciosNomina, EmpezamosNomina] as const;
