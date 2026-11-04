import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  CircleCheck,
  FileSearch,
  FileStack,
  GraduationCap,
  History,
  Inbox,
  Layers,
  ListChecks,
  MessageCircle,
  Rocket,
  Scale,
  Send,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Wand2,
} from "lucide-react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius } from "../brand/tokens";
import { Emphasis } from "../components/Emphasis";
import { Captura, Circulo, MX, Pill, Slide, t, Tarjeta, Titular } from "./kit";

// Brochure comercial "Cómo funciona la causación en núvara" (13 diapositivas
// 1920×1080 → PDF). Copy desde red/que-es-nuvara.md, causar-y-revisar.md,
// exportacion.md y precios.md: solo datos verificados y cifras permitidas.
// Las capturas se llenan con imágenes de la cuenta de prueba en public/brochure/.

const icono = { size: 34, color: color.white, strokeWidth: 2.1 } as const;
const capturas = {
  causacion: staticFile("brochure/causacion.png"),
  bandeja: staticFile("brochure/bandeja.png"),
  acciones: staticFile("brochure/acciones.png"),
  proveedor: staticFile("brochure/proveedor.png"),
  panel: staticFile("brochure/panel.png"),
  lote: staticFile("brochure/lote.png"),
  automatica: staticFile("brochure/automatica.png"),
  grupo: staticFile("brochure/grupo.png"),
  agrupada: staticFile("brochure/agrupada.png"),
  detalle: staticFile("brochure/detalle.png"),
  exportar: staticFile("brochure/exportar.png"),
};

