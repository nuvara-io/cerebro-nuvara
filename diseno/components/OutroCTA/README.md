Cierre de todo tutorial: wordmark, frase de cierre en dos tonos (`video-tagline`) y CTA, con Nuvi celebrando a la derecha, sobre el fondo gris con marca de agua.

**Duración:** de 5 a 8 s.

**Qué provee quien lo usa:**
- `primary`: el CTA principal.
- `secondary`: opcional.
- `taglineLead` y `taglineRest`: la frase de cierre. Por defecto, "Causa en horas / lo que te tomaba días."

**Reglas:**
- CTA concretos ("Habilitar mi cuenta", "Agendar demostración en vivo", "Ir a causaciones"). Nunca "demo".
- El primario va en `redes-azul` sólido y el secundario con contorno de 3px. Los dos con `redes-radius-pill` y `video-button`.
- Entra el wordmark, la frase +6 frames, los CTA +14 y Nuvi +10.
- En código: `src/scenes/OutroScene.tsx`.
