# Facturas del exterior, importación manual y legalización de gastos

## Objetivo
Causar soportes que no vienen de la DIAN ni del correo: facturas del exterior y de importación, cuentas de cobro, cajas menores, gastos de viaje y comprobantes sin factura electrónica.

## Qué está disponible y qué está en desarrollo
| Tema | Estado |
|---|---|
| Importación manual de PDF, XML o zip en Causaciones | Disponible |
| Módulo de legalización de gastos en Operaciones | Descrito por el asesor como disponible; la legalización masiva figura en desarrollo (ver `por-confirmar.md`) |
| Subir pagos desde el comprobante en la legalización | No disponible: la conciliación se hace aparte |
| Lectura óptica (OCR) de escaneos y traducción de idiomas asiáticos | En desarrollo, sin fecha |
| Recibir cuentas de cobro en PDF por correo o chat y extraer los datos | Idea; no es una función disponible |
| Asignar cuentas por grupos en facturas de importación con IVA y gasto | No disponible: hoy es línea por línea |

<!-- fuentes: h-2eed69e6f27f, h-6efbb6e48a66, h-e5a14f4a5436 -->

## Requisitos
- Los soportes en PDF, XML o carpeta comprimida (zip).
- Empresa con perfil contable listo (flujo 01).

## Pasos
1. Entra a **Operaciones → Causaciones**.
2. Usa la **importación manual** de archivos (PDF, XML o zip). Es útil cuando el correo registrado en el RUT es de la gerencia y las facturas se reenvían, o cuando el soporte no existe en la DIAN.
3. Si el documento no tiene NIT o es muy atípico, sube ejemplos variados al asesor para que revise la lectura.
4. Para **gastos de viaje u otros que se legalizan**, abre el módulo de **legalización de gastos** (en Operaciones). Allí se cargan los comprobantes de cada gasto.
5. Los pagos en moneda extranjera se convierten con la TRM; los comprobantes en otros idiomas se pueden traducir con la ayuda de la plataforma (se habló de ampliar idiomas, incluidos asiáticos).
6. Exporta a Excel si necesitas una hoja de trabajo para generar los **documentos soporte** (ver flujo 13 para saber cuándo aplican).
7. Para emitir documentos soporte de forma masiva (por ejemplo a comisionistas o prestadores), el asesor indica que se adapta el formato de archivo a la forma de trabajo de la empresa.

## Cuentas de cobro de proveedores sin factura electrónica
- Para proveedores del régimen simple que usan cuentas de cobro, la contadora las ingresaba a mano desde un Excel que luego imprimía. Solo necesita valor, NIT del proveedor y la cuenta de gasto contra la 2335.
- Para evitar el papel, se planteó recibir el PDF por correo o chat y que la plataforma extraiga los datos (la foto sería el último recurso). Es una idea, no una función disponible.

<!-- fuentes: h-2eed69e6f27f -->

## Caja menor
Son gastos pequeños sin factura electrónica (recibos de caja, tirillas) que se pagan al instante.
1. Llévalos en un Excel con a quién se compró, qué, fecha y valor, y agrega las columnas de **cuenta contable** y **NIT**.
2. Súbelo como **archivo plano** para causar sin digitar uno por uno.
3. Si hay IVA, quien llena el Excel debe separar el valor base del IVA; el contador pone la cuenta de gasto IVA según la tarifa (5 % o 19 %). Si no lo separan, todo queda en el gasto.
4. La caja menor no lleva retención porque los valores no alcanzan los topes: solo IVA y gasto.
5. La contrapartida va contra la caja, o contra una cuenta por pagar de acreedores; el desembolso del banco a la caja cancela esa contrapartida.
6. Regla del contador: todo se causa por **devengo**, no por caja, y todo debe pasar primero por cuentas por pagar.
- Los gastos sin documento electrónico (intereses bancarios, extractos) no llegan por la DIAN: se causan con comprobante de gasto (ver flujo 21).

<!-- fuentes: h-ed9c331e7c17, h-6518cb30d010 -->

## Facturas de importación (nacionalización, aranceles e IVA)
Las facturas de un transportista internacional traen varios conceptos en una sola factura: valor de nacionalización, aranceles e IVA descontable, y el IVA va discriminado dentro de la factura.
1. Solución provisional: cambia la cuenta de la línea de IVA a la 2408 (IVA descontable).
2. Selecciona las otras líneas y asígnales la cuenta de gasto (6205) para cuadrar las dos partes.
- Limitación: la plataforma no deja agrupar las líneas en dos grupos (IVA y gasto). La 2408 se trata siempre como IVA y bloquea la asignación en bloque, así que hay que seleccionar línea por línea. Es un dolor reconocido.

<!-- fuentes: h-e5a14f4a5436 -->

## Legalización de gastos de conductores y transporte
- Una empresa de transporte legaliza los gastos de los conductores con facturas que llegan desordenadas (dos a cuatro meses juntas) y de varias placas.
- Método que prefiere: cruzar primero los pagos del banco y luego lo que queda con caja.
- Dolores: en la legalización no se pueden subir los pagos desde el comprobante, por eso la conciliación se hace aparte; y el desorden y el atraso de las facturas vuelven pesada la legalización.

<!-- fuentes: h-6efbb6e48a66 -->

## Errores comunes
- Esperar que la lectura funcione igual con escaneos de baja calidad: se mencionó la lectura óptica (OCR) como mejora; conviene pedir el PDF original. Las facturas físicas en papel no son la base de la plataforma.
- Comprobantes que no dicen en qué se gastó (transporte, comida): hay que clasificar a mano.
- No tener listos los requisitos de habilitación ante la DIAN para emitir documentos soporte.
- Subir la caja menor sin separar el IVA de la base: todo queda en el gasto.

<!-- fuentes: h-3bfcdd9e3190, h-ed9c331e7c17 -->

## Tips del asesor
- Habilitar la emisión de documentos soporte pide documentos de la empresa (Cámara de Comercio, datos del representante legal y su cédula).
- Se puede pedir incluir el número de factura antes de la descripción de cada ítem para los informes de la gerencia.

## Por confirmar
Alcance real de la emisión de documentos soporte desde núvara (ver `por-confirmar.md`).
