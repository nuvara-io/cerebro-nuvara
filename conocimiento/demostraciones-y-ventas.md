# Demostraciones en vivo y ventas

Basado en reuniones comerciales con contadores independientes, firmas contables, empresas y una entidad pública, entre diciembre de 2025 y agosto de 2026. Las cifras de precios y de resultados son lo que el asesor dijo en cada sesión y **cambian entre reuniones**: los únicos precios confirmados son los de `sitio-web.md` y `CLAUDE.md`. Valida en `por-confirmar.md` antes de usar cualquier otra cifra en un video o en una respuesta.

## Cómo se estructura una demostración en vivo
1. **Diagnóstico (5 a 10 min):** cuántas empresas, cuántas facturas al mes, qué software contable usa, si tiene auxiliares, qué solución probó antes y cuál es su dolor. Con una firma, los dolores cambian según con quién se hable: el dueño habla de costo y dependencia; el contador, de tiempo y de su trabajo.
2. **Qué hay hoy y qué está en desarrollo:** antes de compartir pantalla, el asesor aclara que hoy está la causación y que nómina y conciliación bancaria están en desarrollo según el equipo (2026).
3. **Crear la empresa:** se sube solo el RUT (unos 10 minutos); se pide que el usuario revise el NIT. Cada empresa opera en un entorno aislado y lleva su propio correo.
4. **Radiografía contable:** el balance de prueba por terceros enseña a la plataforma cómo contabilizar a cada tercero. Sin balance, el primer aprendizaje se arma en el momento con unas 100 facturas.
5. **Entrada de facturas:** correo (en tiempo real) y DIAN (token por empresa y extensión). Un correo puede centralizar varias empresas: la plataforma valida el NIT de cada documento.
6. **Estados:** Pendientes, Precausadas, Aprobadas. Se muestra que se puede dejar todo en pendientes para no gastar créditos hasta validar. Se muestra la causación de ventas y de compras por separado, porque son distintas.
7. **Una precausación:** la factura original al lado de la causación; retenciones, ReteICA y ReteIVA calculadas por bases y conceptos. Se explica de dónde sale cada valor, porque quien evalúa lo pregunta.
8. **Agrupación por similitud** y aprobación por grupos; cómo corregir un ítem y que la plataforma lo memorice. También usuarios, roles y archivos por mes.
9. **Centros de costo por etiqueta**, si aplica: el cliente etiqueta en su correo y la firma trabaja solo en la plataforma.
10. **Envío masivo** al software contable (API o archivo plano) con el indicador verde de que llegó como se causó.
11. **Comparación con la DIAN** para detectar faltantes o NIT mal escritos.
12. **Cierre comercial:** reglas de créditos, capacitación incluida, soporte y siguiente paso (pago y fecha de capacitación).

**Para preparar:** pide antes el RUT, el balance de prueba por terceros, los correos donde llegan las facturas y el acceso a la DIAN; si no hay acceso al correo en ese momento, se sigue y se conecta después. No se improvisa una demostración inmediata con datos reales de un prospecto: se prepara su información o se usa una empresa ya configurada, con una carpeta organizada de empresas de prueba. Pedir tantos datos de entrada puede percibirse como invasivo.
<!-- fuentes: h-040559feec95, h-3a9a315786c4, h-722e015bdc9c, h-bc9b20a13601, h-5cb9422bb0c9, h-a540b6ab78be, h-a59810d87210, h-b451d169d162, h-f093ed31e568, h-1d261692318e -->

