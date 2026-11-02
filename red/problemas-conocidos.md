---
id: problemas-conocidos
titulo: Problemas conocidos
publico: I
actualizado: 2026-11-02
conexiones:
  - seguridad-y-soporte   # cómo reportar el error o a quién escalarlo
fuentes:
  - conocimiento/por-confirmar.md#interfaz-registro-y-estabilidad
  - conocimiento/por-confirmar.md#6
  - conocimiento/objeciones-y-dolores.md#estabilidad-y-soporte
  - conocimiento/objeciones-y-dolores.md#uso-pantalla-y-arranque
  - conocimiento/producto.md#dudas-de-producto-abiertas
---

# Problemas conocidos

Errores y fallas que ya se reportaron en capacitaciones y soporte, para reconocerlos rápido. Las fechas son de 2026 y vienen de reuniones: confirma con el equipo de desarrollo si un error sigue abierto antes de dárselo por hecho al usuario.

## Errores de registro y configuración inicial
- [I] La carga del RUT falla de forma intermitente, y el ingreso manual sin RUT bloquea el registro (10/07, 18/08).
- [I] El balance subido no quedó cargado (19/08); la reimportación del plan de cuentas omitió cuentas (174 en un caso, 30/07).
- [I] La importación del plan "desde el plan base" no funcionó (11/07).
- [I] El selector de cuentas no muestra cuentas sin movimiento (18/08).
- [I] La fecha de inicio muestra un valor por defecto distinto del elegido (25/08).
- [I] "Olvidé mi contraseña" no enviaba el correo (10/07).

## Fallas en la causación y la revisión
- [I] El visor de PDF no se actualiza al cambiar de factura (15/05).
- [I] La opción de IVA "línea separada en la misma cuenta" falló (13/05).
- [I] Al pasar la forma de pago desde la factura, una transferencia se interpreta como crédito (10/08).
- [I] Las notas crédito se leen a veces como factura y desajustan el valor.
- [I] El estado de pago no aparece tras causar y aprobar (18/06).
- [I] Tras importar el plan de cuentas, una retención apareció con el nombre equivocado.

## Fallas en papelera, archivo y envíos
- [I] "Restaurar factura" no funcionó con cuatro facturas (24/08).
- [I] Facturas archivadas reaparecen con error en el panel de envíos (21/08).
- [I] Papelera: al eliminar y volver a sincronizar, la factura no reaparece (10/08) o reaparece (8/07); comportamiento sin confirmar.
- [I] La descarga masiva de PDF falló con cientos de facturas (14/05).
- [I] El centro de costo obligatorio en Siigo no se valida antes del envío y bloquea el envío.

## Estabilidad del servidor y cambios de versión
- [I] Hubo lentitud o caídas del servidor justo cuando el usuario necesitaba causar, y semanas de inestabilidad.
- [I] Tras cambios de versión, usuarios temieron que lo aprobado se hubiera dañado; atiende esa duda antes de seguir.
- [I] Después del rediseño de interfaz (desde el 14/07) aparecieron errores priorizados; algunas pantallas pueden diferir de lo que dicen las capacitaciones.
- [I] Medidas del equipo: política de cambios los viernes y pruebas en local y en el entorno de pruebas antes de producción (10/07).

## Problemas de interfaz y permisos
- [I] La interfaz no se ve completa en pantallas pequeñas (botones recortados, letra pequeña); una usuaria casi abandona por no encontrar un botón.
- [I] Causado y aprobado se ven casi del mismo color (10/04).
- [I] Un usuario no administrador vio otra empresa o no pudo entrar; causa sin confirmar.
- [I] Nombres que confunden: Archivadas, "Archivo del mes" y biblioteca de exportación parecen la misma pantalla; aprobar por lote, por grupo o seleccionadas.
- [I] Varias pantallas y mensajes escriben la marca con mayúscula o usan el nombre viejo de los créditos; hay que corregirlos.

## Qué no es un error de núvara
- [I] Muchos errores de exportación vienen de la configuración del programa contable del usuario (terceros mal creados, cuentas inexistentes, centros de costo obligatorios).
- [I] Una factura que llega solo en PDF, sin XML, no se procesa: es el comportamiento esperado.
- [I] Las caídas y bloqueos del portal de la DIAN son de la DIAN; la extensión y la comparación ayudan a recuperar lo que falte.
- [I] Muchas consultas al soporte son preguntas de uso, no errores (por ejemplo, cómo vincular el correo).

## Cómo se reporta un error
- [I] El usuario lo reporta desde el chat de soporte integrado o con la herramienta de captura de pantalla, desde cualquier pantalla.
- [I] No hay alertas automáticas: los errores dependen de que el usuario los reporte. El monitoreo de errores en el panel del superadministrador es una idea.
- [I] Si no lo reproduces, el equipo lo prueba con una copia de los datos; el arreglo llega a la cuenta del usuario cuando se publica.
- [I] Para el canal y los tiempos de soporte, sigue en `seguridad-y-soporte`.
