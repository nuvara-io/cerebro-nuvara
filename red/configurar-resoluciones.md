---
id: configurar-resoluciones
tipo: procedimiento
titulo: Configurar las resoluciones de numeración
tema: configuracion-facturacion-electronica
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Ajustes, Configuración, Resoluciones DIAN]
url: /{organización}/companies/{empresa}/electronic-billing/configuracion
siguiente: emitir-factura-de-venta
actualizado: 2026-11-03
fuentes:
  - platform@5241b3430
---

# Configurar las resoluciones de numeración

## Antes de empezar
- [P] Tienes la resolución de numeración de la DIAN de cada tipo de documento: prefijo, número, rango (desde y hasta), fecha y vigencia. La factura además tiene **llave técnica**.
- [P] Tu rol es administrador, operador o contador.

## Pasos
1. [P] Entra a **Facturación Electrónica › Ajustes › Configuración** y abre **Resoluciones DIAN**.
2. [P] Para la factura, pulsa **Sincronizar desde MUISCA (DIAN)**: trae prefijo, número, rango, vigencia y llave técnica.
3. [P] Para las notas, el documento soporte y la nómina, pulsa **Editar** en su tarjeta y escribe prefijo, número de resolución, desde, hasta, fecha de la resolución, vigencia desde, vigencia hasta y, si aplica, llave técnica.
4. [P] Si ya venías numerando en otro programa, usa **Setear consecutivo inicial** antes de emitir el primer documento de ese tipo, con el motivo.
5. [P] Revisa que cada tarjeta muestre el **próximo consecutivo** y deje de decir **Sin configurar**.

## Si algo falla
- [P] **"Rango agotado"** o **"La resolución venció"**: pide una nueva resolución en la DIAN y cárgala aquí. La plataforma no avisa antes; revisa rango y vigencia cada mes.
- [P] **No puedo cambiar el consecutivo inicial:** ya se emitió un documento de ese tipo; desde ahí lo asigna la plataforma.
- [P] **No hay resolución activa:** sin resolución no se puede emitir; si no puedes cargarla, escribe a soporte.
