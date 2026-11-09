# Producto: qué es y cómo se organiza núvara

> **Cómo leer las fechas.** Cada dato lleva la fecha de la reunión más reciente que lo menciona (dd/mm/2026). "Sin fecha" son datos de las primeras capacitaciones que no se pudieron fechar. La plataforma cambió mucho en 2026: ante un choque entre fuentes gana la más reciente y, para datos de producto, el sitio oficial (31/10/2026). Lo "en desarrollo" nunca se presenta como disponible.

## Qué hace

núvara elimina la carga operativa de la **causación** contable de facturas electrónicas para contadores y empresas colombianas. Según las capacitaciones y reuniones:

- Trae las facturas desde la **DIAN** (extensión de navegador y token) y desde el **correo electrónico**.
- **Precausa** cada factura con inteligencia artificial, apoyándose en el balance de prueba por tercero que carga el usuario, en el plan de cuentas de la empresa y en reglas propias.
- Calcula IVA y retenciones; crea terceros, cuentas, asociaciones y productos cuando hacen falta.
- Agrupa las facturas con la misma causación para revisarlas y aprobarlas en bloque.
- Exporta lo aprobado al software contable: Siigo y World Office por API; Alegra, Helisa, Siigo PyME, Contai o un formato genérico por archivo.
- El usuario siempre revisa y aprueba antes de exportar.

**Alcance.** Causa **compras y ventas** (las ventas con un flujo más simple; ver "Cómo decide la causación"). Hasta abril se hablaba de "netamente compras"; desde febrero hay ventas y el sitio las ofrece por igual (ver `por-confirmar.md`). Hoy no se puede declarar renta ni hacer ajustes tributarios desde la plataforma (16/06/2026): por eso se exporta a un software contable. La visión del equipo es crecer a plataforma contable completa (informes, balances, consulta por chat), pero eso es plan, no oferta (01/07/2026).

> **Lo que dice el sitio oficial** (`sitio-web.md`, 31/10/2026): causa compras y ventas; World Office ya se conecta por API con token; la conciliación bancaria lee extractos PDF de Bancolombia, Davivienda y Nu o CSV; nómina, facturación electrónica, file manager, cajas y calendario tributario aparecen como módulos. Donde esto choque con lo de abajo, gana el sitio.

<!-- fuentes: h-294083954d31, h-defeafd88304, h-c7e2fc3560d2, h-1b5ddf9047dc -->

## A quién va dirigido

- **Firmas contables** que causan para muchas empresas: es el producto más desarrollado y el primer nicho (21/04/2026). El argumento es el ahorro de tiempo multiplicado por cada empresa.
- **Empresas** con alto volumen de facturas y equipo administrativo propio. Una empresa grande no necesita varias configuraciones: es una sola entidad tributaria; la multiempresa es para firmas.
- La conversación comercial es con el contador, aunque quien se conecte sea el gerente. Es más fácil enseñar la plataforma a un contador que a alguien sin formación contable.
- La conexión con el software contable (API o archivo plano) la hace siempre el equipo de núvara, con capacitación inicial y un balance de prueba de un año para entrenar la plataforma (15/04/2026).

### Tipos de cuenta y roles (disponible)

| Dato | Detalle | Fecha |
|---|---|---|
| Firma contable | Administra varias empresas y paga por ellas. Cada empresa es "su propio mundo": configuración, cuentas, conceptos y centros de costo separados. Tiene su propia URL. | 04/05/2026 |
| Empresa | Paga su propia aplicación, normalmente una sola empresa; trae módulos propios (nómina, facturación, cajas, documentos). El plan de una empresa podría entrar directo a ella, sin la pantalla de tarjetas. | 12/05/2026 |
| Créditos | Pertenecen a la organización (la firma), no a cada empresa; se reparten o gastan donde el usuario quiera. | 04/05/2026 |
| Administrador | Ve y acciona en todas las empresas. | 21/05/2026 |
| Operador (también llamado auxiliar) | Solo ve las empresas asignadas; puede causar, editar cuentas, configurar y crear empresas, pero no eliminarlas. No necesita registro previo. | 28/07/2026 |
| Contador externo | Se vincula a una o varias empresas o firmas **sin comprar plan**: paga la firma o la empresa. Necesita cuenta previa. Con el mismo correo ve en una sola sesión lo propio y lo asignado. | 21/05/2026 |
| Cliente | Solo ve su empresa. | 21/05/2026 |
| Miembros | Se agregan a una empresa sin costo. | sin fecha |

