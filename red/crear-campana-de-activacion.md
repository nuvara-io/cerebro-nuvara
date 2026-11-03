---
id: crear-campana-de-activacion
tipo: procedimiento
titulo: Crear una campaña con código de activación
tema: campanas-de-activacion
publico: I
estado: verificado en el código
ruta: [Plataforma, Parámetros, Códigos de activación]
url: /platform/activation-codes
siguiente: enviar-campana-por-correo
actualizado: 2026-11-03
fuentes:
  - platform@5241b3430
---

# Crear una campaña con código de activación

## Antes de empezar
- [I] Necesitas ser superadministrador de la plataforma.
- [I] Define el código (lo que la persona va a escribir), a qué público va y cuántas facturas regalas.

## Pasos
1. [I] Entra a **Plataforma › Parámetros › Códigos de activación** y pulsa **Nueva campaña**.
2. [I] Escribe el **Código** (de 3 a 64 caracteres). No se puede cambiar después.
3. [I] Completa **Segmento** (por ejemplo, contadores o firmas de un gremio), **Facturas gratis** (por defecto 20, hasta 1.000), **Cupo de canjes** (vacío es sin límite) y **Vence el** (vence al final de ese día).
4. [I] Guarda. La campaña queda en la lista con el interruptor **Activa**; apágalo para cerrarla.
5. [I] Revisa el **Mensaje de crédito agotado**: título, mensaje, texto y enlace del botón que ve quien termina su prueba. Por defecto lleva a **Habilitar mi cuenta**.
6. [I] Comparte el enlace `app.nuvara.com.co/signup?code=<CÓDIGO>` en la pieza o el anuncio, o envía la campaña por correo.

## Cómo seguirla
- [I] En la lista ves **Canjes** (usados sobre el cupo) y el **Embudo**: Canjes → Causaron → Crédito agotado → Habilitadas.
- [I] **Canjes** abre el detalle por cuenta, con su consumo y estado (**En prueba** o **Habilitada**), y las acciones **Reintentar crédito** y **Habilitar**.

## Si algo no sale
- [I] **Quiero cambiar el código:** no se puede. Apaga la campaña y crea otra.
- [I] **Alguien no recibió el crédito:** en **Canjes**, usa **Reintentar crédito**.
