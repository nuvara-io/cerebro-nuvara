# Cerebro de diseño: cómo usar esta carpeta

Esta carpeta es la **fuente versionada** del Cerebro gráfico núvara. La **vista navegable** (colores, tipografía, componentes con su vista previa y recursos) es el artifact: https://claude.ai/artifact/44mTTe4PPiDv33UWqWsaPL

| Archivo | Qué es |
|---|---|
| `README.md` | Fundamentos: promesa, nombre, voz, vocabulario, color, tipografía, fondos, logos, íconos, Nuvi y fotografía |
| `tutoriales.md` | Reglas de los tutoriales en video (16:9) |
| `redes.md` | Reglas de posts, historias y LinkedIn |
| `reels.md` | Reglas de los reels (9:16) y del movimiento |
| `tokens.json` | Todos los tokens: color, tipografía, espaciado, radios, sombras y tiempos |
| `components/*/` | Cada componente con sus reglas (`README.md`) y su vista previa (`preview.html`) |
| `assets/*/README.md` | Cómo usar logos, íconos, Nuvi y referencias |
| `design-system.json` | Índice del artifact, con los recursos que tiene subidos |

**Para tener en cuenta:**
- Las vistas previas usan rutas `/_blob/…`, que solo funcionan dentro del artifact. Para verlas, abrí el link.
- Los archivos binarios (logos, íconos, Nuvi) están en el artifact y, los que usa el código, en `public/brand/` y `public/nuvi/`.
- **Si cambiás algo acá, hay que volver a publicarlo en el artifact**, y al revés: las dos copias tienen que quedar iguales.
- Si cambia un valor que usa el video, se actualiza también `src/brand/tokens.ts`, que es su espejo en código.
