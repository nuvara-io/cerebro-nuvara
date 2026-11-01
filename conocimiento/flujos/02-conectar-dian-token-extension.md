# Conectar la DIAN: extensión de navegador y token

## Objetivo
Traer a núvara las facturas de **compra** (recibidas) y de **venta** (emitidas) del portal de la DIAN usando la extensión de núvara. Es la vía vigente: la DIAN bloqueó la descarga directa y exige que una persona interactúe con su portal, así que la extensión trabaja dentro de tu propia sesión y tú sigues al mando.

## Cómo funciona, en pocas líneas
- **Token:** la DIAN envía un enlace de ingreso al correo registrado para la empresa en la DIAN (no a núvara). Dura unos 25 minutos; pasado ese tiempo hay que pedir otro.
- **Extensión:** descarga lo que tengas filtrado en el portal y lo envía a núvara. Compara por **CUFE** y solo importa lo que aún no está, así que repetir una descarga no duplica nada.
- **Solo XML:** la DIAN bloqueó la generación de PDF. núvara arma la vista de la factura a partir del XML; el PDF original del proveedor solo llega por correo (flujo 03).
- **Compras y ventas van por separado:** los emitidos tienen otra estructura, así que se descargan y se causan aparte.

## Requisitos
- Google Chrome o un navegador basado en Chromium. Firefox no sirve.
- Perfil estándar, **no modo incógnito**, y el mismo perfil en el que usas núvara.
- Empresa creada en núvara y credenciales de la DIAN configuradas en *Configuración → Integraciones* (sin ellas el botón de sincronizar no se habilita).
- Acceso al correo donde la DIAN envía el token. Si ese correo está conectado a núvara (flujo 03), la plataforma lo lee sola.
- Créditos suficientes: con saldo en cero la descarga puede quedar bloqueada.

## Pasos
1. Elige la empresa en el selector de la parte superior y entra a **Ver empresa → Causaciones**.
2. Abre **Acciones → Sincronizar con la DIAN** (también aparece como *Extracción de facturas DIAN*) y pulsa **Usar la extensión del portal DIAN**. Ahí mismo hay un video corto.
3. **Paso 1, instala la extensión:** *Descargar extensión → Añadir a Chrome/Chromium → Añadir extensión*. Se hace una sola vez por navegador y por computador. Si ya está instalada, el botón dice *Desinstalar*.
4. **Paso 2, abre la DIAN** desde el enlace de la plataforma e ingresa como siempre (por el acceso de *catálogo*, con el documento de la persona o la empresa).
5. **Pide el token** (*obtener token*). Llega al correo registrado en la DIAN.
   - Con el correo conectado a núvara, la plataforma lo toma sola y aparece **token activo** en la esquina inferior derecha de la pantalla de sincronizar.
   - Sin correo conectado, abre el correo del token y usa su enlace de ingreso. Si no se reconoce, clic derecho sobre el enlace → copiar dirección, y pégalo en una pestaña nueva del mismo navegador (o en *Ya tengo un enlace*).
6. En la DIAN, abre el menú → **Histórico → Documentos recibidos** (compras) o **enviados** (ventas).
7. **Filtra el rango de fechas:** mes a mes o, como máximo, de dos en dos. Elige también el tipo de documento (factura electrónica). Espera a que la DIAN termine de filtrar y comprueba que el rango quedó bien aplicado.
8. En el panel de la extensión **inicia sesión con el correo y la contraseña de núvara** (solo la primera vez; después te reconoce). Si olvidaste la contraseña, cámbiala en *Mi cuenta → Seguridad*.
9. **Descarga una factura a mano** desde el ícono de descarga de la DIAN; si pide la verificación de que no eres un robot, resuélvela. Es el paso que evita casi todos los bloqueos.
10. Pulsa **Descargar todo**. Comprueba que el contador avance y que abajo diga **"DIAN respondió 200"**.
11. **No te muevas de la pestaña de la DIAN** mientras descarga: déjala al frente y mueve el mouse de vez en cuando. Para seguir trabajando, abre otra pestaña de núvara; no cierres la pestaña de núvara que dice *descargando facturas*, porque entonces no se envía la información.
12. Al terminar verás un resumen: **importadas, omitidas y fallidas**. Vuelve a núvara, recarga la página y revisa **Pendientes** (ver `por-confirmar.md` sobre en qué estado quedan).
13. **Ventas:** repite el proceso eligiendo *Documentos enviados*.

