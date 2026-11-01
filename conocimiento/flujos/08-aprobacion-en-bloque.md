# Aprobación en bloque

## Objetivo
Aprobar muchas facturas revisadas a la vez, ahorrando horas de trabajo.

## Requisitos
- Facturas en **Precausadas** ya revisadas (al menos una muestra por grupo).
- Cuentas y bases correctas: aprueba en bloque solo cuando la plataforma ya las tiene en la cuenta correcta; si no, primero corrige (flujo 06).
<!-- fuentes: h-3610bb8fc4d6, h-1b5ddf9047dc -->

## Pasos
1. En **Causaciones › Precausadas**, usa la vista **agrupada**: la plataforma junta las facturas con el mismo juego de cuentas (proveedor, cuenta del gasto, cuenta por pagar, impuestos).
2. Expande un grupo (flecha azul de la izquierda) y revisa una o dos facturas con el ícono de ojo: "con una que veas ya sabes cómo están las otras". Cierra el detalle.
3. Si hay excepciones, corrígelas individualmente (flujo 06) o sácalas del grupo.
4. Pulsa **Aprobar grupo**: aprueba todas las facturas del grupo sin seleccionarlas una por una. Luego aparece otro grupo, hasta terminar. Si prefieres, selecciona solo las facturas cuyos productos están bien y usa **aprobar seleccionadas** o **Acciones → aprobar por lote**; las demás se corrigen después.
5. Puedes filtrar por proveedor para aprobar solo los que necesites, o excluir proveedores con el filtro de proveedores (debajo de las cuentas).
6. Las aprobadas pasan a **Aprobadas**. Allí, la "otra vista" agrupa por juego de cuentas y permite confirmar de un vistazo que ninguna factura fue a una cuenta por pagar distinta.
7. Verificado todo, pulsa **archivar** (junto al buscador de facturas) para archivar lo aprobado, o **Archivar por grupo**. También se archivan seleccionadas o por fecha. Quedan en **Archivo del mes**.
8. Después, usa **comparar con la DIAN** para verificar que el mes quedó completo, y exporta.
<!-- fuentes: h-c7dee3911650, h-f96fd89e31c6, h-78a6d7ffada0, h-1bf95f17e863, h-85f50952dea3, h-4158a5316af6, h-23bf40f47dd3, h-57509b5a0a19, h-f05e1fbaf759 -->

## Las tres vistas de aprobación
- **Una por una**: la factura a un lado y la causación al otro.
- **Revisar por proveedor** (causación rápida): lista proveedores, cantidad de facturas y un **patrón base** (cuenta de gasto, cuenta por pagar, impuestos). Si todas siguen el patrón se aprueban de una vez, aun cuando sean muchas. La plataforma señala las excepciones para revisarlas aparte.
- **Tabla agrupada**: junta las facturas con exactamente el mismo patrón (por ejemplo, medicamentos gravados al 19 % con IVA descontable) y valida que sumas y bases cuadren; si hay desajuste, muestra la diferencia. Permite aprobar decenas de golpe con la garantía del mismo patrón.
- Otras ayudas: el filtro de **causación idéntica** (separa facturas con y sin retención), y el buscador (atajo F2) para filtrar un proveedor y aprobar sus facturas juntas.
<!-- fuentes: h-57509b5a0a19, h-5cb9422bb0c9, h-8b268b156ae6, h-3610bb8fc4d6 -->

## Cambiar cuenta en lote antes de aprobar
Con los filtros (agrupar por, filtro de cuentas) busca la cuenta equivocada (por ejemplo, un IVA mal puesto) y aplica el cambio a todas las facturas a la vez; luego "limpiar" y "colapsar" para revisar. Un filtro por página (parte inferior) permite trabajar volúmenes grandes sin ir mes por mes.
<!-- fuentes: h-78a6d7ffada0, h-85f50952dea3 -->

## Errores comunes
- Aprobar un grupo sin revisar al menos una muestra.
- Cambiar cuentas y no pulsar **recausar** antes de aprobar.
- Mezclar facturas de meses distintos sin querer.
- Revisar una por una cada factura en precausadas por no conocer la vista agrupada: con ella se hace en minutos.
- Al inicio, mientras la plataforma aprende, algunas facturas pueden ir a una cuenta por pagar equivocada: mira la vista agrupada antes de enviar al software contable.
- Si el patrón base muestra la misma cuenta de proveedores nacionales como gasto y como cuenta por pagar, lo que está mal es la configuración de la empresa, no la causación.
- La selección a veces no tomaba todas las facturas y solo aprobaba una; el asesor corrigió primero las pendientes y probó luego todas en grupo.
<!-- fuentes: h-1bf95f17e863, h-8b268b156ae6, h-78a6d7ffada0 -->

## Tips del asesor
- "Si conoces estos proveedores, sabes que aquí puedes aprobar 90 facturas de una vez."
- Aprueba mientras corriges para no acumular; archiva lo ya revisado antes de empezar las demás.
- Si las cuentas de un grupo están bien, aprueba el grupo completo; las facturas puntuales con problemas se buscan después por valor y se ajustan.
- Al revisar un grupo, cierra el detalle y aprueba de una vez para que el orden de los grupos no cambie.
- Proveedores con muchas facturas repetitivas (peajes, combustible) son los que más ganan con la aprobación en bloque.
- Revisa cada tres días para mantener la contabilidad al día.
- El orden en que causas no altera el archivo final: al aprobar, la plataforma ordena por año y mes.
- Aprobar no envía nada al software contable: solo deja las facturas listas para subir.
- Si el usuario separa las cuentas por pagar por tipo de gasto (transporte, fletes y acarreos a su propia cuenta de proveedores), se configura en Configuración › Operaciones › Cuentas por pagar › "por gasto".
<!-- fuentes: h-8b268b156ae6, h-85f50952dea3, h-f9bbb8990054, h-c7dee3911650, h-3610bb8fc4d6, h-f05e1fbaf759, h-d35e1cc2634f -->

## Novedades y en desarrollo
- La aprobación masiva por proveedor ya existía en ventas y el equipo la iba a llevar a compras (abril de 2026); desde entonces "revisar por proveedor" se usa en compras.
- En desarrollo según el equipo, 2026: un filtro por producto para excluir de la aprobación masiva facturas con ciertos productos (los excluidos generan una regla para cambiarlos aparte). Estaba subido pero no disponible en todas las cuentas.
<!-- fuentes: h-3610bb8fc4d6, h-5cb9422bb0c9, h-78a6d7ffada0 -->
