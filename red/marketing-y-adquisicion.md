---
id: marketing-y-adquisicion
titulo: Marketing y adquisición
publico: C
actualizado: 2026-11-03
conexiones:
  - linea-grafica           # cómo se ven las piezas
  - mensajes-y-afirmaciones # qué se puede afirmar en pauta
  - embudo-de-adquisicion   # del primer contacto a la cuenta habilitada
  - campanas-de-activacion  # códigos y correos de campaña
fuentes:
  - diseno/README.md
  - conocimiento/demostraciones-y-ventas.md#posicionamiento-y-público
  - conocimiento/sitio-web.md
  - platform@5241b3430     # landing, códigos de activación y correo de campaña, verificado el 03/11/2026
---

# Marketing y adquisición

Cómo núvara sale a buscar usuarios: las piezas gráficas y la pauta, los mensajes que se pueden afirmar, las campañas con código de activación y el camino de un prospecto hasta su cuenta habilitada.

## Qué cubre esta red
- [C] **Piezas gráficas:** posts, carruseles, historias, portadas de reel, reels, LinkedIn y tutoriales, con una sola línea gráfica.
- [C] **Mensajes:** qué se dice en un anuncio y qué cifras se pueden publicar.
- [C] **Campañas de activación:** un código que regala facturas para probar núvara, con su envío por correo a una lista de contactos.
- [C] **Embudo:** del primer contacto a la cuenta habilitada, con dónde se mide cada etapa.

## Fuentes de verdad
- [C] Cómo se ve y suena: el cerebro de diseño (`diseno/` y su vista en https://claude.ai/artifact/44mTTe4PPiDv33UWqWsaPL), el Brand OS y el key visual.
- [C] Qué es y qué hace núvara: `conocimiento/` y esta red. Precios: los del sitio y los confirmados por el equipo.
- [C] Fotos: el banco oficial con personas reales. Piezas publicadas: Drive › Marketing › Piezas gráficas.

## Canales
- [C] **Redes:** Instagram, Facebook, TikTok y LinkedIn, con posts, carruseles, historias y reels.
- [C] **Sitio** nuvara.com.co: sus llamados a la acción llevan a **WhatsApp** ("Agendar demostración", "Hablar con un asesor") o a iniciar sesión. No tiene un botón directo de registro.
- [C] **Demostración en vivo:** es donde más se cierra. Los sábados convierten bien.
- [C] **Correo de campaña** con código de activación, solo a contactos con autorización previa o relación comercial.
- [C] **Enlace con código:** `app.nuvara.com.co/signup?code=<CÓDIGO>` registra a la persona y le aplica el código en un paso.

## Pauta paga
- [C] Los anuncios siguen la misma línea gráfica y solo usan las afirmaciones permitidas. Su destino es el WhatsApp del asesor o un enlace con código de activación.
- [I] El sitio carga Google Tag Manager con el modo de consentimiento (denegado por defecto, Ley 1581) y registra el evento `whatsapp_click`. En el código no hay píxel de Meta; las etiquetas que se configuren en Tag Manager viven fuera del repo.
- [I] El guion del agente de WhatsApp (Vocero CRM) reparte un código de 20 facturas con su enlace de registro. Si ese código está activo se ve en **Códigos de activación**; los códigos no están en el repo.
- [I] Presupuestos, segmentaciones, resultados por campaña y costo por registro no están en el cerebro.

## Lo que hoy no existe
- [C] **Programa de referidos:** no está en la plataforma; las condiciones que se dijeron en reuniones no son oficiales.
- [C] **Prueba por tiempo:** la prueba dura lo que el crédito de bienvenida, no un número de días.
- [I] No se guarda la fuente ni los UTM de un registro: la única atribución es el enlace del correo de campaña. No se miden aperturas ni clics de los correos.
