---
id: app-movil
titulo: App móvil de núvara
publico: P
actualizado: 2026-11-04
conexiones:
  - dar-acceso-app-clientes   # el contador le da acceso a sus clientes
  - dar-acceso-app-equipo     # operadores de caja y jefes de área
  - manejar-caja              # las cajas que se trabajan desde el celular
  - registrar-pago-proveedor  # los pagos programados que se aprueban en la app
fuentes:
  - platform@feat/fe-radian-precio-por-evento (apps/mobile, apps/web)
  - app ejecutada en el simulador de iOS el 04/11/2026
---

# App móvil de núvara

La parte móvil de núvara, para iOS y Android: lleva la operación del día a día a quien no entra a la plataforma web. Cada persona entra con su propio acceso y solo ve lo que le corresponde.

## A quién le puedes dar acceso
- [P] **A tus clientes, si eres contador o firma contable:** ven cómo va su empresa, aprueban pagos y te envían comprobantes.
- [P] **A tu equipo:** operadores de caja y jefes de área, cada uno solo con lo suyo.
- [P] El acceso lo da la organización o el contador que administra la empresa. Nadie entra por su cuenta: quien no tiene acceso debe pedirlo.
- [P] Cómo se da: `dar-acceso-app-clientes` y `dar-acceso-app-equipo`.

## Qué hace cada perfil
- [P] **Dueño o administrador de la empresa:** ve ingresos y gastos, lo que le deben y lo que debe, Tesorería, Cajas y Reportes; aprueba pagos y envía comprobantes.
- [P] **Operador de caja:** solo ve las cajas que le asignaste. Registra gastos y devoluciones con la foto del soporte. No ve nada más de la empresa.
- [P] **Jefe de área:** reporta las novedades de nómina de su equipo, como horas extra, ausencias o incapacidades. El contador las revisa antes de la nómina.
- [P] **Facturar:** se habilita persona por persona y solo con los documentos que le permitas: factura de venta, notas y documento soporte.

## Lo que más ayuda
- [P] **Aprobar pagos:** el dueño aprueba, aprueba otro monto o rechaza los pagos programados, y el contador lo ve en la plataforma. Solo el administrador de la empresa o su acceso de cliente pueden decidir.
- [P] **Comprobantes:** el dueño fotografía el soporte de lo que pagó o le pagaron, y llega a **Soportes** para que el contador lo registre.
- [P] **Sin señal:** el gasto de caja queda guardado en el teléfono y se envía solo cuando vuelve la conexión.
- [P] **Dictado:** la descripción del gasto se puede dictar por voz.
- [P] **Avisos:** notificaciones cuando hay pagos por aprobar o un movimiento revisado o devuelto.

## Acceso seguro
- [P] Cada persona entra con su correo y su contraseña, y la primera vez la cambia por una propia.
- [P] La app se puede proteger con huella o Face ID.
- [P] Si retiras a un empleado en Nómina, su acceso se suspende solo.

## Para el equipo
- [C] **Sin confirmar:** si la app ya está publicada en App Store y Google Play, y si tiene costo o va incluida. No se promete fecha ni precio.
- [C] El acceso de cliente existe solo para organizaciones con plan de firma contable. Una empresa que no es firma entra con su administrador y le da acceso a su equipo.
- [C] Emitir desde la app necesita facturación electrónica activa y el permiso de esa persona.
- [I] Verificado el 04/11/2026 en iOS con una empresa ficticia: ingreso de cliente y de operador, Inicio, Tesorería, pago aprobado desde la app y caja asignada. No se probaron en vivo Android, Face ID, notificaciones, modo sin señal, facturar ni jefe de área: salen del código y de la ficha de tienda.
- [I] La ficha de tiendas está en `apps/mobile/PLAY-STORE.md` y `APP-STORE.md` de `platform`.
