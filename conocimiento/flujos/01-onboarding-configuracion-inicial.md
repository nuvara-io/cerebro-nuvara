# Onboarding y configuración inicial de una empresa

## Objetivo
Crear la empresa en núvara y dejar el perfil contable listo para que la precausación sea precisa. Se hace **una sola vez por empresa** y toma entre 15 y 30 minutos, registro incluido (ver `por-confirmar.md`). La primera vez conviene que sea acompañada.

<!-- fuentes: h-3a9a315786c4, h-f093ed31e568, h-0e3c41c7a48d, h-364a64863009 -->

## Requisitos
- **RUT** en PDF, limpio y sin contraseña.
- **Balance de prueba por tercero** en Excel, del software contable, del año vigente o del rango en que causas la empresa. Es "la radiografía" de la empresa: de ahí núvara toma cuentas, proveedores y la relación proveedor-cuenta.
- Útiles: el plan de cuentas (PUC) completo y un libro auxiliar del mes anterior.
- Saber cómo maneja la empresa proveedores, inventario, IVA y retenciones, y cuántos dígitos usa el contador (seis u ocho).
- Para traer facturas: la clave del correo o el **token de la DIAN** y la cédula del representante legal. Pídelos antes de la sesión.
- Google Chrome, con la plataforma y la DIAN en el mismo perfil (la extensión lo exige).
- Ideal: que esté presente el contador de la empresa.

<!-- fuentes: h-e15f41ef6e77, h-1d261692318e, h-211a96abdf85, h-bc9b20a13601, h-b66360b1cf5c, h-b5c98e65e8fb -->

## Pasos
1. **Regístrate:** busca núvara, entra a "Iniciar sesión" y elige "Regístrate" (nombre, correo, contraseña). Indica si manejas una empresa o varias. Si eres firma o contador independiente, escribe el nombre de tu organización: ahí se agrupan todas tus empresas. Con plan de empresa la plataforma te lleva a crear la primera; con plan de firma entras al panel general. Si no avanza, recarga.
2. Pulsa **Comenzar** y crea la empresa. "Ver tutorial" (arriba a la derecha) te guía y sirve para repetir el proceso.
3. **Sube el RUT.** La plataforma lo lee con inteligencia artificial y extrae razón social, NIT, tipo de persona, actividad, establecimientos y responsabilidades. Corrige lo que salga mal.
4. **Verifica el NIT.** En **Responsabilidades tributarias** pulsa **Revisar** (deja solo las que la empresa tiene): de ahí sale el **calendario tributario** y los avisos de vencimientos. Pulsa **Confirmar** (se ajusta después).
5. Pulsa **Siguiente**, elige tu software contable (o sáltalo) y **sube el balance por tercero** (ver "Preparar el balance"). Confirma la vista previa y pulsa **Importar datos**: núvara crea cuentas, proveedores y relaciones, y muestra un perfil genérico.
6. **Perfil de la empresa:**
   - Describe la actividad y las fuentes de ingreso; cada campo pide al menos dos elementos. Más detalle, mejor clasificación.
   - Lista las **compras operativas de uso interno, no para reventa** (papelería, mantenimiento). **Sugerir con inteligencia artificial** propone varias: deja las que aplican, borra el resto con la **X** o agrega las tuyas.
   - Elige tipo de empresa: **productora, comercializadora o de servicios**. El algoritmo trata distinto gastos y costos directos según la naturaleza.
7. **Preguntas contables** (siguiente sección).
8. Pulsa **Probar configuración**, **Guardar configuración** y **Continuar**.
9. Elige **de dónde traer facturas**: correo, DIAN o ambos (puedes **Saltar** el correo). Define la **fecha de inicio** eligiendo el día en el calendario, aunque el campo muestre otro valor.
10. Indica si es persona natural o jurídica; si es jurídica, escribe la cédula del representante legal. **Guardar**, **Siguiente**, **Ir a dashboard**.
11. Primera acción recomendada: sincronizar facturas del correo o la DIAN.

<!-- fuentes: h-e15f41ef6e77, h-f9917fa6ff6d, h-20227cba2708, h-356b484bdf40, h-a540b6ab78be, h-f093ed31e568 -->

