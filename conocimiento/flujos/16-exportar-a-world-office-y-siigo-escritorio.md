# Exportar a World Office y Siigo de escritorio (API y archivo plano)

Complementa el flujo 10. World Office se conecta **por API con token** (versión en la nube); el archivo plano queda como alternativa, y es la ruta de Siigo de escritorio y de otros programas de archivo.

> **Antes de grabar el tutorial 18 de `ideas-tutoriales.md`:** decide si se reemplaza por "Conectar World Office por API". El sitio oficial (31/10/2026) anuncia la integración con catálogo, bodegas, mapeo de productos y automatización por proveedor (ver `sitio-web.md`).

## Qué ruta usar
| Software | Ruta |
|---|---|
| World Office en la nube | **API con token** (esta guía, primera parte) |
| World Office de escritorio | Archivo plano (plantilla de escritorio; no sirve para la nube) |
| Siigo en la nube | API oficial (flujo 10) |
| Siigo de escritorio y otros | Archivo plano |

En todos los casos la causación se revisa y aprueba **antes** de exportar. núvara prepara; el usuario valida.

<!-- fuentes: h-5cb9422bb0c9, h-f65850e8b9aa, h-fccf335cc6f1 -->

## Requisitos
- Facturas en **Aprobadas** (o archivadas), ya conciliadas con la DIAN (flujo 11).
- Para el archivo plano: saber el **último consecutivo** usado en el software contable y tener acceso a su módulo de importación (en Siigo, la tuerca de configuración; en World Office, las tablas auxiliares y el asistente de importación).
- Para la API: poder crear un usuario API en World Office (Seguridad › Usuarios).

<!-- fuentes: h-4158a5316af6, h-e5076d0a7373, h-f65850e8b9aa, h-fccf335cc6f1 -->

## Ruta A: World Office por API (nube)
1. **Crea el usuario API en World Office:** menú izquierdo (candado) › Seguridad › Usuarios › pestaña **Usuarios API** › Agregar usuario API con el correo que núvara usa para integraciones, y guarda. La fecha de vencimiento no se amplía: la fija la suscripción de la empresa.
2. **Copia el token** haciendo clic en el usuario. Da acceso a la empresa en World Office: trátalo con cuidado. Si llevas varias empresas, un token por empresa.
3. **Configura en núvara:** Administración › Configuración › Integraciones › tarjeta de World Office. Pide tres datos: el nombre de la empresa tal como aparece en la sección de bases de datos de World Office, el **tercero interno** (el dígito de la empresa que viene de contabilidad) y el token. Pégalo con **crear** (si no hay uno) o **reemplazar** (si ya existe).
4. En sesiones de agosto de 2026 el usuario envió el token al equipo de núvara, que pide a World Office habilitar la empresa para la integración; hasta entonces no se puede conectar y no hay tiempo fijo (horas o hasta el día siguiente). Mientras tanto sigue causando. Cerca de las fechas de declaración, adelanta este paso.
5. **Activa los pasos:** "envío automático" (paso 1) y "contabilización automática" (paso 2); la contabilización exige tener activo el envío. Al guardar, la tarjeta muestra "conectado, catálogo activo" e indicadores de qué falta.
6. **Elige el modo:** solo **contabilización** (sin mover inventario) o contabilización **con inventario**. Quien no maneja inventario usa el primero; quien sí, además necesita asociar productos.
7. **Productos (solo con inventario):** activa la sincronización. núvara separa la **lectura** (traer lo que ya existe en World Office) de la **escritura** (enviar desde núvara) para no afectar los registros contables. Con ambas puedes traer productos y enviar los creados en núvara.
8. **Asocia cada ítem** de la factura del proveedor con un producto de World Office. Empieza con la base vacía: asocias uno por uno y la plataforma aprende; con el tiempo llegan facturas sin nada por asociar.
9. **Causa, revisa y envía.** Verifica la causación, **edita la bodega de destino** (núvara no puede detectarla) y aprueba. Se ahorra la digitación y la búsqueda del producto, pero la revisión se mantiene, más aún con inventario.
10. **Verifica en World Office:** en facturas de compra, con el filtro de fechas del mes correcto. Si queda "sin contabilizar", pulsa contabilizar como acción posterior.

