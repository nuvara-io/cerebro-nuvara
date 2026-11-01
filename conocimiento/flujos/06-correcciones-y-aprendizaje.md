# Correcciones y aprendizaje de la plataforma

## Objetivo
Corregir una cuenta o un impuesto una vez y que núvara lo aplique a las facturas futuras. El aprendizaje es **por empresa** y permanente: el criterio de clasificación depende de la empresa, de su tipología y hasta del contador, por eso no hay una regla única.
<!-- fuentes: h-0e3c41c7a48d, h-ef76153985c0, h-85f50952dea3 -->

## Requisitos
- Facturas precausadas o pendientes (las aprobadas se pueden corregir hasta que se archivan).
- Idealmente, el plan de cuentas completo y el balance de prueba por tercero cargados: así núvara ya conoce las cuentas que maneja cada proveedor y sugiere mejor desde la primera factura. Sin balance, hay que enseñarle manualmente la primera vez.
<!-- fuentes: h-3bfcdd9e3190, h-c7dee3911650, h-1b5ddf9047dc, h-20227cba2708 -->

## Pasos
1. Abre la factura (ícono de ojo) y cambia la cuenta: pulsa el lápiz de la línea o la cuenta misma, busca por código o nombre y confirma. Si la cuenta correcta no existe, usa **crear nueva cuenta** (no "editar"); queda ligada al producto.
2. Al guardar aparece el aviso "se detectaron cambios en los asientos contables; se guardarán estas correcciones para aprender". Elige el **alcance** (ver abajo).
3. Si ya había facturas causadas, pulsa **recausar con aprendizaje** para que la corrección se vea en ellas. También puedes marcar "aplicar también a las facturas ya causadas".
4. **Guardar y aprobar**. Una factura aprobada se puede seguir corrigiendo hasta que se archive.
5. Si el cambio es la cuenta de un grupo completo, hazlo desde el grupo: se modifica en todas sus facturas y la plataforma indica cuántas afecta.
6. Para revisar o borrar lo aprendido, abre **Historial aprendido** (o "proveedor aprendido", al final de la causación) y su pestaña **mapa de cuentas**. También hay una lista por proveedor en Administración › Configuración › Aprendizaje.
<!-- fuentes: h-0e3c41c7a48d, h-1b5ddf9047dc, h-c7dee3911650, h-f093ed31e568, h-a921afd858ce, h-e4a57c41cb5c, h-ba672f6fbb0d -->

## Alcances de una corrección
Del más específico al más general (el más específico se aplica primero y se pueden combinar):
- **Solo esta factura**: úsalo cuando el concepto cambia según el caso (por ejemplo, un centro de costo cuyo destino varía por lote). No pulses "que la plataforma aprenda".
- **Por producto**: seleccionas el ítem y su cuenta; cada vez que llegue ese producto va allí. Sirve cuando los productos varían poco.
- **Por descripción** ("descripción contiene…"): la corrección solo aplica a ítems con esa palabra (por ejemplo "transporte" o "dispensador de agua"). Es lo recomendable para servicios cuya descripción cambia y para proveedores con productos muy variados. También se puede condicionar por la primera cuenta de gasto asignada.
- **Por proveedor**: todo lo que traiga ese proveedor va a la cuenta indicada.
- **Global**: para todos los proveedores. Solo para cambios genéricos (por ejemplo, el IVA).
- **Regla fija**: desde guardar › crear regla. Aplica a un proveedor o, quitando el proveedor, a cualquiera, con condiciones sobre el texto del ítem y sobre la cuenta del asiento. Se aplica a todas las facturas que cumplan, incluso algunas ya aprobadas. Conviene cuando hay un texto claro; con muchos productos distintos es mejor corregir por grupo.

Las correcciones del módulo de aprendizaje se aplican a dos campos: el **gasto** (la primera cuenta de la causación, que indica el concepto) y las **retenciones**. Para reconocer el producto, núvara lo pasa por un modelo de lenguaje que resuelve su concepto ("internet", "teléfono"), así entiende diferencias pequeñas en la descripción. Un ítem puede tener dos conceptos de gasto asociados.
<!-- fuentes: h-19e5ebd1eb97, h-67ee42c92ec6, h-ba672f6fbb0d, h-c7e2fc3560d2, h-e4a57c41cb5c, h-088d516b4772, h-e407b9d99c2a -->

