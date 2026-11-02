---
id: aprobacion-en-bloque
titulo: Aprobación en bloque
publico: P
actualizado: 2026-11-02
conexiones:
  - aprobar-en-bloque   # neurona: los pasos para aprobar un grupo
fuentes:
  - conocimiento/flujos/08-aprobacion-en-bloque.md
  - conocimiento/flujos/05-causar-y-revisar.md#pasos
  - platform@5241b3430
---

# Aprobación en bloque

Aprobar muchas facturas revisadas a la vez, en vez de una por una. La plataforma junta las que tienen el mismo asiento; tú revisas una muestra y apruebas el grupo.

## Se pueden aprobar varias facturas a la vez
- [P] Sí. En **Operaciones › Causaciones › Pre-causadas** hay tres caminos: aprobar un grupo, aprobar las seleccionadas o aprobar por proveedor.
- [P] Aprobar no envía nada al programa contable: solo deja las facturas en **Aprobadas**, listas para archivar y exportar.
- [P] Conviene después de revisar una muestra de cada grupo, y sobre todo desde el segundo mes, cuando la plataforma ya aprendió tus cuentas.
- [P] Los proveedores con muchas facturas repetidas (peajes, combustible, servicios) son los que más ganan.

## Vista agrupada y sus agrupaciones
- [P] En **Vista**, el ícono de cuadrícula activa la **Vista agrupada**; el de filas vuelve a la **Vista plana**.
- [P] La agrupación por defecto, **Causación idéntica**, junta las facturas con el mismo juego de cuentas (gasto, IVA, retención y cuenta por pagar), sin importar fecha ni proveedor.
- [P] También puedes agrupar por **Retención**, por **IVA**, por **Sencillas** (sin IVA ni retención) y, si usas centros de costo, por **Centro de costos**.
- [P] Las facturas sin IVA ni retenciones suelen agruparse solas y se aprueban rápido.

## Formas de aprobar varias facturas
- [P] **Aprobar grupo**: en la vista agrupada, aprueba todas las facturas visibles del grupo de una vez.
- [P] **Aprobar seleccionadas**: marca las facturas en la tabla y pulsa **Aprobar** en la barra de abajo.
- [P] **Revisar por proveedor** (en **Acciones**): muestra el patrón de cada proveedor y aprueba de una vez las facturas que lo siguen; las que se desvían se revisan aparte.
- [P] Al corregir una factura con alcance a otras, también puedes aprobar de una vez las facturas a las que aplica ese aprendizaje.

## Antes de aprobar un grupo
- [P] Expande el grupo y abre una o dos facturas con el ícono del ojo para revisar la muestra.
- [P] Si algo está mal en todo el grupo, cambia la cuenta en el encabezado del grupo o usa **Cambiar cuentas en lote**.
- [P] Saca las excepciones con el filtro de proveedores del grupo: las que ocultas no entran en **Aprobar grupo**.
- [P] Si cambiaste la configuración o el plan de cuentas, **recausa** antes de aprobar.
- [P] No mezcles meses sin querer: filtra por **Mes**.

## Después de aprobar
- [P] En **Aprobadas**, la vista agrupada te deja confirmar de un vistazo que ninguna factura fue a una cuenta por pagar distinta.
- [P] Desde ahí archivas: **Archivar grupo**, **Archivar** las seleccionadas, o el botón **Archivar** junto al buscador, que archiva todas las aprobadas.
- [P] Una factura aprobada se puede seguir corrigiendo hasta que se archive.

## Para el equipo
- [C] Frase que funciona en una demostración en vivo: "si conoces estos proveedores, aquí apruebas 90 facturas de una vez".
- [I] `conocimiento/` menciona "Acciones › aprobar por lote" y un filtro "causación idéntica" aparte; en la pantalla actual Acciones no tiene "aprobar por lote" (el lote masivo es **Revisar por proveedor**) y "Causación idéntica" es la agrupación por defecto de la vista agrupada.
- [I] `Aprobar grupo` y `Archivar grupo` operan solo sobre las facturas visibles del grupo (`group-action-scope.ts`). Si el grupo tuvo ediciones, al aprobarlo pregunta si la plataforma aprende o si valen solo para esas facturas.
- [I] En desarrollo según el equipo (2026): filtro por producto para excluir facturas de la aprobación masiva; la vista agrupada ya trae un filtro por producto, sin confirmar si es lo mismo.
