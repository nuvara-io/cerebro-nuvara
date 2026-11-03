---
id: registrar-eventos-radian
tipo: procedimiento
titulo: Registrar eventos RADIAN de una factura recibida
tema: eventos-radian
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Documentos, Eventos RADIAN, Nuevo evento]
url: /{organización}/companies/{empresa}/electronic-billing/radian
siguiente: revisar-cumplimiento-radian
actualizado: 2026-11-03
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@5241b3430
---

# Registrar eventos RADIAN de una factura recibida

## Antes de empezar
- [P] La factura electrónica de tu empresa está en producción y activaste **RADIAN** (en la DIAN te registras en RADIAN con el mismo software y luego pulsas **Activar RADIAN** en Habilitación DIAN).
- [P] La compra es **a crédito**: las de contado no llevan eventos.

## Pasos
1. [P] Entra a **Facturación Electrónica › Documentos › Eventos RADIAN**. Si la compra aparece en **Facturas pendientes de acción RADIAN**, pulsa **Acusar** y listo.
2. [P] Si no, pulsa **Nuevo evento** y pega el **CUFE** de la factura recibida (96 caracteres).
3. [P] Elige el evento: **Acuse de recibo**, **Recibo del bien y/o prestación del servicio**, **Aceptación expresa** o **Reclamo / Rechazo**. El reclamo pide la razón: documento con inconsistencias, mercancía no entregada, entregada parcialmente o servicio no prestado.
4. [P] Opcional: la persona que registra el evento. Si lo dejas vacío, va a nombre del representante legal.
5. [P] Envíalo y confirma que quede **Enviado** en la lista. Si eliges recibo o aceptación, núvara envía antes los pasos que falten.

## Resultado
- [P] La DIAN registra el evento y el costo de esa compra queda soportado como deducible. En la DIAN aparece como documento en cero de tipo "aplicación de respuesta".

## Si algo falla
- [P] Para no hacerlo a mano, habilita las **Reglas RADIAN** (ver Configurar las reglas RADIAN): envían el acuse, el recibo y la aceptación solos. El reclamo siempre lo decide alguien del equipo contable.
- [P] Si el evento queda en **Falló**, revisa el error en la lista y vuelve a enviarlo.
- [P] Si la compra fue de contado, la plataforma no deja enviar el evento.
