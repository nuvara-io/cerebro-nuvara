# Conectar el correo electrónico

## Objetivo
Recibir sola las facturas originales (XML y PDF) que llegan por correo, y que el token de la DIAN se lea sin pedirlo cada vez.

## Requisitos
- Cuenta de correo compatible: Gmail, Outlook/Hotmail, Yahoo o configuración manual por IMAP.
- Para marcar lo ya extraído: una **etiqueta** creada por ti en el correo (núvara no puede crearla).
- Quien conecte debe tener las credenciales de la cuenta. Para Gmail por contraseña de aplicación, la verificación en dos pasos activa.
- Solo llegan **facturas de compra**: las de venta nunca llegan por correo y se traen de la DIAN (flujo 02).

## Qué lee núvara
- Solo correos que traigan un **CUFE** o un **ZIP**; ignora eventos y el resto de mensajes.
- Se queda con las facturas del NIT de la empresa. Si el NIT viene mal, la plataforma la detecta pero no la deja causar.
- Si el correo está conectado, la factura se trae con el **PDF original** del proveedor; sin correo, el PDF lo genera núvara a partir de la DIAN.
- Garantía para el usuario: solo se leen las facturas, núvara no se queda con acceso total al buzón.

## Pasos
1. Ve a **Administración → Configuración → Integraciones** (o al paso de integraciones de la configuración inicial).
2. Si hay una conexión que da error, elimínala. Si tenías otra integración de correo con otro software contable, desconfigúrala antes.
3. **Agregar cuenta**, elige el proveedor y pulsa **Conectar**. La plataforma muestra campos distintos según el proveedor.
4. **Gmail con Google:** *Conectar con Google → elige la cuenta → Continuar*. Si aparece la advertencia de Google, entra a *Configuración avanzada → Ir a núvara*, selecciona todos los permisos y continúa.
5. En el correo, crea la etiqueta de extracción (por ejemplo "extraído con núvara"). De vuelta en núvara pulsa **Probar conexión**: la plataforma lista tus etiquetas y eliges esa. No hace falta guardar para que empiece a trabajar.
6. Define la **fecha de inicio**. La primera sincronización busca y analiza los correos desde esa fecha; es de una sola vez y es la más pesada.
7. Para traer lo anterior o forzar una revisión: **Causaciones → Acciones → Sincronizar correo → Forzar sincronización por fechas** (desde y hasta; hay una opción de los últimos 4 días). El filtro usa la fecha de emisión de la factura, no la de llegada.
8. Indica **a qué correo llega el token de la DIAN**: es el que permite que el token se tome solo. Puede ser distinto del correo donde llegan las facturas.
9. Si usas varias empresas, cada una conecta sus cuentas. Puedes enlazar varios correos a la misma empresa (principal y secundario) y quitar los que sobren si todo llega al principal. Si tu correo recibe facturas de varias empresas, la plataforma valida el NIT para asignarlas.

Cada correo del que núvara extrae una factura queda con tu etiqueta. Si un correo **no la tiene**, aún no se extrajo; si se la pones a mano, se vuelve a extraer y la plataforma la quita. La etiqueta se suma a la del centro de costo, no la reemplaza.

## Conexión por IMAP (dominios propios, hosting, Yahoo o cuando Gmail falla)
1. En **Integraciones** elimina el correo que dé error y agrégalo de nuevo con la opción **IMAP**.
2. Pregunta quién es el proveedor del correo (hosting o Google) y busca en su guía de IMAP el **servidor y el puerto**; los datos de conexión no están en los registros DNS.
3. En el proveedor genera una **contraseña de aplicación** (en el ícono de la cuenta, sección de seguridad; si esa opción aparece, la verificación en dos pasos ya está activa). Dale un nombre reconocible, cópiala y úsala como clave.
4. Pulsa **Probar conexión** y guarda. Si el correo corporativo no conecta, prueba el otro puerto que indique la guía del proveedor.
5. Fuerza la sincronización indicando desde qué fecha quieres traer facturas.

**Outlook/Hotmail** es el más complejo (requiere crear una API en Azure) y conviene hacerlo con apoyo del equipo.

## Frecuencia
- Con el correo conectado, núvara revisa si hay facturas nuevas **cada 15 minutos** y la sincronización sigue sola. Además hay un refuerzo nocturno.
- La sincronización automática queda activada por defecto en la configuración inicial. Si la apagas, deja de descargar.
- En *Configuración → Integraciones → Sincronización periódica* eliges cada cuánto sincronizar (diario, semanal, cada 15 días o mensual). Para la parte de la DIAN solo funciona si núvara tiene el token (ver `por-confirmar.md`).
- Si se desconecta el correo, aparece el aviso **Probar conexión**. Te lleva a *Integraciones*; prueba la conexión y guarda la etiqueta correcta. Un correo con sincronización desactivada no descarga: actívala después de probar.

<!-- fuentes: h-0e3c41c7a48d, h-19e5ebd1eb97, h-20227cba2708, h-3162db18d8b9, h-356b484bdf40, h-364a64863009, h-3b10fe0f0da1, h-577942d4a1de, h-57509b5a0a19, h-8b268b156ae6, h-b451d169d162, h-bc9b20a13601, h-c7e2fc3560d2, h-ca456137eba3, h-e407b9d99c2a, h-e15f41ef6e77, h-f05e1fbaf759, h-f093ed31e568, h-f9bbb8990054, h-fad9de9e12ed, h-fc2e220f7888 -->

