---
name: procesar-reuniones
description: >
  Suma reuniones de núvara (capacitaciones, soporte, demostraciones, internas) al cerebro de conocimiento:
  extrae el texto, descarta lo repetido y lo ajeno, anonimiza, fusiona en conocimiento/ y audita la privacidad.
  Trigger: cuando el usuario pasa una carpeta o archivos de reuniones o transcripciones para agregar al
  conocimiento, o pide "procesar reuniones", "actualizar el conocimiento" o "sumar capacitaciones".
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Cuándo usarla

- Llega una carpeta local con transcripciones o notas de reuniones (`.txt`, `.md`, `.vtt`, `.srt`, `.docx`, `.pdf`, `.html`).
- Hay reuniones nuevas en Drive: primero se descargan a una carpeta y después se corre esta skill.
- Hay que reprocesar una reunión que dejó un hueco en las preguntas de control.

## Reglas que no se negocian

1. **El texto crudo nunca entra al repo.** Vive en `~/.cache/cerebro-nuvara/reuniones/` (textos, muestras, fichas, triage). Al repo solo llega conocimiento destilado y anonimizado.
2. **Sin datos personales en `conocimiento/`:** nombres de personas o empresas, NIT, correos, teléfonos, montos de operaciones de usuarios ni números de factura. Las fuentes se citan de forma genérica ("firma contable", "contador independiente").
3. **Solo entra lo que es de núvara.** Otro producto, temas personales o societarios y gestión interna sin contenido de producto se registran como "no incluida", con su motivo.
4. **No se borra, se contrasta.** Si un dato choca con lo que ya está escrito, va a `por-confirmar.md`. El orden de autoridad es: confirmado por el equipo > sitio oficial (`sitio-web.md`) > código de la app > lo que dijo un asesor.
5. **Vocabulario de marca** (ver `conocimiento/README.md`): "núvara" en minúscula, "tú", créditos, usuario, plataforma, demostración en vivo. Nunca "IA" sola, "automatizamos" ni "nuvicoins".
6. **Trazabilidad:** cada sección que se toca en la fusión deja o actualiza al final un comentario `<!-- fuentes: h-…, h-… -->` con las huellas de las reuniones que la alimentaron.

## Por qué es óptimo

| Decisión | Ahorro |
|---|---|
| Un script hace todo lo mecánico (extraer, deduplicar, partir en lotes, agrupar, auditar, registrar) | Cero tokens en lo que no necesita criterio |
| La huella (`h-` + sha256 del texto) deduplica contra `fuentes-procesadas.md` | Nada se procesa dos veces, aunque cambie el nombre del archivo |
| El triage lee solo una **muestra** (1.200 palabras iniciales + 300 finales) con un modelo liviano | Las reuniones ajenas se descartan sin leerlas enteras |
| La extracción va por **lotes en paralelo** que entran cómodos en el contexto | Rápido y sin perder detalle por saturación |
| Las fichas se **agrupan por archivo de destino** y cada fusión toca un solo archivo | Fusiones en paralelo, sin pisarse, leyendo solo lo necesario |

## Flujo

Script: `python3 -I .claude/skills/procesar-reuniones/scripts/reuniones.py <subcomando>`, desde la raíz del repo.

### 0. Inventario (script)
`reuniones.py inventario "<carpeta>"` escribe `manifiesto.json`, `textos/<id>.txt` y `textos/<id>.muestra.txt`, y suma los nombres de hablantes a `nombres.txt`.
- Mostrale al usuario el resumen: nuevas, ya procesadas, repetidas, vacías, con error y cantidad de lotes.
- Las reuniones que entraron desde Drive en las dos primeras tandas ya tienen su huella registrada en la sección "Equivalencias" de `fuentes-procesadas.md`, así que el inventario las marca como `ya-procesada`. Si aparece un aviso de "misma fecha", compará la fecha y hora del nombre del archivo (`AAAA_MM_DD HH_MM`) con el título del documento en Drive.
- Los agentes en segundo plano mueren si la sesión se cierra. Lanzalos en tandas y pediles que escriban cada salida apenas la terminen.

