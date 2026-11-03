---
id: asociar-productos
tipo: procedimiento
titulo: Asociar productos del proveedor con el catálogo
tema: inventario-y-productos
publico: P
estado: verificado en el código
ruta: [Inventario, Aprobar productos, Mesa de asociación, Asociar]
url: /{organización}/companies/{empresa}/inventory/approval
siguiente: enviar-a-siigo
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/19-asociacion-de-productos-e-inventario.md
  - platform@5241b3430
---

# Asociar productos del proveedor con el catálogo

## Antes de empezar
- [P] El módulo de **Inventario** está encendido en la empresa (**Administración › Configuración › Causación**, interruptor **Inventario**). Sin él, el menú Inventario no aparece.
- [P] Ya tienes el catálogo de productos en núvara (con Siigo, importado desde tu programa contable).
- [P] Asocia solo lo que es inventario: mercancía para vender o transformar. Servicios, arriendos y fletes no se asocian.

## Pasos
1. [P] Entra a **Inventario › Aprobar productos** y abre la pestaña **Mesa de asociación**.
2. [P] A la izquierda, en **Pendientes**, busca por producto, código o proveedor, o filtra con **Coinciden**, **Posibles** o **Nuevos**.
3. [P] Marca uno o varios pendientes. Para asociarlos en bloque, márcalos todos aunque vengan con nombres distintos.
4. [P] A la derecha, en **Catálogo**, elige el producto destino. Arriba te salen los **sugeridos** con su porcentaje de parecido.
5. [P] Revisa la barra de abajo («N líneas → producto») y pulsa **Asociar**.
6. [P] Si un pendiente ya marca **Coincide**, pulsa **Asociar** en su fila. Para todos los que coinciden a la vez, usa **Asociar coincidencias (N)**, revisa la lista y confirma.

## Resultado
- [P] Las líneas quedan asociadas a ese producto y salen de Pendientes. Las facturas siguientes con ese producto ya lo reconocen.
- [P] Si el aviso dice que algunas líneas «quedaron esperando stock», ya están asociadas: el movimiento se asienta cuando entren compras del producto.

## Si algo falla
- [P] Si una línea no es inventario, márcala y pulsa **No es inventario**: se descarta sin tocar el stock y queda en **Rechazados**, de donde la puedes recuperar.
- [P] «N líneas no se pudieron asociar» en devoluciones: asocia primero la compra original y reintenta; si no existe, recházalas desde el mismo aviso.
- [P] «Sin candidatos compatibles»: probablemente es un producto nuevo. Créalo desde la vista **Por factura** con el botón **Crear** de esa línea.
- [P] Para que una compra mueva el stock, todos sus productos tienen que estar asociados.
