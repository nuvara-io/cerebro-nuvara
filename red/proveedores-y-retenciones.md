---
id: proveedores-y-retenciones
titulo: Proveedores y retenciones
publico: P
actualizado: 2026-11-02
conexiones:
  - ventas-y-autorretencion   # retenciones en ventas además de compras
fuentes:
  - conocimiento/flujos/09-proveedores-retenciones-y-autorretenedores.md
  - conocimiento/preguntas-frecuentes.md#retenciones-e-impuestos
  - conocimiento/objeciones-y-dolores.md#cuentas-iva-y-retenciones
  - conocimiento/por-confirmar.md#retenciones-e-iva
  - conocimiento/por-confirmar.md#5-datos-tributarios-citados-en-reuniones
  - platform@5241b3430
---

# Proveedores y retenciones

núvara calcula la retención en la fuente, la ReteICA y la ReteIVA de cada compra según la condición del proveedor y la configuración tributaria de tu empresa. Tú revisas la retención propuesta y la corriges si no aplica.

## Cuándo se practica una retención
- [P] La retención la practica quien compra. Antes de aplicarla, la plataforma mira la condición del **proveedor**: a un autorretenedor no se le retiene; a un gran contribuyente que no es autorretenedor, sí.
- [P] Para elegir el concepto lee los ítems de la factura y la actividad de tu empresa, y busca la tarifa y la base mínima en la tabla de retenciones vigente para la **fecha de la factura**.
- [P] Si la compra no supera la base mínima, no retiene. Si la factura mezcla conceptos, aplica una retención por concepto.
- [P] Sin la configuración tributaria de la empresa (régimen y si retiene) no se calculan retenciones.
- [P] Las tarifas y bases las fija la norma: confírmalas con tu contador y con la fuente oficial.

## Retención acumulada en el día
- [P] La plataforma suma las facturas del mismo proveedor del mismo día: si el acumulado supera la base mínima, retiene aunque cada factura por separado no llegue.
- [P] Por eso una factura pequeña puede salir con retención.
- [P] Si una factura debió retener por acumulación y no lo hizo, la plataforma lo detecta como ajuste de retención pendiente para que lo revises y lo apliques.

## Autorretenedor, gran contribuyente y exento
- [P] La plataforma los detecta cuando la factura electrónica trae la responsabilidad del emisor.
- [P] Si la factura no lo dice, márcalo una vez en la ficha del proveedor: queda para sus siguientes facturas. Luego recausa las Pre-causadas.
- [P] **Autorretenedor**: no se le practican retenciones. **Exento de retención**: tampoco. **Gran contribuyente**: es una calificación de la DIAN y no quita la retención por sí sola.
- [P] Un autorretenedor y un gran contribuyente no son lo mismo: para saberlo, mira el RUT o la factura.
- [P] También hay ajustes manuales para **Agente retenedor de IVA (O-23)** y **Autorretenedor de ICA**, que tienen prioridad sobre lo que diga la factura.

## Cómo se configura un proveedor
**Administración › Proveedores › (proveedor) › Editar**
1. [P] Busca el proveedor en la lista y ábrelo. También llegas desde la causación, en la pestaña del proveedor.
2. [P] En **Configuración Tributaria** revisa el **Régimen tributario** (Ordinario, Régimen SIMPLE o No responsable de IVA) y marca **Autorretenedor**, **Gran contribuyente** o **Exento de retención**.
3. [P] En **Retención personalizada**, para ReteFuente, ReteIVA y ReteICA, elige **Cuándo retener**: heredar la regla, **Siempre** (sin importar la base mínima) o **Con mínimo**.
4. [P] Si al proveedor se le retiene solo una parte, escribe el **% de la retención calculada** (por ejemplo, 50 para la mitad).
5. [P] Para ReteICA puedes indicar dónde **tributa ICA** y si se le retiene siempre, nunca o según las reglas, con su tarifa por mil.
6. [P] Guarda y recausa las facturas Pre-causadas de ese proveedor.

## Cómo corregir o agregar una retención en una factura
- [P] Abre la factura con el ojo. Si una retención no aplica, elimina la línea y guarda.
- [P] Para agregar una, usa **Agregar retención** y elige la tarifa, o **Personalizada** si necesitas otra tasa, con su cuenta.
- [P] No cambies solo la cuenta de una retención: la cuenta va atada al porcentaje, y el valor seguiría calculado con el anterior. Elimínala y agrega la correcta.
- [P] Al guardar con aprendizaje, elige el alcance del **proveedor** si la tarifa depende del tercero, no global.
- [P] Si una retención debe asumirla la empresa, configura la cuenta de retención asumida en la configuración tributaria.

## ReteICA por municipio
**Administración › Configuración › Impuestos y retenciones › Retención ICA**
- [P] Cada regla lleva municipio, tarifa (en **por mil**), actividad, cuenta contable y base mínima. Cada regla activa exige municipio, tarifa y cuenta.
- [P] Usa **Agregar Regla** o **Detectar de mis cuentas**, que propone reglas a partir de tus cuentas de ReteICA (grupo 2368).
- [P] Las reglas se revisan **en orden** y se aplica la primera que coincide: pon las específicas arriba y la genérica al final.
- [P] Solo aplica si tu empresa retiene ICA y la compra se hace en el municipio donde declara. Si la actividad del proveedor no viene en la factura, asígnala en su ficha.

## ReteIVA y Régimen Simple
- [P] La ReteIVA depende del tipo de operación y de las responsabilidades de las partes. Revísala siempre; si falta, agrégala a mano en la factura.
- [P] Si a tu empresa ya de régimen ordinario no se le calculan retenciones, puede que el RUT cargado siga diciendo Régimen Simple: sube el RUT actualizado en la configuración de la empresa y recausa.
- [P] En combustibles y servicios públicos revisa la retención propuesta: son casos con tratamiento especial.

## Configuración tributaria de la empresa
- [P] Está en **Administración › Configuración › Impuestos y retenciones**: perfil fiscal, responsabilidades, régimen, si la empresa retiene, IVA de compras, facturas mixtas, Retención ICA y **Retenciones especiales**.
- [P] Ahí defines las cuentas de IVA descontable o mayor valor del gasto, las de cada tarifa y las de impuestos como el consumo o las bolsas.
- [P] La configuración es por empresa y no se copia a otra.
- [P] Después de cambiarla, recausa lo que esté en Pre-causadas.

## Para el equipo
- [C] Las tarifas que citan usuarios o asesores en las capacitaciones no son datos de la plataforma; no las des como oficiales.
- [C] ReteIVA automática todavía no es confiable según las capacitaciones (sin confirmar con el equipo).
- [I] Discrepancias con `conocimiento/`: el selector "siempre retener sin importar el monto" figuraba en desarrollo y ya existe (Cuándo retener › Siempre); "retener solo la mitad" hoy es el % de la retención calculada; la tarifa de ReteICA se escribe en por mil, no en porcentaje; la ruta "Configuración › Tributaria" ahora es la pestaña Impuestos y retenciones.
- [I] La retención acumulada es diaria en el código (pantalla «Ajustes de Retención», `/retention-adjustments`, visible en el menú de Operaciones). Una usuaria la practicaba sobre el mes: no está cubierto.
- [I] Bugs reportados en 2026, sin confirmar si siguen: ReteICA que toma otra cuenta de la familia 2368, ReteIVA aplicada a régimen ordinario, productos elaborados leídos como agrícolas.
