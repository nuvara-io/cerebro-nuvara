import { color } from "../brand/tokens";
import { t } from "./kit";
import { Boton, Estado, Fila, Ventana } from "./PanelesFE";

// Paneles ilustrativos de nómina, con datos ficticios: PILA y causación contable
// estaban vacías en la empresa usada. Con capturas reales se reemplazan.

export const PanelObligaciones: React.FC = () => (
  <Ventana titulo="Obligaciones del periodo" ruta="Nómina › Obligaciones">
    <p style={t(17, { fontWeight: 600, color: color.gray700 })}>Nómina electrónica</p>
    <Fila columnas="2fr 1.2fr"><span>Laura Méndez Ríos</span><Estado texto="Aceptado" tono="bien" /></Fila>
    <Fila columnas="2fr 1.2fr"><span>Andrés Felipe Torres</span><Estado texto="Aceptado" tono="bien" /></Fila>
    <Fila columnas="2fr 1.2fr"><span>Camila Rojas Peña</span><Estado texto="Esperando respuesta" tono="azul" /></Fila>
    <p style={t(17, { fontWeight: 600, color: color.gray700, marginTop: 8 })}>Planilla PILA</p>
    <Fila columnas="2fr 1.2fr"><span>Mes en curso · formato AT2-v09</span><Estado texto="Radicada" tono="azul" /></Fila>
    <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
      <Boton texto="Emitir a la DIAN" />
      <Boton texto="Descargar TXT" secundario />
    </div>
  </Ventana>
);

export const PanelAsiento: React.FC = () => (
  <Ventana titulo="Vista previa del asiento" ruta="Nómina › Contabilidad › Causación contable">
    <div>
      <Fila columnas="2.4fr 1fr 1fr" cabecera><span>Cuenta PUC</span><span>Débito</span><span>Crédito</span></Fila>
      <Fila columnas="2.4fr 1fr 1fr"><span>510506 · Sueldos</span><span>$8.100.000</span><span /></Fila>
      <Fila columnas="2.4fr 1fr 1fr"><span>2370 · Aportes de nómina</span><span /><span>$648.000</span></Fila>
      <Fila columnas="2.4fr 1fr 1fr"><span>2505 · Salarios por pagar</span><span /><span>$7.452.000</span></Fila>
      <Fila columnas="2.4fr 1fr 1fr"><strong>Total</strong><strong>$8.100.000</strong><strong>$8.100.000</strong></Fila>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
      <Estado texto="Cuadrado" tono="bien" />
      <Boton texto="Aprobar causación" />
    </div>
  </Ventana>
);
