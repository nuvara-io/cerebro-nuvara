---
id: conectar-extension-dian
tipo: procedimiento
titulo: Instalar la Extensión DIAN y obtener el token
tema: conectar-dian
publico: P
estado: verificado en el código
ruta: [Operaciones, Causaciones, Acciones, Extensión DIAN]
url: /{organización}/companies/{empresa}/dian-sync-alt
siguiente: importar-facturas
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/02-conectar-dian-token-extension.md
  - platform@5241b3430
---

# Instalar la Extensión DIAN y obtener el token

## Antes de empezar
- [P] Usa Google Chrome (o un navegador basado en Chromium) con un perfil normal, sin modo incógnito, y el mismo perfil donde abres núvara.
- [P] La empresa tiene guardados sus datos de ingreso a la DIAN (tipo de cuenta, NIT y cédula del representante legal) en **Administración › Configuración › Integraciones › DIAN**.
- [P] Para que núvara lea el token sola, el correo donde la DIAN lo envía tiene que estar conectado en Integraciones. Las cuentas de prueba no incluyen la extensión.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, abre **Acciones** y elige **Extensión DIAN**. Quédate en la pestaña **Configuración extensión**.
2. [P] **Paso 1:** pulsa **Descargar extensión** y agrégala a Chrome desde la tienda. Se hace una sola vez por navegador.
3. [P] **Paso 2:** copia los datos que te muestra la pantalla (**Empresa**, **Cédula representante legal** y **NIT**; o **Nombre** y **Cédula** si es persona natural), pulsa **Abrir DIAN** y pide el token en el portal de la DIAN.
4. [P] **Paso 3:** cuando la DIAN envíe el correo, pulsa **Obtener token del correo**. núvara lo busca en tu correo y llena el **Enlace de ingreso**, con la cuenta regresiva **Expira en**.
5. [P] Pulsa **Ir a DIAN** para abrir el portal ya autenticado y descarga las facturas con la extensión. El avance queda en la pestaña **Historial**.

## Resultado
- [P] Aparece «Token DIAN obtenido del correo», el **Enlace de ingreso** queda lleno y el portal de la DIAN se abre con tu sesión para que la extensión traiga las facturas a núvara.

## Si algo falla
- [P] «No tienes correo conectado»: conecta Gmail, Microsoft o IMAP en Integraciones, o usa **¿No configuraste el correo?** para ir allí. Sin correo, abre el correo de la DIAN en el mismo navegador de la extensión y pulsa **Ingresar**.
- [P] «No encontramos el token en tu correo»: si el correo sí llegó, ábrelo en este navegador y pulsa **Ingresar**, o copia la dirección del enlace y pégala en una pestaña; si no llegó, pídelo otra vez en la DIAN.
- [P] El token venció: pulsa **Solicitar token nuevo**. Pide un solo token a la vez por empresa.
- [P] «Tu cuenta de prueba no incluye la extensión»: mientras se habilita tu cuenta, usa **Cargar ZIP manualmente** con el ZIP que descargas del portal de la DIAN.