### Cómo funciona con World Office
- núvara **no manda cuentas contables** en el flujo de inventario: manda el tercero y los productos, y World Office genera el asiento según la configuración que el usuario ya tiene (contabilización del producto, retenciones del proveedor). Todo depende de cómo esté configurado World Office.
- Cada producto tiene una **contabilización** (agrupa inventario, ingreso y retenciones). núvara debe conservar la misma al asociar. En World Office todo producto, incluso un servicio o gasto, es un registro de inventario; si es gasto no aparece en el consolidado de existencias, pero sí muestra cuántas veces se movió.
- El módulo de inventario de núvara solo mueve unidades y vincula productos; costos, utilidades y listas de precios siguen en World Office.
- World Office autocompleta forma de pago, fecha de elaboración y vencimiento según la parametrización del proveedor. La forma de pago determina la cuenta de caja: "contado" por sede mueve la caja de esa sede; "crédito" es para compras a crédito.
- Hay dos prefijos distintos: el **interno** de la sede, con el consecutivo que asigna World Office, y el **real del proveedor**, que cambia de consecutivo en cada factura. Algunos prefijos incluyen números; si no coinciden con los de la DIAN, la conciliación entre DIAN y World Office no los encuentra.
- La bodega de destino del producto y la bodega o prefijo con que se registra la compra son cosas distintas: una compra puede registrarse en la sede que hizo el pedido y llevar ítems a otra.

### Crear productos
- **Recomendado:** crea el producto nuevo en World Office (bodegas, precios, contabilización) y vuelve a importar desde núvara para asociarlo. Crear desde núvara es posible, pero deja vacías bodegas y precios.
- Al crearlo desde núvara se piden campos que World Office exige (unidad de medida, clasificación del inventario, tipo de impuesto, contabilización, almacenable, control por lote). Si es servicio o gasto, desmarca "activo".
- El código lo asigna el usuario; si llega vacío, World Office genera uno al azar.
- Si un producto va a varias bodegas, asígnalas todas en World Office; al causar, el detalle pide elegir la bodega.

### Casos prácticos con inventario
- Busca los productos por color mejor que por el nombre del proveedor; la referencia y el espesor se eligen después.
- Los accesorios con muchas variantes se agrupan en un producto general ("colores varios") para no llenar el catálogo.
- Si una sede hace el pedido, el prefijo es el de esa sede y casi todos los ítems van a su bodega; edita solo el ítem que va a otra sede.
- Para gastos que no son inventario (asesorías, jurídicos) puede usarse una bodega administrativa genérica.
- Primera prueba: una factura con pocos ítems. Anular una causación existente descuenta inventario y puede fallar si ya hubo ventas, porque no puede quedar negativo.

### Errores de la API
- World Office **rechaza toda la factura** si recibe un dato inválido: unas entran y otras no. Los casos nuevos (por ejemplo, líneas con descuento) se afinan con facturas reales.
- Rechazo del valor total: núvara enviaba el valor del ítem con IVA incluido como base y World Office sumaba otro 19 %. World Office no admite el porcentaje: calcula el total desde el valor unitario y el impuesto asignado. En ajuste.
- La transferencia bancaria se asignaba como crédito en la forma de pago; corrígela según el proveedor.
- Si una factura no aparece, la rechazó World Office al leerla; la respuesta indica el motivo.
- La sesión de World Office del usuario se cae si el equipo entra con la misma cuenta.

<!-- fuentes: h-80ec3986bf1f, h-b139a4b8f2fe, h-f65850e8b9aa, h-fccf335cc6f1 -->

