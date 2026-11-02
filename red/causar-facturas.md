---
id: causar-facturas
tipo: procedimiento
titulo: Causar una o varias facturas
tema: causar-y-revisar
publico: P
estado: según capacitación
ruta: [Operaciones, Causaciones, Pendientes]
url:
siguiente: revisar-causacion
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/04-importar-y-filtrar-facturas.md#pasos
  - conocimiento/flujos/05-causar-y-revisar.md#pasos
  - conocimiento/flujos/05-causar-y-revisar.md#errores-comunes
---

# Causar una o varias facturas

## Antes de empezar
- [P] Las facturas están en **Pendientes**. Llegan de la DIAN y del correo casi en tiempo real.
- [P] La empresa está configurada: IVA, plan de cuentas y balance cargados. Carga antes los anticipos y los centros de costo; si faltan, la causación queda errónea.
- [P] Tienes créditos disponibles.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, pestaña **Pendientes**, y elige el mes que vas a trabajar.
2. [P] Para una sola factura, pulsa **causar** a la derecha de su fila.
3. [P] Para varias, selecciónalas y pulsa **causar**. Puedes subir la página de 20 a 50 facturas o filtrar por proveedor o por descripción. La plataforma confirma cuántas vas a causar.
4. [P] Sigue el avance en la cola que se abre: cada factura toma cerca de 15 segundos y puedes seguir trabajando.

## Resultado
- [P] Las facturas pasan a **Precausadas** con la causación que propone la plataforma, lista para que la revises.
- [P] Los créditos se cobran al causar. Borrar una factura pendiente no cobra.

## Si algo falla
- [P] Si es la primera vez, causa una de prueba (sin IVA, luego con IVA, luego con retención) y ajusta la configuración antes de causar el resto.
- [P] Si una línea queda "pendiente", falta configurar la cuenta de IVA: corrígela o configúrala y vuelve a causar.
- [P] Si no ves las opciones de edición, baja el zoom del navegador al 90 %.
