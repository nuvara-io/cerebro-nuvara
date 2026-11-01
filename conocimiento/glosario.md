# Glosario

## Contables y tributarios

| Término | Definición breve (como se usó) |
|---|---|
| Causación | Registro contable de un hecho económico, como una factura de compra o de venta, en el momento en que ocurre y no cuando se paga. Clasifica el gasto o el ingreso (cuentas, impuestos, retenciones) y determina las obligaciones del período. |
| Precausación | Primera fase automática: núvara prepara la causación de una factura y la deja como borrador (precausada), pendiente de revisión y aprobación; la causación final ocurre cuando el usuario aprueba. Solo la primera vez del primer mes pide mucha revisión; después la plataforma aprende. |
| Asiento contable | Conjunto de débitos y créditos que resulta de causar un documento. Siempre debe cuadrar: la suma de débitos es igual a la de créditos; si no, hay descuadre. |
| PUC | Plan Único de Cuentas. El primer dígito va de 1 a 7 (las clases 8 y 9 ya no se usan); más dígitos, más detalle, y las empresas suelen llegar a 8, donde los dos últimos son auxiliares (por ejemplo, un auxiliar por banco). Las cuentas se mencionan por su código (51, 52, 14, 22, 23, 2408, 74...). |
| Clases del PUC y su naturaleza | 1 activo, 2 pasivo, 3 patrimonio, 4 ingresos, 5 gastos, 6 costos de venta, 7 costos de producción u operación. Las clases 1 a 3 son de balance y perduran; las 4 a 7 son de resultado, se cierran cada año y su resultado pasa a utilidades del patrimonio. Naturaleza débito: 1, 5, 6 y 7; naturaleza crédito: 2, 3 y 4. El IVA y las retenciones empiezan por 2 porque son obligaciones con el Estado. |
| Cuentas de activo y pasivo más usadas | Activo: 11 disponible (caja, bancos, fiducias de retiro inmediato), 12 inversiones, 13 deudores (1305, cuentas por cobrar), 14 inventarios (1435, mercancías no fabricadas por la empresa), 15 propiedad, planta y equipo, 16 intangibles, 17 diferidos. Pasivo: 21 obligaciones financieras, 22 proveedores (2205, nacionales), 23 cuentas por pagar (2335, otras: costos y gastos por pagar), 24 impuestos, gravámenes y tasas. |
| Cuentas de doble comportamiento | Caja y bancos suman con débito y restan con crédito; ventas suman con crédito y una devolución resta con débito. |
| Inventario, propiedad planta y equipo, intangibles y diferidos | Inventario (14): bienes comprados para vender o transformar; solo se vuelve costo cuando se vende (inicial, en transformación o terminado). Propiedad, planta y equipo (15): bienes para producir, no para vender. Intangibles (16): derechos sin forma física, como licencias de uso de software. Diferidos (17): sobre todo gastos pagados por anticipado (seguros) que se amortizan, es decir, pasan poco a poco al gasto con el tiempo. |
| Gasto frente a costo (clases 5, 6 y 7) | Gasto (5): salida de dinero por un bien o servicio no asociado directamente a la actividad principal (administración y ventas). Costo (6 y 7): salida necesaria y directa para operar; el mismo servicio puede ser costo o gasto según a qué se dedique la empresa. La 6 es para quien compra para revender (tiendas, farmacias); se mencionó también el restaurante que compra insumos, los prepara y vende (6210). La 7 es para quien produce un bien o servicio (manufactura, software, hoteles, personal de producción, terceros por horas, repuestos de la maquinaria o del vehículo que presta el servicio). En transporte se mencionó también la cuenta 6145. Ver `por-confirmar.md`. |
| Contrapartida | La otra parte del asiento; todo registro tiene débito y crédito. Los movimientos de las clases 4 a 7 siempre van contra una cuenta de la clase 1 (caja, bancos, cuentas por cobrar) o de la 2 (cuentas por pagar), por eso la causación necesita el PUC completo. En una compra es el crédito que dice por dónde se paga o se debe; en una venta, el crédito va a ingresos y el débito a cuentas por cobrar y a las retenciones que le practican al vendedor. |
| Documento de referencia y valor base | El primero es el número de factura que enlaza la cuenta por pagar o por cobrar para aplicar luego el pago o el recibo. El valor base es el sobre el que se calcula el IVA o la retención; en la línea de gasto va en cero. También se habla de base imponible o base del IVA. |
| Cuenta mayor, auxiliar y transaccional | La cuenta mayor son los primeros cuatro dígitos; la auxiliar es la de ocho dígitos donde se registra. Cuenta de nivel transaccional es la de último nivel, que acepta movimientos; las cuentas padre o de grupo no sirven para importar. |
| Tercero | Persona o empresa registrada en el software contable. Para crearlo se piden tipo y número de documento, nombre completo, celular, dirección, municipio, país y correo. Se crea una sola vez y sirve para medios magnéticos (reporte de compras por tercero). |
| Plan de cuentas | Catálogo completo de cuentas. Hay que importarlo cuando se usan cuentas nuevas sin movimiento, porque el balance de prueba solo trae las que tienen movimiento. |
| Balance de prueba por tercero | Reporte del software contable (en Siigo, un Excel) con saldos por cuenta y tercero; es lo que se pide al usuario para configurar, alimenta el perfil de la empresa y sirve para saber qué cuentas usa realmente y para aprender las cuentas de cada proveedor. Entenderlo cuenta por cuenta ayuda a validar la causación. |
| Auxiliar por proveedor | Manejo de cuentas por pagar (22 y 23) detallado por proveedor. |
| IVA descontable | IVA de compras que cumple los requisitos de ley para restarse en la declaración (relación con la actividad, factura electrónica o documento soporte, pago bancarizado, entre otros); suele llevarse a la cuenta 2408, con subcuentas por compras 19 %, compras 5 %, servicios y devoluciones. Lo toma el responsable de IVA si el gasto se relaciona con su actividad; no lo toma quien no es responsable, quien vende bienes o servicios excluidos ni quien compra sin relación con la empresa. Hay uno de compras (bienes, el más frecuente) y otro de servicios. |
| IVA como mayor valor del gasto | Cuando el IVA no es descontable se suma al gasto, al costo o al inventario (mayor valor del gasto, del costo o del inventario) en vez de restarse en la declaración. En la cuenta de gasto de IVA debe ir separado, para medios magnéticos. En el flujo de una firma, el IVA no descontable se suma al gasto de administración (51) y el descontable se discrimina hacia 2408. |
| Desglose por productos | Separar una factura en varias cuentas contables según el producto (costo, gasto, servicio, proyecto). |
| Retención en la fuente (ReteFuente) | Retención de renta aplicada al pagar según base y concepto. Se mide con la UVT. La cuenta por pagar es la 2365. |
| UVT | Unidad de valor tributario del año; base para medir las retenciones. Se mencionó un valor cercano a 52.000 pesos (validar con la resolución vigente). |
| ReteICA | Retención del Impuesto de Industria y Comercio, con tarifa por municipio y actividad; se agrega manualmente en la causación o con reglas de ICA. Su base mínima se expresa en UVT (en un ejemplo, 4 en servicios y 27 en comercial o industrial). Se lleva a la 2368, con subcuentas por servicios y por comercial. |
| ReteIVA | Retención sobre el IVA; se calcula como la retención en la fuente, pero sobre el impuesto. Se mencionó que la practica un régimen ordinario cuando compra a un régimen simple, y entre regímenes simples; en ventas, los grandes contribuyentes suelen practicarla a quien les vende con IVA. |
| Autorretenedor | Contribuyente que se retiene a sí mismo; el comprador no le practica retención en la fuente. La plataforma no siempre lo detecta en el XML. |
| Gran contribuyente | Calificación tributaria que cambia el tratamiento de retenciones. |
| Régimen Simple | Régimen tributario donde la plataforma no detecta todas las retenciones. No practica retención en la fuente, aunque sí ReteIVA entre contribuyentes simples, y puede usar cuentas de cobro en vez de factura electrónica. |
| Retención acumulativa | Suma de las bases de varias facturas del mismo proveedor y del mismo día para aplicar la retención cuando superan la base mínima. |
| Impuesto al consumo (impoconsumo) | Impuesto distinto al IVA (por ejemplo, 8 %), propio de restaurantes y bares y presente en licores y gaseosas (con bebidas azucaradas). No es descontable ni genera IVA: se lleva en una cuenta propia y no a la 2408, o como mayor valor del gasto. Sin un auxiliar propio en el PUC, Siigo rechaza el gasto. |
| Impuestos asumidos y retención asumida | Impuestos o retenciones que la empresa asume y no descuenta al proveedor; requieren ajuste manual de líneas y se llevan a otra cuenta. |
| Centro de costo / subcentro | Dimensión para clasificar gastos e ingresos por proyecto, área, sede o unidad de negocio, para informes; el subcentro hereda reglas. |
| Nota crédito | Documento que ajusta o anula parcialmente una factura; la DIAN lo trata como documento aparte. La nota débito es su contraparte. |
| Documento soporte | Documento que emite el comprador para soportar compras a quien no está obligado a facturar o a proveedores del exterior; aparece en la DIAN como enviado. En Siigo es distinto de la factura de compra y se consulta en otro lugar. |
| Documento equivalente | Soporte tipo tiquete de punto de venta o de peaje; no es factura electrónica. |
| Comprobante de compra (FC, CC) | Tipo de comprobante en el software contable para registrar compras. En general, el comprobante es el tipo de documento contable (recibo de caja, egreso, factura de venta o de compra, nota crédito, ajuste), identificado con un código por empresa. |
| Consecutivo | Número secuencial del comprobante; debe indicarse al exportar. |
| Prefijo | Letras que anteceden el consecutivo; se unificó en uno global en un caso. En una compra hay el prefijo interno de la sede y el de la factura del proveedor, que debe coincidir con el de la DIAN. |
| Autorretención / autorrenta | Retención que la empresa se practica a sí misma sobre sus ventas (tasa y cuentas configurables, calculada antes de IVA). |
| Retenciones particulares | Retenciones específicas de un comprador o institución (ReteICA, estampillas), en general o por comprador. |
| Tasa o impuesto especial | Cobro adicional sobre una factura de venta (por ejemplo, un porcentaje fijo) que se lleva como línea de gasto. |
| AIU | Administración, imprevistos y utilidad: porcentaje adicional (usualmente 10 %) sobre el que se calcula el IVA en servicios de aseo, construcción y vigilancia; en ventas obliga a prorratear el IVA. |
| TRM | Tasa representativa del mercado, usada para convertir gastos en moneda extranjera. |
| Nacionalización | Costos de importación (aranceles, IVA) que cobra un transportista internacional al entregar una compra del exterior. |
| Legalización de gastos | Módulo para soportar gastos (por ejemplo de viaje) que no vienen de la DIAN. |
| Importación manual | Carga de PDF, XML o zip para soportes que no llegan por correo ni DIAN. |
| Papelera | Lugar donde quedan las facturas eliminadas para que no se restauren solas. |
| Bloqueo de facturas | Opción para que ciertas facturas no se descarguen. |
| Fusionar cuentas / cambio de cuenta en lote | Herramientas para unir cuentas o reemplazar una cuenta en muchas facturas. |
| IMAP / contraseña de aplicación | Forma de conectar un correo cuando no es Gmail estándar o falla la autorización. |
| Consecutivo estricto | Ajuste de envío a Siigo que evita saltos y pausa el envío ante errores. |
| Detalle por producto | Ajuste de envío que manda cada ítem al software contable. |
| Consumo mínimo mensual | 80.000 COP que se descuentan del saldo cada mes como mínimo; lo no consumido se acumula. En el sitio se llama "mínimo mensual". |
| Recarga inicial | Primera compra de créditos (primera recarga); incluye la capacitación. |
| Recarga mínima | El valor más bajo que se puede recargar. Sin confirmar (ver `por-confirmar.md`). |
| Anticipo | Pago adelantado que se aplica después a una factura. Estados: activo, parcial, aplicado y cancelado. |
| Recaudo posterior / cuenta por cobrar | Ingreso que se factura y se paga después; el contador lo ve como manejo de cartera. |
| Egreso | Documento que cancela una cuenta por pagar contra el banco. |
| Remisión, cardex y registro de ajuste | La remisión es un documento interno que descuenta inventario, sin efecto contable ni envío a la DIAN. El cardex controla cantidades y costo unitario del inventario. El registro de ajuste es un asiento interno que mueve cuentas y terceros sin soporte electrónico. |
| Costeo mensual (en Siigo) | Proceso que recalcula el costo del inventario; si no se corre, los saldos de cantidades pueden salir negativos o inflados. |
| Erogación | Salida de dinero a cambio de un bien o servicio recibido. |
| PILA | Planilla integrada de aportes a la seguridad social, generada por el módulo de nómina. |
| Nómina electrónica | Documento de nómina que se emite a la DIAN. |
| Perfiles de cargo | Agrupaciones de empleados (administrativo, operativo, producción) con su actividad ARL. |
| Rubro presupuestal | Clasificación del gasto por convenio en entidades públicas: cuenta presupuestal de cada actividad (de ingreso y de egreso) cuyo saldo baja con cada CDP y cada causación. En una sesión se usó el mismo término para la etiqueta de correo que marca el centro de costo (ver `por-confirmar.md`). |
| CDP | Certificado (o compromiso) de disponibilidad presupuestal: reserva recursos de un rubro antes de firmar el contrato; el área jurídica verifica con él que hay recursos, pero no los asigna a una persona. Un CDP abierto se deja sin RP para compras menores o gastos a demanda (viajes, suministros). |
| RP, OP, reservas y definitivas | El RP (registro presupuestal) amarra el recurso a un contrato firmado, descuenta del CDP y es la llave que toda factura necesita para causarse; con un CDP abierto, se crea por el valor de cada factura. La OP (orden de pago) es el resultado de la causación presupuestal y se carga a gestión documental para el trámite de pago. Si un convenio cruza de año, se pide una reserva para que el CDP y el RP sigan vigentes. Las "definitivas" son la fase donde se causa la factura presupuestalmente, señalada por una entidad como el punto de conexión más importante. |
| Radicado | Número de ingreso de un documento en gestión documental; usado como identificador. |
| Caja menor | Fondo de gastos pequeños pagados en efectivo y al instante, sin factura electrónica, con muchas facturas pequeñas y un único custodio; en diseño. |
| Enrutar a banco | Causar la factura contra una cuenta bancaria para que figure como pagada de inmediato. |
<!-- fuentes: h-088d516b4772, h-0e3c41c7a48d, h-1adf87b5dfa6, h-1d261692318e, h-2021ec577723, h-20227cba2708, h-211a96abdf85, h-2ed008699c30, h-2eed69e6f27f, h-3164413987d2, h-356b484bdf40, h-3a9a315786c4, h-3b10fe0f0da1, h-4cae519c5dd0, h-568b1428fb13, h-577942d4a1de, h-6518cb30d010, h-66eba239a3cb, h-737965f4a467, h-78a6d7ffada0, h-80ec3986bf1f, h-85f50952dea3, h-a540b6ab78be, h-a8886865ddfd, h-b139a4b8f2fe, h-b451d169d162, h-b967a73c48ed, h-c08bad7a0bf4, h-c7dee3911650, h-c7e2fc3560d2, h-d2a18ab0af93, h-d35e1cc2634f, h-e407b9d99c2a, h-e46ab47fa162, h-e5076d0a7373, h-e5a14f4a5436, h-ed9c331e7c17, h-ef76153985c0, h-f093ed31e568, h-f96fd89e31c6, h-fad9de9e12ed -->

