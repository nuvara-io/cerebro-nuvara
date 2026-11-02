---
id: conectar-dian
titulo: Conectar la DIAN
publico: P
actualizado: 2026-11-02
conexiones:
  - importar-facturas            # ya conectó y no ve las facturas
  - archivo-y-comparacion-dian   # le faltan facturas frente a la DIAN
fuentes:
  - conocimiento/flujos/02-conectar-dian-token-extension.md
  - conocimiento/preguntas-frecuentes.md#dian-y-correo
  - conocimiento/objeciones-y-dolores.md#descarga-dian-y-facturas-que-faltan
  - conocimiento/por-confirmar.md#dian-y-extensión
  - platform@5241b3430
---

# Conectar la DIAN

Cómo traes a núvara las facturas de compra y de venta del portal de la DIAN con la extensión de núvara para Chrome. La DIAN exige que una persona entre a su portal, así que la extensión trabaja dentro de tu propia sesión y tú sigues al mando.

## Cómo funciona la extensión
- [P] Es una extensión de núvara para Google Chrome (o navegadores basados en Chromium). Firefox no sirve.
- [P] Descarga desde el portal de la DIAN lo que tengas filtrado y lo envía a núvara como XML.
- [P] Compara cada factura por su **CUFE** y solo trae las que faltan: repetir una descarga no duplica nada.
- [P] La DIAN no entrega el PDF: núvara arma la vista de la factura desde el XML. El PDF original del proveedor solo llega por correo.
- [P] Compras (documentos recibidos) y ventas (documentos enviados) se descargan por separado.

## Qué necesitas
- [P] Chrome con un perfil normal, **sin modo incógnito**, y el mismo perfil donde abres núvara.
- [P] Los **datos de ingreso al portal DIAN** guardados en la empresa: tipo de cuenta (Empresa o Persona natural), NIT de la empresa y cédula del representante legal.
- [P] Acceso al correo donde la DIAN envía el token, o ese correo conectado a núvara para que lo lea sola.
- [P] Saldo de créditos disponible.

## Dónde se guardan los datos de la DIAN
Ruta: **Administración › Configuración › Integraciones › DIAN**
1. [P] Elige el **Tipo de cuenta**: Empresa o Persona natural.
2. [P] Escribe el **NIT de la empresa** (si es empresa) y la **Cédula del representante**.
3. [P] Pulsa **Guardar**. Estos datos también se piden en el paso **Conexión DIAN** del asistente de la empresa.

## Cómo conecto la DIAN con la extensión
Ruta: **Operaciones › Causaciones › Acciones › Extensión DIAN**
1. [P] **Paso 1:** pulsa **Descargar extensión** y agrégala a Chrome. Se hace una sola vez por navegador y por computador.
2. [P] **Paso 2:** pulsa **Abrir DIAN** e ingresa al portal con los datos que te muestra la pantalla (empresa, cédula y NIT, cada uno con su botón para copiar).
3. [P] **Paso 3:** pide el token en la DIAN. Si tu correo está conectado, pulsa **Obtener token del correo** y aparece el **Enlace de ingreso** con su tiempo restante; luego pulsa **Ir a DIAN**.
4. [P] En la DIAN, entra a **Documentos recibidos** (compras) o **Documentos enviados** (ventas) y filtra por fechas, mes a mes.
5. [P] En el panel de la extensión inicia sesión con tu correo y contraseña de núvara (solo la primera vez) y descarga todo.
6. [P] Deja la pestaña de la DIAN al frente mientras descarga. Para seguir trabajando, abre otra pestaña de núvara.
7. [P] Al terminar, recarga núvara y revisa las facturas en Causaciones. El progreso queda en la pestaña **Historial**.

## Cómo funciona el token
- [P] El token es un enlace de ingreso que la DIAN envía al correo registrado para la empresa en la DIAN, no a núvara.
- [P] Dura poco: la pantalla muestra **Expira en** con la cuenta regresiva. Si vence, pulsa **Solicitar token nuevo** y sigue desde donde quedaste.
- [P] Con el correo del token conectado a núvara, la plataforma lo toma sola; marca en Integraciones cuál correo **Recibe token DIAN**.
- [P] Sin correo conectado, abre el correo de la DIAN en el mismo navegador donde tienes la extensión y pulsa **Ingresar**, o copia la dirección del enlace y pégala en una pestaña de ese navegador.
- [P] Cada empresa tiene su propio token. Pide uno a la vez y no abras varios al mismo tiempo.
- [C] Sin confirmar: la duración exacta del token. En las capacitaciones se dice unos 25 minutos; la barra de la plataforma toma 30 minutos como referencia.

## El token no funciona o no llega
- [P] **No llega o llega a un correo ajeno:** va al titular o representante legal registrado en la DIAN. Revisa NIT y cédula en la empresa y pídelo de nuevo.
- [P] **"No encontramos el token en tu correo":** si el correo sí te llegó, ábrelo en el navegador con la extensión y pulsa **Ingresar**; si no llegó, solicítalo de nuevo en la DIAN.
- [P] **"No tienes correo conectado":** conecta Gmail, Microsoft o IMAP en Integraciones para obtener el token automáticamente.
- [P] Lo más estable: un **correo exclusivo de facturación**, registrado en la DIAN y conectado a núvara, para que el token se lea solo.

## La descarga falla o trae menos facturas
- [P] **"Todas fallaron" o un código distinto de 200:** la DIAN no detectó una persona y bloqueó la descarga. Recarga el portal, vuelve a filtrar, descarga una factura a mano y repite.
- [P] **El contador no avanza:** saliste de la pestaña de la DIAN. Déjala al frente y repite.
- [P] **Trajo menos facturas:** rango mal aplicado o varios tokens abiertos. Deja un solo token, vuelve a filtrar y descarga otra vez; no duplica.
- [P] **"Fallidas" u "omitidas":** casi siempre son facturas que ya estaban (por ejemplo, del correo) o eventos que no son facturas. No es un error.
- [P] **La DIAN está lenta o se cae:** pasa en temporada de declaraciones y exógena. Reintenta más tarde con rangos cortos.
- [P] **La extensión no aparece:** otro navegador, modo incógnito, otro perfil de Chrome, o un perfil corporativo que bloquea extensiones.

## Cuentas de prueba y alternativas
- [P] Las cuentas de prueba no incluyen la extensión: se activa cuando se habilita la cuenta. Mientras tanto, descarga el ZIP o el XML desde el portal de la DIAN y súbelo con **Acciones › Importar XML/ZIP de la DIAN**.
- [P] El listado en Excel de la DIAN sirve para comparar faltantes, pero no trae los ítems: para causar hace falta el XML de cada factura.

## Para el equipo
- [C] Sin confirmar: si siempre hace falta descargar una factura a mano antes de **Descargar todo**, y cuántos meses aguanta un solo filtro (se recomienda mes a mes).
- [I] En el código la opción se llama **Extensión DIAN** (ruta `dian-sync-alt`), no "Sincronizar con la DIAN" como dicen las capacitaciones. Depende de `FEATURE_SYNC_AND_IMPORT_ALT_ENABLED` y se oculta en prueba (`planFeatures.dian_extension = false`, `DianExtensionGate`).
- [I] Los datos de ingreso son `accountType` (business o natural_person), `companyNit` y `representativeId`; el portal que abre la plataforma es catalogo-vpfe.dian.gov.co.
- [I] Bugs abiertos según `por-confirmar.md`: "obtener token" que queda cargando, y eventos o facturas en cero que salen como fallidas sin mensaje claro.
