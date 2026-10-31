# Exportar al software contable

## Objetivo
Enviar las causaciones aprobadas a Siigo (API) o a otro software contable (archivo plano).

## Requisitos
- Facturas en **Aprobadas**.
- Para Siigo por API: credenciales de API de la empresa en Siigo (usuario y clave de acceso).
- Para archivo plano: plantilla de importación del software contable y comprobante de compra configurado.

## Pasos: Siigo por API
1. En la sección **Alianzas**, abre la vinculación con Siigo.
2. Ingresa usuario, clave de acceso y el identificador de la alianza; al crear la integración en Siigo elige aplicación de **desarrollo propio** y la categoría "registro y gestión de compras".
3. **Sincroniza catálogos** (cuentas, impuestos, terceros).
4. Vincula cuentas entre núvara y Siigo; configura cuentas por pagar y retenciones.
5. Verifica que la empresa conectada sea la correcta.
6. Selecciona las facturas aprobadas (hasta 50 por página) y activa **enviar a Siigo**.
7. Confirma el estado del comprobante: un indicador **verde** significa que fue enviado; **rojo o amarillo** exige verificación manual (puedes forzar la validación).
8. Para auditar, selecciona la factura y pulsa el botón de más: verás la contabilización y el enlace a la factura.

### Siigo en la nube (detalles de sesiones posteriores)
1. En Siigo genera las credenciales de integración, registra una aplicación de **desarrollo propio** y crea el token de acceso; prueba la conexión en núvara.
2. Sincroniza el catálogo y **vincula** las cuentas por pagar de proveedores y las cuentas de IVA descontable (si la licencia es nueva, las cuentas recién creadas no tienen causaciones previas).
3. En los **ajustes de envío** activa el **consecutivo estricto** (evita saltos y pausa el envío si hay error) y el **detalle por producto** (si no, la descripción repite información o falta el artículo).
4. Para corregir muchas cuentas de IVA o de proveedor, usa el **cambio de cuenta en lote** (por ejemplo, 44 facturas a la vez).
5. En *Acciones → comprobantes por tipo de documento* selecciona el comprobante de **compra** correcto; un tipo equivocado impide el envío.
6. El envío puede tardar unos 10 minutos según la congestión de la API; recarga la página para ver el avance.
7. Si no manejas inventario, puedes llevar todo **directamente al costo**; las operaciones de honorarios pueden ir a la cuenta de proveedores.
8. Si el flujo es *precausación → revisión → aprobación → archivo*, el **archivo** es el que envía a Siigo.

Opción de futuro (en validación): emitir los documentos electrónicos desde núvara y dejar la contabilización en Siigo.

## Pasos: archivo plano (Siigo Pyme y otros)
*(Para el paso a paso real de World Office y Siigo de escritorio, ver `flujos/16-exportar-a-world-office-y-siigo-escritorio.md`.)*
1. Configura el **comprobante de compra** (código) para facturas y documentos soporte.
2. Define el **consecutivo inicial**: la plataforma no lo genera sola para evitar choques con registros manuales; debes indicarlo al exportar. Verifica el último en el software contable.
3. Configura códigos de impuestos según el software (por ejemplo, IVA 19 % corresponde a un código específico).
4. Exporta por fechas para evitar duplicados.
5. Importa el archivo en el módulo de contabilidad del software; atiende la advertencia de sobrescritura si el comprobante ya existe.
6. Si la plataforma detecta proveedores nuevos, úsalos para crear terceros masivamente en el software contable.

## Errores comunes
- Conectar la empresa equivocada a Siigo (se repite la integración).
- Consecutivo repetido: sobrescribe datos.
- Importación con errores por **cuentas inexistentes** o **terceros no reconocidos**.
- Error "el comprobante ya existe" por falla de respuesta de la API de Siigo; cancelar y reintentar cuando se restablezca.
- IVA que llega como "mayor valor" en vez de "IVA descontable" por la sincronización del catálogo.
- Siigo desglosa los ítems producto por producto: depende de la parametrización de Siigo.
- Prefijos múltiples (compras vs servicios) en archivo plano: se unificó en un prefijo global.

## Tips del asesor
- Antes de enviar, verifica si el documento ya está contabilizado en Siigo; la plataforma no siempre alerta.
- Exporta por fechas.
- "La importación depende de la configuración de cada usuario en el software contable."
- Si la API falla, cancela la importación para evitar bloqueos; el asesor avisa por el grupo cuando se restablezca.