Una empresa puede vincular a la vez una firma y un contador independiente. Si la empresa paga su propia plataforma y da acceso a una firma, esa sección no se factura a la firma (12/05/2026). Inhabilitar a un usuario aparece como "próximamente" (21/05/2026). Los correos no se verifican: se acepta cualquier dirección (21/05/2026).

<!-- fuentes: h-0e3c41c7a48d, h-3164413987d2, h-a540b6ab78be, h-fad9de9e12ed, h-040559feec95, h-defeafd88304, h-2eed69e6f27f, h-722e015bdc9c -->

## Estados de una factura

`Pendiente` → `Precausada` → `Aprobada` → `Archivada` (y enviada al software contable)

La plataforma trabaja internamente todo como "causado"; los estados visibles son una capa visual (04/05/2026). "Precausación" es lo que hace la plataforma antes de que el usuario apruebe; al aprobar pasa a ser causación (21/04/2026).

| Pestaña | Qué significa |
|---|---|
| Pendientes | Facturas recibidas, aún sin procesar. Se causan con el botón, por lote (rango de fechas) o con la causación automática si el usuario la activa. Las irrelevantes se eliminan antes de precausar. |
| Precausadas | Procesadas, editables y revisables; aquí se descuentan los créditos. Se agrupan por proveedor y cuenta. |
| Aprobadas | Validadas por el usuario; la aprobación puede ser individual o masiva. |
| Archivo | Facturas aprobadas ordenadas por año y mes, listas para exportar. Archivar es el paso que dispara el envío. |

- **Causaciones es un área transitoria**: solo muestra lo que tiene algo por hacer; al aprobar y archivar, las facturas pasan a la sección de Archivos (14/07/2026, 16/06/2026). El calendario resalta en negrita los meses con facturas y marca con línea tachada lo ya archivado.
- **Pestañas en tres niveles** (16/06/2026): compras y ventas (fijo); tipo de documento (según lo que recibe la empresa: factura electrónica, documentos equivalentes como punto de venta y peajes, notas crédito y débito, documentos soporte, eventos DIAN; unos nueve tipos, detectados al descargar); y estado. Compra o venta depende del rol: la factura que emites es venta para ti y compra para quien la recibe. La nómina electrónica no se sincroniza ni se causa aquí.
- Hay estados de error y un panel de trabajos de sincronización con el software contable (en proceso, reintentando, enviado, con error), debajo de las acciones (15/08/2026).
- Mientras se causa en segundo plano, el usuario puede seguir trabajando; un indicador muestra el avance (06/08/2026).

<!-- fuentes: h-c7e2fc3560d2, h-ea07c173c7f7, h-3164413987d2, h-0e3c41c7a48d, h-797a6adc3390, h-f9bbb8990054, h-b139a4b8f2fe, h-c7dee3911650 -->

## Mapa de menús y pantallas

### Disponible (como los nombra el asesor)

