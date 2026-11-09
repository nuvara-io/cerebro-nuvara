---
id: glosario
titulo: Glosario
publico: P
actualizado: 2026-11-02
conexiones: []
fuentes:
  - conocimiento/glosario.md
  - CLAUDE.md#datos-confirmados-por-el-equipo
---

# Glosario

Qué significa cada término contable, tributario o de la plataforma que aparece en núvara. Cada sección agrupa términos de un mismo tema.

## Causación y asiento contable
- [P] **Causación**: registrar un hecho económico, como una factura de compra o de venta, cuando ocurre y no cuando se paga. Clasifica el gasto o el ingreso con sus cuentas, impuestos y retenciones. La causación es el proceso; el asiento es su resultado.
- [P] **Asiento contable**: el conjunto de débitos y créditos que resulta de causar un documento. Siempre debe cuadrar: la suma de débitos es igual a la de créditos.
- [P] **Contrapartida**: la otra parte del asiento. En una compra es el crédito que dice por dónde se paga o se debe (banco, caja o cuenta por pagar).
- [P] **Descuadre**: diferencia entre el total de la factura y el total causado. Ayuda a detectar impuestos no reconocidos.
- [P] **Devengo**: causar cuando ocurre el hecho, no cuando se paga. Todo pasa primero por cuentas por pagar.
- [P] **Erogación**: salida de dinero a cambio de un bien o servicio recibido.

## El PUC y las cuentas
- [P] **PUC**: Plan Único de Cuentas. El primer dígito va de 1 a 7: 1 activo, 2 pasivo, 3 patrimonio, 4 ingresos, 5 gastos, 6 costos de venta y 7 costos de producción.
- [P] **Naturaleza de la cuenta**: las clases 1, 5, 6 y 7 son de naturaleza débito; las 2, 3 y 4, crédito. El IVA y las retenciones empiezan por 2 porque son obligaciones con el Estado.
- [P] **Cuenta mayor, auxiliar y transaccional**: la mayor son los primeros cuatro dígitos; la auxiliar es la de ocho dígitos donde se registra. Solo las de último nivel (transaccionales) aceptan movimientos.
- [P] **Plan de cuentas**: el catálogo completo de cuentas de la empresa. Se importa cuando usas cuentas nuevas sin movimiento.
- [P] **Balance de prueba por tercero**: reporte del programa contable con saldos por cuenta y tercero. Es lo que núvara pide para conocer las cuentas que usa la empresa y las de cada proveedor.
- [P] **Tercero**: persona o empresa registrada en el programa contable, con su documento, nombre y datos de contacto.

## Gasto, costo e inventario
- [P] **Gasto (clase 5)**: salida de dinero no asociada directamente a la actividad principal, como administración y ventas.
- [P] **Costo (clases 6 y 7)**: salida necesaria y directa para operar. La 6 es para quien compra para revender; la 7, para quien produce un bien o presta un servicio.
- [P] **Inventario (14)**: bienes comprados para vender o transformar. Solo se vuelve costo cuando se vende.
- [P] **Propiedad, planta y equipo (15)**: bienes para producir, no para vender. **Intangibles (16)**: derechos sin forma física, como licencias. **Diferidos (17)**: gastos pagados por anticipado que se amortizan.
- [P] **Centro de costo**: dimensión para clasificar gastos e ingresos por proyecto, área, sede o unidad de negocio.

## IVA
- [P] **IVA descontable**: el IVA de compras que cumple los requisitos de ley para restarse en la declaración. Suele ir a la cuenta 2408.
- [P] **IVA como mayor valor del gasto**: cuando el IVA no es descontable, se suma al gasto, al costo o al inventario.
- [P] **Valor base**: el valor sobre el que se calcula el IVA o la retención.
- [P] **Impuesto al consumo**: impuesto distinto al IVA, propio de restaurantes y bares. No es descontable y va en una cuenta propia, no en la 2408.
- [P] **AIU**: administración, imprevistos y utilidad. Porcentaje sobre el que se calcula el IVA en servicios de aseo, construcción y vigilancia.

## Retenciones
- [P] **Retención en la fuente (ReteFuente)**: retención de renta que se aplica según la base y el concepto. Va a la cuenta 2365.
- [P] **ReteICA**: retención del impuesto de industria y comercio, con tarifa por municipio y actividad. Va a la 2368.
- [P] **ReteIVA**: retención sobre el IVA, calculada sobre el impuesto.
- [P] **UVT**: unidad de valor tributario del año; es la medida de las bases mínimas de retención.
- [P] **Autorretenedor**: contribuyente que se retiene a sí mismo; quien le compra no le practica retención en la fuente.
- [P] **Autorretención**: la retención que la empresa se practica sobre sus propias ventas.

## Documentos y comprobantes
- [P] **Nota crédito**: documento que ajusta o anula parcialmente una factura; la DIAN lo trata como documento aparte. La **nota débito** es su contraparte.
- [P] **Documento soporte**: lo emite quien compra para soportar compras a quien no está obligado a facturar o a proveedores del exterior.
- [P] **Documento equivalente**: soporte tipo tiquete de punto de venta o de peaje; no es factura electrónica.
- [P] **Comprobante**: el tipo de documento contable (factura de compra, recibo de caja, egreso, nota crédito, ajuste), identificado con un código en el programa contable.
- [P] **Consecutivo y prefijo**: el consecutivo es el número secuencial del comprobante; el prefijo son las letras que lo anteceden.
- [P] **Cuenta de cobro**: cobro de quien no factura electrónicamente; se soporta con documento soporte.

