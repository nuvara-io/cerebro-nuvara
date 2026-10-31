# Tutoriales en video

Tutoriales y capacitaciones de la plataforma, hechos con Remotion y narrados con ElevenLabs. Usan la misma línea que redes y reels (ver Fundamentos), llevada a 16:9. El código vive en el repo `nuvara-tuturiales`: `src/brand/` es el espejo de estos tokens y `src/scenes/` tiene las tres escenas.

## Formato

- 1920×1080, 16:9, 30 fps. La versión vertical 1080×1920 sigue la **Línea de reels**.
- Margen lateral `video-margin-x` (192px) y superior `video-margin-top` (64px). Nada importante fuera de esa caja.
- Fondo de toda escena: el **gris con marca de agua** (`RedesFondo` adaptado a 16:9, con el isotipo grande arriba a la derecha y abajo a la izquierda).

## Estructura

| Acto | Componente | Duración | Contenido |
|---|---|---|---|
| Intro | `IntroCard` | 6–8 s | Wordmark arriba al centro; titular en dos tonos a la izquierda; pill turquesa opcional; tarjeta con cifra verificable; Nuvi grande a la derecha |
| Pasos (máx. 5) | `StepHeader` + `ScreenFrame` | 15–30 s c/u | Pill azul "Paso N de M" con el título; debajo, la grabación real de la plataforma en una tarjeta blanca |
| Cierre | `OutroCTA` | 5–8 s | Wordmark, frase de cierre en dos tonos y CTA; Nuvi celebrando |

Entre escenas va un fundido de `motion-exit` y la narración deja un silencio de `motion-scene-gap`.

## Textos en pantalla

- **Títulos de paso:** verbo en imperativo + objeto, máximo 4 palabras ("Trae tus facturas", "Revisa y aprueba"). Van en `video-scene-title`, Bold, en `redes-texto-titulo`.
- **Titular de intro y cierre:** dos tonos, primera línea en `redes-azul` y segunda en `redes-texto-titulo`, ambas en `video-hero` o `video-tagline`. Máximo ~14 caracteres por línea.
- **Subtítulos:** van en una tarjeta blanca centrada en el tercio inferior, en `video-caption`. Las palabras clave van en Bold `redes-azul`, marcadas entre asteriscos en el guion ("Revisa el \*asiento contable\* antes de \*aprobar\*"). Máximo dos líneas. Cuando haya narración, salen de la transcripción por palabra.
- **CTA del cierre:** concreto y accionable ("Habilitar mi cuenta", "Agendar demostración en vivo", "Ir a causaciones"). El primario va en `redes-azul` sólido y el secundario con contorno. Nunca "demo".

## Capturas de la plataforma

- Va la grabación real dentro de `ScreenFrame`: tarjeta blanca, `redes-radius-tarjeta`, `redes-sombra-tarjeta`, sin borde y sin dispositivo dibujado.
- **Fuente:** las grabaciones de demostraciones en vivo (Drive › Demos, 1920×1080, 24 fps), recortadas al área de la app sin la ventana de videollamada, o grabaciones nuevas de una cuenta de prueba.
- Los datos que se ven son de prueba. Nunca se muestran NIT, nombres ni montos reales de usuarios: se censuran o se usa una cuenta de prueba.
- Overlays sobre la captura: cursor con halo `ds-electric-blue-400` al hacer clic y zoom máximo de 1.5× hacia lo que nombra la narración. Los íconos de overlay son Lucide.

## Movimiento

- **Entradas:** `motion-enter`, sin rebote. Fade + subida de 24px para los textos; escala de 0.96 a 1 para el marco.
- **Orden de entrada:**
  - **Intro:** wordmark → titular (+6 frames, la línea gris 4 frames después de la azul) → pill (+14) → tarjeta de cifra (+18, cuenta en `motion-count-up`) → Nuvi (+10).
  - **Paso:** pill → título (+4) → marco (+8) → subtítulo (+20).
- **Salidas:** `motion-exit`, solo fade.
- Nada se mueve mientras el narrador explica un dato. Los fondos tienen una deriva muy lenta de la marca de agua y nada más.

## Voz y audio

- La narración se hace con ElevenLabs, modelo `eleven_v4`. La voz candidata es Eduardo (`0zli90n8G9wV4hLPUpiB`, latino neutro) y todavía no está confirmada.
- Pronunciación **NÚ-va-ra**: se revisa cada toma.
- Un bloque de narración por escena, generado por separado.
- Música de fondo a -24 dB bajo la voz, sin letra.
