---
id: operar-pauta-con-claude
tipo: procedimiento
titulo: Operar la pauta de Meta con Claude Code
tema: pauta-en-meta
publico: I
estado: según referencia externa
ruta: [Claude Code, conector de Meta Ads]
url: null
siguiente: revisar-pieza-antes-de-publicar
actualizado: 2026-11-09
fuentes:
  - https://www.youtube.com/watch?v=rVnDx6aTovg  # "META ADS con CLAUDE: Curso Completo en Español (2026)", Benjamín Cordero
  - red/pauta-en-meta.md
---

# Operar la pauta de Meta con Claude Code

## Antes de empezar
- [I] Tienes acceso de administrador a la cuenta publicitaria y a la página de núvara en Meta.
- [I] Está definido el CPA objetivo por etapa (conversación, registro, código canjeado); sin eso no hay reglas para decidir.
- [I] Cada anuncio tiene su propio código de activación para medir la calidad del registro.

## Pasos
1. [I] **Conecta Meta Ads a Claude Code** con el conector oficial (MCP) y autoriza por OAuth en el navegador. Limita los permisos: borrar y cambiar presupuesto piden aprobación.
2. [I] **Verifica la conexión** con una pregunta real: "¿cuánto gastamos en los últimos 30 días y qué anuncio trajo más conversaciones?".
3. [I] **Dale contexto del negocio** en el proyecto: qué es núvara, a quién le habla, los ángulos, las reglas de marca y las afirmaciones permitidas (consulta el cerebro con `bun run red` o el MCP `cerebro-nuvara`). Pídele un primer reporte de la cuenta.
4. [I] **Crea las tres campañas** (laboratorio, escala y remarketing) solo a nivel de campaña, en pausa y con presupuesto mínimo; después se llenan los conjuntos.
5. [I] **Produce los creativos** en el repo (videos modulares y gráficos en Remotion) y pásalos por la revisión antes de publicar. Para espiar a la competencia, la biblioteca de anuncios de Meta se consulta desde el mismo conector.
6. [I] **Sube los creativos** al conjunto de su formato en el laboratorio, de a pocos, con su título fijo y el enlace con código o WhatsApp como destino.
7. [I] **Escribe las reglas del juez** en lenguaje natural: cuándo apagar, cuándo pasar a escala y que solo aplica al laboratorio (ver Pauta en Meta).
8. [I] **Corre el juez a diario** (a mano o con una rutina programada): apaga, mantiene o escala, anota qué se aprendió de cada anuncio (ángulo, título, formato) y deja un reporte de la mañana con lo que subió, lo que apagó, lo que escaló y lo que aprendió.

## Si algo no sale
- [I] **El conector no deja subir videos:** en Business Settings crea un usuario del sistema, asígnale la cuenta publicitaria y la página, genera un token con permisos de lectura y gestión de anuncios y guárdalo fuera del repo (en `.env`). Rótalo al terminar.
- [I] **Meta rechaza un anuncio:** pásale el error a Claude, que corrija y anote la causa para que no se repita (lo más común: un botón que no corresponde al destino).
- [I] **La rutina no corrió:** si es local, depende de que el computador esté prendido; para que corra sola se programa en la nube.
- [I] **Modo de aprobación:** núvara cuida su voz, así que la publicación de creativos nuevos siempre tiene revisión humana. El juez puede apagar solo; nunca borra.
