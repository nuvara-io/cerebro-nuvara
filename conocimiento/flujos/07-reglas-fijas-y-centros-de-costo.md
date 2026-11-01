# Reglas fijas y centros de costo

## Objetivo
Dejar que la causación siga siempre el mismo criterio (cuenta, IVA, retención, centro de costo) mediante **reglas fijas** que se crean al corregir una factura, y asignar **centros de costo** a cada factura antes de causar y enviar al programa contable.

## Requisitos
- Lista de centros de costo con el mismo código y nombre que tienen en el programa contable (con sus guiones y ceros).
- Facturas reales de ejemplo para probar la regla antes de dejarla fija.
- Si los centros salen de etiquetas del correo: el correo conectado (por ahora solo Gmail) y las facturas etiquetadas por el cliente del contador.

## Pasos: crear una regla fija desde la factura (flujo actual)
1. Abre la factura en causación o precausadas y **corrige** lo que haga falta: cuenta, IVA, retención, centro de costo.
2. Al **guardar**, núvara ofrece tres caminos:
   - **Solo para esa factura:** es un caso aislado y no ensucia el aprendizaje.
   - **Que aprenda del proveedor:** repite esa causación en sus siguientes facturas.
   - **Crear una regla fija** (en algunas versiones, "guardar con regla").
3. En la regla fija marca con casillas las **condiciones** que aplican: proveedor, centro de costo, tipo de factura, IVA, palabras del texto del ítem o de las notas (se agregan con Enter o coma) y monto mínimo. Quita las que no te interesan.
4. Quita también la condición "la cuenta es X": es justo lo que estás corrigiendo. Si el usuario no maneja centros de costo, quita ese check para evitar validaciones de más.
5. **Previsualiza** a qué facturas aplicaría, ponle un nombre claro ("con IVA", "sin IVA") y guárdala. Si eliges aplicar a facturas ya causadas, núvara reajusta el lote precausado.
6. La regla se puede **editar después**: mañana puedes agregarle otra condición al texto. Un proveedor puede tener varias reglas (por ejemplo una por concepto: peaje, parqueadero).

### Alcance y condiciones frecuentes
- **Sin proveedor marcado**, la regla es global para cualquier proveedor. También hay reglas globales por centro de costo, creadas desde la sección de centros de costo o desde la causación quitando el proveedor.
- **Proveedor "siempre":** si todo lo de un proveedor va a la misma cuenta, la regla es por proveedor sin más condiciones.
- **"Descripción contiene":** si solo ciertos productos van a una cuenta (por ejemplo, un ítem de inventario), usa texto del ítem, con o sin proveedor. Con proveedor valida mejor.
- **Por contenido de documentos soporte:** si el usuario genera sus propios documentos soporte con una marca fija en la descripción, una regla "contiene" + texto fija proveedor, cuentas y retención de forma fiable.
- **Transporte y ReteICA:** si la retención depende del lugar, la regla va por texto (origen o destino), no por producto, porque el producto cambia con cada placa. Para una base mínima, combina proveedor + monto mínimo + texto.
- **Costo o gasto:** si el usuario lleva costo (clase 7) en centros de producción y gasto (clase 5) en administrativos, la regla del centro de costo define eso; las excepciones por texto van como regla aparte.
- **Regla por centro de costo con grupo de cuentas:** quita el proveedor y restringe la cuenta a un grupo completo (por ejemplo, la clase 6) en vez de la cuenta que sugirió la inteligencia artificial. Para llevar el IVA como mayor valor del costo en un centro, cambia la cuenta de IVA en la causación y deja solo el centro de costo como condición.
- Las reglas son **por empresa**; las herramientas son las mismas en todas, pero las reglas no se comparten.

### Cuál regla gana
Cuando varias aplican, **gana la más específica**: cuantas más casillas tenga marcadas (proveedor, centro de costo, texto del ítem), más peso. Una regla por texto del ítem le gana a la de centro de costo. Es lo que explicó el equipo en 2026; las reglas de clasificación de centros de costo tienen además un **nivel de prioridad** (las específicas con número mayor se aplican primero y las generales toman lo que queda) y las reglas de ReteICA por municipio se leen **en orden** (ver más abajo). Ver `por-confirmar.md`.

