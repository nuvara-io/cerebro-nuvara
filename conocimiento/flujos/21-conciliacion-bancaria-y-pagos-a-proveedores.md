# Conciliación bancaria y pagos a proveedores

## Estado: en desarrollo, no la presentes como disponible
- **Conciliación bancaria:** el sitio oficial la ofrece con extractos importados (PDF de Bancolombia, Davivienda y Nu, o CSV). En las sesiones figuraba como **en desarrollo**, y una sesión de abril de 2026 la veía inviable en su versión completa sin antes tener otros documentos (ver abajo). Se habló de ofrecer primero un **cruce parcial**. Alcance real sin confirmar (ver `por-confirmar.md`).
- **Pagos a proveedores desde la cuenta por pagar** (comprobantes de egreso): idea y módulo de egresos en desarrollo; sin fecha. Un fundador opinó que núvara no debería cancelar cuentas por pagar y que el pago se puede ajustar al exportar.
- Lo que sí existe hoy es la causación de compras y ventas (flujos 05 y 14). Primero va la causación bien hecha; la conciliación es una **segunda etapa**.

<!-- fuentes: h-2eed69e6f27f, h-3bfcdd9e3190, h-6518cb30d010 -->

## Objetivo
Cruzar los pagos del banco con las facturas causadas para registrar el pago, cancelar la cuenta por pagar o por cobrar y dejar las diferencias para resolver a mano.

## Requisitos
- Causación al día (flujo 05).
- Extracto bancario en Excel (o en el formato del banco) y, cuando aplique, el histórico del software contable en Excel.
- Una empresa que pague por banco y sea ordenada. En empresas que pagan en efectivo no hay forma de conciliar.

## Pasos: flujo manual de hoy
1. Descarga el extracto en Excel.
2. Saca el histórico del software contable en Excel.
3. Cruza por **valor**; lo que no cruza se revisa.

## Pasos: cómo se planteó la conciliación en núvara (en desarrollo)
1. Sube el extracto bancario (Excel o formato del banco).
2. La plataforma relaciona los pagos con las facturas por **valor** y usa la **fecha** de apoyo; devuelve lo que no encontró.
3. Resuelves a mano las diferencias.
4. Se genera un documento importable para el software contable.
- Se cruza por valor y no solo por fecha, porque a veces el pago no se hace el mismo día de la factura; la fecha ayuda a desempatar cuando hay varios pagos del mismo valor.
- El extracto casi nunca trae el NIT del tercero, por eso solo se cruza por valor y fecha.

<!-- fuentes: h-2eed69e6f27f, h-3bfcdd9e3190 -->

## Pagos a proveedores (idea, en desarrollo)
- Orden del flujo de una firma: causar la factura de compra, cancelarla con el pago y, a fin de mes, sacar los informes para liquidar retención e IVA.
- Idea de **pago automático** desde la cuenta por pagar: seleccionas una factura, eliges el medio de pago y la plataforma debita la cuenta por pagar y acredita banco o caja.
- Dolor: si pagas varias facturas de un mismo proveedor con un único desembolso, pagarlas una por una deja movimientos que no coinciden con lo que salió del banco. Se pide una opción de **agrupar el pago**.

<!-- fuentes: h-3bfcdd9e3190 -->

## Qué hace falta antes de una conciliación completa
Una conciliación completa exige que el registro contable del banco coincida con el extracto. Para eso se necesitan antes:
- **Recibos de caja** (ingresos).
- **Comprobantes de egreso** (pagos y salidas).
- **Registros de ajuste** (gastos bancarios, partidas internas).

Cruzar documentos que ya existen en la plataforma con pagos por banco para generar el comprobante de egreso es un **cruce de documentos pagados**, no una conciliación bancaria completa. Otras plataformas ofrecen "conciliación de ventas con bancos" (aplicar pagos a facturas de venta, actualizar estados y generar un informe), sin ser conciliación completa. Sin facturación, documento soporte, recibos de caja y comprobantes de egreso, solo se vería viable ofrecer un cruce parcial.

<!-- fuentes: h-6518cb30d010 -->

## Cómo se registran los ingresos y los ajustes (según el planteamiento de abril de 2026)
- **Recibo de caja por facturas:** paga facturas pendientes de cartera, total o parcialmente.
- **Recibo de caja por otros:** ingreso sin factura, como un anticipo de un comprador.
- **Anticipo:** se registra como recibo de caja por otros contra una cuenta de anticipo de clientes. Al llegar la factura, se hace un recibo de caja por factura con el medio **"cruce con anticipo"**, que reduce el anticipo sin mover el banco.
- Un recibo de caja **no permite editar el valor de la factura** para cubrir un pago mayor; primero se registra el ingreso completo.
- **Registros de ajuste:** mueven cuentas y terceros sin soporte electrónico (por ejemplo, causar la autorretención mensual de ventas o los intereses de un crédito que no llegan como factura).
- Los gastos sin documento electrónico (intereses bancarios, extractos) se causan con **comprobante de gasto**, porque no llegan por la DIAN y no se pueden traer a la causación.

<!-- fuentes: h-6518cb30d010 -->

## Errores comunes
- Esperar conciliar con pagos en efectivo: no hay extracto contra qué cruzar.
- Pagar una por una las facturas de un único desembolso: los movimientos no coinciden con el banco.
- Querer corregir el valor de la factura desde el recibo de caja: registra primero el ingreso completo.
- Intentar traer a la causación un gasto bancario que no tiene documento electrónico: hay que usar el comprobante de gasto.

## Tips del asesor
- Empieza por la causación bien hecha; la conciliación ayuda sobre todo a empresas ordenadas que pagan todo por banco.
- Cruza por valor y usa la fecha para desempatar.
