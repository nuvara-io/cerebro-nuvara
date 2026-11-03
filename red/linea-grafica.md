---
id: linea-grafica
titulo: Línea gráfica de las piezas
publico: C
actualizado: 2026-11-03
conexiones:
  - voz-de-marca            # cómo se escribe lo que va en la pieza
  - mensajes-y-afirmaciones # qué se puede afirmar
fuentes:
  - diseno/README.md
  - diseno/redes.md
  - diseno/reels.md
  - diseno/tutoriales.md
  - docs/banco-fotos.md
  - CLAUDE.md#reglas-de-marca-que-no-se-negocian
---

# Línea gráfica de las piezas

Cómo se ve núvara en todo lo que sale a redes, pauta, reels y tutoriales. Hay una sola línea gráfica; la fuente completa es el cerebro de diseño (`diseno/` y su vista navegable en https://claude.ai/artifact/44mTTe4PPiDv33UWqWsaPL).

## La idea que sostiene cada pieza
- [C] **Promesa:** el usuario mantiene el control de su operación. Ninguna pieza puede hacer sentir que lo pierde.
- [C] **Territorio:** la tecnología contable que *entiende*, no la más rápida ni la más barata.
- [C] **Principio:** núvara interpreta y prepara; el usuario revisa, valida y aprueba. Nunca "núvara decide".

## Formatos
- [C] **Post y carrusel:** 1080×1350 (4:5). También 1080×1080 en comparativas.
- [C] **Historia:** 1080×1920. Deja libres 220px arriba y 300px abajo.
- [C] **Portada de reel:** 1080×1920. El texto va en el tercio central, nunca en los 420px de abajo.
- [C] **Reel:** 1080×1920, 30 fps, de 30 a 45 segundos, con audio continuo.
- [C] **LinkedIn:** 1200×628, con más aire y menos texto.
- [C] **Tutorial:** 1920×1080, 30 fps: intro, máximo 5 pasos y cierre.

## Tipografía y color
- [C] Todo en **Poppins**. Jost es solo de la interfaz de la app.
- [C] **Titular en dos tonos:** primera línea en azul `#1e85ff`, segunda en gris. **En dos pesos:** una palabra en Bold y el resto en Light.
- [C] **Palabra con degradado** (azul a turquesa): una sola por pieza.
- [C] En el cuerpo, una o dos palabras clave en Bold azul por bloque, nunca frases enteras. Frases cortas, con punto final.
- [C] Los pills de encabezado van en MAYÚSCULAS; todo lo demás en caja de oración. Sin emojis.

## Fondos (uno por pieza)
- [C] **Gris con marca de agua** del isotipo: el de contenido educativo, encuestas y avisos.
- [C] **Azul sólido** con la marca de agua al 6 %: carruseles técnicos.
- [C] **Degradado de marca** (turquesa a azul): piezas de producto y listas sobre foto.
- [C] **Foto real** del banco con velo azul a la izquierda o fundido abajo. El texto nunca va directo sobre la imagen.
- [C] Los blobs del key visual son solo para piezas institucionales.

## Logo, fotos y Nuvi
- [C] Wordmark chico y centrado arriba, en blanco sobre foto o azul. Solo los vectores de `public/brand/logo/`.
- [C] **Fotos:** primero el banco oficial con personas reales (97 fotos, catálogo por escena en `docs/banco-fotos.md`). Solo si no hay escena se genera una imagen con inteligencia artificial, que cuesta créditos y siempre lleva velo de marca.
- [C] **Nuvi** va en contenido educativo, informativo, encuestas o comunidad. No protagoniza anuncios de producto, promociones ni piezas de cobro.

## Componentes de redes
- [C] Tarjeta blanca de remate, ícono en círculo azul, lista numerada con pills blancos, comparativa con borde degradado y "VS", bloque degradado, pill turquesa, botón simulado "Aprobar", arco de marca, pie con nuvara.com.co y `>>>` para la siguiente lámina.
- [C] En código, cada pieza es un componente de `src/posts/` que usa los tokens de `src/brand/`: no se escriben colores sueltos.

## Contraste
- [C] El blanco sobre turquesa no llega a 3:1: úsalo solo en Bold de 40px o más.
- [C] El cuerpo gris sobre el fondo gris nunca baja de 30px.