// 01 · Portada
export const Portada: React.FC = () => (
  <AbsoluteFill style={{ background: color.accentDeep, overflow: "hidden" }}>
    <Img
      src={staticFile("posts/banco-90.jpg")}
      style={{ position: "absolute", top: 0, right: -400, height: "100%" }}
    />
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
        <p style={t(76, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Causación contable</p>
        <p style={t(104, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>sin digitar,</p>
        <p style={t(104, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>con control.</p>
      </div>
      <p style={t(34, { color: color.white, maxWidth: 760 })}>
        Cómo núvara prepara la causación de tus facturas electrónicas y por qué{" "}
        <strong style={{ fontWeight: 700 }}>tú sigues decidiendo cada asiento.</strong>
      </p>
    </div>
    <p style={t(24, { position: "absolute", left: MX, bottom: 64, fontWeight: 700, color: color.white, letterSpacing: "0.02em" })}>
      nuvara.com.co
    </p>
  </AbsoluteFill>
);

const Dolor: React.FC<{ readonly icon: React.ReactNode; readonly titulo: string; readonly texto: string }> = ({ icon, titulo, texto }) => (
  <Tarjeta style={{ display: "grid", gap: 22, alignContent: "start" }}>
    <Circulo>{icon}</Circulo>
    <p style={t(34, { fontWeight: 700, color: color.textTitle, lineHeight: 1.15 })}>{titulo}</p>
    <p style={t(26)}>
      <Emphasis text={texto} />
    </p>
  </Tarjeta>
);

// 02 · El problema
export const Problema: React.FC = () => (
  <Slide n={2}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 200, display: "grid", gap: 56 }}>
      <div style={{ display: "grid", gap: 24 }}>
        <Pill>EL PROBLEMA</Pill>
        <Titular azul="Una factura no es un dato." gris="Es una operación." />
        <p style={t(30, { maxWidth: 1300 })}>
          <Emphasis text="Una sola factura puede implicar *más de diez decisiones contables*. Hacerlas a mano, factura por factura, se come el mes." />
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        <Dolor
          icon={<FileStack {...icono} />}
          titulo="Digitar factura por factura"
          texto="Leer cada factura, elegir la *cuenta*, calcular *IVA y retenciones* y digitarlo en el programa contable."
        />
        <Dolor
          icon={<CalendarClock {...icono} />}
          titulo="Cierres contra el reloj"
          texto="Las facturas se acumulan para fin de mes, justo cuando vencen el *IVA* y la *retención en la fuente*."
        />
        <Dolor
          icon={<TriangleAlert {...icono} />}
          titulo="Errores que cuestan"
          texto="IVA mal calculado, facturas *duplicadas* o que *faltan frente a la DIAN* y se descubren tarde."
        />
      </div>
    </div>
  </Slide>
);

const Paso: React.FC<{ readonly n: string; readonly icon: React.ReactNode; readonly titulo: string; readonly texto: string }> = ({ n, icon, titulo, texto }) => (
  <Tarjeta style={{ display: "grid", gap: 20, alignContent: "start", padding: 32 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <Circulo size={64}>{icon}</Circulo>
      <span style={t(40, { fontWeight: 700, color: color.accent, fontVariantNumeric: "tabular-nums" })}>{n}</span>
    </div>
    <p style={t(32, { fontWeight: 700, color: color.textTitle, lineHeight: 1.15 })}>{titulo}</p>
    <p style={t(24)}>
      <Emphasis text={texto} />
    </p>
  </Tarjeta>
);

// 03 · Cómo funciona
export const ComoFunciona: React.FC = () => (
  <Slide n={3}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 200, display: "grid", gap: 56 }}>
      <div style={{ display: "grid", gap: 24 }}>
        <Pill>CÓMO FUNCIONA</Pill>
        <Titular azul="Cuatro pasos," gris="tú apruebas en el tercero." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
        <Paso
          n="01"
          icon={<Inbox {...icono} />}
          titulo="Trae tus facturas"
          texto="Desde la *DIAN* y desde tu *correo*, sin descargarlas una por una."
        />
        <Paso
          n="02"
          icon={<Wand2 {...icono} />}
          titulo="Interpreta y prepara"
          texto="Arma la causación: cuenta del *PUC*, débito y crédito, bases, *IVA*, *retenciones* y centros de costo."
        />
        <Paso
          n="03"
          icon={<CircleCheck {...icono} />}
          titulo="Tú revisas y apruebas"
          texto="Con la *factura original al lado* del asiento. Corriges lo que haga falta y apruebas."
        />
        <Paso
          n="04"
          icon={<Send {...icono} />}
          titulo="Exportas"
          texto="A tu programa contable por *archivo* o con *envío directo a Siigo Nube*."
        />
      </div>
      <p style={t(28, { color: color.textTitle })}>
        <Emphasis text="Cada causación toma *cerca de 15 segundos* y corre en segundo plano mientras sigues trabajando." />
      </p>
    </div>
  </Slide>
);

const Linea: React.FC<{ readonly texto: string }> = ({ texto }) => (
  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
    <BadgeCheck size={34} color={color.accent} strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
    <p style={t(27, { lineHeight: 1.35 })}>
      <Emphasis text={texto} />
    </p>
  </div>
);

// 04 · La bandeja de causaciones
export const Bandeja: React.FC = () => (
  <Slide n={4}>
    <div style={{ position: "absolute", left: MX, top: 200, width: 600, display: "grid", gap: 36 }}>
      <Pill>TUS FACTURAS</Pill>
      <Titular azul="Todo en" gris="una sola bandeja." size={68} />
      <div style={{ display: "grid", gap: 22 }}>
        <Linea texto="Llegan de la *DIAN* y de tu *correo*, o las importas en *XML o ZIP*." />
        <Linea texto="Las ves por estado: *Pendientes*, *Pre-causadas* y *Aprobadas*." />
        <Linea texto="Filtras por *proveedor*, *mes*, *forma de pago* o tipo de factura." />
        <Linea texto="*Comparas con la DIAN* para saber qué factura falta antes del cierre." />
      </div>
    </div>
    <Captura src={capturas.bandeja} etiqueta="bandeja de causaciones" style={{ position: "absolute", right: MX, top: 190, width: 1000, height: 612 }} />
    <Captura src={capturas.acciones} etiqueta="menú Traer facturas" style={{ position: "absolute", right: MX - 40, top: 560, width: 300, height: 326 }} />
  </Slide>
);

// 05 · Qué prepara cada causación
export const QuePrepara: React.FC = () => (
  <Slide n={5}>
    <div style={{ position: "absolute", left: MX, top: 200, width: 700, display: "grid", gap: 36 }}>
      <Pill>CADA CAUSACIÓN</Pill>
      <Titular azul="El asiento," gris="listo para revisar." size={68} />
      <div style={{ display: "grid", gap: 22 }}>
        <Linea texto="La *cuenta* sale del historial del proveedor en tu empresa y de lo que ya corregiste." />
        <Linea texto="Usa *tu plan de cuentas*; el PUC general solo si no hay una cuenta adecuada." />
        <Linea texto="*IVA* y *retenciones* según la condición del proveedor y la tabla vigente a la fecha." />
        <Linea texto="Débitos y créditos *cuadrados*, con la *cuenta por pagar* como contrapartida." />
        <Linea texto="Si el asiento no cuadra con la factura, *la plataforma te avisa*." />
      </div>
    </div>
    <Captura
      src={capturas.causacion}
      etiqueta="factura al lado del asiento"
      style={{ position: "absolute", right: MX, top: 190, width: 900, height: 720 }}
    />
  </Slide>
);

// 06 · Cada proveedor, a tu manera
export const Proveedor: React.FC = () => (
  <Slide n={6}>
    <div style={{ position: "absolute", left: MX, top: 200, width: 760, display: "grid", gap: 36 }}>
      <Pill>PROVEEDORES</Pill>
      <Titular azul="Cada proveedor," gris="como tú lo configuras." size={68} />
      <div style={{ display: "grid", gap: 22 }}>
        <Linea texto="*Régimen tributario* y condición: declarante, autorretenedor, gran contribuyente o exento." />
        <Linea texto="*Retención personalizada* o el *mínimo de la DIAN*, para ReteFuente, ReteIVA y ReteICA." />
        <Linea texto="Cada cambio se guarda como *corrección* y se usa para causar las *nuevas facturas*." />
      </div>
    </div>
    <Captura src={capturas.proveedor} etiqueta="configuración del proveedor" style={{ position: "absolute", right: MX, top: 190, width: 820, height: 708 }} />
  </Slide>
);

const Modo: React.FC<{ readonly src: string; readonly etiqueta: string; readonly titulo: string; readonly texto: string; readonly destacado?: boolean }> = ({ src, etiqueta, titulo, texto, destacado }) => (
  <Tarjeta style={{ display: "grid", gap: 16, alignContent: "start", padding: 24, ...(destacado ? { border: `2px solid ${color.accent}` } : {}) }}>
    <Captura src={src} etiqueta={etiqueta} style={{ height: 270, boxShadow: "none", border: `1px solid ${color.gray200}` }} />
    <p style={t(30, { fontWeight: 700, color: color.textTitle, lineHeight: 1.15 })}>{titulo}</p>
    <p style={t(23, { lineHeight: 1.35 })}>
      <Emphasis text={texto} />
    </p>
  </Tarjeta>
);

// 07 · En grupo o en automático
export const EnGrupo: React.FC = () => (
  <Slide n={7}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 170, display: "grid", gap: 32 }}>
      <div style={{ display: "grid", gap: 18 }}>
        <Pill>A TU RITMO</Pill>
        <Titular azul="Causa en grupo" gris="o en automático." size={60} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        <Modo
          src={capturas.lote}
          etiqueta="panel Causar por lote"
          titulo="Causar por lote"
          texto="Eliges un *rango de fechas* y se causan todas las facturas del periodo. *Sigues trabajando* mientras avanza."
        />
        <Modo
          destacado
          src={capturas.automatica}
          etiqueta="panel Causación automática"
          titulo="Causación automática"
          texto="La activas *por empresa*: cada factura que llega se causa sola y te espera en *Pre-causadas* para que la revises."
        />
        <Modo
          src={capturas.grupo}
          etiqueta="selección en grupo"
          titulo="Aprobación en bloque"
          texto="Seleccionas varias y apruebas de una vez. Nada sale a tu programa *sin tu aprobación*."
        />
      </div>
    </div>
  </Slide>
);

// 08 · Vista agrupada
export const VistaAgrupada: React.FC = () => (
  <Slide n={8}>
    <div style={{ position: "absolute", left: MX, top: 200, width: 560, display: "grid", gap: 36 }}>
      <Pill>VISTA AGRUPADA</Pill>
      <Titular azul="Revisas una vez," gris="apruebas el grupo." size={60} />
      <div style={{ display: "grid", gap: 22 }}>
        <Linea texto="Junta las facturas con la *misma causación*, aunque sean de varios proveedores." />
        <Linea texto="Ves las *cuentas del grupo* y las ajustas una sola vez." />
        <Linea texto="*Aprobar grupo*: todas las facturas del grupo con un clic." />
      </div>
    </div>
    <Captura src={capturas.agrupada} etiqueta="vista agrupada" style={{ position: "absolute", right: MX, top: 190, width: 1040, height: 700 }} />
  </Slide>
);

const ESTADOS = ["Pendiente", "Pre-causada", "Aprobada", "Archivada", "Exportada"] as const;

const Control: React.FC<{ readonly icon: React.ReactNode; readonly texto: string }> = ({ icon, texto }) => (
  <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
    <Circulo size={50}>{icon}</Circulo>
    <p style={t(24, { lineHeight: 1.25 })}>
      <Emphasis text={texto} />
    </p>
  </div>
);

// 09 · El control es tuyo
export const ElControl: React.FC = () => (
  <Slide n={9}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 170, display: "grid", gap: 30 }}>
      <div style={{ display: "grid", gap: 18 }}>
        <Pill>CONTROL</Pill>
        <Titular azul="núvara prepara." gris="Tú decides." size={60} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {ESTADOS.map((e, i) => (
          <div key={e} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                padding: "14px 28px",
                borderRadius: radius.pill,
                background: i === 2 ? color.accent : color.white,
                color: i === 2 ? color.white : color.textTitle,
                fontFamily: font.sans,
                fontSize: 26,
                fontWeight: 700,
                boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              }}
            >
              {e}
            </span>
            {i < ESTADOS.length - 1 ? <ArrowRight size={30} color={color.accent} strokeWidth={2.4} /> : null}
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 760px", gap: 48, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 14 }}>
          <Control icon={<ShieldCheck {...icono} size={26} />} texto="*Nada se exporta* sin tu aprobación." />
          <Control icon={<FileSearch {...icono} size={26} />} texto="Revisas con la *factura original al lado*." />
          <Control icon={<History {...icono} size={26} />} texto="*Aprende de tus correcciones*, por empresa y por proveedor." />
          <Control icon={<ListChecks {...icono} size={26} />} texto="*Reglas fijas* y aprobación *en bloque* o *por proveedor*." />
          <Control icon={<Scale {...icono} size={26} />} texto="*Comparación con la DIAN* para ver qué factura falta." />
          <Control icon={<Layers {...icono} size={26} />} texto="Lo que dejas en *Pendientes* no *cuesta créditos*." />
        </div>
        <Captura src={capturas.detalle} etiqueta="factura al lado del asiento" style={{ height: 428 }} />
      </div>
    </div>
  </Slide>
);

// 10 · El panel de la empresa
export const Panel: React.FC = () => (
  <Slide n={10}>
    <div style={{ position: "absolute", left: MX, top: 200, width: 620, display: "grid", gap: 36 }}>
      <Pill>TU PANEL</Pill>
      <Titular azul="Tu operación," gris="de un vistazo." size={68} />
      <div style={{ display: "grid", gap: 22 }}>
        <Linea texto="*Horas ahorradas* cada mes: tiempo manual frente a tiempo con núvara." />
        <Linea texto="*Consumo de créditos* por mes y recarga desde el mismo panel." />
        <Linea texto="*Obligaciones tributarias* con su fecha, para que no se te pase ninguna." />
      </div>
    </div>
    <Captura src={capturas.panel} etiqueta="panel de la empresa" style={{ position: "absolute", right: MX, top: 190, width: 1000, height: 693 }} />
  </Slide>
);

const PROGRAMAS = ["Siigo Nube", "Siigo Contador", "Siigo Pyme", "World Office", "Alegra", "Helisa", "Contai", "Avansys", "SEDI", "Archivo plano"] as const;

// 11 · Integraciones y multiempresa
export const Integraciones: React.FC = () => (
  <Slide n={11}>
    <div style={{ position: "absolute", left: MX, top: 180, width: 700, display: "grid", gap: 28 }}>
      <Pill>INTEGRACIONES</Pill>
      <Titular azul="Sigues en tu programa." gris="núvara te deja todo listo." size={52} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {PROGRAMAS.map((p) => (
          <span
            key={p}
            style={{
              padding: "8px 18px",
              borderRadius: radius.pill,
              border: `2px solid ${color.accent}`,
              background: color.white,
              color: color.accent,
              fontFamily: font.sans,
              fontSize: 21,
              fontWeight: 700,
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        <Linea texto="*Envío directo a Siigo Nube*: conectas una vez y envías el mes archivado." />
        <Linea texto="*Archivo plano para cualquier programa*. ¿El tuyo no está? *Armamos su formato contigo.*" />
        <Linea texto="*Todas tus empresas* en una cuenta, cada una con su información separada." />
        <Linea texto="*Compras y ventas*, con notas crédito, documentos soporte y facturas del exterior." />
      </div>
    </div>
    <Captura src={capturas.exportar} etiqueta="asistente de exportación" style={{ position: "absolute", right: MX, top: 230, width: 900, height: 488 }} />
  </Slide>
);

const Precio: React.FC<{ readonly valor: string; readonly que: string; readonly nota: string; readonly destacado?: boolean }> = ({ valor, que, nota, destacado }) => (
  <Tarjeta
    style={{
      display: "grid",
      gap: 12,
      alignContent: "start",
      background: destacado ? color.accent : color.white,
    }}
  >
    <p style={t(80, { fontWeight: 700, lineHeight: 1, color: destacado ? color.white : color.accent })}>{valor}</p>
    <p style={t(30, { fontWeight: 700, color: destacado ? color.white : color.textTitle })}>{que}</p>
    <p style={t(24, { color: destacado ? color.white : color.textBody })}>{nota}</p>
  </Tarjeta>
);

// 12 · Precios
export const Precios: React.FC = () => (
  <Slide n={12}>
    <div style={{ position: "absolute", left: MX, right: MX, top: 200, display: "grid", gap: 48 }}>
      <div style={{ display: "grid", gap: 24 }}>
        <Pill>PRECIOS</Pill>
        <Titular azul="Pagas lo que causas." gris="Sin plan forzado." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
        <Precio valor="$510" que="Factura de compra" nota="5,1 créditos por causación." destacado />
        <Precio valor="$200" que="Factura de venta" nota="2 créditos por causación." />
        <Precio valor="$80.000" que="Mínimo mensual" nota="Solo si usas únicamente causación. Lo no consumido del mínimo se pierde." />
        <Precio valor="$70.000" que="Recarga mínima" nota="Recargas créditos y los usas cuando causas." />
      </div>
      <div style={{ display: "grid", gap: 14 }}>
        <p style={t(26)}>
          <Emphasis text="1 crédito = $100. Se cobra *al causar*, una sola vez por factura: descargar no cuesta y recausar no vuelve a cobrar." />
        </p>
        <p style={t(26)}>
          <Emphasis text="¿Manejas un flujo mayor? Desde *1.500 causaciones al mes* puedes optar por una *cotización mensual*. La facturación electrónica y la nómina tienen *precio propio*." />
        </p>
      </div>
    </div>
  </Slide>
);

const Inicio: React.FC<{ readonly icon: React.ReactNode; readonly titulo: string; readonly texto: string }> = ({ icon, titulo, texto }) => (
  <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: color.white,
        display: "grid",
        placeItems: "center",
      }}
    >
      {icon}
    </div>
    <p style={t(32, { fontWeight: 700, color: color.white, lineHeight: 1.15 })}>{titulo}</p>
    <p style={t(24, { color: color.white })}>{texto}</p>
  </div>
);

// 13 · Cómo empezamos
export const ComoEmpezamos: React.FC = () => {
  const i = { size: 34, color: color.accent, strokeWidth: 2.1 } as const;
  return (
    <Slide n={13} fondo="azul">
      <div style={{ position: "absolute", left: MX, right: MX, top: 200, display: "grid", gap: 56 }}>
        <div style={{ display: "grid", gap: 24 }}>
          <Pill blanco>CÓMO EMPEZAMOS</Pill>
          <div>
            <p style={t(60, { fontWeight: 300, color: color.white, lineHeight: 1.05 })}>Empieza con una empresa</p>
            <p style={t(88, { fontWeight: 700, color: color.white, lineHeight: 1.02 })}>y tus facturas reales.</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          <Inicio icon={<MessageCircle {...i} />} titulo="Demostración en vivo" texto="Te mostramos núvara con tus propias facturas." />
          <Inicio icon={<Building2 {...i} />} titulo="Creas tu empresa" texto="Con el RUT y el balance de prueba por tercero de tu programa contable." />
          <Inicio icon={<Sparkles {...i} />} titulo="Pruebas gratis" texto="Causas tus primeras 20 facturas sin costo." />
          <Inicio icon={<GraduationCap {...i} />} titulo="Capacitación y piloto" texto="Te acompañamos con una empresa antes de pasar las demás." />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "20px 40px",
              borderRadius: radius.pill,
              background: color.white,
              color: color.accent,
              fontFamily: font.sans,
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            <Rocket size={34} strokeWidth={2.2} />
            Agenda tu demostración en vivo
          </span>
          <p style={t(28, { color: color.white, fontWeight: 600 })}>WhatsApp +57 312 748 3536</p>
        </div>
      </div>
    </Slide>
  );
};

export const DIAPOSITIVAS = [Portada, Problema, ComoFunciona, Bandeja, QuePrepara, Proveedor, EnGrupo, VistaAgrupada, ElControl, Panel, Integraciones, Precios, ComoEmpezamos] as const;
