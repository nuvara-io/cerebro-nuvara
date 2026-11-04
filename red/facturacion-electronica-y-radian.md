---
id: facturacion-electronica-y-radian
titulo: Facturación electrónica y RADIAN
publico: P
actualizado: 2026-11-03
conexiones:
  - configuracion-facturacion-electronica  # habilitación, resoluciones y apariencia
  - factura-de-venta-y-notas               # emitir y ajustar ventas
  - documento-soporte-electronico          # compras a no obligados a facturar
  - eventos-radian                         # eventos sobre las facturas que recibes
  - precios                                # habilitación y cobro por documento
  - nomina                                 # la nómina electrónica sale de la misma habilitación
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@5241b3430     # verificado en el código el 03/11/2026
---

# Facturación electrónica y RADIAN

El módulo para emitir documentos electrónicos ante la DIAN desde núvara y registrar los eventos RADIAN de las facturas que recibes. Tiene cuatro partes: habilitación y configuración, factura de venta y notas, documento soporte y eventos RADIAN.

## Qué puedes emitir
- [P] **Factura de venta** y sus **notas crédito y débito**.
- [P] **Documento soporte** (compras a quien no está obligado a facturar) y su **nota de ajuste**.
- [P] **Eventos RADIAN** sobre las facturas que recibes a crédito: acuse de recibo, recibo del bien o servicio, aceptación expresa y reclamo.
- [P] **Nómina electrónica** y sus notas de ajuste, desde el módulo de Nómina.
- [P] Cada empresa emite los tipos de documento que pidió en la habilitación; si te falta uno, pídeselo al equipo.

## Lo que hoy no se emite
- [P] núvara **no emite POS** (documento equivalente) ni factura por contingencia, de exportación, AIU o de mandato.
- [P] En la factura de venta hoy solo se aplica **ReteIVA**; la retención en la fuente y la ReteICA todavía no tienen pantalla. Tampoco hay descuentos o cargos globales ni impuesto al consumo.
- [P] RADIAN cubre los eventos del comprador; los de título valor (inscripción, endoso, aval, mandato) no están.

## Cuánto cuesta
- [P] La facturación electrónica es un módulo aparte de la causación, con precio propio (detalle en `precios`).
- [P] **Habilitación: $150.000 al año.** Incluye la firma digital, la configuración inicial ante la DIAN y 20 documentos electrónicos.
- [P] **Cada documento** (factura, nota, documento soporte o evento RADIAN) se paga con una **bolsa de documentos**, desde $180.000 por 120, o **con créditos**, a $1.500 por documento.
- [P] El saldo se reserva al enviar y se descuenta solo si la DIAN acepta; si rechaza, se devuelve. Las pruebas ante la DIAN no se cobran. Reintentar un documento que falló vuelve a cobrar.

## Dónde está en la plataforma
- [P] Menú **Facturación Electrónica**, que aparece cuando el módulo está activo: **Emitir**, **Legalización de gastos**, **Documentos** (con **Eventos RADIAN**), **Productos y servicios**, **Nómina electrónica** y **Ajustes** (**Configuración** y **Estado**).

## Quién puede
- [P] Emitir, reintentar y reenviar: administrador, operador o contador. El rol de solo lectura consulta y exporta.
- [P] Enviar eventos RADIAN: administrador, operador o contador.
- [P] Habilitar ante la DIAN, pasar a producción y activar RADIAN: solo el administrador de la empresa.

## Para el equipo
- [C] Retefuente y ReteICA en la factura de venta todavía no tienen pantalla; hoy solo se elige ReteIVA. El contexto para implementarlo está en `facturacion-electronica-pendientes`.
- [I] Proveedor tecnológico: APIDIAN (Factura LATAM). El certificado digital lo carga el equipo desde el panel de superadministrador. Los tipos de documento se encienden por empresa (al encender la factura se encienden sus notas; al encender el documento soporte, su nota).
- [I] La plataforma llama «Cliente» al primer paso de la factura y al botón de crear comprador; por marca, en el chat se dice comprador.
