---
id: generar-planilla-pila
tipo: procedimiento
titulo: Generar la planilla PILA
tema: nomina
publico: P
estado: verificado en el código
ruta: [Nómina, Obligaciones, Planillas PILA, Generar planilla PILA]
url: /{organización}/companies/{empresa}/payroll/pila-planillas
siguiente: causar-nomina
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/18-modulo-de-nomina.md
  - platform@6fdbceaba
---

# Generar la planilla PILA

## Antes de empezar
- [P] Todas las nóminas del mes están confirmadas.

## Pasos
1. [P] Entra a **Nómina › Obligaciones › Planillas PILA** y pulsa **Generar planilla PILA**.
2. [P] Elige el mes y revisa la planilla (formato AT2-v09).
3. [P] Pulsa **Descargar TXT** y súbelo al operador de PILA.
4. [P] Registra el avance con **Radicar planilla** y, cuando pagues, **Marcar como pagada**.

## Resultado
- [P] La planilla queda en estado Pagada, con el soporte de los aportes del mes.

## Si algo falla
- [P] Si no deja generar, falta confirmar alguna quincena del mes.
- [P] Si queda **Con errores**, corrige los datos de seguridad social del empleado y vuelve a generarla.
