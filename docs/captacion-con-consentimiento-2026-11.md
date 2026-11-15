# Captación con consentimiento: contactos nuevos hasta la demostración en vivo

Propuesta del 14/11/2026 para conseguir prospectos que todavía no conocen núvara y llevarlos a una demostración en vivo, sin comprar ni raspar bases de datos. Las piezas están en el calendario de marketing (`red/calendario.json`) como propuestas **por revisar**; nada sale hasta que el operador las apruebe.

## La idea en una línea

Cada canal (Instagram, Facebook, LinkedIn, sitio) termina en **un formulario con autorización de datos**. Quien lo llena entra a la base propia de núvara con su consentimiento, y desde ahí sí se le escribe por correo y por WhatsApp para agendar la demostración en vivo.

## Por qué no se compran ni se raspan bases

- **Ley 1581 de 2012 y Decreto 1377 de 2013:** el correo de mercadeo necesita autorización previa, expresa e informada. Una lista comprada o sacada de internet no la tiene, y la SIC sanciona con multas de hasta 2.000 salarios mínimos.
- **La plataforma ya lo bloquea:** al importar contactos a una campaña de correo, todo lo que no sea "autorización previa" o "relación comercial", incluido el "dato público", se rechaza (`campanas-de-activacion`).
- **Reputación del dominio:** las listas frías rebotan y se marcan como spam; después ni los correos a usuarios reales llegan a la bandeja.
- **Mensajes masivos en Instagram:** Meta restringe las cuentas que escriben en masa a desconocidos.

## Las cuatro fuentes de contactos

### 1. Formulario instantáneo de Meta (pauta) — la principal

- Anuncio con objetivo **Clientes potenciales** y formulario instantáneo, en lugar de llevar a WhatsApp. En Axioma POS, la pauta a conversaciones de WhatsApp trajo curiosos que no se registraban; el formulario que pregunta perfil y tamaño filtró mejor (`marketing-y-adquisicion`).
- **Preguntas del formulario** (son el diagnóstico de la demostración en vivo, así el asesor llega preparado):
  1. ¿Eres contador independiente, firma contable o empresa?
  2. ¿Cuántas empresas llevas?
  3. ¿Cuántas facturas de compra recibes al mes, más o menos?
  4. ¿Qué programa contable usas?
  5. Nombre, correo y WhatsApp (prellenados por Meta).
- **Casilla de autorización, no marcada de antemano:** "Autorizo a núvara a tratar mis datos para contactarme por correo y WhatsApp sobre la plataforma, según su política de privacidad." Con el enlace a la política.
- **Después del envío:** "Un asesor te escribe por WhatsApp para agendar tu demostración en vivo."
- Piezas: `a19` (agendar la demostración en vivo, desde el 23/11) y `a20` (calendario de vencimientos de enero como regalo, desde el 14/12).

### 2. Orgánico en Instagram y Facebook

- Los posts del plan de redes siguen igual. Se suman dos piezas con llamado directo al formulario (`p37`, `p38`) y una para el regalo de enero (`p39`).
- El enlace de la biografía lleva a la página de inscripción del sitio (`s12`), que tiene el mismo formulario con la misma casilla.
- **Mensajes directos:** solo se responden a quien escribe o comenta primero. Si pide información, se le manda el enlace del formulario; no se le pide el correo por mensaje sin la autorización.

### 3. LinkedIn uno a uno

Es una rutina del equipo comercial, no una publicación, por eso no está en el calendario.

- Hasta 15 contactos al día con contadores y firmas contables: los que reaccionan o comentan las publicaciones de núvara y los que aparecen en búsquedas de "contador público" en Colombia.
- Solicitud de conexión sin mensaje de venta. Cuando acepta, un mensaje escrito para esa persona, de tú: qué hace, una línea de lo que núvara prepara para un caso como el suyo y la invitación a la demostración en vivo.
- Nunca se copia su correo de LinkedIn a una lista. Si quiere seguir, se le manda el enlace del formulario o se agenda ahí mismo.
- Se anota en el CRM: nombre, perfil, fecha de contacto y si respondió.

### 4. La base que ya existe

Antes de pagar más pauta (`recontactar-leads-sin-respuesta`):

- **Prospectos sin respuesta** en la bandeja del CRM: segundo contacto uno a uno desde WhatsApp Business.
- **Organizaciones atascadas** del Panel (Retención y activación): ya se registraron, hay relación comercial y se les puede escribir para ofrecer la demostración en vivo.

## Qué pasa con cada contacto nuevo

1. **El mismo día:** el asesor le escribe por WhatsApp Business con lo que respondió en el formulario y le propone dos horarios para la demostración en vivo. Los sábados convierten bien.
2. **Si no responde en 2 días:** correo de campaña (Plataforma › Parámetros › Códigos de activación › Correos), con base de consentimiento "autorización previa" y el origen del formulario en cada fila.
3. **Si no responde en 5 días más:** último mensaje por WhatsApp. Después queda en la base para las campañas de cierre de mes, salvo que pida la baja.
4. **Demostración en vivo:** sigue la estructura de `demostracion-en-vivo` (diagnóstico, qué hay hoy, crear la empresa, entrada de facturas, precausación, aprobación por grupos, envío al programa contable).
5. **Registro:** con el enlace del código de su canal, para saber de dónde llegó.

## Medición: un código por canal

Hoy no se guarda la fuente ni los UTM de un registro. Con lo que ya existe se resuelve así: un código de activación por canal, creado en **Códigos de activación**. Los nombres son propuesta y se crean solo si el operador aprueba:

| Canal | Código |
|---|---|
| Formulario de Meta (agendar) | `DEMOMETA` |
| Formulario de Meta (calendario de enero) | `ENERO27` |
| Página de inscripción del sitio (sale el 17/11) | `DEMOSITIO` |
| LinkedIn uno a uno | `DEMOLINKEDIN` |
| Recontacto de la base | `DEMOBASE` |

Por cada código se ven Canjes → Causaron → Crédito agotado → Habilitadas. En el CRM se suma: contactos con autorización → demostraciones agendadas → demostraciones hechas.

## Lista legal antes de publicar (la revisa Legal)

- [ ] Política de privacidad publicada en nuvara.com.co, con finalidades que incluyan contacto comercial por correo y WhatsApp.
- [ ] Casilla de autorización sin marcar en el formulario de Meta y en la página del sitio, con enlace a la política.
- [ ] Prueba de cada autorización guardada: fecha, formulario y texto aceptado (Meta la exporta con el contacto).
- [ ] Pie legal completo en la campaña de correo (razón social, NIT, dirección y política) y la baja funcionando.
- [ ] Revisar si núvara debe inscribir la base en el Registro Nacional de Bases de Datos de la SIC.

## Decisiones que quedan para el operador

- Presupuesto de `a19` y `a20`. Está propuesto en cada pieza, aparte del laboratorio que termina el 25/11.
- Quién del equipo comercial atiende los formularios el mismo día, y con qué número de WhatsApp Business.
- Si se suma una demostración en vivo en grupo los sábados para quien no consigue horario. Hoy la demostración es uno a uno y usa los datos del prospecto.
- Crear los códigos por canal.