| Lugar | Qué se hace allí | Última mención |
|---|---|---|
| Menú lateral | Secciones "Principal" y "Control"; "Empresas" está en Control. Atajo **Ctrl+I** abre un panel de comandos. Selector de empresa en la parte superior. | 25/08/2026 |
| Panel de empresas | Una tarjeta por empresa; crear empresa nueva (se sube el RUT y se extraen los datos) y "Ver empresa". | 13/08/2026 |
| Panel de la empresa | Pendientes de compras y ventas (el título dice "pendientes"), vencimientos, barra de alertas tributarias, proveedores. | 09/03/2026 |
| Causaciones → Acciones | Sincronizar correo, sincronizar DIAN, solicitar token, causar por lote, aprobación por lote, detener procesos, comparar DIAN, cambiar cuenta en lote, recausar. Las acciones cambian según la pestaña. | 25/08/2026 |
| Vista de causación | PDF al lado, lápiz para editar el proveedor, tabla de productos o servicios, líneas contables, totales, indicador cuadrado / no cuadrado y de confianza. Vista dividida junto a la lista. Alterna cuentas / productos (a la mayoría no le gusta la de productos). | 15/08/2026 |
| Vista agrupada / lista | Agrupa por causación idéntica, por proveedor o por centro de costo; "aprobar grupo", colapsar todo, "archivar seleccionadas". La tabla genérica casi no se usa. | 23/07/2026 |
| Filtro por meses | Total de facturas de cada mes. | 15/08/2026 |
| Plan de cuentas | Solo las cuentas usadas (p. ej. unas 130 de un PUC de unas 2.500); se crean a mano, pegando o importando Excel; se puede cambiar la naturaleza. | 21/05/2026 |
| Proveedores | Historial (cuentas usadas, facturas, exportable); lápiz para marcar autorretenedor, gran contribuyente o régimen especial. Cada mes se valida contra la DIAN si sigue activo ("inactivo" o "ficticio"). Se crean solos al traer facturas, o subiendo el RUT o masivamente. | 13/05/2026 |
| Archivos | Carpetas automáticas por año y mes; comparación con la DIAN y con Siigo. | 23/07/2026 |
| Impuestos | Vencimientos tributarios según la empresa, marcables como completados. | 13/05/2026 |
| Administración → Configuración | Subpestañas **General** (logo, NIT, régimen, responsabilidades), **Operación** (tipo de empresa, inventario, dígitos de cuenta) y **Tributaria** (IVA descontable, consumo, ReteICA, otros). Finanzas: dígitos de cuenta, cuentas bancarias y comprobantes (códigos de compra, venta, nota crédito, documento soporte, nómina). | 25/08/2026 |
| Integraciones | Correo (Gmail, Outlook o IMAP con contraseña de aplicación), DIAN, software contable. Pantalla rediseñada con contabilización y envío automáticos encadenados. | 10/08/2026 |
| Aprendizaje / reglas | Historial aprendido (ver, editar, eliminar), reglas de clasificación (también por placa), importación de libro auxiliar. | 23/07/2026 |
| Administración → Anticipos | Registro e importación de anticipos por archivo. | 28/07/2026 |
| Usuarios y roles | Crear usuario con correo, rol y empresa asignada. | 21/05/2026 |
| Billetera | Saldo de créditos, historial y "Recargar". | 04/05/2026 |
| Reporte de problemas / chat de soporte | Captura de pantalla y descripción, enviada al equipo técnico desde cualquier pantalla. | 26/05/2026 |

### En desarrollo, en pruebas o por ordenar

| Lugar | Estado | Última mención |
|---|---|---|
| Inventario (menú propio) | Se activa en Configuración → Operación → "Inventario". Con Siigo: resumen, cargar saldos, aprobar productos. Con World Office: en pruebas. Ver "Módulos". | 06/08/2026 |
| Inteligencia de compras / Visión ejecutiva / Cambios de precio | Demostradas, en refinamiento, "se planean cambios grandes". | 06/08/2026 |
| Informes | Compras por proveedor con detalle y proyección de impuestos sin causar: solicitados, prioridad acordada; sin fecha de entrega. | 16/07/2026 |
| Nombres e interfaz | Quedan por renombrar la pestaña "causadas" → "precausadas" (21/04/2026); quitar "mixta" del tipo de empresa (14/05/2026); revisar "Organización", "Empresa", "Usuarios" y "Miembros" que se confundían, y unificar los ajustes en un solo botón (09/03/2026). | varias |
| Inhabilitar usuarios | "Próximamente". | 21/05/2026 |

<!-- fuentes: h-e15f41ef6e77, h-1b5ddf9047dc, h-c7e2fc3560d2, h-797a6adc3390, h-fad9de9e12ed, h-220ed21c4a5b, h-0e3c41c7a48d, h-8daa39cfcb56, h-80ec3986bf1f, h-a30f11ead348, h-f96fd89e31c6, h-6f10790c1552, h-b451d169d162, h-2bcaf1438320, h-b139a4b8f2fe -->

