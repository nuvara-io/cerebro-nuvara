# Preguntas frecuentes (reales, anonimizadas)

Salen de capacitaciones, soporte y demostraciones en vivo hasta agosto de 2026. Cuando dos sesiones se contradicen, gana la más reciente; lo que sigue en desarrollo se marca como tal.

## Configuración inicial
**¿Qué necesito para crear una empresa y para qué sirve cada cosa?**
El RUT y el balance de prueba por tercero en Excel. El balance sirve para identificar el patrón contable de la empresa y parametrizar sus documentos. Por cada empresa nueva repites el proceso. Puedes cargar también el plan único de cuentas.

**¿Qué pasa si no tengo plan de cuentas?**
Importas el Excel con las cuentas o creas las mínimas a mano; lo mejor es traerlas del software contable. El plan no trae todas las cuentas del PUC, solo las que usa la empresa; las demás se crean o se importan. Una cuenta nueva también se puede crear en la misma pantalla de causación.

**¿Qué rango de fechas uso en el balance de prueba?**
El rango con el que sueles causar la empresa. Si causas mes a mes, el año en curso es suficiente.

**¿Por qué falla la carga del balance?**
Probablemente tiene filas azules al inicio. Ábrelo en tu computador y bórralas (hasta la fila 7).

**¿Cómo creo otra empresa y las encuentro todas?**
Desde el menú inferior izquierdo "Empresas" (panel de empresas de tu perfil). Alternas entre ellas desde la barra superior. La cuenta de la firma gestiona varias empresas, sin mínimo por número ni por volumen de facturación (sirve a un contador con tres). Cada organización es independiente: si dos firmas tienen la misma empresa, no comparten datos.

**¿Puedo cambiar la configuración después?**
Sí, incluso después de haber empezado a causar. Lo ya causado y aprobado queda igual; solo se revisan las facturas nuevas.

**Si cambio el balance o el plan de cuentas, ¿núvara aprende las cuentas nuevas?**
No automáticamente: funciona por patrones, así que debes usar las cuentas nuevas en correcciones o reglas. Si solo cambia el nombre, se actualiza mientras el código o el nombre sigan iguales; si cambian ambos, crea una cuenta nueva. No puedes eliminar cuentas con facturas vinculadas. Las precausadas y las aprobadas no cambian solas: las seleccionas y las recausas, sin eliminar ni volver a subir.

**¿Cuántos dígitos soportan las cuentas?**
Ocho hoy (las firmas trabajan con ocho; el oficial llega a seis); ampliar a diez está en desarrollo. Se puede ajustar incluso después de empezar a causar.

**¿Cuántos usuarios puedo tener y qué ve cada uno?**
Los que quieras. El administrador ve todas las empresas; el operador (o auxiliar) se limita a las que le asignes, por ejemplo una sola. Un auxiliar puede configurar y crear empresas, pero no eliminarlas. Los créditos son un solo saldo de la organización, para todas las empresas. Varias personas pueden entrar a la misma empresa a la vez, sin tope por ahora.

**¿A qué cuenta va la contrapartida de la factura?**
Por defecto a proveedores (2205); se ajusta al cierre de mes con el arqueo de bancos o caja. Puedes clasificar las cuentas por pagar por tipo de gasto en Configuración › Operaciones, o llevar toda una clase de gasto contra una cuenta de caja con "una cuenta por clase de gasto". El documento de referencia es el número de factura, en todas las líneas.

**¿Cómo distingo costo de ventas (6) y costo de producción (7)?**
La 6 es costo de ventas (mercancía e insumos que se revenden, como una farmacia o una empresa que compra y revende); la 7 es costo de producción (personal, repuestos y servicios de terceros del proceso productivo, como un hotel o una empresa que cultiva). Inventario es lo que se compra para vender; propiedad, planta y equipo es lo que se usa para producir.
<!-- fuentes: h-040559feec95, h-19e5ebd1eb97, h-3162db18d8b9, h-3bfcdd9e3190, h-57509b5a0a19, h-737965f4a467, h-66eba239a3cb, h-ef76153985c0, h-e15f41ef6e77, h-e46ab47fa162, h-e4a57c41cb5c, h-f093ed31e568, h-f9917fa6ff6d, h-fad9de9e12ed, h-b66360b1cf5c, h-d35e1cc2634f, h-568b1428fb13, h-defeafd88304, h-a921afd858ce, h-2eed69e6f27f -->

