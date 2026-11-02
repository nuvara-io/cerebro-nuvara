---
id: emitir-factura-de-venta
tipo: procedimiento
titulo: Emitir una factura de venta
tema: facturacion-electronica-y-radian
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Emitir, Factura de venta]
url: /{organización}/companies/{empresa}/electronic-billing/factura/nueva
siguiente: emitir-nota-credito-o-debito
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@6fdbceaba
---

# Emitir una factura de venta

## Antes de empezar
- [P] La empresa está **En producción** ante la DIAN, con su resolución de numeración.
- [P] Tu rol es administrador, operador o contador.
- [P] Tienes créditos en la billetera o un acuerdo de facturas vigente.

## Pasos
1. [P] Entra a **Facturación Electrónica › Emitir** y elige **Factura de venta**. Puedes llenarla de corrido (modo **Factura**) o por pasos (**Paso a paso**).
2. [P] **Datos del comprador** (primer paso): identificación, nombre o razón social, correo, teléfono, dirección, tipo de documento, tipo de organización, régimen y responsabilidad tributaria.
3. [P] **Líneas:** producto o servicio, descripción, cantidad, precio unitario e IVA. Si aplica, elige la ReteIVA (15 % o 100 %).
4. [P] **Pago:** elige **Contado** o **Crédito** (con fecha de vencimiento) y el medio de pago. Marca la opción de enviarle copia por email al comprador si quieres que le llegue.
5. [P] Agrega comentarios al pie si hace falta, revisa con **Vista previa** y pulsa **Emitir factura**.

## Resultado
- [P] La factura viaja a la DIAN y queda **Aceptado**. Desde el resultado descargas el PDF y el XML; desde **Documentos** puedes reenviarla por email.
- [P] Si usas Tesorería, la factura queda registrada como venta: de contado se asocia a la caja o cuenta bancaria, a crédito queda en cuentas por cobrar.

## Si algo falla
- [P] **Saldo insuficiente:** la plataforma no deja emitir hasta que recargues créditos.
- [P] **Rechazado** o **Falló envío:** revisa los datos del comprador y de las líneas en Documentos y vuelve a intentarlo.
- [P] Marca bien contado o crédito: de eso depende que el comprador deba hacer el acuse de recibo.
