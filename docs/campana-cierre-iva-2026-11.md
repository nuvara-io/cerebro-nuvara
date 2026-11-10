# Campaña de prueba: "Llega al cierre con todo causado"

Primera pauta de prueba de núvara, para la semana del 3 al 9 de noviembre de 2026 y hasta el cierre de IVA. Presupuesto pequeño y 5 anuncios distintos para ver cuál atrae más; después la plata va al que gane. Sale del plan de noviembre de `red/planeacion-de-marketing.md`.

> **Cambio del 05/11/2026:** N1 a N5 no salen en una campaña aparte de $8.000 diarios. Se suman a NUVARA20 (cuenta de Proyeckta), con $30.000 diarios hasta el 15/11/2026 y el código NUVARA20, junto al anuncio "Ponte al día".
>
> **Cambio del 09/11/2026:** NUVARA20 queda apagada. La pauta del 10 al 25 de noviembre va en una campaña nueva, `NV | Laboratorio | Ponte al día IVA | WhatsApp | 2026-11` (borrador en la cuenta de Proyeckta, sin publicar hasta que los socios aprueben en el calendario de marketing). Son $30.000 diarios con un límite total de $480.000 y tres videos: Ponte al día, Cierre IVA y Oferta 20 facturas. N2 a N5 quedan en reserva. El detalle está en el calendario y en `red/pauta-en-meta.md`.

## Por qué ahora

- **IVA bimestral (septiembre-octubre):** vence del 11 al 25 de noviembre de 2026 según el último dígito del NIT. Las facturas tienen que estar causadas antes.
- **Gancho del mes:** "¿te falta alguna factura frente a la DIAN?". núvara compara las facturas del mes con el listado de la DIAN y muestra las que faltan (`red/comparar-con-la-dian.md`), y nadie más lo usa como bandera.
- **Black Friday (27/11):** solo si hay una oferta oficial. Esta campaña no la usa.

## Público

- Contadores independientes y firmas contables con empresas pequeñas en Colombia. Se les habla técnico y con precisión: tiempo, criterio y control.
- Meta: Colombia, 25 a 60 años, público Advantage+ (las edades van como sugerencia). El creativo es el que filtra.

## Estructura en Meta

- **Objetivo:** Interacción → **conversaciones por WhatsApp** (anuncios Click to WhatsApp). La demostración en vivo es la etapa que más cierra y empieza en WhatsApp.
- **Una campaña, un conjunto y 5 anuncios.** Ubicaciones Advantage+ (Facebook e Instagram) y público Advantage+.
- **Presupuesto:** **$8.000 diarios para toda la campaña** durante 7 días, unos $56.000. Es una prueba de concepto: Meta le da más a lo que arranca mejor, así que sirve para ver cuál atrae, no para una comparación exacta.
- **Pago:** con la tarjeta de la cuenta publicitaria. Meta cobra cada vez que el gasto llega a su tope, sin recargar saldo antes.
- **Nombre:** `NV | Prueba creativos | Cierre IVA | WhatsApp | 2026-11`.

## Cómo se mide (lo que núvara tiene y otros no)

- La plataforma no guarda UTM, pero sí tiene **códigos de activación con embudo** (Canjes → Causaron → Crédito agotado → Habilitadas). Se crea **un código por anuncio** con `red/crear-campana-de-activacion.md`, con el crédito de bienvenida de siempre (20 facturas).
- El asesor entrega por WhatsApp el enlace `app.nuvara.com.co/signup?code=<CÓDIGO>` del anuncio por el que llegó la persona. Así el embudo de cada código dice qué anuncio trajo cuentas habilitadas, no solo mensajes.
- **Códigos:** `CIERRE-REEL`, `CIERRE-DIAN`, `CIERRE-500`, `CIERRE-PROGRAMAS`, `CIERRE-PRECIO`, con vencimiento el 30/11/2026.
- En Meta: costo por conversación iniciada, CTR y retención a 3 segundos del reel.

| Indicador | Qué dice | Dónde |
|---|---|---|
| **Costo por conversación** | Cuánto cuesta que un contador escriba | Ads Manager |
| CTR y retención a 3 s | Si el gancho frena el scroll | Ads Manager |
| **Canjes y causaron** por código | Si el anuncio trae gente que de verdad prueba | Plataforma › Códigos de activación |
| **Habilitadas** por código | Qué anuncio trajo plata | Plataforma › Códigos de activación |

## Los 5 anuncios

Cada uno es un concepto distinto (ángulo, formato y primera imagen), porque Meta agrupa los anuncios que se parecen. Todo en la línea de `diseno/redes.md`: Poppins, titular en dos tonos o dos pesos, fondo gris con isotipo o azul, y núvara siempre en minúscula.

| # | Concepto | Pieza | Estado |
|---|---|---|---|
| N1 | **Vence el IVA: revisas y apruebas, no digitas** | Reel 9:16 de 36 s | Listo: `out/reels/reel-causacion.mp4` |
| N2 | **¿Te falta alguna factura frente a la DIAN?** | Carrusel 4:5 de 5 placas con la comparación | Listo: `src/posts/modulos/CierreIva.tsx` |
| N3 | **500 causaciones en una hora o menos** | Post 4:5 | Base: `src/posts/Post500Causaciones.tsx` |
| N4 | **Clientes en varios programas, un solo panel** | Post 4:5 | Listo: `src/posts/modulos/CierreIva.tsx` |
| N5 | **Pagas lo que causas** | Post 4:5 | Listo: `src/posts/modulos/CierreIva.tsx` |

