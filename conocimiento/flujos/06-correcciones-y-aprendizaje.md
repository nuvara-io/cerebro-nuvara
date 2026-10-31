# Correcciones y aprendizaje de la plataforma

## Objetivo
Corregir una cuenta o impuesto una vez y que núvara lo aplique a facturas futuras.

## Requisitos
- Facturas precausadas.

## Pasos
1. Abre la factura o el grupo y cambia la cuenta contable del producto o concepto.
2. Elige el **alcance de la corrección**:
   - **Global**: para todos los proveedores.
   - **Por proveedor**: solo ese emisor.
   - **Por concepto o línea**: según lo que dice la descripción (por ejemplo, "descripción contiene...").
3. Si cambiaste cuentas de un grupo, pulsa **recausar** para actualizar los cálculos.
4. **Guardar y aprobar**.
5. Para editar o eliminar lo aprendido, abre **Historial aprendido**.
6. Para cambiar cuentas de muchas facturas a la vez (por ejemplo la cuenta de IVA), selecciona el grupo y usa el cambio masivo de cuentas.
7. Si una sola factura mezcla categorías (ferretería y aseo, revisión tecnomecánica y combustible), selecciona el producto dentro de la factura y asígnale otra cuenta.

## Más herramientas de corrección
- **Retefuente personalizada:** en una factura sin retención aplicada, agrega una retefuente personalizada (porcentaje, cuenta contable); la factura se reclasifica sola al añadir la línea.
- **Retención olvidada en una factura ya aprobada:** se puede añadir desde la vista global o entrando por el ícono de ojo.
- **Facturas con dos IVA o dos retenciones** (compras y servicios en el mismo documento, como mantenimiento): era una falla del modelo; el asesor la fue corrigiendo mes a mes con parches y recomendó no crear reglas manuales para esto.
- **Etiqueta "gasto" en cuentas de IVA:** puede confundir al modelo; se acordó quitarla de las configuraciones de IVA.
- **Desglose de impuestos por proveedor:** opción para que un proveedor concreto desglose sus impuestos (se acordó habilitarla).
- **Valor neto con descuento:** hay proveedores cuyo documento trae descuentos que desbalancean la causación; se reporta al soporte con la factura.
- **IVA mal categorizado:** cambiar la categorización a mano para forzar el aprendizaje.
- **Descuadre pequeño** (centavos) que impide guardar: no recausar; se revisa internamente.
- **Causar con aprendizaje** si una nota crédito da error de "débito y crédito no nivelados" (no siempre lo resuelve).

## Errores comunes
- Usar corrección **global** para una excepción de un solo proveedor.
- Corregir una factura que ya se envió al software contable: hay que anularla y volver a causar.
- Esperar que el aprendizaje funcione sin tocar nada: hay que procesar los productos "uno por uno" al inicio.
- Confusión entre código y descripción del producto: la plataforma considera ambos.

## Tips del asesor
- Usa correcciones globales solo para cambios genéricos.
- Si la factura ya se envió a Siigo: se anula y se causa de nuevo; si no se envió, se modifica en núvara.
- Para evitar confusiones, algunos asesores recomiendan desactivar las sugerencias automáticas de centros de costo y dejar que la plataforma aprenda de lo manual.
- Si la plataforma "no tomó" el cambio, revisa si la factura trae el código con otra descripción.
