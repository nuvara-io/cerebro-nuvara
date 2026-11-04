---
id: exportacion
titulo: Exportación al software contable
publico: P
actualizado: 2026-11-02
conexiones:
  - archivar-aprobadas      # lo archivado es lo que sale
  - inventario-y-productos  # productos y bodegas en la exportación
  - tesoreria               # egresos e ingresos
fuentes:
  - conocimiento/flujos/10-exportar-a-siigo-y-otros.md
  - conocimiento/flujos/16-exportar-a-world-office-y-siigo-escritorio.md
  - platform@5241b3430
---

# Exportación al software contable

Llevar al programa contable lo que causaste en núvara: por archivo para cualquier programa, o con envío directo para Siigo Nube. núvara prepara el archivo o el envío; tú revisas y lo cargas.

## Qué se puede exportar
- [P] **Compras**: facturas de compra, notas crédito y débito, documentos soporte y documentos equivalentes ya causados.
- [P] **Ventas** causadas.
- [P] **Egresos e ingresos** de Tesorería: el formato ya está listo para Siigo y Contai, y para otro programa lo generamos.
- [P] La nómina todavía no se exporta al programa contable.

## Las dos vías
- [P] **Archivo**: núvara arma el Excel con el formato de tu programa y tú lo importas allá. Sirve para todos los programas.
- [P] Si el formato de tu programa aún no existe, lo generamos: escríbele al equipo.
- [P] **Envío directo a Siigo Nube**: conectas Siigo una vez y envías el mes desde el Archivo. Solo van compras y notas archivadas; las ventas salen por archivo.
- [P] **World Office** sale por archivo. La conexión por token de World Office hoy solo lee el catálogo y valida; todavía no envía documentos.

## Programas y formatos
- [P] Por archivo: Siigo Nube, Siigo Contador, Siigo Pyme, World Office, Alegra (comprobante o facturas de proveedor), Contai, Helisa, Avansys, SEDI y una plantilla **Genérico** para formatos propios.
- [P] Todos salen en Excel, menos Avansys, que sale en CSV. Los archivos de Siigo se parten de a 500 filas y llegan en un .zip.
- [C] SINCO y Distribuciones Riogrande son formatos a medida que se activan por empresa en **Configuración › Operación › Exportación**.

## Qué entra en una exportación
- [P] Las causaciones **aprobadas o archivadas** del mes que eliges; si abres la exportación desde el Archivo, solo las archivadas. Se exporta un mes a la vez.
- [P] Cada exportación queda como un **lote** numerado en el historial, con su archivo para volver a descargarlo.
- [P] Puedes volver a exportar algo que ya salió: núvara te avisa en qué lote salió y crea uno nuevo.

## Dónde está en la plataforma
- [P] **Operaciones › Exportar**: el asistente para armar el archivo.
- [P] **Operaciones › Archivo**: la **Biblioteca** (lo que hay por mes y si ya salió) y el **Historial** (los lotes).
- [P] **Administración › Configuración › Integraciones**, sección **Sistema contable externo**: eliges tu programa y conectas Siigo Nube.

## Errores comunes al importar
- [P] **La cuenta no existe** en el programa: núvara crea terceros, no cuentas. Créala allá o cámbiala en la causación y vuelve a exportar.
- [P] **Faltan terceros**: importa primero el maestro de terceros y después las causaciones.
- [P] **El comprobante ya existe**: ya lo habías cargado; solo faltan los rechazados.
- [P] **Centro de costo o código de impuesto con otro formato**: corrígelo en el Excel antes de importar y prueba primero con una sola factura.
- [P] Casi todos los rechazos vienen de cómo está configurado el programa contable, no del archivo.

## Para el equipo
- [C] La página de integraciones anuncia Alegra, Contai y Helisa por API como próximamente, sin fecha. Hoy salen por archivo.
- [I] El envío automático a Siigo al aprobar existe pero está apagado (`ACCOUNTING_AUTO_PUSH_ON_APPROVE`).
- [I] World Office por API está fijo en solo validación (`VALIDATION_ONLY`, `canWrite=false`); escribir devuelve `WORLD_OFFICE_CAPABILITY_DENIED`.
- [I] La numeración por programa contable depende de `ERP_VOUCHER_TYPES_ENABLED_COMPANIES`, apagada si no se configura. La exportación contable de la nómina no está construida (`FEATURE_PAYROLL_ACCOUNTING_ENABLED` muestra un grupo vacío).
- [I] En el código no hay cobro de créditos por exportar ni por enviar a Siigo.
- [I] La integración con TNS es para presupuesto público (sale con `public_budget`), no es una exportación contable.
- [I] La pantalla del Archivo y la numeración escriben la marca con mayúscula; hay que pasarlo a núvara.
