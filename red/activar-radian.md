---
id: activar-radian
tipo: procedimiento
titulo: Activar RADIAN
tema: eventos-radian
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Ajustes, Configuración, Habilitación DIAN, Eventos RADIAN]
url: /{organización}/companies/{empresa}/electronic-billing/configuracion
siguiente: configurar-reglas-radian
actualizado: 2026-11-03
fuentes:
  - platform@5241b3430
---

# Activar RADIAN

## Antes de empezar
- [P] Eres el administrador de la empresa.
- [P] **Factura electrónica y notas** está **En producción**.
- [P] La empresa pidió los eventos RADIAN en su habilitación; si el grupo dice **No contratado**, pídeselo al equipo.

## Pasos
1. [P] En el portal de la DIAN, regístrate en **RADIAN** con el mismo Software ID que usas para facturar.
2. [P] En núvara, entra a **Facturación Electrónica › Ajustes › Configuración › Habilitación DIAN** y busca el grupo **Eventos RADIAN**.
3. [P] Pulsa **Activar RADIAN** y confirma que te registraste en el portal y que desde ahora los eventos de tus compras son reales y se cobran.

## Resultado
- [P] Aparece **Eventos RADIAN** en el menú Documentos y ya puedes enviar eventos. Para que se envíen solos, configura las reglas.

## Si algo falla
- [P] **"Primero pasa a producción":** termina la habilitación de la factura antes de activar RADIAN.