## Preparar el balance de prueba
- Debe ser **por tercero y con NIT**; sin NIT solo se importan unas pocas cuentas.
- Borra las **filas azules de encabezado y subtotales**; si no, la carga falla. En World Office se eliminan las 4 primeras filas; en Siigo los datos arrancan en la fila 8 (ver `por-confirmar.md`).
- Existe la opción **importar balance**: subes el reporte tal cual lo genera tu programa y la plataforma detecta los NIT (novedad de mediados de 2026; si falla, limpia a mano).
- **World Office:** informe de balance de prueba por terceros, a Excel, del año vigente; nivel de agrupación 3 o 4. Si el programa corre en una máquina remota, pasa el archivo al computador local.
- Si el balance no trae una clase por falta de movimiento (por ejemplo la 15), sube también el PUC para usarla en reglas.
- El **libro auxiliar** ayuda al aprendizaje (Administración › Configuración › Aprendizaje; el asesor lo habilita por cuenta).
- Sin balance por tercero la configuración es más larga: hay que configurar IVA y cuentas principales y enseñarle al sistema.

<!-- fuentes: h-a2337e3bee2b, h-b5c98e65e8fb, h-e15f41ef6e77, h-e5076d0a7373, h-e4a57c41cb5c, h-19e5ebd1eb97, h-c7dee3911650, h-356b484bdf40 -->

## Preguntas contables de la configuración
- **Contrapartida de compras:** por defecto contra **proveedores** (2205): al causar no se sabe si se pagó de contado o a crédito, y se ajusta al cierre. Otras opciones: directo a banco o caja (poco común), por historial, una sola cuenta por pagar o una por clase de gasto. La cuenta propia del proveedor gana. Sin cuenta vinculada, la plataforma alerta al causar.
- **Auxiliar por proveedor** (cuentas 22 y 23): casi nadie lo usa. Una contadora prefirió unificar bajo la serie 22.
- **Inventario:** el contable, no el de elementos. Con inventario y una cuenta 14, las compras para reventa van ahí. Se activa en Configuración › Operación › "Usar inventario".
- **Flota propia:** define si llantas, repuestos y filtros son mantenimiento y no mercancía.
- **Retenciones pequeñas** (como combustible): si la empresa las asume, se paga el total y la retención va a un gasto propio.
- **Otros impuestos** (consumo, bolsas, licores, bebidas azucaradas) y **descuentos**: van al gasto o a una cuenta propia.
- **Régimen simple:** el asistente pregunta si lo es y qué hacer con el IVA.
- **Parámetros:** código de comprobante de ventas y compras (normalmente 4 y 5, a veces al revés), cajas, bancos y centros de costo. Sin ventas en este flujo, solo compras.
- Todo se puede volver a editar después.

<!-- fuentes: h-0e3c41c7a48d, h-fad9de9e12ed, h-1adf87b5dfa6, h-e4a57c41cb5c, h-2021ec577723, h-b967a73c48ed, h-2eed69e6f27f, h-bc9b20a13601 -->

## Manejo del IVA y retenciones
- **Responsable de IVA:** el IVA es descontable y transitorio (2408), no gasto. Se separa por tarifa (19 % y 5 %), compras y servicios, más una cuenta para notas crédito.
- **No descontable (costo):** sumado al gasto, línea separada, cuenta de IVA no descontable o **mapeo de gasto** (alinea el IVA por prefijo de la cuenta). Las más usadas: cuenta no descontable y mapeo. "Mayor valor del inventario" suma el IVA al costo.
- **Facturas mixtas:** deja **automático**; si el balance no separa cuentas por base, indica "separar".
- La configuración manual tiene prioridad sobre el balance. Si dudas, usa "mayor valor" y revisa luego.
- La plataforma solo lleva un impuesto adonde el balance tuvo movimiento. Si la cuenta de IVA mayor valor no existe, créala primero en el plan y asígnala en Administración › Configuración › Tributaria. Para cambiar una cuenta ya guardada a veces hay que elegir otra, guardar, volver a la deseada y guardar. Los cambios pueden tardar unos 5 minutos en reflejarse.
- **Retenciones:** configura solo las que la empresa usa. **Rete ICA** no se detecta sola: se configura por municipio y tarifa. **Rete IVA** se activa marcando a la empresa como agente retenedor de IVA. Autorretenedor, Rete ICA y Rete IVA son de la empresa, no del proveedor.
- Las cuentas de retención se abren por porcentaje, por eso la plataforma trabaja a 8 dígitos.

<!-- fuentes: h-c08bad7a0bf4, h-6f10790c1552, h-1adf87b5dfa6, h-2021ec577723, h-a2337e3bee2b, h-e46ab47fa162, h-220ed21c4a5b, h-0e3c41c7a48d, h-4158a5316af6 -->

