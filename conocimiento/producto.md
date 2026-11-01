# Producto: qué es y cómo se organiza núvara

## Qué hace

núvara elimina la carga operativa de la **causación** contable de facturas electrónicas de compra para contadores y empresas colombianas. Según lo explicado en las capacitaciones:

- Trae las facturas desde la **DIAN** (con extensión de navegador y token) y desde el **correo electrónico**.
- **Precausa** cada factura con inteligencia artificial, apoyándose en el balance de prueba por tercero que carga el usuario y en reglas propias.
- Calcula IVA y retenciones, crea terceros, cuentas, asociaciones y productos cuando hacen falta.
- Agrupa las facturas con la misma causación para revisarlas y aprobarlas en bloque.
- Exporta lo aprobado al software contable: Siigo y World Office por API; Alegra, Helisa, Siigo PyME, Contai o un formato genérico por archivo.

El foco actual es **netamente causación** de compras (el asesor lo dijo así). Ventas, nómina, cajas operativas y eventos RADIAN se mencionan como módulos futuros o recién habilitados (ver `por-confirmar.md`).

> **Lo que dice el sitio oficial** (`sitio-web.md`, 31/10/2026): causa compras **y** ventas; World Office ya se conecta por API con token; la conciliación bancaria lee extractos PDF de Bancolombia, Davivienda y Nu o CSV; nómina, facturación electrónica, file manager, cajas y calendario tributario aparecen como módulos de la plataforma. Donde esto choque con lo de abajo, gana el sitio.

## A quién va dirigido

- Contadores y firmas contables que causan para muchas empresas (el argumento es el ahorro de tiempo multiplicado por cada empresa).
- Empresas con alto volumen de facturas y equipo administrativo propio.
- La conversación comercial siempre es con el contador, aunque quien se conecte sea el gerente.
- Se considera más fácil enseñar la plataforma a un contador que a una persona sin formación contable.

## Estados de una factura

`Pendiente` → `Precausada` → `Causada` → `Aprobada` → `Exportada`

En las capacitaciones el asesor explica cuatro pestañas de trabajo:

| Pestaña | Qué significa |
|---|---|
| Pendientes | Facturas recibidas, aún sin procesar. |
| Precausadas | Ya procesadas; se pueden editar y revisar. Aquí se descuentan los créditos. |
| Aprobadas | Datos validados por el usuario, listas para enviar. |
| Archivadas | Ya aprobadas y enviadas; se ordenan por año y mes. |

## Mapa de menús y pantallas (como los nombra el asesor)

| Lugar | Qué se hace allí |
|---|---|
| Inicio / panel de empresas | Lista todas las empresas del usuario; opción de crear una empresa nueva y "Ver empresa". |
| Dashboard de la empresa | Indicadores: facturas pendientes, precausadas, aprobadas, importadas, fallidas. |
| Operaciones → Causaciones | Pantalla central de trabajo con las pestañas de estado. |
| Botón "Acciones" | Aprobación por lote, causar por lote, extracción de facturas DIAN, entre otras. |
| "Extracción de facturas DIAN" | Instalar la extensión, obtener token y descargar documentos recibidos. |
| Vista agrupada / vista normal | Agrupa facturas por la misma causación; alternativa: "ver por proveedor". |
| Ícono de ojo | Ver el detalle de la factura original y su causación. |
| Filtro "causación idéntica" | Muestra facturas con la misma causación para revisarlas juntas. |
| Función "recausar" | Recalcula un grupo después de cambiar cuentas. |
| Administración → Configuración → Integraciones | Conectar correo (Gmail u Outlook), fecha de inicio de recuperación. |
| Configuración → Tributaria | Cuenta de IVA descontable, impuesto al consumo y otros impuestos con su cuenta. |
| Alianzas | Credenciales de API para vincular con Siigo. |
| "Historial aprendido" | Ver, editar o eliminar las correcciones que la plataforma guardó. |
| "Ver archivos" | Archivo anual y mensual de facturas aprobadas; herramienta de comparación con la DIAN. |
| Billetera / "Ver billetera" | Saldo de créditos y botón "Recargar". |
| Ficha del proveedor | Marcar "autorretenedor" y "gran contribuyente"; ver estatus tributario detectado. |
| Centros de costo | Crear, editar, sincronizar etiquetas desde el correo; subcentros que heredan reglas. |
| Reglas | Reglas fijas con condiciones, agregar o reemplazar líneas, simular con una factura real. |

## Módulos y capacidades mencionadas