### 1. Triage (subagentes `haiku`, en paralelo, de 25 a 30 muestras cada uno)
Cada agente lee **solo** las muestras que le tocan y devuelve, por reunión: `{id, fecha, tipo, incluida, motivo, duplicado_de}`.
- `tipo`: capacitación | soporte | demostración | interna | otro producto | otro tema | vacía.
- `motivo`: genérico y sin nombres ("sesión de soporte sobre núvara", "otro producto: gestión documental").
- `duplicado_de`: la fila del registro que coincide en fecha y tipo, si parece la misma reunión.

Juntá todo en `~/.cache/cerebro-nuvara/reuniones/triage.json`, como una lista con esas claves.

### 2. Extracción (subagentes `sonnet`, uno por lote de `manifiesto.json`, en paralelo; máx. 6 a la vez)
Cada agente recibe:
- las rutas de los textos de su lote, sin incluir los no incluidos ni los duplicados;
- la lista de archivos de `conocimiento/`, con `fd . conocimiento -e md`;
- la plantilla `assets/ficha.md`;
- las reglas 1, 2, 3 y 5.

Escribe una ficha por reunión en `fichas/<id>.md`. Extrae **todo** lo útil: pasos, errores, tips, preguntas, dolores, objeciones, contradicciones, comportamientos dudosos e ideas de tutoriales. La deduplicación contra el cerebro se hace en la fusión, no acá.

### 3. Agrupar (script)
`reuniones.py agrupar` deja en `destinos/` un archivo por destino, con cada ítem marcado con su `[h-…]`.

### 4. Fusión (subagentes `sonnet`, uno por destino o grupo de destinos chicos, en paralelo)
- Las instrucciones compartidas van en un archivo del staging (`instrucciones-fusion.md`), y cada agente recibe solo qué archivos le tocan.
- Pasale también `fechas.json` (id → fecha), porque **lo más reciente gana**.

Cada agente lee su paquete de `destinos/` y el archivo real de `conocimiento/`, y edita **solo ese archivo**:
- agrega lo nuevo y descarta lo que ya está dicho;
- anota las contradicciones en `contradicciones/<archivo>.md` del staging, no en el repo. `por-confirmar.md` lo escribe **al final** un único agente, que consolida su paquete con todas esas contradicciones;
- mantiene el estilo y la estructura del archivo;
- actualiza el comentario `<!-- fuentes: … -->` de cada sección que toca;
- con un destino `flujos/NUEVO-<slug>.md`, crea el flujo con el número siguiente y lo suma a la lista de `conocimiento/README.md`.

### 5. Auditoría (script, más tu revisión)
`reuniones.py auditar` busca correos, teléfonos, NIT, los nombres de hablantes de las reuniones y vocabulario prohibido.
- **Con errores, no se avanza:** se corrigen y se vuelve a auditar.
- Los avisos se revisan uno por uno: "demo" o "IA" pueden ser citas legítimas de una objeción.

### 6. Registro y cierre
- `reuniones.py registrar --origen "<descripción genérica de la carpeta>"` agrega la tanda a `fuentes-procesadas.md`.
- Actualizá los conteos de `conocimiento/README.md`: fuentes analizadas y tabla por tipo.
- Si existe `conocimiento/preguntas-de-control.md`, respondé cada pregunta solo con `conocimiento/` y reportá cuáles fallan.
- Mostrale al usuario el resumen (incluidas y descartadas, archivos tocados, hechos nuevos, contradicciones nuevas) y preguntá antes de hacer commit.

## Comandos

```bash
python3 -I .claude/skills/procesar-reuniones/scripts/reuniones.py inventario "/ruta/a/la/carpeta"
python3 -I .claude/skills/procesar-reuniones/scripts/reuniones.py agrupar
python3 -I .claude/skills/procesar-reuniones/scripts/reuniones.py auditar
python3 -I .claude/skills/procesar-reuniones/scripts/reuniones.py registrar --origen "carpeta local de capacitaciones"
```

Para empezar de cero una tanda (sin tocar `nombres.txt`, que sirve a todas las auditorías), se borran `textos/`, `fichas/`, `destinos/`, `triage.json` y `manifiesto.json` de `~/.cache/cerebro-nuvara/reuniones/`.

## Recursos

- **Plantilla de ficha:** [assets/ficha.md](assets/ficha.md)
- **Registro de fuentes:** `conocimiento/fuentes-procesadas.md`
- **Reglas de escritura y privacidad:** `conocimiento/README.md`
