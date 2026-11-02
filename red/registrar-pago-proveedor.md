---
id: registrar-pago-proveedor
tipo: procedimiento
titulo: Pagarle a un proveedor
tema: tesoreria
publico: P
estado: verificado en el código
ruta: [Tesorería, Cartera, Cuentas por pagar, Abonar seleccionadas]
url: /{organización}/companies/{empresa}/treasury/payables
siguiente: conciliacion-bancaria
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/21-conciliacion-bancaria-y-pagos-a-proveedores.md
  - platform@6fdbceaba
---

# Pagarle a un proveedor

## Antes de empezar
- [P] La compra está aprobada (o exportada) y su asiento quedó en una cuenta por pagar.

## Pasos
1. [P] Entra a **Tesorería › Cartera › Cuentas por pagar**, pestaña **Por pagar**.
2. [P] Marca las facturas de un mismo proveedor y pulsa **Abonar seleccionadas** (o, en una fila, **Abonar / comprobante de egreso**).
3. [P] En el **Comprobante de egreso**, revisa la **retención**: la plataforma muestra lo ya retenido y lo que falta, y avisa si hay posible doble retención.
4. [P] Pon la **fecha** y los **medios de pago** (con el GMF 4x1000 estimado) y aplica anticipos si los hay.
5. [P] Revisa el asiento y pulsa **Registrar egreso**.

## Resultado
- [P] La factura queda pagada o abonada y el comprobante de egreso con su asiento.

## Si algo falla
- [P] Si aparece **Este egreso requiere aprobación**, quien aprueba debe hacerlo en **Soportes › Aprobaciones** antes de registrarlo.
- [P] Si prefieres que el dueño apruebe antes de pagar, usa **Programar pago**: no mueve dinero hasta que se apruebe y pagues.
- [P] Un comprobante es de un solo proveedor.
