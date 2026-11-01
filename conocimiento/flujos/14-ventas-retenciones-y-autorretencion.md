# Facturas de venta, retenciones particulares y autorretención

## Objetivo
Causar las facturas de venta de una empresa y aplicar las retenciones que sus compradores le practican (ReteICA, autorretención, tasas especiales).

## Requisitos
- Empresa creada con sus cuentas de venta importadas (flujo 01).
- Conocer las retenciones que cada comprador aplica y las sedes o ciudades de prestación del servicio.
- Facturas de venta descargadas de la DIAN (historial de facturas **enviadas**) o del correo.
<!-- fuentes: h-6518cb30d010 -->

## Contexto: qué lugar ocupan las ventas
- El foco de núvara es la causación de **compras**, por su complejidad tributaria. Las ventas se causan, pero muchas empresas ya las tienen contabilizadas en el software donde facturan; ahí núvara las usa para conciliación y trazabilidad.
- Las ventas suelen ir a varias cuentas de ingresos (grupos 41 y 42), por eso su causación pide más trabajo que la de compras. Hasta abril de 2026 el equipo aún debía pulirla.
- **Precio:** causar una venta cuesta **$200** (2 créditos), menos que una compra porque usa menos interpretación.
- Quien compra es quien está obligado a practicar y causar la retención (fuente, ReteICA, ReteIVA). Al vender, lo importante es que se calcule bien el valor bruto y el IVA, y las retenciones que te practican se parametrizan en el tercero cuando es agente retenedor.
- Cuentas: el ingreso va en clase 4 y su contrapartida en deudores del grupo 13 (clientes, 1305), que es "todo lo que me deben". Las retenciones que te practican y los saldos a favor de renta, IVA o industria y comercio también van al grupo 13. Las retenciones que tú practicas en compras van a pasivo (clase 2). El IVA generado se usa en ventas; el descontable, en compras. Las devoluciones de servicios son notas crédito de facturas de venta.
- Los anticipos que das a un proveedor antes de recibir factura se llevan a deudores (13), no al gasto. Los préstamos a empleados no llegan en factura: son documentos internos.
<!-- fuentes: h-3a9a315786c4, h-364a64863009, h-f8436a675e52, h-1b5ddf9047dc, h-6518cb30d010, h-66eba239a3cb, h-92777206d505 -->

## Pasos
1. Descarga las ventas desde la DIAN en el historial de facturas recibidas y enviadas, **mes a mes**; no intentes traer volúmenes enormes de una sola vez. Cuando hay muchos impuestos o retenciones por comprador, o cientos de facturas variadas, existe un servicio donde montas la plantilla que necesitas y la descargas lista en unos 20 minutos; el asesor dijo que va incluido en el soporte. Para ventas a consumidor final con plantilla estándar el proceso es más simple.
2. Entra a la sección de **ventas** de Causaciones. Allí se configuran las retenciones particulares: ReteICA, estampillas o retenciones que exigen ciertas instituciones.
3. Elige si la regla aplica **en general** o **solo a un comprador específico**.
4. Para ReteICA, define la tarifa según la **ciudad o sede** donde se presta el servicio. Si la empresa opera en pocas sedes, simplifica y maneja solo esas. La lógica de ReteICA por reglas se terminó a finales de julio de 2026 (ver `flujos/09-proveedores-retenciones-y-autorretenedores.md`).
5. Para detectar el servicio, puedes usar la **detección de palabras clave** de la descripción (por ejemplo "mantenimiento" o "servicios") y asociar a cada una su tarifa y su cuenta.
6. Para la **autorretención**, configura la tasa y las cuentas débito y crédito. Se calcula sobre el valor **antes de IVA**. La autorretención mensual sobre ventas no viene en ningún documento electrónico, por eso se causa con un registro interno de ajuste. Al vincular retenciones aparecen autorretenciones; omite las que no aplican.
7. Si algún comprador trae un impuesto adicional (por ejemplo, una tasa fija sobre la factura), agrega una **línea de gasto adicional** con su cuenta.
8. Causa, revisa con el ícono de ojo y aprueba como en el flujo 05.
<!-- fuentes: h-040559feec95, h-42d3d6d6ad33, h-6518cb30d010, h-78a6d7ffada0 -->

## Tipos de retención y cómo se eligen
- Hay tres: retención en la fuente (honorarios, servicios, compras, arrendamiento, transporte, etc.), ReteIVA y ReteICA.
- Para las compras, la plataforma usa una tabla de referencia pública con conceptos, porcentajes y topes mínimos; lee los ítems de la factura y el contexto de la empresa, busca la casilla y verifica el tope. Los valores concretos que se citan en las capacitaciones **no son datos de la plataforma: verificar con fuente oficial**. Detalle en `flujos/09-proveedores-retenciones-y-autorretenedores.md`.
- Un usuario que no contabiliza sus compras en su software controlaba la retención descargando facturas a un Excel; con núvara obtiene las retenciones de las compras automáticamente.
- Parametriza las retenciones por tipo de transacción: la naturaleza (débito o crédito) cambia si es factura o nota crédito.
<!-- fuentes: h-e46ab47fa162, h-78a6d7ffada0, h-a8886865ddfd -->

## IVA en la configuración tributaria
- En Tributaria puedes sumar el IVA al gasto; usar cuenta hermana (IVA desglosado por gasto); usar una cuenta de IVA no descontable genérica; mapear por grupos de gasto (por ejemplo todo lo de la 61 a una cuenta de IVA); o capitalizar el IVA al inventario.
- Para facturas mixtas gravadas y no gravadas hay una opción que separa siempre las bases (no gravado, 5 %, 19 %) en cuentas distintas.
- Quien no retiene y lleva el IVA de las compras como mayor valor del gasto o costo (no descontable) lo configura con una regla en Administración → Configuración. El IVA descontable queda vinculado al "IVA mayor valor del costo y gasto".
- La configuración **no se puede copiar** de una empresa a otra; hay que reconfigurarla. "Descartar" en la pantalla de IVA no pierde lo guardado antes.
<!-- fuentes: h-e4a57c41cb5c, h-8072227e99ae, h-85f50952dea3 -->

## Errores comunes
- Aplicar la autorretención de forma masiva y que solo se aplique a una cuenta: revisa grupo por grupo.
- Compradores que cambian la retención arbitrariamente entre facturas: obliga a revisar factura por factura.
- Tarifas de ReteICA con muchos decimales: el campo tiene limitaciones de decimales.
- Longitud de cuenta no válida al editar el nombre de una cuenta: cambiar en Administración la configuración de dígitos (de "mixta" a un número fijo, por ejemplo 12) y revisar cómo se importó el plan de cuentas.
- Diferencias entre el número de ventas de la DIAN y las que muestra la plataforma: núvara está pensado principalmente para compras; pide soporte con el archivo y el token.
- Las ventas que llegan por correo o DIAN **también consumen créditos** al precausar aunque no las necesites (ver `por-confirmar.md`).
<!-- fuentes: h-f8436a675e52, h-3a9a315786c4 -->

## Tips del asesor
- Si las ventas ya estaban cargadas y cambiaste la configuración, **elimina y vuelve a sincronizar** con la DIAN los meses afectados.
- Una factura de venta cuesta menos créditos que una de compra (ver `flujos/12-creditos-y-recargas.md`).
- Las tarifas y bases de retención cambian por norma: confirma con el contador y con fuente oficial antes de fijarlas.
- En la factura de venta, el tercero comprador se crea desde los datos del documento, igual que el proveedor en compras.
<!-- fuentes: h-1b5ddf9047dc, h-ef76153985c0 -->
