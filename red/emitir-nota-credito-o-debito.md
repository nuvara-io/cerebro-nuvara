---
id: emitir-nota-credito-o-debito
tipo: procedimiento
titulo: Emitir una nota crédito o débito de venta
tema: facturacion-electronica-y-radian
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Emitir, Nota crédito o Nota débito]
url: /{organización}/companies/{empresa}/electronic-billing/nota-credito/nueva
siguiente: 
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@6fdbceaba
---

# Emitir una nota crédito o débito de venta

## Antes de empezar
- [P] La factura de venta que vas a ajustar ya fue emitida y aceptada por la DIAN.

## Pasos
1. [P] Entra a **Facturación Electrónica › Emitir** y elige **Nota crédito** (para anular o disminuir) o **Nota débito** (para aumentar).
2. [P] **Factura origen:** elige la factura que ajustas.
3. [P] **Ajuste:** elige el motivo según el catálogo de la DIAN y los valores.
4. [P] **Numeración:** confirma la numeración y emite.

## Resultado
- [P] La nota viaja a la DIAN asociada a la factura de origen y la descargas en PDF y XML.

## Si algo falla
- [P] Si no encuentras la factura origen, revisa en **Documentos** que esté aceptada por la DIAN.
