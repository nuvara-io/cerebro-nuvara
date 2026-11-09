import { Check, CloudUpload, FileSpreadsheet, FileText } from "lucide-react";
import { AbsoluteFill } from "remotion";
import { color, radius, shadow } from "../../brand/tokens";
import { Backdrop } from "../../components/Backdrop";
import { Emphasis } from "../../components/Emphasis";
import { Categoria, MarcaDeAgua, MARGEN, Pie, Tarjeta, texto, Wordmark } from "./kit";

// Anuncios de la campaña "Llega al cierre con todo causado" (1080×1350).
// N2: carrusel de la comparación con la DIAN, desde red/comparar-con-la-dian.md.
// N4 y N5: posts con el texto de docs/campana-cierre-iva-2026-11.md. Los precios
// de N5 salen de red/precios.md: si cambian allá, se cambian acá.

const Siguiente: React.FC<{ readonly blanco?: boolean }> = ({ blanco }) => (
  <p style={texto(40, { position: "absolute", right: MARGEN, bottom: 70, fontWeight: 700, letterSpacing: "0.06em", color: blanco ? color.white : color.accent })}>
    {">>>"}
  </p>
);

const Azul: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ background: color.accent, overflow: "hidden" }}>
    <MarcaDeAgua size={1250} left={-240} top={200} />
    <Wordmark blanco />
    {children}
  </AbsoluteFill>
);

const Gris: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => (
  <>
    <Backdrop format="post" />
    <Wordmark />
    {children}
  </>
);

const Contenido: React.FC<{ readonly children: React.ReactNode; readonly gap?: number }> = ({ children, gap = 46 }) => (
  <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: 270, display: "grid", gap }}>{children}</div>
);

const DosTonos: React.FC<{ readonly a: string; readonly b: string }> = ({ a, b }) => (
  <div>
    <p style={texto(74, { fontWeight: 700, lineHeight: 1.08, color: color.accent })}>{a}</p>
    <p style={texto(74, { fontWeight: 700, lineHeight: 1.08, color: color.textTitle })}>{b}</p>
  </div>
);

const Cuerpo: React.FC<{ readonly t: string }> = ({ t }) => (
  <p style={texto(34, { color: color.textBody, lineHeight: 1.35 })}>
    <Emphasis text={t} />
  </p>
);

const caja: React.CSSProperties = { borderRadius: radius.card, background: color.white, boxShadow: shadow.card };

export const DianPlaca1: React.FC = () => (
  <Azul>
    <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: 380, display: "grid", gap: 40 }}>
      <Categoria texto="ANTES DE PRESENTAR EL IVA" sobreOscuro />
      <div>
        <p style={texto(66, { fontWeight: 300, color: color.white, lineHeight: 1.1 })}>¿Te falta alguna</p>
        <p style={texto(124, { fontWeight: 700, color: color.white, lineHeight: 1.05 })}>factura</p>
        <p style={texto(66, { fontWeight: 300, color: color.white, lineHeight: 1.1 })}>frente a la DIAN?</p>
      </div>
    </div>
    <Siguiente blanco />
  </Azul>
);

export const DianPlaca2: React.FC = () => (
  <Gris>
    <Contenido>
      <DosTonos a="Sube el listado" b="del mes." />
      <Cuerpo t="Descargas del portal de la DIAN el listado de *recibidas* o de *emitidas* y lo subes a núvara." />
      <div style={{ ...caja, padding: "90px 44px", display: "flex", alignItems: "center", gap: 34, marginTop: 24 }}>
        <FileSpreadsheet size={96} color={color.accent} strokeWidth={1.5} />
        <div style={{ flex: 1 }}>
          <p style={texto(36, { fontWeight: 700, color: color.textTitle })}>Listado de la DIAN</p>
          <p style={texto(28, { color: color.textBody })}>Archivo .zip o Excel</p>
        </div>
        <CloudUpload size={72} color={color.accent} strokeWidth={1.75} />
      </div>
    </Contenido>
    <Siguiente />
  </Gris>
);

const TOTALES = [
  { n: "132", t: "En DIAN" },
  { n: "128", t: "En núvara" },
  { n: "128", t: "Conciliadas" },
  { n: "4", t: "Faltan en núvara", alerta: true },
] as const;

export const DianPlaca3: React.FC = () => (
  <Gris>
    <Contenido>
      <DosTonos a="núvara cruza" b="por CUFE." />
      <Cuerpo t="Ves qué facturas *tienes*, cuáles *te faltan* y cuáles *no cuadran*." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 12 }}>
        {TOTALES.map((x) => (
          <div key={x.t} style={{ ...caja, padding: "30px 34px", background: "alerta" in x ? color.accent : color.white }}>
            <p style={texto(84, { fontWeight: 700, lineHeight: 1.05, color: "alerta" in x ? color.white : color.accent })}>{x.n}</p>
            <p style={texto(29, { color: "alerta" in x ? color.white : color.textTitle })}>{x.t}</p>
          </div>
        ))}
      </div>
      <p style={texto(24, { color: color.textBody })}>Cifras de ejemplo.</p>
    </Contenido>
    <Siguiente />
  </Gris>
);

