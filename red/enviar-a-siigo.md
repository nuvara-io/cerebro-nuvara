---
id: enviar-a-siigo
tipo: procedimiento
titulo: Enviar el mes a Siigo
tema: exportacion
publico: P
estado: verificado en el código
ruta: [Operaciones, Archivo, Biblioteca, Por mes, Compras, Enviar a Siigo]
url: /{organización}/companies/{empresa}/exportaciones
siguiente: historial-de-exportaciones
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/10-exportar-a-siigo-y-otros.md
  - platform@5241b3430
---

# Enviar el mes a Siigo

## Antes de empezar
- [P] Siigo Nube está conectado y la guía de configuración está completa.
- [P] Las facturas del mes están **archivadas**: a Siigo solo van las archivadas.

## Pasos
1. [P] Entra a **Operaciones › Archivo**, pestaña **Biblioteca**, vista **Por mes**, y abre la pestaña **Compras** del mes.
2. [P] Prueba primero con una: selecciónala, pulsa **Enviar a Siigo (1)** y revísala en Siigo.
3. [P] Si quedó bien, pulsa **Enviar a Siigo** para todo el mes, o selecciona las que quieras y pulsa **Enviar a Siigo** con su número.
4. [P] Mira el punto junto a cada factura: **Verificado al 100%**, **Hay diferencias entre núvara y Siigo** o **Error en el push**.

## Resultado
- [P] Las compras llegan a Siigo como **compra** y las notas crédito y débito como **comprobante contable**. Las que ya estaban en Siigo no se duplican.

## Si algo falla
- [P] «Falta configurar Siigo»: hay cuentas sin vincular; termina la guía de configuración.
- [P] Las ventas no se envían por esta vía: expórtalas por archivo.
- [P] Si Siigo falla un momento, núvara reintenta sola hasta 5 veces. Los errores que no se resuelven solos salen en **Salud de la integración**, en Integraciones.
- [P] Para corregir uno que ya llegó, usa **Anular en Siigo y reenviar** en el detalle del lote, en **Archivo › Historial**.
