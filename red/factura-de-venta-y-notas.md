---
id: factura-de-venta-y-notas
titulo: Factura de venta y notas
publico: P
actualizado: 2026-11-03
conexiones:
  - facturacion-electronica-y-radian
  - ventas-y-autorretencion   # cómo queda causada la venta emitida
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@5241b3430
---

# Factura de venta y notas

Cómo se arma una factura de venta electrónica en núvara, qué datos lleva, cómo se ajusta con notas crédito y débito y qué estados tiene.

## Qué lleva una factura
- [P] **Comprador:** identificación (CC, NIT, cédula de extranjería, tarjeta de extranjería, pasaporte, documento extranjero o NIT de otro país), nombre o razón social, correo, teléfono, dirección y municipio, tipo de organización (persona jurídica o natural), régimen (responsable o no de IVA) y responsabilidad tributaria (gran contribuyente, autorretenedor, agente de retención de IVA o no aplica).
- [P] Para consumidor final se usa el NIT 222222222222 y no se exigen correo ni teléfono.
- [P] **Líneas:** producto o servicio, descripción, cantidad, precio unitario e IVA (0 %, 5 % o 19 %). Por defecto los precios **ya incluyen IVA**; puedes cambiarlo.
- [P] **ReteIVA:** 15 % general, 100 % por servicios desde el exterior o un porcentaje personalizado.
- [P] **Pago:** **Contado** (con medio de pago: efectivo, consignación, transferencia, tarjeta de crédito o débito) o **Crédito** (con fecha de vencimiento, por defecto a 30 días).
- [P] **Notas al pie:** hasta 500 caracteres.

## Formas de llenarla
- [P] Modo **Factura**: toda en una hoja. Modo **Paso a paso**: comprador, líneas y pago.
- [P] **Vista previa** genera el PDF real sin emitir ni gastar consecutivo.
- [P] Los compradores se crean desde la búsqueda del formulario, subiendo su RUT en PDF o con los datos básicos. Los productos se toman del catálogo **Productos y servicios**.

## Estados de un documento
- [P] **En cola** → **Enviado a DIAN** → **Aceptado**. Si algo sale mal: **Rechazado** (la DIAN lo devolvió) o **Falló envío** (no llegó).
- [P] Si el envío quedó sin confirmar, la plataforma muestra "No reemitas: verifica en la DIAN": pulsa **Verificar en la DIAN** antes de volver a emitir.
- [P] Si intentas emitir una factura igual a otra aceptada hace menos de 15 minutos, la plataforma te pregunta si de verdad quieres emitir otra.

## Notas crédito y débito
- [P] La **nota crédito** disminuye o anula: devolución parcial, anulación de la factura, rebaja o descuento, ajuste de precio, concepto a cuenta del IVA descontable u otros.
- [P] La **nota débito** aumenta: intereses, gastos por cobrar, cambio del valor u otros.
- [P] Se asocia a una factura **aceptada** (búsqueda o, si es anterior a núvara, con número, fecha y CUFE). Las líneas a ajustar se escriben: no se copian de la factura.
- [P] No hay selector de parcial o total: lo define el motivo y los valores que escribes. Para anular, usa el motivo de anulación por el valor total.

## Después de emitir
- [P] Desde el resultado descargas el **PDF** y el **XML** y validas en la DIAN con el código QR.
- [P] En **Documentos** buscas, filtras por estado, **reenvías por email** (facturas y notas aceptadas), copias el CUFE, exportas a Excel o al libro auxiliar en PDF y ves los eventos RADIAN de tus ventas a crédito.
- [P] Con Tesorería, una venta de contado queda en la caja o cuenta bancaria, y una a crédito en cuentas por cobrar.

## Quién puede
- [P] Emitir facturas y notas, reintentar y reenviar: administrador, operador o contador. El rol de solo lectura consulta y exporta.

## Para el equipo
- [I] La plataforma no guarda borradores: si sales del formulario, se pierde lo escrito.
- [I] El filtro de tipo en Documentos no tiene la nota de ajuste del documento soporte.
- [I] La consulta automática de estado en la DIAN depende de una activación de la plataforma; mientras tanto, el estado se verifica con **Consultar en la DIAN**.
