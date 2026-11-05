---
id: plan-seo
titulo: Plan SEO del sitio
publico: C
actualizado: 2026-11-04
vigencia: revisar cada mes; las palabras clave se ajustan cuando haya datos de búsqueda
conexiones:
  - calendario-de-marketing # donde se revisa y se aprueba cada artículo o página
  - planeacion-de-marketing # las fechas que dan tema a los artículos
  - mensajes-y-afirmaciones # qué se puede afirmar en el sitio
  - modulos-disponibles     # no se posiciona lo que no está disponible
fuentes:
  - red/calendario.json
  - conocimiento/sitio-web.md
  - https://nuvara.com.co/sitemap-0.xml   # consultado el 04/11/2026
  - platform@cccfbe83c     # apps/landing, verificado el 04/11/2026
---

# Plan SEO del sitio

Qué se publica en nuvara.com.co para que los contadores y las empresas nos encuentren en Google y en los asistentes de inteligencia artificial. Cada artículo y página está en el calendario, con su palabra clave, título y descripción.

## Cómo está el sitio hoy
- [C] **Lo técnico está:** mapa del sitio, `robots.txt`, `llms.txt`, enlaces canónicos, datos estructurados y blog.
- [C] **Contenido:** seis artículos, todos de causación, y páginas de contadores, precios e integraciones con Siigo y World Office.
- [C] **Lo que falta:** no hay página ni artículo de facturación electrónica, RADIAN, nómina, tesorería o app móvil, aunque ya se ofrecen.

## Temas
- [C] **Causación y cierre:** comparar facturas con la DIAN, cierre contable, vencimientos y exógena.
- [C] **Facturación electrónica y RADIAN:** una página del módulo y un artículo de eventos.
- [C] **Nómina electrónica:** una página del módulo.
- [C] **Tesorería:** una página del módulo y un artículo de conciliación bancaria.
- [C] **App móvil:** una página el día del lanzamiento.

## Reglas
- [C] **Marca:** núvara va en minúscula en títulos y descripciones. Se escribe "inteligencia artificial", no la sigla sola.
- [C] **Título:** hasta 60 caracteres. **Descripción:** hasta 155.
- [C] **Una palabra clave principal por página**, para que dos páginas no compitan por la misma búsqueda.
- [C] **Cada artículo sale de un nodo del cerebro** y solo usa las cifras permitidas en `mensajes-y-afirmaciones`.
- [C] **Exportación:** se dice "tu programa contable" y que si no tenemos el formato lo generamos. Las páginas por programa son ejemplos, no una lista cerrada.
- [C] **Fechas tributarias:** se verifican contra la DIAN antes de publicar y se actualizan si cambian.
- [C] **Enlaces:** cada artículo lleva a la página de su módulo, y las publicaciones de redes llevan al artículo.

## Cómo medir
- [C] Por cada página: impresiones, clics, posición y conversaciones por WhatsApp que salen de ella.
- [I] Las impresiones, los clics y la posición salen de Google Search Console. El clic a WhatsApp ya se mide con `whatsapp_click` en Tag Manager.

## Para el equipo
- [I] **Por confirmar:** las palabras clave de este plan salen del producto y de los temas del gremio, sin datos de volumen. Falta acceso a Search Console para saber qué se busca y cómo está posicionado el sitio.
- [I] **Desvíos del sitio:** el título de la portada dice "Núvara" y usa la sigla sola, y los artículos dicen "Núvara". El ajuste está en el calendario y se hace en `apps/landing` de `platform`.
- [I] **Antes de publicar módulos nuevos:** el sitio todavía tiene reglas anteriores del mínimo mensual. Hay que alinearlo con `precios`.
- [I] Publicar exige cambiar `platform`: los artículos están en `apps/landing/src/content/blog/` y las páginas en `apps/landing/src/pages/`. Cada artículo necesita sus tres imágenes (portada, tarjeta y redes).