## Módulos y capacidades

### Disponible

- **Causación de compras y ventas**: es el módulo más probado y robusto (01/08/2026). Incluye aprendizaje, reglas, agrupación, aprobación en bloque y comparación con la DIAN.
- **Configuración inicial guiada**: RUT, balance de prueba por tercero (se elige hasta cuántos dígitos importar), perfil de la empresa (actividad económica, inventario, combustible, IVA). Un asistente de preguntas iniciales es plan (21/04/2026).
- **Aprendizaje** (global, por proveedor, por concepto o línea): una cuenta con ícono amarillo se aprendió del historial del proveedor; "recausar con aprendizaje" o "sin aprendizaje" (10/08/2026). Reglas importables pegando texto (10/08/2026).
- **Iconos de origen de la causación**: robot = solo inteligencia artificial; cerebro = aprendizaje previo; líneas verdes = regla del usuario (16/06/2026).
- **Reglas**: fijas, creadas desde la factura, con selector de especificidad; por placa de vehículo con nivel de importancia y botón "aplicar reglas" para reclasificar (23/07/2026, 10/08/2026); simulación con una factura real.
- **Retenciones**: ReteICA por municipio, tarifa, cuenta y actividad (detección asistida), base mínima en UVT (27/07/2026); retefuente personalizada; "tarifa personalizada"; proveedores autorretenedores y grandes contribuyentes sin retención.
- **Centros de costo**: se asignan por línea de producto, no por el gasto completo; no se reparte una línea entre varios (03/08/2026). Importación masiva de reglas y de la relación factura-centro de costo (23/07/2026).
- **Anticipos**: se cargan por archivo; la causación avisa que el proveedor tiene anticipo y el usuario lo aplica con el botón (28/07/2026). El recibo de caja o pago sigue en el software contable (01/08/2026).
- **Siigo**: envío por API, indicador verde cuando la causación quedó igual; "Buscar en Siigo" vincula archivadas con su registro; escribe la URL del PDF en observaciones; el centro de costo obligatorio en Siigo no se valida antes (10/08/2026). Siigo PyME y Siigo Contador (comprobante: dejar vacío el prefijo fijo) por archivo (23/07/2026).
- **World Office**: API con token; las facturas se despachan al archivar (13/08/2026).
- **Inventario con Siigo** (03/08/2026): bodegas, productos, "aprobar productos" (nuevos y existentes, en bloque), cada línea indica si el producto es nuevo o existente; al aprobar uno nuevo se crea en Siigo. Con otros programas contables no hay sincronización de inventario.
- **Legalización de gastos** y facturas del exterior por importación manual (sin fecha).
- **Comparación con la DIAN y con Siigo** para detectar facturas que están en uno y no en el otro (28/07/2026).
- **Calendario de impuestos** por empresa (13/05/2026).

### En desarrollo o en pruebas (no ofrecer como disponible)

