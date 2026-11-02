---
id: notas-credito-y-documento-soporte
titulo: Notas crédito, notas débito y documentos soporte
publico: P
actualizado: 2026-11-02
conexiones:
  - causar-y-revisar          # cómo queda causada la nota o el documento soporte
  - emitir-documento-soporte  # emitir uno propio desde Facturación Electrónica
  - facturas-del-exterior     # documento soporte de una compra al exterior
fuentes:
  - conocimiento/flujos/13-notas-credito-y-documentos-soporte.md
  - conocimiento/glosario.md#contables-y-tributarios
  - platform@5241b3430
---

# Notas crédito, notas débito y documentos soporte

Cómo trata núvara las notas crédito y débito que te llegan de tus proveedores y los documentos soporte de compras a quien no factura electrónicamente: cómo llegan, cómo se causan y cómo salen al programa contable.

## Cómo llegan las notas crédito y débito
- [P] Llegan por la DIAN o por el correo, igual que las facturas, y aparecen en **Operaciones › Causaciones**.
- [P] Para verlas solas, usa el filtro de tipo de documento: en compras tiene **Todos**, **Facturas**, **Doc. soporte** y **Notas**; en ventas, **Facturas** y **Notas**.
- [P] La DIAN trata la nota crédito como un documento aparte y con su valor bruto: no descuenta sola el valor de la factura original.
- [P] Los descuentos por pronto pago suelen llegar como notas crédito pequeñas: selecciónalas en la lista y caúsalas juntas.

## Cómo se causa una nota crédito
- [P] La nota crédito se causa con el **movimiento inverso** de la factura: el proveedor va al débito y la compra o el inventario se reversan.
- [P] La nota débito hace lo contrario: aumenta la cuenta por pagar.
- [P] Cada nota se contabiliza con su propio comprobante, no con el de la factura de compra.
- [P] Si quieres reflejar un descuento, agrega una cuenta de descuentos en compras.
- [P] Antes de exportar, abre **Ver causación** y confirma que la nota ya quedó revisada.

## Relacionar la nota con la factura original
- [P] núvara toma del XML de la nota la referencia a la factura que afecta y las vincula solas.
- [P] Si el XML no trae la referencia, puedes relacionarlas a mano desde la causación.
- [P] Si la nota llega antes que la factura, caúsala, déjala pendiente y relaciónala cuando llegue la factura, para que salgan vinculadas en la exportación.

## Cómo exportar las notas crédito sin rechazos
- [P] Crea en tu programa contable un **comprobante propio** para las notas crédito y otro para los documentos soporte. Si usas el de la factura de compra, la nota hereda un consecutivo equivocado.
- [P] Configura una **cuenta de IVA de devolución** (pasivo, grupo 24) y no lleves la nota a la cuenta de IVA descontable de las compras: Siigo la rechaza.
- [P] En Siigo, la nota crédito de compra (devolución) va en un **comprobante contable**, no en el tipo NC de compras. Lo asignas en el **Archivo**, en la configuración de Siigo, en la tabla de tipos de documento.
- [P] Una nota sin tipo de comprobante ni consecutivo no se exporta: asígnale su comprobante y vuelve a exportar.

## Qué es un documento soporte y cuándo aplica
- [P] Lo genera **quien compra**, no quien vende, para soportar compras a personas naturales **no obligadas a facturar electrónicamente** (honorarios, servicios, cuentas de cobro). Así el gasto es deducible.
- [P] A una persona jurídica colombiana nunca se le hace documento soporte: exígele la factura. Si no la entrega, el gasto queda como no deducible.
- [P] Una persona natural responsable de IVA es facturadora electrónica y no lleva documento soporte.
- [P] Excepción: suscripciones y servicios de proveedores del exterior sí llevan documento soporte; guarda su recibo como anexo.
- [P] Las facturas en papel y las compras en un comercio sin factura no tienen documento soporte.

## Cómo se causa un documento soporte
- [P] Los documentos soporte que emites aparecen en la DIAN como **emitidos**, no como recibidos. Se emiten como venta pero se **causan como compra**.
- [P] Si ya los emites en tu programa contable y quedan causados allá, no los vuelvas a causar en núvara.
- [P] Si tienes la facturación electrónica habilitada, puedes emitirlos desde núvara (ver la neurona `emitir-documento-soporte`).
- [P] Al crear el tercero, marca si está obligado a facturar electrónicamente según su RUT. Si un facturador no queda marcado, le emites documentos soporte y su ingreso queda reportado dos veces ante la DIAN.
- [P] En la comparación con la DIAN, los documentos soporte emitidos aparecen en su propio grupo; no son facturas que falten.

## Errores comunes
- [P] **La nota crédito no sale en la exportación**: casi siempre falta la cuenta de IVA de devolución o el comprobante propio.
- [P] **Esperar que la nota descuente sola la factura**: la DIAN las trata por separado; el cruce se ve en la causación.
- [P] **Factura de internet con saldo a favor**: el total a pagar es menor que el consumo; regístrala a mano por el valor consumido.

## Para el equipo
- [C] La nota crédito parcial (devolver un solo producto de varios) no se ha probado con un caso real. No la prometas.
- [C] Bloquear el documento soporte cuando el tercero es facturador electrónico figuraba como en desarrollo en abril de 2026; sin confirmar.
- [I] La factura afectada se guarda en `related_invoice_id` y se resuelve desde el `BillingReference` del XML o a mano desde la interfaz.
- [I] En el formato personalizado de exportación las notas crédito van como tipo 14, no 09 (dato de capacitación, no verificado en el código).
- [I] El texto de la tabla de tipos de documento de Siigo sale del componente `siigo-document-type-mappings-section`; el `flujos/13` decía "comprobante propio" sin precisar que en Siigo es comprobante contable.
