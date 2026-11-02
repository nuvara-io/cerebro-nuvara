---
name: consultar-reuniones
description: >
  Busca en el texto completo de las reuniones de núvara (capacitaciones, soporte, demostraciones, internas)
  cuando el cerebro destilado de conocimiento/ no alcanza: detalles, citas, quién preguntó qué, cómo se resolvió
  un caso puntual, o para verificar un dato antes de afirmarlo.
  Trigger: preguntas como "qué dijeron sobre…", "en qué reunión…", "cómo se resolvió…", "busca en las reuniones",
  "verificá en las transcripciones", o cuando conocimiento/ no responde o se contradice.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Cuándo usarla

- La respuesta no está en `conocimiento/`, o está pero hace falta el detalle: el paso exacto, el caso real o el error puntual.
- Hay que **verificar** un dato del cerebro o de `por-confirmar.md` contra lo que realmente se dijo.
- El usuario pregunta por una reunión, una fecha o un tema específico.

## Cómo se organiza el conocimiento (dos capas)

| Capa | Dónde | Qué es | Va a git |
|---|---|---|---|
| Cerebro destilado | `conocimiento/` | Lo útil, anonimizado y consolidado (~71k palabras). **Se consulta primero.** | Sí |
| Archivo crudo | `archivo-reuniones/` | Texto completo de las 185 reuniones de núvara (~1,5 millones de palabras) con `indice.json` (fecha, tipo, temas). | **No**: tiene datos reales de usuarios |

El archivo crudo no entra en contexto entero: se **busca** y se leen solo los tramos relevantes.

## Flujo

1. **Primero `conocimiento/`.** Si responde bien, no hace falta el archivo.
2. **Buscar con sinónimos.** La búsqueda es por palabras, no por significado:
   - ignora mayúsculas y tildes;
   - `|` separa sinónimos (O) y el espacio exige todos los términos (Y);
   - las frases van entre comillas dobles.
3. **Leer el tramo** de las reuniones más relevantes con `leer <id> --linea N`, unas 40 a 80 líneas alrededor del fragmento.
4. **Responder citando la fuente:** `h-…`, fecha y tipo de reunión. Si las fuentes chocan, gana la más reciente, y se dice que hay diferencias.
5. **Si el hallazgo es valioso y no está en el cerebro**, ofrecé sumarlo a `conocimiento/`, anonimizado y siguiendo las reglas de `procesar-reuniones`.

## Reglas que no se negocian

- **Nada del archivo crudo se copia al repo** ni a una pieza publicada: ni nombres, ni NIT, ni montos, ni frases textuales largas.
- **En la conversación, responde anonimizado por defecto:** "una firma contable", "el asesor". Solo se dan nombres si el usuario los pide explícitamente, y nunca se escriben en archivos.
- **Las transcripciones tienen errores.** El nombre de la marca aparece como Nuara, Nuevara, Nubara o Nubira, y World Office como Word Office. Buscá con variantes, y no tomes nombres de menús al pie de la letra sin validarlos.
- **No inventes:** si no aparece en el archivo, decí que no aparece.

## Sinónimos útiles

| Tema | Consulta sugerida |
|---|---|
| núvara | `nuvara\|nuara\|nuevara\|nubara\|nubira` |
| World Office | `"world office"\|"word office"\|worldoffice` |
| Créditos | `credito\|creditos\|nuvicoin\|monedas\|saldo\|recarga` |
| Token DIAN | `token "dian"` o `token vence\|expira\|caduca` |
| Anticipos | `anticipo\|adelantado\|abono` |
| Retenciones | `retencion\|retefuente\|reteica\|reteiva\|autorretenedor` |

## Comandos

```bash
python3 -I .claude/skills/consultar-reuniones/scripts/archivo.py buscar 'anticipo|adelantado proveedor'
python3 -I .claude/skills/consultar-reuniones/scripts/archivo.py buscar 'token vence|expira' --tipo soporte --desde 2026-07 -n 5
python3 -I .claude/skills/consultar-reuniones/scripts/archivo.py leer h-5896e704b957 --linea 170 --lineas 60
python3 -I .claude/skills/consultar-reuniones/scripts/archivo.py construir   # rearma el archivo después de procesar reuniones nuevas
```

`buscar` también acepta:
- `-n`: cuántas reuniones mostrar;
- `--fragmentos` y `--largo`: cuántos fragmentos por reunión y de qué largo;
- `--cualquiera`: basta con que aparezca un término, en lugar de todos.

## En otra máquina

El archivo se arma con `construir` a partir de la carpeta de transcripciones (`conocimiento/grabaciones de reuniones nuvara/`, que se baja de Drive). Solo entran las reuniones registradas como incluidas en `conocimiento/fuentes-procesadas.md`. Sin esa carpeta, el cerebro destilado sigue funcionando, pero no hay acceso al texto completo.
