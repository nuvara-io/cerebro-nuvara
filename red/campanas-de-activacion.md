---
id: campanas-de-activacion
titulo: Campañas con código de activación
publico: C
actualizado: 2026-11-12
conexiones:
  - embudo-de-adquisicion   # dónde entra la prueba en el camino
  - mensajes-y-afirmaciones # qué se dice en el correo
fuentes:
  - platform@5241b3430     # activation-codes y activation-outreach, verificado el 03/11/2026
---

# Campañas con código de activación

Un código de activación le regala a quien se registra un número de facturas para probar núvara sin pagar la recarga inicial. Cada campaña tiene su código y puede enviarse por correo a una lista de contactos.

## Qué recibe quien usa un código
- [C] Un **crédito de bienvenida** para causar el número de facturas de la campaña (por defecto, 20), que se carga a su saldo.
- [C] Su cuenta entra en **prueba**: una empresa, hasta 20 facturas traídas del correo y sin la extensión de la DIAN. No vence por tiempo; dura lo que el crédito.
- [C] Un código sirve una vez por organización y una vez por persona. No distingue mayúsculas ni espacios.

## Campaña NUVARA20 (pauta)
- [C] Es el código de los anuncios de 20 facturas gratis: `app.nuvara.com.co/signup?code=NUVARA20`. Da 20 causaciones sin tarjeta ni recarga, en una empresa y solo para causación: facturación electrónica, nómina y tesorería no entran en la prueba.
- [C] En la prueba las facturas se suben a mano (ZIP o XML de la DIAN) o llegan por el correo conectado; la extensión de la DIAN se habilita al activar la cuenta.
- [C] Se manda solo a quien viene de un anuncio de causación o de 20 facturas, o pide el código. A quien llega por un anuncio de facturación electrónica, RADIAN o «Ponte al día» se le responde por ese tema.

## Cómo se usa
- [C] Con un enlace: `app.nuvara.com.co/signup?code=<CÓDIGO>` registra a la persona y le aplica el código al crear su organización.
- [C] O después de registrarse, en **Activa tu cuenta › Tengo un código**, mientras la cuenta no esté activada.
- [C] Si el código no existe, está inactivo, venció o se agotó, la persona ve "Ese código no es válido o ya se agotó".

## Correo de campaña
- [C] Solo se escribe a contactos con **autorización previa** o **relación comercial**; cualquier otra base (incluido "dato público") se rechaza al importar.
- [C] Quien pide la baja queda suprimido para siempre en todas las campañas, y también los correos que rebotan o se marcan como spam.
- [C] El correo lleva el código, un botón con el enlace de registro, un bloque "Cómo funciona" y el pie legal con el origen del dato.

## Para el equipo
- [I] Las campañas se manejan en **Plataforma › Parámetros › Códigos de activación** (solo superadministradores).
- [I] El crédito se calcula con la tarifa de causación de compra vigente en **Tarifas** y queda fijo al canjear. Antes de anunciar cuánto vale el regalo en pesos, revisa esa tarifa: el valor de arranque de la base no coincide con el precio público ($510).
- [I] El aviso de crédito agotado se edita por campaña: título, mensaje, texto y enlace del botón. El mensaje por defecto dice "núvara" con mayúscula y "Nuvicoins" en el detalle de canjes; por marca va en minúscula y "créditos".
- [I] El tope de envíos por día es uno solo para todas las campañas (de 1 a 5.000).