## DIAN y correo
**¿Por qué necesito instalar una extensión?**
La plataforma de la DIAN bloquea descargas; la extensión (de Chromium, propia de núvara) evita bloqueos. Se instala una sola vez por equipo, en Google Chrome con perfil estándar y sin modo incógnito (no funciona en Firefox). Si no aparece, probablemente la instalaste en otro perfil de Chrome. Puedes seguir trabajando mientras descarga, pero en otra pestaña de núvara: la pestaña de la DIAN debe seguir al frente. Si olvidas la contraseña de la extensión: Mi cuenta › Seguridad.

**¿La descarga de la DIAN es automática?**
No: tú filtras por fecha y tipo en la DIAN y la extensión descarga los XML (unos 10 minutos para tenerlas en la plataforma). Sin certificado, y los bloqueos de la DIAN no afectan a núvara. El Excel de la DIAN se puede subir, pero no trae los ítems, así que igual hay que bajar los XML. Las ventas se descargan con el mismo procedimiento, pero conviene no mezclar compras y ventas en un contador.

**¿Cuánto dura el token y qué hago si falla?**
Unos 25 minutos; aparece "token activo" en Causaciones › Acciones › Sincronizar. Si vence a mitad de descarga, pide uno nuevo y retoma por períodos más cortos. Si no se reconoce, copia la dirección del enlace del correo del token y pégala en una pestaña del mismo navegador donde tienes la sesión de núvara y la extensión. Si la DIAN te bota, descarga una factura a mano, recarga y retoma. El rango máximo para causar por lote es un año.

**¿Por qué solo veo 150 facturas si en la DIAN hay más de 200?**
Revisa el rango de fechas y que no haya varios tokens abiertos; luego compara con la DIAN en Archivo.

**¿Por qué algunas salen "fallidas" o no aparece una que sí llegó al correo?**
Las fallidas ya existían (por ejemplo, importadas del correo). Una factura puede no aparecer porque fue eliminada antes o porque el rango de fechas no cubre su emisión: amplíalo o sincroniza con la DIAN.

**¿Se duplican si descargo de nuevo o entran por correo y por DIAN?**
No: núvara filtra por CUFE y solo trae las que faltan. Las que llegan con el nombre de otra empresa no se suben. Importar una factura por su CUFE ya no existe (la DIAN cambió).

**¿Con qué frecuencia se baja el correo y cuáles lee?**
Es configurable (se usó cada 15 minutos) y puedes elegir desde qué fecha. Solo lee correos con CUFE o ZIP de factura, y solo del NIT de la empresa; no lee los personales. Puedes conectar varias cuentas (Google o IMAP). Si el cliente cambia la clave o quita la verificación en dos pasos, la conexión por clave deja de funcionar: reconecta, mejor con el inicio de sesión de Google. Si ves "probar conexión" en las etiquetas: configuraciones › integraciones, prueba y guarda la etiqueta. Para saber qué capturó núvara, usa la etiqueta de extracción.

**¿Qué hago con facturas que no vienen de la DIAN o llegan a otro correo?**
Facturas del exterior y legalizaciones de viaje: importa el PDF en Operaciones › Causaciones, o usa la legalización de gastos (flujo 15). Si llegan a un correo de gerencia, importa PDF, XML o zip, o conecta ese correo; cada documento se asigna por el NIT. También puedes cargar facturas físicas en PDF o foto. Un PDF sin XML no es factura electrónica válida: se trata como documento soporte.

**¿Por qué reaparecen facturas que eliminé?**
Antes se restauraban en cada sincronización; ahora van a la papelera y no vuelven solas. Hay un bloqueo para facturas no deseadas (flujo 17).

