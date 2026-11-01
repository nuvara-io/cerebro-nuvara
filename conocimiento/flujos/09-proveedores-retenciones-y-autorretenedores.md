# Proveedores, retenciones y autorretenedores

## Objetivo
Que la plataforma calcule bien ReteFuente, ReteICA y ReteIVA, que no retenga a quien no corresponde y que la ficha de cada proveedor quede bien armada, porque de ella salen también la exógena y los medios magnéticos.
<!-- fuentes: h-6518cb30d010, h-0e3c41c7a48d -->

## Requisitos
- Conocer el régimen de la empresa (retenedor, gran contribuyente, Régimen Simple). En **Administración → Configuración → Tributaria** revisa régimen, gran contribuyente, responsable de IVA, obligaciones de renta y cuentas de bienes y servicios: de eso depende que se calculen retenciones.
- Conocer el estatus tributario de los proveedores (autorretenedor, gran contribuyente, Régimen Simple u ordinario). Con los proveedores grandes y recurrentes, ten a mano su RUT.
- Para ReteICA: los municipios donde la empresa retiene, sus actividades y tarifas, y el **plan de cuentas** (no el balance de prueba) para importar las cuentas de los impuestos.
<!-- fuentes: h-f9bbb8990054, h-72ec6e3363ae, h-737965f4a467, h-b66360b1cf5c -->

## Cómo decide la plataforma si retiene
- La retención la practica el comprador. Antes de aplicarla se mira al **proveedor**: a un autorretenedor no se le retiene nunca; a un gran contribuyente que no es autorretenedor sí. Decide el estado tributario del proveedor, no el de la empresa compradora. Un Régimen Simple no practica retención en la fuente.
- Para elegir el concepto lee los ítems de la factura y el contexto de la empresa (a qué se dedica), busca la casilla en una tabla de referencia de conceptos, porcentajes y topes mínimos, y revisa si se supera el tope. Si no se supera, no retiene y la factura va directo a la cuenta por pagar. Si la factura mezcla conceptos, aplica una retención por concepto. Los porcentajes y topes los fija la norma: **verificar con fuente oficial** antes de citarlos.
- **Retención acumulada:** la plataforma suma las facturas del mismo proveedor del día y, si el acumulado supera la base mínima, retiene en todas aunque cada una por separado no llegue. Para proveedores que siempre retienen, basta recausar.
- Las reglas legales están cargadas con vigencias y se elige la que corresponde a la **fecha de la factura**. El cambio de bases de mayo de 2026 y su vigencia no están confirmados (ver `por-confirmar.md`).
- Cuando la factura trae una retención declarada por el proveedor, la plataforma la respeta; una versión anterior la priorizaba aunque el monto no la justificara, y ya se corrigió.
<!-- fuentes: h-e46ab47fa162, h-2eed69e6f27f, h-12027d283e58, h-57509b5a0a19, h-85f50952dea3, h-356b484bdf40, h-19e5ebd1eb97, h-b139a4b8f2fe, h-737965f4a467, h-2e1e6ac39318 -->

## Pasos
1. Abre la **ficha del proveedor**: con el lápiz de la lista de proveedores, o con el lápiz del bloque del proveedor en la causación (el ojo, pestaña proveedor, muestra sus obligaciones). La plataforma detecta **Autorretenedor** o **Gran contribuyente** cuando la factura lo declara en las responsabilidades del emisor.
2. Si el XML no lo dice (suele venir solo en una nota al pie), revisa la **factura original** (la del correo trae más datos que la lista de la DIAN) y marca a mano la condición. Se hace una sola vez y la plataforma la recuerda, pero revisa cada proveedor nuevo. Luego recausa.
3. Para que no se retenga a un proveedor, usa una de estas vías: marcar autorretenedor; en **retenciones especiales** del proveedor elegir "nunca retener" o "retener solo la mitad"; eliminar la línea de retención y guardar; o marcar la retención como **asumida** y llevarla a otra cuenta. Para quitar una retención de todo un grupo, borra la línea desde el encabezado del grupo.
4. Para corregir una tarifa: papelera en la retención errónea → **Agregar retención → Retención en la fuente → Personalizada**, escribe la tasa en el campo "Tasa", guarda y aprueba para que núvara aprenda. Al guardar la regla aprendida elige **por proveedor**, no global, si la tarifa depende del tercero. Si no se deja agregar, usa el campo "Tasa" de abajo.
5. En **Configuración → Tributaria** define las cuentas de IVA descontable, impuesto al consumo y otros gravámenes. La retención de compras tiene varias tarifas con cuentas parecidas: elige la cuenta exacta de la tarifa (la retención en la fuente de compras va a una subcuenta del 2365).
6. Configura **ReteICA** (sección siguiente).
7. Revisa las retenciones calculadas, los totales (ahí se nota el error) y elimina las que no aplican.
8. Para probar un cambio, **recausa sin aprendizaje** y, si no se refleja, recarga la página de forma forzada. La configuración nueva tarda un momento en tomarse; valídala con una factura de prueba.
<!-- fuentes: h-1b5ddf9047dc, h-2021ec577723, h-20227cba2708, h-356b484bdf40, h-364a64863009, h-a921afd858ce, h-e46ab47fa162, h-e5076d0a7373, h-d35e1cc2634f, h-e5a14f4a5436, h-f093ed31e568, h-b139a4b8f2fe, h-67ee42c92ec6, h-6efbb6e48a66, h-f9bbb8990054, h-c18467806240 -->

