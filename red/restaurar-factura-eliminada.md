---
id: restaurar-factura-eliminada
tipo: procedimiento
titulo: Restaurar una factura eliminada
tema: papelera-y-limpieza
publico: P
estado: verificado en el código
ruta: [Administración, Configuración, Bloqueos, Papelera, Restaurar]
url: /{organización}/companies/{empresa}/settings/papelera
siguiente: causar-facturas
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/17-papelera-bloqueo-y-limpieza-de-facturas.md
  - platform@5241b3430
---

# Restaurar una factura eliminada

## Antes de empezar
- [P] La factura la eliminaste desde Causaciones o desde el Archivo: está en la **Papelera**, no se borró del todo.
- [P] Si la eliminaste con **Eliminar definitivamente**, ya no está en la papelera y no se puede restaurar: la próxima sincronización la puede traer de nuevo como nueva.
- [P] Revisa el proveedor antes de restaurar, para no traer de vuelta facturas que no son de tu empresa.

## Pasos
1. [P] Entra a **Administración › Configuración › Bloqueos › Papelera**. También llegas desde **Causaciones › Acciones › Facturas excluidas**, que aparece cuando hay facturas en la papelera.
2. [P] Filtra por **Mes** o escribe el número o el proveedor en **Buscar** y pulsa la lupa.
3. [P] Mira la columna **Estado**: es el estado que tenía la factura cuando la eliminaste.
4. [P] Pulsa **Restaurar** en la fila de la factura.
5. [P] Para varias, márcalas con la casilla (o la casilla de la cabecera para toda la página) y pulsa **Restaurar N**.

## Resultado
- [P] Si no estaba exportada, vuelve a **Pendientes** y la sincronización deja de saltarla. Hay que causarla de nuevo.
- [P] Si ya estaba exportada, vuelve al **Archivo** tal como estaba y no se exporta otra vez.
- [P] En un lote, el aviso dice cuántas volvieron al Archivo y cuántas a Pendientes.

## Si algo falla
- [P] «Se restauraron N de M»: algunas quedaron bloqueadas. Pasa, por ejemplo, cuando ya existe en núvara otra factura viva con el mismo CUFE; revisa esa antes de restaurar.
- [P] «No hay facturas excluidas»: la papelera está vacía. Si la factura no aparece, puede que la hayas eliminado definitivamente o que esté en otra empresa.
- [P] Al cambiar de mes, de página o de búsqueda se limpia la selección: vuelve a marcar las facturas antes de restaurar.
- [P] Si la ves como faltante en **Comparar con DIAN**, también puedes recuperarla ahí con **Restablecer factura**.