| Módulo | Estado según las reuniones | Última mención |
|---|---|---|
| Nómina y nómina electrónica | **Disponible**: módulo por cupos de empleados al mes, con liquidación, PILA, causación y nómina electrónica bajo la habilitación DIAN. Ver flujo 18. | 02/11/2026 |
| Conciliación bancaria | **Disponible** en Tesorería (la activa el equipo): extractos PDF de Bancolombia, Davivienda o Nu, o CSV; conciliación automática y manual, partidas y cierre. Ver flujo 21. | 02/11/2026 |
| Egresos y pagos con bancos | **Disponible** en Tesorería: comprobantes de ingreso y egreso, cuentas por cobrar y por pagar, aprobaciones y pago de nómina. Ver flujo 21. | 02/11/2026 |
| Cajas menores | En pruebas con usuarios: foto del comprobante por Telegram o WhatsApp, un custodio por caja. | 25/08/2026 |
| Facturación electrónica, documento soporte | **Disponible** desde el menú Facturación Electrónica, tras comprar un paquete anual desde $150.000. Ver flujo 20. | 02/11/2026 |
| Eventos RADIAN | **Disponible** con la facturación electrónica en producción (Documentos › Eventos RADIAN). Ver flujo 20. | 02/11/2026 |
| Inventario con World Office | En pruebas con una empresa real: productos, bodegas, kardex, mapeo y cola de revisión de productos con sugerencias hechas con inteligencia artificial. Bodegas, proveedores y centros se leen; el envío hacia World Office está en desarrollo. | 11/08/2026 |
| Inteligencia de compras y Visión ejecutiva | Procesa facturas con inteligencia artificial: gasto, precio promedio y variación por proveedor y producto, categorías con subcategorías, exportación a Excel. Independiente de Siigo. En refinamiento. | 08/07/2026 |
| Cambios de precio | Alzas en rojo, bajas en verde, impacto total y filtro de cambio mínimo. El icono junto al valor unitario en la causación está acordado, sin implementar. | 06/08/2026 |
| Aprendizaje masivo | Corrección masiva de causadas, en desarrollo y más complejo de lo previsto. | 28/04/2026 |
| Escaneo de facturas físicas | En pruebas por chat; el sitio ya menciona facturas escaneadas. | 25/08/2026 |
| Alegra | Solo plantilla; integración en desarrollo. | 21/04/2026 |
| Informes y exógena | Después de documentos y tablas maestras de terceros bien diligenciadas. | 18/04/2026 |
| Verificar contra Siigo antes de causar; vista de trazabilidad por auxiliar | Prometidos. | 30/06/2026 |

### Ideas y visión (sin fecha de entrega)

- Etapa de **cruce de cuentas** posterior a causar, para asociar cada factura con su caja o banco; el método de pago de la factura electrónica es poco confiable (23/02/2026). El bot de Telegram para ese reporte se **descontinuó** (16/06/2026).
- Calendario tributario con alertas (26/02/2026); control de inventario de restaurantes por recetas (26/02/2026); asistente conversacional por voz o chat (11/08/2026); sector público con registro presupuestal como llave (09/04/2026); extraer datos desde una foto del papel (19/01/2026).
- Hoja de ruta de abril: primero facturación electrónica de venta, luego documento soporte y RADIAN, después recibos de caja, egresos, ajustes y conciliación (18/04/2026). El 31/07/2026 el equipo acordó dedicarse casi solo a causaciones hasta mediados de agosto.

<!-- fuentes: h-3a9a315786c4, h-b139a4b8f2fe, h-fccf335cc6f1, h-a59810d87210, h-722e015bdc9c, h-80ec3986bf1f, h-4cae519c5dd0, h-577942d4a1de, h-19e5ebd1eb97, h-72ec6e3363ae, h-a30f11ead348, h-3162db18d8b9, h-ba672f6fbb0d, h-c7dee3911650, h-c6fcf2a8890e, h-e15f41ef6e77, h-3164413987d2, h-211a96abdf85, h-6518cb30d010, h-defeafd88304, h-0e3c41c7a48d, h-ac390aa796e4, h-01b5a1f7ff0a, h-c7e2fc3560d2, h-3610bb8fc4d6, h-32cdc786c09c, h-d2a18ab0af93, h-1d261692318e, h-f65850e8b9aa, h-040559feec95, h-f7e9b0b7d233 -->

## Cómo decide la causación (por dentro)

A alto nivel, para cada factura la plataforma hace esto (explicado por el equipo entre 01/2026 y 07/2026):

