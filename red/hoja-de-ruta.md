---
id: hoja-de-ruta
titulo: Hoja de ruta
publico: I
actualizado: 2026-11-02
conexiones:
  - modulos-disponibles   # entra desde ahí: cuándo sale un módulo en desarrollo
fuentes:
  - conocimiento/producto.md#en-desarrollo-o-en-pruebas-no-ofrecer-como-disponible
  - conocimiento/producto.md#en-desarrollo-comprometido-por-el-equipo
  - conocimiento/producto.md#ideas-y-visión-sin-fecha-de-entrega
  - conocimiento/por-confirmar.md#nómina-facturación-electrónica-radian-documentos-soporte-y-conciliación
  - conocimiento/por-confirmar.md#interfaz-registro-y-estabilidad
  - red/exportacion.md#para-el-equipo
---

# Hoja de ruta

Lo que está en desarrollo, en pruebas o prometido y todavía no está construido. Nada de esto se ofrece como disponible y ninguna fecha está comprometida: si alguien pregunta cuándo sale, la respuesta es "sin fecha, lo confirma el equipo".

## Ya disponible: no va en la hoja de ruta
- [I] Facturación electrónica, documento soporte y eventos RADIAN, nómina y nómina electrónica, y Tesorería (conciliación bancaria, cobros, pagos, pago de nómina y cajas) están **disponibles** desde el 02/11/2026.
- [I] Partes de `conocimiento/` y de las demostraciones todavía los nombran como "en desarrollo": está desactualizado. Ver `modulos-disponibles`.

## Qué viene en exportación e integraciones
- [I] **Exportación contable de la nómina:** no está construida; `FEATURE_PAYROLL_ACCOUNTING_ENABLED` muestra un grupo vacío.
- [I] **World Office por API con escritura:** hoy está fijo en solo validación (`VALIDATION_ONLY`, `canWrite=false`). El envío de inventario hacia World Office también está en desarrollo.
- [I] **Alegra, Contai y Helisa por API:** la página de integraciones los anuncia como próximamente, sin fecha. Hoy salen por archivo.
- [I] **Envío automático a Siigo al aprobar:** existe, pero está apagado (`ACCOUNTING_AUTO_PUSH_ON_APPROVE`).
- [I] **Verificar contra Siigo antes de causar** y **vista de trazabilidad por auxiliar:** prometidos (30/06).

## Qué viene en la causación
- [I] Botón "aplicar retención especial" para proveedores de régimen especial; mostrar siempre las cuentas de ocho dígitos; exportar a Excel desde Precausadas (13/05).
- [I] Condición de IVA no descontable por clase de gasto y configuración global de ReteICA (21/07).
- [I] Centro de costo múltiple con distribución porcentual; código interno de la firma y SKU en productos (03/08).
- [I] Importar formas de pago por cuenta desde Excel (23/07).
- [I] **Aprendizaje masivo** (corregir en masa lo ya causado): en desarrollo y más complejo de lo previsto.
- [I] Escaneo de facturas físicas: en pruebas por chat.

## Qué viene en informes y análisis
- [I] **Inteligencia de compras, Visión ejecutiva y Cambios de precio:** demostradas, en refinamiento; se planean cambios grandes.
- [I] **Informes:** compras por proveedor con detalle y proyección de impuestos sin causar; prioridad acordada, sin fecha.
- [I] **Exógena:** después de tener documentos y terceros bien diligenciados.
- [I] Icono de cambio de precio junto al valor unitario en la causación: acordado, sin implementar.

## Qué viene en la interfaz y el soporte
- [I] Rediseño de la vista de causación a 1440 px con barra de atajos (16/06).
- [I] Renombrar la pestaña "causadas" a "precausadas", quitar "mixta" del tipo de empresa y unificar Organización, Empresa, Usuarios y Miembros.
- [I] Inhabilitar usuarios: "próximamente".
- [I] Paginación de listas, importación rápida de productos y errores más claros (11/08).
- [I] Compartir la grabación y la transcripción de cada capacitación y registrar los compromisos como pendientes.

## Ideas sin fecha de entrega
- [I] Etapa de **cruce de cuentas** después de causar, para asociar cada factura con su caja o banco. El bot de Telegram para ese reporte se descontinuó (16/06).
- [I] Cajas menores con foto del comprobante por Telegram o WhatsApp: estaba en pruebas el 25/08; sin confirmar si salió con el módulo Caja.
- [I] Asistente conversacional por voz o chat, traducción de idiomas asiáticos y legalización masiva de gastos.
- [I] Control de inventario de restaurantes por recetas y sector público con registro presupuestal como llave.
- [I] Calendario tributario con alertas (el calendario por empresa ya existe) y monitoreo de errores en el panel del superadministrador.
- [I] Paquetes por módulo y cambio de modelo de cobro: en discusión, ver `precios`.

## Cómo responder sobre fechas
- [I] No hay fechas comprometidas: no las des a usuarios ni prospectos.
- [I] A un prospecto se le dice qué está disponible hoy y que lo demás "está en evaluación"; si lo pide, se anota para priorizarlo.
- [I] El 31/07 el equipo acordó dedicarse casi solo a causaciones hasta mediados de agosto; hoy facturación electrónica, nómina y Tesorería ya están disponibles.
