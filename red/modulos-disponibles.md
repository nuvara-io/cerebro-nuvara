---
id: modulos-disponibles
titulo: Módulos disponibles
publico: P
actualizado: 2026-11-02
conexiones:
  - nomina                             # cómo funciona la nómina
  - facturacion-electronica-y-radian   # cómo funciona la facturación electrónica
  - conciliacion-bancaria              # cómo se concilia el banco
  - tesoreria                          # bancos, cobros, pagos y cajas
  - app-movil                          # acceso desde el celular
  - exportacion                        # cómo se lleva al programa contable
  - precios                            # precio de un módulo
  - hoja-de-ruta                       # solo I: cuándo sale un módulo en desarrollo
fuentes:
  - conocimiento/producto.md#módulos-y-capacidades
  - conocimiento/producto.md#mapa-de-menús-y-pantallas
  - conocimiento/sitio-web.md#otros-módulos-que-anuncia-el-sitio
  - red/facturacion-electronica-y-radian.md
  - red/nomina.md
  - red/tesoreria.md
  - red/exportacion.md
  - platform@5241b3430   # Cuenta › Módulos (module-catalog.ts), sidebar e Integraciones
---

# Módulos disponibles

Qué hace núvara hoy, módulo por módulo. La causación viene con la cuenta; facturación electrónica, nómina, tesorería y caja se activan aparte en **Cuenta › Módulos**.

## Qué módulos y servicios tiene núvara
- [P] **Causación** de compras y ventas: viene con la cuenta. Aparte de la causación hay más módulos y servicios, que se activan por separado:
- [P] **Facturación electrónica y RADIAN**: emitir documentos electrónicos ante la DIAN.
- [P] **Nómina**: empleados, liquidación, nómina electrónica y PILA.
- [P] **Tesorería** y **Caja**: bancos, cobros, pagos, conciliación bancaria y cajas.
- [P] **Exportación** al programa contable: por archivo o con envío directo a Siigo Nube.
- [P] **App móvil**: aprobar pagos, enviar comprobantes y registrar gastos de caja desde el celular.
- [P] **Informes contables**: balance, estado de resultados y libros.

## Causación de compras y ventas
- [P] Trae las facturas de la DIAN y del correo, y prepara cada causación con tu plan de cuentas, tus reglas y el historial del proveedor.
- [P] Incluye IVA y retenciones, centros de costo, aprendizaje de tus correcciones, reglas fijas, aprobación en bloque y comparación con la DIAN.
- [P] También causa notas crédito y débito, documentos soporte y facturas del exterior por legalización de gastos.
- [P] Está en el menú **Operaciones**: Causaciones, Exportar, Archivo, Correcciones y Legalización de gastos, entre otros.

## Facturación electrónica y RADIAN
- [P] Emites factura de venta con sus notas crédito y débito, documento soporte con su nota y nómina electrónica, y registras los eventos RADIAN de las facturas que recibes.
- [P] Se paga con paquetes anuales desde $150.000 por 30 documentos, con el certificado digital incluido.
- [P] núvara no emite POS (documento equivalente).
- [P] Cómo funciona por dentro: `facturacion-electronica-y-radian`.

## Nómina
- [P] Empleados, novedades, liquidación quincenal o mensual, prestaciones, liquidación de contratos, nómina electrónica, planillas PILA y causación de la nómina.
- [P] Se activa en **Cuenta › Módulos › Nómina › Activar**, eligiendo cupos de empleados; solo un administrador puede activarla.
- [P] Se cobra un valor anual por tramo de empleados; incluye el certificado digital, el mismo de la facturación electrónica.
- [P] Cómo funciona por dentro: `nomina`.

## Tesorería y Caja
- [P] **Tesorería**: cuentas bancarias, cuentas por cobrar y por pagar, pagos a proveedores, pago de nómina y conciliación bancaria con extractos de Bancolombia, Davivienda o Nu, o en CSV.
- [P] **Caja**: cajas operativas y menores, arqueos y movimientos de efectivo. Es un módulo aparte.
- [P] Las dos las activa el equipo de núvara: se piden en **Cuenta › Módulos** con **Solicitar habilitación** y se cobran según el acuerdo que se pacte.
- [P] Cómo funcionan por dentro: `tesoreria` y `conciliacion-bancaria`.

## Exportación al programa contable
- [P] Por archivo para Siigo, World Office, Alegra, Contai, Helisa y otros, o con envío directo a Siigo Nube.
- [P] La nómina todavía no se exporta al programa contable.
- [P] Cómo se hace: `exportacion` y `integraciones`.

## Informes contables
- [P] En el menú **Informes › Informes contables**: balance general, estado de resultados, libro diario, libro mayor, libro auxiliar y control de consecutivos, a partir de lo que registras en núvara.

## Otras funciones
- [P] **Inventario**: se enciende por empresa en **Configuración › Operación › Inventario**. Con Siigo trae bodegas y productos y deja aprobar productos nuevos.
- [P] **Impuestos**: calendario de vencimientos tributarios de cada empresa, en **Administración › Impuestos**.
- [P] **Revisión contable**: una cola mensual para revisar y aprobar el asiento de cada factura causada, con devoluciones al contador. Se enciende en **Configuración › Operación › Revisión contable**.
- [P] **Proveedores**, **Centros de costo** y **Anticipos**, en **Administración**.

## Dónde se activan los módulos
- [P] En **Cuenta › Módulos** hay una tarjeta por módulo de la empresa, con su estado (**Activo**, **Pendiente**, **No activo** o que requiere habilitación del equipo), cómo se cobra y su botón.
- [P] Nómina la activa un administrador con **Activar**; facturación electrónica se activa o se sigue con **Ver solicitud**; Tesorería y Caja se piden con **Solicitar habilitación**, que abre el chat con el equipo.
- [P] El menú de un módulo aparece en la barra lateral cuando el módulo está activo.

## Para el equipo
- [C] **Presupuesto público**: módulo para entidades públicas, con sincronización SIADOC, que habilita el equipo por acuerdo. Reemplaza el menú Operaciones por **Ejecución presupuestal**. No lo ofrezcas sin hablar con el equipo.
- [C] **Certificados de retención** e **Información exógena** aparecen en **Informes** para administrador, contador y operador. Confirma su alcance con el equipo antes de ofrecerlos.
- [I] **En desarrollo o detrás de una activación, no se ofrecen:** informes de gerencia (Compras por rubro, Productos y precios, Costos que se mueven, resumen hecho con inteligencia artificial) detrás de `managementReportsHub`; inventario con World Office (lee el catálogo, todavía no escribe); envío a Alegra, Contai y Helisa por API (la interfaz los anuncia como próximamente); exportación contable de la nómina (`FEATURE_PAYROLL_ACCOUNTING_ENABLED`).
- [I] **Sigue en pruebas o como idea:** cajas menores con foto del comprobante por chat, escaneo de facturas físicas, aprendizaje masivo e inteligencia de compras fuera del hub de informes.
- [I] La tarjeta de facturación electrónica dice que cada documento "consume" la unidad con su nombre viejo y el estado "Requiere habilitación" escribe la marca con mayúscula; hay que pasarlo a créditos y a núvara.
- [I] Diferencia con `conocimiento/`: `producto.md` pone los informes como "en desarrollo", pero **Informes contables** está en el menú para todos, sin activación. Gana el código.