<!-- fuentes: h-19e5ebd1eb97, h-a921afd858ce, h-3162db18d8b9, h-c7dee3911650, h-12027d283e58, h-a30f11ead348, h-78a6d7ffada0, h-b66360b1cf5c, h-577942d4a1de, h-ac390aa796e4 -->

## Nota: el flujo anterior
Antes había que **crear las reglas primero** en Administración › Configuración › Reglas de causación, sabiendo de antemano qué se aplicaría. El esquema era: nombre claro, a qué centros de costo aplica (agrupados si comparten lógica), condiciones (monto, proveedor, tipo de cuenta de gasto 5, 6 o 7, palabras de la descripción), acción de **agregar** o **reemplazar** una línea (por ejemplo el IVA, limitado a un prefijo como 2408), simular con una factura real, corregir y habilitar. Esas reglas por líneas (débito o crédito, cuenta, base y porcentaje, por ejemplo una retención con tope) siguen mencionándose en sesiones de 2026, pero el equipo explicó en julio que hoy el camino principal es la regla desde la factura. Al limpiar la configuración vieja se planea quitar reglas viejas para que el usuario no vea ruido; si el usuario lo pide, se conservan sus precausadas. Las reglas de prueba conviene borrarlas.

<!-- fuentes: h-19e5ebd1eb97, h-b66360b1cf5c, h-3162db18d8b9 -->

## Centros de costo
### Activar y crear
1. Actívalos por empresa en Administración › Configuración › Operación (centros de costo) y guarda. No todas las empresas los usan.
2. Crea en Administración › Centros de costo: uno por uno (código, nombre, descripción, palabra clave y centro padre si hay subcentros) o con **Importar › pegar texto** (código y nombre), o con el archivo modelo del programa contable. La plataforma indica cuántos creó y cuántos actualizó.
3. Revisa cómo quedó el código (ceros a la izquierda, guiones, sufijos): el programa contable valida el código exacto y rechaza el comprobante si no coincide.
4. Un centro creado en el programa contable se trae con **consultar centros de costo** (API) y luego se crea la regla que lo usa.
5. Los centros se distinguen de los **subcentros**; la regla de un centro se hereda a sus subcentros.

### Asignar a cada factura
- **A mano:** en la factura, campo "centro de costo" en la parte superior (a nivel de factura, no de la línea contable) o botón **Asignar**. Por producto solo conviene si una factura se reparte entre sedes.
- **Masiva:** en Precausadas › Acciones filtra las que no tienen centro, selecciónalas y asigna. También se pueden importar reglas desde Excel (Reglas de clasificación › Importar reglas › pegar texto › analizar › asignar) con tercero, número de factura y centro; si la factura aún no llegó, responde "no encontrada" y se reintenta. Si el portapapeles trae una imagen en vez de texto, copia de nuevo solo el rango.
- **Por reglas de clasificación** (Centros de costo › Reglas de clasificación): por proveedor, por cuenta contable, por etiqueta del correo, por texto de la factura (como una placa) o por inteligencia artificial (describes en lenguaje natural qué facturas van a ese centro). Pueden convivir. **Aplicar reglas** asigna de golpe las facturas ya cargadas; las nuevas se clasifican al llegar.
- **Repartir** una factura entre varios centros: por línea solo cabe uno. Las facturas que se reparten en porcentajes se asignan a mano o se desglosan por producto; mientras se habilita la distribución, el acuerdo es causar con un solo centro y dejar pendientes las que requieran varios.

