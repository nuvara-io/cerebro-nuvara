# Exportar con archivo plano: World Office y Siigo de escritorio (paso a paso real)

Complementa el flujo 10 con lo observado en sesiones de soporte donde el usuario importa el archivo en su software contable.

> **Actualización (sitio oficial, 31/10/2026):** World Office ya se conecta **por API con token**: importa catálogo y bodegas, mapea productos y exporta compras y ventas, con automatización por proveedor (ver `sitio-web.md`). El archivo plano de abajo queda para quien no use la API. Antes de grabar el tutorial 18 de `ideas-tutoriales.md`, conviene decidir si se reemplaza por "Conectar World Office por API".

## Objetivo
Exportar las causaciones aprobadas y los terceros nuevos, e importarlos sin errores en el software contable.

## Requisitos
- Facturas en **Aprobadas** (o archivadas).
- Saber el **último consecutivo** usado en el software contable.
- Acceso al módulo de importación del software (en Siigo, la tuerca de configuración; en World Office, el centro de exportación/importación).

## Pasos: World Office
1. En núvara elige **exportar por fechas** y activa **exportar terceros**.
2. Define el **consecutivo inicial** con el prefijo del año y mes que uses (por ejemplo "2605" para mayo de 2026).
3. Descarga el archivo y abre la importación en World Office: primero **terceros**, después **comprobantes** con la plantilla de encabezados y detalles.
4. Si el asistente de importación da errores de validación porque el nombre de la empresa no coincide, edita el archivo para que la sigla sea **idéntica** a la configurada.
5. Si necesitas que el detalle del ítem llegue al software, importa **dos archivos**: uno con la contabilización y otro con los **movimientos de inventario** (ítems). Rellena la columna de detalle vacía con la descripción del ítem y mantén cerrados los archivos de Excel.
6. Haz primero una prueba con **una sola factura**; luego importa el lote.
7. Si el software marca errores por NIT faltante, corrige los terceros antes de importar.

## Pasos: Siigo de escritorio
1. En núvara exporta las causaciones por fechas y por terceros.
2. En Siigo: tuerca superior derecha → opción de **importación de terceros** (proveedores y otros) y carga el archivo.
3. Crea o confirma el **comprobante de compra** (por ejemplo, uno nuevo llamado "factura de compra" con prefijo propio) y otro para **notas crédito**.
4. Importa los comprobantes desde **Contabilidad → importación de comprobantes contables**.
5. Los códigos de impuestos se encuentran en tuerca → Contabilidad → Impuestos.
6. Usa el **consecutivo real** del comprobante, no el número de la factura del proveedor.

## Errores comunes
- Archivo abierto en otra aplicación al importar.
- Cuentas que no existen en el plan de cuentas del software.
- Terceros no creados o con tipo/NIT incorrecto.
- Retenciones duplicadas por reglas aplicadas dos veces.
- Importación lenta o error de servidor del software: reintentar.
- Saltos en la numeración del archivo: corregir todo el archivo para evitar huecos.

## Tips del asesor
- Exporta solo lo **contabilizado**; los borradores que ya se hicieron a mano se excluyen.
- Los **anticipos** pueden exportarse aparte o manejarse manualmente.
- Antes del cierre del mes haz una **exportación de prueba** para revisar la configuración.
- "La importación depende de la configuración de cada usuario en el software contable."
