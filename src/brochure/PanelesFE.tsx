import { font } from "../brand/fonts";
import { color, radius, shadow } from "../brand/tokens";
import { t } from "./kit";

// Paneles ilustrativos de facturación electrónica: recrean las pantallas con
// datos ficticios porque la cuenta de prueba no tiene el módulo activo. Cada uno
// lleva la marca "Ilustración". Si se consiguen capturas reales, se reemplazan.

const Ventana: React.FC<{ readonly titulo: string; readonly ruta: string; readonly children: React.ReactNode; readonly style?: React.CSSProperties }> = ({ titulo, ruta, children, style }) => (
  <div style={{ background: color.white, borderRadius: radius.frame, boxShadow: shadow.frame, overflow: "hidden", display: "flex", flexDirection: "column", ...style }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: `1px solid ${color.gray200}` }}>
      <div>
        <p style={t(15, { color: color.gray500 })}>{ruta}</p>
        <p style={t(24, { fontWeight: 600, color: color.gray700 })}>{titulo}</p>
      </div>
      <span style={{ ...t(14, { fontWeight: 600, color: color.gray500 }), padding: "4px 12px", borderRadius: radius.pill, background: color.gray100 }}>Ilustración</span>
    </div>
    <div style={{ padding: 24, flex: 1, display: "grid", gap: 14, alignContent: "start" }}>{children}</div>
  </div>
);

const Campo: React.FC<{ readonly etiqueta: string; readonly valor: string }> = ({ etiqueta, valor }) => (
  <div>
    <p style={t(14, { color: color.gray500 })}>{etiqueta}</p>
    <p style={{ ...t(18, { color: color.gray700 }), padding: "8px 12px", marginTop: 4, border: `1px solid ${color.gray200}`, borderRadius: 8 }}>{valor}</p>
  </div>
);

type Tono = "bien" | "espera" | "azul" | "gris";
const TONOS: Record<Tono, [string, string]> = {
  bien: [color.emerald20, color.emerald100],
  espera: [color.yellow20, color.yellow100],
  azul: [color.accentTint, color.accent],
  gris: [color.gray100, color.gray600],
};
const Estado: React.FC<{ readonly texto: string; readonly tono: Tono }> = ({ texto, tono }) => (
  <span style={{ ...t(15, { fontWeight: 600, color: TONOS[tono][1] }), padding: "4px 12px", borderRadius: 8, background: TONOS[tono][0], whiteSpace: "nowrap", justifySelf: "start" }}>{texto}</span>
);

const Boton: React.FC<{ readonly texto: string; readonly secundario?: boolean }> = ({ texto, secundario }) => (
  <span style={{ padding: "10px 20px", borderRadius: 8, fontFamily: font.sans, fontSize: 17, fontWeight: 600, background: secundario ? color.white : color.accent, color: secundario ? color.accent : color.white, border: `1px solid ${color.accent}` }}>{texto}</span>
);

const Fila: React.FC<{ readonly columnas: string; readonly children: React.ReactNode; readonly cabecera?: boolean }> = ({ columnas, children, cabecera }) => (
  <div style={{ display: "grid", gridTemplateColumns: columnas, gap: 12, alignItems: "center", padding: "9px 0", borderBottom: `1px solid ${color.gray100}`, ...t(16, { color: cabecera ? color.gray500 : color.gray700, fontWeight: cabecera ? 600 : 400 }) }}>{children}</div>
);

export const PanelFactura: React.FC<{ readonly style?: React.CSSProperties }> = ({ style }) => (
  <Ventana titulo="Nueva factura de venta" ruta="Facturación Electrónica › Emitir" style={style}>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14 }}>
      <Campo etiqueta="Comprador" valor="Papelería Central SAS" />
      <Campo etiqueta="Forma de pago" valor="Crédito · 30 días" />
    </div>
    <div>
      <Fila columnas="2.4fr .6fr 1fr .6fr 1fr" cabecera>
        <span>Producto o servicio</span><span>Cant.</span><span>Precio</span><span>IVA</span><span>Total</span>
      </Fila>
      <Fila columnas="2.4fr .6fr 1fr .6fr 1fr"><span>Asesoría contable</span><span>1</span><span>$850.000</span><span>19 %</span><span>$850.000</span></Fila>
      <Fila columnas="2.4fr .6fr 1fr .6fr 1fr"><span>Resma de papel</span><span>10</span><span>$18.500</span><span>19 %</span><span>$185.000</span></Fila>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 28, ...t(18, { color: color.gray600 }) }}>
      <span>Los precios incluyen IVA</span>
      <strong style={{ color: color.gray700 }}>Total $1.035.000</strong>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 6 }}>
      <Boton texto="Vista previa" secundario />
      <Boton texto="Emitir" />
    </div>
  </Ventana>
);

