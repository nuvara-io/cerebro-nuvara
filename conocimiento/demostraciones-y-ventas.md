# Demostraciones en vivo y ventas

Basado en reuniones comerciales con contadores independientes, firmas contables y una entidad pública. Las cifras de precios son lo que el asesor dijo en cada sesión y **cambian entre reuniones**: valida en `por-confirmar.md` antes de usarlas en un video o en una respuesta.

## Cómo se estructura una demostración en vivo
1. **Diagnóstico (5 a 10 min):** cuántas empresas, cuántas facturas al mes, qué software contable usa, si tiene auxiliares, qué solución probó antes.
2. **Pantalla compartida con el panel de empresas:** crear y configurar varias empresas de forma independiente.
3. **Entrada de facturas:** correo (en tiempo real) y DIAN (token por empresa y extensión). Se aclara que cada empresa lleva su propio correo.
4. **Estados:** Pendientes, Precausadas, Aprobadas. Se muestra que se puede dejar todo en pendientes para no gastar créditos hasta validar.
5. **Una precausación:** la factura original al lado de la causación; retenciones, ReteICA y ReteIVA calculadas.
6. **Agrupación por similitud** y aprobación por grupos; cómo corregir un ítem y que la plataforma lo memorice.
7. **Envío masivo** al software contable (API o archivo plano) con el indicador verde de que llegó como se causó.
8. **Comparación con la DIAN** para detectar faltantes o NIT mal escritos.
9. **Cierre comercial:** reglas de créditos, capacitación incluida, soporte y siguiente paso (pago y fecha de capacitación).

## Argumentos que resuenan
- **Ahorro de tiempo multiplicado por cada empresa:** un contador independiente con muchas empresas y sin auxiliar lo ve de inmediato.
- **No hay causación a ciegas:** nada se exporta sin revisión y aprobación del contador (protege el consecutivo).
- **Lee el documento sin digitar:** interpreta la factura, no solo la importa.
- **Cálculo de retenciones por bases y conceptos**, incluso varias por factura y acumulación de compras del día.
- **Dos vías de descarga** (correo y DIAN) que se complementan; la DIAN ayuda a evitar bloqueos y captchas de otras soluciones.
- **Capacitación de unas 2 horas** con el primer mes de facturas procesado, más una hora de acompañamiento; sin cláusula de permanencia.
- **Soporte por chat** integrado y por grupo de WhatsApp con respuesta rápida (el asesor habló de menos de 10 minutos).
- **Compatibilidad:** Siigo (incluidas sus versiones en la nube y Pyme), World Office y otros por archivo plano, habilitado en un día hábil.
- **Procesamiento de contabilidades atrasadas** por lotes (se citó haber procesado miles de facturas atrasadas).
- Tarifas por uso, sin pagar por lo que no se causa.

## Perfiles típicos de prospecto (genéricos)
| Perfil | Qué le duele | Qué se le muestra |
|---|---|---|
| Contador independiente con ~15 empresas y sin auxiliar | Falta de tiempo, compras y ventas | Panel multiempresa, estados, aprobación por grupos. |
| Firma contable de pocos años en el mercado | Otra solución con soporte lento, captchas en la DIAN e IVA mal calculado | Descarga por extensión, cálculo de IVA y archivo plano para su software. |
| Contador de dos pequeñas empresas (una sin inventario, otra con inventario) | Valor del mensual frente al volumen | Estados para no gastar créditos, productos asociados al software contable. |
| Empresa grande o entidad pública con cientos de facturas al mes | Causación manual compleja por rubros presupuestales, restricciones del software | Lectura por radicado, XML + PDF, rubros, integración por credenciales. |
| Firma que ya usa nómina/egresos | Conciliaciones y reportes manuales | Módulos de nómina y egresos (en desarrollo / en validación). |

## Preguntas frecuentes de prospectos
- **¿Qué pasa con compras personales que llegan por correo?** Se deja que lleguen a *Pendientes*; no se consumen créditos hasta precausar y se pueden eliminar o bloquear.
- **¿Funciona con inventarios y productos nuevos?** Los productos y cuentas se asocian con el software contable durante la revisión; el detalle de ítems depende de cómo exportes (ver flujo 16).
- **¿Cómo sé que llegó bien al software contable?** Indicador verde por factura; los errores de configuración se reportan al soporte.
- **¿Puedo centralizar facturas de varias empresas en un solo correo?** Sí, la plataforma valida el NIT de cada documento para asignarlo a la empresa correcta.
- **¿Puedo procesar meses atrasados?** Sí, sincronizando correo y DIAN por lotes.
- **¿Me duplica facturas de venta o eventos?** No: nada se exporta sin aprobación; se mencionó filtrar eventos que no son facturas.
- **¿Impuesto al consumo en una empresa que no lo maneja?** Se configura si va al gasto como mayor valor o a una cuenta propia; detecta propinas, retención en combustible y ReteIVA.
- **¿Retenciones particulares en ventas (ReteICA, estampillas)?** Se configuran en general o por comprador.
- **¿Puedo sumar a otro socio que comparte la gestión de empresas?** Sí, se agregan miembros sin costo para tareas contables.
- **¿Hay permanencia?** No.
- **¿Cómo se paga?** Enlace de pago con tarjeta o PSE; transferencia como alternativa si hay demora (ver `por-confirmar.md`).

## Objeciones y respuestas
| Objeción | Cómo se abordó |
|---|---|
| "Mi volumen es bajo, el costo por factura sube." | El asesor explicó la tarifa por factura, la recarga inicial con capacitación y el consumo mínimo mensual desde el segundo mes; el prospecto pidió revisar las cuentas y decidir después. |
| "Debo consultarlo con los dueños de las empresas." | Se acordó una llamada de confirmación pocos días después; es un patrón: la decisión de pago pasa por los propietarios. |
| "Otra solución me cobra menos por factura." | Se comparó el costo total incluyendo soporte y errores de la otra solución; no se bajó el precio en la sesión. |
| "Probé otra herramienta y duplicó facturas o calculó mal el IVA." | Se mostró la aprobación obligatoria y el cálculo por bases; se ofreció piloto con una empresa. |
| "Quiero hacer una prueba antes." | Se aceptó una prueba piloto con una sola empresa y un inicio formal en una fecha posterior, con pago previo para agendar la capacitación. |
| "No sé si mi software contable es compatible." | Se listó la compatibilidad (API y archivo plano) y el plazo de habilitación. |
| "Es una entidad pública con restricciones de software." | Se propuso empezar por los casos básicos de causación con acceso por credenciales y XML obligatorio junto al PDF. |

## Cierre típico
1. Acordar paquete inicial y fecha de capacitación (recarga inicial con capacitación incluida).
2. Enviar enlace de pago y los datos de facturación (RUT).
3. Agendar capacitación de unas 2 horas con el equipo; el asesor envía la grabación después.

## Señales para el diseño de tutoriales
- Los prospectos preguntan primero por **estados y control** (no gastar créditos, no causar a ciegas), luego por **compatibilidad** y por último por **precio**.
- Un video corto de "Cómo se paga: créditos y recarga" reduce fricción comercial (ver `ideas-tutoriales.md`).
