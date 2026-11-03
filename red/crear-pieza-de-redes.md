---
id: crear-pieza-de-redes
tipo: procedimiento
titulo: Crear una pieza para redes o pauta
tema: linea-grafica
publico: C
estado: verificado en el repo
ruta: [cerebro-nuvara, src/posts]
url: null
siguiente: revisar-pieza-antes-de-publicar
actualizado: 2026-11-03
fuentes:
  - diseno/redes.md
  - CLAUDE.md#código-remotion
  - src/posts/
---

# Crear una pieza para redes o pauta

## Antes de empezar
- [C] Sabes de qué trata la pieza y a quién le habla: contador o empresario.
- [C] Tienes el repo `cerebro-nuvara` con las dependencias instaladas (`bun install`).

## Pasos
1. [C] **Qué decir:** busca el tema en la red (`bun run red "<tema>" --publico C`) o en `conocimiento/`. Usa solo datos verificados y las cifras permitidas en Mensajes y afirmaciones.
2. [C] **Cómo mostrarlo:** elige el formato (post 1080×1350, historia o portada de reel 1080×1920, LinkedIn 1200×628) y **un** fondo: gris con marca de agua, azul sólido, degradado de marca o foto.
3. [C] Si lleva foto, elígela del banco y tráela a `public/posts/` (ver Elegir una foto del banco).
4. [C] Crea el componente en `src/posts/<NombreDeLaPieza>.tsx`. Parte de una pieza parecida (el post «¿Qué es núvara?» con fondo gris, `PortadaCausaciones` con degradado y foto en arco) y usa los tokens de `src/brand/` y los componentes de `src/components/` (`Backdrop`, `Emphasis`, `Highlight`…).
5. [C] Regístrala en `src/Root.tsx` dentro de la carpeta **Redes** como `<Still id="NombreDeLaPieza" … width={1080} height={1350} />`.
6. [C] Mírala en Studio con `bun run dev`, o renderízala directo con `bunx remotion still NombreDeLaPieza out/NombreDeLaPieza.png`. La carpeta `out/` no va a git.
7. [C] Corre `bun run lint` y pasa la pieza por la revisión antes de publicar.

## Si algo no sale
- [C] **Se ve un corte vertical en la foto:** la imagen no cubre todo el ancho. Déjala a su alto natural pegada a un borde y haz que el velo sea sólido hasta pasar el borde de la foto.
- [C] **La persona queda detrás del texto:** elige una foto con la persona a un lado (en el catálogo, las que sirven para "portada con texto a la izquierda").
- [C] **Un color no existe en los tokens:** se agrega primero en `diseno/tokens.json` y en `src/brand/tokens.ts`, nunca suelto en el componente.