**¿Puedo procesar meses atrasados?**
Sí, sin restricción, por lotes. Lo recomendable es descargar todo el año, causar un mes primero, corregir y luego seguir con los demás.
<!-- fuentes: h-1b5ddf9047dc, h-722e015bdc9c, h-57509b5a0a19, h-4158a5316af6, h-85f50952dea3, h-8b268b156ae6, h-a2337e3bee2b, h-f05e1fbaf759, h-fc2e220f7888, h-f9917fa6ff6d, h-3a9a315786c4, h-ca456137eba3, h-20227cba2708, h-ac390aa796e4, h-e407b9d99c2a, h-fad9de9e12ed, h-3162db18d8b9, h-088d516b4772, h-0e3c41c7a48d, h-2021ec577723, h-f093ed31e568, h-3610bb8fc4d6, h-e15f41ef6e77, h-e5a14f4a5436, h-b451d169d162 -->

## Causación y revisión
**¿Qué pasa en cada estado?**
Pendientes: recibidas. Precausadas: procesadas y editables. Aprobadas: validadas. Archivadas: listas y ordenadas por año y mes. Nunca quedan causadas del todo: siempre pasan por precausadas para que revises y apruebes.

**¿Cuándo se cobran los créditos?**
Al pasar de pendientes a precausadas, una sola vez por factura aunque la recauses. Descargar no cobra, y las que borras de pendientes tampoco. Si precausas y no envías, ya se descontó. Un crédito no equivale a una factura: compras y ventas consumen cantidades distintas.

**¿Cómo corrijo una factura?**
Puedes editar todo lo que propone la plataforma, desde la lista o desde la revisión, las veces que quieras mientras no esté archivada. Después de enviada al software contable, se corrige allá (o se anula y se vuelve a causar). Para cambiar el producto de una línea, ábrelo, cambia la cuenta y guarda; puedes añadir líneas y buscar cualquier cuenta. Un descuadre de pesos se ajusta editando el débito del gasto; se acordó ignorar diferencias menores a 50 pesos. Para ver si quedó mal, compara el total contra el asiento: la plataforma avisa si falta un cargo, descuento o retención.

**¿Cómo aprende la plataforma y cómo lo controlo?**
De tus correcciones. Al guardar eliges si el aprendizaje es global, por proveedor o por concepto; si no quieres generalizar, guarda solo la factura. Si fue un error, recausa sin aprendizaje. Las ya causadas no cambian con el aprendizaje nuevo (corrige desde pendientes o con la corrección masiva cuando esté desplegada). Para limpiar un aprendizaje malo: Administración › Configuración › Aprendizaje, abre el proveedor y elimina o deja una sola corrección. Los cambios de la plataforma no afectan lo que haces: el equipo mantiene ambientes de prueba y producción; publica los viernes en la mañana, salvo errores.

**¿Hay que revisar factura por factura?**
Al inicio sí; luego por grupos (por tarifa de IVA, retención o cuenta de gasto): cambias la cuenta de un grupo y cambian todas, y apruebas el grupo. Con el patrón base aprobás en bloque lo que coincide y revisas las excepciones; la vista agrupada por cuenta ayuda a detectar errores antes de enviar. Puedes seguir precausando otros proveedores mientras revisas uno.

**¿Cuánto toma causar?**
Un mes con cientos de facturas, unas 3 horas una vez familiarizado; 14 facturas, unos 7 minutos con revisión. El segundo mes casi no toma nada: lo que cuesta es la primera configuración de reglas y centros de costo. Corre en segundo plano.

**¿Qué hago con anticipos, propinas y pagos?**
Anticipo: abre la factura en Causaciones y usa "asociar" en el anticipo disponible; la cuenta cambia a la del anticipo. Propina de restaurante: agrega una línea de débito a la cuenta de propinas por el valor de "otros cargos". Pago: se registra en pendientes en cualquier momento antes de enviar. Para saber por qué banco se pagó, el egreso indica la cuenta bancaria y se relaciona con la factura. La conciliación exige la factura causada primero.

**¿Y las facturas que no son gasto de la empresa, o los peajes?**
Elimínalas desde pendientes antes de causar. núvara causa por factura: no se juntan varias en un comprobante.

