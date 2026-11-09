---
id: ventas-y-autorretencion
titulo: Ventas y autorretención
publico: P
actualizado: 2026-11-02
conexiones: []
fuentes:
  - conocimiento/flujos/14-ventas-retenciones-y-autorretencion.md
  - CLAUDE.md#datos-confirmados-por-el-equipo-31102026
  - platform@5241b3430
---

# Ventas y autorretención

Causar las facturas de venta de tu empresa, con las retenciones que te practican tus compradores y la autorretención de renta. El foco de núvara es la causación de compras; las ventas también se causan, con un flujo más simple.

## Cómo se causan las ventas
- [P] Las ventas entran por la DIAN o por carga manual (no por correo) y quedan en **Operaciones › Causaciones**, pestaña **Ventas**.
- [P] El asiento lleva el ingreso en la clase 4, el IVA generado y la contrapartida en deudores (1305, lo que te deben). Las retenciones que te practican van como anticipo (1355).
- [P] Al causar una venta, la plataforma te pregunta con qué causarla: **con las reglas del comprador** (si ya configuraste sus cuentas) o con inteligencia artificial. Con reglas es más rápida y siempre da el mismo asiento.
- [P] Si marcaste no volver a preguntar, lo deshaces en **Acciones › Volver a preguntar con qué causar**.
- [P] Revisa, aprueba y archiva igual que una compra.

## Cuánto cuesta causar una venta
- [P] Causar una venta cuesta **$200 COP** (200 créditos), menos que una compra porque requiere menos interpretación.
- [P] Las ventas que llegan solas de la DIAN también consumen créditos si las causas. Si no las necesitas, no las causes o bloquea su descarga.
- [P] Para dejar de descargar las ventas de una empresa: **Administración › Configuración › Bloqueos › Ingesta de ventas**.

## Cómo se configuran las cuentas de ventas
**Operaciones › Causaciones › Ventas › Acciones › Configurar cuentas de ventas**
1. [P] Elige un comprador de la lista.
2. [P] Define su cuenta de ingreso, su cuenta por cobrar y las retenciones que te practica, con **Agregar retención** (ReteFuente, ReteICA o ReteIVA, con tarifa, cuenta y vigencia).
3. [P] Puedes copiar la configuración de un comprador a otros.
4. [P] Pulsa **Causar con reglas** para causar de una vez las ventas que ya quedaron listas.
5. [P] Si cambiaste la configuración, recausa las ventas que ya estaban causadas.

## Autorretención de renta
- [P] Se configura una vez en la parte de arriba de **Configurar cuentas de ventas**, en **Autorrenta de la empresa**.
- [P] Pide la **tarifa (%)**, la **cuenta débito** (anticipo, 1355), la **contrapartida** (por pagar, 2365) y la fecha desde la que rige.
- [P] Se calcula sobre el subtotal de cada venta, antes de IVA, y se aplica a todas tus ventas. Un comprador solo la cambia si tiene su propia excepción.
- [P] La tarifa la fija la norma según tu actividad: confírmala con tu contador.

## Retenciones que te practican tus compradores
- [P] Quien compra es quien practica la retención. Al vender, lo importante es que el valor bruto y el IVA queden bien, y registrar lo que te retienen.
- [P] La **ReteICA** que te practican se configura por municipio donde se causa la operación y por tu actividad, en **Administración › Configuración › Impuestos y retenciones › Retenciones de venta**, o en el panel de ReteICA de **Configurar cuentas de ventas**. La tarifa se escribe en por mil.
- [P] Si un comprador tiene su propia tarifa cargada, esa manda: el asiento tiene que cuadrar con lo que te consignaron.
- [P] Si un comprador cambia la retención entre facturas, revísalas una por una.

## Para el equipo
- [C] Muchas empresas ya contabilizan las ventas en el programa donde facturan; ahí núvara las usa para conciliar y dar trazabilidad. No vender la causación de ventas como el centro del producto.
- [I] `conocimiento/` dice que la autorretención mensual sobre ventas se causa con un registro interno de ajuste porque no viene en ningún documento; en el código («Autorrenta de la empresa», tipo `AUTO_RETE_RENTA`) se calcula en el asiento de cada venta, contra 1355 y 2365. Gana el código; confirmar con el equipo si el ajuste mensual sigue siendo necesario.
- [I] En esta pantalla la interfaz llama al comprador con la palabra que la marca evita (en el selector, en el panel de ReteICA y en la opción de causar con reglas); en el chat se dice comprador.
- [I] La ficha del tercero también tiene una sección de ventas (cuenta de ingreso y por cobrar) en **Administración › Proveedores › Editar**.