## ReteICA por municipio
**Dónde:** Configuración → Tributaria → **Reglas de ReteICA** ("Reglas ICA por actividad") → Agregar regla. Se define municipio, tarifa, actividad (servicios, comercial, industrial, financiera, construcción, agropecuaria, o todas si se deja vacío; también códigos de actividad escritos separados), cuenta contable y base mínima en UVT o pesos (la plataforma convierte). Cada regla activa exige tarifa, municipio y cuenta; si falta algo, no guarda. La detección con inteligencia artificial propone reglas a partir de las que ya tienes. Las reglas no se crean desde la causación.

**Tarifa:** se escribe como porcentaje (9,66 por mil es 0,966 %). En la retención personalizada de una factura el campo no admite coma y la tarifa se pone como proporción. La tarifa cambia por año: se puede parametrizar la vigente para fechas distintas, y lo histórico usa la de su año. Una tarifa se puede amarrar a un proveedor específico; en ciudades con varias tarifas conviven todas y debes saber cuál aplica a cada proveedor.

**Cuándo se aplica:**
- Solo si el usuario es responsable de ICA y el proveedor o el servicio está dentro del municipio donde declara. Las compras fuera del territorio no la llevan. Según la contadora, un servicio a distancia no se grava y uno prestado en sitio sí (verificar con fuente oficial).
- Depende del municipio y de la actividad; cada municipio tiene su propia tabla, por eso es el impuesto más difícil de automatizar.
- Con las reglas bien armadas, la plataforma toma el municipio de la factura o de su descripción. En transporte la tarifa depende del **origen** de la mercancía; si una factura mezcla orígenes se llevan dos líneas con tarifa distinta, y si el origen es de un lugar sin regla no se retiene.
- La actividad económica del proveedor sale de la factura. Si no viene, asígnala en el proveedor (menú Proveedores de la causación), donde también marcas si tributa según el RUT o en otro lugar y la regla de retener siempre o nunca.
- Una empresa con sedes en varios municipios puede tener compras de una sede con ReteICA y otras sin ella; no es regla de toda la empresa.

**Cálculo:** base × tarifa por mil, llevado como crédito a la cuenta de ReteICA (grupo 2368, con subcuenta por tarifa) y restado de lo que se paga al proveedor.

**Manual:** mientras no haya regla, agrega la retención en la factura (tarifa, base y cuenta) y se guarda para el proveedor. También hay una configuración global para aplicarla a varios proveedores sin ir uno por uno. Para el cliente de una firma que es agente retenedor de ICA en un solo municipio, con la misma base para casi todos los proveedores, se pidió ReteICA y ReteIVA automáticos.

**Novedad:** la lógica de ReteICA por reglas se terminó a finales de julio de 2026, porque varios usuarios nuevos la necesitaban. Antes se cargaba proveedor por proveedor.
<!-- fuentes: h-364a64863009, h-3162db18d8b9, h-72ec6e3363ae, h-19e5ebd1eb97, h-568b1428fb13, h-b66360b1cf5c, h-d35e1cc2634f, h-e5a14f4a5436, h-e15f41ef6e77, h-356b484bdf40, h-42d3d6d6ad33 -->

