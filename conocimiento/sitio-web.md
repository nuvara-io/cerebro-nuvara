# Sitio oficial: nuvara.com.co

Lo que núvara dice públicamente en su sitio, revisado el 31/10/2026. Es una fuente **oficial**: cuando contradice lo que se dijo en una capacitación, gana el sitio, salvo que el equipo diga otra cosa. Las cifras de marketing se citan como están, pero no se repiten en un video sin validarlas (ver el final).

Páginas: inicio, `/contadores/`, `/precios/`, `/integraciones/` (con `/siigo/` y `/world-office/`), `/blog/`, términos y privacidad. La plataforma está en `app.nuvara.com.co`.

## Posicionamiento
- **Titular:** "Software de causación contable para empresas y contadores en Colombia".
- **Promesa:** clasifica las facturas y genera registros contables **listos para validar**. El contador mantiene la revisión, la aprobación y la trazabilidad antes de exportar.
- **Llamados a la acción:** "Iniciar prueba en vivo", "Agendar demostración", "Comenzar ahora", "Hablar con un asesor" (WhatsApp).
- **Contador en tiempo real** de causaciones efectivas en la portada.

## Qué hace la causación (según el sitio)
- Extrae facturas de la **DIAN** y del **correo**; la portada también menciona chats, otras fuentes y facturas físicas escaneadas.
- Clasifica cada documento desde el origen: compra o venta, proveedor, concepto e impuestos.
- Arma la causación completa: cuenta del PUC, débito y crédito, bases, IVA, retenciones, neto y centros de costo.
- Se adapta a distintos criterios contables válidos y aprende de las operaciones previas.
- Funciona con varias empresas en una sola cuenta, con la información separada por empresa.

## Precios (página `/precios/`, "precio de lanzamiento")
| Concepto | Valor |
|---|---|
| Crédito | $100 COP |
| Causación de compra | $510 (5,1 créditos) |
| Causación de venta | $200 (2,0 créditos) |
| Mínimo mensual | $80.000 |
| Tarifa especial | Desde 1.500 causaciones al mes (se negocia por WhatsApp) |

- **Mínimo mensual:** es un consumo mínimo para mantener la cuenta activa. Cada mes se descuentan al menos $80.000 del saldo; si causas más, pagas tu consumo real. Lo que no consumes se acumula para el mes siguiente. Cubre el procesamiento y el almacenamiento de las facturas de la DIAN durante el mes.
- **Calculadora de créditos:** viene por defecto en $200.000.
- **Lo que incluye:** extracción del correo y de la DIAN, empresas ilimitadas, cálculo de retenciones e IVA, generación de archivo y causación en lotes.

## Integraciones (página `/integraciones/`)
| Software contable | Cómo se conecta |
|---|---|
| **Siigo** (nube) | API oficial. Se conecta con usuario, access key y Partner-Id. Importa el catálogo, sugiere el mapeo de productos (aprende de tus decisiones), concilia el inventario y exporta compras y ventas. |
| **World Office** | API con token. Importa el catálogo y las bodegas, mapea productos y exporta compras y ventas. Permite la **automatización por proveedor**: las facturas nuevas se preparan y se escriben en World Office, listas para revisar. |
| Alegra, Helisa, Siigo PyME, Contai | Archivo de exportación que el usuario sube a su software. |
| Otro | Formato genérico, o desarrollo a medida que se negocia con el equipo. |

En todos los casos la causación **se revisa siempre antes** de exportarla.

## Otros módulos que anuncia el sitio
- **Conciliación bancaria** con extractos importados: PDF de Bancolombia, Davivienda y Nu, o CSV.
- **Nómina:** es un módulo propio, no una integración. El histórico se carga por archivo.
- **Facturación electrónica** ante la DIAN, "desde un chat".
- **File manager:** archivo seguro y clasificado por empresa.
- **Cajas:** crear, asignar y aprobar cajas desde un chat.
- **Calendario tributario** por empresa.
- **Contabilidad:** plan de cuentas personalizable, libros diario y mayor, y libro auxiliar como insumo para las declaraciones.
- **Reportes:** dashboards, proyección de flujo de caja, indicadores y comparativos entre periodos.

## Seguridad y soporte
- Las credenciales y los datos sensibles se cifran con **AES-256-GCM**.
- Hay respaldo diario de la base de datos, con retención de 7 días.
- Soporte por chat, correo y teléfono.
- **Capacitación:** biblioteca de **tutoriales en video** dentro de la plataforma, que se busca desde la pantalla donde estás trabajando, y un **recorrido guiado** en la pantalla de causación. Para firmas contables hay además capacitación en vivo. *Los videos de este repo alimentan esa biblioteca.*

## Blog (temas publicados)
Causación contra pago y principio de devengo; qué es el PUC y cómo elegir la cuenta; cómo causar una factura de venta; cómo causar una factura de compra; cómo automatizar retenciones e IVA; qué es la causación contable. Sirven de base conceptual para las introducciones de los tutoriales.

## Comparativa con competidores
La portada compara núvara con tres soluciones del mercado: una que integra DIAN y ERP, un "agente de IA" para causaciones y una enfocada en velocidad operativa. Los argumentos propios de núvara son:
- clasificación desde el origen;
- causación completa;
- adaptación a criterios contables;
- conciliación fiscal con la DIAN.

## Cifras de marketing (no usar en videos sin validar)
Las cifras no coinciden entre páginas:
- **Ahorro de tiempo:** "88 % menos tiempo" (inicio), "90 %" (precios) y "80 %" (contadores).
- **Horas por semana:** "+20 horas semanales" (inicio) y "15 h por semana" (contadores).
- **Otras:** 8 horas manuales contra 1 hora con núvara por cada 100 causaciones, "99 % de precisión", "+216 empresas activas" y el contador de causaciones.

## Desvíos del sitio frente al Brand OS
Hay que reportarlos al equipo y **no copiarlos** en las piezas:
- **Nombre:** escribe "Núvara" con mayúscula en todo el sitio. La regla es "núvara" en minúscula.
- **"IA":** aparece sola en el título de la portada ("Causación de facturas automática con IA") y en "análisis en tiempo real con IA".
- **Control del usuario:** frases como "núvara ejecuta el proceso completo", "sin intervención manual" o "eliminando la necesidad de revisión" chocan con la promesa de control. La regla es que núvara interpreta y prepara, y el usuario revisa y aprueba.
- **"Sistema":** aparece con frecuencia ("pruebas reales del sistema", "tu sistema contable"). La marca dice "plataforma"; para el software del usuario conviene decir "software contable".
- **"Clientes":** aparece como "lo que nuestros clientes dicen" (la marca dice "usuarios"). En cambio, "tus clientes", referido a las empresas que lleva el contador, es correcto.
- **Voseo:** hay uno suelto, "Contactanos" (en la página de precios). La marca habla de tú: "Contáctanos".
- **"Automatizamos":** el sitio dice "automatizas las tareas…" y "automatización inteligente"; hay que revisarlo contra la tabla de vocabulario.
