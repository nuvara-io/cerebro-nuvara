---
id: conectar-correo
titulo: Conectar el correo
publico: P
actualizado: 2026-11-02
conexiones:
  - importar-facturas   # ya conectó y no ve las facturas
fuentes:
  - conocimiento/flujos/03-conectar-correo.md
  - conocimiento/preguntas-frecuentes.md#dian-y-correo
  - conocimiento/por-confirmar.md#correo
  - platform@5241b3430
---

# Conectar el correo

Cómo conectas el correo donde llegan las facturas para que núvara las traiga solas, con el XML y el PDF original del proveedor, y para que lea el token de la DIAN sin pedirlo cada vez.

## Qué trae el correo
- [P] Solo **facturas de compra**. Las de venta no llegan por correo: se traen de la DIAN.
- [P] Lee solo los correos que traen una factura electrónica (con su CUFE o su ZIP) e ignora el resto, incluidos los personales.
- [P] Se queda con las facturas del NIT de la empresa. Si un buzón recibe facturas de varias empresas, la plataforma las reparte por NIT.
- [P] Trae el **PDF original** del proveedor, que la DIAN no entrega.
- [P] Correo y DIAN se complementan: el correo trae la factura original y la DIAN completa lo que no llegó por correo.

## Qué correos puedo conectar
- [P] **Gmail** (Google o Workspace), con **Iniciar sesión con Google**.
- [P] **Outlook** (Microsoft o Hotmail), con **Iniciar sesión con Microsoft**.
- [P] **Yahoo**.
- [P] **Otro**, por **IMAP manual**, para dominios propios o de hosting.
- [P] Puedes conectar varios correos a la misma empresa: uno principal y otros de facturas adicionales.

## Cómo conecto el correo
Ruta: **Administración › Configuración › Integraciones › Correos electrónicos**
1. [P] Pulsa **Agregar nuevo correo** y elige el proveedor.
2. [P] Con Gmail u Outlook, inicia sesión con tu cuenta y acepta los permisos. Con IMAP, escribe servidor, puerto y contraseña de aplicación, y pulsa **Probar conexión**.
3. [P] Elige la **Etiqueta para facturas procesadas**: núvara marca con ella cada correo que ya extrajo. Créala antes en tu correo (por ejemplo "Facturas procesadas") o elige **Sin etiqueta**.
4. [P] Define **¿Desde cuándo empezamos a extraer?**: solo se procesan facturas recibidas desde ese día.
5. [P] Marca el correo que **Recibe token DIAN**, para que la plataforma lo lea sola. Puede ser distinto del correo de facturas.
6. [P] Deja activa la **Sincronización periódica** y elige la **Frecuencia de revisión**. Pulsa **Guardar configuración**.
- [P] También se conecta en el paso **Correo IMAP** del asistente al crear la empresa.

## Conexión por IMAP con contraseña de aplicación
- [P] Sirve para correos de dominio propio, de hosting o cuando el inicio de sesión con Google no funciona.
- [P] Busca en la guía de tu proveedor de correo el **servidor IMAP** y el **puerto**.
- [P] Genera una **contraseña de aplicación** en la seguridad de tu cuenta; en Google exige tener activa la verificación en dos pasos.
- [P] Pégala como contraseña y pulsa **Probar conexión**. Si no conecta, prueba el otro puerto que indique tu proveedor.
- [P] La conexión por IMAP se cae si el dueño cambia la contraseña o quita la verificación en dos pasos. Iniciar sesión con Google o Microsoft es más estable.

## Cada cuánto se revisa el correo
- [P] Con la **Sincronización periódica** activa, núvara revisa el correo sola según la **Frecuencia de revisión**: todos los días (recomendado), cada 3 días, cada semana, cada 15 días o una vez al mes. La pantalla muestra la próxima sincronización.
- [P] Si la apagas, deja de traer facturas hasta que la vuelvas a activar.
- [P] Para traer facturas anteriores o forzar una revisión: **Operaciones › Causaciones › Acciones › Sincronizar correo**, con **Forzar sincronización por fecha**.
- [P] La primera sincronización es la más pesada: revisa todo desde la fecha de inicio.

## No llegan las facturas del correo
- [P] **No llegan del todo:** revisa la fecha de inicio, que la sincronización esté activa y que la cuenta siga conectada. Si aparece **Probar conexión**, entra a Integraciones, prueba y guarda.
- [P] **Llegan menos de las que ves en el buzón:** parte son rechazos, entradas de almacén u otros mensajes que no son facturas.
- [P] **Una factura nunca entra:** a veces el proveedor la emite a la cédula y no al NIT, o la envía a otro correo. Complétala con la DIAN.
- [P] **"Fallidas" en el panel:** casi siempre son facturas que ya existían.
- [P] **Reenviaste correos y no entran:** deben llegar con el archivo adjunto; espera a que lleguen al buzón y vuelve a sincronizar.
- [P] **Google bloquea la conexión:** que el dueño de la cuenta dé el permiso, o conecta por IMAP con contraseña de aplicación.

## Para el equipo
- [C] Para una sincronización forzada, la etiqueta te dice qué ya se trajo: un correo sin la etiqueta aún no se extrajo.
- [I] El código ya conecta Outlook por OAuth (**Iniciar sesión con Microsoft**). El flujo 03 dice que Outlook exige crear una API en Azure y conviene hacerlo con el equipo: quedó desactualizado.
- [I] Discrepancia de frecuencia: `EMAIL_SYNC_CRON_EXPRESSION` corre cada 15 minutos por defecto, pero cada buzón respeta su `syncIntervalDays` (0 = todos los días). Las capacitaciones decían "cada 15 minutos"; para el usuario, lo que cuenta es la frecuencia que elige.
- [I] Bloqueo de Google al conectar Gmail seguía sin resolver el 10/08/2026; hay un aviso de límite de Google en la pantalla (`google-rate-limit-banner`).
- [I] La pestaña **Correo IMAP** de Configuración solo se muestra en algunas empresas (`showImapMenu`); el camino general es Integraciones.