## Qué decir y qué evitar
- **Sé honesto con lo que no está.** Si una pregunta no está resuelta (por ejemplo, un ingreso que llega un mes tarde), dilo, anótala con el término contable que da el contador y comprométete a investigar. Si no sabes una respuesta técnica, usa una frase para ganar tiempo; la credibilidad se pierde con los silencios largos y las muletillas.
- **No prometas "exacto".** Hay errores posibles y por eso existe la revisión del usuario. Se descartó la frase "auxiliar contable 24/7" por falta de datos.
- **Sin cifras de ahorro sin medirlas.** El equipo reconoció que no había datos medidos de ahorro de tiempo ni de productividad. Lo que sí se puede decir es que mejora la productividad, permite tener la contabilidad al día y da más control. El argumento más fuerte es "usé una empresa real y este es el tiempo que me demoré", no una promesa.
- **Solo factura electrónica con XML o CUFE.** Los PDF sueltos no se extraen; aclararlo evita que el asistente crea que pasa siempre.
- **Lenguaje:** evita términos negativos ("engorroso") que sugieren un proceso complejo. Cuida que "cliente" en la función de etiquetas es el cliente de la firma, no el de núvara. No ofrezcas lo que no existe (por ejemplo etiquetas para otros correos) y, si un prospecto lo pide, se evalúa priorizarlo.
- **Conoce el IVA:** un vendedor sin dominio contable pierde credibilidad rápido; en la práctica, quien simula ser prospecto pide explicaciones detalladas de dónde salen los valores.
<!-- fuentes: h-3a9a315786c4, h-0abbc3ea4c2e, h-bc9b20a13601, h-ac390aa796e4, h-8b268b156ae6, h-b451d169d162 -->

## Argumentos que resuenan
- **La causación se personaliza por empresa**, no se aplica una causación genérica: la plataforma no usa palabras clave sino el concepto de la factura junto con la actividad económica, el régimen y el historial del proveedor. Mientras más específica la configuración de la empresa, mejor funciona. "Si funciona con el cliente más complejo, funciona con los demás."
- **No hay causación a ciegas:** nada se exporta sin revisión y aprobación del contador (protege el consecutivo). Otras plataformas casi no muestran la factura y causan directo; núvara está pensada para que el contador revise. El paso final de aprobación mitiga la desconfianza del gremio hacia la automatización.
- **Lee el documento sin digitar:** interpreta la factura, no solo la importa; clasifica gasto, IVA y retenciones según régimen (simple, ordinario, gran contribuyente).
- **Cálculo de retenciones por bases y conceptos**, incluso varias por factura y acumulación de compras del día. La retención acumulada gusta porque ahorra el control manual de fechas.
- **Aprende y mejora:** el usuario corrige una vez y la plataforma aprende; el balance de prueba da el primer aprendizaje. El equipo no ha validado un porcentaje de acierto inicial (ver `por-confirmar.md`).
- **Ahorro de tiempo multiplicado por cada empresa:** un contador independiente con muchas empresas y sin auxiliar lo ve de inmediato. El valor más fuerte percibido está en la digitación de facturas; la conciliación es la segunda prioridad. El ahorro justifica el costo de un asistente dedicado a causar.
- **Dos vías de descarga** (correo y DIAN) que se complementan; el usuario descarga desde la DIAN, sin certificado, así que los bloqueos recientes del portal no cambian el modelo. La conciliación evita que el contador pierda IVA por facturas no vistas.
- **Documentos que no quieres causar** (peajes, compras personales) se eliminan de pendientes y no cuestan créditos.
- **Centros de costo:** "ya no es solo la causación, es también la asignación de centros de costo". Un buen ejemplo: dos restaurantes en la misma zona que compran a los mismos proveedores con el mismo NIT; solo el dueño sabe a cuál corresponde cada factura.
- **Funciona también con clientes pequeños**, que otras herramientas no atienden.
- **Capacitación** de unas 2 horas con el primer mes de facturas procesado, más una hora de acompañamiento; sin cláusula de permanencia. En la primera sesión el asesor ofrece una de seguimiento para integrar las correcciones hasta exportar. Las capacitaciones separan la lógica contable primero y luego la plataforma (navegación, crear empresa, descargar de la DIAN con y sin token).
- **Soporte por chat** integrado y por grupo de WhatsApp con respuesta rápida (el asesor habló de minutos y lo muestra abriendo conversaciones reales). Se vende como parte del producto porque una plataforma nueva exige aprendizaje.
- **Compatibilidad:** Siigo (incluidas sus versiones en la nube y Pyme), World Office y otros por archivo plano, habilitado en un día hábil. El archivo plano sirve a quienes tienen programa de escritorio; se propone empezar por los clientes con Siigo (ciclo completo) y evaluar luego los demás.
- **Procesamiento de contabilidades atrasadas** por lotes (se citó haber procesado miles de facturas atrasadas); una firma vio pasar a un ritmo de cientos de facturas en pocas horas, cifra sin validar.
- **Tarifas por uso**, sin pagar por lo que no se causa.
- **Para el empresario:** se libera de la dependencia de una sola persona porque tiene todo el registro; cambiar de contador deja de ser un riesgo.
<!-- fuentes: h-040559feec95, h-0abbc3ea4c2e, h-1d261692318e, h-2eed69e6f27f, h-356b484bdf40, h-3a9a315786c4, h-577942d4a1de, h-722e015bdc9c, h-737965f4a467, h-ac390aa796e4, h-b451d169d162, h-c7dee3911650, h-defeafd88304, h-e46ab47fa162, h-e5076d0a7373, h-e15f41ef6e77, h-f093ed31e568, h-f7e9b0b7d233, h-f9bbb8990054 -->