### Centros por etiqueta del correo
1. El cliente del contador etiqueta en su correo (una etiqueta por negocio o sede). Conviene nombrar el centro igual que la etiqueta.
2. En Centros de costo › Reglas de clasificación, núvara lista las etiquetas del correo; eliges a qué centro va cada una y pulsas **crear regla**.
3. Cada factura tiene un estado: asignado, sin etiqueta, sin correo, solicitado o sugerido. Se filtra en Acciones › centros de costo y también por "sin centro de costo" en archivos.
4. Cuatro casos:
   - Factura en el correo con etiqueta: se asigna.
   - En el correo sin etiqueta que coincida: queda "sin etiqueta". Usa **solicitar al cliente**: va a la etiqueta "faltantes de centro de costo" y la factura queda en amarillo ("solicitado").
   - Bajada de la DIAN: al sincronizar se busca el correo por número de factura o CUFE y se asigna igual.
   - Solo en la DIAN: estado "sin correo"; **enviar correo con la factura** manda al cliente un mensaje (con texto personalizable y logo de la firma) para que la etiquete.
5. **Resincronizar** (una, varias o toda la página) vuelve al correo y actualiza el estado. Es manual a propósito y tarda unos minutos. El correo es la fuente de verdad: etiquetar desde núvara no se refleja en el correo.
6. Si pasan 3 a 5 días sin etiqueta, es probable que el cliente no la ponga; lo ideal es que revise a menudo su etiqueta de faltantes.

### Placas de vehículo
- La plataforma detecta la placa en las facturas que la traen. Crea la regla en Reglas de clasificación: **nombre = centro de costo, condición = placa**.
- Gastos sin placa (combustible, llantas, repuestos): regla de excepción "cuenta de vehículo y sin placa" hacia un centro general de la flota. Una placa mal digitada también cae ahí.
- **Prioridad:** a las reglas específicas por placa se les da un nivel mayor que a las generales.
- Gastos personales o no deducibles van a un centro "personal" creado primero en el programa contable.
- Una factura de POS puede no traer la placa como dato identificable.

### Programas contables
- **Siigo** exige centro de costo para enviar si la empresa lo usa, y deben coincidir en nombre y código; hoy el envío falla en vez de avisar cuál falta.
- **World Office** no obliga centro de costo en compras; allí la dimensión es la **bodega**. núvara no puede deducir la bodega: suele estar en las notas de la factura y el usuario la asigna.

<!-- fuentes: h-b451d169d162, h-3b10fe0f0da1, h-e407b9d99c2a, h-ca456137eba3, h-577942d4a1de, h-4cae519c5dd0, h-088d516b4772, h-a30f11ead348, h-220ed21c4a5b, h-356b484bdf40, h-797a6adc3390, h-7ff23bccd383, h-fccf335cc6f1, h-b139a4b8f2fe, h-a59810d87210, h-ac5a1e51c5ed, h-ba672f6fbb0d, h-3a9a315786c4, h-2021ec577723, h-2eed69e6f27f, h-1d261692318e, h-23bf40f47dd3, h-8072227e99ae, h-1adf87b5dfa6, h-57509b5a0a19 -->

## Reglas de IVA, retención y cuentas relacionadas
- **Configuración › Tributaria:** IVA descontable, IVA como mayor valor del gasto, IVA en línea separada, cuentas por tarifa (19 %, 5 %) y otros impuestos (consumo, bolsas, bebidas azucaradas).
- **Mapeo por prefijo:** el prefijo de la cuenta de gasto va en la primera posición y la cuenta completa al frente; sin eso la causación falla. Sirve para IVA como mayor valor del costo en inventario y descontable en servicios.
- **Facturas mixtas:** activa separar gravado y no gravado y asigna una cuenta por tarifa.
- **Cuenta por clase de gasto:** fija la contrapartida (por ejemplo, la clase 5 a una cuenta de caja); no tiene que ver con el IVA.
- **Reglas de ICA / ReteICA:** Tributaria › ICA › Agregar regla › "Detectar de mis cuentas"; cuenta de retención, tarifa, base mínima en UVT y actividad. Dos reglas para la misma actividad entran en conflicto. En la lista por municipio **el orden importa**: la primera que coincide gana, las específicas arriba y la genérica siempre última; una fila amarilla nunca se aplicará.
- La configuración es **por empresa**: configura una completa, pruébala y replícala. Lo parametrizado un mes se conserva en los siguientes.
- Autorretenedor o gran contribuyente: se marca al proveedor en la causación.