## Cuentas por producto
- En la factura abierta, baja a **cuentas por producto**, elige el producto y la cuenta, y pulsa **Asignar**. En facturas futuras ese producto queda separado en su cuenta.
- Sirve para separar telefonía de internet en una misma factura, o ferretería de aseo, o combustible de revisión tecnomecánica.
- **Mostrar productos** (esquina inferior derecha) permite agregar una línea nueva con otra cuenta y producto.
- Los productos de distintos proveedores se agrupan por descripción; al mostrar el producto en el grupo se ve a qué cuenta se asignó.
- Si asignas la misma cuenta que ya tenía el producto, la plataforma no hace el cambio y no avisa con claridad.
<!-- fuentes: h-f96fd89e31c6, h-797a6adc3390, h-8072227e99ae, h-f9bbb8990054 -->

## Cambios masivos
- **Desde un grupo**: cambia la cuenta en ese grupo.
- **Cambiar cuenta en lote** (junto al filtro de proveedores): eliges la cuenta a reemplazar y la nueva, y se cambia en todas las líneas de las facturas filtradas, aunque estén repartidas en varios grupos. Útil cuando un proveedor trae mal la cuenta por pagar, cuando se usó IVA generado en vez de descontable, o cuando una causación debe ir a bancos en lugar de a un gasto. Después, "limpiar" y "colapsar" para revisar.
- Para tomar un cambio en las reglas, el balance o el plan de cuentas: en **Precausadas**, selecciona las facturas (con filtros si quieres) y pulsa **recausar**; pregunta si es con o sin aprendizaje. Esos cambios solo aplican a facturas nuevas o recausadas; no alteran lo ya aprendido.
- Tras cambiar la configuración tributaria (por ejemplo ReteICA), recausa todo lo pendiente, preferiblemente a primera hora del día siguiente.
<!-- fuentes: h-ba672f6fbb0d, h-f9bbb8990054, h-78a6d7ffada0, h-19e5ebd1eb97, h-c8c0317a8652, h-e5a14f4a5436, h-e15f41ef6e77 -->

## Recausar: con y sin aprendizaje
- **Con aprendizaje**: vuelve a causar con lo aprendido y las reglas nuevas; corrige facturas precausadas con cuentas erróneas. Se hace en una factura o seleccionando grupos y usando "recausar" abajo.
- **Sin aprendizaje**: botón arriba de la factura (círculo con flecha); causa "original", sin sesgos. Útil cuando una factura sigue saliendo mal por un aprendizaje equivocado, o para ver cómo causa limpio.
- Tras recausar, la pantalla muestra qué cambió frente a la causación anterior.
- La cola de recausación puede tardar y la pantalla va lenta; espera, recarga y revisa los grupos nuevos (pueden multiplicarse y quedar más pequeños).
- Solo se modifican facturas precausadas o pendientes; lo que se aprobó antes de un cambio no se toca.
<!-- fuentes: h-1b5ddf9047dc, h-a921afd858ce, h-12027d283e58, h-19e5ebd1eb97, h-e5a14f4a5436, h-d35e1cc2634f -->

