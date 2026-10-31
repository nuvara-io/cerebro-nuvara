# Conectar el correo electrónico

## Objetivo
Recibir automáticamente las facturas originales (XML/PDF) que llegan por correo.

## Requisitos
- Cuenta de correo compatible (Gmail; Outlook en proceso/habilitado según la sesión).
- Para extraer por etiqueta: crear una etiqueta en el correo y aplicarla a las facturas.

## Pasos
1. Ve a **Administración → Configuración → Integraciones**.
2. Selecciona el proveedor de correo y pulsa **Conectar**.
3. Autoriza la cuenta.
4. Define la **fecha de inicio** de recuperación de facturas.
5. Si usas varias empresas, puedes **agregar varias cuentas de correo**.
6. Para facturas anteriores, usa una **sincronización personalizada** indicando fecha de corte.
7. Si tus facturas llegan a un solo correo para varias empresas, la plataforma valida el NIT para asignarlas.

## Conexión por IMAP (dominios propios, hosting, o cuando Gmail falla)
1. En **Integraciones**, elimina el correo existente si da error y agrégalo de nuevo con la opción **IMAP**.
2. Pregunta quién es el proveedor del correo (hosting o Google) para obtener el **servidor IMAP**.
3. En el proveedor, genera una **contraseña de aplicación** (búscala en el ícono de la cuenta, seguridad), asígnale un nombre reconocible, cópiala y úsala como clave.
4. Pulsa **Probar conexión** y guarda.
5. En *Causaciones → Acciones*, fuerza la **sincronización del correo** indicando la fecha desde la que quieres traer facturas.

## Frecuencia de sincronización
- Las facturas del correo se descargan automáticamente; la frecuencia se puede cambiar (en un caso estaba cada 24 horas y se pasó a **cada 15 minutos**).
- Si hay muchos correos pendientes (cientos), el cambio acelera la revisión.

## Errores comunes
- Alertas de seguridad de Google al conectar: continúa desde la configuración avanzada o usa IMAP con contraseña de aplicación.
- Las notificaciones y los tokens de la DIAN deben llegar a un correo institucional que se revise, no al de una persona que cambia.
- Facturas que llegan al correo del gerente y se reenvían: usa la importación manual (flujo 15).
- Importar solo un documento en la primera sincronización: priorizar entonces la DIAN.
- Facturas "fallidas" en el dashboard: suelen ser documentos que ya existían desde el correo.
- Facturas enviadas a correos equivocados por errores de NIT del proveedor.

## Tips del asesor
- El correo trae la factura original; la DIAN trae la versión oficial. Combinar ambos cubre casi todo.
- Esta vía recoge cerca del 80 % de las facturas; la DIAN completa el resto (documentos soporte, NIT mal escrito).
- Comparar lo recibido por correo con lo de la DIAN permite saber qué proveedores deben corregir el correo de envío.
- Una etiqueta específica en el correo facilita la extracción.
- Los centros de costo pueden venir como etiquetas del correo y se traen con **Sincronizar**.
