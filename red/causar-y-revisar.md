---
id: causar-y-revisar
titulo: Causar y revisar
publico: P
actualizado: 2026-11-02
conexiones:
  - correcciones-y-aprendizaje   # corregir una cuenta
  - aprobacion-en-bloque         # aprobar muchas a la vez
  - causar-facturas              # neurona: causar una o varias
  - causar-por-lote              # neurona: causar un rango de fechas
  - revisar-causacion            # neurona: revisar y aprobar una
fuentes:
  - conocimiento/flujos/05-causar-y-revisar.md
  - conocimiento/producto.md#estados-de-una-factura
  - conocimiento/producto.md#cómo-decide-la-causación-por-dentro
  - conocimiento/preguntas-frecuentes.md#causación-y-revisión
  - conocimiento/por-confirmar.md#causación-estados-y-aprendizaje
  - platform@5241b3430
---

# Causar y revisar

Causar es convertir una factura electrónica en su asiento contable. núvara interpreta la factura y prepara la causación; tú la revisas, la corriges si hace falta y la apruebas.

## Qué pasa cuando causo una factura
- [P] núvara lee el XML de la factura, clasifica cada ítem como gasto, costo, inventario o activo fijo, y propone las cuentas, el IVA, las retenciones y la cuenta por pagar.
- [P] La factura pasa de **Pendientes** a **Pre-causadas** con esa propuesta, lista para que la revises.
- [P] Nada queda causado del todo sin tu aprobación: siempre pasa por Pre-causadas.
- [P] La causación corre en segundo plano: cada factura toma cerca de 15 segundos y puedes seguir trabajando mientras avanza la cola.

## Qué significa cada estado
- [P] **Pendientes**: llegaron de la DIAN, del correo o de una carga manual y aún no se causan. No cobran créditos. La meta es dejarla vacía.
- [P] **Pre-causadas**: núvara ya preparó el asiento; aquí lo revisas y lo corriges. Aquí se descuentan los créditos.
- [P] **Aprobadas**: las validaste. Aprobar no envía nada al programa contable.
- [P] **Archivo**: las aprobadas archivadas, ordenadas por año y mes y listas para exportar. Está en **Operaciones › Archivo**.
- [P] En **Operaciones › Causaciones** cambias entre estados con los filtros **Todas**, **Pendientes**, **Pre-causadas** y **Aprobadas**, y entre **Compras** y **Ventas** con las pestañas de arriba.

## Formas de causar
- [P] **Una factura**: el ícono de causar a la derecha de su fila, en Pendientes.
- [P] **Varias**: selecciónalas y pulsa **Causar** en la barra de abajo. La tabla muestra 20, 50, 100 o 200 por página.
- [P] **Por lote**: **Acciones › Causar por lote**, con un rango de fechas de máximo 365 días.
- [P] **Por proveedor**: **Acciones › Revisar por proveedor** lista cada proveedor con sus facturas y las causa de una vez.
- [P] **Causación automática**: **Acciones › Causación inteligente** causa cada factura que llega. Se cobra igual; conviene activarla después del primer mes.

## Cuándo se cobran los créditos
- [P] Se cobran al causar, una sola vez por factura. Descargar no cobra.
- [P] Borrar una factura en Pendientes no cobra; por eso conviene limpiar antes de causar.
- [P] Recausar no vuelve a cobrar.
- [P] Si causas y no exportas, el cobro ya se hizo.

## Cómo se revisa una causación
- [P] Abre la factura con el ícono del **ojo**: ves la factura original al lado del asiento.
- [P] Comprueba que débitos y créditos sumen igual, que el IVA vaya al grupo 24, que el valor bruto vaya a gasto (5), costo (6 o 7), inventario (14) o activo fijo (15) y que el total vaya a una cuenta por pagar.
- [P] Si el asiento no cuadra con la factura, la plataforma lo avisa. Casi siempre es un impuesto, un descuento o un cargo (como una propina) que no se detectó.
- [P] Pulsa **Guardar y Aprobar** (o **Aprobar** si no cambiaste nada) y pasa a la siguiente con **Siguiente**.
- [P] Atajos: **Tab** pasa a la siguiente factura, **Enter** guarda o aprueba, **Supr** elimina y **?** muestra los atajos.

## Cómo propone la cuenta la plataforma
- [P] Primero mira el historial del proveedor en tu empresa y las cuentas que ya usaste o corregiste con él; después, lo aprendido por descripción.
- [P] Usa el plan de cuentas de tu empresa y solo recurre al PUC general si no hay una cuenta adecuada. Las cuentas se manejan con el nivel de detalle configurado (por defecto ocho dígitos).
- [P] Lee los ítems en el contexto de tu empresa: la misma compra puede ser gasto para una empresa de servicios y costo para un restaurante.
- [P] Como la factura no dice cómo se pagó, la contrapartida es una cuenta por pagar. Es configurable por empresa.
- [P] Las retenciones salen de la condición del proveedor y de la tabla de retenciones vigente para la fecha de la factura.
- [P] Por eso la revisión humana siempre hace falta, sobre todo el primer mes.

## Antes de causar por primera vez
- [P] Configura la empresa: IVA, plan de cuentas y balance de prueba por tercero cargados.
- [P] Carga antes los anticipos y los centros de costo; si faltan, la causación queda errónea.
- [P] Causa una factura de prueba (sin IVA, luego con IVA, luego con retención) y ajusta la configuración antes de causar el resto.
- [P] Empieza por un solo mes: ahí la plataforma aprende y los siguientes salen mejor.
- [P] Si cambias el plan de cuentas o la configuración, las Pre-causadas no cambian solas: selecciónalas y pulsa **Recausar**.

## Casos que se revisan a mano
- [P] **Propinas**: los "otros cargos" de un restaurante van con una línea de débito a la cuenta de propinas.
- [P] **Impuesto al consumo**: no es IVA descontable; va como mayor valor del gasto.
- [P] **Anticipos**: si el proveedor tiene un anticipo, la plataforma ofrece **Asociar anticipo** y la contrapartida pasa a la cuenta del anticipo.
- [P] **Notas crédito**: se revisan antes de aprobar; la cuenta debe ser la de devoluciones en compras.
- [P] **Facturas que no son gasto de la empresa** o documentos internos: elimínalas en Pendientes antes de causar.

## Para el equipo
- [C] El mensaje clave: núvara acelera la causación, pero el contador revisa y valida. No ofrecer causación "sin revisión".
- [I] La interfaz escribe el estado como «Pre-causadas», con guion; `conocimiento/` dice «Precausadas».
- [I] La pestaña «Con error» ya no existe (issue #1361); la tarjeta Pre-causadas muestra «N necesitan revisión» para las líneas de baja confianza.
- [I] La opción **Causación inteligente** de Acciones abre el diálogo «Causación automática». También existe por proveedor, en su ficha › Automatización › Causación automática.
- [I] Bugs reportados en 2026, sin confirmar si siguen: descuadres de centavos, facturas que quedan con la cuenta anterior tras recausar y aprobadas que vuelven a Pre-causadas.
