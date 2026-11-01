# Causar y revisar (precausación)

## Objetivo
Convertir las facturas pendientes en causaciones precausadas, revisarlas con confianza, aprobarlas y archivarlas para exportar. Una causación se lee en capas: primero la clasificación del gasto, costo o activo; luego el IVA (cada tarifa con su base); al final las retenciones; y la contrapartida contra la cuenta por pagar.

## Requisitos
- Facturas en **Pendientes**. Llegan de la DIAN y del correo casi en tiempo real (el correo trae cada una a más tardar a los 15 minutos). Se pueden causar meses anteriores sin restricción.
- Configuración de la empresa lista (flujo 01): IVA, PUC de la empresa y balance cargados. Carga **antes** los anticipos y centros de costo; si faltan, la causación queda errónea.
- Créditos disponibles.

<!-- fuentes: h-088d516b4772, h-096d75ba2104, h-57509b5a0a19, h-4b29b889ffdd, h-6efbb6e48a66, h-f093ed31e568 -->

## Estados
**Pendientes** (descargadas, sin cobro) → **Precausadas** (la plataforma propone la causación; se cobra al causar) → **Aprobadas** (validadas por el usuario) → **Archivo** (Operaciones › Archivo, por año y mes; listas para exportar). Los botones cambian según el estado; los filtros de agrupadas y descuadres solo existen en precausadas y aprobadas.

<!-- fuentes: h-356b484bdf40, h-20227cba2708, h-f9bbb8990054, h-8b268b156ae6, h-c7e2fc3560d2, h-5cb9422bb0c9 -->

## Pasos
**1. Causar**
- Una factura: botón **causar** a la derecha de la fila. Varias: selecciónalas (puedes subir la página de 20 a 50, o filtrar por proveedor o por descripción) y pulsa causar; la plataforma confirma cuántas vas a causar. Se abre una cola con el avance de cada una.
- **Acciones → Causar por lote**: eliges el rango de fechas (máximo un año por lote; para más, varios lotes) y las facturas se encolan. Se ve el porcentaje, las activas y las que siguen en cola, y puedes trabajar mientras tanto.
- **Acciones → Revisar por proveedor**: lista cada proveedor con sus facturas y las causa todas de un clic; puedes seguir con otros proveedores mientras revisas uno.
- **Automatizar**: la causación automática causa cada factura que llega (se cobra igual) y se recomienda tras el primer mes; "autocausar" lo hace por proveedor. También puedes dejar las facturas en pendientes y causar cuando decidas.
- Los créditos se cobran solo al causar: borrar una pendiente no cobra, y recausar tampoco.
- Tiempos: cerca de 15 segundos por factura en la precausación; revisar, aprobar y exportar consume muy poco.

**2. Revisar**
- Abre la factura con el **ojo**: ves la factura original al lado de la causación, con proveedor, ítems, cuentas, IVA, retenciones y forma de pago. Es lo que más valoran los contadores.
- **Indicador de cuadre**: el chulito verde (confianza 100 %) significa que el valor causado, retenciones incluidas, coincide con el XML. En rojo muestra la diferencia, casi siempre un impuesto, un descuento o un cargo (como una propina) no detectado. Revísalo contra la factura original antes de aprobar.
- Regla de revisión: débitos y créditos suman igual; el IVA va al grupo 24; el valor bruto va a gasto (5), costo (6 o 7), inventario (14) o activo fijo (15); el total va a una cuenta por pagar.
- **"Mostrar productos"** muestra los ítems sin abrir la factura; "colapsar todo" muestra el movimiento contable. **Historial del proveedor** y **cuentas del proveedor** muestran cómo se causó antes. El lápiz junto al proveedor abre su configuración (por ejemplo, marcarlo autorretenedor).
- Iconos: el rayo indica una regla aplicada; el amarillo, una cuenta aprendida (puede estar mal si hubo correcciones contradictorias).
- Atajos: Tab pasa a la siguiente, Enter aprueba, Supr elimina. Siempre confirma que el PDF visible sea el de la factura que causas.

**3. Elegir la vista** (el selector "tipo de factura" alterna entre ellas; cerrar el menú lateral amplía el área de trabajo)
- **Agrupada**: junta las facturas con el mismo juego de cuentas (misma cuenta, IVA, retención y cuenta por pagar); no importa la fecha ni el proveedor. Cada grupo indica cuántas facturas, productos y proveedores incluye. Si algo difiere, se crea otro grupo. Cambias la cuenta en el encabezado, quitas proveedores con el filtro y pulsas **Aprobar grupo**. Las facturas sin IVA ni retenciones suelen agruparse solas y se aprueban rápido.
- **Por proveedor**: muestra un patrón base y señala las facturas que se desvían para revisar solo esas.
- **Lista** (los dos cuadritos): una por una, hasta 200 por página; sirve para buscar valores y recausar muchas a la vez. Con contabilidad muy variada es mejor que los grupos.
- Si activas centros de costo (Acciones), aparece además la agrupación por centro de costo.

