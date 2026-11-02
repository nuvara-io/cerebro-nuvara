---
id: registrar-cobro
tipo: procedimiento
titulo: Registrar el cobro de una factura
tema: tesoreria
publico: P
estado: verificado en el código
ruta: [Tesorería, Cartera, Cuentas por cobrar, Cobrar seleccionadas]
url: /{organización}/companies/{empresa}/treasury/receivables
siguiente: conciliacion-bancaria
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/21-conciliacion-bancaria-y-pagos-a-proveedores.md
  - platform@6fdbceaba
---

# Registrar el cobro de una factura

## Antes de empezar
- [P] La factura de venta está en **Cuentas por cobrar** (una venta a crédito ya causada).

## Pasos
1. [P] Entra a **Tesorería › Cartera › Cuentas por cobrar**.
2. [P] Marca las facturas de un mismo comprador y pulsa **Cobrar seleccionadas**.
3. [P] En el **Comprobante de ingreso**, escribe lo que pagó por cada factura. Para abonos usa **Abonar saldo**, **Distribuir uniforme** o **Por antigüedad**.
4. [P] Pon la **fecha** y los **medios de pago**: transferencia, efectivo, cheque, anticipo u otro.
5. [P] Revisa que el asiento diga **Asiento cuadrado** y pulsa **Registrar ingreso**.

## Resultado
- [P] El saldo de la factura baja o queda en cero, y el comprobante de ingreso queda con su asiento.

## Si algo falla
- [P] Solo se cobran juntas facturas del mismo comprador: haz un comprobante por cada uno.
- [P] Las ventas de contado no pasan por aquí: se liquidan solas al emitirlas, con la caja o el banco que elegiste.
