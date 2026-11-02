---
id: generar-nomina
tipo: procedimiento
titulo: Generar y confirmar la nómina del periodo
tema: nomina
publico: P
estado: verificado en el código
ruta: [Nómina, Liquidación, Generar nómina]
url: /{organización}/companies/{empresa}/payroll/generate
siguiente: emitir-nomina-electronica
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/18-modulo-de-nomina.md
  - platform@6fdbceaba
---

# Generar y confirmar la nómina del periodo

## Antes de empezar
- [P] La configuración está lista y las novedades del periodo aprobadas.
- [P] Eres administrador u operador.

## Pasos
1. [P] Entra a **Nómina › Liquidación › Generar nómina**.
2. [P] Elige **año**, **mes** y **tipo de periodo** (primera quincena, segunda quincena o mensual) y pulsa **Calcular vista previa**.
3. [P] Revisa a cada empleado. La vista previa dice **Lista para confirmar** o **Requiere ajustes**.
4. [P] Pulsa **Confirmar y generar nómina**. Si la empresa pide visto bueno profesional o doble aprobación, se solicitan aquí.
5. [P] Si lo necesitas, descarga el **Excel de nómina** para revisión.

## Resultado
- [P] El periodo queda confirmado y listo para emitir a la DIAN, generar la PILA y causar.

## Si algo falla
- [P] Si confirmaste con un error, usa **Anular o corregir período**.
- [P] Si la vista previa se desactualizó, vuelve a calcularla antes de confirmar.