**4. Corregir** (detalle en flujo 06)
- Cambiar una cuenta: clic en la cuenta, búscala por **código** (no por nombre) o elige entre las cuentas del proveedor; debe quedar a ocho dígitos. Si no existe, se crea ahí mismo.
- Al guardar, la plataforma pregunta si el aprendizaje es para esa factura, ese proveedor o global, y si se aplica a facturas ya causadas. El aprendizaje del usuario manda sobre la configuración general.
- Si el mismo producto puede ir a dos cuentas según el uso, guarda **sin aprendizaje**: una regla lo llevaría siempre a la misma cuenta.

**5. Aprobar y archivar**
- **Guardar y aprobar** pasa a la siguiente; las aprobadas son una segunda revisión. Con la causación terminada, **archivar** (por grupo, o arriba junto al buscador) las envía a Archivo. Las que aprobaste sin cambios no hace falta seleccionarlas para exportar.
- Exporta cuando el mes haya terminado por completo; exportar antes deja facturas posteriores por fuera.
- Un auxiliar puede precausar y revisar; otra persona, aprobar y archivar.

<!-- fuentes: h-20227cba2708, h-8b268b156ae6, h-c7dee3911650, h-e15f41ef6e77, h-220ed21c4a5b, h-f96fd89e31c6, h-f093ed31e568, h-f9bbb8990054, h-0e3c41c7a48d, h-1b5ddf9047dc, h-c7e2fc3560d2, h-e4a57c41cb5c, h-d6c74231cd11, h-ba672f6fbb0d, h-f05e1fbaf759, h-23bf40f47dd3, h-3162db18d8b9, h-78a6d7ffada0, h-d35e1cc2634f, h-ca456137eba3, h-c8c0317a8652, h-bc9b20a13601, h-ed9c331e7c17, h-e5076d0a7373, h-67ee42c92ec6, h-a30f11ead348 -->

## Cómo decide la plataforma
- Para elegir la cuenta mira, por fases: el historial del proveedor, las cuentas relacionadas con ese proveedor y, al final, el aprendizaje general y por descripción. Usa primero el PUC de la empresa y solo recurre al general si no hay cuenta adecuada; no inventa subcuentas sin base.
- Analiza los ítems en el contexto de la empresa (actividad, tipo de operación, régimen y actividad del proveedor): la misma compra de papelería es gasto de administración para una empresa de servicios y costo de compra (clase 6) para un restaurante. El concepto de lo comprado manda sobre quién es el proveedor.
- Contrapartida: como la factura no dice cómo se pagó, la compra se asienta contra una cuenta por pagar (grupo 22 si es insumo directo de la actividad; grupo 23 para terceros como contador, arriendo o servicios públicos). Si se pagó, cambia a bancos o caja (grupo 11). Es configurable por empresa.
- Combina reglas determinísticas con decisiones puntuales de inteligencia artificial; por eso la revisión humana es siempre necesaria, sobre todo el primer mes.

<!-- fuentes: h-e407b9d99c2a, h-2ed008699c30, h-c08bad7a0bf4, h-a540b6ab78be, h-66eba239a3cb, h-737965f4a467, h-1d261692318e, h-364a64863009, h-f65850e8b9aa, h-ed9c331e7c17 -->