### Textos

**N1 · Reel**
- Gancho en pantalla (primer segundo): "Del 11 al 25 vence el IVA. ¿Ya causaste todo?"
- Guion: el problema (facturas por digitar a días del cierre) → núvara trae las facturas de la DIAN y del correo, arma PUC, IVA y retenciones → tú revisas y apruebas con la factura original al lado → exportas a tu programa contable → cierre: "Con núvara, siempre mantienes el control de tu operación."
- Texto principal: Del 11 al 25 de noviembre vence el IVA. núvara trae tus facturas de la DIAN y del correo y prepara la causación con PUC, IVA y retenciones. Tú revisas, validas y apruebas. Nada se exporta sin tu aprobación.
- Título: Llega al cierre con todo causado

**N2 · Carrusel**
- Placas: 1) "¿Te falta alguna factura frente a la DIAN?" · 2) Subes el listado del mes de la DIAN · 3) núvara cruza por CUFE: En DIAN, En núvara, Conciliadas, Faltan · 4) Las que faltan las traes y quedan listas para causar · 5) "Llega al cierre sin sorpresas" + llamado.
- Texto principal: Antes de presentar el IVA, compara las facturas del mes con el listado de la DIAN. núvara te muestra cuáles tienes, cuáles te faltan y cuáles no cuadran, y las que faltan quedan listas para causar.
- Título: ¿Te falta alguna factura?

**N3 · 500 causaciones**
- Texto principal: 500 causaciones en una hora o menos, cerca de 15 segundos por factura. núvara interpreta y prepara; tú apruebas por grupos, no una por una. Llega al cierre de IVA con el tiempo de tu lado.
- Título: 500 causaciones en una hora o menos

**N4 · Varios programas**
- Texto principal: Si tus clientes llevan la contabilidad en programas distintos, núvara causa desde un solo panel y exporta a su programa contable. Si aún no tenemos el formato, lo generamos. Una sola forma de trabajar para todas tus empresas.
- Título: Todas tus empresas, un solo panel

**N5 · Pagas lo que causas**
- Texto principal: Causar una compra cuesta $510 y una venta $200, sin permanencia. El mínimo mensual de consumo es $80.000 y, si causas más, pagas tu consumo real.
- Título: Pagas lo que causas

Botón en todos: **Enviar mensaje** (WhatsApp). El llamado en las piezas es "Escríbenos y agenda tu demostración en vivo" o "Prueba núvara con 20 facturas".

### Revisión antes de publicar

- núvara en minúscula y con tilde, de tú, sin "IA" sola, sin "demo", sin "automatizamos" ni "cliente" para el usuario.
- Solo cifras permitidas (`red/mensajes-y-afirmaciones.md`): las de 80 %, 88 % o 90 % de ahorro no van.
- Nunca "núvara decide": núvara interpreta y prepara, tú apruebas.
- Sin nombrar competidores. El proyecto de Ley de Rescate no se menciona como vigente.

## Antes de lanzar

1. **Cuenta publicitaria:** la cuenta "Nuvara" del portafolio de núvara (1096957049816595) se ve desde el conector pero **no tiene método de pago**. La de Proyeckta (938210369121882) sí tiene, pero el conector todavía no puede operarla. Hay que agregar la tarjeta a la del portafolio de núvara o esperar el acceso a la otra.
2. **Página:** "Núvara Causación contable con IA" (1118707324659209), con Instagram **nuvaracol**. Su nombre rompe la marca (mayúscula y la sigla sola): conviene corregirlo antes de pautar, como dice el plan de marketing.
3. **WhatsApp Business** verificado en la página, con un mensaje de bienvenida propio ("Hola, cuéntame cuántas empresas llevas y te muestro núvara con tus facturas").
4. **Códigos de activación** creados (uno por anuncio), activos y con el aviso de crédito agotado revisado ("núvara" en minúscula y "créditos", no "Nuvicoins").
5. **Piezas** N1, N2, N4 y N5 hechas con Remotion (`src/posts/`) y revisadas.

## Reglas de decisión

- **Días 1 y 2:** no se toca nada.
- **Día 3:** se apaga el que tenga CTR por debajo de 0,8 % y costo por conversación del doble de los demás.
- **Día 7:** gana el que traiga más **cuentas que causaron** por peso gastado (embudo del código). Si empatan, el de menor costo por conversación.
- **Siguiente ronda (diciembre):** el ángulo ganador se adapta al "Cierre anual sin trasnochar".

## Calendario de esta semana

| Día | Qué |
|---|---|
| Martes 3 | Plan y textos (este documento) |
| Miércoles 4 | Piezas N1, N2, N4 y N5; códigos de activación |
| Jueves 5 | Revisión de piezas, página y WhatsApp; campaña en borrador en Meta |
| Viernes 6 | Publicar y crear la prueba de creativos |
| Lunes 9 | Primera lectura (días 1 a 3) |
| Martes 11 | Arranca el vencimiento de IVA: la pauta ya debe estar andando |
