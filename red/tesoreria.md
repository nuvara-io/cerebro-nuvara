---
id: tesoreria
titulo: Tesorería
publico: P
actualizado: 2026-11-02
conexiones:
  - facturacion-electronica-y-radian   # las ventas emitidas llegan a cartera
  - nomina                             # el pago de la nómina se hace aquí
  - precios
fuentes:
  - conocimiento/flujos/21-conciliacion-bancaria-y-pagos-a-proveedores.md
  - platform@6fdbceaba
---

# Tesorería

Bancos, cobros, pagos a proveedores, pago de nómina, conciliación bancaria y cajas, con su asiento contable.

## Qué hace
- [P] **Cuentas bancarias** con saldo inicial, movimientos y transferencias, vinculadas a su cuenta del PUC.
- [P] **Cuentas por cobrar**: cobros con comprobante de ingreso, abonos parciales, anticipos de compradores e informes de cartera por antigüedad.
- [P] **Cuentas por pagar**: pagos a proveedores con comprobante de egreso, control de retención al pagar, pagos programados y aprobaciones.
- [P] **Pago de nómina**: pago individual o por lote bancario, y desprendibles por correo.
- [P] **Conciliación bancaria** con extractos en PDF de Bancolombia, Davivienda o Nu, o en CSV.
- [P] **Cajas** (módulo Caja): cajas operativas y menores, arqueos, fondeos y reposiciones.
- [P] Cada movimiento deja su comprobante contable, listo para exportar.

## Cuánto cuesta
- [P] Tesorería y Caja son módulos aparte de la causación: se cobran **según el acuerdo** que pactes con núvara, así que **se cotizan** con el equipo.
- [P] Para cotizarlos, pídelos en **Cuenta › Módulos › Solicitar habilitación**.

## Cómo se activa
- [P] Se pide en **Cuenta › Módulos › Tesorería › Solicitar habilitación**, que abre el chat con el equipo. La activa el equipo de núvara.
- [P] **Caja** es un módulo aparte, con su propia tarjeta en Cuenta › Módulos.

## Dónde está en la plataforma
- [P] Menú **Tesorería**: Bancos y cajas, Cartera (cuentas por cobrar y por pagar, pago de nómina, lotes y anticipos), Soportes (comprobantes y aprobaciones) e Informes.
- [P] Con Tesorería activa, una factura de venta de contado pide la caja o el banco donde entró el dinero, y una a crédito queda en cuentas por cobrar.

## Para el equipo
- [C] Todavía no se pueden crear ni exportar lotes de pago a proveedores desde la pantalla; los extractos de BBVA, Banco de Bogotá y Daviplata no se leen, y Davivienda falta validarlo con un extracto real.
- [I] La plataforma llama «Anticipos de clientes» al menú de anticipos de compradores; por marca, en el chat se dice comprador.
- [I] La exigencia de diferencia cero al cerrar la conciliación está apagada por defecto.
