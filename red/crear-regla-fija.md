---
id: crear-regla-fija
tipo: procedimiento
titulo: Crear una regla fija desde una factura
tema: reglas-y-centros-de-costo
publico: P
estado: verificado en el código
ruta: [Operaciones, Causaciones, Pre-causadas, Guardar y Aprobar, Crear una regla fija, Crear regla y aprobar]
url: /{organización}/companies/{empresa}/invoices
siguiente: asignar-centro-de-costo
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/07-reglas-fijas-y-centros-de-costo.md
  - platform@5241b3430
---

# Crear una regla fija desde una factura

## Antes de empezar
- [P] La factura está en **Pre-causadas** y quieres que su corrección se repita siempre que se cumplan unas condiciones exactas.
- [P] La regla nace de un **cambio de cuenta** en una sola factura: si no cambiaste una cuenta, o apruebas un grupo, la opción no aparece.
- [P] Si la corrección depende solo del proveedor, conviene el aprendizaje: se afianza solo con el uso.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, pestaña **Pre-causadas**, y abre la factura con el ojo.
2. [P] Cambia la cuenta que quieres fijar.
3. [P] Pulsa **Guardar y Aprobar**. En **¿Dónde aplicar este cambio?** elige **Crear una regla fija** y pulsa **Guardar y continuar**.
4. [P] En **¿En qué situaciones aplicar este cambio?** deja marcadas las condiciones que deben cumplirse: **El proveedor sea**, **El ítem diga**, **El texto contenga** (palabras separadas con Enter o coma), **El subtotal supere**… Quita **El proveedor sea** si la regla debe valer para cualquier proveedor.
5. [P] Con **Agregar otra condición** suma **El centro de costo sea…**, **El régimen del proveedor sea…**, **El proveedor sea gran contribuyente**, **El proveedor sea autorretenedor** o **La factura tenga IVA**.
6. [P] Elige qué hace la regla: **Usar siempre la cuenta** que pusiste o, en el gasto, limitar las cuentas que núvara te propone a un grupo de prefijos (por ejemplo 5195). Con **Ver antes y después** revisas el asiento.
7. [P] Pulsa **Crear regla y aprobar**. núvara prueba la regla en esa misma factura y solo la crea si reproduce tu corrección.

## Resultado
- [P] Aparece «Regla creada y activa»: la factura queda aprobada y la regla se aplica sola en las próximas facturas que cumplan las condiciones.
- [P] La ves en **Administración › Configuración › Agente inteligente › Historial de reglas**, donde puedes **Ver efecto**, **Deshabilitar** o **Eliminar esta regla**.

## Si algo falla
- [P] «La regla NO reproduce tu corrección»: ajusta las condiciones y vuelve a pulsar **Crear regla y aprobar**.
- [P] Si el asiento ya quedaba bien sin la regla, la regla no aporta nada: aprueba con aprendizaje.
- [P] «Ya existe una regla igual»: búscala en **Agente inteligente › Historial de reglas** y actívala en vez de crear otra.
- [P] Las reglas son de cada empresa: no pasan a otras empresas.
