---
id: exportar-world-office
tipo: procedimiento
titulo: Exportar a World Office
tema: exportacion
publico: P
estado: verificado en el código
ruta: [Operaciones, Exportar, World Office]
url: /{organización}/companies/{empresa}/exportaciones/exportar
siguiente: historial-de-exportaciones
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/16-exportar-a-world-office-y-siigo-escritorio.md
  - platform@5241b3430
---

# Exportar a World Office

## Antes de empezar
- [P] Elegiste **World Office** en **Administración › Configuración › Integraciones › Sistema contable externo**.
- [P] En la sección **World Office**, tarjeta **Archivo de exportación**, llenaste **Empresa en World Office** (idéntica a como está allá), **Tercero interno** y, si quieres, el prefijo.
- [P] Las facturas del mes están aprobadas o archivadas.

## Pasos
1. [P] Entra a **Operaciones › Exportar** y elige **World Office**.
2. [P] Elige **Compras** o **Ventas**, el mes y la numeración.
3. [P] Descarga primero el **Maestro de terceros**: World Office rechaza causaciones de terceros que no existan.
4. [P] Pulsa **Exportar World Office**. Sale una **Nota de contabilidad (FC)** en Excel.
5. [P] En World Office importa primero los terceros y luego el archivo de causaciones. Prueba primero con una sola factura.
6. [P] Si llevas inventario, usa el paso opcional **Ítems de inventario**: en World Office abre **Migración › Documentos › Movimientos de Inventarios**, elige la plantilla **Movimientos Inventarios Documentos Compras WO**, marca **Primera fila con títulos**, carga el archivo y pulsa **Validar Campos**.

## Resultado
- [P] Las causaciones quedan en World Office y en el historial de núvara como un lote exportado.

## Si algo falla
- [P] Si el asistente de World Office da error de empresa, revisa que el nombre sea idéntico al de allá.
- [P] El archivo de ítems solo toma compras ya exportadas y con número de comprobante; para activarlo se sube una vez el INVENTARIO.xlsx de World Office en **Ítems para escritorio**.
- [P] La conexión por token de World Office todavía no envía documentos: usa el archivo.
