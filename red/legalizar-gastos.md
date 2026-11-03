---
id: legalizar-gastos
tipo: procedimiento
titulo: Legalizar gastos de viaje o de tarjeta
tema: facturas-del-exterior
publico: P
estado: verificado en el código
ruta: [Operaciones, Causaciones, Acciones, Legalización de gastos]
url: /{organización}/companies/{empresa}/legalizaciones
siguiente: emitir-documento-soporte
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/15-facturas-del-exterior-y-legalizacion-de-gastos.md
  - platform@5241b3430
---

# Legalizar gastos de viaje o de tarjeta

## Antes de empezar
- [P] Tienes los recibos del viaje o de la tarjeta en PDF, JPG o PNG: hasta 20 archivos por carga, de hasta 50 MB cada uno. Un archivo puede traer varios recibos.
- [P] Si vas a mandar un solo comprobante, ten a mano la contrapartida (normalmente la tarjeta y su banco) y el NIT genérico del exterior.
- [P] La pantalla no está en el menú lateral: se entra desde **Acciones** en Causaciones.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, abre **Acciones** y elige **Legalización de gastos**.
2. [P] Arrastra los recibos o haz clic para elegirlos, y pulsa **Leer N archivos**. Si un gasto no tiene soporte, usa **Agregar comprobante manual**.
3. [P] Revisa lo que leyó núvara en cada recibo: emisor, fecha, moneda, total y notas. Corrige lo que haga falta y desmarca los recibos que no van.
4. [P] En **TRM por fecha de**, elige **Fecha del gasto** o **Fecha de la legalización**. Se aplica a las filas sin TRM escrita a mano.
5. [P] En la pestaña **Enviar a causación**, elige **Una factura por recibo** o **Un solo comprobante** y pulsa **Enviar N a causación** (o **Enviar comprobante con N recibos**).
6. [P] Si prefieres llevarlo a Siigo por archivo, ve a la pestaña **Comprobante para Siigo**, llena los parámetros (cuenta y NIT de la contrapartida, código del comprobante, NIT genérico del exterior) y pulsa **Descargar Excel para Siigo**.

## Resultado
- [P] Aparece «Envío a causación» (o «Comprobante enviado a causación») con el botón **Ver causaciones**: ahí revisas y apruebas lo que preparó núvara.
- [P] Con la otra pestaña, descargas el Excel del comprobante para subirlo a Siigo.
- [P] **Exportar datos a Excel** te deja una hoja de trabajo con lo leído y editado.

## Si algo falla
- [P] El botón de enviar está apagado y debajo dice «Falta la TRM en N líneas», «Falta el emisor…» o «Falta el NIT de la contrapartida»: completa esos datos en las filas.
- [P] «No se agregaron por superar 50 MB»: divide el PDF o súbelo en imágenes.
- [P] «Los recibos con documento soporte se causan desde su DS»: sácalos del comprobante agrupado o usa **Una factura por recibo**.
- [P] «Ese comprobante ya existía»: ya lo habías enviado; búscalo en Causaciones.