## Perfiles típicos de prospecto (genéricos)
| Perfil | Qué le duele | Qué se le muestra |
|---|---|---|
| Contador independiente con ~15 empresas y sin auxiliar | Falta de tiempo, compras y ventas | Panel multiempresa, estados, aprobación por grupos. |
| Contador independiente de empresas pequeñas con Siigo y otro software contable | Dejar las causaciones para el final; informes por vehículo o centro de costo | Configurar una vez, asignación de centros de costo. |
| Firma contable de pocos años en el mercado | Otra solución con soporte lento, captchas en la DIAN e IVA mal calculado | Descarga por extensión, cálculo de IVA y archivo plano para su software. |
| Firma de consultoría con clientes pequeños y grandes, la mayoría en Siigo en la nube | Herramientas que solo atienden a los grandes | Panel de empresas, usuarios y roles, exportación a Siigo, archivo plano para el resto. |
| Firma con muchos clientes de sectores variados (servicios, comercio, hotel) | Reglas planas que no entienden el contexto | Piloto con una empresa de servicios y una comercializadora, y luego el caso más difícil (centros de costo). |
| Contador de dos pequeñas empresas (una sin inventario, otra con inventario) | Valor del mensual frente al volumen | Estados para no gastar créditos, productos asociados al software contable. |
| Empresa de hotel y restaurante con cientos de compras al mes y contadora externa | Centros de costo, ingresos tardíos, nómina y bancos | Causación, centros de costo y exportación; nómina y conciliación como módulos en desarrollo. |
| Empresa con muchas sedes y bodegas que usa World Office en la nube | Asignar bodega y prefijo por compra | Implementación acompañada con facturas reales. |
| Constructora o empresa con mucha caja menor y atraso | Un egreso por cada factura pequeña, cuentas muy variadas | Causación masiva por proveedor y por agrupación de cuentas; sesión de seguimiento con cronómetro. |
| Firma con auxiliares y revisión en capas | Confianza baja para aprobar sin acompañamiento | Piloto un sábado con una empresa por auxiliar, empezando por las más complejas. |
| Entidad pública o corporación ejecutora de convenios con cientos de facturas al mes | Causación manual por rubros presupuestales; software lineal sin lectura de facturas | Lectura por radicado, XML + PDF, rubros, integración por credenciales (en conversación con su proveedor de software). |
| Empresa del sector floricultor con análisis de compras | Costo unitario por tipo de insumo, IVA o no IVA | Causación y, como idea, inteligencia de compras. |
| Firma que ya usa nómina/egresos | Conciliaciones y reportes manuales | Módulos de nómina y egresos (en desarrollo / en validación). |
<!-- fuentes: h-040559feec95, h-1d261692318e, h-3a9a315786c4, h-577942d4a1de, h-80ec3986bf1f, h-ca456137eba3, h-d2a18ab0af93, h-e5076d0a7373, h-c6fcf2a8890e, h-2eed69e6f27f -->

