# Conectar la DIAN: extensión de navegador y token

## Objetivo
Descargar masivamente las facturas recibidas desde el portal de la DIAN hacia núvara.

## Requisitos
- Google Chrome (otros navegadores como Firefox no funcionan con la extensión).
- Perfil estándar de Chrome, **no modo incógnito**.
- Acceso al correo registrado en la DIAN para recibir el token.
- Empresa ya creada en núvara.
- Créditos suficientes (la descarga puede quedar bloqueada si el saldo es cero).

## Pasos
1. En la empresa pulsa **Ver empresa** → sección **Causaciones**.
2. Abre **Acciones** → **Extracción de facturas DIAN**.
3. Pulsa **Usar la extensión en el portal DIAN**.
4. **Paso 1:** instala la extensión (extensión de Chromium, propia de núvara) → **Agregar extensión**. Se instala una sola vez por equipo.
5. **Paso 2:** abre el portal de la DIAN desde el enlace de la plataforma e ingresa como siempre.
6. Solicita el **token** (obtener token). Llega al correo; también puedes pedirlo desde la herramienta de la plataforma si no tienes acceso al correo registrado.
7. Ingresa con el enlace del token. Puede que debas volver a abrirlo si caduca.
8. En el menú de tres rayas de la DIAN, elige **Documentos recibidos** y filtra los meses necesarios.
9. Descarga manualmente una factura y luego deja que la extensión procese el resto; las facturas aparecen en núvara mientras se descargan.
10. Vuelve a núvara y recarga la página para ver las facturas en **Pendientes**.

## Errores comunes
- Instalar la extensión en un perfil de Chrome distinto al que usas para núvara.
- Usar Mozilla/Firefox o modo incógnito.
- La DIAN se bloquea o muestra errores (404 con texto debajo): descarga una factura a mano, recarga la página de la DIAN y repite la descarga masiva.
- Cierre de sesión de la DIAN por inactividad.
- Olvidar usuario o correo de acceso a la DIAN.
- Saldo en cero que frena la descarga.

## Detalles de sesiones posteriores
- **Token por empresa:** cada empresa de la plataforma necesita su propio token y su correo asociado.
- **Si el token no se reconoce** (correos bloqueados o red lenta): abre el correo del token, clic derecho sobre el enlace de ingreso → copiar dirección, pégala en una pestaña nueva del mismo navegador donde está la sesión de núvara y la extensión. También puedes ir a *Operaciones → Causaciones → Sincronización con la DIAN*.
- **Se muestra otra empresa al gestionar tokens:** recarga forzada de la página, reinstala la extensión y, si persiste, revisa el perfil de usuario (conflicto de permisos de no administrador).
- **Límites de la DIAN:** el portal exige firma con token e interacción manual y limita las descargas por filtro; la plataforma divide automáticamente lotes de más de 200 documentos en tramos semanales.
- **Descarga mensual:** para ventas y volúmenes altos, descarga mes a mes y no todo de una vez (aunque para compras se recomienda el año completo si el volumen es manejable).
- **Descarga en ZIP:** desde *Operaciones y archivo* se pueden descargar las facturas por lotes en formato ZIP.
- Una sesión indicó que la DIAN redujo medidas de seguridad y ya no hacía falta la descarga previa manual (ver `por-confirmar.md`).
- La extensión opera **por perfil de Chrome**: cada persona/perfil que descargue debe instalarla.

## Tips del asesor
- La extensión es verificada por Google y se instala una sola vez por equipo; cada persona que descargue debe instalarla.
- Con la extensión activa y el token vigente, los documentos se integran automáticamente.
- Descarga **todo el año** de una vez, en vez de mes a mes, para causar de forma global.
- Para documentos soporte, filtra en la DIAN, copia el CUFE o sube la carpeta comprimida descargada.
- Para eventos RADIAN, algunos usuarios no los necesitan (se habló de habilitarlos más adelante; ver `por-confirmar.md`).
