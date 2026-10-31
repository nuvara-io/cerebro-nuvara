Encabezado de cada paso del tutorial: un pill `redes-azul` con "Paso N de M" en `video-badge` blanco y, a su derecha, el título en `video-scene-title` Bold `redes-texto-titulo`.

**Posición:** en (`video-margin-x`, `video-margin-top`), con `ds-size-24` entre el pill y el título.

**Qué provee quien lo usa:** `step`, `total` (máx. 5) y `title`.

**Reglas:**
- El título es un verbo en imperativo + objeto, de máximo 4 palabras.
- Nunca "IA" sola: se escribe "inteligencia contable".
- Entra el pill y el título 4 frames después. Se queda fijo toda la escena.
- En código: `src/components/StepHeader.tsx`.
