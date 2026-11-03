---
id: facturacion-electronica-y-radian
titulo: Facturación electrónica y RADIAN
publico: P
actualizado: 2026-11-02
conexiones:
  - precios                 # habilitación y cobro por documento
  - nomina                  # la nómina electrónica sale de la misma habilitación
  - notas-credito-y-documento-soporte
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@6fdbceaba     # verificado en el código el 02/11/2026
---

# Facturación electrónica y RADIAN

Emitir documentos electrónicos ante la DIAN desde núvara y registrar los eventos RADIAN de las facturas que recibes.

## Qué puedes emitir
- [P] **Factura de venta** y sus **notas crédito y débito**.
- [P] **Documento soporte** (compras a quien no está obligado a facturar) y su **nota crédito**.
- [P] **Eventos RADIAN** sobre las facturas que recibes: acuse de recibo, recibo del bien o servicio, aceptación expresa y reclamo.
- [P] **Nómina electrónica** y sus notas de ajuste.
- [P] núvara **no emite POS** (documento equivalente).

## Cuánto cuesta
- [P] La facturación electrónica es un módulo aparte de la causación: **se cotiza** con el equipo.
- [P] **Habilitación: $150.000, pago único.** Incluye la configuración inicial y la firma digital por un año; luego el certificado se renueva cada año. Cubre todos los tipos de documento: factura de venta y sus notas, documento soporte, eventos RADIAN y nómina electrónica.
- [P] **Cada documento emitido** se descuenta en créditos, con un precio que se cotiza según el volumen de facturación de tu empresa: se pacta un acuerdo de facturas o se descuenta del saldo.
- [P] Las pruebas ante la DIAN no se cobran.

## Cómo se activa
- [P] Se solicita desde **Cuenta › Módulos › Facturación electrónica** o pidiéndolo al equipo, y se paga la habilitación.
- [P] Después, la empresa se habilita ante la DIAN en modo "Software propio" desde **Facturación Electrónica › Ajustes › Configuración › Habilitación DIAN**. Las pruebas las envía la plataforma y no se cobran.

## Dónde está en la plataforma
- [P] Menú **Facturación Electrónica**, que aparece cuando el módulo está activo: **Emitir**, **Legalización de gastos**, **Documentos** (con la pestaña **Eventos RADIAN**), **Productos y servicios**, **Nómina electrónica** y **Ajustes** (Configuración y Estado).

## Quién puede
- [P] Emitir: administrador, operador o contador; los demás roles no emiten.
- [P] Habilitar ante la DIAN y activar RADIAN: administrador.

## Para el equipo
- [C] Retefuente y ReteICA en la factura de venta todavía no tienen pantalla; hoy solo se elige ReteIVA.
- [I] Proveedor tecnológico: APIDIAN (Factura LATAM). El certificado digital lo gestiona el equipo con Nubempresa. El equipo también puede otorgar el módulo por acuerdo interno, sin el pago en línea.
- [I] La plataforma llama «Cliente» al primer paso de la factura y a un rol; por marca, en el chat se dice comprador.
- [I] Las reglas RADIAN automáticas y el cobro de la renovación anual dependen de activaciones del lado de la plataforma.
