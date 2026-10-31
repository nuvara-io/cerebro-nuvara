# Notas crédito y documentos soporte

## Objetivo
Tratar correctamente notas crédito y documentos soporte dentro del flujo.

## Pasos: notas crédito
1. La plataforma detecta las notas crédito.
2. En la causación, usa el campo habilitado para **relacionarla con la factura original**.
3. La DIAN las trata como documentos independientes y refleja el valor bruto; los descuentos se aplican contablemente al emitir el comprobante de pago.
4. Si se necesita, cambia el tipo de documento desde la vista de detalle y la plataforma recalcula.

## Pasos: documentos soporte
1. Descárgalos desde el portal de la DIAN (filtra y toma el CUFE o la carpeta comprimida).
2. Cárgalos en núvara.
3. Configura el comprobante de compra para integrarlos junto con las facturas.

## Más detalles de sesiones posteriores
- Las notas crédito pueden heredar un **consecutivo equivocado** de la factura en la exportación: usa un tipo de comprobante propio para notas crédito y revisa el consecutivo real.
- Un error en el XML de una nota crédito requirió corrección de la plataforma por parte del equipo.
- Para vincular una nota crédito a su factura, usa la tarjeta o grupo correspondiente.
- **Documentos soporte:** otra sesión afirmó que la plataforma ya los emite como facturador electrónico; hay un módulo de legalización de gastos y emisión masiva en desarrollo (ver flujo 15 y `por-confirmar.md`).
- Los prestadores de servicios no se manejan por nómina sino por **documento soporte**.

## Errores comunes
- Esperar descuentos automáticos de la nota crédito sobre la factura.
- Esperar que el proceso completo de documentos soporte funcione solo en núvara: según una sesión, aún debían causarse y transmitirse en Siigo.

## Tips del asesor
- Algunas notas crédito requieren una revisión específica pero se integran al flujo.
- Se puede agregar una cuenta de descuentos de compras si se quiere reflejar el descuento.