**¿Cómo sé si todas mis facturas se causaron?**
Archivo › año › mes › Comparar con la DIAN: subes el listado de la DIAN y miras "no encontradas" (suelen ser documentos equivalentes o soporte). Las notas crédito cuentan dentro del total y los documentos soporte emitidos por el usuario no están en núvara. El reporte baja en TXT (cópialo a Excel). Para ver si ya se montó una factura al software contable, busca el folio en el archivo: si aparece archivada y sin error, ya salió. Si Siigo la tiene pero núvara no la ve como causada, revisa que tenga prefijo.
<!-- fuentes: h-1b5ddf9047dc, h-2021ec577723, h-8072227e99ae, h-f9bbb8990054, h-20227cba2708, h-4158a5316af6, h-088d516b4772, h-c7dee3911650, h-ef76153985c0, h-c8c0317a8652, h-e407b9d99c2a, h-a921afd858ce, h-ca456137eba3, h-3610bb8fc4d6, h-e4a57c41cb5c, h-85f50952dea3, h-220ed21c4a5b, h-1bf95f17e863, h-f96fd89e31c6, h-57509b5a0a19, h-577942d4a1de, h-c18467806240, h-0e3c41c7a48d, h-f05e1fbaf759, h-ed9c331e7c17, h-f7e9b0b7d233, h-3162db18d8b9, h-1bf95f17e863, h-23bf40f47dd3 -->

## Retenciones e impuestos
**¿La plataforma calcula la retención en la fuente?**
Sí, por concepto y según la base de la factura, aunque la factura no la traiga; si hay ítems de conceptos distintos, aplica varias. Las tarifas son las de la tabla de retención (por ejemplo 4 % servicios, 11 % honorarios, 2,5 % compras). Suma las facturas del mismo proveedor dentro de un ciclo de 24 horas, por eso una factura bajo la base mínima puede llevar retención. Puedes agregar una retefuente personalizada desde el detalle (ícono de ojo), también en una factura aprobada.

**El proveedor es autorretenedor o gran contribuyente pero se retuvo. ¿Qué hago?**
Edita la ficha del proveedor (el lápiz de la confianza dentro de la factura) y márcalo; queda para las siguientes. La plataforma lo lee de la factura; si no viene, lo marcas una vez. No hace falta parametrizar proveedor por proveedor: solo marcas a mano grandes contribuyentes y autorretenedores.

**¿ReteICA y ReteIVA son automáticos?**
ReteICA se calcula si la factura trae municipio y actividad económica; si no, guardas la actividad en el proveedor. Con varias reglas del mismo municipio gana la de más arriba (las específicas arriba, la genérica abajo). Hay una configuración global para no hacerlo uno por uno. Tiene una falla en revisión: puede tomar otra cuenta con la tarifa correcta; corrige la cuenta a mano y guarda con aprendizaje. ReteIVA aún no es confiable: se configura (agente retenedor) o se agrega a mano; que cobre ReteIVA a un régimen ordinario es una falla en revisión. En ventas, el ReteICA se configura por sede o ciudad de prestación (ver el flujo de ReteICA por municipio). Si tu usuario es del Régimen Simple, la plataforma no detecta todas las retenciones: ajusta a mano.

**¿Cómo manejo el IVA?**
La parametrización queda guardada en la configuración tributaria; no se repite cada mes. Lee el IVA de los ítems y lo trata según esa configuración. Si va como mayor valor del gasto, marca las cuentas en IVA no descontable (hoy aplica a todo; separarlo por clase era un ajuste pendiente); sin claridad, usa "mayor valor" y revisa con el contador. Con IVA mixto (exento, 5 % y 19 %), activa "manejo de facturas mixtas" en Tributaria y asigna la cuenta de cada base. Para un impuesto raro (bolsas, azúcar): habilítalo en la configuración tributaria con una cuenta. El IVA descontable pide, como filtro inicial, factura electrónica con IVA relacionada con la actividad. El IVA prorrateado con AIU se ajusta a mano.

