Primer acto de todo tutorial: wordmark arriba al centro, titular en dos tonos a la izquierda, pill turquesa opcional, tarjeta con una cifra verificable y Nuvi grande a la derecha, sobre el fondo gris con marca de agua.

**Duración:** de 6 a 8 s.

**Qué provee quien lo usa:**
- `titleLead` y `titleRest`: la línea azul y la gris, de ~14 caracteres cada una.
- `highlight`: texto del pill turquesa, opcional.
- `statValue`, `statLabel` y `statIcon`: la cifra, su etiqueta y su ícono; 0 la oculta.

**Orden de entrada:**
1. El wordmark.
2. El titular, +6 frames; la línea gris entra 4 frames después de la azul.
3. El pill, +14.
4. La tarjeta, +18; la cifra cuenta en `motion-count-up`.
5. Nuvi, +10, subiendo 48px.

**Reglas:**
- Solo cifras sustentadas.
- Nuvi en pose de bienvenida (`nuvi-onboarding`) y nunca en piezas de producto o publicidad.
- En código: `src/scenes/IntroScene.tsx`.
