# Asociación de productos e inventario

## Objetivo
Que las unidades de cada producto de una factura de compra se sumen (o se descuenten, en una venta) al inventario del software contable, asociando cada producto de la factura con su producto equivalente en ese software.

## Qué está disponible y qué está en desarrollo
| Tema | Estado (sesión de julio de 2026) |
|---|---|
| Pantalla **aprobar productos** (asociar, crear o rechazar) | Disponible |
| Asociación automática de productos con el mismo nombre | Disponible |
| Que la asociación se recuerde en las facturas siguientes | Disponible |
| "Mesa de asociación" de dos columnas con buscador | Disponible |
| Mover el stock en Siigo | Disponible si la opción está activada en la integración |
| Seleccionar varios productos de la factura y asociarlos en bloque a un solo producto | **En desarrollo**: el equipo prometió ajustarlo |
| Mandar otras referencias del mismo tipo a un producto ya asociado | Sin resolver; no queda claro cómo se hace hoy |

El sitio oficial indica que, en las integraciones con Siigo y World Office, núvara importa el catálogo, sugiere el mapeo de productos y aprende de las decisiones del usuario (ver `sitio-web.md`).

<!-- fuentes: h-72ec6e3363ae -->

## Requisitos
- Integración con el software contable activa (flujo 10).
- En Siigo, la opción de **mover stock** activada en la configuración de la integración. Cuando estaba desactivada, las facturas se enviaban pero el stock no cambiaba.
- Catálogo de productos del software contable. Puedes exportar el listado de productos y servicios a Excel para buscar equivalencias.

## Pasos
1. Las unidades solo se suman o descuentan cuando **cada producto de la factura está asociado** a un producto del software contable.
2. Abre la pantalla **aprobar productos**: lista los productos que llegan en las facturas. Para cada uno busca el equivalente en el software contable y elige: **asociar**, **crear como nuevo** o **rechazar**.
3. Los productos con el mismo nombre en la plataforma y en el software contable se asocian solos; los de nombre distinto se asocian a mano.
4. Puedes asociar desde la factura (producto por producto) o desde la **mesa de asociación**, con dos columnas: lo que está en el software contable y lo que viene en la factura, con buscador.
5. La asociación se hace **una sola vez por producto**. Las facturas siguientes lo reconocen y ya no preguntan.
6. Cuando llega un producto nuevo, aparece en aprobar productos. Filtra por **nuevos** y asócialos todos de una vez.
7. Puedes crear el producto desde la misma pantalla o primero en el software contable; elige el orden que te sirva.
8. Asocia solo los productos que son **inventario**. Arrendamientos, nómina, servicios y servicios en la nube no se asocian: no suman inventario ni sirven para proyectar utilidad.

<!-- fuentes: h-72ec6e3363ae -->

## Antes de empezar a operar con inventario
- Elimina de núvara las facturas que ya subiste por otra vía y deja solo las que faltan por enviar. Si vuelves a causar facturas que ya están en el software contable, el inventario se afecta **doble**. El asesor puede borrarlas del perfil.
- La configuración del inventario inicial es lo más trabajoso; una vez hecha, las facturas se envían una a una sin problema.

<!-- fuentes: h-72ec6e3363ae -->

## Errores comunes
- Facturas enviadas pero el stock no cambia: revisa que **mover stock** esté activado y que todos los productos de la factura estén asociados.
- Inventario duplicado por causar facturas ya subidas al software contable.
- Los proveedores cambian el nombre del producto de una factura a otra, y el nombre de la factura casi nunca coincide con el del software contable; asociar exige conocer la mercancía.
- El software contable maneja un solo producto consolidado, pero el proveedor factura por referencias distintas: hay que asociar muchas referencias a un mismo producto, y hoy se hace una por una.

## Tips del asesor
- Usa el Excel del catálogo del software contable como apoyo para encontrar equivalencias.
- Puedes crear el producto en cualquiera de los dos lados; lo importante es que quede asociado.

## Por confirmar
Fecha del ajuste para asociar varios productos en bloque; el equipo no la dio.

<!-- fuentes: h-72ec6e3363ae -->