**¿Cuándo aplica el documento soporte?**
A compras a personas naturales no facturadoras electrónicas y a suscripciones del exterior; nunca a personas jurídicas colombianas. Si compraste en un comercio sin factura, no hay documento soporte: exige la factura o lleva el gasto como no deducible. Las cajas menores no llevan retención por montos pequeños; solo IVA y gasto. En impuestos hay un calendario de vencimientos según las responsabilidades de la empresa.
<!-- fuentes: h-2021ec577723, h-12027d283e58, h-e46ab47fa162, h-1b5ddf9047dc, h-d35e1cc2634f, h-e5a14f4a5436, h-568b1428fb13, h-b66360b1cf5c, h-57509b5a0a19, h-220ed21c4a5b, h-1d261692318e, h-1adf87b5dfa6, h-fad9de9e12ed, h-66eba239a3cb, h-6518cb30d010, h-ed9c331e7c17, h-78a6d7ffada0, h-c18467806240, h-19e5ebd1eb97, h-1b5ddf9047dc -->

## Centros de costo y reglas
**¿Tengo que crear una regla por cada centro de costo?**
No; si comparten lógica, se agrupan. Un proveedor puede tener varias reglas. Si hay varias que aplican, gana la más específica (más condiciones). Las palabras se separan con Enter o coma. Las reglas son por empresa.

**¿Qué diferencia hay entre aprendizaje y regla fija?**
El aprendizaje es por proveedor (o global) y sale de tus correcciones; la regla fija se define por condiciones (texto, cuenta) y aplica sin importar el proveedor.

**¿Cómo traigo y asigno los centros de costo?**
Importa el archivo de Siigo, o pega código y nombre desde Excel (Importar › pegar texto). Con la sincronización de etiquetas del correo se cruzan también las facturas de la DIAN (resincroniza); los faltantes se crean en la plataforma. En bloque: Precausadas › Acciones, filtra los registros sin centro y asigna. Si el cliente no etiquetó la factura, usa "solicitar al cliente". La etiqueta funciona solo con Gmail y no es bidireccional (el cliente etiqueta en su correo); los estados se resincronizan a mano, y si cambias la etiqueta se edita la asociación en Centros de costo. Una vez activos por el asesor, se aplican a cuentas de gasto y por pagar.

**¿Puedo repartir una factura entre varios centros?**
Se elige por producto o línea y, según el asesor en agosto, se puede dividir la factura (ver `por-confirmar.md`). Sin centros de costo en tu plan, puedes sacar informes por placa con una regla por placa o escribiéndola en observaciones; una placa desconocida no se asocia a ningún centro. El centro de costo es opcional y no se deduce solo: la exportación lo lleva solo si defines parámetros.
<!-- fuentes: h-19e5ebd1eb97, h-a921afd858ce, h-e4a57c41cb5c, h-ac390aa796e4, h-088d516b4772, h-3a9a315786c4, h-a59810d87210, h-b451d169d162, h-3b10fe0f0da1, h-4cae519c5dd0, h-ac5a1e51c5ed, h-577942d4a1de, h-3bfcdd9e3190, h-b139a4b8f2fe, h-b66360b1cf5c -->

## Productos e inventario
**¿Cómo se asocian los productos?**
Una sola vez por producto, solo lo que es inventario (no arriendos ni nómina). Aprobar la sugerencia de vinculación o rechazarla; si la rechazas, creas un producto nuevo, lo asocias a uno existente o lo revisas en inventario. En cada línea aparece "nuevo" o "existente". El botón de deshacer revierte un vínculo equivocado; los vinculados salen en verde y los sin vincular en oscuro; los que ya no son inventario van a "productos inactivos". Inactivar en bloque no está implementado: es más fácil vincularlos a la cuenta correcta o rechazarlos en "aprobar productos". Cambiar la codificación después exige volver a asociarlos.

**¿Por qué no se actualizó el inventario si se enviaron bien?**
La opción de mover stock en la integración estaba desactivada o los productos no estaban asociados. Con muchas cuentas del grupo 14, aprende por proveedor; si el destino depende del lote, lo indicas al revisar. Para mover líneas (por ejemplo de ferretería a inventario) abre la lista de productos de la factura, selecciona y asigna la cuenta; el resto queda en la original. Una compra con productos de varias sedes se registra con el prefijo de la sede que pidió, cambiando la bodega de los demás ítems. núvara no impide facturar en negativo: depende de World Office.