## DIAN

| Término | Definición breve |
|---|---|
| DIAN | Dirección de Impuestos y Aduanas Nacionales. |
| RUT | Registro Único Tributario; de ahí salen NIT y responsabilidades. |
| NIT | Número de Identificación Tributaria. |
| Calendario tributario | Obligaciones y fechas derivadas de las responsabilidades del RUT. |
| Token DIAN | Código de acceso temporal que permite descargar documentos del portal. |
| Documentos recibidos | Sección de la DIAN con las facturas de compra. |
| CUFE | Código único de la factura electrónica, su identificador oficial; la plataforma lo usa para evitar duplicados. En algunos programas, al traer la factura por CUFE aparece el SKU del proveedor. |
| RADIAN / eventos | Eventos que el receptor emite a la DIAN sobre una factura recibida (acuses, aceptaciones o un reclamo, por ejemplo por daño del producto); el adquirente debe registrarlos sobre todo en compras a crédito. Se mencionó que su soporte en núvara se habilitaría más adelante. |
| Exógena o medios magnéticos | Reporte anual a la DIAN que consolida por cuenta y tercero la información de terceros y operaciones de todo el año; por eso el IVA debe ir separado. |
<!-- fuentes: h-0e3c41c7a48d, h-2021ec577723, h-3a9a315786c4, h-6518cb30d010, h-a59810d87210, h-c7e2fc3560d2, h-ed9c331e7c17 -->

