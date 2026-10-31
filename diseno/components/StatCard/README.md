Tarjeta blanca que destaca una cifra verificable. Lleva un ícono blanco en círculo `redes-azul`, el número en `video-stat-number` `redes-azul` y la etiqueta en `video-stat-label` `redes-texto-cuerpo`. Reemplaza al antiguo pill con degradado de la línea anterior.

**Qué provee quien lo usa:** `value`, `label` (máx. 5 palabras) e `icon` (factura, tiempo, calendario, crecer, seguridad, candado, usuario, regalo, listo).

**Movimiento:** la tarjeta entra en `motion-enter` y el número cuenta de 0 al valor en `motion-count-up`, sin cambiar de ancho.

**Reglas:**
- Solo cifras sustentadas por el producto o el Brand OS, como "15 segundos por causación" o "500 causaciones en una hora o menos".
- Una por escena.
- En código: `src/components/StatCard.tsx`.
