# Notas crédito, notas débito y documentos soporte

## Objetivo
Tratar correctamente notas crédito, notas débito y documentos soporte dentro del flujo de causación, y exportarlos con el comprobante y la cuenta que corresponden.

## Qué está disponible y qué está en desarrollo
| Tema | Estado (según las sesiones, hasta agosto de 2026) |
|---|---|
| Detectar notas crédito y notas débito y mostrarlas en el listado de causaciones (prefijo NC) | Disponible |
| Filtros dedicados de notas crédito y documentos soporte en compras y ventas | Disponible desde marzo de 2026 |
| Campo para relacionar la nota crédito con la factura original | Disponible |
| Causar la nota crédito con el movimiento inverso de la factura | Disponible, con ajustes en curso |
| Nota crédito parcial (devolver o descontar un solo producto de varios) | Pendiente de probar con un caso real |
| Pegar el código de la factura cuando la nota crédito no la trae | En desarrollo (acordado por el equipo, julio de 2026) |
| Bloquear el documento soporte cuando el tercero es facturador electrónico | En desarrollo (decisión del equipo, abril de 2026) |
| Emitir documentos soporte desde núvara | Sin confirmar (ver flujo 15 y `por-confirmar.md`) |

<!-- fuentes: h-096d75ba2104, h-fccf335cc6f1, h-72ec6e3363ae, h-f8436a675e52, h-6518cb30d010, h-577942d4a1de -->

## Pasos: notas crédito y notas débito
1. La plataforma detecta las notas crédito; en el listado de causaciones empiezan por el prefijo **NC**. En la factura electrónica aparecen como subtipos del documento. Una nota crédito de venta se muestra como "ajuste", para que el total coincida con el de la factura.
2. Se causan con el **movimiento inverso** de la factura: devolución en compras, proveedor al débito, y la plataforma resta los ítems del inventario. La nota débito hace lo contrario: aumenta la cuenta por pagar. Cada una se contabiliza con su propio comprobante.
3. En la causación, usa el campo habilitado para **relacionarla con la factura original**. Para vincularla, usa la tarjeta o grupo correspondiente.
4. Si la nota crédito llega **antes** que la factura, se causa, se deja pendiente y se asocia cuando llegue la factura, para que al exportar queden vinculadas. Si esa factura no existe todavía, el campo queda vacío.
5. Si se necesita, cambia el tipo de documento desde la vista de detalle y la plataforma recalcula.
6. Antes de exportar, revisa con **ver causación** (tres puntos) que la nota crédito ya fue revisada.
7. Los **descuentos por pronto pago** llegan como notas crédito pequeñas del proveedor: selecciónalas todas desde la lista y pulsa "Causar facturas" para precausarlas en conjunto.
8. La DIAN trata las notas crédito como documentos independientes y refleja el valor bruto; los descuentos se aplican contablemente al emitir el comprobante de pago. Si quieres reflejar el descuento, agrega una cuenta de descuentos de compras.

<!-- fuentes: h-fccf335cc6f1, h-72ec6e3363ae, h-ea07c173c7f7, h-c7dee3911650, h-c7e2fc3560d2, h-2eed69e6f27f, h-3bfcdd9e3190, h-92777206d505, h-a2337e3bee2b -->

## Pasos: exportar notas crédito a Siigo
1. Crea en el software contable un **comprobante propio** para notas crédito (código, tipo y prefijo) y numera desde el consecutivo que sigue. Si usas el mismo comprobante de la factura de compra, la nota hereda un consecutivo equivocado. Hay usuarios que contabilizan sus notas crédito con un comprobante de tipo nota débito; núvara respeta el comprobante que le asignes.
2. Usa un comprobante distinto para las notas crédito por devolución y otro para los documentos soporte.
3. Configura una **cuenta de IVA de devolución** (la del pasivo de IVA por devolución, tipo 24) y vincúlala en núvara como IVA de devolución. No lleves la nota crédito a la misma cuenta de IVA descontable de las compras: Siigo la rechaza y la plataforma muestra el motivo.
4. En las notas crédito de proveedor ajusta la parametrización contable (cuenta de IVA de devolución) y no uses el cambio global de IVA.
5. Para devoluciones en ventas de servicios, la nota crédito de la factura de venta tiene su propia cuenta de IVA descontable de servicios.
6. En el formato personalizado de exportación, las notas crédito deben marcarse como **tipo 14** y no 09. Hubo un error que impedía procesarlas con ese formato; el asesor lo revisaba.
7. Al enviar el lote, verifica que las notas crédito migren bien. Los mensajes de error de exportación a Siigo ahora son más descriptivos.

<!-- fuentes: h-ea07c173c7f7, h-78a6d7ffada0, h-c18467806240, h-a2337e3bee2b, h-92777206d505, h-a8886865ddfd, h-577942d4a1de, h-568b1428fb13 -->

