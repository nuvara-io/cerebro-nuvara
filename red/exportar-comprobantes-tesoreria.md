---
id: exportar-comprobantes-tesoreria
tipo: procedimiento
titulo: Exportar egresos e ingresos
tema: exportacion
publico: P
estado: verificado en el código
ruta: [Operaciones, Exportar, Documento, Egresos o Ingresos]
url: /{organización}/companies/{empresa}/exportaciones/exportar
siguiente: historial-de-exportaciones
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/21-conciliacion-bancaria-y-pagos-a-proveedores.md
  - platform@5241b3430
---

# Exportar egresos e ingresos

## Antes de empezar
- [P] Tienes **Tesorería** activa. Sin ella no aparecen Egresos ni Ingresos.
- [P] El formato de estos comprobantes ya está listo para **Siigo** y **Contai**. Si usas otro programa, lo generamos: escríbele al equipo.
- [P] Los comprobantes están contabilizados: los borradores no salen.

## Pasos
1. [P] Entra a **Operaciones › Exportar** y elige tu programa.
2. [P] En **Documento** elige **Egresos** o **Ingresos**.
3. [P] En **Mostrar** deja **Solo pendientes**, o **Incluir exportados** si quieres repetir alguno.
4. [P] Revisa la vista previa y pulsa **Exportar**.

## Resultado
- [P] Se descarga el Excel con los comprobantes de egreso o de ingreso, listo para importar.

## Si algo falla
- [P] «Hay comprobantes en borrador»: pulsa **Ir a contabilizar** y vuelve.
- [P] Con otro programa aparece «aún no se pueden exportar»: escríbele al equipo y generamos su formato.
- [P] Un lote admite hasta 500 comprobantes.
