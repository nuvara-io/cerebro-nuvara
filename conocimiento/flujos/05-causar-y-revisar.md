# Causar y revisar (precausación)

## Objetivo
Convertir facturas pendientes en causaciones precausadas y revisarlas con confianza.

## Requisitos
- Facturas en **Pendientes**.
- Configuración de la empresa lista (flujo 01) y créditos disponibles.

## Pasos
1. En **Causaciones → Pendientes** elige el periodo y las facturas (filtro por mes y proveedor, o por página).
2. Pulsa **Acciones → causar por lote**. Las facturas pasan a **Precausadas**; en este momento se descuentan los créditos.
3. Abre una factura con el **ícono de ojo**: verás la factura original y la causación al lado, con todo el contexto para decidir si está bien.
4. Verifica que la suma coincida: la función "**todas cuadran**" garantiza que el total a pagar del XML coincide con la cuenta por pagar.
5. Revisa cuentas de gasto, IVA, retenciones y proveedor.
6. Elige la vista: **agrupada** (por juego de cuentas, para revisar muchas de una vez) o **por proveedor** (más control de excepciones).
7. Corrige lo necesario (flujo 06) y aprueba (flujo 08).

## Errores comunes
- No revisar la primera causación de prueba para verificar IVA y cuentas antes de causar todo el lote.
- Mantenimiento nocturno: el cambio global de cuentas puede estar restringido temporalmente.
- Proveedores nuevos mal clasificados la primera vez.

## Tips del asesor
- El primer mes se revisa factura por factura; después la plataforma aprende y se revisa por grupos.
- La plataforma crea el tercero, las cuentas, las asociaciones y los productos si hacen falta.
- Una causación de 140 facturas en una hora y media en la capacitación (cerca de un día de trabajo manual).
- Para cada tipo de documento (nota crédito, factura) puedes cambiarlo desde la vista de detalle y la plataforma recalcula.