## Ruta B: World Office de escritorio (archivo plano)
1. En núvara: archivos › año › mes › selecciona las facturas (compras o ventas) › Acciones › **Exportar** › World Office › siguiente. También puedes exportar **por fechas** y activar **exportar terceros** (o solo proveedores nuevos que no estén en el balance).
2. Indica el tipo de comprobante (por ejemplo "FC" para factura de compra) y activa el **número de comprobante** con el consecutivo inicial; puede incluir año y mes seguidos de un número (por ejemplo "2605" para mayo de 2026). Cada mes se exporta por separado: los meses no se mezclan.
3. El nombre de la empresa en el archivo debe ser **idéntico** al creado en World Office; si el asistente da errores de validación, edita la sigla.
4. En World Office: tablas auxiliares › asistente de importación › documento con detalle contable (encabezado y cuentas). Importa primero **terceros** y luego los **comprobantes**, asignando bien encabezado y detalle.
5. Si necesitas que el detalle del ítem llegue, importa dos archivos: la contabilización y los **movimientos de inventario**. Rellena la columna de detalle y mantén cerrados los archivos de Excel. Si no manejas inventario, no exportes por producto: exigiría crear cada ítem; usa el nombre de la cuenta como concepto.
6. Haz primero una prueba con **una sola factura**; luego importa el lote. Exporta solo cuando las validaciones estén completas.
7. Si hay errores por NIT faltante, corrige los terceros antes de importar.

<!-- fuentes: h-1bf95f17e863, h-4158a5316af6, h-4e1fc0ab7387, h-72ec6e3363ae, h-c8c0317a8652, h-e4a57c41cb5c, h-e5076d0a7373, h-f65850e8b9aa -->

## Pasos: Siigo de escritorio
1. En núvara exporta las causaciones por fechas y por terceros. Para Siigo Contador (sin inventario) desactiva la opción de inventario y cantidad.
2. En Siigo: tuerca superior derecha › **importación de terceros** y carga el archivo.
3. Crea o confirma el **comprobante de compra** (por ejemplo, uno nuevo llamado "factura de compra" con prefijo propio) y otro para **notas crédito**. Debe estar configurado como importable; si Siigo rechaza el archivo, revisa eso primero.
4. Importa los comprobantes desde **Contabilidad › importación de comprobantes contables**.
5. Los códigos de impuestos están en tuerca › Contabilidad › Impuestos.
6. Usa el **consecutivo real** del comprobante, no el número de la factura del proveedor.

<!-- fuentes: h-19e5ebd1eb97, h-1adf87b5dfa6, h-ea07c173c7f7 -->

## Reglas del archivo plano para software de escritorio
- Tipo de documento **CP** (cuentas por pagar); consecutivo vacío; documento del tercero = NIT; la primera línea no es asiento, la causación empieza en la segunda.
- Fecha de documento = fecha de emisión; vencimiento = la misma fecha. La referencia es el número de la factura electrónica (últimos 4 o 6 dígitos más prefijo si es largo).
- Las cuentas de impuesto exigen columna de **base**. Las partidas de naturaleza contraria llevan un **0** en la columna correspondiente o el programa no sube el archivo.
- La columna de centro de costo va en formato **texto**, y la cuenta por pagar también lo necesita, porque el programa lo exige en ambos lados del asiento.
- Si una factura se reparte entre centros de costo, el asiento repite el concepto con una línea por centro; el concepto varía y el consecutivo lleva un sufijo.
- Número de documento: hasta 12 dígitos. Si supera 10, se separa con un espacio los dos primeros del resto (de derecha a izquierda); con 10 o menos, juntos.
- El concepto de la cabecera aplica a todas las facturas del mismo bloque; cada factura necesita su propio bloque con el siguiente consecutivo.
- Con dos series (con prefijo y sin prefijo), exporta primero por bloques: una serie y luego la otra.
- Si el programa no reconoce el archivo, cambia el selector a "todos los archivos" para que aparezca el Excel.

<!-- fuentes: h-088d516b4772, h-19e5ebd1eb97, h-ac5a1e51c5ed -->

