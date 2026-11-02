---
id: importar-facturas
titulo: Importar y filtrar facturas
publico: P
actualizado: 2026-11-02
conexiones:
  - papelera-y-limpieza   # facturas que sobran o que no son suyas
fuentes:
  - conocimiento/flujos/04-importar-y-filtrar-facturas.md
  - conocimiento/producto.md#cómo-entran-las-facturas-disponible
  - platform@5241b3430
---

# Importar y filtrar facturas

Traer a núvara las facturas electrónicas de compra y de venta, dejarlas en **Pendientes** y asegurarte de que no falta ninguna antes de causar.

## Por dónde entran las facturas
- [P] **Compras**: por el correo, por la DIAN y por carga manual. Se pueden usar las tres a la vez.
- [P] **Ventas**: por la DIAN y por carga manual; no llegan por correo.
- [P] La DIAN es la fuente de verdad; el correo trae el documento original, más completo. Si una factura llega por las dos vías, el **CUFE** evita que se duplique.
- [P] Con el correo y la DIAN conectados, las facturas del mes en curso entran solas y quedan en Pendientes.
- [P] Una cuenta de cobro o un documento sin XML no entra como factura: hace falta una factura electrónica.

## Cómo se traen las facturas
**Operaciones › Causaciones › Acciones**, grupo **Traer facturas**:
1. [P] **Sincronizar correo**: trae lo del correo. La primera vez eliges la fecha **Desde**; también puedes forzar una sincronización por fechas.
2. [P] **Extensión DIAN**: completa con lo que está en la DIAN, usando la extensión del navegador.
3. [P] **Importar XML/ZIP de la DIAN**: sube los XML o el ZIP que ya descargaste.
4. [P] **Importación manual**: sube una factura en PDF o en foto (JPG o PNG). núvara lee el texto y te la muestra para que la confirmes. Se usa sobre todo para documentos soporte y compras al exterior.
5. [P] Para un histórico, trae primero el correo y después la DIAN, mes a mes.

## Cómo filtrar y buscar facturas
- [P] Elige siempre el **Mes**. Sin filtro de mes, los totales suman varios meses y no cuadran.
- [P] Filtra también por **Tipo factura** (separa notas crédito y documentos soporte), **Forma pago**, proveedor y, si los usas, **Centro de costos**.
- [P] El buscador ("Busca una factura...") encuentra una factura por su número, por el nombre o el NIT del proveedor, o por su CUFE.
- [P] **Compras** y **Ventas** tienen pestañas separadas.
- [P] La tabla muestra 20, 50, 100 o 200 facturas por página.

## Cómo comprobar que no falta ninguna
- [P] Compara el total de documentos recibidos del mes en la DIAN con lo que muestra la plataforma.
- [P] Si hay diferencia, usa **Acciones › Comparar con DIAN**: subes el listado de la DIAN y ves lo que está allá y no en núvara.
- [P] El total incluye las notas crédito. La DIAN puede mostrar más porque cuenta los documentos soporte que tú emites.
- [P] Facturas en cero, acuses y eventos RADIAN no hacen falta: normalmente no pasan el filtro.
- [P] Antes de causar un mes completo, comprueba en la DIAN que todas las facturas llegaron.

## Qué limpiar antes de causar
- [P] Elimina lo que no debe causarse: documentos internos, gastos ajenos a la empresa y meses que ya contabilizaste en tu programa contable.
- [P] Hazlo en **Pendientes**, antes de causar: lo eliminado no cobra créditos.
- [P] Lo eliminado queda en **Acciones › Facturas excluidas**, por si necesitas recuperarlo.
- [P] Si un proveedor nunca debe entrar, exclúyelo en **Administración › Configuración › Bloqueos › Proveedores excluidos**.

## Si una factura no aparece
- [P] Amplía el rango: el filtro usa la fecha de emisión, no la de llegada.
- [P] Revisa que no tengas un filtro viejo de otro mes o de otro tipo de factura.
- [P] Si no llegó por el correo ni por la DIAN en ese rango, tráela con la DIAN o súbela con **Importación manual**.
- [P] Si la plataforma no la reconoce o tu programa contable no la ve causada, casi siempre falta el prefijo o viene pegado al número: edítala y sepáralo.
- [P] Si el listado dice que está bloqueado por la sincronización del correo, espera a que termine.

## Para el equipo
- [C] Después de eliminar facturas en masa, la sincronización del correo puede no volver a traerlas porque las reconoce como eliminadas; tráelas con la DIAN (sin confirmar).
- [I] En Acciones también aparecen, según la empresa, **Importar relación de cuentas** (con la opción activada en Configuración › Causación) y **Legalización de gastos**.
- [I] `conocimiento/` dice que el buscador acepta el folio y no el NIT; en el código (`drizzle-invoice-analytics.repository.ts`) busca por número, nombre y documento del tercero y CUFE. El diálogo aparte de búsqueda por CUFE ya no se usa en la pantalla nueva.
- [I] El bloqueo de ventas está en Configuración › Bloqueos › Ingesta de ventas (interruptor "Descargar las ventas de esta empresa").
