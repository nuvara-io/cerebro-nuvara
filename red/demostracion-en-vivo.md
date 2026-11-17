---
id: demostracion-en-vivo
titulo: Demostración en vivo
publico: C
actualizado: 2026-11-17
conexiones:
  - argumentos-de-venta   # qué responder o qué mostrar
  - capacitar-usuarios    # donde se crea la empresa con los datos reales del cliente
fuentes:
  - conocimiento/demostraciones-y-ventas.md#cómo-se-estructura-una-demostración-en-vivo
  - conocimiento/demostraciones-y-ventas.md#cierre-típico
  - conocimiento/demostraciones-y-ventas.md#perfiles-típicos-de-prospecto-genéricos
  - conocimiento/demostraciones-y-ventas.md#qué-decir-y-qué-evitar
  - conocimiento/capacitacion.md#cómo-adaptar-la-demostración-o-capacitación-según-el-perfil
---

# Demostración en vivo

Cómo se prepara, se presenta y se cierra una demostración en vivo de núvara. Es el canal que más ventas trae.

## Cuándo se agenda
- [C] Es gratis y dura unos 30 minutos, por Google Meet.
- [C] Horario: lunes a viernes de 8:00 a. m. a 12:00 m. y de 1:30 p. m. a 4:30 p. m., y sábados de 8:00 a. m. a 12:00 m. Nunca en festivos de Colombia.
- [I] El CRM de WhatsApp la agenda con el calendario del equipo: citas de 30 minutos con 5 de respiro.

## Cómo preparar la demostración en vivo
- [C] La demostración en vivo se hace en la **cuenta demo**: una empresa demo ya creada con facturas de prueba de proveedores ficticios. Solo se muestra cómo funciona núvara; no se crea nada del prospecto.
- [C] No le pidas al prospecto RUT, balance de prueba, correos ni acceso a la DIAN: eso se usa en la capacitación, con los datos reales de su empresa, cuando ya compró.
- [C] Al agendar, pide solo lo del diagnóstico: perfil, cuántas empresas lleva, cuántas facturas de compra recibe al mes y qué programa contable usa.
- [C] Antes de la sesión, restablece la cuenta demo para que traiga facturas pendientes para causar en vivo, un mes para aprobar y otro para exportar.
- [C] Repasa el IVA (gravado, no gravado, descontable, mayor valor): quien evalúa pregunta de dónde sale cada valor.
- [C] Para practicar, graba tu demostración y escúchala para quitar muletillas y silencios largos.

## Cómo se estructura una demostración en vivo
1. [C] **Diagnóstico (5 a 10 min):** cuántas empresas, cuántas facturas al mes, qué programa contable usa, si tiene auxiliares, qué probó antes y qué le duele.
2. [C] **Qué hay hoy:** antes de compartir pantalla, aclara qué está disponible y qué no se ofrece todavía.
3. [C] **La empresa demo:** muestra la empresa ya creada y sus facturas de prueba. Explica que en la capacitación se crea la empresa del cliente con su RUT y su balance de prueba por terceros, que enseña cómo contabilizar a cada tercero.
4. [C] **Entrada de facturas:** explica cómo llegan por correo y por la DIAN (token por empresa y extensión). Un correo puede centralizar varias empresas; la plataforma valida el NIT. En la cuenta demo ya están cargadas.
5. [C] **Estados y una precausación:** Pendientes, Pre-causadas y Aprobadas; lo que queda en pendientes no gasta créditos. Muestra la factura original al lado de la causación, con retenciones, ReteICA y ReteIVA.
6. [C] **Agrupación y aprobación por grupos**, cómo corregir un ítem y que la plataforma lo aprenda; centros de costo si aplican.
7. [C] **Envío al programa contable** (API o archivo) con el indicador verde, el Archivo por mes y la **comparación con la DIAN** para ver faltantes: la cuenta demo trae un listado de la DIAN con facturas que no están en la plataforma.

## Qué mostrar según el perfil del prospecto
- [C] **Contador independiente con muchas empresas:** panel multiempresa, estados y aprobación por grupos.
- [C] **Firma con varios auxiliares:** usuarios y roles, centros de costo y reglas; piloto con una empresa por auxiliar, empezando por las más complejas.
- [C] **Empresa con inventario o centros de costo por vehículo:** reglas por placa, detalle por producto y asociación de productos.
- [C] **Empresa con nómina o bancos:** causación primero y luego los módulos de nómina y Tesorería.
- [C] **Entidad pública:** lectura por radicado, rubros y XML con PDF.
- [C] **Empresario:** centralizar y agilizar procesos, no solo "causaciones".

## Cómo cerrar una demostración en vivo
1. [C] Explica las reglas de créditos, el soporte por chat y WhatsApp y la capacitación en vivo.
2. [C] Acuerda la primera recarga y la fecha de la capacitación. Algunos cierran en la misma sesión; otros empiezan por consumo y recargan a los pocos días.
3. [C] Envía el enlace de pago (tarjeta o PSE; transferencia si hay demora) y pide el RUT para la facturación.
4. [C] Agenda la capacitación con el equipo y propón una sesión de seguimiento.
5. [C] Si el prospecto duda, propón un piloto con una sola empresa y una llamada de confirmación pocos días después.

## Errores que hacen perder la venta
- [C] Silencios largos y muletillas: si no sabes una respuesta técnica, dilo, anota el término contable y comprométete a investigar.
- [C] Prometer "exacto" o cifras de ahorro sin medir.
- [C] Ofrecer lo que no existe; si el prospecto lo pide, se anota para evaluarlo.
- [C] Usar términos negativos ("engorroso") que hacen ver el proceso complejo.
- [C] Mostrar el registro o crear empresas con datos reales del prospecto en la demostración: eso va en la capacitación, cuando el usuario ya compró.

## Para el equipo
- [I] Desde el 17/11/2026 (decisión del equipo): la demostración en vivo es solo en la cuenta demo, con facturas de prueba. `conocimiento/demostraciones-y-ventas.md` describe demostraciones anteriores en las que se creaba la empresa del prospecto con su RUT y su balance; eso hoy pasa en la capacitación (ver `capacitar-usuarios`).
- [I] La cuenta demo se siembra con 50 compras de 5 proveedores ficticios: causa las antiguas, deja pendientes las más recientes, aprueba los meses anteriores, exporta y archiva el más antiguo, y trae el listado de la DIAN con 2 facturas que solo están allá (verificado en el código de la plataforma, `demo-organizations`).
- [I] `conocimiento/demostraciones-y-ventas.md` dice que en el paso "Qué hay hoy" se presentan nómina y conciliación bancaria como en desarrollo. Ya no: nómina, facturación electrónica y RADIAN, y Tesorería están disponibles desde el 02/11/2026.
- [I] Las demostraciones en vivo concentran la mayor parte de las ventas; los sábados convierten bien. Todo el equipo debe saber darlas.
- [I] Hay un programa de referidos mencionado en reuniones, con condiciones **sin confirmar**; no se ofrece.