1. **Compra o venta.** Compara el NIT de la empresa con el emisor y el receptor. De ahí sale el conjunto de cuentas a usar. Las ventas siguen un flujo más simple: la empresa es quien emite, así que no se calculan retenciones ni IVA descontable (12/02/2026; ver `flujos/14-ventas-retenciones-y-autorretencion.md` para las retenciones particulares que sí se configuran).
2. **Naturaleza de cada ítem.** Se lee el detalle de la factura (el XML permite sacar bases por tarifa cuando la representación gráfica no las discrimina) y se clasifica cada ítem en gasto, costo o costo de producción, según el concepto y la actividad de la empresa.
3. **Cuenta.** Un buscador recorre el plan de cuentas por niveles (cuenta, subcuentas) usando la descripción de cada cuenta. Devuelve las cinco mejores candidatas por ítem, porque algunas se parecen mucho; el usuario escoge o busca otra en todo el PUC. Si la cuenta no sirve, el ciclo se repite hasta acertar o sugerir otra.
4. **El PUC de la empresa manda.** Los primeros dígitos que sugiere el modelo deben caer en la "familia" correcta del PUC de la empresa y los últimos salen de la cuenta personalizada que ya existe; si coinciden se muestra "match perfecto" en verde. Si la cuenta no está cargada, la pantalla avisa y propone alternativas. Las cuentas se manejan a ocho dígitos y no se guarda una causación hasta completar esa longitud (12/02/2026).
5. **Dos caminos.** *Facturas nuevas* (el proveedor no tiene historial con la empresa) y *recurrentes* (se reutilizan las cuentas que el usuario ya usó o corrigió). Cada aprobación o corrección entrena la plataforma por empresa y proveedor, y esta gana confianza hasta causar directo.
6. **Impuestos y retenciones.** Se aplican según la tabla anual de retenciones importada (sin ella no se calculan), el concepto de cada ítem y las condiciones del proveedor: autorretenedor y gran contribuyente no llevan retención; el régimen especial puede fijarse a mano. IVA descontable o mayor valor del gasto, materia prima gravada o no, inventario y centros de costo siguen la configuración de la empresa. ReteICA depende de municipio, tarifa y actividad.
7. **Confianza.** Cada causación trae un indicador de confianza. Nació para medir al algoritmo; hoy importa menos, pero una confianza baja (p. ej. 70 %) señala una causación dudosa (16/06/2026). La idea original era que las de 100 % pasaran y el resto dijera "revisar manual".
8. **Revisión humana.** La aprobación del contador es el primer filtro. Avisos como "el asiento difiere de la factura" sugieren revisar cargos globales, propinas, descuentos o retenciones faltantes (30/07/2026).

Un mismo documento puede traer ítems con distinta tarifa de IVA, por eso el IVA se calcula por ítem. Las relaciones aprendidas se guardan por empresa, proveedor y cuenta.

<!-- fuentes: h-294083954d31, h-1d261692318e, h-737965f4a467, h-2eed69e6f27f, h-c7e2fc3560d2, h-3162db18d8b9, h-220ed21c4a5b, h-722e015bdc9c, h-b139a4b8f2fe, h-defeafd88304 -->

## Planes y créditos (lo mencionado)

- núvara cobra **por uso**, en créditos. El cobro ocurre al **precausar/causar**, no al descargar. Incluye las ventas que llegan solas por correo o DIAN: por eso se puede dejar todo en *Pendientes* y eliminar o bloquear lo que no se necesita.
- **Confirmado:** causar una venta cuesta **$200**; mínimo mensual de consumo **$80.000**. **Sitio oficial:** compra $510 (5,1 créditos), 1 crédito = $100. La recarga mínima sigue sin confirmar (ver `por-confirmar.md` y `flujos/12-creditos-y-recargas.md`).
- **Diseño del monedero** (04/05/2026): una sola moneda interna; el dinero real solo entra al comprar créditos y todo lo demás (causaciones, nómina, facturación, certificado) se descuenta en créditos. Se descartaron planes por módulo; los "paquetes" son solo sugerencias por tamaño de empresa. El saldo debe verse siempre, con historial de movimientos; el descuento debe ser casi imperceptible y solo se avisa cuando el saldo se acaba. Se plantea una calculadora de consumo mensual. La nómina se cobraría por empleado activo al inicio de cada mes. Los módulos adicionales se piensan como complementos que se compran.
- Las reuniones internas hablan también de suscripción; es una discusión abierta y no se usa en materiales (ver `por-confirmar.md`).
- Cualquiera puede registrarse y explorar sin pagar; solo no puede causar hasta recargar (30/07/2026). Cuando un asesor crea al usuario, el correo queda acreditado con créditos desde el monedero de la empresa.

