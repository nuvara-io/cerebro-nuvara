# Facturación electrónica de venta y eventos RADIAN

## Estado: en desarrollo, no la presentes como disponible
- **Facturación electrónica de venta:** el sitio oficial la anuncia ("desde un chat"). En las sesiones apareció como módulo en diseño o en pruebas, y la descripción detallada viene de una sola sesión interna (abril de 2026) que también comparaba con un módulo de referencia. No hay confirmación de que hoy se pueda emitir desde núvara (ver `por-confirmar.md`).
- **Eventos RADIAN (acuse de recibo y otros):** se identificó como necesidad frecuente de los usuarios; una sesión acordó filtrarlos de la importación y otra los ubica como parte de la facturación electrónica. Disponibilidad sin confirmar (ver `por-confirmar.md`).
- Los pasos de abajo describen **cómo está planteado el módulo**, no cómo funciona hoy.
- Lo que sí existe hoy es la **causación de las ventas** ya emitidas (flujo 05) y el tratamiento de notas crédito y documentos soporte (flujo 13).

<!-- fuentes: h-6518cb30d010 -->

## Objetivo
Emitir facturas electrónicas de venta que viajen a la DIAN y gestionar los eventos RADIAN, para que el costo de quien compra sea deducible, todo desde la plataforma.

## Requisitos (según lo planteado)
- Empresa habilitada ante la DIAN para facturar electrónicamente.
- Terceros (compradores) y productos o servicios creados, con su IVA correcto.
- Un rol de acceso: no cualquier usuario debería poder emitir facturas.

## Pasos: emitir una factura de venta (planteado, en desarrollo)
1. Elige si es de **crédito o de contado**. Márcalo bien: de eso depende que el comprador deba hacer el acuse de recibido.
2. Busca al comprador por NIT o cédula. Si no existe, se crea el tercero en el momento.
3. Elige producto o servicio, cantidad y precio. El precio puede ser editable (servicios con honorarios variables) o venir fijo de la compra más la rentabilidad definida (productos con inventario).
4. La **fecha** de la factura electrónica es siempre la del día en que se genera; no se puede poner una anterior.
5. **IVA:** grava el producto o servicio, no a la persona. La plataforma lo calcula solo si quien factura es responsable de IVA. Hay dos formas de presentarlo, incluido en el precio o discriminado aparte; se prefiere discriminado. Para un contribuyente del régimen simple responsable de IVA, la factura ofrece calcular la retención de IVA.
6. **Retenciones de venta** (fuente, ICA, rete IVA): se calculan según lo parametrizado en el tercero comprador (tipo de renta, régimen de ICA, actividad), solo si es agente retenedor y la base supera el tope.
7. **Medios de pago múltiples** en una misma factura: parte en efectivo, parte por banco, parte a crédito.
8. Usa la casilla de **notas** para observaciones. Al registrar, la factura viaja automáticamente a la DIAN.

## Tablas de referencia (planteadas)
- Tabla maestra de NIT (datos idénticos al RUT), tabla de clientes (plazo, cupo de crédito, lista de precios) y proveedores (básica, casi no se usa).
- Un mismo comprador puede crearse varias veces con códigos distintos (por ejemplo, cada sede) para saber a dónde va cada pedido y dar precios o plazos diferentes; equivale a centros de costo del lado del comprador.
- Con **lista de precios** por cliente no hay que editar el precio a mano en facturas de muchos ítems; con **cupo de crédito** se bloquea facturar si la cartera supera el límite.

<!-- fuentes: h-6518cb30d010 -->

## Eventos RADIAN
1. Los eventos (acuse de recibo, etc.) deben hacerse para que la DIAN reconozca el costo como **deducible**. Si no se hacen, en una fiscalización pueden desconocer el costo, porque la DIAN ve en su base de datos si hubo acuse.
2. En la DIAN aparecen como documentos en cero con tipo **"aplicación de respuesta"**; así sabes si ya se hicieron.
3. Si una factura es a crédito y el comprador necesita tomarla como costo deducible, debe hacer el acuse de recibido.
4. Hay usuarios que saben que deben hacerlos y no los hacen; es una solicitud frecuente que la plataforma los gestione. Esa gestión está en desarrollo.

<!-- fuentes: h-6518cb30d010 -->

## Errores comunes
- Facturar a crédito cuando fue de contado (o al revés): afecta el acuse y el costo deducible.
- Crear productos sin IVA porque la empresa hoy no es responsable; cuando pase a serlo hay que recrear la base.
- Usar **remisiones** como si fueran ventas: son documentos internos que descuentan inventario, pero no se transmiten a la DIAN ni generan contabilidad, y su uso indebido es delicado ante auditorías.

## Tips del asesor
- Crea los productos con su **IVA correcto desde el inicio**, aunque la empresa hoy no sea responsable.
- Controla el acceso por rol para emitir facturas.
- Revisa en la DIAN los documentos "aplicación de respuesta" para saber si los eventos ya se hicieron.

<!-- fuentes: h-6518cb30d010 -->