- Configuración inicial guiada: RUT, balance de prueba por tercero, perfil de la empresa.
- Calendario tributario según las responsabilidades del RUT.
- Perfil de la empresa: actividad económica, manejo de inventario, combustible, IVA, auxiliares por proveedor.
- Botón de inteligencia artificial para sugerir cuentas de gasto a partir del balance.
- Aprendizaje a partir de correcciones (global, por proveedor, por concepto o línea).
- Reglas fijas con condiciones: monto, NIT del proveedor, tipo de cuenta, palabras en la descripción.
- Simulación de causación con una factura real antes de activar una regla.
- Integración con Siigo por API y archivo plano para Siigo Pyme; la integración con otro software contable se intentó por API y archivo plano.
- Comparación contra el listado de la DIAN para verificar que no falten documentos.
- Gestión de usuarios y permisos por empresa desde el acceso principal.
- Soporte por grupo de WhatsApp; tutoriales en preparación.

## Planes y créditos (lo mencionado)

- núvara cobra **por uso**, en créditos. El cobro ocurre cuando la factura se precausa/causa, **no** cuando se descarga.
- Facturas irrelevantes se pueden eliminar antes de precausar para no gastar créditos.
- La recarga inicial típica mencionada fue de un monto mínimo cercano a 271.000 COP, que equivale a unos 2.710 créditos y cubre alrededor de 530 facturas (ver `flujos/12-creditos-y-recargas.md`).
- Los valores exactos y vigentes están en `por-confirmar.md`.
- Compras y ventas: una factura de venta consume menos créditos que una de compra (ver `por-confirmar.md`).
- Los créditos se consumen **al precausar**, incluso las ventas que llegan solas por correo o DIAN; por eso se puede dejar todo en *Pendientes* y eliminar o bloquear lo que no se necesita.

## Novedades y detalles de sesiones posteriores

### Cómo entran las facturas
- **Correo:** la sincronización se puede configurar (cada 15 minutos o cada 24 horas); además de Gmail se conecta por **IMAP** con una **contraseña de aplicación** (dominios propios y proveedores de hosting).
- **DIAN:** token por empresa más extensión; el portal limita las descargas por filtro, así que la plataforma divide automáticamente lotes de más de 200 documentos en tramos semanales.
- **Importación manual** de PDF, XML o zip para soportes que no están en la DIAN (ver `flujos/15-facturas-del-exterior-y-legalizacion-de-gastos.md`).
- **Papelera** para facturas eliminadas y **bloqueo** de facturas no deseadas (ver `flujos/17-papelera-bloqueo-y-limpieza-de-facturas.md`).
- **Flujo completo de una factura:** precausación, revisión, aprobación (validación secundaria) y **archivo**, que es el paso que dispara el envío al software contable.

### Módulos por ordenar (según el asesor)
Se habló de organizar la plataforma en cuatro módulos: **causaciones**, **nómina**, **egresos / tesorería** y **facturación electrónica** (con documentos soporte y eventos RADIAN). Los puntos de venta quedan fuera por ahora.

| Módulo | Estado según las sesiones |
|---|---|
| Causaciones (compras y ventas) | En uso; es el foco. |
| Nómina y nómina electrónica | En uso por algunos usuarios; ver `flujos/18-modulo-de-nomina.md`. |
| Egresos / cuentas por pagar | Presentado a usuarios y en pruebas: agrupa por proveedor, genera comprobantes de egreso y reparte pagos de forma uniforme o por antigüedad. |
| Conciliación bancaria | En desarrollo; por ahora solo egresos y extracción de movimientos desde archivos. |
| Cajas menores y aplicación móvil | En diseño y demostración interna: un custodio por caja, registro de comprobantes con cámara, funcionamiento sin conexión, dictado por voz. |
| Facturación electrónica, documentos soporte y RADIAN | En desarrollo y pruebas internas. |
| Legalización de gastos | Disponible en Operaciones; exporta a Excel. |

### Otras capacidades observadas
- Archivo de **egresos** y **anticipos** (importables por Excel; se pueden eliminar los antiguos que quedan activos por cruces previos).
- **Reglas de clasificación** creadas pegando el texto o nombre del proveedor.
- Reglas por **placa de vehículo** para rastrear combustible, peajes y mantenimiento por vehículo; asignación de centros de costo **a nivel de factura**, no por línea.
- **Cambio de cuenta en lote**, **fusionar cuentas** y asignación masiva de centros de costo.
- Configuración de **retefuente personalizada** (por ejemplo, un porcentaje fijo cuando se superan ciertas bases).
- Configuración por proveedor para **desglosar impuestos** de una factura (se acordó habilitarla).
- Selector de **dígitos de cuenta** (mixto o fijo).
- El chat de soporte integrado es el canal oficial para reportar incidencias.
- Sesiones con usuarios de un mismo equipo: se agregan **miembros** a una empresa sin costo.
