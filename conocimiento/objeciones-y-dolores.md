# Objeciones y dolores

Lo que los usuarios y prospectos dicen que les duele y lo que les frena, tal como salió en capacitaciones, soporte y demostraciones en vivo hasta octubre de 2026. Sirve para abrir un guion con el dolor, mostrar la salida y no prometer lo que está en desarrollo. Los precios confirmados están en `sitio-web.md` y en `CLAUDE.md`; cualquier otra cifra comercial que haya dicho un asesor está sin validar (ver `por-confirmar.md`).

## Dolores recurrentes

| Dolor | Cómo se abordó |
|---|---|
| Mucho tiempo causando facturas a mano (trabajar de noche, sobrecarga) | Causación en lote y aprobación por grupos; ejemplo de 140 facturas en una sesión. |
| Alto volumen de facturas pequeñas | Se sugirió agrupar gastos menores en el proceso interno; eliminar lo irrelevante antes de precausar. |
| Facturas que no llegan al correo o llegan a correos equivocados (error de NIT, documentos soporte) | Conectar DIAN y correo; comparar para saber qué proveedores corregir. |
| Bloqueos del portal de la DIAN | Extensión de navegador; truco de descargar una manual y recargar. |
| Contabilizar mal IVA o retenciones | Pruebas con facturas reales, reglas simuladas, correcciones con alcance global/proveedor. |
| Facturas de varios centros de costo | Reglas por centro y sincronización de etiquetas de correo (ver más abajo). |
| Falta de personal auxiliar; la gerencia causa | Aprobación por lote y acompañamiento del contador. |
| Otra solución con soporte lento, captchas de la DIAN y errores de IVA | Descarga por extensión y cálculo por bases; soporte rápido por chat. |
| Hay que borrar facturas una por una en el software contable | Exportar por fechas y probar con una factura antes del lote. |
| Costos altos del software contable | Algunos usuarios evalúan cambiar de software; núvara exporta a varios por archivo plano. |
| Facturas con compras y servicios mezclados en un solo documento | Corrección continua por parte del equipo; reportar casos. |
| Retenciones que los compradores cambian arbitrariamente en ventas | Revisión factura por factura; reglas particulares por comprador. |
| Gastos de viaje con comprobantes en otros idiomas | Legalización de gastos y traducción en desarrollo. |
| Entidad pública con alto volumen y software restringido | Empezar con casos básicos de causación por credenciales (ver `demostraciones-y-ventas.md`). |
| Volumen bajo frente al costo mensual | Se mostró el efecto del consumo mínimo; el prospecto pidió revisar números. |
| Procesos atrasados por meses | Sincronización por lotes y sesiones de acompañamiento. |
| Facturas manuales fuera de la plataforma que no se pueden conciliar | Acuerdo de pasar todo por núvara para poder comparar con la DIAN. |

## Dolores por tema

### Tiempo y carga del contador
- Causar a mano una factura de compra toma entre 6 y 10 minutos según los usuarios; por eso las causaciones se dejan para el final del mes. Con cientos de facturas mensuales, un cliente llegó a quedar abandonado.
- Un mes grande toma de tres a cinco días de trabajo (imprimir, calcular impuestos a mano, subir al software contable). En los cierres y en temporada alta (diciembre a marzo) no queda tiempo para aprender una herramienta nueva.
- Descargar las facturas, sobre todo si llegan a varios correos además de la DIAN, es el mayor desgaste y compite con la conciliación bancaria como segunda tarea más pesada. Los impuestos tienen fecha fija: el contador quiere las causaciones al día antes de conciliar.
- Quien causa es a veces la gerencia, la auxiliar o una persona que implementa sola sin dominar el software contable. Una firma con rotación de auxiliares duplicó la carga de la contadora; otra quiere un primer filtro (la plataforma), un segundo (el auxiliar) y un tercero (la contadora).
- Los registros iniciales y la configuración se sienten largos, aunque se hacen una sola vez.

**Cómo se abordó:** causación casi en tiempo real en vez de fin de mes, aprobación por grupos y sesiones de seguimiento para ponerse al día. Un contador estimó que pasaría de unas 12 horas a unas 2 de revisión por empresa: es una estimación a validar, no una cifra medida.
<!-- fuentes: h-0e3c41c7a48d, h-2eed69e6f27f, h-356b484bdf40, h-577942d4a1de, h-ac390aa796e4, h-f7e9b0b7d233, h-ca456137eba3, h-32cdc786c09c, h-78a6d7ffada0, h-797a6adc3390, h-364a64863009, h-a2337e3bee2b, h-f9bbb8990054, h-e5076d0a7373 -->

