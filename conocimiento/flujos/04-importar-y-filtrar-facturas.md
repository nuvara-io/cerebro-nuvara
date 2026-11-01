# Importar, filtrar y limpiar facturas

## Objetivo
Dejar en **Pendientes** solo lo que debe causarse, asegurarte de que no falta ninguna factura y entender qué documentos entraron.

## Requisitos
- DIAN y/o correo conectados (ver flujos 02 y 03).
- Créditos en la billetera.
- Para que la importación traiga bien proveedores y cuentas, primero extrae los proveedores e importa el PUC de la empresa.

## Cómo entran las facturas
- **Compras:** tres vías que se pueden usar a la vez: correo, DIAN y carga de factura física (PDF o foto). **Ventas:** DIAN y carga física; no llegan por correo.
- **La DIAN es la fuente de verdad; el correo trae el documento original y más completo.** Cuando una factura llega por las dos vías, el **CUFE** evita duplicarla: se queda la copia del correo y las que solo están en la DIAN se dejan tal cual.
- La misma factura puede existir en dos empresas distintas sin mezclarse.
- **Factura física o foto:** núvara lee el texto (OCR), detecta ítems y total, la muestra para revisar y confirmas. Lo más importante es el CUFE, que confirma que es oficial. Se reserva sobre todo para documentos soporte y compras al exterior; el resto llega de la DIAN.
- No entra por aquí una cuenta de cobro o un documento sin XML: hace falta una factura electrónica real.

## Cómo está organizada la vista
- Pestañas por estado: **Pendientes** (llegaron y aún no se causan; la meta es que quede vacía), **Precausadas** y **Aprobadas**. El buscador filtra solo dentro de la pestaña activa.
- El estado en que estés define qué opciones aparecen en **Acciones**: sincronizar con la DIAN, sincronizar correo (solo en compras), causar por lote, causar y revisar por proveedor, buscar por CUFE, cargar facturas físicas, vincular el software contable, sincronizar catálogos y detener procesos.
- Filtros: por **mes**, por proveedor, por tipo de factura (separa notas crédito y documentos soporte) y por centro de costo. Para ver más de 20 filas puedes subir la tabla hasta 200 por página.
- Compras y ventas tienen vistas separadas. Para ver o mover un mes, el mes debe estar habilitado.
- Al exportar, las aprobadas salen de la vista de trabajo y pasan a la **biblioteca de facturas exportadas**, donde puedes revisarlas y corregirlas.

## Pasos
1. Entra a **Operaciones → Causaciones** → pestaña **Pendientes** y elige el mes que vas a trabajar. Sin filtro de mes, el total de arriba suma varios meses y no cuadra.
2. Trae lo del correo: **Acciones → Sincronizar correo** (o *Forzar sincronización por fechas* con desde y hasta).
3. Completa con la DIAN usando la extensión (flujo 02). Para un histórico: primero correo y después DIAN; el correo no siempre trae documentos soporte ni todo.
4. **Comprueba que no falta nada.** Compara el total de *Documentos recibidos* del mes en la DIAN con lo que muestra la plataforma. Si hay diferencia, descarga el listado de la DIAN (*Histórico → descargar listados*, rango del mes, Excel con recibidos) y en **Archivo → Comparar con la DIAN** súbelo: lo que esté en la DIAN y no en núvara sale como "no conciliado" y con **subir** pasa a Pendientes. También puedes buscar una factura puntual por su número o por CUFE.
5. **Limpia:** elimina lo que no debe causarse: documentos internos, mantenimientos ajenos a compras, meses ya contabilizados en tu software contable y pendientes viejos de otros periodos. Hazlo **antes de precausar**: lo eliminado no se cobra.
6. Revisa el panel: pendientes, precausadas, aprobadas, importadas y fallidas.
7. Con las facturas limpias, pasa a causar (flujo 05). Mejor espera a que termine la carga del correo para causar en lote.

## Cómo cuadrar el conteo
- El total incluye notas crédito: 100 facturas y 2 notas crédito son 102 documentos. La DIAN puede mostrar más porque incluye los documentos soporte que emites.
- Facturas en cero, acuses y eventos RADIAN no se necesitan; normalmente no pasan el filtro y explican parte de las "fallidas".
- Si el número no coincide, revisa que no haya un filtro viejo activo de otro mes y filtra por tipo de factura.
- Si esperabas el doble, quizá faltan centros de costo por sincronizar.

## Volúmenes grandes
- Para históricos grandes, carga por **proveedor** en vez de por fechas, revisa y aprueba proveedor por proveedor (puedes aprobar de una vez todo lo de uno).
- La DIAN limita el rango por filtro: baja mes a mes o por tramos pequeños, o sube el archivo mensual que ya tengas.
- Procesa un mes a la vez, o configura bien los dos primeros para que la plataforma aprenda.
- Mientras sincroniza, puedes seguir trabajando en otras pantallas; el panel de progreso se puede mover.
- Según el equipo (2026), se evalúa limitar a 1.000 facturas por sincronización; hoy se han probado cientos en una sola.

