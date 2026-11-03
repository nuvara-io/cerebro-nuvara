---
id: facturas-del-exterior
titulo: Facturas del exterior y legalización de gastos
publico: P
actualizado: 2026-11-02
conexiones:
  - notas-credito-y-documento-soporte  # documento soporte de una compra al exterior
  - emitir-documento-soporte           # emitirlo desde la legalización
fuentes:
  - conocimiento/flujos/15-facturas-del-exterior-y-legalizacion-de-gastos.md
  - conocimiento/preguntas-frecuentes.md
  - platform@5241b3430
---

# Facturas del exterior y legalización de gastos

Cómo causar lo que no llega por la DIAN ni como factura electrónica: facturas de proveedores del exterior, recibos de viaje o de tarjeta, tirillas, cuentas de cobro y cajas menores.

## Qué es la legalización de gastos
- [P] Es la pantalla para soportar gastos de viaje o de tarjeta de crédito: subes los recibos, núvara los lee y tú revisas y decides a dónde van.
- [P] Lee facturas del exterior, hoteles y aerolíneas, tirillas y recibos de caja, recibos escritos a mano y documentos en otros idiomas y monedas.
- [P] Acepta archivos PDF, JPG y PNG, hasta 20 archivos por carga. Un archivo puede traer varios recibos.
- [P] Si un gasto no tiene soporte, puedes digitarlo con **Agregar comprobante manual**.

## Cómo se legaliza un gasto
**Operaciones › Causaciones › Acciones › Legalización de gastos**
1. [P] Arrastra los recibos del viaje o de la tarjeta y pulsa **Leer N archivos** (hasta 50 MB por archivo).
2. [P] Revisa cada recibo: proveedor, fecha, moneda, valores, categoría del gasto y cuenta. Corrige lo que haga falta.
3. [P] Elige la TRM: **Fecha del gasto** o **Fecha de la legalización**. Se aplica a las filas donde no escribiste la TRM a mano.
4. [P] En la pestaña **Enviar a causación**, elige **Una factura por recibo** o **Un solo comprobante**, y pulsa enviar.
5. [P] O en la pestaña **Comprobante para Siigo**, llena la cuenta y el NIT de la contrapartida (normalmente la tarjeta y su banco), el código del comprobante y el NIT genérico del exterior, y pulsa **Descargar Excel para Siigo**.
6. [P] Si necesitas una hoja de trabajo, usa **Exportar datos a Excel**.

## Moneda extranjera y TRM
- [P] Los recibos en otra moneda se convierten a pesos con la TRM de la fecha que elijas.
- [P] Puedes escribir la TRM a mano en una fila; esa fila no cambia al cambiar el modo.
- [P] Los proveedores del exterior sin tercero en la empresa se registran con el **NIT genérico del exterior** que defines en los parámetros.

## Documento soporte de un gasto del exterior
- [P] La factura de un proveedor del exterior no es una factura legal en Colombia: el soporte deducible es el **documento soporte** que emites tú.
- [P] Si tienes habilitada la emisión de documento soporte, desde el detalle de un recibo puedes pulsar **Emitir documento soporte**.
- [P] A los recibos que ya son factura electrónica (traen CUFE) no se les ofrece documento soporte.
- [P] Cuándo aplica el documento soporte está en el núcleo `notas-credito-y-documento-soporte`.

## Importación manual de facturas
- [P] Para un PDF que no llegó por la DIAN ni por el correo, usa **Operaciones › Causaciones › Acciones › Importación manual**: acepta PDF, JPG y PNG de hasta 15 MB.
- [P] Para un XML o un .zip descargado de la DIAN, usa **Acciones › Importar XML/ZIP de la DIAN**.
- [P] Un PDF sin XML no es una factura electrónica válida; si el proveedor no factura, va con documento soporte.
- [P] Si un documento es muy atípico o sin NIT, pide el PDF original y no un escaneo de baja calidad.

## Caja menor y cuentas de cobro
- [P] La caja menor son gastos pequeños sin factura electrónica. Llévalos en un Excel con proveedor, NIT, fecha, valor y cuenta contable, y súbelo como archivo plano.
- [P] Si hay IVA, sepáralo del valor base al llenar el Excel; si no, todo queda en el gasto.
- [P] La caja menor no lleva retención porque los montos no alcanzan los topes: solo IVA y gasto.
- [P] Las cuentas de cobro de proveedores que no facturan necesitan valor, NIT y cuenta de gasto contra la cuenta por pagar.

## Facturas de importación (nacionalización)
- [P] La factura del transportista internacional trae en una sola factura nacionalización, aranceles e IVA.
- [P] Pon la línea de IVA en la cuenta de IVA descontable (2408) y las demás líneas en la cuenta de gasto o costo que corresponda.
- [P] Hoy esa asignación se hace línea por línea: la plataforma no deja agrupar las líneas de IVA y de gasto en bloque.

## Para el equipo
- [C] La legalización masiva, la lectura de idiomas asiáticos y recibir cuentas de cobro por chat se mencionaron como mejoras sin fecha. No las prometas.
- [C] Subir los pagos desde el comprobante en la legalización no existe: la conciliación se hace aparte.
- [I] En el menú lateral, **Legalización de gastos** está oculta temporalmente (`TEMP_VISIBLE_OPERATIONS` en `sidebar-operations-items.ts`); se entra desde **Acciones** en Causaciones o desde Facturación Electrónica, si el documento soporte está habilitado.
- [I] `flujos/15` dice que la importación manual acepta PDF, XML o zip. En el código son dos acciones: **Importación manual** (PDF, JPG o PNG, lectura de la imagen) e **Importar XML/ZIP de la DIAN**.
- [I] La pantalla de legalización nombra la lectura con la sigla de inteligencia artificial sola; en respuestas, di "la lectura de núvara".
- [I] Un recibo marcado como colilla de nómina (`documentKind = payroll`) nunca se causa por legalización.
