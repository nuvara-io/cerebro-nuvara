---
id: configurar-cuentas-de-ventas
tipo: procedimiento
titulo: Configurar las cuentas de ventas y la autorrenta
tema: ventas-y-autorretencion
publico: P
estado: verificado en el código
ruta: [Operaciones, Causaciones, Ventas, Acciones, Configurar cuentas de ventas]
url: /{organización}/companies/{empresa}/invoices?panel=sales-accounts
siguiente: exportar-archivo
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/14-ventas-retenciones-y-autorretencion.md
  - platform@5241b3430
---

# Configurar las cuentas de ventas y la autorrenta

## Antes de empezar
- [P] Tus facturas de venta ya están en **Operaciones › Causaciones**, pestaña **Ventas**, en estado Pendiente.
- [P] Tu plan de cuentas tiene la cuenta de ingreso (clase 4), la de cartera (13), el anticipo de autorretención (1355) y la cuenta por pagar (2365).
- [P] La tarifa de autorretención la fija la norma según tu actividad: confírmala con tu contador.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, pestaña **Ventas**, y pulsa **Acciones › Configurar cuentas de ventas**.
2. [P] Arriba, en **Autorrenta de la empresa**, escribe la **Tarifa (%)**, elige la **Cuenta débito (anticipo 1355)**, la **Contrapartida (por pagar 2365)** y la fecha en **Rige desde**, y pulsa **Guardar**. Se configura una vez y vale para todas tus ventas.
3. [P] Si te practican ReteICA, abre **Reglas de ReteICA por municipio**: aplican a todos tus compradores y la tarifa va en por mil.
4. [P] Abre un comprador de la lista. Elige la cuenta de **Ingreso** (obligatoria), la de **Por cobrar** (vacía usa la general) y el **Concepto fiscal**.
5. [P] Con **Agregar retención** carga lo que ese comprador te retiene: **Tipo de retención** (ReteFuente por concepto, ReteICA o ReteIVA), tarifa, cuenta y vigencia. Pulsa **Guardar cuentas**.
6. [P] Para repetir la misma configuración, marca otros compradores y, en el ya configurado, pulsa **Copiar a … seleccionado(s)**.
7. [P] Pulsa **Causar con reglas** para causar de una vez las ventas que quedaron listas.

## Resultado
- [P] Aparece «Autorrenta guardada» y las ventas listas se causan con tus cuentas, siempre con el mismo asiento: ingreso, cartera, retenciones que te practican (1355) y la autorrenta (1355 contra 2365) sobre el subtotal antes de IVA.

## Si algo falla
- [P] «La cuenta débito debe empezar por 1355» o «La contrapartida debe empezar por 2365»: elige la cuenta del grupo correcto.
- [P] Una venta no queda lista si no está en Pendiente o si a su comprador le falta la cuenta de ingreso o el concepto fiscal. Filtra con **Sólo incompletos**.
- [P] «No se pudo cambiar la vigencia»: revisa que no haya otra tarifa del mismo tipo en esa fecha.
- [P] Si cambiaste la configuración de ventas ya causadas, usa **Recausar todas** en ese comprador: rehace las pendientes y pre-causadas; las aprobadas y exportadas no se tocan.
