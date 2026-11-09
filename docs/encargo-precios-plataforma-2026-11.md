# Encargo: precios de módulos en la plataforma

Ajustar la plataforma al modelo de cobro definido el 06/11/2026. La fuente de verdad es `red/precios.md` en `cerebro-nuvara`: si este encargo y ese nodo no coinciden, gana el nodo.

Revisado por lectura contra `platform` en `3926e8adb` (06/11/2026). Las rutas son el punto de partida, no un diseño cerrado. Nada de esto se probó todavía en la plataforma.

## Qué cambia

| Módulo | Hoy | Debe quedar |
|---|---|---|
| Facturación electrónica | Habilitación aparte, bolsas y cobro por documento | 4 paquetes anuales con certificado incluido |
| Certificado | Renovación anual cobrada aparte | Incluido en el paquete y en los tramos de nómina |
| Nómina | Tramos de 5, 10, 30 y 50 con pago mes a mes | Tramos anuales de 1 a 90 |
| Paquete integral | No existe | Todos los módulos por $990.000 al mes |
| RADIAN | $100 por evento | Sin cambio |
| Causación | $510 compra, $200 venta | Sin cambio |

No hace falta migrar a nadie: todavía no hay usuarios habilitados en esos consumos.

## 1. Paquetes de facturación electrónica

| Paquete | Documentos | Precio |
|---|---:|---:|
| Inicial | 30 | $150.000 |
| 120 | 120 | $198.000 |
| 1.000 | 1.000 | $580.000 |
| 3.000 | 3.000 | $1.350.000 |

Más de 3.000 documentos se cotiza por WhatsApp.

**Reglas**
- Cualquier paquete incluye el certificado digital y la configuración inicial. No se cobra habilitación aparte.
- Paquete y certificado son de una sola empresa: no se venden por firma ni se comparten.
- El paquete se paga completo, no con el saldo. En facturación, el saldo solo se usa para RADIAN.
- El paquete y el certificado valen un año desde la compra inicial.
- Un paquete comprado después, dentro de ese año, tiene **10 % de descuento** y vence con el certificado inicial. Ejemplo: 120 documentos en enero y otro de 120 en junio por $178.200.
- El paquete se descuenta en documentos, no en pesos.
- El evento RADIAN se cobra aparte, del saldo, y no consume el paquete.

**Dónde mirar**
- `apps/api/src/electronic-billing-invoice-bags/`: productos, compra y saldo por empresa. Hoy el saldo no tiene vencimiento: hay que agregar la vigencia y el descuento.
- `apps/api/src/electronic-billing-renewal/`: certificado anual, cobrado aparte. Hay que dejar de cobrarlo cuando lo cubre un paquete o un tramo de nómina.
- `apps/web/src/features/electronic-billing/components/invoice-bag-*` y `super/invoice-bag-catalog-section.tsx`: compra y catálogo.
- `apps/web/src/features/electronic-billing/components/enablement-request-wizard/enablement-payment-section.tsx`: el pago de la solicitud debe pedir un paquete, no la habilitación.

**Hecho cuando**
- Una empresa sin certificado compra el paquete de 30 por $150.000 y puede emitir sin otro cobro.
- En el mes 6, la compra de otro paquete de 120 muestra y cobra $178.200, y ese paquete vence con el certificado.
- Pasado el año, la compra vuelve al precio completo.
- Una empresa con certificado por nómina paga su primer paquete completo.
- Una organización con dos empresas compra un paquete para cada una, y el descuento de una no aplica a la otra.
- El super admin puede editar precios, documentos y porcentaje de descuento sin desplegar.

## 2. Nómina

| Empleados | Incluye | Al año |
|---|---|---:|
| Plan inicial, hasta 5 | Incluye habilitación de facturación electrónica | $300.000 + IVA |
| 1 a 10 | Solo emisión | $260.000 |
| 1 a 10 | Con todo | $480.000 |
| 11 a 20 | Con todo | $771.000 |
| 21 a 45 | Con todo | $1.400.000 |
| 46 a 90 | Con todo | $2.480.000 |

Con más de 90 empleados se cotiza por WhatsApp.

