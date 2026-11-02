---
id: aprobar-en-bloque
tipo: procedimiento
titulo: Aprobar facturas en bloque
tema: aprobacion-en-bloque
publico: P
estado: según capacitación
ruta: [Operaciones, Causaciones, Precausadas, Vista agrupada, Aprobar grupo]
url:
siguiente: archivar-aprobadas
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/08-aprobacion-en-bloque.md#pasos
  - conocimiento/flujos/08-aprobacion-en-bloque.md#errores-comunes
---

# Aprobar facturas en bloque

## Antes de empezar
- [P] Las facturas están en **Precausadas** y ya revisaste al menos una de cada grupo.
- [P] Las cuentas están bien. Si no, corrígelas primero y pulsa **recausar**.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, pestaña **Precausadas**, y usa la **vista agrupada**: junta las facturas con el mismo juego de cuentas.
2. [P] Expande un grupo con la flecha azul de la izquierda y revisa una o dos facturas con el ícono del ojo. Cierra el detalle.
3. [P] Si hay excepciones, corrígelas una por una o sácalas del grupo con el filtro de proveedores.
4. [P] Pulsa **Aprobar grupo**: aprueba todas las facturas del grupo de una vez. Sigue con el siguiente grupo hasta terminar.
5. [P] En **Aprobadas**, usa la otra vista para confirmar que ninguna factura fue a una cuenta por pagar distinta.

## Resultado
- [P] Las facturas pasan a **Aprobadas**, listas para archivar y exportar. Aprobar no envía nada al software contable.

## Si algo falla
- [P] No apruebes un grupo sin revisar al menos una muestra.
- [P] Si cambiaste cuentas, pulsa **recausar** antes de aprobar.
- [P] Si la selección solo aprueba una factura, corrige primero las pendientes y vuelve a intentarlo por grupo.
