# Reglas fijas y centros de costo

## Objetivo
Definir reglas que agreguen o reemplacen líneas de la causación y asignar centros de costo antes de causar.

## Requisitos
- Lista de centros de costo y su lógica contable (por ejemplo, tipo de IVA o proyecto).
- Facturas reales de ejemplo para probar.

## Pasos
1. Abre la sección de **Reglas** de la empresa.
2. Crea una regla y dale un nombre claro (por tipo de IVA o por proyecto).
3. Elige a qué centros de costo aplica. Si comparten lógica, **agrúpalos** en una sola regla.
4. Define las **condiciones**: monto total, NIT del proveedor, tipo de cuenta de gasto (5, 6 o 7), palabras en la descripción.
5. Decide la acción: **agregar** una línea o **reemplazar** una existente (por ejemplo, el IVA). Puedes limitar el reemplazo a cuentas que comiencen por cierto prefijo, como 2408.
6. **Simula** la causación con una factura real para ver cómo queda el asiento.
7. Corrige y luego **habilita** la regla.
8. Edita o elimina reglas cuando el proyecto cambie; las nuevas facturas usan la regla actualizada.

### Centros de costo
1. Si usas etiquetas en el correo, usa **Sincronizar** para traerlas.
2. Los centros que están en el correo pero no en la plataforma se crean y asignan allí.
3. Se distinguen **centros de costo** y **subcentros**; la regla de un centro se hereda a sus subcentros.
4. **Asigna el centro de costo antes de causar**.

## Casos reales de sesiones posteriores
- **Reglas por placa de vehículo:** cuando un gasto (combustible, peajes) se rastrea por vehículo, la regla se arma con la placa y no con la cuenta general; los gastos sin placa siguen otra lógica ("sin placa").
- **Crear reglas pegando el nombre del proveedor** en la sección de reglas de clasificación.
- Las reglas de centros de costo se crean **en la plataforma**, no en local.
- **Centros de costo a nivel de factura**, no de línea contable (decisión repetida en varias sesiones).
- **Limpieza antes de enviar al software:** elimina centros de costo duplicados o mal configurados; un centro mal categorizado puede hacer fallar el envío.
- **Cuenta de crédito de compras pagadas:** déjala sin configurar si hay riesgo de predeterminaciones incorrectas.
- **Asignación masiva:** en Precausadas → Acciones, filtra los registros sin centro de costo, selecciónalos y asigna.
- Centros que se pierden al cargar porque se quitan los títulos: revisa la importación.
- En software con límite de centros en el selector (por ejemplo, 50 campos), la asignación en núvara evita el problema.

## Errores comunes
- Activar una regla sin probarla con facturas reales.
- Causar facturas sin centro de costo asignado.
- Suponer que las reglas se comparten entre empresas (no se comparten).

## Tips del asesor
- Prueba siempre antes de activar.
- Las reglas son independientes por empresa.
- Se puede diferenciar entre compra y servicio si se parametriza con facturas de ejemplo (se pidió soporte del equipo).