<!-- fuentes: h-088d516b4772, h-0e3c41c7a48d, h-19e5ebd1eb97, h-1b5ddf9047dc, h-20227cba2708, h-2021ec577723, h-4158a5316af6, h-57509b5a0a19, h-8b268b156ae6, h-a2337e3bee2b, h-c7dee3911650, h-c8c0317a8652, h-d6c74231cd11, h-e15f41ef6e77, h-e5076d0a7373, h-f05e1fbaf759, h-f093ed31e568, h-f9bbb8990054, h-fad9de9e12ed, h-fc2e220f7888 -->

## Errores que más se repiten y cómo destrabarlos

**1. "Todas fallaron", código distinto de 200 o aviso de que no se puede capturar el navegador.**
La DIAN no detectó interacción humana y bloqueó la descarga automática. No es una falla de núvara.
*Qué hacer:* cierra el aviso con la X, recarga el portal de la DIAN, vuelve a filtrar, descarga una factura a mano (resuelve la verificación) y repite **Descargar todo**.

**2. La descarga se frena o el contador no avanza.**
Saliste de la pestaña de la DIAN y el portal lo detectó (verificación nueva desde mediados de 2026).
*Qué hacer:* deja la pestaña al frente. Si ya se bloqueó, aplica el paso del error 1.

**3. El token no llega, o llega a un correo ajeno.**
Es el atasco más común: el token va al titular o representante legal y el contador depende de que se lo reenvíen.
*Qué hacer:* verifica el NIT y la cédula en la empresa (*Actualizar empresa*) y pídelo de nuevo. Lo más estable: crea un **correo exclusivo de facturación**, regístralo en la DIAN y conéctalo a núvara (flujo 03); así el token se lee solo.

**4. El token venció a mitad de la descarga, o aparece "usar otro enlace / solicitar nuevo enlace".**
Dura unos 25 minutos.
*Qué hacer:* pide uno nuevo y sigue; retoma desde donde quedó. Cuando ya no lo necesites, ciérralo desde los tres puntos del indicador de token.

**5. núvara dice que el token no existe aunque la DIAN lo generó, o *obtener token* se queda cargando.**
Se vio en pruebas con correos bloqueados o red lenta, y tras un cambio del flujo (en revisión por el equipo).
*Qué hacer:* copia el enlace del correo y pégalo en una pestaña nueva del mismo navegador donde tienes núvara y la extensión; o ve a *Causaciones → Acciones → Sincronizar con la DIAN → Ya tengo un enlace*; o habilita el token directo en el portal de la DIAN.

**6. Descargó menos facturas de las que esperabas.**
Rango mal aplicado o **varios tokens y pestañas de la DIAN abiertos a la vez** (la DIAN llega a entregar solo una parte).
*Qué hacer:* deja un solo token activo, pide uno nuevo, vuelve a filtrar el rango y descarga otra vez. No duplica.

**7. La DIAN está lenta, da 404 o se congela.**
Pasa en temporada de declaraciones e información exógena.
*Qué hacer:* reintenta más tarde con rangos cortos (un mes o quincenas), y empieza por el mes más antiguo. Si el filtro tarda, espera a que termine antes de descargar.

**8. La extensión no aparece o no funciona.**
Navegador que no es Chromium, modo incógnito, perfil distinto al de núvara, o perfil corporativo de Google Workspace sin permiso para extensiones.
*Qué hacer:* ábrela en Chrome (cópiale el enlace si el navegador por defecto es otro y, de paso, ponlo como predeterminado). En perfil corporativo, pide al administrador que habilite extensiones o usa tu Chrome personal.

**9. Se muestra otra empresa al gestionar tokens.**
*Qué hacer:* recarga forzada, reinstala la extensión y, si sigue, revisa el perfil de usuario (conflicto de permisos de no administrador).

**10. Las facturas no aparecen en núvara.**
*Qué hacer:* recarga con F5, revisa que el mes esté habilitado y filtra por mes.

