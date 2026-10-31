# Línea de redes

Así se ven las piezas de núvara en Instagram, Facebook, TikTok y LinkedIn. Las reglas salen de la carpeta de Marketing **Piezas graficas** (Drive): posts, carruseles, historias, portadas de reels y piezas de LinkedIn, además del carrusel en Canva. Cuatro posts están en el grupo de recursos **Referencias**.

Esta sección aplica los **Fundamentos** (tipografía, color, fondos, logo y voz) a posts, historias y LinkedIn. Es la misma línea de los tutoriales y los reels.

## Formatos

| Pieza | Tamaño | Notas |
|---|---|---|
| Post y carrusel | 1080×1350 (4:5) | El formato principal. También se usa 1080×1080 en comparativas. |
| Historia | 1080×1920 (9:16) | Deja libres 220px arriba y 300px abajo para la interfaz de la app. |
| Portada de reel | 1080×1920 (9:16) | El texto va en el tercio central y nunca en los 420px de abajo, que tapan los botones del reel. |
| LinkedIn | 1200×628 (1.91:1) | Carruseles de "Tips", con más aire y menos texto. |

En todos los formatos, el wordmark va chico y centrado arriba. En las piezas sobre foto, va en blanco.

## Tipografía

- Todo va en **Poppins**. Los titulares de redes no usan Jost.
- **Titular en dos tonos** (`redes-titular`): dos líneas en Bold. La primera va en `redes-azul` y la segunda en `redes-texto-titulo`. Ejemplo: "La contabilidad / no es una receta."
- **Titular en dos pesos** (`redes-titular-ligero`): una palabra fuerte en Bold y el resto en Light, todo azul. Ejemplos: "Suspensión / de actividades", "Pregunta / rápida:".
- **Palabra con degradado**: la palabra clave del titular lleva el degradado de `gradient-03-start` a `gradient-03-end`, a veces en itálica. Ejemplos: "¿Tu sistema ***aprende...***", "o realmente ***entiende?***". Una sola por pieza.
- **Escala grande para historias** (`redes-titular-historia`): 80px.
- **Cuerpo** (`redes-cuerpo`): Regular en `redes-texto-cuerpo`. Las palabras clave pasan a Bold en `redes-azul` o `redes-azul-profundo`, una o dos por bloque, nunca frases enteras.
- La marca dentro del texto va en Bold azul ("Eso es lo que hace **núvara.**"). Sobre azul o sobre foto, se reemplaza por el wordmark blanco ("Todo lo que hace [núvara] por cada factura").
- Los pills de encabezado van en MAYÚSCULAS ("INTELIGENCIA CONTABLE REAL"). Todo lo demás va en caja de oración.
- Frases cortas, con punto final, partidas en líneas de 3 a 4 palabras.

## Fondos

Hay cuatro, y cada pieza usa uno solo:

1. **Gris con marca de agua** (`RedesFondo`): degradado de `redes-fondo-inicio` a `redes-fondo-fin`, con el isotipo gigante en blanco. Es el fondo por defecto para contenido educativo, encuestas y avisos.
2. **Azul sólido**: `redes-azul` plano con el isotipo de marca de agua al 6 % en blanco. Va con texto blanco y tarjetas blancas. Se usa en carruseles técnicos (IVA, tarifas).
3. **Degradado de marca**: de `brand-verde-turquesa` (arriba) a `redes-azul` (abajo), con la marca de agua. Se usa en piezas de producto ("¡Genera la causación completa!") y en listas numeradas sobre foto.
4. **Foto** (ver Fotografía): personas reales, con un velo `redes-azul` a la izquierda, un fundido blanco abajo (historias) o un fundido oscuro abajo (portadas de reel).

## Componentes

- **Tarjeta blanca** (`TarjetaDestacada`): esquinas `redes-radius-tarjeta` y sombra `redes-sombra-tarjeta`, con un ícono de línea azul. Es el remate del post.
- **Ícono en círculo** (`IconoCirculo`): círculo `redes-azul` con el ícono oficial de la familia blanca (`assets/Iconos/`), o Lucide blanco si el set no tiene ese ícono. Las variantes son:
  - el ícono solo, en línea azul, para listas largas;
  - un cuadrado redondeado con el degradado de marca y el ícono blanco, dentro de tarjetas;
  - un círculo blanco con el ícono azul, sobre fondos azules.
