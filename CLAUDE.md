# nuvara-tuturiales

Videos tutoriales, capacitaciones y piezas de marca de **núvara**, hechos con Remotion y narrados con ElevenLabs.

## Fuentes de verdad (en este orden)

1. **Cerebro gráfico núvara**: la línea gráfica de los videos (tokens, componentes de video, voz, Nuvi, logos). Está en https://claude.ai/artifact/44mTTe4PPiDv33UWqWsaPL. Leé su `project/README.md` antes de diseñar cualquier escena.
2. **núvara Brand OS**: voz, vocabulario y personaje. Está en Drive › Marketing › Branding › "Dirección Manual de identidad".
3. **Key visual**: paleta oficial, tipografía y elementos gráficos. Está en Drive › Marketing › Branding › "Copia de key visual núvara.pdf".
4. **Monorepo de la app**: producto, rutas, tokens de UI y copy. Está en `/home/yohan/Documentos/Proyectos/NUVARA`.

Drive raíz: https://drive.google.com/drive/folders/1BSpmQP46BTnjgQ-gIYb9LR7Jxlp_7NmT

- **Piezas gráficas publicadas** (posts, historias, portadas de reels, LinkedIn y reels): https://drive.google.com/drive/folders/1sI0C-NJBCPdlLHI1a3WOynkrD3fCFn2o
- **Referencias descargadas** en `Rerefencias/Núvara-20261031T222228Z-1-005/Núvara/` (excluidas de git). Es la parte 5 de la carpeta raíz e incluye:
  - el logo maestro `.ai`, ya extraído a `public/brand/logo/` (15 SVG);
  - íconos oficiales, la guía del personaje y dos reels publicados;
  - en `Demos/`, grabaciones de demostraciones en vivo (1920×1080, 24 fps, 26–80 min), que son la fuente para las capturas de los tutoriales recortando el área de la app.
- **Banco de fotos oficial con personas reales** ("2. Sesión de fotografía núvara", 50 JPG): https://drive.google.com/drive/folders/1x1kZL9_c5bmwgGctAdkHs98uySHUMRDc. Cuando se pida una portada o una pieza con foto, se usa primero este banco. Solo si no hay una escena adecuada se genera una imagen con IA, y en ese caso hay que avisar que tiene costo en créditos. El banco ya está descargado en `Imagenes nuvara/` (excluido de git) y catalogado por escena en [docs/banco-fotos.md](docs/banco-fotos.md): primero se elige la foto desde el catálogo.

## Reglas de marca que no se negocian

- **Una sola línea gráfica** para tutoriales, reels y redes:
  - **Poppins**, con titulares en dos tonos (azul `#1e85ff` + gris) o en dos pesos (Bold + Light);
  - fondo gris con el isotipo de marca de agua (o azul sólido, degradado de marca o foto real);
  - logos vectoriales de `public/brand/logo/`.
  
  Jost es solo de la interfaz de la app. Los blobs del key visual son solo para piezas institucionales. El cerebro gráfico tiene las secciones Fundamentos, Tutoriales en video, Línea de redes y Línea de reels.

- El nombre se escribe **núvara**: siempre en minúscula y con tilde, también en títulos. Se pronuncia NÚ-va-ra, con el golpe en la primera sílaba. Revisá cada toma de voz por eso.
- Siempre de **tú**. Nunca usted, don/doña ni voseo.
- Se dice **créditos**, no nuvicoins.
- No se dice "IA" sola, ni "automatizamos", "demo", "cliente", "sistema" o "revolucionario". Ver la tabla de vocabulario en el cerebro gráfico.
- núvara interpreta y prepara; el usuario revisa, valida y aprueba. Nunca "núvara decide".
- La promesa es control: el usuario mantiene el control de su operación.

## Producto (resumen)

- Causación contable automática de facturas electrónicas DIAN para contadores y empresas en Colombia. La causación es el proceso y el asiento contable es su resultado.
- Guiones paso a paso: `NUVARA/apps/web/src/features/trial-onboarding/tours/{causar,empresa,importar}.ts`
- Módulos con slot de tutorial en la app: `NUVARA/apps/api/src/video-tutorials/domain/value-objects/tutorial-module.vo.ts`

## Datos a confirmar antes de ponerlos en un video

- **Causar una venta:** el Brand OS dice $100 COP y la landing (`consts.ts`) dice $200 COP.
- **Recarga mínima:** la app dice $70.000 y la landing $80.000 de mínimo mensual.
- **Azul petróleo:** el key visual usa `#005256` y la app `#09695c`. En video manda el key visual.

## Código (Remotion)

- `src/brand/`: espejo en código del cerebro gráfico. Tiene `tokens.ts` (colores, gradientes, tipo, espaciado, motion), `fonts.ts` (Jost + Poppins) y `assets.ts` (logos y Nuvi en `public/`). Si cambia un valor en el cerebro gráfico, se cambia acá. No se escriben hex sueltos en los componentes.
- `src/components/`: piezas reutilizables, como `KeyVisual`, `StatPill`, `StepHeader`, `ScreenFrame`, `Caption`, `ClickHighlight`, `Nuvi`, `FadeUp` y `ScreenPlaceholder`.
- `src/scenes/`: los tres actos (`IntroScene`, `StepScene`, `OutroScene`), creados con `Interactive.create` para que se editen desde Studio.
- `src/tutorials/`: un archivo por video, que encadena escenas con `TransitionSeries` y fade de `motion.exit`.
- Las grabaciones de la plataforma van en `public/recordings/` y se pasan en `recording` de `StepScene`. Si el campo está vacío, se muestra la vista ilustrativa.
- Studio: `npm run dev`.

## Formato

- 1920×1080, 30 fps. La estructura es Intro → Pasos (máx. 5) → Cierre (ver componentes `IntroCard`, `StepHeader`, `ScreenFrame`, `OutroCTA`).
- Voz candidata: Eduardo (`0zli90n8G9wV4hLPUpiB`, `eleven_v4`), todavía sin confirmar.
