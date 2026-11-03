---
id: emitir-nota-credito-o-debito
tipo: procedimiento
titulo: Emitir una nota crédito o débito de venta
tema: factura-de-venta-y-notas
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Emitir, Nota crédito o Nota débito]
url: /{organización}/companies/{empresa}/electronic-billing/nota-credito/nueva
siguiente: consultar-y-reintentar-documentos
actualizado: 2026-11-03
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@5241b3430
---

# Emitir una nota crédito o débito de venta

## Antes de empezar
- [P] La factura de venta que vas a ajustar ya fue emitida y aceptada por la DIAN.

## Pasos
1. [P] Entra a **Facturación Electrónica › Emitir** y elige **Nota crédito** (para anular o disminuir) o **Nota débito** (para aumentar).
2. [P] **Factura origen:** busca la factura aceptada que ajustas. Si es anterior a núvara, escribe su número, fecha de emisión y CUFE.
3. [P] **Ajuste:** elige el **Motivo del ajuste**. Nota crédito: devolución parcial, anulación de la factura, rebaja o descuento, ajuste de precio, concepto a cuenta del IVA descontable u otros. Nota débito: intereses, gastos por cobrar, cambio del valor u otros.
4. [P] Escribe las **líneas a ajustar** con sus valores: no se copian de la factura. Para anular, usa el motivo de anulación por el valor total.
5. [P] **Numeración:** confirma el prefijo y el consecutivo y emite.

## Resultado
- [P] La nota viaja a la DIAN asociada a la factura de origen y la descargas en PDF y XML.

## Si algo falla
- [P] Si no encuentras la factura origen, revisa en **Documentos** que esté aceptada por la DIAN.
