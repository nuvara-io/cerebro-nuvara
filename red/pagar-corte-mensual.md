---
id: pagar-corte-mensual
tipo: procedimiento
titulo: Pagar el corte mensual
tema: creditos-y-recargas
publico: P
estado: verificado en el código
ruta: [Cuenta, Cobros, Corte mensual, Pagar ahora]
url: /{organización}/cuenta/cobros
siguiente:
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/12-creditos-y-recargas.md
  - platform@5241b3430
---

# Pagar el corte mensual

## Antes de empezar
- [P] Cada mes, en la fecha de corte, si consumiste menos del **Consumo mínimo mensual**, la diferencia se descuenta de tu saldo. Si el saldo no alcanza o queda por debajo del mínimo, queda un pago pendiente del corte.
- [P] El corte es de la organización, no de cada empresa: se paga una sola vez para todas.
- [P] Si la tarjeta **Corte mensual** no aparece en **Cobros**, tu cuenta no está en el modelo de consumo mínimo.

## Pasos
1. [P] Entra a **Cuenta** desde la barra lateral y abre la pestaña **Cobros**.
2. [P] En la tarjeta **Corte mensual** revisa el próximo corte, el **Consumo mínimo mensual** y el **Saldo actual**.
3. [P] Si hay un pago pendiente, la tarjeta muestra el aviso con el **Valor a pagar** y el **Plazo**.
4. [P] Pulsa **Pagar ahora**. Se abre el pago en línea, donde pagas con PSE o con tarjeta.
5. [P] Completa el pago y vuelve a núvara: la tarjeta y tu saldo se actualizan solos.

## Resultado
- [P] El corte queda pagado y lo que pagaste entra como créditos a tu saldo, que vuelve al mínimo mensual. Si la cuenta estaba suspendida, se reactiva sola al registrarse el pago.
- [P] El pago queda en **Cobros › Historial de pagos y consumos**.

## Si algo falla
- [P] La tarjeta dice que falta completar el consumo mínimo y muestra **Recargar** en vez de **Pagar ahora**: el descuento del corte no alcanzó con tu saldo. Pulsa **Recargar**, que te lleva a **Cuenta › Saldo**, y la recarga cubre lo que falta.
- [P] El pago del corte está vencido: pasado el plazo la cuenta se suspende y no puedes causar ni emitir. Paga con **Pagar ahora**, en **Cobros** o en el aviso de cuenta suspendida, y se reactiva sola.
- [P] No aparece **Pagar ahora**: no tienes nada pendiente en este corte.
- [P] Si el banco rechaza el pago con tarjeta, revisa con tu banco que tenga habilitadas las compras en línea y vuelve a intentarlo.