## Retenciones e impuestos
- **Cambiar o agregar una retención**: abre la sección de retenciones, elige la tarifa (4 %, personalizada…), confirma la cuenta y elimina la anterior. La cuenta está atada al porcentaje de cálculo: si solo cambias la cuenta en la tabla, el valor y la base siguen con el porcentaje viejo. Para una retención aplicada por error: elimina la línea y agrega una nueva con **más retención**.
- Si la cuenta de la retención no aparece, agrégala con "editar código de cuenta".
- Si quitas una retención y guardas con aprendizaje, deja de aplicarse a ese proveedor (por ejemplo, un autorretenedor).
- La misma tarifa puede ir a cuentas distintas según el proveedor sea persona jurídica o natural; guárdala por proveedor, no global.
- **Retefuente personalizada**: en una factura sin retención aplicada, agrega una con porcentaje y cuenta; la factura se reclasifica sola. Si olvidaste una en una factura aprobada, se agrega desde la vista global o con el ojo.
- Algunos proveedores no traen actividad económica: en Recausar › pestaña de proveedor › retención ICA / actividad económica, asigna el código a mano y recausa con aprendizaje.
- Una cuenta de IVA mal categorizada: cambia la categorización a mano para forzar el aprendizaje.
- Facturas con dos IVA o dos retenciones (compras y servicios en el mismo documento): la plataforma puede aplicar dos retenciones; revisa bases y cuenta al corregir. No crees reglas manuales para esto.
- Etiqueta "gasto" en cuentas de IVA: puede confundir al modelo; se acordó quitarla. Hay también un desglose de impuestos por proveedor, que se acordó habilitar.
<!-- fuentes: h-67ee42c92ec6, h-1b5ddf9047dc, h-356b484bdf40, h-e15f41ef6e77, h-f093ed31e568, h-19e5ebd1eb97 -->

## Casos especiales
- **Peaje frente a parqueadero**: con el mismo proveedor (un medio de pago de peajes), la plataforma puede confundirlos porque identifica por la placa. Corrige la línea y condiciona por texto ("placa" a una cuenta; "parqueadero" a otra) o usa la descripción de la regla; el parqueadero suele llevar IVA y eso ayuda.
- **Combustible, aceites y lubricantes**: la plataforma puede aplicar retención de combustible a un aceite, o mandarlos a repuestos. Corrige el producto una vez; si hay balance por tercero y aun así falla, vuelve a subirlo y recausa.
- **Impuestos asumidos**: si muchas facturas de gasto terminan en la cuenta de impuestos asumidos, hay un aprendizaje erróneo ligado a un producto. Un impuesto asumido nunca se corrige contra un producto. Quita esas asociaciones en el historial del proveedor y recausa.
- **IVA mayor valor del costo** (clase 6) llevado a gasto (clase 5): se corrige con alcance global y se recausa.
- **Descuadres de pocos pesos**: doble clic en el débito del gasto, ajusta y "guardar y aprobar". Si el campo no toma el punto decimal, escribe el número sin decimales. Si impide guardar, no recauses: repórtalo.
- **Valor neto con descuento**: proveedores cuyo documento trae descuentos que desbalancean la causación; reporta la factura al soporte.
- **Cuenta no importada**: el balance de prueba solo trae cuentas con movimiento. Importa el plan de cuentas completo (Dashboard › plan de cuentas › importar, con columnas código y nombre) y desactiva "crear proveedores" en opciones avanzadas.
- **Tipo de cuenta** (costo, gasto): es un campo interno para informes futuros; no cambia lo que se envía al software contable.
- **Nota crédito** con error de "débito y crédito no nivelados": prueba causar con aprendizaje (no siempre lo resuelve).
- **Documento de dotación** o cuenta propia distinta a la sugerida: hoy la plataforma a veces no deja agregarla a mano.
- Para firmas que llevan solo la contabilidad fiscal de sus clientes, o para ponerse al día con contabilidades atrasadas, bajar las compras de la DIAN y causarlas con la plataforma es el caso de uso más claro. En oficinas de servicios con pocas compras esporádicas, el aprendizaje ayuda menos.
<!-- fuentes: h-ca456137eba3, h-e5076d0a7373, h-8072227e99ae, h-356b484bdf40, h-a921afd858ce, h-3b10fe0f0da1, h-c8c0317a8652, h-20227cba2708, h-f7e9b0b7d233, h-3bfcdd9e3190, h-c7dee3911650 -->