## Casos especiales
- **Desglosar una factura**: pestaña "productos y servicios" → selecciona ítems → **Agregar fila de gasto** (o "nueva línea") → elige la cuenta → **Asignar seleccionados** → **Enviar abajo** → guardar. El valor sale de la fila original y la plataforma aprende por producto; puede ofrecer aplicarlo a otras facturas del proveedor. "Agregar cuenta en lote" (vista de grupos) lleva a una cuenta todo producto parecido de todas las facturas.
- **Retenciones**: se calculan con la tabla de retención (concepto, base mínima en UVT, tarifa) y solo aplican si la compra supera la base. Es acumulativa por proveedor en un ciclo de 24 horas: la plataforma suma las compras del mismo día y muestra la lista que compone la suma. Para corregir una retención mal clasificada, no borres la regla: elimina la línea con la papelera y agrega la correcta con **agregar retención** (tarifa personalizada si hace falta). Si la clasificación está mal, la retención también. Un proveedor de régimen simple sin retención es lo correcto.
- **IVA con varias tarifas**: la plataforma toma la base gravable de cada producto (no el total) y separa 5 %, 19 % y no gravado; usa una cuenta de base por tarifa. Si la empresa maneja clase 6, la base no gravada necesita su propia cuenta. El impuesto al consumo no es IVA descontable: va como mayor valor del gasto (cambia la cuenta de la línea, no basta eliminarla). El IVA como mayor valor del gasto o del inventario se configura por empresa.
- **Notas crédito**: entran al grupo de compras y se revisan antes de aprobar; la cuenta debe ser la de devoluciones en compras y el IVA no es el de las facturas.
- **Ventas**: más sencillas y económicas que las compras. Cliente nacional: débito a clientes (1305) y crédito a ingreso (clase 4) más IVA generado; cliente del exterior: cuenta de clientes del exterior, sin IVA ni retención. Consumidor final se suma en un solo asiento.
- **Facturas de restaurante o con propina**: los "otros cargos" son propina; agrega una línea de débito a la cuenta de gasto de propinas. Revisa impuesto al consumo y bolsas plásticas.
- **Servicios públicos**: si sale "el asiento difiere de la factura", corrige a mano.
- **Anticipos**: si la factura tiene anticipo del proveedor se habilita **asociar** (total o parcial, manual); la contrapartida cambia de proveedores a la cuenta fijada al cargarlo.
- **Inventario**: valida la contabilización y la asociación de cada producto (nuevo, existente o rechazado). La cola de revisión sirve para volumen; vincular en la causación, para el día a día. La inteligencia artificial solo sugiere.
- **Descripción del comprobante**: automática o configurada como número de factura + cuenta o concepto (queda también en la cuenta por pagar). El detalle por producto se activa desde Acciones.
- **Causadas a mano antes en el software contable**: no se vuelven a causar (el CUFE ya existe); la plataforma las referencia.

<!-- fuentes: h-1adf87b5dfa6, h-78a6d7ffada0, h-c7dee3911650, h-a921afd858ce, h-c7e2fc3560d2, h-e46ab47fa162, h-3162db18d8b9, h-e407b9d99c2a, h-f093ed31e568, h-2021ec577723, h-6efbb6e48a66, h-ca456137eba3, h-ef76153985c0, h-1bf95f17e863, h-c8c0317a8652, h-a2337e3bee2b, h-1d261692318e, h-5cb9422bb0c9, h-f7e9b0b7d233, h-f05e1fbaf759, h-088d516b4772, h-b139a4b8f2fe, h-a59810d87210, h-ac5a1e51c5ed, h-a921afd858ce, h-4158a5316af6, h-568b1428fb13 -->

## Casos especiales: activos fijos y compras de vehículos
- **Cómo lo detecta**: el clasificador revisa primero, por ítem, si es un activo fijo (clase 1): da beneficio por más de un periodo y no es para reventa. En la clasificación no se calcula depreciación.
- **Según la empresa**: un computador es inventario (14) si la empresa los vende, propiedad, planta y equipo (15) si es de uso interno, o costo (6) según la define el contador. Larga duración (computador, maquinaria, inmuebles): 15; intangibles y licencias de software: 16; diferidos como seguros pagados por anticipado: 17, que se amortizan mes a mes.
- **A cuotas**: va al 15 contra cuentas por pagar (22 o 23).
- **Vehículos**: la plataforma lo llevaba por defecto a equipo de oficina (1524). Una contadora pidió una cuenta propia de vehículos para ver su subtotal aparte (preferencia de control, no obligación): corrígela a mano.
- **Retención por compra de vehículo (1 %)**: necesita una cuenta distinta de la retención por compras del 2,5 % (otra subcuenta del 2365). Agrégala con **agregar retención**; ReteICA si aplica.
- **Placas**: al causar puedes repartir el valor por placa (deben sumar el 100 %) y confirmar para que se guarde.
- La clase 3 (patrimonio) no se usa en la causación de facturas.

<!-- fuentes: h-364a64863009, h-2ed008699c30, h-66eba239a3cb, h-3bfcdd9e3190, h-a8886865ddfd -->

## Errores comunes
- No revisar una causación de prueba (sin IVA, luego con IVA, luego con retención) y ajustar la configuración antes de causar el lote.
- Causar sin haber cargado anticipos, centros de costo, PUC o balance de la empresa. Las facturas ya precausadas **no cambian solas** al actualizar el plan de cuentas: hay que recausarlas.
- Cuentas de IVA mal cargadas o sin configurar: las líneas quedan "pendiente". Corrígelas con **cambiar cuenta en lote** (Reemplazar) o configura y recausa; el cambio en lote ignora las reglas por centro de costo.
- Proveedores nuevos mal clasificados la primera vez; sin cuentas vinculadas, la plataforma asume una que no suele servir.
- Aprobar sin revisar descuadres: nota crédito tomada como factura, impuesto adicional, propina o descuento condicionado no considerados.
- Desglosar sin verificar: el valor por producto debe ir sin IVA, la cuenta de IVA igual a la factura y el subtotal intacto. Reportado en julio de 2026: el algoritmo tomaba el valor con IVA; revisa las facturas desglosadas.
- Pantalla pequeña sin opciones de edición: baja el zoom del navegador al 90 %. PDF desfasado al avanzar muy rápido: cierra y vuelve a abrir la factura.
- Dos comprobantes con el mismo consecutivo terminan unidos en el software contable: exporta solo esos y cambia el consecutivo en el Excel.
- El buscador acepta el folio, no el NIT.
- Mantenimiento nocturno: el cambio global de cuentas puede estar restringido temporalmente.

