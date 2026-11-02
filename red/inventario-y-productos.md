---
id: inventario-y-productos
titulo: Inventario y asociación de productos
publico: P
actualizado: 2026-11-02
conexiones:
  - exportacion            # productos o bodegas en la exportación
  - exportar-world-office  # ítems de inventario para World Office
fuentes:
  - conocimiento/flujos/19-asociacion-de-productos-e-inventario.md
  - conocimiento/preguntas-frecuentes.md#productos-e-inventario
  - conocimiento/objeciones-y-dolores.md#inventario-y-productos
  - conocimiento/por-confirmar.md#inventario-y-asociación-de-productos
  - platform@5241b3430
---

# Inventario y asociación de productos

Para que las compras sumen unidades al inventario de tu programa contable, cada producto de la factura tiene que estar **asociado** a su producto equivalente. núvara sugiere la asociación y aprende; tú la revisas y la apruebas.

## ¿núvara maneja inventario?
- [P] Sí. Tiene un módulo de **Inventario** con resumen, bodegas, productos, cambios de precio, traslados, conteos y la pantalla **Aprobar productos**.
- [P] El inventario no es obligatorio: si tu empresa no lo lleva, causas igual.
- [P] Se enciende por empresa en **Administración › Configuración › Causación**, con el interruptor **Inventario**. Ahí mismo eliges el **Sistema de inventario**: permanente (compras a la clase 14) o periódico (al costo, clases 6 o 7).
- [P] Con Siigo, núvara importa el catálogo, mapea bodegas y productos y puede mover el stock. Con World Office, núvara lee el catálogo y valida; los ítems salen por archivo (ver `exportar-world-office`).

## Cómo se asocian los productos
**Inventario › Aprobar productos**
1. [P] Abre la vista **Por factura** para ver los productos que llegaron en cada compra, o la **Mesa de asociación** para trabajar en dos columnas con buscador.
2. [P] En la mesa, marca a la izquierda los pendientes, elige a la derecha el producto del catálogo y pulsa **Asociar**. Puedes asociar varias líneas a un mismo producto de una vez.
3. [P] Si el producto no existe, usa **Crear nuevo producto**; con Siigo puedes marcar **Crear también en Siigo**.
4. [P] Si una línea no es inventario (servicio, arriendo, flete), pulsa **No es inventario**: se descarta sin tocar el stock y queda en **Rechazados**, de donde la puedes recuperar.
5. [P] La asociación se hace **una sola vez por producto**: las facturas siguientes ya la reconocen.

## Qué conviene asociar
- [P] Solo lo que es **inventario**: mercancía para vender o transformar. Arriendos, nómina, servicios y servicios en la nube no se asocian.
- [P] Los productos con el mismo nombre en las dos partes se asocian solos; los de nombre distinto se asocian a mano.
- [P] Cuando un proveedor trae un producto nuevo, aparece como pendiente en Aprobar productos.
- [P] Usa el Excel del catálogo de tu programa contable como apoyo para encontrar equivalencias.

## Mover el stock en Siigo
**Inventario › Siigo**
- [P] Ahí mapeas bodegas y productos con Siigo y reconcilias existencias.
- [P] La tarjeta **Stock en Siigo** decide si las compras enviadas mueven el inventario de los productos mapeados. Apagada, los documentos llegan a Siigo pero el stock no cambia.
- [P] Para que una compra mueva stock, **todos** sus productos deben estar asociados.

## Antes de empezar a operar con inventario
- [P] Elimina de núvara las facturas que ya subiste por otra vía. Si vuelves a causarlas, el inventario se afecta **dos veces**.
- [P] Prueba primero con una sola factura real antes de enviar el lote.
- [P] La configuración del inventario inicial es lo más trabajoso; después las facturas se envían una a una sin problema.

## Precios y análisis por producto
- [P] **Inventario › Cambios de precio** compara el precio de compra de la última factura contra la anterior, por producto y proveedor.
- [P] **Inteligencia de compras** muestra cantidad, gasto y precio promedio por producto y por las categorías que definas, y sale a Excel.

## Errores comunes
- [P] **Las facturas se enviaron pero el stock no cambió**: revisa que **Stock en Siigo** esté encendido y que todos los productos estén asociados.
- [P] **Inventario duplicado**: causaste facturas que ya estaban en tu programa contable.
- [P] **El proveedor cambia el nombre del producto**: núvara vuelve a pedir la asociación de esa línea.
- [P] **Inventario en negativo o inflado en Siigo**: suele ser el costeo mensual que no se corrió en Siigo.

## Para el equipo
- [C] No prometas que núvara escribe el inventario en World Office por API: hoy solo lee el catálogo y valida.
- [C] Asignar bodega y prefijo en bloque para World Office se prometió en agosto de 2026, sin fecha.
- [I] El módulo depende de `companies.use_inventory` (interruptor **Inventario**, "Activa el módulo de gestión de inventario en el menú"). Sin él, el grupo Inventario no aparece en el menú.
- [I] La pantalla de crear producto ofrece **Crear también en World Office** ("queda en cola"), pero la cuenta de World Office está fija en `VALIDATION_ONLY` con `canWrite=false`; escribir devuelve `WORLD_OFFICE_CAPABILITY_DENIED`. Coherente con `exportacion`.
- [I] `flujos/19` decía que asociar varios productos en bloque estaba en desarrollo; en el código la Mesa de asociación ya asocia varias líneas seleccionadas a un producto. Gana el código.
- [I] La tarjeta **Stock en Siigo** muestra encendido cuando no hay dato guardado (`enabled ?? true`); el valor por defecto real en el servidor no se verificó.
- [I] La página Aprobar productos habla de "staging", trata al usuario de forma formal y usa la sigla de inteligencia artificial sola; no copiar ese texto.