## Errores comunes
- Archivo abierto en otra aplicación al importar.
- Cuentas que no existen en el plan de cuentas del software.
- Terceros no creados o con tipo/NIT incorrecto.
- Retenciones duplicadas por reglas aplicadas dos veces.
- Importación lenta o error de servidor del software: reintentar.
- Saltos en la numeración del archivo: corregir todo el archivo para evitar huecos.
- "Desbordamiento numérico, se han perdido datos": el documento tiene formato numérico con ceros a la izquierda, o hay filas vacías bajo los datos. Pon documento y prefijo en formato texto y borra las filas sobrantes (con la tecla Tab detectas filas ocultas).
- "Documentos ya existen": el consecutivo se usó en un intento anterior; elimina el comprobante viejo o usa otro consecutivo.
- Ante un error el programa deja bajar un archivo de **inconsistencias**; su columna de observaciones dice qué falla (cuenta inexistente, documento repetido).
- Un usuario no logró importar el archivo en World Office (en dos pasos, encabezados y luego movimientos): el programa no reconoció la estructura. Confirma que uses la plantilla de escritorio y pide el video de una importación real.
- Las observaciones no se importaron aunque estaban en la columna del concepto (sin resolver: permiso del programa o columna equivocada).

<!-- fuentes: h-220ed21c4a5b, h-4e1fc0ab7387, h-ac5a1e51c5ed -->

## Tips del asesor
- Exporta solo lo **contabilizado**; los borradores hechos a mano se excluyen.
- Los **anticipos** pueden exportarse aparte o manejarse manualmente.
- Antes del cierre del mes haz una **exportación de prueba** para revisar la configuración.
- El nombre del concepto puede ser el producto o la cuenta contable; sin inventario, la cuenta.
- El exportable sirve para cualquier programa contable, también para otras empresas del usuario con software distinto.
- "La importación depende de la configuración de cada usuario en el software contable." El asesor no enseña el programa contable en cada capacitación, solo cómo causar.
- World Office exige configuración cuidadosa y su soporte es complicado; hay quien lo considera el más difícil de importar. Siigo Contador también tiene casos duros.

<!-- fuentes: h-1adf87b5dfa6, h-1bf95f17e863, h-220ed21c4a5b, h-b967a73c48ed, h-c8c0317a8652, h-e4a57c41cb5c, h-e5076d0a7373 -->

## En desarrollo (según el equipo, 2026)
- Importación rápida de productos desde World Office por API, en bloque. Vincular varios productos de proveedores a uno solo de World Office.
- Eliminar la sección separada de aprobación de productos y asociar en la pantalla de causación.
- Importar primero el catálogo maestro de World Office y asociar las facturas contra él, para que los nombres visibles sean los del usuario (hoy el nombre sale de la primera factura que llegó); mostrar código y nombre juntos al vincular.
- Mensajes de error detallados cuando World Office está mal configurado; campo de código opcional y campos opcionales al crear productos.
- Bodegas: selector con bodega por defecto (la de la sede de la compra) que pasa a "personalizado" si cambias un ítem; botón único para asignar la bodega a todos los ítems; detección de la bodega por el prefijo.
- Enviar a World Office el prefijo y el número del proveedor en sus campos propios, para filtrar y conciliar el mes contra la DIAN; elegir la forma de pago al despachar; extraer fecha de elaboración y de vencimiento desde la factura.
- Tabla flotante de variación de precio (precio anterior, diferencia porcentual y acceso a la última compra del producto).
- Que núvara genere el archivo de "importar documentos" con las reglas anteriores.
- Un video de cómo importar el archivo de movimientos contables en World Office.

<!-- fuentes: h-088d516b4772, h-42d3d6d6ad33, h-4e1fc0ab7387, h-80ec3986bf1f, h-b139a4b8f2fe, h-b967a73c48ed, h-f65850e8b9aa, h-fccf335cc6f1 -->
