---
id: enviar-campana-por-correo
tipo: procedimiento
titulo: Enviar una campaña por correo
tema: campanas-de-activacion
publico: I
estado: verificado en el código
ruta: [Plataforma, Parámetros, Códigos de activación, Correos]
url: /platform/activation-codes/{campaña}
siguiente: null
actualizado: 2026-11-03
fuentes:
  - platform@5241b3430
---

# Enviar una campaña por correo

## Antes de empezar
- [I] La campaña ya existe y está activa.
- [I] Tienes la lista en Excel o CSV (máximo 5.000 filas y 2 MB) con las columnas **correo**, **origen** y **base de consentimiento**; opcionales: **nombre** y **empresa**.
- [I] Cada contacto tiene **autorización previa** o **relación comercial**. Los demás se rechazan.
- [I] Están completos los **Datos legales del pie**: razón social, NIT, dirección y enlace a la política de privacidad.

## Pasos
1. [I] En **Códigos de activación**, pulsa **Correos** en la campaña.
2. [I] En la pestaña **Contactos**, pulsa **Subir archivo**. Revisa la vista previa: cuántos se importan y cuáles salen como duplicados, suprimidos o rechazados. Pulsa **Importar N contactos**.
3. [I] Escribe la **Plantilla del correo**: **Asunto** y **Mensaje** en texto plano. Puedes usar `{{nombre}}` y `{{empresa}}`; `{{link}}` es obligatorio y se convierte en el botón de registro con el código.
4. [I] Pulsa **Enviarme una prueba** y revísala con la lista de revisión de piezas: marca, tú, vocabulario y cifras permitidas. Sin la prueba no se puede enviar.
5. [I] En **Envíos**, pulsa **Enviar a N nuevos**. Puedes **Pausar envío** y **Reanudar envío**; el tope diario es uno solo para todas las campañas.
6. [I] Sigue los estados (En cola, Enviado, Entregado, Rebotó, Marcó spam, Suprimido) y, en **Registrados**, quién se registró y si canjeó el código y recibió el crédito.
7. [I] Cuando termine el primer envío, puedes usar **Reenviar a N que no se registraron**.

## Si algo no sale
- [I] **Una fila sale rechazada:** la base de consentimiento no es válida o falta el correo.
- [I] **Un contacto pidió la baja:** queda suprimido en todas las campañas y no se puede reactivar.
- [I] **No sé si lo abrieron:** la plataforma no mide aperturas ni clics; mide entregados y registrados.