## Errores comunes
- **Google bloquea la conexión** ("la app intentó acceder"): usa *Configuración avanzada → Ir a núvara*. Si persiste, que el dueño de la cuenta dé el permiso, o conecta por IMAP con contraseña de aplicación. El equipo lo está resolviendo con Google.
- **Outlook dice "no podemos leer las credenciales":** elimina la cuenta y agrégala de nuevo. Si no deja autenticar, inicia sesión con esa cuenta en el dispositivo, abre la aplicación y conecta.
- **Error justo después de conectar:** la cuenta aún se está verificando; se resuelve solo en unos segundos.
- **La cuenta aparece sin asociar** tras una actualización grande de la plataforma: crea la cuenta nueva y asóciala.
- **IMAP deja de funcionar** cuando el dueño cambia la contraseña o quita la verificación en dos pasos. Es más estable conectar con *Iniciar sesión con Google*; se puede hacer en sesión remota con el usuario presente (unos 30 minutos), sin que nadie vea su contraseña.
- **La sincronización forzada dice "iniciado" y no trae nada:** si reenviaste los correos, espera a que lleguen al buzón y repite. Los reenviados deben llegar **con el archivo adjunto**, y los proveedores que clasifican con etiquetas o carpetas pueden esconder el correo de la bandeja que lee la plataforma. Otra salida: vincular también ese segundo correo, o cargar la factura a mano (flujo 15).
- **Llegan menos facturas de las que ves en el buzón:** parte son rechazadas, entradas de almacén u otros mensajes que no son facturas.
- **Facturas "fallidas" en el panel:** suelen ser documentos que ya existían.
- **Facturas que nunca entran:** a veces el proveedor las emite a la cédula en vez del NIT, o se equivocó en el correo o el dígito de verificación. Haz el barrido desde enero y completa con la DIAN.
- **Primera sincronización con muy pocos documentos:** revisa la fecha de inicio y el permiso del buzón; completa con la DIAN.
- **Un buzón nuevo que va lento o parece vacío:** la primera sincronización es la pesada; confirma que la etiqueta esté bien elegida.
- **Notificaciones y tokens** deben llegar a un correo institucional que se revise, no al de una persona que cambia.

<!-- fuentes: h-3162db18d8b9, h-577942d4a1de, h-57509b5a0a19, h-20227cba2708, h-364a64863009, h-ca456137eba3, h-e407b9d99c2a, h-f05e1fbaf759, h-fad9de9e12ed -->

## Tips del asesor
- El correo trae la factura original; la DIAN trae la versión oficial. Combinar ambos cubre casi todo: el correo suele traer entre 70 y 90 % y la DIAN completa el resto (documentos soporte, NIT mal escrito).
- Conectar el correo vale la pena si buena parte de las facturas llega por ahí (por ejemplo 70 %); con 10 % pesa menos.
- Con el correo conectado puedes descargar a cualquier hora, incluso un domingo, sin depender del token de la DIAN, y el token se toma solo.
- La etiqueta da control visual: sabes qué ya se trajo y si el problema es de captura o de que el proveedor nunca envió el correo.
- Comparar lo recibido por correo con lo de la DIAN muestra qué proveedores deben corregir el correo de envío.
- Una opción cuando todo está disperso: crear un correo dedicado a facturas (o uno por sede) y pedir a los proveedores que envíen ahí.
- Si una factura llega por correo y también está en la DIAN, la copia del correo es la original y la más completa.
- Los centros de costo pueden venir como etiquetas del correo y se traen con **Sincronizar**.
- Quien conecta debería hacerlo desde un computador, en vivo con el asesor.
- Si el contador no tiene acceso al correo del titular, el equipo puede acompañar para generar la contraseña de aplicación, guardarla y salir.

<!-- fuentes: h-20227cba2708, h-2eed69e6f27f, h-3162db18d8b9, h-356b484bdf40, h-364a64863009, h-a2337e3bee2b, h-e407b9d99c2a, h-0e3c41c7a48d, h-f8436a675e52, h-f05e1fbaf759 -->

## En desarrollo o ideas
- Según el equipo (2026), se evalúa marcar Outlook/Hotmail como "recomendado agendar cita" y mostrar el estado "detectado / no detectado" en la guía rápida.
- Vincular el correo del cliente solo para "escuchar" una etiqueta, sin acceso total al buzón, es una idea; hoy no está disponible.
- Un filtro por empresa (remitentes, asuntos o etiqueta) y un indicador de avance de la sincronización del correo están pedidos por usuarios.
- Con un servidor de correo distinto al habitual, las primeras pruebas mostraron duplicados y faltantes (en revisión).
- Pantalla de integraciones: se busca simplificar la vinculación de varias cuentas sin salir del flujo y aclarar a qué correo llega el token.

<!-- fuentes: h-2eed69e6f27f, h-ed9c331e7c17, h-f05e1fbaf759, h-f093ed31e568, h-fad9de9e12ed -->
