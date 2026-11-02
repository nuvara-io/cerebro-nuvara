---
id: correcciones-y-aprendizaje
titulo: Correcciones y aprendizaje
publico: P
actualizado: 2026-11-02
conexiones:
  - reglas-y-centros-de-costo   # cuando quiere que la corrección quede fija
fuentes:
  - conocimiento/flujos/06-correcciones-y-aprendizaje.md
  - conocimiento/preguntas-frecuentes.md#causación-y-revisión
  - conocimiento/por-confirmar.md#causación-estados-y-aprendizaje
  - platform@5241b3430
---

# Correcciones y aprendizaje

Cuando una cuenta, un impuesto o una retención quedan mal, los corriges en la causación y núvara aprende de esa corrección para las facturas siguientes. Tú decides hasta dónde se aplica.

## Cómo aprende la plataforma
- [P] Aprende de tus correcciones y aprobaciones, **por empresa**: lo que enseñas en una empresa no pasa a otra.
- [P] Con el plan de cuentas y el balance de prueba por tercero cargados, sugiere mejor desde la primera factura. Sin balance, la primera vez hay que enseñarle a mano.
- [P] El primer mes es más manual; a los dos o tres meses la revisión se reduce mucho porque las facturas suelen repetirse.
- [P] Lo aprendido aplica a las facturas que se causen después. Las que ya están en Pre-causadas no cambian solas: hay que recausarlas.
- [P] Lo que corriges manda sobre la configuración general de la empresa.

## Cómo se corrige una cuenta
**Operaciones › Causaciones › Pre-causadas › ojo (ver causación)**
1. [P] Abre la factura con el ícono del ojo.
2. [P] Haz clic en la cuenta que está mal y busca la correcta por **código**. Verás las sugeridas, las aprendidas y el historial del proveedor.
3. [P] Si la cuenta no existe en tu plan, usa **Crear cuenta** ahí mismo.
4. [P] Si el cambio es por un producto, marca la opción de guardar esa cuenta como **cuenta del producto**: se aplicará a las facturas que traigan ese producto.
5. [P] Pulsa **Guardar y Aprobar** y elige dónde aplicar el cambio (siguiente sección).

## Dónde aplicar el cambio
Al guardar una corrección, la plataforma pregunta **¿Dónde aplicar este cambio?**:
- [P] **Que la plataforma aprenda**: la corrección se aprende para ese proveedor y se afianza con el uso. Es lo recomendado para lo que se repite.
- [P] **Solo esta factura**: el cambio queda en esa causación y no se repite. Úsalo cuando el mismo producto puede ir a cuentas distintas según el uso.
- [P] **Crear una regla fija**: defines condiciones exactas y se aplica siempre que se cumplan (ver reglas y centros de costo).
- [P] Con **Elegir alcance y facturas afectadas** escoges **Proveedor** o **Global**, ves qué otras facturas cambian y puedes aprobarlas de una vez.
- [P] **Global** sirve para cambios genéricos como el IVA, la cuenta por pagar o las retenciones. Un gasto sin producto se aprende igual para el proveedor, no para toda la empresa.

## Cambiar una cuenta en muchas facturas
- [P] **Desde un grupo**: en la vista agrupada, cambia la cuenta en el encabezado del grupo y se cambia en todas sus facturas.
- [P] **Cambiar cuentas en lote** (en la barra de la vista agrupada): eliges la cuenta a **Reemplazar** y la nueva, y se cambia en todas las facturas filtradas aunque estén en varios grupos.
- [P] Sirve, por ejemplo, cuando un proveedor trae mal la cuenta por pagar o cuando se usó IVA generado en vez de descontable.
- [P] En los dos casos eliges si la plataforma aprende el cambio o si vale solo para esas facturas.

## Recausar con y sin aprendizaje
- [P] Selecciona facturas en Pre-causadas o Aprobadas y pulsa **Recausar** en la barra de abajo. No cobra créditos.
- [P] **Recausar con aprendizaje**: vuelve a causar con lo aprendido, las reglas y la configuración actual.
- [P] **Recausar sin aprendizaje**: causa "limpio", ignorando lo aprendido. Sirve cuando una factura sigue saliendo mal por un aprendizaje equivocado.
- [P] Después de cambiar la configuración tributaria, el plan de cuentas o el balance, recausa lo que esté en Pre-causadas.
- [P] La cola de recausación puede tardar: espera, recarga y revisa los grupos nuevos.

## Revisar o borrar lo aprendido
- [P] En la causación, el **historial aprendido del proveedor** muestra lo que la plataforma aprendió de él, con opciones para editarlo o quitarlo.
- [P] La lista completa está en **Administración › Configuración › Avanzado › Aprendizaje** (Reglas Aprendidas).
- [P] Si un proveedor acumuló cuentas contradictorias, deja una sola o bórralas y recausa.
- [P] Una factura ya enviada al programa contable se corrige allá, o se anula y se vuelve a causar.

## Errores comunes al enseñarle
- [P] Usar **Global** para una excepción de un solo proveedor.
- [P] Corregir una cuenta y luego otra para lo mismo: la plataforma no sabe cuál elegir.
- [P] Corregir arriba y no recausar las demás Pre-causadas.
- [P] Causar miles de facturas sin revisar antes unas pocas de varios proveedores: los errores se multiplican.
- [P] Un impuesto asumido nunca se corrige contra un producto.

## Para el equipo
- [C] Para mostrar el valor: corrige una factura de ejemplo y causa otra del mismo proveedor para ver que ya sale bien.
- [I] La interfaz nombra esta opción con la palabra que la marca evita para núvara; en el chat se dice «que la plataforma aprenda».
- [I] En el código, el alcance Global de un gasto sin producto se guarda como del proveedor; IVA, cuenta por pagar y retenciones sí se aprenden para toda la empresa (`learning-scope-copy.ts`). `conocimiento/` describe también alcances "por descripción" y "por producto" como opciones del mismo diálogo: hoy el producto es una casilla aparte y la descripción va por regla fija.
- [I] `conocimiento/` ubica lo aprendido en "Administración › Configuración › Aprendizaje"; en la configuración nueva es la pestaña Avanzado › Aprendizaje, oculta para el rol de consulta. La pantalla **Correcciones** (`/corrections`) y la de aprendizaje del grupo Contabilidad (`/learning`) siguen en el código, pero ocultas del menú.
- [I] Pendiente según el equipo (2026): que aprenda cuando el usuario elimina una línea, sin confirmar.
