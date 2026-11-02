# Módulo de nómina y nómina electrónica

## Estado: disponible
Verificado en el código de la plataforma (repo `platform`, 02/11/2026) y confirmado por el equipo: la nómina electrónica sale de la misma habilitación DIAN que la facturación electrónica (flujo 20). Reemplaza la descripción de agosto de 2026, que daba la emisión como prevista.

## Cuánto cuesta
- La administración de nómina se cobra por **cupos de empleados al mes**: pagas por los cupos que eliges, no por los empleados reales. Hay precios por volumen: el total de cupos define el precio de cada cupo. Se paga con el saldo o con un acuerdo mensual pactado con el equipo.
- Si el saldo no alcanza para renovar los cupos, el módulo entra en un periodo de gracia de 3 días y luego se pausa; en pausa no se puede emitir a la DIAN.
- Cada **nómina electrónica** y cada **nota de ajuste** emitida se cobra como documento electrónico (flujo 20).
- Por confirmar con el equipo: el precio de cada cupo y sus tramos.

## Requisitos
- Activar el módulo: **Cuenta › Módulos › Nómina › Activar** (o en Configuración › Operación › Módulos), eligiendo los cupos. Solo un administrador puede activarlo.
- Para emitir nómina electrónica: la empresa habilitada ante la DIAN (flujo 20) con el tipo de documento nómina.
- Generar, revisar y confirmar nómina: administrador u operador. Aprobar la causación y cerrar periodos: administrador.

## Menú
**Nómina** tiene: Resumen; Personal (Empleados, Perfiles de cargo, Estructura, Actualización masiva de salarios); Novedades (Incapacidades, Licencias, Vacaciones, Horas extra, Préstamos, Beneficios, Novedades, Ausentismo); Liquidación (Generar nómina, Prestaciones sociales, Liquidaciones); Obligaciones (Planillas PILA, Nómina electrónica); Contabilidad (Causación contable); Informes (Costo de nómina, Reportes de periodo, Informes y certificados); Configuración (Configuración, Parámetros, Conceptos de nómina, Retención en la fuente, Fondo de Solidaridad, Centro de incorporación).

El **Resumen** muestra si el módulo está listo ("Módulo listo") o bloqueado ("Operación bloqueada"), con enlaces a lo que falta configurar.

## Pasos: configurar
1. **Configuración**, pestaña Nómina: frecuencia de pago (quincenal o mensual), pago de horas extra, riesgos laborales (ARL), doble aprobación, visto bueno profesional y otras reglas. Otras pestañas: Prestaciones sociales, Vacaciones, Jornadas laborales, Fórmulas y Cumplimiento.
2. **Parámetros** (valores legales del año), **Conceptos de nómina**, **Retención en la fuente** y **Fondo de Solidaridad**.
3. Cuentas contables por concepto, desde Causación contable (se pueden usar las sugeridas del PUC), y las cuentas de liquidaciones.

## Pasos: empleados
- **Nómina › Empleados › Nuevo empleado**: pasos Personales, Laboral (relación laboral, fecha de ingreso, tipo de contrato, tipo de salario, modalidad, cargo), Salario, Bancarios y Seguridad social (estos dos son opcionales). Se puede adjuntar el contrato en PDF.
- **Importar** carga empleados desde Excel o CSV con la plantilla. **Completar datos** muestra los que tienen información pendiente.
- **Centro de incorporación**: trae el histórico ya liquidado desde World Office, Siigo Nómina, Helisa, Alegra Nómina, Contai u otro sistema. El histórico queda de solo lectura y no genera PILA, contabilidad ni documentos DIAN.
- Los contratistas por prestación de servicios no van por nómina: se manejan con documento soporte (flujos 13 y 20).

## Pasos: ciclo de cada periodo
1. **Novedades**: incapacidades, licencias, vacaciones, horas extra, préstamos, beneficios y descuentos recurrentes, cada una en su pantalla. Los jefes de área pueden enviar solicitudes. Estados: Borrador, Aprobada, Rechazada, Consumida, Anulada.
2. **Generar nómina**: elige año, mes y tipo de periodo (primera quincena, segunda quincena o mensual) y pulsa **Calcular vista previa**. Revisa a cada empleado y pulsa **Confirmar y generar nómina**. Un periodo confirmado se puede deshacer con **Anular o corregir período**, y se descarga en Excel.
3. **Nómina electrónica**: desde Generar nómina, **Emitir a la DIAN** para el periodo o por empleado (o automático al confirmar, si se activa). Con pago quincenal se emite el acumulado del mes, un documento por empleado; con pago mensual se puede emitir cada liquidación. El estado por empleado se ve en Obligaciones › Nómina electrónica, y las correcciones se hacen con **notas de ajuste**.
4. **Planillas PILA** (formato AT2-v09): **Generar planilla PILA** con el mes completo confirmado, **Descargar TXT**, **Radicar planilla** y **Marcar como pagada**.
5. **Causación contable**: cuentas contables, vista previa del asiento, comprobante y **Aprobar causación** (se puede revertir).
6. **Pago**: Tesorería › Pago de nómina, con desprendibles por correo y lotes bancarios (requiere Tesorería, que activa el equipo).
7. **Prestaciones sociales**: prima (junio y diciembre), cesantías, intereses a las cesantías y anticipos.
8. **Informes**: costo de nómina, reportes de periodo, certificado de ingresos y retenciones y formulario 2276.

## Pasos: liquidar un contrato
**Liquidación › Liquidaciones**: **Simular liquidación**, **Crear liquidación**, **Liquidar**, **Causar liquidación** y registrar el pago. Calcula cesantías, intereses, prima, vacaciones, salario pendiente e indemnización (sin justa causa o justa causa invocada por el trabajador). Se exporta en PDF o como tirilla.

## Errores comunes
- PILA bloqueada: necesita el mes completo confirmado.
- Elegir "cada liquidación" con pago quincenal: la DIAN pide el acumulado del mes.
- Saldo sin cubrir los cupos: el módulo se pausa y no deja emitir.
- Diferencias de redondeo en salarios y horas extra según la jornada configurada.
- La radicación de incapacidades ante EPS o ARL se hace por fuera; núvara lleva el registro y la cuenta por cobrar.

## Para el equipo
- El diálogo de activación se titula "Activar Nómina electrónica" aunque compra cupos de administración de nómina.
- Los mensajes de saldo dicen "Nuvicoins"; por marca se dice créditos.