### Descarga, DIAN y facturas que faltan
- El token de la DIAN lo tiene el cliente final o llega a un correo que maneja otra persona; el contador independiente depende de que le respondan y todo el flujo de descarga se frena.
- El portal se cae, se pone lento en temporada de exógena, bloquea si se cambia de pestaña y falla la autenticación; el usuario repite descargas sin saber por qué. Si usa un token cruzado, el resultado sale incompleto.
- Quien depende solo de la DIAN o solo del correo pierde facturas y, con ellas, IVA descontable. Hay proveedores cuyas facturas no llegan al correo y solo están en la DIAN. Un usuario migró unas facturas y no entendía las faltantes hasta usar la comparación.
- Falta un indicador de progreso de la sincronización de correo y es difícil saber qué prefijos o consecutivos faltan cuando la secuencia salta números.
- Reconectar el correo cuando un cliente cambia la clave consume tiempo; el bloqueo de Google al conectar el correo impide traer el PDF original; crear la contraseña de aplicación es difícil; conectar varias cuentas no es intuitivo; algunas organizaciones restringen la extensión de Chrome.
- Una factura recibida solo como PDF, sin XML, no se procesa.

**Cómo se abordó:** dos vías que se complementan (correo y DIAN), extensión para descargar y comparación con la DIAN para ver qué falta. Una usuaria documentó con grabaciones los incidentes de la DIAN para respaldarse ante una sanción.
<!-- fuentes: h-20227cba2708, h-4158a5316af6, h-f9917fa6ff6d, h-c8c0317a8652, h-f05e1fbaf759, h-fc2e220f7888, h-85f50952dea3, h-c7dee3911650, h-722e015bdc9c, h-c6fcf2a8890e, h-e15f41ef6e77, h-e5076d0a7373, h-577942d4a1de, h-8b268b156ae6, h-ed9c331e7c17, h-6efbb6e48a66, h-57509b5a0a19, h-e407b9d99c2a, h-fad9de9e12ed, h-1b5ddf9047dc, h-0e3c41c7a48d -->

### Cuentas, IVA y retenciones
- La plataforma no siempre sugiere la cuenta que la contadora conoce de memoria (dotación, mantenimiento, papelería). Un mismo concepto (aseo, transporte) que cae siempre en la cuenta equivocada obliga a corregir factura por factura.
- El usuario siente trabajo repetido: la corrección no se aplicó sola, hay que repetirla el mes siguiente o la plataforma "aprendió tarde". Correcciones iniciales hechas con otra práctica (llevar todo al costo y reclasificar al cierre) dejaron aprendizajes contradictorios.
- Preocupa que un error de cuenta infle un activo si se aprueba en lote sin revisar, y que la corrección se aplique a varias líneas a la vez.
- ReteICA cambia por municipio y por actividad; hay que agregarlo a mano. La retención acumulada de un proveedor recurrente en el mes exige estar pendiente de fechas; la plataforma suma las compras del día, pero no siempre cubre el caso del mes completo.
- Facturas con dos tarifas de IVA, impuesto al consumo, propinas, bases especiales, importaciones, ventas con AIU, saldo a favor y recibos de servicios públicos con líneas omitidas terminan revisándose a mano. Las notas crédito se leen a veces como factura y desajustan el valor.
- Las reglas son difíciles de entender: no está claro su orden, por qué una no se aplica ni por qué no deja guardar una condición. Tras importar el plan de cuentas, una retención apareció con el nombre equivocado.
- Quien no domina el IVA no sabe cuándo va a mayor valor o a descontable; las dudas de clasificación (costo de producción, costo directo o gasto) las resuelve el contador, no la plataforma. Los planes de cuentas atípicos cuestan trabajo de parametrizar.

**Cómo se abordó:** pruebas con facturas reales, reglas por proveedor o por empresa, y mientras más específica la configuración de cada empresa, mejor funciona. El balance de prueba por terceros acelera el primer aprendizaje. Una firma vio que la revisión se acorta mucho con reglas bien armadas.
<!-- fuentes: h-2e1e6ac39318, h-ba672f6fbb0d, h-220ed21c4a5b, h-3610bb8fc4d6, h-e4a57c41cb5c, h-e5a14f4a5436, h-e407b9d99c2a, h-d35e1cc2634f, h-3162db18d8b9, h-356b484bdf40, h-e46ab47fa162, h-57509b5a0a19, h-2021ec577723, h-1b5ddf9047dc, h-78a6d7ffada0, h-2eed69e6f27f, h-c18467806240, h-a921afd858ce, h-f05e1fbaf759, h-20227cba2708, h-364a64863009, h-12027d283e58 -->

