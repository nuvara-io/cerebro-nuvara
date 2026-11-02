# Tesorería: bancos, cobros, pagos, conciliación y cajas

## Estado: disponible
Verificado en el código de la plataforma (repo `platform`, 02/11/2026). Reemplaza la descripción de agosto de 2026, que daba la conciliación y los egresos como en desarrollo.

## Cómo se activa y cuánto cuesta
- **Tesorería** no se activa sola: se pide en **Cuenta › Módulos › Tesorería › Solicitar habilitación** (abre el chat) y la activa el equipo de núvara, para toda la organización o por empresa. Se cobra **según el acuerdo con núvara**.
- **Caja** (cajas operativas, arqueos y movimientos de efectivo) es un módulo aparte, con su propia tarjeta.
- Roles: el rol de consulta solo lee. Reabrir una conciliación, definir la política de aprobaciones y aprobar lotes de nómina es del administrador. Fondear y reponer cajas: administrador o contador.

## Menú
**Tesorería** (junto a Operaciones) tiene: **Bancos y cajas** (Cuentas, Cheques, Créditos, Cajas); **Cartera** (Cuentas por cobrar, Cuentas por pagar, Pago de nómina, Lotes, Anticipos a proveedores, Anticipos de clientes, Anticipos de viaje); **Soportes** (Comprobantes, Soportes recibidos, Aprobaciones); **Informes** (Movimientos, Pagos en efectivo, Reexpresión). No hay menús "Recibos de caja" ni "Egresos": se hacen como comprobante de ingreso y comprobante de egreso.

## Pasos: cuentas bancarias
1. **Tesorería › Cuentas › Nueva cuenta**: banco, alias, número, tipo (corriente, ahorros, caja menor o dólares), moneda, si es la cuenta por defecto y la cuenta PUC vinculada (grupo 11; se puede crear el auxiliar).
2. Registra el **saldo inicial** con monto y fecha.
3. Desde la cuenta: **Registrar movimiento** (entrada o salida contra una cuenta PUC) o **Transferir** a otra cuenta de la misma moneda.

## Pasos: cobros (cuentas por cobrar)
- Las facturas de venta aceptadas por la DIAN llegan a cartera si su asiento debita una cuenta 13. Las de contado se liquidan solas con un comprobante de ingreso desde la caja o banco elegidos al emitir.
1. **Tesorería › Cartera › Cuentas por cobrar** (antigüedad: al día, 1–30, 31–60, 61–90, más de 90 días).
2. Marca facturas de un mismo comprador y pulsa **Cobrar seleccionadas**.
3. En el **Comprobante de ingreso**, escribe el valor de cada factura (o usa abonar saldo, distribuir uniforme o por antigüedad), la fecha y los medios de pago (transferencia, efectivo, cheque, anticipo u otro).
4. Revisa que el asiento quede cuadrado y pulsa **Registrar ingreso**.
- Informes de cartera por factura o por comprador, en Excel o PDF, y recordatorios.

## Pasos: pagos a proveedores (cuentas por pagar)
- Las compras aprobadas o exportadas cuyo asiento acredita una cuenta por pagar aparecen aquí.
1. **Tesorería › Cartera › Cuentas por pagar** (pestañas Por pagar, Programados, Pagos).
2. Marca facturas de un mismo proveedor y pulsa **Abonar seleccionadas** (o, por fila, Abonar / comprobante de egreso).
3. En el **Comprobante de egreso**: facturas, retención (la plataforma avisa si falta retener o si hay posible doble retención), fecha, medios de pago (con el GMF 4x1000 estimado), anticipos y asiento. Pulsa **Registrar egreso**.
- **Programar pago**: deja el pago para aprobación del dueño; no mueve dinero.
- **Aprobaciones**: con la política activa, los egresos por encima de un umbral piden aprobación antes de registrarse.
- **Egreso libre** (sin factura) desde Soportes › Comprobantes.
- **Anticipo a proveedor**: Cartera › Anticipos a proveedores › Egreso de anticipo.

## Pasos: pago de nómina
**Tesorería › Cartera › Pago de nómina** (Pagos y desprendibles): pago individual con **Registrar pago y egreso**, o **lote bancario** (archivo PAB): Revisar y aprobar, Descargar PAB, Comprobar aceptación, Registrar presentación, Registrar resultado del banco y Conciliar lote. Los desprendibles se envían por correo. La nómina también puede registrar el pago sola al confirmarse.

## Pasos: conciliación bancaria
1. En **Tesorería › Cuentas**, pulsa **Conciliar** en la cuenta.
2. **Importar** el extracto: PDF de Bancolombia, Davivienda o Nu, o CSV. Si el PDF tiene clave, se escribe y no se guarda.
3. **Conciliar Auto**: cruza por reglas propias, monto exacto, monto y nombre del tercero, o monto y fecha (±5 días). Confirma solo lo muy seguro y sugiere el resto.
4. **Conciliar Manual** para lo que quede: primero la línea del banco y luego su contrapartida. Las líneas sin factura se clasifican contra una cuenta PUC (generan asiento) o se ignoran.
5. Registra las **partidas conciliatorias** (cheque girado no cobrado, consignación en tránsito, nota bancaria pendiente, error bancario).
6. **Cerrar período** (no deja líneas sin conciliar) y **Descargar informe** en PDF o Excel. Reabrir pide motivo.
- Reglas propias en Utilidades › Definición de Reglas (exacta, contiene o expresión regular).

## Pasos: cajas
En **Tesorería › Cajas** (módulo Caja): crear la caja (nombre, código, centro de costo, custodio, si opera en efectivo o con cuenta bancaria, cuenta contable, frecuencia de liquidación y de arqueo, tope de descuadre), **Registrar arqueo**, **Fondear desde el banco**, **Reponer caja** y operadores para la app móvil. Un arqueo cuadrado no genera asiento; un faltante o sobrante se lleva a una cuenta puente y lo clasifica un contador.

## Contabilidad
Ingresos, egresos, movimientos, transferencias, fondeos de caja, líneas clasificadas del extracto y pagos de nómina generan su asiento. Se ven en **Soportes › Comprobantes**, desde donde se contabilizan y se exportan (también por Archivo › Exportar como comprobante de ingreso o egreso).

## Todavía no
- Crear y exportar lotes de pago a proveedores desde la pantalla (hoy solo se listan).
- Extractos de BBVA, Banco de Bogotá y Daviplata; Davivienda aún sin validar con un extracto real.
- "Conciliar con IA", plantillas y reportes en Utilidades.

## Errores comunes
- Cobrar o pagar facturas de varios terceros a la vez: el comprobante es de un solo comprador o proveedor.
- Cerrar la conciliación con líneas pendientes: primero concilia, clasifica o ignora cada una.
- Emitir de contado sin caja o banco cuando Tesorería está activa: la plataforma lo exige.
- Pago automático de nómina sin cuenta por defecto vinculada a una cuenta contable: se omite.