**¿Puedo analizar precios y costos por producto?**
Sí: la página de cambios de precio filtra por variación mínima en porcentaje, y inteligencia de compras muestra cantidad, gasto, porcentaje y precio promedio (con o sin IVA), por categorías que defines y la plataforma aprende. Sale a Excel. Conviene sincronizar primero el correo y luego la DIAN.
<!-- fuentes: h-72ec6e3363ae, h-b139a4b8f2fe, h-a59810d87210, h-ac5a1e51c5ed, h-fccf335cc6f1, h-a30f11ead348, h-78a6d7ffada0, h-80ec3986bf1f, h-c6fcf2a8890e, h-c7dee3911650, h-8072227e99ae -->

## Exportación y software contable
**¿Con qué software se conecta?**
Siigo por API, World Office por API con token, y cualquier programa que acepte importar un archivo compatible con Siigo (se mencionaron Alegra y otros); el sitio lista Helisa, Siigo PyME y Contai por archivo. La plantilla de escritorio de World Office no sirve con la nube: la nube usa usuario API y token. No hay plazo fijo para que World Office habilite la integración; se coordina con núvara. Con dos empresas, se envía un token por empresa. El inventario no es obligatorio. La parametrización de núvara es interna y respeta la configuración de Siigo; los datos de contacto de la aplicación en Siigo son para trazabilidad y pueden ser otros. núvara no crea cuentas en Siigo (solo proveedores): las cuentas se crean allá.

**¿Cómo envío a Siigo?**
Aprueba, archiva y envía con el botón de Siigo en el módulo de archivo (hasta 50 por lote; por archivo, máximo 500 comprobantes, divididos en partes). Los impuestos y retenciones se vinculan una sola vez; el prefijo se configura en la plataforma y solo importas el consecutivo. En el comprobante indicas desde qué consecutivo numerar (el número de la factura o el inicial que definas) para evitar choques con registros manuales. Cada factura tiene un indicador de consistencia que compara lo enviado. El PDF original queda en una URL en observaciones; si el correo está conectado, apunta al PDF original. Puedes descargar los PDF (con el número de factura en el nombre) desde Archivo.

**¿Cómo llevo el detalle por producto?**
Activa "detallar por producto" en los ajustes de envío (o la casilla "detallar mercancía por producto" al exportar); si no, se totaliza. También puedes importar dos archivos (contabilización y movimientos de inventario).

**¿Por qué Siigo rechaza o ignora lo que envío?**
Revisa: plan de cuentas, terceros creados primero, archivos cerrados, teléfonos de 10 dígitos, prefijos de máximo 6 caracteres, cuentas activas, comprobante con libros oficiales y fechas bloqueadas. "Periodo bloqueado" suele ser un centro de costo inexistente u obligatorio. "Cuenta no marcada con impuestos": crea el impuesto en Contabilidad › Impuestos de Siigo (con su código) y asóciale la cuenta. El código 01 se cambia a 1 en la vista previa. Si Siigo ignora comprobantes al reimportar, esos consecutivos ya existían (incluso eliminados): cambia el consecutivo. Si rechaza por el proveedor, corrígelo en Siigo y reenvía solo esas. Una nota crédito que no sale pide una cuenta tipo 24 para IVA de devolución; usa un tipo de comprobante propio. "Desbordamiento numérico": pon el número de documento como texto y borra filas sobrantes. Si exportaste sin una retención, hay que añadirla a mano en el software. Importar varias veces no duplica; solo carga lo que falta.

**¿Puedo exportar reportes?**
Una vez aprobados los documentos, a Excel o PDF. El balance de prueba por tercero no se ve en núvara hoy (solo por cuenta). Las ventas pueden cargarse con la plantilla de compras (confirmado en World Office).
<!-- fuentes: h-722e015bdc9c, h-78a6d7ffada0, h-f65850e8b9aa, h-20227cba2708, h-797a6adc3390, h-7ff23bccd383, h-f9bbb8990054, h-23bf40f47dd3, h-12027d283e58, h-1b5ddf9047dc, h-b967a73c48ed, h-1adf87b5dfa6, h-6efbb6e48a66, h-4e1fc0ab7387, h-4cae519c5dd0, h-c18467806240, h-ac5a1e51c5ed, h-a2337e3bee2b, h-85f50952dea3, h-e4a57c41cb5c, h-220ed21c4a5b, h-577942d4a1de -->

