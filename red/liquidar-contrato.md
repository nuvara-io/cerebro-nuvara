---
id: liquidar-contrato
tipo: procedimiento
titulo: Liquidar el contrato de un empleado
tema: nomina
publico: P
estado: verificado en el código
ruta: [Nómina, Liquidación, Liquidaciones]
url: /{organización}/companies/{empresa}/payroll/settlements
siguiente: 
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/18-modulo-de-nomina.md
  - platform@6fdbceaba
---

# Liquidar el contrato de un empleado

## Antes de empezar
- [P] Sabes la fecha y la causa de terminación del contrato.

## Pasos
1. [P] Entra a **Nómina › Liquidación › Liquidaciones**.
2. [P] Pulsa **Simular liquidación**, elige el empleado, la fecha y la causa de terminación, y revisa el cálculo.
3. [P] Pulsa **Crear liquidación** (queda en borrador) y luego **Liquidar**.
4. [P] Pulsa **Causar liquidación** para el asiento contable.
5. [P] Registra el pago (**Registrar pago y egreso**, o **Registrar pago externo**) y exporta el PDF o la tirilla para el empleado.

## Resultado
- [P] El contrato queda liquidado, causado y pagado: cesantías, intereses, prima, vacaciones, salario pendiente e indemnización si aplica.

## Si algo falla
- [P] La indemnización solo aplica sin justa causa o con justa causa invocada por el trabajador: revisa la causa elegida.
- [P] Si te equivocaste, usa **Anular** y vuelve a simular.