## Preguntas frecuentes de prospectos
- **¿Qué pasa con compras personales que llegan por correo?** Se deja que lleguen a *Pendientes*; no se consumen créditos hasta precausar y se pueden eliminar o bloquear.
- **¿Funciona con inventarios y productos nuevos?** Los productos y cuentas se asocian con el software contable durante la revisión; el detalle de ítems depende de cómo exportes. Conviene mostrar primero la causación y desde ahí explicar que el inventario se maneja a nivel de factura.
- **¿Cómo sé que llegó bien al software contable?** Indicador verde por factura; los errores de configuración se reportan al soporte.
- **¿Puedo centralizar facturas de varias empresas en un solo correo?** Sí, la plataforma valida el NIT de cada documento para asignarlo a la empresa correcta.
- **¿Puedo procesar meses atrasados?** Sí, sincronizando correo y DIAN por lotes.
- **¿Me duplica facturas de venta o eventos?** No: nada se exporta sin aprobación; se mencionó filtrar eventos que no son facturas.
- **¿Impuesto al consumo en una empresa que no lo maneja?** Se configura si va al gasto como mayor valor o a una cuenta propia; detecta propinas, retención en combustible y ReteIVA.
- **¿Retenciones particulares en ventas (ReteICA, estampillas)?** Se configuran en general o por comprador.
- **¿Puedo sumar a otro socio que comparte la gestión de empresas?** Sí, se agregan miembros sin costo para tareas contables.
- **¿Hay permanencia?** No.
- **¿Van a subir los precios?** El asesor dijo que no hay aumento previsto (ver `por-confirmar.md`).
- **¿Me afecta el aviso reciente de restricciones de la DIAN?** El asesor respondió que no, porque el usuario es quien entra al portal y descarga.
- **¿Se puede empezar de a poco?** Sí: con una empresa y los módulos nuevos se prueban con el usuario.
- **¿Cómo se paga?** Enlace de pago con tarjeta o PSE; transferencia como alternativa si hay demora (ver `por-confirmar.md`).
<!-- fuentes: h-040559feec95, h-3a9a315786c4, h-a59810d87210, h-211a96abdf85, h-c7dee3911650 -->

## Objeciones y respuestas
| Objeción | Cómo se abordó |
|---|---|
| "Mi volumen es bajo, el costo por factura sube." | El asesor explicó la tarifa por factura, la recarga inicial con capacitación y el consumo mínimo mensual desde el segundo mes; el prospecto pidió revisar las cuentas y decidir después. |
| "Debo consultarlo con los dueños de las empresas." | Se acordó una llamada de confirmación pocos días después; es un patrón: la decisión de pago pasa por los propietarios. |
| "Otra solución me cobra menos por factura." | Se comparó el costo total incluyendo soporte y errores de la otra solución; no se bajó el precio en la sesión. |
| "Probé otra herramienta y duplicó facturas o calculó mal el IVA." | Se mostró la aprobación obligatoria y el cálculo por bases; se ofreció piloto con una empresa. |
| "Quiero hacer una prueba antes." | Se aceptó una prueba piloto con una sola empresa y un inicio formal en una fecha posterior, con pago previo para agendar la capacitación. |
| "No sé si mi software contable es compatible." | Se listó la compatibilidad (API y archivo plano) y el plazo de habilitación. |
| "Es una entidad pública con restricciones de software." | Se propuso empezar por los casos básicos de causación con acceso por credenciales y XML obligatorio junto al PDF. |
| "Los programas contables grandes cobran por conector o por transacción." | El asesor externo recomendó evitar ese segmento al inicio y priorizar los programas abiertos; no construir un ERP completo. |
| "Quiero hacer solo el módulo que necesito." | Se debatió un paquete personalizado por módulos (nómina, facturación, causaciones); queda como propuesta, no como oferta. |
| "Un competidor aprende solo de la última factura." | Se afirmó que otras soluciones no suman las compras del día; núvara sí lo hace. Verifica antes de afirmarlo. |
| "Las capacitaciones y la primera recarga son un gasto alto." | El equipo acordó, como experimento, incluir la capacitación dentro de la primera recarga (condiciones en `por-confirmar.md`) y aclarar los dos planes (con y sin capacitación) bajo los precios del sitio. |
| "No tengo tiempo de usarla todavía." | Varios usuarios compraron y no la usan por falta de tiempo; los contadores dejan todo para fin de mes. Conviene la sesión de seguimiento. |
<!-- fuentes: h-040559feec95, h-1b5ddf9047dc, h-211a96abdf85, h-722e015bdc9c, h-8daa39cfcb56, h-e46ab47fa162, h-d2a18ab0af93 -->

