# Sonido y recursos libres para las piezas

Herramientas de edición que usa núvara para el sonido de reels y videos y para buscar recursos con licencia abierta. Se suman al flujo de Remotion: el video se renderiza aquí y después se le pone y se revisa el sonido. Documentado el 18/11/2026 a partir de las páginas de cada herramienta.

| Herramienta | Qué hace | Cuándo se usa |
|---|---|---|
| **Real SFX** (skill de Claude Code) | Agrega efectos de sonido grabados a un MP4 ya renderizado | Después de renderizar un reel o tutorial en Remotion |
| **earshot** (CLI + servidor MCP) | Escucha, mide y compara audio, revisa un video y genera sonidos por código | Para revisar el sonido antes de aprobar y para medir volumen y sincronía |
| **Openverse** (buscador) | Busca imágenes y audio con licencia abierta | Cuando hace falta un sonido o un recurso que no tenemos |

## Real SFX

- **Qué es:** una skill de Claude Code (https://clipwing.pro/skills/real-sfx, código en `github.com/Clipwing/skills`, carpeta `skills/real-sfx`). Toma un MP4 de motion design, ubica los momentos donde va un efecto (desde una lista de cues, una línea de tiempo o la imagen) y entrega tres cosas:
  - un MP4 nuevo;
  - una pista de efectos aparte en WAV, para Premiere o After Effects;
  - un reporte.
- **Qué cuida:** conserva la música y la voz, baja los efectos debajo de la voz y quita los efectos sintetizados que ya traiga el render. Puntúa sincronía, balance y volumen, y nombra cinco momentos para revisar al oído.
- **Instalación:** copiar la carpeta de la skill a `~/.claude/skills/real-sfx/` (o a `.claude/skills/real-sfx/` del proyecto) y apuntarla a la carpeta de sonidos. Antes de instalarla, se lee el `SKILL.md` y sus scripts.
- **Requisitos:** Python 3.9 o más, **FFmpeg en el PATH** (en macOS, `brew install ffmpeg`; hoy este computador no lo tiene: Remotion trae el suyo, pero la skill no lo usa) y una carpeta de efectos con derechos de uso. La página dice que es gratis.
- **Sonidos:** trae 78 sonidos de interfaz CC0. Los whooshes, impactos y foley salen de nuestra propia biblioteca (Freesound, Sonniss GDC, Mixkit, Pixabay…), revisando la licencia de cada uno.
- **Límite:** Claude no oye. Elige por características medidas, así que los cinco momentos que marca se revisan al oído antes de aprobar.

## earshot

- **Qué es:** «oídos para agentes de código» (https://github.com/Leonxlnx/earshot). Funciona sin tarjeta gráfica, es de código abierto (MIT) y trae CLI, API de Python y servidor MCP.
  - **Escuchar:** `describe`, `match`, `find`, `measure`.
  - **Revisar un video:** `critique`, contra siete videos de lanzamiento de referencia.
  - **Generar sonido por código:** `forge`, `fit`, `sfx` y `kit`.
- **Instalación (comandos del README):**
  ```bash
  uv tool install "earshot[mcp] @ git+https://github.com/Leonxlnx/earshot"
  earshot doctor --fetch          # descarga dos modelos, ~1,1 GB
  claude mcp add earshot --scope user -e EARSHOT_THREADS=3 -- earshot mcp
  ```
  Necesita `uv` (ya está) y `ffmpeg`/`ffprobe` en el PATH (falta). La API de Gemini es opcional y solo para `earshot llm`. Tiene dos skills en `skills/`: `earshot` (cómo escuchar) y `real-sound` (bandas sonoras con grabaciones con licencia).
- **Banco de sonidos:** 252 sonidos, la mayoría sintetizados en código y 15 ajustados a partir de grabaciones CC0 (créditos en `docs/CREDITS_FIT.md`). El README **no dice qué licencia tienen los WAV que genera**. Hasta confirmarlo, en núvara se usa para **medir y revisar**, no como fuente de sonidos para pauta.
- **Límites (del README):**
  - no juzga gusto, emoción, procedencia ni licencias;
  - no oye por encima de 14 kHz;
  - cada llamada carga los modelos, unos 20 a 40 segundos;
  - en una prueba ciega pequeña acertó 8 de 15, y el modelo de realismo «es fácil de engañar».

## Openverse

- **Qué es:** el buscador de obras con licencia abierta que mantienen Creative Commons y WordPress (https://openverse.org/es-co). Reúne imágenes y audio de muchos repositorios públicos, y da la atribución con un clic.
- **Filtros que se usan siempre:** en «Usar», marcar **Uso comercial** y **Modificar o adaptar**. Con esos dos, solo quedan disponibles **Marca de dominio público, CC0, CC BY y CC BY-SA**; las NC y ND se apagan solas. En la URL: `license_type=commercial,modification`.
- **Qué licencias usa núvara:**
  - **Dominio público y CC0:** se usan en todo, también en pauta, sin crédito.
  - **CC BY:** solo si se pone el crédito tal como lo da Openverse (en el texto del post o en la descripción del video). En pauta se evita, porque el anuncio no tiene dónde ponerlo.
  - **CC BY-SA:** no se usa. Obliga a compartir la pieza con la misma licencia.
  - **NC y ND:** nunca.
- **Antes de usar algo:** Openverse pide **verificar la licencia y la atribución en la fuente original**, así que se abre la página de origen y se confirma.

## Reglas de núvara para el sonido y los recursos

1. **Personas:** las fotos de personas salen del banco oficial o de nuestras sesiones, nunca de Openverse ni de bancos externos (`docs/banco-fotos.md`). De Openverse solo salen sonidos, texturas u objetos.
2. **Registro:** cada recurso externo se anota con su nombre, la fuente, la licencia, el enlace y la pieza donde se usó. Se anota en la nota de la pieza en el calendario, o en `public/sonido/LEEME.md` si queda en la biblioteca.
3. **En reels con voz,** los efectos van por debajo de la voz y no se agrega otra música encima. En la pauta, la música sugerida de Meta se apaga (ver `red/pauta-en-meta.md`).
4. **Revisar al oído:** antes de aprobar se escucha completo. Ninguna de las herramientas oye por nosotros.
5. **Pendiente:** los cuatro sonidos actuales de `public/sonido/` (`whoosh`, `pop`, `clic` y `musica`) no tienen registrado de dónde salieron ni con qué licencia. Hay que confirmarlo, o reemplazarlos por CC0, antes de seguir usándolos en pauta.

## Flujo propuesto

1. Se renderiza en Remotion (`bunx remotion render …`).
2. **Real SFX** agrega los efectos desde la biblioteca con licencia y entrega el MP4 y la pista de efectos.
3. **earshot** mide volumen y balance y revisa el video.
4. Alguien lo escucha completo y se sube al calendario para aprobar.
