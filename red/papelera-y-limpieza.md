---
id: papelera-y-limpieza
titulo: Papelera, bloqueos y limpieza de facturas
publico: P
actualizado: 2026-11-02
conexiones:
  - importar-facturas   # facturas que sobran o que no son tuyas
fuentes:
  - conocimiento/flujos/17-papelera-bloqueo-y-limpieza-de-facturas.md
  - conocimiento/preguntas-frecuentes.md
  - platform@5241b3430
---

# Papelera, bloqueos y limpieza de facturas

Qué pasa cuando borras una factura, cómo recuperarla y cómo evitar que entren facturas que no son de tu empresa, para no gastar créditos en documentos ajenos.

## Qué pasa cuando borras una factura
- [P] Al eliminar una factura de la lista de Causaciones, va a la **papelera**. No se borra del todo.
- [P] Queda registrada y **no vuelve sola** en la siguiente sincronización con la DIAN o el correo.
- [P] Así el empresario tiene la tranquilidad de que nada se elimina sin dejar rastro.
- [P] Una factura ya exportada también se puede enviar a la papelera desde el Archivo. Lo que ya llegó a tu programa contable no se revierte.

## Cómo recuperar una factura borrada
**Administración › Configuración › Bloqueos › Papelera** (o **Operaciones › Causaciones › Acciones › Facturas excluidas**)
1. [P] Filtra por **Mes** o busca la factura.
2. [P] Pulsa **Restaurar** en la fila, o selecciona varias y restáuralas juntas.
3. [P] Si no estaba exportada, vuelve a **Pendientes** y hay que causarla de nuevo.
4. [P] Si ya estaba exportada, vuelve al Archivo tal como estaba y no se exporta otra vez.
- [P] Si la ves como faltante en la comparación con la DIAN, también puedes recuperarla ahí con **Restablecer factura**.

## Eliminar definitivamente
- [P] En la papelera, **Eliminar definitivamente** borra la factura con su causación, asientos, pagos aplicados y archivos. **No se puede deshacer.**
- [P] Después de borrarla así, la próxima sincronización puede descargarla de nuevo como nueva.
- [P] No revierte nada de lo que ya exportaste a tu programa contable.

## Cómo bloquear facturas que no son tuyas
**Administración › Configuración › Bloqueos**
- [P] En **Proveedores excluidos** eliges un proveedor y pulsas **Excluir**: sus próximas facturas de compra dejan de entrar por la DIAN y por el correo. Solo aplica a esa empresa.
- [P] Las facturas de ese proveedor que ya estaban no se tocan; si quieres sacarlas, elimínalas.
- [P] Si quitas la exclusión, las facturas que no entraron mientras estuvo excluido no vuelven solas: sincroniza otra vez ese periodo.
- [P] En **Ingesta de ventas** apagas **Descargar las ventas de esta empresa** si solo causas compras: las ventas dejan de entrar por correo y por la extensión de la DIAN.

## Limpieza masiva antes de causar
- [P] **Elimina antes de precausar**: en Pendientes no se cobra nada, pero cada factura precausada consume créditos.
- [P] Antes de empezar un mes, elimina las facturas que ya causaste por fuera de núvara; si no, alguien las vuelve a causar.
- [P] Sube las filas por página a 200, **quita cualquier filtro previo**, selecciona todo con la casilla de la cabecera y elimina. Repite por tandas.
- [P] Para limpiar por proveedor, filtra por él, selecciona todo y elimina; después quita el filtro.
- [P] Si llevas inventario, elimina las facturas que ya subiste por otra vía para no afectar el inventario dos veces.

## Facturas repetitivas y cuentas mal asignadas
- [P] núvara hace **una causación por factura**. Si tienes muchas facturas repetitivas (por ejemplo, peajes) y no quieres causarlas una por una, elimínalas de Pendientes y regístralas en un comprobante manual en tu programa contable.
- [P] Si una cuenta quedó mal en muchas facturas, usa el **cambio de cuenta en lote** sobre el grupo filtrado y revisa antes una muestra.
- [P] Las cuentas se cambian en núvara en cualquier etapa **antes de enviar** al programa contable; después, se corrigen allá.

## Errores comunes
- [P] **Eliminar con un filtro activo**: se borran otros registros. Quita el filtro y vuelve a seleccionar.
- [P] **Borrar una factura ya causada y luego verla faltante** en la comparación con la DIAN: restablécela.
- [P] **Restaurar facturas de otra empresa**: revisa el proveedor antes de restaurar.
- [P] **Esperar que la sincronización traiga de vuelta lo eliminado**: no lo hace; restáuralo desde la papelera.

## Para el equipo
- [C] La exclusión de proveedores ya la hace el usuario en Configuración; ya no hace falta pedirle al asesor que active un bloqueo.
- [C] Las facturas **fallidas** (no descargadas) suelen ser eventos RADIAN o documentos en cero; se revisan por CUFE en la DIAN. Pedirlas de nuevo por CUFE no está disponible.
- [I] `flujos/17` decía que el bloqueo lo habilita el asesor; en el código hay **Proveedores excluidos** e **Ingesta de ventas** en Configuración › Bloqueos, a cargo del usuario. Gana el código.
- [I] La papelera vive en `/settings/papelera` (pantalla `ExcludedInvoicesPage`); el atajo de Acciones solo aparece cuando hay facturas en la papelera. Eliminar definitivamente responde 403 si el usuario no es ADMIN.
- [I] `por-confirmar.md` dudaba si la eliminada reaparece al sincronizar: en el código, la eliminada a la papelera no vuelve; solo la eliminada definitivamente puede volver como nueva.
- [I] No se encontró en el código devolución de créditos al eliminar una factura precausada.
- [I] Los mensajes de la papelera escriben la marca con mayúscula y usan "sync"; en respuestas, di núvara y sincronización.
