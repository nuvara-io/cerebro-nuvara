---
id: registrar-eventos-radian
tipo: procedimiento
titulo: Registrar eventos RADIAN de una factura recibida
tema: facturacion-electronica-y-radian
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Documentos, Eventos RADIAN, Nuevo evento]
url: /{organización}/companies/{empresa}/electronic-billing/radian
siguiente: 
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@6fdbceaba
---

# Registrar eventos RADIAN de una factura recibida

## Antes de empezar
- [P] La factura electrónica de tu empresa está en producción y activaste **RADIAN** (en la DIAN te registras en RADIAN con el mismo software y luego pulsas **Activar RADIAN** en Habilitación DIAN).
- [P] La compra es **a crédito**: las de contado no llevan eventos.

## Pasos
1. [P] Entra a **Facturación Electrónica › Documentos**, pestaña **Eventos RADIAN**, y pulsa **Nuevo evento**.
2. [P] Busca la factura recibida por su **CUFE**.
3. [P] Elige el evento: **Acuse de recibo**, **Recibo del bien y/o prestación del servicio**, **Aceptación expresa** o **Reclamo / Rechazo** (este pide el motivo del catálogo DIAN).
4. [P] Envíalo y confirma que quede registrado en la lista de eventos.

## Resultado
- [P] La DIAN registra el evento y el costo de esa compra queda soportado como deducible. En la DIAN aparece como documento en cero de tipo "aplicación de respuesta".

## Si algo falla
- [P] Para no hacerlo a mano, crea **Reglas RADIAN** por proveedor en **Ajustes › Configuración**: envían el acuse, el recibo y la aceptación solos. El reclamo siempre lo decide alguien del equipo contable.
- [P] Si la compra fue de contado, la plataforma no deja enviar el evento.