### Centros de costo y unidades de negocio
- Un mismo proveedor atiende varios centros de costo (distintas áreas, hotel y restaurante, fincas, vehículos), así que no se deduce el centro solo por proveedor, sobre todo en facturas históricas. El filtro y el cambio en lote no siempre respetan centros y subcentros.
- Muchos clientes no etiquetan a tiempo y la firma cierra el mes con cientos de facturas sin centro de costo; se discute con el cliente qué facturas existen. Hoy se lleva un Excel enorme para relacionar cada factura con su unidad de negocio.
- En Siigo, algunos planes no manejan centros de costo, y donde son obligatorios bloquean el envío si no se mandan.

**Cómo se abordó:** el cliente etiqueta la factura en su correo y la firma trabaja solo en la plataforma; la etiqueta de faltantes deja visible lo pendiente y sirve de evidencia ante discusiones.
<!-- fuentes: h-088d516b4772, h-19e5ebd1eb97, h-2021ec577723, h-3162db18d8b9, h-356b484bdf40, h-3a9a315786c4, h-3b10fe0f0da1, h-577942d4a1de, h-6518cb30d010, h-b451d169d162, h-e407b9d99c2a, h-23bf40f47dd3 -->

### Inventario y productos
- La primera asociación de cientos de productos es lenta: los proveedores nombran distinto el mismo producto (orden de palabras, medidas, marca), los productos nuevos de un proveedor llegan todos como "nuevos" y a veces solo una persona sabe a qué corresponde cada referencia. El usuario prefiere asociar desde una lista con buscador y no factura por factura.
- En World Office hay que repetir bodega y prefijo en cada línea aunque toda la factura vaya al mismo destino; el usuario pide un solo clic. Siigo no deja cambiar la categoría de un producto una vez creado.
- Temor central: que el inventario quede desordenado o en negativo. Por eso se prueba con una sola factura antes de dar autorización de escritura. Hubo inventarios con saldos negativos o inflados por el costeo mensual no ejecutado en el software contable.
- Los programas contables suelen registrar solo el total de la compra: el contador no puede responderle a la gerencia cuánto se compró de cada referencia ni quién ofrece mejor precio, ni ver subir los precios de un proveedor. Se piden informes por producto.
- Recomendación del asesor: no replicar la asociación de productos de núvara en un programa que ya la hace por su cuenta con solo pegar el CUFE.

**Cómo se abordó:** mostrar primero la causación y desde ahí explicar que el inventario se maneja a nivel de factura; la plataforma aprende con el uso; probar con una factura real antes del lote.
<!-- fuentes: h-4cae519c5dd0, h-72ec6e3363ae, h-a59810d87210, h-ac5a1e51c5ed, h-b139a4b8f2fe, h-fccf335cc6f1, h-80ec3986bf1f, h-f65850e8b9aa, h-ac390aa796e4, h-c6fcf2a8890e, h-c7dee3911650, h-1adf87b5dfa6, h-23bf40f47dd3, h-66eba239a3cb -->

### Software contable y exportación
- Los archivos planos son estrictos (campos en cero, decimales, prefijos): un error hace fallar el cargue completo y los mensajes de importación no dicen qué corregir en núvara. Hay que adecuar el archivo para cada programa y suele quedar pendiente tras la capacitación.
- Un plan de cuentas migrado con cuentas inexistentes o mal creadas hizo fallar la importación del primer mes; corregir cuenta por cuenta en el software contable es lento.
- La conexión por API con Siigo exige credenciales que mucha gente no sabe sacar. Terceros mal creados o facturas a nombre de una persona bloquean el envío; las firmas que venden a muchos terceros nuevos sufren cuando el programa destino no los reconoce.
- Quien usa un programa solo de contabilidad y otro de facturación termina con un doble proceso por archivo plano.