## Documentos soporte: cuándo aplican
- El documento soporte lo genera **quien compra**, no quien vende. Sirve para registrar compras de bienes o servicios a personas naturales **no obligadas a facturar electrónicamente** (honorarios, servicios, cuentas de cobro) y hace deducible el gasto.
- A una **persona jurídica** nunca se le hace documento soporte: está obligada a facturar y hay que exigirle la factura. Si no la entrega, el gasto queda como no deducible.
- Persona natural **responsable de IVA** es facturador electrónico y no lleva documento soporte. Persona natural **no responsable** de IVA y sin la marca de facturador electrónico sí lo lleva en cada compra o gasto.
- **Excepción:** suscripciones y servicios de entidades del exterior. Se les hace documento soporte aunque no haya datos tributarios colombianos (el tercero se crea con un identificador interno); el recibo o documento equivalente que emiten sirve de respaldo y conviene guardarlo como anexo por si hay auditoría. La factura de un proveedor del exterior no es legal en Colombia.
- Cuando un contratista no factura electrónicamente, la entidad genera el documento equivalente y se lo envía; sigue siendo digital y entra al mismo proceso.
- Los prestadores de servicios no se manejan por nómina sino por documento soporte.
- Criterio inicial del asesor contable para IVA: si el documento es factura electrónica y trae IVA, se asume IVA descontable; las compras sin factura electrónica normalmente no traen IVA.

<!-- fuentes: h-6518cb30d010, h-2eed69e6f27f, h-3bfcdd9e3190, h-d2a18ab0af93, h-66eba239a3cb -->

## Pasos: documentos soporte
1. Descárgalos desde el portal de la DIAN. Se traen como documentos **emitidos**, no recibidos (los emitidos incluyen facturas de venta, notas crédito electrónicas y documentos soporte, y los tres pueden requerir causación): filtra y toma el CUFE o la carpeta comprimida. Los documentos equivalentes se filtran por ese tipo; los documentos soporte se bajan desde "documentos enviados" o la sección de ventas.
2. Cárgalos en núvara; entran como cualquier otro documento. Se emiten como venta, pero se **causan como compra**.
3. Configura el comprobante de compra para integrarlos junto con las facturas, o uno propio para documentos soporte.
4. Ajusta las reglas de documentos soporte para que tomen la **palabra clave** y el cálculo de retención sea correcto.
5. Al **crear el tercero**, marca si es facturador electrónico ("obligado a facturar electrónicamente") y su responsabilidad de IVA según el RUT. Si un tercero que sí factura no se marca, se le emiten documentos soporte y su ingreso queda reportado dos veces ante la DIAN.
6. Cuando se emite uno, se diligencia como una factura de compra: producto (carga inventario) o gasto, cantidad, valor unitario, retenciones si aplican y forma de pago. Las notas crédito de proveedor se registran aparte: las de descuento piden solo valor y cuenta; las de devolución piden cantidades.
7. La plantilla de carga de documento soporte ya funciona; lo pendiente era el concepto de los productos.

<!-- fuentes: h-3bfcdd9e3190, h-fc2e220f7888, h-1b5ddf9047dc, h-c7e2fc3560d2, h-12027d283e58, h-6518cb30d010, h-e5a14f4a5436 -->

## Cómo lo resuelve cada usuario hoy
- Quien no tiene software contable genera el documento soporte en el aplicativo gratuito de la DIAN y luego lo causa en otro programa.
- Quien lo tiene lo emite allí y queda causado en el mismo; en ese caso núvara no lo vuelve a causar. Algunos usuarios no contabilizan los documentos soporte ni los equivalentes (por ejemplo, los que emiten las empresas de transporte de carga) y otros los ingresan a mano con su centro de costo.
- Los documentos soporte son la mayor parte de lo que queda por organizar; el resto de facturas se causa rápido cuando las reglas están configuradas.

<!-- fuentes: h-3bfcdd9e3190, h-2e1e6ac39318, h-3a9a315786c4, h-3b10fe0f0da1, h-577942d4a1de, h-6efbb6e48a66, h-12027d283e58 -->

## Errores comunes
- Esperar descuentos automáticos de la nota crédito sobre la factura.
- Esperar que el proceso completo de documentos soporte funcione solo en núvara: según una sesión, aún debían causarse y transmitirse en Siigo.
- No ver las notas crédito en la exportación: el rechazo suele deberse a que la cuenta de IVA de devolución no estaba configurada. Una firma llevaba todo el IVA a una cuenta de gasto del grupo 51 y debía crear la cuenta 24 aparte.
- Notas crédito sin tipo de comprobante ni consecutivo: no se exportan. Asígnales el comprobante propio.
- Etapas tempranas (abril a junio de 2026): las notas crédito se causaban como facturas de compra o se leían con el valor invertido y aparecían como descuadre; el usuario las corregía a mano (naturaleza de las cuentas y número del comprobante) antes de exportar. El equipo reconoció que la lógica seguía en desarrollo. Un error en el XML de una nota crédito requirió corrección de la plataforma.
- Facturas de un servicio de internet con saldo a favor: el total a pagar es menor que el consumo real y la plataforma no calcula bien el gasto; se registra a mano por el valor consumido.
- Las facturas en papel no las cubre la plataforma, porque su base es la factura electrónica; casi no son deducibles y se registran a mano para que cuadren los bancos.

<!-- fuentes: h-f8436a675e52, h-e407b9d99c2a, h-568b1428fb13, h-c18467806240, h-2e1e6ac39318, h-3bfcdd9e3190, h-fccf335cc6f1 -->

## Tips del asesor
- Algunas notas crédito requieren una revisión específica pero se integran al flujo. Una nota crédito se reconoce porque devuelve todo el crédito de la factura.
- Mientras la lógica terminaba, algunos usuarios ingresaban a mano solo las notas crédito, lo único que seguían haciendo manual.
- Conserva el documento equivalente del exterior como anexo.

<!-- fuentes: h-a2337e3bee2b, h-f8436a675e52, h-6518cb30d010 -->