<!-- fuentes: h-3164413987d2, h-defeafd88304, h-211a96abdf85, h-a540b6ab78be -->

## Novedades y detalles de sesiones posteriores

### Cómo entran las facturas (disponible)
- **Correo:** sincronización cada 15 minutos o 24 horas; Gmail, Outlook o **IMAP** con contraseña de aplicación; se pueden conectar varios correos a una empresa; etiqueta automática "Extraído núvara" configurable (30/07/2026).
- **DIAN:** token por empresa más extensión; lotes de más de 200 documentos se dividen en tramos semanales. El nuevo descargador es más compacto y rápido (18/06/2026). Alternativa para ventas: subir un archivo de códigos CUFE y un robot las descarga una por una; fue el primer mecanismo (09/01/2026) y es lento.
- **Importación manual** de PDF, XML o zip para soportes fuera de la DIAN; documentos soporte en papel se causan igual con foto adjunta (19/01/2026).
- **Papelera** y **bloqueo** de facturas (ver `flujos/17-papelera-bloqueo-y-limpieza-de-facturas.md`).

### Otras capacidades observadas (disponible)
- Cambio de cuenta en lote, fusionar cuentas, asignación masiva de centros de costo, **cola de causación** (varias facturas, ver con el ojo) (10/08/2026).
- Mapeo de gasto: vincula una cuenta de gasto con la cuenta donde queda su IVA (13/05/2026). Selector de dígitos de cuenta (mixto o fijo). Desglose de impuestos por proveedor.
- Cuando un anticipo cubre el 100 % de la factura no debe quedar cuenta por pagar; se acordó corregir esa lógica (28/07/2026).
- Tipo de empresa comercializadora: "no maneja inventario" o "inventario permanente" (considera cuentas del grupo 14) (28/07/2026).
- Causar una factura sin precausar es más lento (unos 15 segundos cada una): conviene precausar y revisar por proveedor (13/05/2026).
- Reportar incidencias: chat de soporte integrado y herramienta con captura de pantalla (26/05/2026).

### En desarrollo, comprometido por el equipo
- Botón "aplicar retención especial" para fijar el porcentaje en proveedores de régimen especial; mostrar siempre las cuentas de ocho dígitos; exportar a Excel desde Precausadas (13/05/2026).
- Condición de IVA no descontable por clase de gasto y configuración global de ReteICA (21/07/2026).
- Centro de costo múltiple con distribución porcentual, código interno de la firma y SKU en productos, bodega y centro a la vez al exportar por archivo plano (03/08/2026).
- Importar formas de pago por cuenta desde Excel (23/07/2026).
- Biblioteca de videos e icono de video en el onboarding (30/07/2026); paginación de listas, importación rápida de productos y errores más claros (11/08/2026).
- Rediseño de interfaz: en funcionamiento desde el 14/07/2026, empezando por Causaciones. Tras la migración aparecieron errores que el equipo prioriza corregir, así que algunas pantallas pueden diferir de lo descrito (11/08/2026).

### Dudas de producto abiertas
- El visor de PDF no se actualiza al cambiar de factura (15/05/2026); la opción de IVA "línea separada en la misma cuenta" falló y se revisaría (13/05/2026).
- Al pasar la forma de pago desde la factura, una transferencia se interpreta como crédito (10/08/2026).
- El resumen de inventario mostró cifras "con stock" y "sin stock" que no se explicaron; el formulario de producto no muestra la categoría de Siigo (03/08/2026).
- Políticas de privacidad y tratamiento de datos aún sin publicar en la plataforma (30/07/2026).

<!-- fuentes: h-3162db18d8b9, h-088d516b4772, h-577942d4a1de, h-c6fcf2a8890e, h-1d261692318e, h-737965f4a467, h-220ed21c4a5b, h-a30f11ead348, h-c08bad7a0bf4, h-b451d169d162, h-568b1428fb13, h-19e5ebd1eb97, h-a59810d87210, h-211a96abdf85, h-f65850e8b9aa, h-ea07c173c7f7, h-80ec3986bf1f, h-bc9b20a13601 -->