## De la plataforma

| Término | Definición breve |
|---|---|
| Pendiente / Precausada / Causada / Aprobada / Exportada | Estados de la factura. La pendiente aún no se causa; si la empresa trabaja con etiquetas de correo, también lo está la que no tiene centro de costo asociado. |
| Factura transitoria | La que está en precausadas o aprobadas; no es definitiva hasta que se archiva. |
| Archivadas | Facturas aprobadas ya enviadas, ordenadas por año y mes (también se las llamó "Archivo del mes" o biblioteca de exportación). Se pueden archivar por grupo. |
| Vista agrupada | Agrupa facturas precausadas por juego de cuentas, o por cuenta contable y proveedor, para revisarlas en conjunto. |
| Causación idéntica | Filtro de facturas con la misma causación. |
| Causar por lote | Causar de una vez las facturas pendientes de un mes o de un rango de fechas (máximo un año), dejándolas precausadas. |
| Recausar | Recalcular un grupo o volver a procesar facturas precausadas tras cambios, con las reglas, el balance o el aprendizaje actuales. Puede hacerse con o sin aprendizaje; con aprendizaje, se guarda el criterio corregido (del proveedor o global) para que la plataforma lo reutilice. |
| Historial aprendido | Correcciones guardadas por la plataforma. Al guardar una, puede aplicarse a toda la empresa (por ejemplo, el IVA) o solo a ese proveedor. |
| Regla fija | Regla con condiciones (proveedor, centro de costo, texto, monto) que agrega o reemplaza líneas y se aplica siempre que se cumplan; distinta del aprendizaje. |
| Regla genérica y "reglas en amarillo" | La regla genérica es una de impuestos sin actividad específica y debe ir al final de la lista. Las filas en amarillo son reglas que nunca se aplican porque otra genérica las cubre. |
| Descuadre | Diferencia entre el total de la factura y el total contabilizado; ayuda a detectar impuestos no reconocidos. |
| Terceros nuevos | Terceros que no están en el balance de prueba cargado. |
| Faltantes de centro de costo | Etiqueta de correo y sección donde quedan las facturas pendientes de asignar. |
| Mapeo de gasto | Regla que asigna la cuenta de IVA según el prefijo de la cuenta de gasto. |
| Fuente de verdad | El correo del cliente del contador; núvara solo lee de ahí. |
| Extensión de navegador | Complemento de Chrome para descargar de la DIAN. |
| Alianzas | Sección con credenciales de API del software contable (por ejemplo, Siigo). Con "sincronizar catálogos" se traen a la plataforma las cuentas del programa para vincularlas. |
| Jobs recientes / estado de sincronización | Pantalla de la integración con la lista de envíos a Siigo, su estado y su error. |
| Tipo de documento CP | Cuentas por pagar; se usa al importar documentos al programa contable del usuario. |
| Usuario API, contabilización y tercero interno (World Office) | El usuario API se crea en Seguridad > Usuarios API; su token permite a núvara enviar compras y vence con la suscripción de World Office. La contabilización es la plantilla ligada a un producto o concepto que define cuentas de inventario, ingreso y retenciones. El tercero interno es el dígito de identificación de la empresa, requerido para la integración. |
| Prefijo y número de proveedor (World Office) | Campos donde va el prefijo y el consecutivo de la factura electrónica del proveedor. |
| Mesa de asociación y cola de revisión | La mesa de asociación es una vista de dos columnas que relaciona productos de la factura con productos del inventario. La cola de revisión lista los productos pendientes de vinculación, aprobados o rechazados. |
| SKU del proveedor y códigos de producto | El SKU es el código interno con el que el proveedor identifica el producto; no sale impreso en la factura. Algunos programas usan el código de barras para guardarlo. El código interno lo construye la firma combinando referencia del proveedor, categoría y presentación; el grupo indica a dónde pertenece el producto y el nombre lo describe. |
| Categoría, subcategoría y curación de productos | Categoría y subcategoría son agrupaciones que define el usuario sobre los ítems para analizar gasto, cantidades y precio promedio. La curación agrupa referencias distintas de un mismo producto en la inteligencia de compras. |
| Billetera | Saldo de créditos. Se le llamó también monedero: el de una organización tiene historial de movimientos y desde el de la empresa el equipo puede recargar créditos a un usuario. |
| Checkout en cantidad | Compra de una cantidad específica de créditos, distinta de un plan. |
| Créditos | Unidad de cobro por uso. |
| Organización | Cuenta de una firma contable que agrupa varias empresas bajo una misma URL. |
| ERP | Programa donde la empresa lleva la contabilidad completa; núvara se conecta a algunos. |
| Staging | Entorno de pruebas de núvara, separado de producción. |
| Nuvi | Mascota de núvara. |
<!-- fuentes: h-088d516b4772, h-19e5ebd1eb97, h-20227cba2708, h-211a96abdf85, h-3164413987d2, h-356b484bdf40, h-3b10fe0f0da1, h-78a6d7ffada0, h-85f50952dea3, h-a59810d87210, h-b139a4b8f2fe, h-b451d169d162, h-c08bad7a0bf4, h-c6fcf2a8890e, h-c7dee3911650, h-c7e2fc3560d2, h-d35e1cc2634f, h-e15f41ef6e77, h-e407b9d99c2a, h-f65850e8b9aa, h-f96fd89e31c6, h-fccf335cc6f1 -->