**Cómo se abordó:** archivo plano o API (si falla la API se usa el plano), validar con una factura antes de exportar por fechas, acompañamiento del asesor para la vinculación y un asistente propuso videos cortos para sacar las credenciales.
<!-- fuentes: h-19e5ebd1eb97, h-1adf87b5dfa6, h-7ff23bccd383, h-ac5a1e51c5ed, h-b967a73c48ed, h-f96fd89e31c6, h-fad9de9e12ed, h-fc2e220f7888, h-211a96abdf85, h-6efbb6e48a66, h-ef76153985c0, h-ea07c173c7f7, h-3bfcdd9e3190, h-6518cb30d010, h-d2a18ab0af93 -->

### Informes y trazabilidad
- Las firmas arman a mano cada mes un consolidado de compras y gastos por proveedor desde el Excel de la DIAN, y sus clientes terminan pidiendo el detalle de una factura puntual (fecha, proveedor, base, impuesto, total y retención). El informe mensual detallado es un entregable clave.
- Piden la descripción del comprobante con el número de factura (para comparativos mensuales contra la DIAN), un buscador global para encontrar facturas aprobadas o archivadas, reportes por tercero y poder ver el detalle de productos en el asiento. Quieren proyectar IVA generado y descontable antes del vencimiento sin haber causado.
- Por temor a una fiscalización años después, necesitan ver el soporte y el detalle de cada compra.

**Cómo se abordó:** la factura original va al lado de la causación y el trabajo es factura por factura, con menor margen de error que deducir valores con fórmulas desde el reporte de la DIAN.
<!-- fuentes: h-2bcaf1438320, h-568b1428fb13, h-c7dee3911650, h-85f50952dea3, h-ac5a1e51c5ed, h-040559feec95, h-a8886865ddfd, h-577942d4a1de, h-78a6d7ffada0 -->

### Otros procesos que piden
- Conciliación bancaria (descarga de Excel del extracto y cruce a mano, difícil cuando todo se acredita contra el banco), nómina, egresos y recibos de caja, cajas menores (un egreso por cada factura pequeña) y cuentas por cobrar con ingresos que llegan un mes después. Algunos prospectos quieren verlos ya; son módulos en desarrollo según el equipo (2026) y no se presentan como disponibles.
- Gastos que no llegan electrónicos (intereses, extractos) y pagos en efectivo sin trazabilidad quedan fuera de la causación.
<!-- fuentes: h-2eed69e6f27f, h-f7e9b0b7d233, h-364a64863009, h-3a9a315786c4, h-e5076d0a7373, h-ed9c331e7c17, h-3bfcdd9e3190, h-6518cb30d010, h-ac390aa796e4, h-01b5a1f7ff0a -->

### Uso, pantalla y arranque
- La interfaz no se ve completa en pantallas pequeñas (botones recortados, letra pequeña en pantallas compartidas); una usuaria casi abandona por no encontrar un botón. La vista de causación se describe como muy técnica y con acciones sueltas.
- Hay que cargar balance, configurar el archivo plano y las formas de pago; muchos usuarios dependen del asesor y quieren autonomía. Probar con un balance incompleto o con datos ficticios no permite evaluar: prefieren ver una factura real contabilizada.
- Los usuarios olvidan los pasos entre capacitaciones y piden el video para practicar con otra empresa. Los usuarios de la versión de prueba se incomodan si el diseño cambia pronto.
- Muchas consultas al soporte no son errores sino preguntas de uso (cómo vincular el correo). Con más usuarios aparecen formas muy distintas de mandar la contabilidad.
<!-- fuentes: h-78a6d7ffada0, h-a2337e3bee2b, h-ac5a1e51c5ed, h-2021ec577723, h-c7e2fc3560d2, h-f65850e8b9aa, h-19e5ebd1eb97, h-b5c98e65e8fb, h-b139a4b8f2fe, h-b967a73c48ed, h-a59810d87210, h-8daa39cfcb56, h-211a96abdf85, h-0e3c41c7a48d, h-3162db18d8b9 -->

### Estabilidad y soporte
- Lentitud o caída del servidor justo cuando el usuario necesitaba causar; semanas de inestabilidad; cambios de versión que hicieron temer que lo aprobado se hubiera dañado. El equipo fijó una política de cambios los viernes para evitarlo.
- El soporte es por chat y los errores dependen de que el usuario los reporte, sin alertas automáticas. Los usuarios valoran la rapidez de la atención y entienden que hay una curva.
<!-- fuentes: h-8072227e99ae, h-85f50952dea3, h-a921afd858ce, h-2e1e6ac39318, h-ba672f6fbb0d, h-57509b5a0a19, h-92777206d505, h-211a96abdf85, h-e5a14f4a5436, h-a2337e3bee2b -->

