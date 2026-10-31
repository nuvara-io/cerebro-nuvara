# Facturas de venta, retenciones particulares y autorretención

## Objetivo
Causar las facturas de venta de una empresa y aplicar las retenciones que sus compradores le practican (ReteICA, autorretención, tasas especiales).

## Requisitos
- Empresa creada con sus cuentas de venta importadas (flujo 01).
- Conocer las retenciones que cada comprador aplica y las sedes o ciudades de prestación del servicio.
- Facturas de venta descargadas de la DIAN (historial de facturas **enviadas**) o del correo.

## Pasos
1. Descarga las ventas desde la DIAN en el historial de facturas recibidas y enviadas, **mes a mes**; no intentes traer volúmenes enormes de una sola vez.
2. Entra a la sección de **ventas** de Causaciones. Allí se configuran las retenciones particulares: ReteICA, estampillas o retenciones que exigen ciertas instituciones.
3. Elige si la regla aplica **en general** o **solo a un comprador específico**.
4. Para ReteICA, define la tarifa según la **ciudad o sede** donde se presta el servicio. Si la empresa opera en pocas sedes, simplifica y maneja solo esas.
5. Para detectar el servicio, puedes usar la **detección de palabras clave** de la descripción (por ejemplo "mantenimiento" o "servicios") y asociar a cada una su tarifa y su cuenta.
6. Para la **autorretención**, configura la tasa y las cuentas débito y crédito. Se calcula sobre el valor **antes de IVA**.
7. Si algún comprador trae un impuesto adicional (por ejemplo, una tasa fija sobre la factura), agrega una **línea de gasto adicional** con su cuenta.
8. Causa, revisa con el ícono de ojo y aprueba como en el flujo 05.

## Errores comunes
- Aplicar la autorretención de forma masiva y que solo se aplique a una cuenta: revisa grupo por grupo.
- Compradores que cambian la retención arbitrariamente entre facturas (por ejemplo 2,5 % a 4 %): obliga a revisar factura por factura.
- Tarifas de ReteICA con muchos decimales: el campo tiene limitaciones de decimales.
- Longitud de cuenta no válida al editar el nombre de una cuenta: cambiar en Administración la configuración de dígitos (de "mixta" a un número fijo, por ejemplo 12) y revisar cómo se importó el plan de cuentas.
- Diferencias entre el número de ventas de la DIAN y las que muestra la plataforma: núvara está pensado principalmente para compras; pide soporte con el archivo y el token.
- Las ventas que llegan por correo o DIAN **también consumen créditos** al precausar aunque no las necesites (ver `por-confirmar.md`).

## Tips del asesor
- Si las ventas ya estaban cargadas y cambiaste la configuración, **elimina y vuelve a sincronizar** con la DIAN los meses afectados.
- Una factura de venta cuesta menos créditos que una de compra porque usa menos interpretación (ver `flujos/12-creditos-y-recargas.md`).
- Las tarifas y bases de retención cambian por norma: confirma con el contador antes de fijarlas.
