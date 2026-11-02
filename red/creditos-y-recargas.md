---
id: creditos-y-recargas
titulo: Créditos y recargas
publico: P
actualizado: 2026-11-02
conexiones:
  - precios                     # cuánto cuesta cada causación y el mínimo mensual
  - emitir-factura-de-venta     # saldo insuficiente para emitir
  - activar-nomina              # pagar los cupos con el saldo
  - emitir-nomina-electronica   # saldo para los documentos o módulo en pausa
fuentes:
  - conocimiento/flujos/12-creditos-y-recargas.md
  - conocimiento/preguntas-frecuentes.md#créditos-y-soporte
  - conocimiento/por-confirmar.md#2-precios-y-modelo-comercial
  - red/precios.md
  - platform@5241b3430   # Cuenta › Saldo, Cobros y Módulos (features/cuenta, features/billetera), cobro en confirm-causation
---

# Créditos y recargas

núvara se paga con **créditos** que recargas en tu saldo. Aquí está cómo recargar, cómo ver el saldo y cuántas facturas te alcanzan. Cuánto cuesta cada cosa está en `precios`.

## Cómo funcionan los créditos
- [P] Recargas créditos una vez y cada causación, documento electrónico o cupo de nómina se descuenta de tu saldo.
- [P] El saldo es de tu cuenta, no de cada empresa: lo compartes entre todas tus empresas y no tienes que recargar por empresa.
- [P] Una compra consume más créditos que una venta, por eso los créditos no equivalen a un número fijo de facturas.
- [P] Traer las facturas de la DIAN o del correo no gasta créditos: se descuentan cuando núvara causa la factura. Lo que eliminas de **Pendientes** antes de causar no cuesta.
- [P] Lo que no consumes se acumula para el mes siguiente.

## Cómo recargo
1. [P] Entra a **Cuenta › Saldo** desde la barra lateral. También llegas desde tu saldo en la parte superior (**Ver cuenta**) o desde el aviso de saldo bajo.
2. [P] En la tarjeta de compra, elige una cantidad sugerida o escribe la cantidad de créditos que quieres, y revisa **Facturas disponibles** y **Total a pagar**.
3. [P] Elige el **Medio de pago**, si hay más de uno, y pulsa el botón de recarga.
4. [P] Completa el pago. Al confirmarse, los créditos entran a tu saldo.

## Con qué puedo pagar
- [P] **PSE y otros medios**: pago en línea con PSE o tarjeta de crédito o débito.
- [P] **Bre-B (app de tu banco)**, cuando está habilitado: escaneas un QR y confirmas desde la app de tu banco.
- [P] **QR compartible**, cuando está habilitado: pagas con el QR, envías el comprobante por WhatsApp o lo reportas en la plataforma, y el equipo valida el pago y acredita los créditos.
- [P] Si el banco rechaza el pago con tarjeta, revisa con tu banco que tenga habilitadas las compras en línea y vuelve a intentarlo.
- [P] Carga el RUT de tu cuenta para que núvara pueda facturarte la recarga; mientras falte, verás un aviso, pero puedes recargar igual.

## Cómo veo mi saldo y cuántas facturas me alcanzan
- [P] Tu saldo se ve siempre en la parte superior de la plataforma.
- [P] Al pulsarlo aparece la **Capacidad de causación**: cuántas facturas de **Ventas** y cuántas de **Compras** alcanzas a causar con el saldo que tienes. Es el mismo saldo expresado en ventas o en compras.
- [P] Para calcularlo a mano: créditos ÷ 5,1 = facturas de compra; créditos ÷ 2 = facturas de venta.
- [P] En **Cuenta › Saldo** ves el saldo disponible, lo consumido y una gráfica del consumo de cada mes.
- [P] En **Cuenta › Cobros** está el **Historial de pagos y consumos**.

## El mínimo mensual en tu saldo
- [P] En **Cuenta › Cobros**, la tarjeta **Corte mensual** muestra el próximo corte, el **Consumo mínimo mensual** y lo que llevas consumido en el periodo.
- [P] Si en el corte tu saldo no alcanza para completar el mínimo, la tarjeta te muestra lo que falta para recargarlo o pagarlo con **Pagar ahora**.
- [P] Si ese pago se vence, la cuenta se suspende hasta que lo pagues; al pagar se reactiva sola.
- [P] El valor del mínimo y cómo se calcula están en `precios`.

## Qué pasa si se acaba el saldo
- [P] Cuando te estás quedando sin créditos, la plataforma te avisa con un botón para recargar.
- [P] Con el saldo en cero no puedes causar ni emitir documentos electrónicos hasta que recargues.
- [P] Si lanzas una causación por lote con más facturas de las que cubre tu saldo, núvara te avisa: recarga o reduce el rango de fechas.
- [P] Si tienes la nómina activa y el saldo no cubre los cupos del mes, el módulo tiene 3 días de gracia y luego se pausa.
- [P] Si trabajas en volumen, recarga antes de empezar el mes para no frenar el trabajo.

## Cuál es la recarga mínima
- [P] La plataforma te muestra la recarga mínima en la tarjeta de compra al recargar. Si quieres saberla antes, te la confirma un asesor de núvara.
- [C] **Recarga mínima, sin confirmar:** la plataforma hoy pide $70.000 y la calculadora del sitio arranca en $200.000. No la des a usuarios ni prospectos.

## Para el equipo
- [C] **Sin confirmar:** si recausar una factura vuelve a cobrar y si eliminar una precausada devuelve los créditos. Ver `precios`.
- [C] Las organizaciones del modelo anterior de recargas ven en **Cuenta › Cobros** el aviso **Cambio de modelo de cobro** con la fecha del cambio. Si aplica el mínimo a usuarios antiguos sigue sin confirmar.
- [C] Hay cuentas de prueba gratis que solo se abren con un código de activación que entrega el equipo. No ofrezcas prueba gratis por tu cuenta.
- [I] La recarga mínima es un parámetro de la plataforma (`billing_settings.min_recharge_cop`, $70.000 por defecto); también lo son el mínimo mensual ($80.000) y los días de gracia del corte (5).
- [I] El cobro se encola al confirmar la causación (`confirm-causation.use-case.ts`) con una clave por factura, así que una factura no debería cobrarse dos veces. `precios.md` aún lo tiene por confirmar.
- [I] El código tiene rangos de **Bonificación por recarga** configurables; no hay ninguno oficial: no se ofrecen. A las organizaciones con acuerdo comercial no se les muestra bonificación.
- [I] La cuenta de prueba (`TRIAL`) admite una empresa y hasta 20 facturas traídas del correo; recargar el mínimo la pasa al plan de causaciones.
- [I] La interfaz de **Cuenta** y de la billetera todavía llama a los créditos con el nombre viejo de la unidad, escribe la marca con mayúscula y trata de usted ("Su saldo…"). Hay que pasarlo a créditos, núvara y tú.
- [I] Diferencia con `conocimiento/`: el flujo 12 habla de **Ver billetera** y de pagar por transferencia con comprobante por el grupo de soporte. En el código la billetera es **Cuenta › Saldo** y los medios son PSE y otros medios (Wompi), Bre-B y el QR compartible.