## ReteIVA y Régimen Simple
- ReteIVA depende del tipo de servicio y del lugar; el desarrollo todavía no funciona bien. Mientras tanto agrégala a mano en la factura (gasto → IVA → retenciones) para que la plataforma aprenda. Se reportó ReteIVA aplicada a una empresa de régimen ordinario, y se tomó como error a investigar.
- Un proveedor del Régimen Simple puede mencionar ReteIVA en la factura; va al crédito y baja el valor a pagar. Según una capacitación de 2025, el Régimen Simple sí retiene IVA a otros del Régimen Simple (ver `por-confirmar.md`).
- Si a una empresa que ya es de régimen ordinario no se le calculan retenciones, puede que su RUT cargado siga diciendo Régimen Simple: sube el RUT actualizado en Configuración → Tributaria → General, espera que procese, guarda, verifica el régimen en Tributaria → impuestos y recausa. Mientras tanto agrega la retención a mano en **precausadas** (abrir la factura, Agregar, guardar y aprobar con aprendizaje).
<!-- fuentes: h-1b5ddf9047dc, h-2eed69e6f27f, h-e5a14f4a5436, h-c18467806240, h-f093ed31e568, h-3bfcdd9e3190, h-ef76153985c0 -->

## Casos especiales
- **Combustibles:** solo se retiene si la factura la trae; una empresa que paga el tanqueo normal sin retención la elimina en la fila. Si la retención es pequeña y la estación no deja descontarla, la empresa puede **asumirla** (cuenta de impuestos asumidos, clase 53) y pagar el total; igual se declara. Con cuenta a crédito sí se descuenta, por eso es configurable. Si el proveedor necesita otra cuenta y ni retención ni IVA, se corrige una vez y se aplica a todas sus facturas, también las de otros meses.
- **Servicios públicos:** son de necesidad básica y no llevan retención en la fuente; la plataforma la aplicó por error a un recibo de internet, y el agua tiene un tratamiento especial. Revisa estos casos.
- **Productos agrícolas o pecuarios sin procesar:** tienen base y tarifa propias, distintas de la compra general. Una pista de la contadora: si el ítem trae IVA, casi siempre fue procesado. En facturas mixtas hay que sumar solo las bases que aplican; la plataforma antes aplicaba siempre la tarifa general y en julio de 2026 clasificó como agrícola un producto elaborado. Corrige con retención personalizada. El asesor pidió la lista de proveedores que requieren análisis especial.
- **Retención especial** (la mitad de la tarifa): se configura por proveedor; el contador propuso una cuenta propia para ese porcentaje.
- **Activos fijos:** la compra de un vehículo lleva una tarifa distinta de la compra general (verificar con fuente oficial).
- **Leyenda de la factura** (régimen especial, "no practicar retención"): el contador la lee antes de aprobar la retención sugerida; si el total causado supera el de la factura real, suele ser una retención que sobra.
- **Mantenimiento:** mezcla servicio y productos con retenciones distintas; se pidió retenciones diferenciadas por concepto.
- **Contratos con anticipos, retención de garantía e IVA sobre utilidad** usan cuentas especiales (28 para pasivos de contratos); el asesor pidió ejemplos del libro auxiliar.
- **Anticipos de proveedor:** estados activo, parcial, aplicado o cancelado. Se importan por archivo (no pegando texto) en Administración → Anticipos → Importar, con la cuenta contable de cada uno, que luego aparece en la causación. "Actualizados" significa que ya existían; solo se eliminan uno por uno.
- **Siigo:** los códigos de retención se piden una sola vez al exportar. La migración usa el código del impuesto, no el número de cuenta. Las retenciones que falten en lo ya exportado se agregan a mano en Siigo.
- **Cuentas:** el IVA de compras es débito y el de ventas crédito en el grupo 24; la diferencia se paga a la DIAN. Una cuenta por pagar con retenciones pequeñas no asumidas deja saldos de centavos en el grupo 22.
<!-- fuentes: h-364a64863009, h-78a6d7ffada0, h-85f50952dea3, h-1b5ddf9047dc, h-e5076d0a7373, h-2e1e6ac39318, h-ca456137eba3, h-f9bbb8990054, h-220ed21c4a5b, h-f7e9b0b7d233, h-b66360b1cf5c, h-088d516b4772, h-c7dee3911650, h-66eba239a3cb -->

