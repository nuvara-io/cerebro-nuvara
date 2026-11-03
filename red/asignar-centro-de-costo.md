---
id: asignar-centro-de-costo
tipo: procedimiento
titulo: Asignar un centro de costo a una factura
tema: reglas-y-centros-de-costo
publico: P
estado: verificado en el código
ruta: [Operaciones, Causaciones, Centro de costos, Distribución de la factura, Guardar]
url: /{organización}/companies/{empresa}/invoices
siguiente: exportar-archivo
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/07-reglas-fijas-y-centros-de-costo.md
  - platform@5241b3430
---

# Asignar un centro de costo a una factura

## Antes de empezar
- [P] Los centros de costo están activados en **Administración › Configuración › Causación**, en **Centros de costo**. Sin eso el campo no aparece.
- [P] Los centros existen con el mismo código que en tu programa contable. Se crean en **Administración › Centros de costo › Centros de Costo** con **Nuevo Centro de Costo** o **Importar**, o desde la misma factura.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, abre la factura con el ojo y, en el encabezado, pulsa **Centro de costos** (o el nombre del centro ya asignado).
2. [P] En **Distribución de la factura** elige el modo: **Un centro**, **Dividir** o **Por producto**.
3. [P] **Un centro**: elige el centro de la lista. **Dividir**: pulsa **Agregar centro** por cada uno y escribe su monto, o usa **Partes iguales**; la suma debe dar la base de la factura. **Por producto**: elige un centro por línea, o marca varias y usa **Aplicar a los seleccionados**; las líneas sin centro usan el de la factura.
4. [P] Si el centro no existe, pulsa **Crear nuevo centro**, escribe **Código** (al menos 5 caracteres) y **Nombre**, y pulsa **Crear centro de costos**.
5. [P] Pulsa **Guardar**.
6. [P] Para varias facturas con el mismo centro: márcalas en Causaciones y usa **Asignar centro de costo** en la barra de abajo.

## Resultado
- [P] Aparece «Centro de costo asignado», «Distribución guardada» o «Distribución por producto guardada». Antes de exportar, revisa en **Operaciones › Verificar centros**.

## Si algo falla
- [P] **Por producto** está apagado cuando la factura no tiene productos registrados (por ejemplo, una histórica importada): usa **Dividir**.
- [P] «Para guardar, la suma debe ser igual a la base y cada fila debe tener centro y monto» o «Hay centros repetidos»: corrige las filas de **Dividir**.
- [P] Si el código no coincide con el de tu programa contable (ceros, guiones, sufijos), el programa rechaza el comprobante: corrígelo en el centro.