<!-- fuentes: h-1b5ddf9047dc, h-568b1428fb13, h-c7dee3911650, h-3610bb8fc4d6, h-f05e1fbaf759, h-e15f41ef6e77, h-d35e1cc2634f, h-e4a57c41cb5c, h-fad9de9e12ed, h-f093ed31e568, h-5cb9422bb0c9, h-ed9c331e7c17, h-b66360b1cf5c, h-2bcaf1438320, h-b967a73c48ed, h-e46ab47fa162, h-92777206d505 -->

## Errores comunes
- Activar una regla sin probarla con facturas reales.
- Causar o enviar facturas sin centro de costo asignado.
- Suponer que las reglas se comparten entre empresas (no se comparten).
- Crear la regla con la condición "la cuenta es X" marcada: nunca aplicará a lo que quieres corregir.
- Corregir por proveedor cuando el mismo proveedor factura conceptos distintos: conviene usar el contenido del ítem.
- Centros de costo duplicados o mal categorizados: pueden hacer fallar el envío; límpialos antes. Si se pierden al cargar, revisa la importación.
- Centro mal importado (códigos con subcentros que no se tomaron): se eliminan y se crean a mano.
- Etiquetar una cuenta de cobro en vez de la factura electrónica, o factura sin correo enlazado ("solicitar" solo funciona si llegó por correo).
- Importar y encontrar mezcladas facturas electrónicas y cuentas de cobro: solo las electrónicas se enlazan.
- Inventario variable por lote: la cuenta no se puede automatizar; el usuario la indica a mano.

<!-- fuentes: h-19e5ebd1eb97, h-a921afd858ce, h-b66360b1cf5c, h-3b10fe0f0da1, h-4cae519c5dd0, h-a30f11ead348, h-12027d283e58 -->

## Tips del asesor
- Prueba siempre antes de dejar fija una regla, y bórrale las pruebas.
- Pon nombres claros a las reglas y edita la existente en vez de crear una nueva por cada centro nuevo.
- Una regla de empresa es más estable que depender del aprendizaje (los dos iconitos en una precausación indican que la cuenta fue aprendida). Una regla de aprendizaje es interna y no cambia el programa contable.
- Si las compras las hacen sedes por región, clasificar por proveedor es lo más sencillo. Si un mismo proveedor y dirección sirven a varios centros, usa etiqueta o asigna a mano.
- Se puede diferenciar entre compra y servicio si se parametriza con facturas de ejemplo (se pidió soporte del equipo).

<!-- fuentes: h-3162db18d8b9, h-a921afd858ce, h-568b1428fb13, h-ca456137eba3, h-220ed21c4a5b, h-3a9a315786c4, h-20227cba2708 -->

## En desarrollo (según el equipo, 2026)
- Distribuir una factura entre varios centros de costo.
- Avisar cuál centro de costo falta en el programa contable en vez de fallar (en una sesión de junio la plataforma aún no enviaba el centro de costo a Siigo); corregir errores conocidos: la primera vez que se aplica una regla por placa puede asignar sin placa, y a veces un centro recién creado no se sincroniza desde la API.
- Selector de "cuenta por clase de gasto" con todas las cuentas (hoy limitado a un listado reducido) y condición del IVA como mayor valor por clase de gasto.
- Cuenta de gasto de IVA separada por cuenta mayor (para medios magnéticos).
- Rehacer la pantalla de reglas de causación para editarla más fácil (el porcentaje con varios decimales no se dejaba escribir).
- Botón para actividades personalizadas de ICA y forma más rápida de reordenar reglas.
- Ideas que el equipo evaluará: leer el texto del correo para relacionar facturas propias sin CUFE. Otros correos distintos de Gmail no funcionan hoy y el desarrollo es grande.
- Evaluar pasar a causación basada en reglas para usuarios que hoy dependen de inteligencia artificial: requiere pruebas por los usuarios activos.

<!-- fuentes: h-a59810d87210, h-ac5a1e51c5ed, h-356b484bdf40, h-4cae519c5dd0, h-577942d4a1de, h-568b1428fb13, h-ed9c331e7c17, h-b66360b1cf5c, h-d35e1cc2634f, h-3b10fe0f0da1, h-b451d169d162, h-088d516b4772 -->