**Reglas**
- **Solo emisión:** emitir la nómina electrónica, sin el resto del módulo.
- **Con todo:** empleados y novedades, liquidación y prestaciones, PILA, nómina electrónica y causación de la nómina.
- Todos los tramos incluyen el certificado, el mismo de facturación electrónica.
- Cada tramo es de una sola empresa y se paga completo, no con el saldo.
- Se paga el tramo completo, aunque haya menos empleados que el tope.
- El usuario escribe cuántos empleados tiene y la plataforma le sugiere el tramo. De 1 a 10 muestra las dos opciones.
- "Solo emisión" debe bloquear el resto del módulo de nómina.

**Dónde mirar**
- `apps/api/src/billing-catalog/`: planes y tramos (`plan-tier-schedule.vo.ts`, `charge-lines.builder.ts`). Ya soporta tramos y "se cotiza"; hay que ver cómo modelar las dos opciones de 1 a 10.
- `apps/api/src/billing-plans/domain/value-objects/addon-feature-flags.ts`: permisos por módulo, para separar "solo emisión" de "con todo".

**Hecho cuando**
- Con 8 empleados se ofrecen $260.000 y $480.000; con 30, $1.400.000; con 91, el contacto por WhatsApp.
- Quien compró "solo emisión" emite nómina electrónica, pero no entra a liquidación ni prestaciones.
- Comprar un tramo deja el certificado activo sin cobro extra.

## 3. Paquete integral

- $990.000 al mes, todos los módulos, documentos ilimitados.
- Mientras esté activo no se cobran paquetes de facturación ni nómina. Falta definir el límite de causaciones y de empresas.
- No se activa en la plataforma hasta definir esos límites y terminar Caja e informes.

**Hecho cuando** una organización con el paquete integral usa todos los módulos y emite documentos sin cupo.

## 4. Textos y sitio

- Quitar de la plataforma y del sitio: habilitación de $150.000 con 20 documentos, bolsas y precios anteriores de nómina.
- `apps/landing/src/pages/precios.astro` y `llms.txt.ts`: precios y reglas nuevas.
- `apps/web/src/features/electronic-billing/components/super/invoice-bag-catalog-section.tsx`: el ejemplo "200 documentos por $180.000".
- El botón **Solicitar habilitación** de **Cuenta › Módulos** debe volver a su flujo; hoy abre soporte.
- Validar que siguen debitando $510 por compra y $200 por venta con 1 crédito = $1, y cambiar "coin" y "Nuvicoins" por créditos.

## 5. Mínimo mensual y capacitación

- El mínimo de $80.000 aplica a quien causa sin un plan de causación, aunque tenga otros módulos. Si factura y causa $10.000, se descuentan $80.000.
- No aplica con la suscripción de causación, con el paquete integral ni a quien usa otros módulos sin causar.
- En **Activa tu cuenta**, la entrada es de $80.000 de saldo. La capacitación es opcional: si se pide, el pago es de $230.000, con $150.000 de capacitación y $80.000 que entran al saldo.

**Hecho cuando** una cuenta nueva con capacitación paga $230.000 y queda con $80.000 de saldo para causar.

## Validar antes de empezar

- Si se puede generar el volumen de certificados de los planes anuales.
- La lista `INVOICE_BAG_DOCUMENT_TYPES` hoy incluye `contingency_invoice` y `equivalent_document`, y deja fuera nómina y RADIAN. El equipo debe confirmar si los documentos equivalentes consumen el paquete.

## Por definir: no implementar todavía

Dejar estos valores configurables o fuera de esta entrega:

- Precio por documento con créditos para quien no compre paquete. Debe ser mayor que el del paquete.
- Qué pasa con los documentos sin usar al renovar.
- Pago de nómina mes a mes y su 10 % adicional.
- "10 personas a $3.000 por empleado".
- Qué precios van con IVA: falta revisarlo con el contador.
- Límites y permanencia del paquete integral.
- Si el plan inicial de nómina trae documentos de facturación.

## Orden sugerido

1. Paquetes de facturación y certificado incluido.
2. Tramos de nómina y separación de "solo emisión".
3. Textos y sitio, en cuanto 1 y 2 estén en producción.
4. Paquete integral, cuando se definan sus límites.

Al terminar, avisar al cerebro: cada regla verificada pasa a `estado: verificado en el código` en sus nodos y salen los requisitos de la sección Interno de `red/precios.md`.