## Posicionamiento y público
- **Qué es:** una plataforma de causación y cruce contable que no reemplaza el software contable. Prepara las causaciones desde el correo y la DIAN y las envía al software del usuario; el usuario revisa y aprueba. A futuro podría crecer, pero para salir a vender no es un software contable ni un ERP.
- **A quién:** primero firmas contables y contadores con empresas pequeñas; también contadores individuales con dos o tres empresas. Quien decide la compra es el contador o el gerente de una firma, aunque el beneficiario sea una empresa. El mercado es solo Colombia porque depende de las normas de la DIAN.
- **Dos discursos:** el de una firma contable no es el del empresario. El empresario valora centralizar y agilizar procesos, no solo "causaciones", y puede desconocer los módulos técnicos que maneja el contador. Se propuso un filtro inicial (empresa o contador/firma) con nombres de módulo distintos.
- **Propuesta de valor trabajada con marca:** una plataforma que prepara los procesos operativos contables de forma eficaz y eficiente, para una o varias empresas. Se descartó "potenciar" y el vocabulario de marca evita "automatizamos".
- **Lo que viene según el equipo (2026, en desarrollo):** nómina, impuestos, conciliación bancaria y anticipos, con una gestión documental integrada a la contabilidad. No se presenta como disponible.
- **Canales (interno):** las demostraciones en vivo concentran la mayor parte de las ventas; los sábados convierten bien; las visitas presenciales y la prueba gratuita ayudan; los casos de éxito con firmas reconocidas dan credibilidad ante un gremio que desconfía de la automatización. Todo el equipo debe saber dar demostraciones y pedir los mismos datos mínimos al agendar.
- **Aliados:** se evalúa trabajar con casas de software contable y ofrecer integración con la facturación electrónica; el consejo recibido fue elegir dos o tres programas contables con más mercado y fáciles de integrar.
<!-- fuentes: h-32cdc786c09c, h-0abbc3ea4c2e, h-8daa39cfcb56, h-defeafd88304, h-211a96abdf85, h-722e015bdc9c, h-040559feec95, h-737965f4a467, h-0e3c41c7a48d -->

## Cierre típico
1. Acordar paquete inicial y fecha de capacitación (recarga inicial con capacitación incluida). Algunos prospectos empiezan por consumo de créditos y compran el primer paquete a los pocos días; otros cierran en la misma sesión.
2. Enviar enlace de pago (o transferencia) y los datos de facturación (RUT).
3. Agendar capacitación de unas 2 horas con el equipo; el asesor envía la grabación después y propone una sesión de seguimiento (por ejemplo, causar un mes completo con el asesor guiando y el usuario cronometrando).
4. Piloto con una sola empresa: la firma revisa todo y avisa de fallas antes de pasar las demás. Las empresas más complejas permiten aprender más.
5. Un usuario puede presentar la plataforma a otras firmas si primero valida con datos reales y obtiene un caso con tiempos. Hay un programa de referidos (condiciones sin confirmar; ver `por-confirmar.md`).
<!-- fuentes: h-040559feec95, h-1b5ddf9047dc, h-c7dee3911650, h-ca456137eba3, h-e5076d0a7373, h-e15f41ef6e77, h-ac390aa796e4, h-1d261692318e -->

## Señales para el diseño de tutoriales
- Los prospectos preguntan primero por **estados y control** (no gastar créditos, no causar a ciegas), luego por **compatibilidad** y por último por **precio**.
- Un video corto de "Cómo se paga: créditos y recarga" reduce fricción comercial (ver `ideas-tutoriales.md`).
- Quien evalúa pide saber de dónde salen los valores calculados: una escena de precausación con la factura original al lado y el origen de cada retención responde esa duda.
- Una experiencia previa en otra plataforma: el usuario pequeño se autocapacitaba con videos de unos 5 minutos; el de alto consumo recibía capacitación directa agendada.
<!-- fuentes: h-0e3c41c7a48d, h-bc9b20a13601, h-d2a18ab0af93 -->