## Ventas, nómina y otros módulos
**¿Las ventas y los documentos soporte se causan en núvara?**
Sí: se suben como las facturas, en un proceso separado de las compras porque la estructura es distinta, y la extensión sirve igual (el débito de créditos depende de si es compra o venta). La plataforma distingue compra de venta comparando el NIT de la empresa con el del emisor y el receptor. Se diseñó sobre todo para compras: si descargas menos ventas que las de la DIAN, envía el archivo y el token al soporte. Para ventas, descarga mes a mes.

**¿Se emite la nómina electrónica desde núvara?**
Hay un módulo de nómina que emite directo a la DIAN, con el asiento en el software contable (flujo 18); la carga es por archivo plano. En 2026 se habló de él como módulo por habilitar; trátalo como en validación (ver `por-confirmar.md`).

**¿Hay conciliación, egresos o cajas menores?**
La conciliación bancaria (por montos y fechas, explicando lo no conciliado) y los egresos están en desarrollo o validación (ver `producto.md`). Escanear documentos de caja menor por WhatsApp o Telegram está en pruebas. Un informe para proyectar impuestos antes de causar está propuesto, sin construir.

**¿Los usuarios ven cuánto gastó cada empresa?**
En inicio (billetera) está la trazabilidad; se está habilitando un panel por empresa y por auxiliar. Un usuario revisor puede entrar a archivos, ver la factura junto a la causación y anular o corregir.
<!-- fuentes: h-1b5ddf9047dc, h-23bf40f47dd3, h-4158a5316af6, h-c7dee3911650, h-2eed69e6f27f, h-e4a57c41cb5c, h-e15f41ef6e77, h-f7e9b0b7d233, h-3a9a315786c4, h-2bcaf1438320, h-d2a18ab0af93, h-2021ec577723, h-b451d169d162 -->

## Precios y comercial
**¿Cuánto cuesta causar una factura de venta?**
200 COP por factura (confirmado).

**¿Cuánto cuesta causar una factura de compra?**
510 COP por factura, es decir 5,1 créditos, con 1 crédito = 100 COP (precio de lanzamiento del sitio oficial).

**¿Me cobran si no uso la plataforma?**
Hay un mínimo mensual de consumo de 80.000 COP (confirmado). Cada mes se descuenta al menos eso del saldo; lo que no se consume se acumula para el mes siguiente.

Lo que sigue está a validar.

**¿Hay permanencia mínima?**
No se mencionó cláusula de permanencia.

**¿Qué incluye el primer pago?**
La recarga inicial con la capacitación (2 horas más 1 hora de acompañamiento).

**¿Quién responde si hay un error de la plataforma?**
El chat de soporte integrado es el canal oficial.
<!-- fuentes: h-c18467806240 -->

## Créditos y soporte
**¿Cuánto cuesta cada causación?**
Compra $510, venta $200 (ver "Precios y comercial"). Para ver cuántas facturas te alcanzan, haz clic en el saldo: muestra la capacidad en compras y en ventas. Los créditos son de la organización, se reparten entre las empresas y, según lo definido, no vencen.

**¿Con qué puedo pagar?**
Tarjeta; transferencia con comprobante por el grupo.

**¿Cuánto dura una capacitación?**
Normalmente unas 2 horas; en una sesión se habló de una sola de 30 minutos a una hora con asistencia en la primera temporada (ver `por-confirmar.md`). Hay soporte por WhatsApp y videos tutoriales en preparación; quien paga mensualidad tiene soporte técnico continuo. El sitio ofrece "Iniciar prueba en vivo".

**¿Cuánto tarda el soporte?**
En promedio unos dos días: lo simple, el mismo día; lo complejo, hasta dos días. Una adición a medida se trata como requerimiento especial, no como soporte. Se propone horario de 8:00 a. m. a 5:00 p. m. y sábados hasta mediodía (aún sin formalizar); los errores graves se atienden de inmediato.
<!-- fuentes: h-3164413987d2, h-4cae519c5dd0, h-f9bbb8990054, h-f093ed31e568, h-211a96abdf85, h-defeafd88304, h-c18467806240 -->