## Plan de cuentas (PUC)
- Cinco niveles: clase, grupo, cuenta, subcuenta (6) y auxiliar (8). Cada empresa tiene su catálogo; debe coincidir el **número** con el programa contable, no el nombre.
- **Dígitos:** por defecto 8; se puede elegir de seis a ocho, estricto a ocho o **mixto** (6 y 8 conviven) en Configuración › Finanzas. Pregunta antes de importar cuántos usa el contador.
- **Importar:** empresa › Plan de cuentas › Importar. Pega dos columnas (cuenta y descripción) o sube un Excel con esos encabezados. Al reimportar se actualiza si coincide código o nombre; si cambian ambos, crea una cuenta nueva y avisa. En opciones avanzadas desmarca "crear por proveedores" si solo quieres cuentas.
- Basta con las cuentas de mayor movimiento. Mínimo sin plan: una cuenta por pagar, el IVA y un par de gastos, con "crear cuenta". Créalas primero en el programa contable.
- Si el PUC trae cuentas de mayor (4 o 6 dígitos), la plataforma pide completar los dígitos en cada causación: conviene crear los auxiliares de una vez.
- Las cuentas nuevas no tienen patrón previo: indica cuándo usarlas con reglas o corrigiendo facturas.
- Si eliminas el balance, las facturas causadas conservan sus cuentas, pero causar una nueva falla.
- Los centros de costo se asocian a la etiqueta del correo y se pueden importar; si cambia la etiqueta, edítalos (lápiz).

<!-- fuentes: h-2eed69e6f27f, h-1b5ddf9047dc, h-c08bad7a0bf4, h-e4a57c41cb5c, h-b66360b1cf5c, h-f9917fa6ff6d, h-ed9c331e7c17, h-19e5ebd1eb97, h-b5c98e65e8fb -->

## Errores comunes
- No quitar las filas azules, o subir un balance sin NIT.
- No tener el balance a la mano (retrasa 10 a 15 minutos).
- Plataforma y DIAN en perfiles de Chrome distintos: la extensión no aparece.
- **El RUT no se lee:** PDF borroso, copia de copia o con contraseña. Descarga uno limpio de la DIAN o digita con "editar". En 2026 la carga del RUT y el ingreso manual fallaron de forma intermitente: recarga y avisa a soporte (ver `por-confirmar.md`).
- La vista previa del plan falla con la extensión de traducción activa: desactívala.
- Reimportar un balance puede barrer cuentas: guarda el archivo anterior. No se borran cuentas vinculadas a facturas.
- Un balance de un año sin movimiento reciente trae cuentas que ya no se usan y genera sugerencias erróneas: haz una curaduría antes de causar en masa.
- Cuentas de 10 dígitos dan error (ver "En desarrollo").
- Importaciones que omiten retenciones o las nombran distinto: renómbralas o créalas con "crear cuenta"; el cálculo era correcto.
- Una cuenta guardada no deja cambiar el nombre. La configuración vieja del historial del proveedor no se borra: reemplázala y corrige con una regla.
- Elegir mal el IVA por falta de claridad contable (ver `por-confirmar.md`).
- Confundirse de empresa activa: confirma cuál está abierta.
- Cada organización es independiente: dos firmas pueden crear la misma empresa y la plataforma no avisa.

<!-- fuentes: h-e15f41ef6e77, h-a2337e3bee2b, h-b5c98e65e8fb, h-0b22d0e7e473, h-20227cba2708, h-c7dee3911650, h-b66360b1cf5c, h-3610bb8fc4d6, h-3162db18d8b9, h-d35e1cc2634f, h-220ed21c4a5b, h-a59810d87210, h-e46ab47fa162, h-57509b5a0a19 -->

## Varias empresas, usuarios y roles
- **Otra empresa:** menú izquierdo › **Empresas** › crear (RUT y balance, mismo proceso). Cada una se parametriza aparte y tiene su propio saldo. Para cambiar, usa el nombre de la empresa arriba o la flecha › "Todas las empresas".
- Quien no quiere mezclar una empresa especial puede usar otro correo y perfil; compartir una empresa entre perfiles es la alternativa al plan de firma.
- **Usuarios:** Empresas › Usuarios › agregar miembro (correo, contraseña, empresas). Roles: **administrador** (todo), **operador** (empresas asignadas) y **cliente** (acceso limitado para registrar pagos). No llega correo de invitación; el usuario cambia la clave. Se puede suspender, y la propiedad de la cuenta se puede transferir.
- El equipo de núvara no entra a tus cuentas: compartes toda la pantalla o entregas credenciales temporales. Si un asesor configura algo, el dueño recibe una notificación; en "Mi cuenta › Seguridad" ves los accesos.

