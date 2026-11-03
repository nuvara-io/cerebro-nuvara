---
id: eventos-radian
titulo: Eventos RADIAN
publico: P
actualizado: 2026-11-03
conexiones:
  - facturacion-electronica-y-radian
  - causar-y-revisar   # el costo deducible de las compras a crédito
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@5241b3430
---

# Eventos RADIAN

Qué son los eventos RADIAN, cuáles envía núvara, cómo se activan, cómo se automatizan con reglas y cómo se vigila que ninguna compra quede sin su evento.

## Qué son y para qué sirven
- [P] Son las respuestas que tu empresa le da a la DIAN sobre una factura que **recibió a crédito**. Registrarlas soporta el costo y el IVA descontable de esa compra; sin ellas, en una fiscalización pueden desconocerlo.
- [P] En la DIAN aparecen como documentos en cero de tipo "aplicación de respuesta". Las compras **de contado** no llevan eventos.

## Los eventos
- [P] **030 Acuse de recibo:** recibiste la factura. Lo envía núvara, a mano o con reglas.
- [P] **032 Recibo del bien o prestación del servicio:** recibiste lo que compraste. A mano o con reglas.
- [P] **033 Aceptación expresa:** aceptas la factura. A mano o con reglas, dentro de los 3 días hábiles siguientes al recibo.
- [P] **031 Reclamo:** rechazas la factura, con un motivo: documento con inconsistencias, mercancía no entregada, entregada parcialmente o servicio no prestado. **Siempre a mano**: nunca se automatiza.
- [P] **034 Aceptación tácita:** la registra la DIAN cuando pasa el plazo sin reclamo; núvara la trae, no la envía.
- [P] Al enviar el recibo o la aceptación, núvara envía antes los pasos que falten.

## Cómo se activa
- [P] La factura electrónica de la empresa debe estar **en producción**. Luego te registras en RADIAN en el portal de la DIAN con el mismo software y pulsas **Activar RADIAN** en la Habilitación DIAN. Solo el administrador.
- [P] Desde ese momento los eventos de tus compras son reales y cada uno se descuenta de tu saldo.

## Reglas RADIAN
- [P] **Cada empresa configura sus reglas.** núvara trae **reglas recomendadas** (acuse cuando llega la compra y recibo cuando apruebas la causación), pero no se aplican solas: tienes que habilitarlas o crear las tuyas.
- [P] Una regla puede ser general (todos los proveedores) o para un proveedor; la del proveedor gana. También puedes marcar a un proveedor como excepción.
- [P] Cada regla define el evento (030, 032 o 033), desde cuándo se cuenta y una espera en días hábiles (0 a 30, sin fines de semana ni festivos).
- [P] Un interruptor pausa toda la automatización sin borrar las reglas. Una regla que falla 3 veces se pausa sola.

## Vigilar el cumplimiento
- [P] La pestaña **Cumplimiento** de Eventos RADIAN muestra las compras **por vencer**, **sin acuse**, **sin recibo**, las reglas pausadas y las fallas recientes del envío automático.
- [P] Desde ahí envías el evento que falta o sacas una compra de la automatización.

## Eventos sobre tus ventas
- [P] En **Documentos**, en una venta a crédito aceptada, **Ver eventos RADIAN** muestra lo que hizo tu comprador: acuse, recibo, aceptación o reclamo.

## Para el equipo
- [I] El envío automático de las reglas, la traída de eventos de la DIAN y el resumen diario por correo dependen de activaciones de la plataforma. Si una empresa tiene reglas activas y no se envía nada, revisa esas activaciones.
- [I] Si la compra está registrada como contado, la plataforma bloquea el evento; si el CUFE no está en núvara o no tiene forma de pago, no lo bloquea.
