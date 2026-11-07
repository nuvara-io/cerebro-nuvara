---
id: configuracion-facturacion-electronica
titulo: Habilitación y configuración de la facturación electrónica
publico: P
actualizado: 2026-11-03
conexiones:
  - facturacion-electronica-y-radian
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@5241b3430
---

# Habilitación y configuración de la facturación electrónica

Todo lo que se deja listo una vez antes de emitir: la solicitud, la habilitación ante la DIAN por tipo de documento, las resoluciones de numeración, la apariencia del PDF y el certificado de firma.

## El camino para empezar a emitir
1. [P] **Solicitar** el módulo y pagar el paquete anual, desde $150.000.
2. [P] **Habilitar ante la DIAN** cada grupo de documentos: pruebas, aprobación de la DIAN y producción.
3. [P] **Cargar las resoluciones** de numeración de cada tipo de documento.
4. [P] Opcional: logo, plantilla del PDF y notas por defecto.
5. [P] Para RADIAN: con la factura en producción, **activar RADIAN** y configurar sus reglas.

## Habilitación DIAN por grupo
- [P] En **Ajustes › Configuración › Habilitación DIAN** hay un grupo por tipo: **Factura electrónica y notas**, **Documento soporte**, **Nómina electrónica**, **Eventos RADIAN** y **Documento equivalente (POS)**, que no está disponible.
- [P] Cada grupo pasa por **Datos de la DIAN → Pruebas → Aprobación de la DIAN → Producción**, con su TestSetID. Los estados son: No contratado, Sin iniciar, Enviando pruebas, Esperando a la DIAN, Listo para producción, En producción y Requiere revisión.
- [P] El administrador de la empresa es el único que inicia pruebas y pasa a producción. Las pruebas no se cobran.

## Resoluciones de numeración
- [P] En **Ajustes › Configuración › Resoluciones DIAN** hay una tarjeta por tipo de documento con prefijo, número de resolución, rango, próximo consecutivo, llave técnica y vigencia.
- [P] La de la factura se puede **Sincronizar desde MUISCA (DIAN)**; las demás (notas, documento soporte, nómina) se cargan a mano con **Editar**.
- [P] El consecutivo lo asigna la plataforma al emitir. Solo puedes fijar el consecutivo inicial antes de emitir el primer documento de ese tipo.
- [P] Si la resolución se agota o se vence, la plataforma no deja emitir hasta que cargues una nueva. Hoy **no avisa antes**: revisa el rango y la vigencia cada mes.

## Apariencia y textos del documento
- [P] **Logo en facturas:** JPG o PNG de hasta 2 MB.
- [P] **Plantillas PDF:** eliges el diseño de la representación gráfica.
- [P] **Notas por defecto:** el texto que aparece al pie de cada documento; se puede cambiar en cada emisión.
- [P] El correo al comprador sale desde una dirección de facturación de núvara, salvo que el equipo configure el correo propio de la empresa.

## Certificado de firma digital
- [P] Lo gestiona el equipo y dura un año. Se renueva desde **Ajustes › Estado** con **Renovar certificado**.

## Quién puede
- [P] Habilitar, pasar a producción y activar RADIAN: administrador de la empresa.
- [P] Resoluciones, logo, plantillas, notas y reglas RADIAN: administrador, operador o contador.

## Para el equipo
- [I] La renovación en línea del certificado depende de una activación de la plataforma; si no aparece el botón, la gestiona el equipo.
- [I] Textos de la pantalla con voseo ("Configurá", "Pedile", "cargalos manual acá") y la marca con mayúscula: por marca deberían ir de tú y en minúscula.