### Lo que mueve a cada perfil
- **Contador:** dignidad profesional (las tareas repetitivas le quitan tiempo para planeación y análisis) y desgaste de descargar, filtrar y sumar.
- **Empresario:** el costo del equipo contable y la dependencia de una sola persona. Una firma contable es ambas cosas: profesional y empresario que paga equipo.
- **Contador independiente con pocas empresas:** se identifica con el lado del empresario.
- **Quien paga las facturas** es el empresario, y el contador no siempre sabe cómo ni cuándo se pagó cada una.
<!-- fuentes: h-f093ed31e568, h-ca456137eba3, h-defeafd88304, h-01b5a1f7ff0a, h-737965f4a467 -->

## Objeciones y dudas

**"Mi volumen es bajo; la tarifa por factura sube."**
El asesor explicó recarga inicial, consumo mínimo desde el segundo mes y créditos acumulables; no hubo descuento en la sesión. El prospecto pidió revisar números. (El mínimo mensual confirmado es $80.000, ver `sitio-web.md`.)

**"Pagar lo mismo por crédito si compro 10.000 que si compro 15."**
Una empresa grande lo planteó. Hay una tarifa especial desde 1.500 causaciones al mes que se negocia por WhatsApp (ver `sitio-web.md`). Los contadores con 10 o 15 empresas de volumen cambiante prefieren el monedero por consumo a un plan fijo.

**"¿Me van a subir el precio después de entrar?"**
El asesor dijo que no hay aumento previsto (ver `por-confirmar.md`).

**"La estructura de precios y descuentos no se entiende."**
Se pidió una tabla pública clara con precios y descuentos; mezclar planes y créditos "enreda", por eso se prefiere un solo esquema de créditos.

**"Debo consultarlo con los dueños" / "voy a consultarlo internamente."**
Se agendó una llamada de seguimiento pocos días después. Es un patrón: la decisión de pago pasa por los propietarios.

**"Cobrar por causación sale caro con muchas facturas, y a la firma no le cuadra si el cliente no paga el software aparte."**
Se respondió que el cobro es por causación y no por descarga, y que el costo se compara con el de un asistente dedicado a causar.

**"Se me acabaron los créditos más rápido de lo esperado" / "me da miedo quedarme sin créditos a mitad de la tarea."**
Se descubrió que las ventas que llegaban por correo consumían créditos; en otro caso el saldo estaba mal configurado. Los documentos que el usuario no quiere causar (peajes, compras personales) se eliminan de pendientes y no cuestan créditos; el bloqueo evita que vuelvan (ver `por-confirmar.md`).

**"Mi compra personal llega al correo."**
Los estados permiten dejarla en pendientes o eliminarla; el bloqueo evita que vuelva.

**"¿Es seguro que no se duplique en mi software?"** / **"Me da miedo equivocarme al exportar."**
Nada se exporta sin aprobación; se recomienda exportar por fechas y verificar si el documento ya existe.

**"La comparación con la DIAN no me confirma lo del software contable."**
Solo compara con la DIAN lo cargado en núvara; hay que causar todo por la plataforma.

**"No sé de contabilidad."**
Se requiere la presencia del contador de la empresa para definir IVA y cuentas; se agenda una reunión específica. Un vendedor sin dominio del IVA pierde credibilidad rápido frente al contador.

**"¿Es complicado de aprender?" / "La configuración inicial parece larga y estresante."**
La dificultad es contable, no de plataforma; se hace una sola vez y se refuerza con inducción y videos.

**"Quiero verlo desde el principio."**
Una persona que entró a media sesión pidió una inducción completa; se programó otra.

**"Ya pagué muchas facturas y me hablan de otro pago."**
Un usuario llegó confundido por una comunicación previa sobre pagos; conviene que el equipo comunique con claridad cuándo y qué se cobra (ver `por-confirmar.md`).

**"¿Puedo confiar en que la causación quedó bien?" / "Una causación totalmente automática no refleja mi realidad."**
Se mostró la factura original junto a la causación y la verificación "todas cuadran". Esa objeción es la razón de ser de la aprobación: el contador revisa IVA descontable y retenciones antes de exportar.

**"No quiero que retenga a mis proveedores autorretenedores."**
Se muestra cómo marcar autorretenedor y gran contribuyente. Una firma esperaba que la plataforma los marcara sola al leer el PDF y le preocupa depender del equipo para reglas complejas.