## Ficha del proveedor
- Se crea con las facturas: contacto, tipo de persona, régimen, autorretenedor, gran contribuyente, exento de retención, responsabilidades y cuentas asociadas. Al importar terceros solo entran NIT y nombre; la condición de autorretenedor sale de la factura. Una factura puede no traer correo, teléfono ni dirección.
- Puedes crear un proveedor a mano desde la lista de proveedores. Como se valida por NIT, un nombre errado se corrige en la plataforma y en el software contable.
- Cada mes un proceso valida el NIT de cada proveedor con el validador de la DIAN (existe, activo, suspendido o ficticio).
- Los datos del tercero (persona natural o jurídica, nombre como en el RUT, régimen, responsabilidad de IVA, actividad de ICA, correo) alimentan la exógena: un documento mal creado queda mal reportado. Un tercero sin RUT queda creado con menos información.
- Si un proveedor aparece como producto en la lista "por factura", corrígelo.
<!-- fuentes: h-0e3c41c7a48d, h-a921afd858ce, h-ef76153985c0, h-fad9de9e12ed, h-5cb9422bb0c9, h-6518cb30d010, h-1d261692318e, h-2021ec577723, h-a59810d87210 -->

## En desarrollo y novedades
Según el equipo, 2026; no están disponibles salvo que se indique:
- Botón para **desactivar la retención acumulada** (agosto).
- Selector en el proveedor para **siempre aplicar retención sin importar el monto**, para compras recurrentes (junio).
- Opción de **agregar o reemplazar** al subir anticipos, y campo para **actualizar proveedores por archivo**.
- Retenciones diferenciadas por concepto y ReteIVA automática.
- Módulo de retenciones renovado, con video corto sobre cómo agregarlas (julio).
- Ideas: consultar el RUT por NIT (la DIAN solo lo envía al correo del titular, no es viable), cargar autorretenedores con una herramienta externa y ver qué proveedores están detrás de un valor acumulado de impuestos.
<!-- fuentes: h-85f50952dea3, h-57509b5a0a19, h-088d516b4772, h-b66360b1cf5c, h-f9bbb8990054, h-01b5a1f7ff0a, h-3610bb8fc4d6, h-568b1428fb13 -->

## Errores comunes
- Dejar que la plataforma retenga a un autorretenedor o a quien no se le retiene (marca la condición y recausa, sin aprendizaje para descartar que venga de lo aprendido).
- Una retención que perdió la usuaria por aplicarla a un proveedor que no correspondía: se revierte como gasto no deducible.
- Régimen mal leído (RUT viejo en Régimen Simple) y por eso sin retenciones.
- Tarifa de ReteICA con muchos decimales: el campo tiene limitaciones.
- Con una regla de ReteICA guardada, la tarifa se calcula bien pero a veces la cuenta no es la configurada (toma otra de la familia 2368). El selector de cuentas muestra primero la 2368 al filtrar por 2365.
- Con tarifa personalizada, la cuenta del 1 % se llama "retefuente servicios 4 %" aunque aplica el valor correcto.
- Retenciones omitidas en meses anteriores: configúralas bien desde ya.
- Cuentas de retención complejas: manéjalas a mano al principio.
<!-- fuentes: h-20227cba2708, h-6efbb6e48a66, h-c18467806240, h-b139a4b8f2fe, h-e5a14f4a5436, h-d35e1cc2634f, h-568b1428fb13 -->

## Tips del asesor
- Revisa siempre la factura original y los totales.
- Las tarifas, bases y topes que citan usuarios o asesores no son datos de la plataforma; confirma con el contador y fuente oficial, sobre todo cuando cambie la norma.
- Asignar la cuenta al proveedor es más preciso que el buscador de productos por nombre.
- Si una factura combina impuestos asumidos o impuesto a la bolsa, agrega líneas o ajusta totales para que cuadre.
- Un autorretenedor y un gran contribuyente no son lo mismo: para saber si lo es hay que mirar el RUT (responsabilidades 13 y 15) o la factura.
<!-- fuentes: h-356b484bdf40, h-1b5ddf9047dc, h-f9bbb8990054, h-364a64863009, h-a921afd858ce, h-e46ab47fa162 -->