**11. Salen muchas "fallidas" u "omitidas", o el total no cuadra con el portal.**
Casi siempre son facturas que ya estaban importadas por correo, y los eventos y acuses (RADIAN) cuentan como elementos aunque no son facturas. Normalmente no pasan el filtro.
*Qué hacer:* nada; no es un error. Si quieres cuadrar, compara por mes contra el total de *Documentos recibidos*.

**12. Nombres raros en pantalla o errores al importar.**
El traductor del navegador interfiere con la plataforma.
*Qué hacer:* desactívalo y deja núvara en español.

**13. La DIAN cerró la sesión o no deja entrar.**
Inactividad, o credenciales distintas a las que cree tener el usuario.
*Qué hacer:* entra de nuevo, pide otro token y recarga la página antes de reintentar.

<!-- fuentes: h-1adf87b5dfa6, h-1b5ddf9047dc, h-20227cba2708, h-356b484bdf40, h-4158a5316af6, h-57509b5a0a19, h-6efbb6e48a66, h-85f50952dea3, h-c7dee3911650, h-c8c0317a8652, h-e15f41ef6e77, h-e5076d0a7373, h-f05e1fbaf759, h-f7e9b0b7d233, h-fc2e220f7888 -->

## Casos especiales
- **Token por empresa:** cada empresa necesita su propio token y su correo asociado. Pide uno por vez; no abras varios a la vez.
- **Contador sin acceso al correo del titular:** si el titular conectó el correo alguna vez a núvara, el token llega igual; con la empresa vinculada, los tres puntos del indicador de token ofrecen **Ir a la DIAN** sin iniciar sesión por separado. Si no, el titular debe reenviarte el correo en cada sesión.
- **Documentos soporte y equivalentes:** la extensión descarga solo lo que esté filtrado. Para documentos equivalentes, filtra por ese tipo y descárgalos además de las facturas. Los documentos soporte se bajan desde la sección de enviados/ventas.
- **Listado en Excel de la DIAN** (*Histórico → descargar listados*): sirve para comparar y detectar faltantes, pero trae solo CUFE y totales, sin ítems. Para causar, núvara necesita traer cada factura (XML) con la extensión.
- **Volumen alto o histórico:** descarga mes a mes y empieza por un mes de prueba para aprender el flujo. Tras la primera descarga, solo se traen las que faltan. Las ventas suelen ser miles: descárgalas aparte de las compras.
- **Descarga en ZIP:** desde *Operaciones y archivo* se pueden bajar facturas por lotes.
- **Otro computador o navegador:** repite la instalación; el vínculo con la DIAN se hace al abrirla desde núvara en ese navegador.
- **Sin extensión:** *Causaciones → Acciones → Sincronización con la DIAN* ofrece también el método por rango de fechas con el enlace del token, de uso más limitado.

<!-- fuentes: h-088d516b4772, h-0e3c41c7a48d, h-4158a5316af6, h-8b268b156ae6, h-a2337e3bee2b, h-c7dee3911650, h-e15f41ef6e77, h-f7e9b0b7d233, h-f9917fa6ff6d, h-f9bbb8990054, h-fc2e220f7888 -->

## Tips del asesor
- Con la extensión activa y el token vigente, los documentos van entrando a núvara mientras se descargan.
- Combina correo y DIAN: el correo trae la factura original; la DIAN es la fuente de verdad y completa lo que no llegó.
- Si el correo del token es de una persona que cambia o no responde, crea un correo exclusivo de facturación.
- Ante la duda, el equipo ofrece acompañar con pantalla compartida.
- Con el token también se confrontan los impuestos que calcula núvara: si coinciden, la factura trae bien discriminado el IVA.

<!-- fuentes: h-20227cba2708, h-2021ec577723, h-57509b5a0a19, h-ac390aa796e4, h-c7dee3911650 -->

## En desarrollo o por mejorar
- El equipo trabaja en la parte del vencimiento del token (los mensajes de "usar otro enlace") y en que el token se tome solo de forma confiable.
- Separar la solicitud del token y el inicio de sesión de la descarga es una prioridad de ingeniería.
- Según el equipo (2026), la descarga mejoró mucho con el uso de colas.

<!-- fuentes: h-1adf87b5dfa6, h-c7dee3911650, h-d6c74231cd11 -->
