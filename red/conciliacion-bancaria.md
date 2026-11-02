---
id: conciliacion-bancaria
tipo: procedimiento
titulo: Conciliar una cuenta bancaria
tema: tesoreria
publico: P
estado: verificado en el código
ruta: [Tesorería, Bancos y cajas, Cuentas, Conciliar]
url: /{organización}/companies/{empresa}/treasury/{cuenta}/extractos
siguiente: 
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/21-conciliacion-bancaria-y-pagos-a-proveedores.md
  - platform@6fdbceaba
---

# Conciliar una cuenta bancaria

## Antes de empezar
- [P] Tienes el extracto del banco en PDF (Bancolombia, Davivienda o Nu) o en CSV.
- [P] Los cobros y pagos del periodo están registrados en Tesorería.

## Pasos
1. [P] Entra a **Tesorería › Cuentas** y pulsa **Conciliar** en la cuenta.
2. [P] Pulsa **Importar** y carga el extracto. Si el PDF tiene clave, escríbela: no se guarda.
3. [P] Pulsa **Conciliar Auto**: la plataforma cruza por tus reglas, por monto exacto, por monto y nombre del tercero, o por monto y fecha cercana. Confirma lo seguro y te sugiere el resto.
4. [P] Para lo que quede, usa **Conciliar Manual**: elige la línea del banco y luego su contrapartida. Las líneas sin factura (comisiones, intereses) se clasifican contra una cuenta del PUC o se ignoran.
5. [P] Registra las **partidas conciliatorias**: cheque girado no cobrado, consignación en tránsito, nota bancaria pendiente o error bancario.
6. [P] Pulsa **Cerrar período** y **Descargar informe** en PDF o Excel.

## Resultado
- [P] El periodo queda conciliado, con el informe y los asientos de las líneas clasificadas.

## Si algo falla
- [P] No deja cerrar con líneas sin conciliar: concilia, clasifica o ignora cada una.
- [P] Si un movimiento se repite cada mes, crea una regla en **Utilidades › Definición de Reglas** para que se concilie solo.
- [P] Para corregir un periodo cerrado, un administrador lo reabre indicando el motivo.
