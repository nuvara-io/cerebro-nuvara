---
id: revisar-causacion
tipo: procedimiento
titulo: Revisar y aprobar una causación
tema: causar-y-revisar
publico: P
estado: según capacitación
ruta: [Operaciones, Causaciones, Precausadas, Ver factura (ojo)]
url:
siguiente: archivar-aprobadas
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/05-causar-y-revisar.md#pasos
  - conocimiento/flujos/05-causar-y-revisar.md#errores-comunes
  - conocimiento/flujos/06-correcciones-y-aprendizaje.md
---

# Revisar y aprobar una causación

## Antes de empezar
- [P] La factura está en **Precausadas**.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, pestaña **Precausadas**, y abre la factura con el ícono del **ojo**: ves la factura original al lado de la causación.
2. [P] Mira el **indicador de cuadre**. El chulito verde significa que el valor causado, retenciones incluidas, coincide con el XML. En rojo muestra la diferencia.
3. [P] Comprueba que débitos y créditos sumen igual, que el IVA vaya al grupo 24, que el valor bruto vaya a gasto (5), costo (6 o 7), inventario (14) o activo fijo (15) y que el total vaya a una cuenta por pagar.
4. [P] Si una cuenta está mal, haz clic en ella, búscala por **código** y guarda. Elige si el aprendizaje aplica a esa factura, a ese proveedor o a todas.
5. [P] Pulsa **Guardar y aprobar** para pasar a la siguiente. Atajos: Tab pasa a la siguiente, Enter aprueba y Supr elimina.

## Resultado
- [P] La factura pasa a **Aprobadas**. Aprobar no envía nada al software contable.

## Si algo falla
- [P] Un descuadre en rojo casi siempre es un impuesto, un descuento o un cargo (como una propina) que no se detectó: revísalo contra la factura original antes de aprobar.
- [P] Si el PDF no corresponde a la factura que revisas, ciérrala y vuelve a abrirla.
- [P] Si el mismo producto puede ir a dos cuentas según el uso, guarda **sin aprendizaje**.