## Novedades y en desarrollo
- Al corregir una factura causada, aparecen abajo las demás del proveedor para aplicarles la misma cuenta de forma masiva (en desarrollo en abril de 2026; ya disponible en reuniones posteriores).
- Varias mejoras de estabilidad del aprendizaje en junio de 2026 (cuando dos líneas compartían la misma cuenta, la corrección se replicaba a ambas).
- En desarrollo según el equipo, 2026: que el aprendizaje funcione también cuando el usuario elimina una cuenta o ítem (hoy solo aprende cuando se cambia algo); guardar como corrección una cuenta agregada a mano (por ejemplo ReteICA); poder editar cantidades de línea antes de enviar al software contable; modificar el módulo de retenciones para que base y valor siempre cuadren.
- Idea discutida: una instrucción propia por empresa que indique cuándo usa la cuenta de clase 5, 6 o 7. Idea: editar el nombre y los dígitos de una cuenta para ligarla a ciertos proveedores.
<!-- fuentes: h-3610bb8fc4d6, h-e407b9d99c2a, h-ca456137eba3, h-356b484bdf40, h-4cae519c5dd0, h-67ee42c92ec6, h-294083954d31, h-ef76153985c0 -->

## Errores comunes
- Usar corrección **global** para una excepción de un solo proveedor.
- Corregir una factura que ya se envió al software contable: hay que anularla y volver a causar.
- Esperar que el aprendizaje funcione sin tocar nada: al inicio hay que corregir a mano.
- Correcciones contradictorias (una cuenta y luego otra): la plataforma no sabe cuál elegir. Deja una sola, la más reciente o más usada, que aparece como sugerida.
- Un historial acumulado con cuentas absurdas: desvincula la cuenta del proveedor (no se borra del plan) o de todos los proveedores desde la lista de cuentas, y recausa.
- Corregir arriba y no recausar los otros grupos: las precausadas no se actualizan solas.
- Un filtro activo en el grupo esconde el resto; quítalo en el lado derecho.
- Una corrección guardada con el detalle equivocado (no repetitivo) no se aplica: ajusta el detalle.
- Cuando guardas con varias facturas seleccionadas y parece que no se aplicó, vuelve a abrir y guarda otra vez.
- Una corrección de retención guardada sin condición de fecha puede seguir aplicando la base vieja tras un cambio de decreto: elimina lo aprendido y recausa.
- Confundir código y descripción: la plataforma considera ambos.
<!-- fuentes: h-e4a57c41cb5c, h-a921afd858ce, h-c8c0317a8652, h-e15f41ef6e77, h-356b484bdf40, h-3610bb8fc4d6 -->

## Tips del asesor
- El primer mes es más manual; luego, a los dos o tres meses, la revisión se reduce mucho porque las facturas suelen ser parecidas.
- Mientras parametrizas, elimina el historial aprendido del proveedor para ver la causación limpia.
- Al causar por lotes, causa primero **un solo mes**, corrígelo y recién después los demás. Antes de un lote grande, revisa unas pocas facturas de varios proveedores: si se causan miles sin esa revisión, los errores se multiplican.
- Corrige desde **pendientes** (antes de causar) para que aprenda mejor. Prima el historial: si el proveedor ya tiene cuentas de causaciones anteriores, las reutiliza, incluso las erróneas; elimínalas con la X en la ficha del proveedor para forzar otras.
- Corrige una vez la factura de ejemplo y compruébalo causando otra del mismo proveedor.
- El equipo contable debe acordar internamente qué cuenta usa para cada tipo de producto (aseo, cafetería, empaques); sin eso, el mismo producto puede ir a cuentas distintas.
- Si hay un texto claro, usa una regla fija; si hay muchos productos distintos, corrige por grupo.
- Algunos asesores recomiendan dejar la asignación manual un mes (y desactivar las sugerencias automáticas de centros de costo) antes de pasar a reglas.
- Si algo falla, envía al asesor una captura con la factura y la regla que necesitas.
- El control de cambios queda registrado: si el contador se va, la empresa conserva el historial y no necesita empalme manual.
<!-- fuentes: h-1b5ddf9047dc, h-3610bb8fc4d6, h-ef76153985c0, h-2021ec577723, h-ca456137eba3, h-f093ed31e568, h-f9bbb8990054, h-e4a57c41cb5c, h-ba672f6fbb0d -->