export const DianPlaca4: React.FC = () => (
  <Gris>
    <Contenido>
      <DosTonos a="Las que faltan," b="las traes." />
      <Cuerpo t="Copias el CUFE, descargas su ZIP en la DIAN y lo subes a núvara. La factura queda en *Pendientes*, lista para causar." />
      <div style={{ ...caja, padding: "16px 36px", marginTop: 12 }}>
        {["FE-1042", "FE-2317", "FE-0896"].map((f, i) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 22, padding: "34px 0", borderTop: i ? `2px solid ${color.gray100}` : "none" }}>
            <FileText size={44} color={color.accent} strokeWidth={1.75} />
            <p style={texto(32, { flex: 1, fontWeight: 600, color: color.textTitle })}>{f}</p>
            <span style={texto(26, { padding: "8px 20px", borderRadius: radius.pill, fontWeight: 600, background: color.accentTint, color: color.accent })}>Pendiente</span>
          </div>
        ))}
      </div>
    </Contenido>
    <Siguiente />
  </Gris>
);

export const DianPlaca5: React.FC = () => (
  <Azul>
    <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: 400, display: "grid", gap: 40 }}>
      <div>
        <p style={texto(66, { fontWeight: 300, color: color.white, lineHeight: 1.1 })}>Llega al cierre</p>
        <p style={texto(108, { fontWeight: 700, color: color.white, lineHeight: 1.08 })}>sin sorpresas.</p>
      </div>
      <p style={texto(36, { color: color.white, lineHeight: 1.35 })}>
        Sabes qué tienes, qué te falta y qué no cuadra <strong style={{ fontWeight: 700 }}>antes de exportar.</strong>
      </p>
    </div>
    <Pie blanco llamado="Escríbenos y agenda tu demostración en vivo" />
  </Azul>
);

const Fila: React.FC<{ readonly nombre: string }> = ({ nombre }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 22, padding: "20px 0" }}>
    <div style={{ width: 54, height: 54, borderRadius: "50%", background: color.accent, display: "grid", placeItems: "center", flexShrink: 0 }}>
      <Check size={30} color={color.white} strokeWidth={2.5} />
    </div>
    <p style={texto(32, { flex: 1, fontWeight: 600, color: color.textTitle })}>{nombre}</p>
    <p style={texto(26, { color: color.textBody })}>Exporta a su programa</p>
  </div>
);

export const VariosProgramas: React.FC = () => (
  <Gris>
    <Contenido gap={30}>
      <Categoria texto="VARIOS PROGRAMAS CONTABLES" />
      <DosTonos a="Todas tus empresas," b="un solo panel." />
      <Cuerpo t="núvara causa desde un solo lugar y exporta al *programa contable* de cada empresa." />
      <div style={{ ...caja, padding: "12px 36px" }}>
        {["Empresa A", "Empresa B", "Empresa C"].map((e) => (
          <Fila key={e} nombre={e} />
        ))}
      </div>
    </Contenido>
    <Tarjeta icono={<FileSpreadsheet size={50} color={color.accent} strokeWidth={1.75} />} style={{ position: "absolute", left: MARGEN, right: MARGEN, bottom: 180 }}>
      Si aún no tenemos el formato, <strong style={{ color: color.accent }}>lo generamos.</strong>
    </Tarjeta>
    <Pie llamado="Escríbenos y agenda tu demostración en vivo" />
  </Gris>
);

const Precio: React.FC<{ readonly valor: string; readonly que: string; readonly creditos: string }> = ({ valor, que, creditos }) => (
  <div style={{ ...caja, flex: 1, padding: "34px 34px 36px" }}>
    <p style={texto(84, { fontWeight: 700, lineHeight: 1.05, color: color.accent })}>{valor}</p>
    <p style={texto(32, { fontWeight: 600, lineHeight: 1.2, color: color.textTitle })}>{que}</p>
    <p style={texto(26, { color: color.textBody })}>{creditos}</p>
  </div>
);

export const PagasLoQueCausas: React.FC = () => (
  <Gris>
    <Contenido gap={30}>
      <Categoria texto="SIN PERMANENCIA" />
      <DosTonos a="Pagas" b="lo que causas." />
      <div style={{ display: "flex", gap: 24, marginTop: 12 }}>
        <Precio valor="$510" que="Causar una compra" creditos="510 créditos" />
        <Precio valor="$200" que="Causar una venta" creditos="200 créditos" />
      </div>
      <Cuerpo t="El *mínimo mensual de consumo* es $80.000, unas *156 facturas de compra*. Si causas más, pagas tu *consumo real.*" />
    </Contenido>
    <Pie llamado="Escríbenos y agenda tu demostración en vivo" />
  </Gris>
);
