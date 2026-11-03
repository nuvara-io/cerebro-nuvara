---
id: habilitar-ante-la-dian
tipo: procedimiento
titulo: Habilitar la empresa ante la DIAN
tema: configuracion-facturacion-electronica
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Ajustes, Configuración, Habilitación DIAN]
url: /{organización}/companies/{empresa}/electronic-billing/configuracion
siguiente: emitir-factura-de-venta
actualizado: 2026-11-03
fuentes:
  - conocimiento/flujos/20-facturacion-electronica-de-venta-y-radian.md
  - platform@5241b3430
---

# Habilitar la empresa ante la DIAN

## Antes de empezar
- [P] La facturación electrónica ya está activa para la empresa.
- [P] Eres administrador y tienes el usuario del representante legal en el portal de la DIAN.

## Pasos
1. [P] En el portal de la DIAN entra a **"Facturando electrónicamente" › "Habilitación"** y regístrate como facturador electrónico si aún no lo estás.
2. [P] Registra el software en modo **"Software propio"** (por ejemplo, con el nombre "núvara") y define un PIN. Guarda el **Software ID** que te asigna la DIAN.
3. [P] Copia el **TestSetID** del set de pruebas.
4. [P] En núvara, entra a **Facturación Electrónica › Ajustes › Configuración**, pestaña **Habilitación DIAN**. Escribe el Software ID, el PIN y el TestSetID y pulsa **Iniciar pruebas**. La plataforma envía sola los documentos de prueba y no se cobran.
5. [P] Cuando la DIAN apruebe las pruebas, asocia en el portal el rango de numeración de tu resolución.
6. [P] Vuelve a núvara y pulsa **Pasar a producción**. En la pestaña **Resoluciones DIAN** puedes **Sincronizar desde MUISCA (DIAN)** o editar a mano el prefijo, el número de resolución, el rango y la vigencia.

## Resultado
- [P] La factura queda **En producción** y ya puedes emitir documentos reales. El documento soporte y la nómina siguen el mismo camino; RADIAN se activa después, con la factura en producción.

## Si algo falla
- [P] Si queda en **Esperando a la DIAN**, la DIAN aún no responde las pruebas: revisa más tarde.
- [P] Si aparece **Requiere revisión**, revisa el Software ID, el PIN y el TestSetID que escribiste y, si siguen bien, escribe a soporte.