**"¿La plataforma entiende el contexto de mi empresa, o aplica reglas planas?"**
Una firma con clientes de muchos sectores (productora, servicios, hotel) lo exigió. Se explicó que la causación se personaliza por empresa; si no identifica un producto, la retención sale con el valor por defecto y el contador corrige. Una contadora prefirió esperar al primer ejercicio completo para decidir.

**"Mi software contable es otro."**
Se ofrece archivo plano o API; si no funciona la API se usa plano.

**"Mi correo es Outlook y la herramienta opera con Gmail."**
Se respondió que la vinculación con Outlook estaba en desarrollo; otra sesión ya la usó (ver `por-confirmar.md`). Las etiquetas de centro de costo no deben ofrecerse para otros correos hasta que existan.

**"El software de ventas o inventario del usuario no está integrado."**
Se reconoció la limitación: núvara hoy es causación de compras; se usan balances parciales.

**"¿Y mis datos? Entregar mis compras revela proveedores y precios a mi competencia."**
Una empresa grande de consumo pidió políticas de tratamiento de datos claras. Se puede responder con lo público: cada empresa opera en un entorno aislado y las credenciales se cifran (ver `sitio-web.md`). Conviene tener las políticas a mano.

**"Pedirme el balance, el RUT y el acceso al correo es invasivo."**
Frena demostraciones inmediatas. Una firma tampoco quiere acceso total al correo de sus clientes; se puede avanzar con una empresa ya configurada y conectar el correo después.

**"Quiero ver nómina y conciliación bancaria ya."**
Al no estar disponibles, el prospecto pidió fechas y lo consultó internamente. Se aclara desde el inicio qué hay hoy y qué está en desarrollo.

**"Los contadores desconfían de la automatización" / "mis auxiliares se equivocarían."**
La aprobación del contador mitiga la desconfianza. Presentar la plataforma desde sus falencias ("se puede equivocar, revisen todo") hace que el auxiliar revise con criterio.

**"Quiero esperar a que la herramienta esté estable y con la interfaz definitiva."**
Una contadora con muchas empresas no quiere capacitar a sus auxiliares dos veces. Los usuarios de la versión de prueba piden estabilidad. Se prefirió empezar con una sola empresa y avisar de las fallas.

**"Quiero probar con una factura (o una empresa) antes."**
Se acepta la prueba piloto; el usuario quiere ver una factura real contabilizada, no datos ficticios. Es habitual en inventario.

**"Se pierde trabajo después de un cambio de versión."**
Una usuaria quería asegurarse de que lo aprobado antes del cambio no se había dañado; es una frustración legítima que el asesor debe atender antes de seguir.

**"Tengo que corregir lo mismo cada mes."**
Las primeras veces hay mucha corrección y el aprendizaje mejora, pero el usuario espera que quede automático.

**"Tengo dos plataformas: mi correo y núvara."**
Se respondió que son dos perfiles distintos: el cliente trabaja en su correo y el contador en núvara. Aquí "cliente" es el de la firma.

**"Si el proceso es rápido, mis clientes me pedirán bajar los honorarios."**
Un contador independiente lo planteó y piensa ofrecer la herramienta directo a cada empresa que atiende.

**"Mi factura llegó solo en PDF."**
No se procesa: solo la factura electrónica con XML o CUFE. Conviene aclararlo en cada demostración.

**"El volumen histórico es enorme."**
Preocupa el costo en créditos y en revisión de miles de facturas históricas.

**"No autoricé que usaran mi imagen."**
Una usuaria pidió retirar un video publicitario donde aparecía. Toda pieza con personas reales requiere autorización de uso de imagen antes de publicar.
<!-- fuentes: h-040559feec95, h-0e3c41c7a48d, h-19e5ebd1eb97, h-1b5ddf9047dc, h-1d261692318e, h-2021ec577723, h-211a96abdf85, h-220ed21c4a5b, h-2eed69e6f27f, h-3164413987d2, h-32cdc786c09c, h-3a9a315786c4, h-5cb9422bb0c9, h-6efbb6e48a66, h-737965f4a467, h-8072227e99ae, h-8b268b156ae6, h-8daa39cfcb56, h-a921afd858ce, h-b451d169d162, h-b66360b1cf5c, h-bc9b20a13601, h-c7dee3911650, h-ca456137eba3, h-defeafd88304, h-e5a14f4a5436, h-f7e9b0b7d233, h-fccf335cc6f1, h-4cae519c5dd0, h-b139a4b8f2fe, h-722e015bdc9c, h-78a6d7ffada0 -->