- **Comparativa** (`TarjetaComparativa`): dos tarjetas con **borde degradado** y un pill degradado de encabezado en mayúsculas, unidas por un círculo "VS" degradado. Cada una lleva una lista con viñetas y palabras clave en Bold.
- **Bloque degradado**: un rectángulo con el degradado de marca y texto blanco que mezcla Light y Bold ("Hoy **todos queremos** lo **mismo:**"). Va en el centro de la pieza como frase protagonista.
- **Pill turquesa** (`PillTurquesa`): `brand-verde-turquesa` sólido con texto blanco en `redes-pill`, para matizar el titular.
- **Pill azul de categoría:** `redes-azul` con texto blanco en `redes-etiqueta` ("empresa a").
- **Chips de contorno:** pills de borde blanco de 2px sobre azul, con texto blanco Bold, para listar valores ("19%", "5%", "Exento", "Excluido").
- **Pill de frase clave:** un pill blanco con texto `redes-azul` que encierra el remate de una frase sobre foto ("ejecutar **operaciones contables**").
- **Lista numerada:** círculos `redes-azul` con el número en blanco y el texto en pills blancos al 85 %, con verbos en Bold ("**Calcula IVA** y retenciones").
- **Cifra comparativa:** número grande en Bold + unidad chica + flecha + resultado ("100 causaciones manuales → +8 horas" / "100 causaciones con núvara → −1 hora").
- **Botón simulado:** un botón `redes-azul` con un cursor encima ("Aprobar"). Muestra la promesa de control: el usuario solo aprueba.
- **Arco de marca** (`ArcoMarca`): un trazo grueso de círculo parcial con el degradado de marca, cortado por una esquina. Da movimiento a piezas con mucho aire (LinkedIn, portadas).
- **Pie de página:** "www.nuvara.com.co" o "Síguenos" con los íconos de redes, chico y centrado abajo.
- **Siguiente lámina:** `>>>` en `redes-azul` (o blanco sobre foto), abajo a la derecha.

## Fotografía

- Personas reales del perfil del Brand OS: contadores y empresarios colombianos de 25 a 45 años, diversos, en oficinas cálidas con madera, bibliotecas, plantas y luz natural. Trabajan con laptop, tablet o papeles.
- Expresión segura y cercana: sonrisa natural o gesto de análisis. Nunca estrés exagerado ni poses de banco de imágenes.
- **Banco oficial de fotos:** Drive › "2. Sesión de fotografía núvara" (https://drive.google.com/drive/folders/1x1kZL9_c5bmwgGctAdkHs98uySHUMRDc). Son 50 fotos (Nuvara-*.JPG, ~10 MB cada una, horizontales y verticales) de personas reales en la oficina de biblioteca con arcos y madera que se ve en reels y posts. **Para portadas, reels y piezas con foto, usá primero estas fotos.**
- Las fotos generadas con IA son el último recurso, cuando el banco no tiene la escena. Siguen las mismas reglas y llevan un velo de marca encima, nunca van solas.

## Nuvi en redes

- Nuvi aparece en 3D, grande, en primer plano abajo a la derecha, con un objeto de la pose oficial: laptop, portapapeles, calculadora o cartel.
- **Vestuario de temporada** permitido: camiseta de la Selección Colombia en partidos y fechas patrias, siempre con su silueta, gafas y franja intactas.
- Solo va en contenido educativo, informativo, encuestas o de comunidad. No protagoniza anuncios de producto, promociones ni piezas de cobro (Brand OS).

## Desvíos detectados en piezas publicadas (no repetir)

| Visto en | Problema | Corrección según el Brand OS |
|---|---|---|
| "IA TRADICIONAL" | "IA" sola | "Software tradicional" vs "Inteligencia contable real" |
| "Así automatizas una causación" | "automatizar" | "Así eliminas la carga operativa de una causación" |
| "Hola, soy Nuvy" | Nombre del personaje | "Nuvi" |
| "En Nuvara hacemos…" | Escritura de la marca | "En núvara…", o mejor: "Con núvara…" |
| "Solicita una demo en vivo" | "demo" | "Agenda una demostración en vivo" |

## Contraste

- El blanco sobre `brand-verde-turquesa` y sobre el extremo turquesa del degradado no llega a 3:1. Úsalo solo en Bold de 40px o más.
- `redes-texto-cuerpo` sobre la parte más oscura del fondo gris queda cerca de 3.6:1, así que el cuerpo nunca baja de 30px.
- Sobre foto, el texto blanco siempre va sobre el velo o el fundido, nunca directo sobre la imagen.
