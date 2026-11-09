---
id: integraciones
titulo: Integraciones
publico: P
actualizado: 2026-11-02
conexiones:
  - exportacion   # cómo se hace la exportación, no solo si existe
  - competencia   # solo C: comparar con el programa contable que ya usa
fuentes:
  - conocimiento/sitio-web.md#integraciones-página-integraciones
  - conocimiento/preguntas-frecuentes.md#exportación-y-software-contable
  - conocimiento/por-confirmar.md#world-office
  - red/exportacion.md
  - platform@5241b3430   # Configuración › Integraciones, external-systems-list.tsx, imap-config, tesorería
---

# Integraciones

Con qué se conecta núvara: la DIAN y tu correo para traer las facturas, tu programa contable para llevar lo causado y los extractos de tu banco para conciliar.

## Con qué se conecta núvara
- [P] **DIAN**: para traer las facturas que recibes y emites, y para emitir documentos electrónicos si activas la facturación electrónica.
- [P] **Correo**: Gmail, Outlook y otros correos por IMAP, para traer las facturas que te llegan por correo.
- [P] **Programa contable**: Siigo Nube con envío directo; World Office nube con envío de compras por API; Siigo Contador, Siigo Pyme, World Office, Alegra, Contai, Helisa y otros por archivo.
- [P] **Bancos**: los extractos se cargan en la conciliación bancaria de Tesorería.
- [P] Todas se configuran por empresa en **Administración › Configuración › Integraciones**, con las secciones **DIAN**, **Correos electrónicos** y **Sistema contable externo**.

## Siigo
- [P] **Siigo Nube** se conecta una vez con las credenciales de la API de Siigo (correo, Access Key y Partner ID), y desde el Archivo envías el mes directo a Siigo. Solo van compras y notas archivadas; las ventas salen por archivo.
- [P] **Siigo Contador** y **Siigo Pyme** salen por archivo de Excel, que importas en Siigo.
- [P] núvara crea los terceros que falten, pero no crea cuentas: las cuentas se crean en Siigo.
- [P] Cómo conectar y enviar: `conectar-siigo` y `enviar-a-siigo`.

## World Office
- [P] World Office, escritorio o nube, sale **por archivo**: una nota de contabilidad que importas en World Office, y un archivo opcional de ítems de inventario.
- [P] Con World Office nube, las **facturas de compra** también se pueden enviar por API con tu token, junto con los productos y los centros de costo. Se activa por empresa y pide relacionar los productos, las bodegas y los terceros que ya existen en World Office. Las ventas y las notas salen por archivo.
- [P] Cómo se hace: `exportar-world-office`.

## Alegra, Contai, Helisa y otros programas
- [P] Salen **por archivo**: núvara arma el Excel con el formato de tu programa y tú lo importas allá.
- [P] Formatos disponibles: Alegra (comprobante o facturas de proveedor), Contai, Helisa, Avansys (en CSV), SEDI y una plantilla **Genérico** para cualquier otro programa que importe archivos.
- [P] Si tu programa no está en la lista, elige **Otro** en **Sistema contable externo** y escribe cuál usas: el equipo genera el formato.
- [P] Cómo se hace: `exportar-archivo`.

## DIAN y correo
- [P] La DIAN se conecta por empresa con el token que da la DIAN y la extensión de navegador de núvara; trae las facturas que recibes y las que emites.
- [P] El correo se conecta con Gmail u Outlook iniciando sesión, o con otro correo por IMAP y una contraseña de aplicación. Puedes conectar varios correos a una empresa.
- [P] Uno de los correos conectados recibe el token de la DIAN.
- [P] Cómo se hace: `conectar-dian` y `conectar-correo`.

## Bancos
- [P] núvara no se conecta en línea con los bancos: cargas el extracto en la conciliación bancaria de Tesorería.
- [P] Lee extractos en PDF de Bancolombia, Davivienda y Nu, o cualquier extracto en CSV.
- [P] Cómo se hace: `conciliacion-bancaria`.

## Para el equipo
- [C] La pantalla de integraciones anuncia Alegra, Contai y Helisa por API como **próximamente**, sin fecha. Hoy salen por archivo: no prometas conexión directa.
- [C] El sitio dice que World Office se conecta por API y escribe las facturas. Es cierto solo para las facturas de compra en World Office nube, con la activación por empresa; las ventas y las notas salen por archivo.
- [C] SINCO y Distribuciones Riogrande son formatos a medida que activa el equipo por empresa. Un formato propio para otro programa se negocia con el equipo.
- [C] Los extractos de BBVA, Banco de Bogotá y Daviplata todavía no se leen; usa el CSV.
- [I] La tarjeta de World Office en **Sistema contable externo** dice "Push automático de documentos y catálogos": hoy van compras, productos y centros de costo; ventas y notas no. Detalle en `exportacion`.
- [I] Integraciones que no son contables: SIADOC y TNS solo aparecen con presupuesto público (`siadoc_scraper`, `public_budget`). La sección **Telegram** (notificaciones y registro de pagos) aparece en todas las empresas, pero el bot de Telegram para el cruce de pagos se había descontinuado: no se ofrece.
