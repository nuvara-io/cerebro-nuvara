Marco para la grabación real de la plataforma en una escena de paso: tarjeta blanca de `video-frame-width` (1536px) a `video-margin-x` del borde, desde y = 176px, con `redes-radius-tarjeta`, `video-shadow-frame` y sin borde.

**Qué provee quien lo usa:** la grabación (`recording`, ruta en `public/`) y el subtítulo (`caption`), con las palabras clave entre asteriscos. Si `recording` está vacío, se muestra la vista ilustrativa de Causaciones.

**Overlays:**
- Subtítulo en tarjeta blanca centrada en el tercio inferior, en `video-caption`, con las palabras clave en Bold `redes-azul`.
- Cursor con halo `ds-electric-blue-400`.
- Zoom máximo de 1.5×.

**Reglas:**
- No se dibuja ningún dispositivo alrededor.
- Solo datos de prueba.
- La fuente de las grabaciones son las demostraciones en vivo (Drive › Demos), recortadas al área de la app.
- En código: `src/components/ScreenFrame.tsx` y `src/scenes/StepScene.tsx`.
