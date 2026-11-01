# Glosario

## Contables y tributarios

| Término | Definición breve (como se usó) |
|---|---|
| Causación | Registro contable de una factura de compra en el momento en que se genera la obligación. |
| Precausación | Causación sugerida por la plataforma, pendiente de revisión y aprobación. |
| Asiento contable | Conjunto de débitos y créditos que resulta de causar un documento. |
| PUC | Plan Único de Cuentas; las cuentas (51, 52, 14, 22, 23, 2408, 74...) se mencionan por su código. |
| Balance de prueba por tercero | Reporte del software contable con saldos por cuenta y tercero; alimenta el perfil de la empresa. |
| Auxiliar por proveedor | Manejo de cuentas por pagar (22 y 23) detallado por proveedor. |
| IVA descontable | IVA de compras que se puede descontar; suele llevarse a la cuenta 2408. |
| IVA como mayor valor del gasto | Cuando el IVA no se descuenta y se suma al costo o gasto. |
| Retención en la fuente (ReteFuente) | Retención de renta aplicada al pagar según base y concepto. |
| ReteICA | Retención del Impuesto de Industria y Comercio; se agrega manualmente en la causación. |
| ReteIVA | Retención sobre el IVA. |
| Autorretenedor | Contribuyente que se retiene a sí mismo; no se le retiene. |
| Gran contribuyente | Calificación tributaria que cambia el tratamiento de retenciones. |
| Régimen Simple | Régimen tributario donde la plataforma no detecta todas las retenciones. |
| Impuesto al consumo | Impuesto distinto al IVA (por ejemplo, 8 %) que se lleva a cuenta propia. |
| Impuestos asumidos | Impuestos que la empresa asume; requieren ajuste manual de líneas. |
| Centro de costo / subcentro | Dimensión para clasificar gastos por proyecto o área; el subcentro hereda reglas. |
| Nota crédito | Documento que ajusta o anula parcialmente una factura; la DIAN lo trata como documento aparte. |
| Documento soporte | Documento que se genera para compras a no obligados a facturar. |
| Comprobante de compra (FC, CC) | Tipo de comprobante en el software contable para registrar compras. |
| Consecutivo | Número secuencial del comprobante; debe indicarse al exportar. |
| Prefijo | Letras que anteceden el consecutivo; se unificó en uno global en un caso. |
| Autorretención / autorrenta | Retención que la empresa se practica a sí misma sobre sus ventas (tasa y cuentas configurables, calculada antes de IVA). |
| Retenciones particulares | Retenciones específicas de un comprador o institución (ReteICA, estampillas), en general o por comprador. |
| Tasa o impuesto especial | Cobro adicional sobre una factura de venta (por ejemplo, un porcentaje fijo) que se lleva como línea de gasto. |
| Impoconsumo | Impuesto al consumo (por ejemplo, en restaurantes). |
| TRM | Tasa representativa del mercado, usada para convertir gastos en moneda extranjera. |
| Legalización de gastos | Módulo para soportar gastos (por ejemplo de viaje) que no vienen de la DIAN. |
| Importación manual | Carga de PDF, XML o zip para soportes que no llegan por correo ni DIAN. |
| Papelera | Lugar donde quedan las facturas eliminadas para que no se restauren solas. |
| Bloqueo de facturas | Opción para que ciertas facturas no se descarguen. |
| Fusionar cuentas / cambio de cuenta en lote | Herramientas para unir cuentas o reemplazar una cuenta en muchas facturas. |
| IMAP / contraseña de aplicación | Forma de conectar un correo cuando no es Gmail estándar o falla la autorización. |
| Consecutivo estricto | Ajuste de envío a Siigo que evita saltos y pausa el envío ante errores. |
| Detalle por producto | Ajuste de envío que manda cada ítem al software contable. |
| Consumo mínimo mensual | Cobro mínimo mensual planteado desde el segundo mes (ver `por-confirmar.md`). |
| Recarga inicial | Primera compra de créditos; incluye la capacitación. |
| Recarga mínima | El valor más bajo que se puede recargar: 80.000 COP. |
| PILA | Planilla integrada de aportes a la seguridad social, generada por el módulo de nómina. |
| Nómina electrónica | Documento de nómina que se emite a la DIAN. |
| Perfiles de cargo | Agrupaciones de empleados (administrativo, operativo, producción) con su actividad ARL. |
| Rubro presupuestal | Clasificación del gasto por convenio en entidades públicas. |
| CDP | Certificado de disponibilidad presupuestal (entidades públicas). |
| Radicado | Número de ingreso de un documento en gestión documental; usado como identificador. |
| Caja menor | Fondo de gastos con un único custodio, en diseño. |
| Enrutar a banco | Causar la factura contra una cuenta bancaria para que figure como pagada de inmediato. |

## DIAN

| Término | Definición breve |
|---|---|
| DIAN | Dirección de Impuestos y Aduanas Nacionales. |
| RUT | Registro Único Tributario; de ahí salen NIT y responsabilidades. |
| NIT | Número de Identificación Tributaria. |
| Calendario tributario | Obligaciones y fechas derivadas de las responsabilidades del RUT. |
| Token DIAN | Código de acceso temporal que permite descargar documentos del portal. |
| Documentos recibidos | Sección de la DIAN con las facturas de compra. |
| CUFE | Código único de la factura electrónica. |
| RADIAN / eventos | Eventos de aceptación de facturas de crédito; se mencionó que su soporte en núvara se habilitaría más adelante. |

## De la plataforma

| Término | Definición breve |
|---|---|
| Pendiente / Precausada / Causada / Aprobada / Exportada | Estados de la factura. |
| Archivadas | Facturas aprobadas ya enviadas, ordenadas por año y mes. |
| Vista agrupada | Agrupa facturas por juego de cuentas. |
| Causación idéntica | Filtro de facturas con la misma causación. |
| Recausar | Recalcular un grupo tras cambios. |
| Historial aprendido | Correcciones guardadas por la plataforma. |
| Regla fija | Regla con condiciones que agrega o reemplaza líneas. |
| Extensión de navegador | Complemento de Chrome para descargar de la DIAN. |
| Alianzas | Sección con credenciales de API del software contable. |
| Billetera | Saldo de créditos. |
| Créditos | Unidad de cobro por uso. |
| Nuvi | Mascota de núvara. |
