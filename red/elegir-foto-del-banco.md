---
id: elegir-foto-del-banco
tipo: procedimiento
titulo: Elegir una foto del banco
tema: linea-grafica
publico: C
estado: verificado en el repo
ruta: [cerebro-nuvara, docs/banco-fotos.md]
url: null
siguiente: crear-pieza-de-redes
actualizado: 2026-11-03
fuentes:
  - docs/banco-fotos.md
  - scripts/foto.py
  - CLAUDE.md#fuentes-de-verdad-en-este-orden
---

# Elegir una foto del banco

## Antes de empezar
- [C] El banco oficial tiene 97 fotos de personas reales en tres locaciones: biblioteca clara, biblioteca oscura y pared de arcos beige. Está en Drive › "2. Sesión de fotografía núvara".
- [C] Para traer una foto no hace falta tener el banco descargado: el script la baja de Drive.

## Pasos
1. [C] Abre el catálogo por escena en `docs/banco-fotos.md` y busca la escena que cuenta tu mensaje: revisar o validar (76–79), "solo haces clic en Aprobar" (80–82), asesoría (42–49), demostración en vivo o capacitación (87–97), retrato de confianza (161–175), colaboración (153–160).
2. [C] Para una portada 4:5 con texto a la izquierda, elige una de las que tienen a la persona a la derecha: 149–152, 170–175, 79 o 135–142.
3. [C] Revisa que esa foto no haya salido hace poco en otra pieza: 110–119 y 135–142 ya se usaron en historias y 172 en la portada de causaciones.
4. [C] Tráela con `uv run --no-project --with pillow python -I scripts/foto.py <número>`. Queda en `public/posts/banco-<número>.jpg`, con la orientación corregida y 1600px de alto.
5. [C] Si dudas entre varias tomas de una serie, tráelas todas, compáralas y borra las que no uses: elige la de mirada más natural y sin manos borrosas.

## Si no hay una escena que sirva
- [C] Recién ahí se genera una imagen con inteligencia artificial. Tiene **costo en créditos** (hay que avisarlo antes), sigue las mismas reglas de fotografía y siempre lleva un velo de marca encima.