<!-- fuentes: h-57509b5a0a19, h-088d516b4772, h-3162db18d8b9, h-a2337e3bee2b, h-568b1428fb13, h-b5c98e65e8fb, h-1adf87b5dfa6, h-78a6d7ffada0, h-67ee42c92ec6, h-b967a73c48ed, h-797a6adc3390, h-c18467806240, h-ba672f6fbb0d, h-3162db18d8b9, h-f05e1fbaf759 -->

## Tips del asesor
- Empieza por **un solo mes**: ahí le enseñas a la plataforma y los siguientes salen mucho mejor. El primer mes se revisa factura por factura; después, por grupos, con revisión por muestra si el grupo se ve bien. Una empresa con contabilidad variada exige más configuración al inicio.
- Dos caminos: precausar todo y corregir en Precausadas, o causar primero una factura de cada proveedor frecuente y dejar que la plataforma aprenda.
- Si no hay criterio fijo por proveedor o producto, revisa factura por factura.
- **Recausar** (selecciona las precausadas; no aplica a pendientes) vuelve a calcular con la configuración actual y no cobra. **Con aprendizaje** aplica lo aprendido; **sin aprendizaje** lo ignora y repara una causación dañada por una regla errónea. En recausas masivas, quita el filtro de fechas para incluir todas las del proveedor.
- Para dejar solo el mes en curso, archiva el histórico sin causarlo.
- Referencia: 140 facturas causadas en una hora y media en una capacitación; 14 causadas, revisadas y enviadas en unos 7 minutos con una cuenta ya enseñada.
- Compara cada mes el total exportado con el reporte de la DIAN: debe coincidir con proveedores y cuentas por pagar (grupos 22 y 23). Las diferencias suelen ser notas crédito, facturas no contabilizadas, descuentos o retenciones.
- Mensaje clave: la plataforma acelera, pero no reemplaza al contador; hay que revisar y validar.

<!-- fuentes: h-20227cba2708, h-0e3c41c7a48d, h-e5076d0a7373, h-220ed21c4a5b, h-4b29b889ffdd, h-23bf40f47dd3, h-c6fcf2a8890e, h-c7e2fc3560d2, h-a921afd858ce, h-c18467806240, h-f8436a675e52, h-356b484bdf40, h-a540b6ab78be, h-c8c0317a8652 -->

## Novedades y en desarrollo
Según el equipo en 2026; no están disponibles salvo que se indique.
- **Disponible**: el decreto de retenciones del segundo trimestre ya está configurado (tarifas y bases distintas del 8 de mayo al 30 de junio; desde el 1 de julio vuelven las anteriores). La cuenta de compras no gravadas para facturas con IVA mixto. El botón guardar aparece apenas hay cambios en una causación.
- **En desarrollo**: concepto AIU en la configuración tributaria (IVA sobre el 10 % del subtotal); selector para cambiar un documento entre factura y nota crédito; crear o editar centros de costo desde la pantalla de aprobación; botones de revisión correcta o incorrecta con comentarios para retroalimentar el aprendizaje; botón para marcar pendiente de pago o pagada y cambiar la contrapartida; validación opcional que impida aprobar con productos sin asociar; aprobar o rechazar la vinculación de productos desde la causación; poder editar la base gravable de una retención; coexistencia de dos IVA en una factura; quitar la pestaña "con error" y la alerta "revisar"; renombrar "Causado" a "Precausado" con colores distintos.
- **Plan o idea**: leer extractos bancarios y clasificar movimientos; "seteo inicial" por empresa; limitador al avanzar entre facturas; calculadora dentro de la pantalla.
- **Pendiente de corregir** (julio de 2026): descuadre visual al cambiar una retención aunque el XML cuadre; "asignar seleccionados" que a veces devuelve todos los ítems a una cuenta.

<!-- fuentes: h-e407b9d99c2a, h-ca456137eba3, h-f8436a675e52, h-a8886865ddfd, h-ba672f6fbb0d, h-32cdc786c09c, h-fccf335cc6f1, h-b139a4b8f2fe, h-2eed69e6f27f, h-66eba239a3cb, h-364a64863009, h-67ee42c92ec6, h-f9bbb8990054, h-f093ed31e568, h-1b5ddf9047dc, h-3162db18d8b9, h-1adf87b5dfa6, h-211a96abdf85, h-e4a57c41cb5c -->
