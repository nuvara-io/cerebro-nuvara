import { color } from "../brand/tokens";
import { t } from "./kit";
import { Boton, Estado, Fila, Ventana } from "./PanelesFE";

// Paneles ilustrativos de nómina, con datos ficticios: PILA, causación, novedades,
// pago y costo no tenían datos en la empresa usada. Con capturas reales se reemplazan.
// Las pantallas existen en la plataforma (apps/web/.../payroll y treasury/pagos-nomina).

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

export const PanelNovedades: React.FC = () => (
  <Ventana titulo="Novedades del periodo" ruta="Nómina › Novedades">
    <Fila columnas="1.6fr 1.8fr 1.1fr" cabecera><span>Empleado</span><span>Novedad</span><span>Estado</span></Fila>
    <Fila columnas="1.6fr 1.8fr 1.1fr"><span>Laura Méndez</span><span>Incapacidad EPS · 3 días</span><Estado texto="Aprobada" tono="bien" /></Fila>
    <Fila columnas="1.6fr 1.8fr 1.1fr"><span>Andrés Torres</span><span>Recargo dominical · 8 h</span><Estado texto="Aprobada" tono="bien" /></Fila>
    <Fila columnas="1.6fr 1.8fr 1.1fr"><span>Camila Rojas</span><span>Vacaciones · 6 días</span><Estado texto="Solicitud del jefe" tono="espera" /></Fila>
    <Fila columnas="1.6fr 1.8fr 1.1fr"><span>Julián Gómez</span><span>Préstamo · cuota 2 de 6</span><Estado texto="Recurrente" tono="azul" /></Fila>
    <Fila columnas="1.6fr 1.8fr 1.1fr"><span>Paula Herrera</span><span>Auxilio no salarial</span><Estado texto="Pacto" tono="gris" /></Fila>
    <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
      <Boton texto="Aprobar novedades" />
      <Boton texto="Registrar novedad" secundario />
    </div>
  </Ventana>
);

export const PanelPago: React.FC = () => (
  <Ventana titulo="Lote bancario de nómina" ruta="Tesorería › Pago de nómina">
    <Fila columnas="2fr 1.3fr 1.1fr" cabecera><span>Paso</span><span>Fecha</span><span>Estado</span></Fila>
    <Fila columnas="2fr 1.3fr 1.1fr"><span>Revisar y aprobar</span><span>30 de octubre</span><Estado texto="Hecho" tono="bien" /></Fila>
    <Fila columnas="2fr 1.3fr 1.1fr"><span>Descargar archivo PAB</span><span>30 de octubre</span><Estado texto="Hecho" tono="bien" /></Fila>
    <Fila columnas="2fr 1.3fr 1.1fr"><span>Resultado del banco</span><span>31 de octubre</span><Estado texto="Hecho" tono="bien" /></Fila>
    <Fila columnas="2fr 1.3fr 1.1fr"><span>Conciliar lote</span><span>—</span><Estado texto="Pendiente" tono="espera" /></Fila>
    <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
      <Boton texto="Conciliar lote" />
      <Boton texto="Enviar desprendibles" secundario />
    </div>
  </Ventana>
);

const BARRAS = [
  ["Salarios", 0.72],
  ["Aportes del empleador", 0.42],
  ["Prestaciones", 0.3],
  ["Horas extra y recargos", 0.14],
] as const;

export const PanelCosto: React.FC = () => (
  <Ventana titulo="Costo de nómina" ruta="Nómina › Informes › Costo">
    <p style={t(17, { fontWeight: 600, color: color.gray700 })}>En qué se va la nómina</p>
    <div style={{ display: "grid", gap: 10 }}>
      {BARRAS.map(([nombre, valor]) => (
        <div key={nombre} style={{ display: "grid", gridTemplateColumns: "1.5fr 2fr", gap: 12, alignItems: "center" }}>
          <span style={t(16, { color: color.gray700 })}>{nombre}</span>
          <div style={{ height: 14, borderRadius: 7, background: color.gray100 }}>
            <div style={{ width: `${valor * 100}%`, height: "100%", borderRadius: 7, background: color.accent }} />
          </div>
        </div>
      ))}
    </div>
    <p style={t(17, { fontWeight: 600, color: color.gray700, marginTop: 8 })}>Biblioteca de informes</p>
    <Fila columnas="2fr 1fr"><span>Incapacidades y licencias por quién las asume</span><Estado texto="Excel" tono="azul" /></Fila>
    <Fila columnas="2fr 1fr"><span>Certificado de ingresos y retenciones</span><Estado texto="PDF" tono="azul" /></Fila>
    <p style={t(13, { color: color.gray500, marginTop: 4 })}>Datos de ejemplo.</p>
  </Ventana>
);