## DIAN
- [P] **DIAN**: Dirección de Impuestos y Aduanas Nacionales.
- [P] **RUT**: Registro Único Tributario; de ahí salen el NIT y las responsabilidades de la empresa. **NIT**: número de identificación tributaria.
- [P] **CUFE**: código único de la factura electrónica, su identificador oficial. núvara lo usa para no traer la misma factura dos veces.
- [P] **Documentos recibidos y emitidos**: secciones del portal de la DIAN; en recibidos están las compras y en emitidos, las ventas y los documentos soporte.
- [P] **Token DIAN**: código de acceso temporal para descargar documentos del portal.
- [P] **RADIAN y eventos**: acuses, aceptaciones o reclamos que el comprador registra ante la DIAN sobre una factura recibida.
- [P] **Exógena o medios magnéticos**: reporte anual a la DIAN que consolida la información por cuenta y tercero.

## Estados de una factura en núvara
- [P] **Pendiente**: llegó a núvara y todavía no se causa. No consume créditos.
- [P] **Precausada** (en la plataforma, «Pre-causada»): núvara preparó la causación y la dejó como borrador para que la revises.
- [P] **Aprobada**: la revisaste y la aprobaste.
- [P] **Archivada**: aprobada y guardada en el Archivo por año y mes; es lo que se exporta.
- [P] **Exportada**: ya salió a tu programa contable.
- [P] **Transitoria**: la que está precausada o aprobada y todavía no se archiva.

## Herramientas de la plataforma
- [P] **Precausar**: que núvara prepare la causación de una factura para que la revises.
- [P] **Causar por lote**: causar de una vez las facturas pendientes de un mes o de un rango de fechas.
- [P] **Recausar**: volver a procesar facturas precausadas con las reglas, el balance o el aprendizaje actuales.
- [P] **Historial aprendido**: las correcciones que guardas; se aplican a toda la empresa o solo a ese proveedor.
- [P] **Regla fija**: regla con condiciones (proveedor, centro de costo, texto, monto) que se aplica siempre que se cumplan.
- [P] **Vista agrupada**: agrupa las precausadas por juego de cuentas o por cuenta y proveedor para revisarlas juntas.
- [P] **Papelera**: donde quedan las facturas eliminadas, para que no vuelvan solas y puedas restaurarlas.

## Exportación e inventario
- [P] **Exportación**: llevar a tu programa contable lo que causaste en núvara, por archivo o por envío directo a Siigo.
- [P] **Lote**: cada exportación queda como un lote numerado en el historial.
- [P] **ERP o programa contable**: el programa donde la empresa lleva la contabilidad completa, como Siigo o World Office.
- [P] **Mesa de asociación**: vista de dos columnas que relaciona los productos de las facturas con los productos del inventario.
- [P] **Cardex**: control de cantidades y costo unitario del inventario.
- [P] **Costeo mensual**: proceso de Siigo que recalcula el costo del inventario; si no se corre, los saldos pueden salir negativos.

## Créditos y cobro
- [P] **Créditos**: la unidad de cobro por uso de núvara. 1 crédito equivale a $1 COP.
- [P] **Billetera**: el saldo de créditos de la empresa o de la organización, con su historial de movimientos.
- [P] **Mínimo mensual de consumo**: $80.000 COP que se descuentan del saldo cada mes como mínimo; lo que no alcanzas a consumir de ese mínimo se pierde. No es la recarga mínima.
- [P] **Organización**: la cuenta de una firma contable que agrupa varias empresas.

## Nómina, tesorería y otros
- [P] **PILA**: planilla integrada de aportes a la seguridad social.
- [P] **Nómina electrónica**: el documento de nómina que se emite a la DIAN.
- [P] **Egreso**: documento que cancela una cuenta por pagar contra el banco.
- [P] **Anticipo**: pago adelantado que se aplica después a una factura.
- [P] **Caja menor**: fondo de gastos pequeños pagados al instante, sin factura electrónica.
- [P] **TRM**: tasa representativa del mercado, para convertir valores en moneda extranjera a pesos.
- [P] **Nacionalización**: costos de importación (aranceles, IVA) que cobra el transportista al entregar una compra del exterior.

## Para el equipo
- [C] **CDP, RP y OP** son términos de presupuesto público (disponibilidad, registro y orden de pago). Solo aplican a entidades públicas.
- [C] Los términos de World Office (usuario API, contabilización, tercero interno) están en `exportar-world-office`.
- [I] En las capacitaciones se usaron como sinónimos "Archivadas", "Archivo del mes" y "biblioteca de exportación", y también "papelera", "eliminadas" y "facturas excluidas". En la interfaz actual son **Archivo** y **Papelera**.
- [I] El glosario de `conocimiento/` define "recarga inicial" como la que incluye la capacitación; eso no está confirmado y no se incluye aquí.