export const PanelDocumentos: React.FC<{ readonly style?: React.CSSProperties }> = ({ style }) => (
  <Ventana titulo="Documentos" ruta="Facturación Electrónica › Documentos" style={style}>
    <div>
      <Fila columnas="1fr 2fr 1.1fr 1.3fr" cabecera><span>Número</span><span>Comprador</span><span>Total</span><span>Estado</span></Fila>
      <Fila columnas="1fr 2fr 1.1fr 1.3fr"><span>FV-1042</span><span>Papelería Central SAS</span><span>$1.035.000</span><Estado texto="Aceptado" tono="bien" /></Fila>
      <Fila columnas="1fr 2fr 1.1fr 1.3fr"><span>FV-1041</span><span>Tecnología Ágil SAS</span><span>$2.380.000</span><Estado texto="Aceptado" tono="bien" /></Fila>
      <Fila columnas="1fr 2fr 1.1fr 1.3fr"><span>NC-208</span><span>Alimentos La Espiga SAS</span><span>$96.000</span><Estado texto="Enviado a DIAN" tono="azul" /></Fila>
      <Fila columnas="1fr 2fr 1.1fr 1.3fr"><span>FV-1040</span><span>Laura Méndez Ríos</span><span>$412.000</span><Estado texto="En cola" tono="gris" /></Fila>
      <Fila columnas="1fr 2fr 1.1fr 1.3fr"><span>DS-77</span><span>Juan David Salazar Cano</span><span>$640.000</span><Estado texto="Aceptado" tono="bien" /></Fila>
      <Fila columnas="1fr 2fr 1.1fr 1.3fr"><span>FV-1039</span><span>Logística Costa Azul SAS</span><span>$758.000</span><Estado texto="Rechazado" tono="espera" /></Fila>
    </div>
    <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
      <Boton texto="PDF" secundario /><Boton texto="XML" secundario /><Boton texto="Reenviar por email" secundario />
    </div>
  </Ventana>
);

export const PanelSoporte: React.FC<{ readonly style?: React.CSSProperties }> = ({ style }) => (
  <Ventana titulo="Nuevo documento soporte" ruta="Facturación Electrónica › Emitir" style={style}>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14 }}>
      <Campo etiqueta="Proveedor no obligado a facturar" valor="Juan David Salazar Cano" />
      <Campo etiqueta="Residencia" valor="Colombia" />
      <Campo etiqueta="Descripción" valor="Servicio de transporte" />
      <Campo etiqueta="Valor" valor="$640.000" />
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
      <Estado texto="Resolución del documento soporte vigente" tono="bien" />
      <Boton texto="Emitir" />
    </div>
  </Ventana>
);

const EVENTOS: [string, string, string, Tono][] = [
  ["030", "Acuse de recibo", "A mano o con reglas", "azul"],
  ["032", "Recibo del bien o servicio", "A mano o con reglas", "azul"],
  ["033", "Aceptación expresa", "A mano o con reglas", "azul"],
  ["031", "Reclamo", "Siempre a mano", "espera"],
  ["034", "Aceptación tácita", "La registra la DIAN", "gris"],
];
export const PanelEventos: React.FC<{ readonly style?: React.CSSProperties }> = ({ style }) => (
  <Ventana titulo="Eventos de la factura FE-5531" ruta="Facturación Electrónica › Documentos › Eventos RADIAN" style={style}>
    <div>
      {EVENTOS.map(([codigo, nombre, modo, tono]) => (
        <Fila key={codigo} columnas=".5fr 2fr 1.3fr">
          <strong style={{ color: color.accent }}>{codigo}</strong>
          <span>{nombre}</span>
          <Estado texto={modo} tono={tono} />
        </Fila>
      ))}
    </div>
  </Ventana>
);

export const PanelCumplimiento: React.FC<{ readonly style?: React.CSSProperties }> = ({ style }) => (
  <Ventana titulo="Cumplimiento" ruta="Facturación Electrónica › Eventos RADIAN" style={style}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      {([["Por vencer", "3", "espera"], ["Sin acuse", "5", "azul"], ["Sin recibo", "2", "azul"]] as const).map(([n, v, tono]) => (
        <div key={n} style={{ padding: 16, borderRadius: 8, background: TONOS[tono][0] }}>
          <p style={t(34, { fontWeight: 700, color: TONOS[tono][1] })}>{v}</p>
          <p style={t(16, { color: color.gray600 })}>{n}</p>
        </div>
      ))}
    </div>
    <p style={t(17, { fontWeight: 600, color: color.gray700, marginTop: 6 })}>Reglas</p>
    <Fila columnas="2.2fr 1.2fr 1fr"><span>Acuse cuando llega la compra</span><span>Todos los proveedores</span><Estado texto="Activa" tono="bien" /></Fila>
    <Fila columnas="2.2fr 1.2fr 1fr"><span>Recibo al aprobar la causación</span><span>Todos los proveedores</span><Estado texto="Activa" tono="bien" /></Fila>
    <Fila columnas="2.2fr 1.2fr 1fr"><span>Aceptación a los 2 días hábiles</span><span>Ferretería Los Andes</span><Estado texto="Pausada" tono="gris" /></Fila>
  </Ventana>
);