<!-- fuentes: h-088d516b4772, h-096d75ba2104, h-0e3c41c7a48d, h-19e5ebd1eb97, h-20227cba2708, h-294083954d31, h-3162db18d8b9, h-364a64863009, h-3a9a315786c4, h-5cb9422bb0c9, h-57509b5a0a19, h-722e015bdc9c, h-8b268b156ae6, h-a2337e3bee2b, h-b139a4b8f2fe, h-c18467806240, h-c6fcf2a8890e, h-c7dee3911650, h-d6c74231cd11, h-f093ed31e568, h-f9bbb8990054, h-fc2e220f7888 -->

## Errores comunes
- **Filtros que no filtran todo, o mes equivocado:** el filtro "pendiente" ha mostrado facturas de varios meses; usa siempre el filtro de mes y revisa el tipo de documento.
- **Dejar documentos irrelevantes:** se cobran créditos al precausar.
- **Duplicar meses ya contabilizados** en el software contable: se eliminan antes de precausar.
- **Una factura no aparece:** amplía el rango, porque el filtro usa la fecha de emisión y no la de llegada. Si sigue sin aparecer, probablemente no llegó por el correo ni por la DIAN en ese rango; búscala con su CUFE.
- **Después de eliminar facturas en masa**, la sincronización del correo puede no volver a traerlas porque las reconoce como eliminadas; tráelas con la DIAN (ver `por-confirmar.md`).
- **Una factura no se detecta o no aparece "causada" en el software contable:** casi siempre falta el prefijo, o viene pegado al número. Edítala, separa el prefijo del consecutivo y guarda.
- **Facturas de un proveedor que nunca entran:** sospecha de un dígito de verificación o NIT mal puesto por el proveedor. La normalización de los dígitos del NIT que impedía causar ya se corrigió.
- **No se importa porque otro proceso corre:** si el listado avisa que está bloqueado por la sincronización del correo, espera a que termine.
- **La lista se ve lenta o no se actualiza:** recarga la página.
- **Un letrero "causando por lote" queda pegado** después de precausar: es un error conocido; cancelar lo quita.
- **Importaciones con todas en error o con valor cero:** suelen ser acuses u otros eventos que no son factura.
- **Facturas a nombre de otro destinatario** no se suben.

<!-- fuentes: h-088d516b4772, h-096d75ba2104, h-294083954d31, h-3162db18d8b9, h-3610bb8fc4d6, h-8b268b156ae6, h-a2337e3bee2b, h-b139a4b8f2fe, h-c8c0317a8652, h-f05e1fbaf759, h-f8436a675e52, h-f9bbb8990054 -->

## Tips del asesor
- "Si hay facturas que no corresponden a la operación, las eliminas antes de la precausación y no se cobran."
- Flujo recomendado: trae las del correo durante el mes y, antes de empezar a causar, haz un arqueo con la DIAN para detectar las que faltan; solo con el correo la información de compras queda incompleta.
- Antes de causar un mes completo, comprueba en la DIAN que todas las facturas llegaron.
- Termina los meses actuales antes de empezar periodos nuevos para no duplicar correcciones.
- Si trabajas con el correo, usa las etiquetas: tener una etiqueta específica facilita el seguimiento.
- Si ya tienes la DIAN y tu software contable conectados, las facturas del mes en curso entran solas y quedan listas para revisar y aprobar.
- La **biblioteca de facturas** permite revisar y corregir lo descargado; mucha gente no sabe que existe.
- En empresas con muchas facturas pequeñas, evalúa agrupar gastos menores en el proceso interno.
- Para las ventas se prefiere la factura electrónica completa al listado: trae productos, régimen del proveedor y conceptos que definen la retención.

<!-- fuentes: h-088d516b4772, h-364a64863009, h-797a6adc3390, h-32cdc786c09c, h-3a9a315786c4, h-c6fcf2a8890e, h-f8436a675e52 -->

## Novedades
- **Vincular productos con el software contable** desde Facturas: la pantalla muestra los productos que llegan de las facturas y los del inventario, con filtros por categoría y "con factura" o "sin factura". Se vincula una sola vez por producto, hay opción de deshacer y, al enviar, salen con el nombre de tu inventario. Antes hay que actualizar el catálogo y, la primera vez, vincular los comprobantes por tipo desde Acciones.
- Filtros nuevos para notas crédito y documentos soporte, pedidos por usuarios y aceptados por el equipo.

## En desarrollo o ideas
- Según el equipo (2026), se piensa mostrar base e IVA en la lista de pendientes y un filtro de verificación contra el reporte de la DIAN para ver rápido qué falta.
- Corregir el filtro de pendientes por mes y el filtro por centro de costo, que hoy no muestra los subcentros.
- Con inventarios grandes, vincular a mano es lento; los productos que se reempacan necesitan un movimiento de inventario aparte que la plataforma no hace.

<!-- fuentes: h-096d75ba2104, h-2bcaf1438320, h-3162db18d8b9, h-ac5a1e51c5ed, h-f8436a675e52 -->