<!-- fuentes: h-e15f41ef6e77, h-4b29b889ffdd, h-fc2e220f7888, h-f05e1fbaf759, h-c7dee3911650, h-e4a57c41cb5c, h-1b5ddf9047dc, h-72ec6e3363ae, h-088d516b4772, h-66174a17223f -->

## Casos especiales
- **Empresa sin terceros previos:** se opera con el PUC y la plataforma aprende desde cero.
- **Inventario con productos:** importa el inventario del programa contable al módulo de inventario y asocia cada producto de la factura una vez por producto y proveedor. Confirma el código vigente: los productos inhabilitados en el programa pueden seguir activos en núvara.
- **Fecha de inicio:** elige desde cuándo quieres causar para no traer facturas ya contabilizadas. Con mucho atraso, descarga primero el año de la DIAN y activa el correo desde el mes siguiente. Para arrancar "oficialmente", borra la información de prueba.
- **Alertas de seguridad de Google:** se omiten desde la configuración avanzada del navegador.
- **Empresas similares:** puedes replicar balance, RUT y centros de costo.
- **Cambió el RUT:** Configuración › General › actualizar datos desde el RUT.
- **Descripción por factura:** Administración › Configuración › Operación › "Descripción del servicio" (se concatena con el concepto en la exportación).

<!-- fuentes: h-4cae519c5dd0, h-fad9de9e12ed, h-088d516b4772, h-20227cba2708, h-220ed21c4a5b, h-b66360b1cf5c, h-e4a57c41cb5c, h-e5a14f4a5436 -->

## En desarrollo y novedades
- **Entrevista de configuración por chat** (en desarrollo según el equipo, 2026): un asistente que pregunta, por texto o audio, por ingresos, costos, gastos, activos, pasivos, régimen y retenciones, y guarda un resumen que el usuario confirma. Su primera versión repetía preguntas y no entendía correcciones. No presentarla como disponible.
- **Cuentas de 10 dígitos:** el equipo se comprometió a ampliar el soporte (hoy da error); si solo distinguen el centro de operación, es mejor 8 dígitos más centro de costo.
- Se quitó la opción "mixta" del tipo de empresa, y el botón de inteligencia artificial que sugería etiquetas de ingreso, costo y gasto.
- El registro es más corto y se puede omitir la carga de causaciones iniciales. La interfaz fue declarada definitiva (solo ajustes). Hay una paleta de comandos para saltar a proveedores, cuentas y causaciones.
- Se evalúa que la integración con Siigo traiga el balance directamente. Habrá un video de onboarding con un icono en el registro; ya hay videos cortos en el ícono de sombrero junto a "Acciones" en Causaciones.

<!-- fuentes: h-2ed008699c30, h-ef76153985c0, h-364a64863009, h-57509b5a0a19, h-6f10790c1552, h-0b22d0e7e473, h-ca456137eba3, h-a540b6ab78be, h-211a96abdf85, h-e15f41ef6e77 -->

## Tips del asesor
- "Por cada empresa que vayas a crear, haces este proceso."
- Casi toda la configuración, incluido el IVA, se puede cambiar después.
- Si quien opera no es contador, agenda al contador de la empresa antes de definir IVA y cuentas.
- Causa primero un par de facturas de prueba, compara bases (19 % y 5 %) y total con la original, ajusta y solo después causa el lote grande. Pide ejemplos de cada caso (sin IVA, con IVA, mezcladas, con retención, autorretenedor).
- Orden: configuración contable, luego descarga de facturas, al final conectar el programa contable.
- Pide al usuario definir sus cuentas de gasto y costos directos, y contar cómo funciona la empresa (una "hoja de vida").
- El primer lote es el más lento. Dedica una hora semanal o mensual a causar para no atrasarte.
- Si la configuración es especial o está causando mal, el asesor ofrece 15 minutos de acompañamiento.
- El registro puede abrumar: no se muestra completo en una primera venta; en una demostración en vivo luce mostrar la creación hasta el balance y pasar a una empresa ya configurada.

<!-- fuentes: h-fc2e220f7888, h-1b5ddf9047dc, h-4158a5316af6, h-57509b5a0a19, h-a540b6ab78be, h-3bfcdd9e3190, h-356b484bdf40, h-78a6d7ffada0, h-0e3c41c7a48d, h-5cb9422bb0c9, h-2021ec577723 -->
