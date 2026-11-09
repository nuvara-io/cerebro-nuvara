---
id: seguridad-y-soporte
titulo: Seguridad y soporte
publico: P
actualizado: 2026-11-02
conexiones:
  - que-es-nuvara         # "¿es seguro?" al conocer núvara
  - problemas-conocidos   # solo I: cómo reportar o escalar un error
fuentes:
  - conocimiento/sitio-web.md#seguridad-y-soporte
  - conocimiento/por-confirmar.md#2-precios-y-modelo-comercial   # capacitación incluida
  - conocimiento/por-confirmar.md#4-afirmaciones-comerciales-sin-validar
  - conocimiento/preguntas-frecuentes.md#créditos-y-soporte
  - conocimiento/objeciones-y-dolores.md#estabilidad-y-soporte
  - platform@5241b3430   # header-help.tsx (Ayuda), encryption.service.ts
---

# Seguridad y soporte

Cómo cuida núvara tus datos, cómo pides ayuda y qué capacitación hay.

## Cómo protege núvara tus datos
- [P] Las credenciales y los datos sensibles, como las contraseñas de tu correo y las credenciales de tu programa contable, se guardan cifrados con **AES-256-GCM**.
- [P] La base de datos tiene respaldo diario, con 7 días de retención.
- [P] La información de cada empresa está separada: cada una tiene su configuración, sus cuentas y sus facturas.
- [P] Cada usuario ve solo lo que su rol le permite: un operador solo ve las empresas que le asignan.
- [P] Para Siigo, núvara usa las credenciales de la API; nunca te pide la contraseña de tu programa contable.

## Tú mantienes el control
- [P] núvara interpreta y prepara la causación; nada sale a tu programa contable sin que lo revises y lo apruebes.
- [P] Cada causación queda junto a la factura original, para revisarla cuando la necesites.
- [P] Lo que borras va primero a la **Papelera**, desde donde lo puedes restaurar.

## Cómo pides ayuda
- [P] En la parte superior de la plataforma, el botón **Ayuda** abre tres opciones: **Centro de ayuda**, **Soporte** y, cuando está disponible, **Reportar un error**.
- [P] **Soporte** abre el chat con el equipo de núvara: allí pides ajustes, correcciones y reportas errores, y te responden en la misma conversación.
- [P] **Reportar un error** envía al equipo técnico una captura de la pantalla con tu descripción.
- [P] El sitio de núvara también tiene el botón **Hablar con un asesor**, por WhatsApp.

## Capacitación y tutoriales
- [P] **Centro de ayuda** (también con **Ctrl+K**) busca tutoriales en video y acciones desde la pantalla donde estás.
- [P] La pantalla de causación tiene un **recorrido guiado** que te muestra cada parte.
- [P] La capacitación en vivo con el equipo es opcional y vale $150.000.
- [P] Si quieres conocer núvara antes de empezar, pide una demostración en vivo con un asesor.

## Para el equipo
- [C] **Sin confirmar:** la duración de la capacitación en vivo (se ha dicho de 30 minutos a 2 horas más 1 de acompañamiento). Su valor está en `precios`. No prometas una duración.
- [C] **Sin confirmar:** tiempos de respuesta. Se ha dicho "menos de 10 minutos" y también un promedio de dos días; el horario de 8:00 a. m. a 5:00 p. m. y sábados hasta mediodía no está formalizado. No des un tiempo de respuesta.
- [C] El sitio anuncia soporte por chat, correo y teléfono; en la práctica el canal oficial es el chat de **Soporte** de la plataforma.
- [C] Si preguntan por estabilidad: hubo semanas de lentitud y cambios de versión que preocuparon a usuarios. Reconócelo, explica la revisión antes de aprobar y escala al equipo.
- [I] **Reportar un error** solo aparece si su activación está encendida (`useIsBugReporterEnabled`).
- [I] El cifrado AES-256-GCM está en `apps/api/src/lib/encryption.service.ts`. El respaldo diario de 7 días viene del sitio; no se pudo ver en el código.
- [I] Diferencia con `conocimiento/`: `producto.md` dice que el panel de comandos se abre con Ctrl+I; en el código es **Ctrl+K** (⌘K en Mac).
- [I] Las políticas de privacidad y tratamiento de datos estaban sin publicar dentro de la plataforma (30/07/2026); el sitio tiene páginas de términos y privacidad.
