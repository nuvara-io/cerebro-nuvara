---
id: reglas-y-centros-de-costo
titulo: Reglas fijas y centros de costo
publico: P
actualizado: 2026-11-02
conexiones: []
fuentes:
  - conocimiento/flujos/07-reglas-fijas-y-centros-de-costo.md
  - conocimiento/preguntas-frecuentes.md#centros-de-costo-y-reglas
  - conocimiento/objeciones-y-dolores.md#centros-de-costo-y-unidades-de-negocio
  - conocimiento/por-confirmar.md#centros-de-costo-y-reglas
  - platform@5241b3430
---

# Reglas fijas y centros de costo

Las **reglas fijas** hacen que la causación siga siempre el mismo criterio cuando se cumplen unas condiciones. Los **centros de costo** reparten las facturas por sede, área, proyecto o vehículo, con el mismo código que tienen en tu programa contable.

## Diferencia entre regla fija y aprendizaje
- [P] El **aprendizaje** sale de tus correcciones y se afianza con el uso, sobre todo por proveedor.
- [P] La **regla fija** se define con condiciones exactas (proveedor, texto del ítem, monto, centro de costo…) y se aplica siempre que se cumplan, sin interpretación.
- [P] Usa una regla fija cuando hay un texto claro o un caso puntual; con muchos productos distintos, corrige por grupo.
- [P] Las reglas son **por empresa**: no se comparten entre empresas.

## Cómo se crea una regla fija
**Operaciones › Causaciones › Pre-causadas › ojo (ver causación)**
1. [P] Abre la factura y cambia la cuenta que quieres fijar.
2. [P] Pulsa **Guardar y Aprobar** y, en **¿Dónde aplicar este cambio?**, elige **Crear una regla fija**.
3. [P] Marca las condiciones que deben cumplirse. El proveedor viene marcado: quítalo si la regla debe valer para cualquier proveedor.
4. [P] La plataforma prueba la regla contra esa misma factura: si no reproduce tu corrección, no deja crearla.
5. [P] Pulsa **Crear regla y aprobar**. La regla queda activa para las facturas que lleguen.

## Condiciones de una regla fija
- [P] **El proveedor sea**: todo lo de un proveedor va a la misma cuenta.
- [P] **El ítem diga** o **El texto contenga**: solo ciertos productos o servicios. Las palabras se separan con Enter o coma.
- [P] **El subtotal supere**: un monto mínimo.
- [P] **El centro de costo sea**, **La factura tenga IVA**, **El régimen del proveedor sea** y otras según la factura.
- [P] Con varias reglas que aplican, gana la más específica: la que tiene más condiciones.
- [P] Un proveedor puede tener varias reglas, por ejemplo una por concepto (peaje y parqueadero).

## Dónde ver y editar las reglas
- [P] Están en **Administración › Configuración › Agente inteligente › Historial de reglas**.
- [P] Desde ahí ves el efecto de cada regla, la aplicas a facturas anteriores o la eliminas.
- [P] Prueba siempre una regla con facturas reales antes de dejarla y borra las de prueba.
- [P] Ponles nombres claros y edita la existente en vez de crear una nueva por cada caso.

## Cómo se activan y se crean los centros de costo
1. [P] Actívalos en **Administración › Configuración › Causación**, en el interruptor **Centros de costo**. No todas las empresas los usan.
2. [P] Entra a **Administración › Centros de costo**, pestaña **Centros de Costo**.
3. [P] Crea uno con **Nuevo Centro de Costo** (código, nombre y centro padre si es un subcentro) o usa **Importar**: desde Siigo conectado, con el modelo de centros de costo de Siigo, con terceros de World Office o pegando código y nombre.
4. [P] Revisa que el código quede igual que en tu programa contable (ceros, guiones, sufijos): si no coincide, el programa rechaza el comprobante.
5. [P] Asigna los centros a las facturas antes de exportar.

## Cómo se asigna el centro de costo a una factura
- [P] **A mano**: en la factura, el campo de centro de costo abre **Distribución de la factura**, con tres modos: **Un centro**, **Dividir** entre varios o **Por producto**.
- [P] **A varias**: selecciónalas en Causaciones y usa **Asignar centro de costo** en la barra de abajo.
- [P] **Por reglas de clasificación**: se asignan solas al llegar (siguiente sección).
- [P] Para ver solo las que no tienen centro, usa el filtro **Centro de costos** o la agrupación por centro de costos.
- [P] Antes de exportar, revisa en **Operaciones › Verificar centros**.

## Reglas de clasificación de centros de costo
**Administración › Centros de costo › Reglas de Clasificación › Nueva Regla**
- [P] La condición puede ser **Etiqueta de correo**, **Proveedor**, **Cuenta contable**, **Placa** o **Prefijo de venta**.
- [P] **Aplicar reglas a facturas** asigna de una vez las facturas ya cargadas que no tienen centro; las nuevas se clasifican al llegar.
- [P] **Por etiqueta del correo** (Gmail): la empresa etiqueta la factura en su correo (una etiqueta por sede o negocio) y núvara la asigna. Si falta la etiqueta, puedes **Solicitar etiquetas** desde la barra de selección.
- [P] **Por placa**: la plataforma detecta la placa en las facturas que la traen; también se pueden generar reglas por placa.
- [P] **Importar reglas** permite cargarlas desde Excel.

## Centros de costo y el programa contable
- [P] **Siigo** exige el centro de costo al enviar si la empresa lo usa, y debe coincidir en nombre y código.
- [P] Un centro nuevo creado en Siigo se trae con **Acciones › Sincronizar centro de costo** en Causaciones, o importándolo desde la API.
- [P] **World Office** no obliga centro de costo en compras; allí la dimensión es la bodega, que normalmente asignas tú.

## Para el equipo
- [C] El caso típico de venta: la firma ya no lleva un Excel para relacionar cada factura con su unidad de negocio; la etiqueta de faltantes deja visible lo pendiente.
- [I] `conocimiento/` dice que repartir una factura entre varios centros está "en desarrollo"; el código ya tiene la hoja **Distribución de la factura** (Un centro, Dividir, Por producto). Falta confirmar si está activa para todos.
- [I] Rutas que cambiaron frente a `conocimiento/`: la activación pasó de "Configuración › Operación" a la pestaña Causación de la configuración nueva; las reglas de causación pasaron de "Configuración › Reglas de causación" a Agente inteligente › Historial de reglas (la ruta vieja sigue con `?settings=old`).
- [I] Clasificación de centros: en el código las reglas con varias condiciones corren primero y luego se ordena por **prioridad ascendente** (número menor primero), y a igual prioridad la de más condiciones (`classify-invoice.use-case.ts`). `conocimiento/` dice que el número mayor se aplica primero: gana el código. Las reglas de causación también tienen prioridad numérica.
- [I] `conocimiento/` menciona clasificación "por texto" y "por inteligencia artificial en lenguaje natural"; en el panel solo hay las cinco condiciones de arriba, más la acción de Causaciones › Acciones › Costos para sugerir la asignación con inteligencia artificial.
- [I] Bugs reportados en 2026, sin confirmar si siguen: el filtro por centro no incluye subcentros y el cambio de cuenta en lote ignora las reglas del centro.
