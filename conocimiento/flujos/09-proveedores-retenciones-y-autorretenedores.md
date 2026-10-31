# Proveedores, retenciones y autorretenedores

## Objetivo
Que la plataforma calcule bien ReteFuente, ReteICA y ReteIVA y no retenga a quien no corresponde.

## Requisitos
- Conocer el régimen de la empresa (retenedor, gran contribuyente, Régimen Simple).
- Conocer el estatus tributario de los proveedores.

## Pasos
1. Abre la **ficha del proveedor**. La plataforma detecta automáticamente estatus como **Autorretenedor** o **Gran contribuyente**.
2. Si la factura es ambigua o el proveedor no se detectó, marca manualmente **autorretenedor** o **gran contribuyente**. Es una configuración de una sola vez, pero revisa cada proveedor nuevo.
3. Para un proveedor al que la empresa no retiene (por ejemplo, combustible por monto), marca la opción de autorretenedor para evitar retenciones en facturas futuras.
4. En **Configuración → Tributaria** define cuentas para IVA descontable, impuesto al consumo y otros gravámenes.
5. **ReteICA:** se agrega manualmente durante la causación; la plataforma recalcula el pasivo y puedes decidir que aplique siempre a ese proveedor, incluso distinguiendo persona natural y jurídica.
6. Si la empresa solo retiene ICA y no es retenedora de fuente, hay que configurarlo (el asesor lo anotó como mejora pendiente del formato de ingreso del porcentaje).
7. Revisa retenciones calculadas y elimina las que no aplican (por ejemplo, lavandería o aseo).

## Errores comunes
- Dejar que la plataforma retenga a un autorretenedor.
- Configurar el porcentaje de ReteICA con muchos decimales (el campo presentó dificultades).
- Empresas del Régimen Simple: la plataforma no detecta todas las retenciones; se ajustan a mano.
- Cuentas de retención complejas: se recomienda manejarlas manualmente al principio.

## Tips del asesor
- Cuando cambie la norma de bases de retención (se mencionó una actualización con vigencia desde mayo), confirmar con el contador y ajustar.
- Si una factura combina impuestos asumidos o impuesto a la bolsa, agrega líneas o ajusta totales para que cuadre.
