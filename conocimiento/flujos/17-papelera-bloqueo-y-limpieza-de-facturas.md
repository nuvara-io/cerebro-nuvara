# Papelera, bloqueo de facturas no deseadas y limpieza de cuentas

## Objetivo
Evitar que facturas que ya eliminaste vuelvan a aparecer, no gastar créditos en documentos ajenos y limpiar cuentas contables mal asignadas.

## Papelera (facturas eliminadas)
1. Cuando eliminas una factura en **Pendientes**, va a la **papelera** (la sección de eliminadas). Queda allí con trazabilidad y no se restaura sola en la siguiente sincronización. Antes de la papelera, las eliminadas reaparecían cada día.
2. Puedes **recuperarla** si la necesitas ("restablecer factura"). Por ejemplo, una eliminada puede aparecer luego en la comparación con la DIAN como "eliminada" o "no encontrada".
3. Sirve también para dar tranquilidad al empresario que teme que el contador elimine facturas sin que él lo sepa: todo queda registrado.
4. Las facturas que no se van a contabilizar (documentos soporte, cuentas de cobro, gastos no sustentados hechos a nombre de la empresa por error) se eliminan para dejar limpia la bandeja.
5. Una nota o factura que ya salió en archivos se puede ocultar con la opción **ocultar** de la lista. Al exportar una factura causada, desaparece del panel de aprobación; el historial queda por meses.
<!-- fuentes: h-f093ed31e568, h-f9bbb8990054, h-577942d4a1de, h-ea07c173c7f7, h-088d516b4772 -->

## Limpieza masiva
1. Antes de causar un mes, filtra por el mes anterior y elimina las facturas que ya causaste fuera de la plataforma; si no, alguien las causa de nuevo y consume créditos.
2. En **Causaciones › Facturas pendientes**, sube "filas por página" de 50 a 200, quita cualquier filtro previo, selecciona todo con la casilla de la cabecera y pulsa **Eliminar**. Si hay más de 200, repite por tandas.
3. Para limpiar por proveedor: filtra por uno o varios proveedores, deja 200 por página, selecciona todo y elimina; repite hasta que no queden. Después quita el filtro para ver el resto.
4. Para borrar causaciones ya hechas por fuera, entra a la empresa › Causaciones › Facturas pendientes › pestaña **Precausada** › "Todo", y aplica el mismo procedimiento.
5. Para limpiar **aprobadas**: "por página" en 200, casilla de fecha para seleccionar todas y **archivar seleccionadas**. El archivo organiza las facturas por mes: filtra por mes para ver qué falta.
6. Tras limpiar, la plataforma muestra el conteo del mes.
7. Las facturas inexistentes o ya procesadas generan errores de "factura no encontrada" al exportar y ruido en la lista; se acordó limpiar con regularidad.
<!-- fuentes: h-f9bbb8990054, h-fc2e220f7888, h-8072227e99ae, h-78a6d7ffada0, h-088d516b4772 -->

## Bloqueo de facturas no deseadas
1. Si llegan facturas que no son de la empresa (compras personales, ventas que no necesitas), el asesor habilita un **bloqueo** para que no se descarguen.
2. Verifica después que ya no se muestren en el listado.
3. Se pidió ampliar el bloqueo para ventas que llegan por correo y gastan créditos sin necesidad (ver `por-confirmar.md`).

## Facturas fallidas
- Las que no se descargan aparecen como **fallidas**. La sospecha es que son eventos RADIAN o documentos en cero que no aplican; hay que revisarlas por CUFE en la DIAN.
- Hoy la plataforma no permite pedir una factura fallida; en desarrollo según el equipo, 2026: poder descargarla buscándola por CUFE.
- También llegaron facturas en cero y de tipos raros ("aprueba con notificación", "no aplica"); queda por revisar si ocurre al descargar compras y ventas juntas. Se discute cambiar el nombre "fallida" para no preocupar al usuario.
<!-- fuentes: h-8b268b156ae6 -->

## Fusionar y cambiar cuentas en lote
1. Si el software contable generó una cuenta de inventario que no existe en tu plan, usa **fusionar cuentas** en el plan de cuentas (por ejemplo, unir la cuenta sobrante con la correcta).
2. Para reemplazar la cuenta en muchas facturas a la vez, usa **cambiar cuenta en lote** sobre el grupo filtrado (flujo 06).
3. Casos con mercancía exenta, gravada y excluida requieren manejo manual.

## Filtros útiles
- Filtrar por día, por proveedor, por **agrupación idéntica** (separa facturas con y sin retención) y por registros **sin centro de costo**.
- Asignar un centro de costo a todas las facturas filtradas desde **Acciones** en la pestaña **Precausadas**.
- Mostrar productos de cada factura para verificar placas o ítems.
<!-- fuentes: h-f9bbb8990054 -->

## Casos especiales
- **Muchas facturas repetitivas de un solo tipo** (por ejemplo peajes electrónicos de una empresa de carga): núvara trabaja **una causación por factura** y no permite agrupar varias en un comprobante. Si no quieres causarlas una por una, elimínalas de pendientes con la limpieza masiva y regístralas en un comprobante manual en tu software contable.
- Los datos de prueba en el software contable se eliminan al terminar una entrega; cuida que no afecten el cierre contable del mes.
<!-- fuentes: h-8072227e99ae, h-b139a4b8f2fe -->

## Errores comunes
- Restaurar sin querer facturas que eran de otra empresa.
- Eliminar una factura ya causada y luego verla como "no encontrada" en la comparación con la DIAN.
- Eliminar en bloque con un filtro previo activo: se seleccionan o eliminan otros registros. Quita el filtro y vuelve a seleccionar con la casilla de la cabecera.
- Cambiar cuentas en lote sin revisar antes un grupo de muestra.
- Eliminar todo y sincronizar el correo esperando que las facturas vuelvan: la sincronización no las trae de nuevo.
<!-- fuentes: h-f9bbb8990054, h-088d516b4772 -->

## Tips del asesor
- **Elimina antes de precausar**: en pendientes todavía no se cobra nada, pero cada factura precausada consume créditos aunque después no se envíe al software contable.
- Las cuentas pueden cambiarse en cualquier etapa **antes de enviar** al software contable; después, directamente allí.
- Limpia con regularidad para mantener la lista libre de ruido.
<!-- fuentes: h-8072227e99ae, h-f9bbb8990054, h-088d516b4772 -->
