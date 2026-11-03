---
id: facturacion-electronica-pendientes
titulo: Facturación electrónica: lo que falta y cómo implementarlo
publico: I
actualizado: 2026-11-03
conexiones:
  - facturacion-electronica-y-radian
  - hoja-de-ruta
fuentes:
  - platform@5241b3430     # rastreado en el código el 03/11/2026
---

# Facturación electrónica: lo que falta y cómo implementarlo

Contexto técnico para implementar lo que el módulo todavía no tiene en pantalla: retención en la fuente y ReteICA, descuentos y cargos, impuesto al consumo, factura por contingencia y eventos RADIAN de título valor. Las rutas son de `~/code/platform`; "SEB" es `packages/electronic-billing/src/services/super-electronic-billing.service.ts`.

## Antes de empezar: dos problemas del código actual
- [I] **Los códigos de ReteFuente y ReteICA parecen cruzados.** El catálogo web (`apps/web/src/features/electronic-billing/lib/dian-catalogs.ts:228`, `WITHHOLDING_TAX_TYPES`) y la vista previa (`invoice-preview.tsx:45`) dicen 7 = ReteFuente y 6 = ReteICA; los códigos DIAN que usa el resto del repo dicen 06 = ReteFuente y 07 = ReteICA. El backend manda `taxId` tal cual. Confirmar contra la tabla de impuestos de Factura LATAM antes de sacar la pantalla.
- [I] **Los impuestos de las líneas se agrupan solo por porcentaje.** `buildLinesWithTaxBreakdown` (SEB:5421) pone `tax_id: 1` fijo en cada línea y suma `tax_totals` por tasa. Para el impuesto al consumo hay que agrupar por (tax_id, porcentaje).

## Retención en la fuente y ReteICA en la factura de venta
- [I] **Ya existe:** el DTO acepta `withholdingTaxes[]` (`{taxId, percent, taxableAmount}`, `issue-document.dto.ts:460`); `buildIssueDocumentAdjustments` (SEB:5639) lo envía como `with_holding_tax_total` solo en facturas (es informativo: no resta del total a pagar). La vista previa ya muestra todas las retenciones y el neto.
- [I] **ReteIVA hoy:** `lib/use-rete-iva.ts` (taxId 5, base = IVA del documento) y `ReteIvaSection` (`issue-document-wizard.tsx:2386`) o `SheetTotals` (`invoice-sheet-parts.tsx`) en modo hoja. La sección se muestra también en notas y documento soporte, aunque el backend las descarta ahí.
- [I] **Falta:** un editor de varias retenciones con selector de tipo (ReteFuente con base en el subtotal sin IVA; ReteICA con base en el subtotal y tarifa por mil), generalizar `useReteIva` y `SheetTotals`, mostrarla solo en facturas y corregir el catálogo si los códigos están cruzados. Opcional: sugerir las tarifas con `GET /api/invoices/sales-accounting/customer-retention-preview/:customerId`.
- [I] **Riesgos:** el DTO solo admite 2 decimales en `percent` y una ReteICA de 9,66 por mil (0,966 %) necesita 3; las notas no heredan nada de la factura; la causación de la venta calcula sus retenciones aparte (`sales-retention-resolver.ts`) y nada las cruza con lo declarado en el XML.
- [I] **Pruebas:** `super-electronic-billing.issue-payload.spec.ts:59`, `use-rete-iva.spec.ts`, `emission-content-key.spec.ts`, `issue-document-wizard.sheet.spec.tsx`.

## Descuentos y cargos globales
- [I] **Ya existe:** `allowanceCharges[]` en el DTO (`{chargeIndicator, allowanceChargeReason, amount, baseAmount}`); SEB:5648 lo envía como `allowance_charges` (descuento con `discount_id: 1`) y ajusta `allowance_total_amount`, `charge_total_amount` y `payable_amount`. El IVA no se recalcula sobre la base con descuento. En notas y documento soporte se rechaza.
- [I] **Configuración dormida:** `companies.billing_invoice_fields_config` tiene `allowanceCharges` y `lineAllowanceCharges`, y `invoice-fields-config-card.tsx` tiene los interruptores, pero la tarjeta no está montada en ninguna página y la emisión no lee esas banderas.
- [I] **Falta:** el campo en `FormState` y en el armado del payload del asistente, las filas en las líneas, la hoja y la vista previa, y sumarlo en `computeDocumentTotals` (`lib/document-totals.ts`). El tipo `AllowanceChargeItem` ya existe.
- [I] **Riesgos:** un descuento global es comercial y no baja la base de IVA (si se quiere antes de impuestos, va en el precio de la línea); Tesorería liquida por el neto; las retenciones deberían calcularse sobre el subtotal con descuento.
- [I] **Pruebas:** `super-electronic-billing.issue-payload.spec.ts:70`, `:145` y `:222`.

## Impuesto al consumo (INC) e IVA excluido
- [I] **Ya existe:** la línea acepta `taxPercent` y `taxTreatment: 'excluded'` (solo lo usa la facturación propia de núvara); el excluido no lleva `tax_totals`. No hay campo de INC en la emisión; el INC solo se lee en facturas recibidas.
- [I] **Falta:** un tipo de impuesto por línea en el DTO, los tipos web y `emission-content-key.ts`; emitir `tax_id: 4` y agrupar por (tax_id, porcentaje); que `computeDocumentTotals`, la vista previa y la hoja no digan solo "IVA"; en productos, un tipo de impuesto (IVA, INC o excluido) con tarifas de INC (8 % para restaurantes y bares; también 4 % y 16 %) en el esquema (`products.ts:44`), los dos diálogos, la tabla y `catalog-product-line.ts`; el impuesto por defecto en `lib/default-tax.ts`; y un interruptor de excluido en las líneas.
- [I] **Riesgos:** la responsabilidad de INC de la empresa se configura en Factura LATAM al crearla; el cálculo de "precio con impuesto incluido" debe usar la tarifa de INC; el INC no es descontable, lo que cambia la causación de compras; el redondeo por línea es igual en web y backend y hay que cambiarlo en los dos.

## Factura por contingencia
- [I] **Ya existe solo la base:** tipo 3 en las resoluciones (`resolution.util.ts:122`), el grupo de habilitación y el set de pruebas, que envía un JSON escrito a mano por el superadministrador (`POST super/electronic-billing/:orgId/test-emit/:type`). La habilitación automática no la cubre y no hay plantilla de contingencia en el repo.
- [I] **Falta:** un tipo nuevo en el DTO, en el despachador (SEB:~4690) y en el armado (SEB:4895); un `buildIssueContingencyPayload` con su resolución; los datos de la contingencia (inicio y fin, número y fecha de la factura en papel), cuyas llaves en Factura LATAM no están en el repo; un código de cobro en `nuvicoins-monetization.mapping.ts`; el encendido por empresa; el formulario; y después la causación.
- [I] **Riesgos:** los plazos de la DIAN para transmitir lo facturado en contingencia, el consecutivo de su propia resolución y las notas sobre una factura de contingencia.

## Eventos RADIAN de título valor
- [I] **Hoy solo hay 030 a 034:** `RADIAN_EVENT_IDS = ['1','2','3','4']` (`dto/send-radian-event.dto.ts:3`) y el mapa 030→1 … 034→5 (`radian-events-response.ts:13`). No hay rastro de los eventos de título valor en el código ni en la documentación del repo.
- [I] **Cómo se envía hoy:** `POST {base}/api/ubl2.1/send-event-data` (`apidian-client.service.ts:990`) con `event_id`, `document_reference.cufe`, `issuer_party` opcional, `type_rejection_id` en el reclamo y `note`. Los pasos previos se encadenan (`RADIAN_PREREQUISITES` en `radian-dian-verdict.ts:69`). Se cobra como `EMIT_RADIAN_EVENT`.
- [I] **Para sumar eventos hay que tocar:** el enum del DTO, el mapa de códigos y etiquetas, `getRadianEventLabel`, los prerrequisitos, las opciones web, los eventos de cierre del planificador (`radian-auto-planner.ts:71`) y de la bandeja (`radian-inbox.service.ts:38`) y el simulador (`apps/api/scripts/factura-latam-simulator/server.ts:61`). El endoso necesita los datos del endosatario, que el DTO actual no lleva.
- [I] **Qué eventos son:** los de circulación de la factura como título valor (inscripción o disponibilización, endosos, aval, mandato, limitación de circulación, pago e informe para el pago), definidos en la Resolución 000085 de 2022 de RADIAN. Verifica los códigos exactos y las llaves de Factura LATAM antes de implementar.
- [I] **Pruebas:** `electronic-billing.radian-*.spec.ts`, `radian-events-response.spec.ts`, `radian-auto-planner.spec.ts`, `radian-eligibility.service.spec.ts`, `send-radian-event.dto.spec.ts`, `radian-new-event-sheet.spec.tsx`.

## Activaciones que conviene conocer
- [I] Variables de entorno: `ELECTRONIC_BILLING_POLLING_ENABLED` (estado en la DIAN), `ELECTRONIC_BILLING_RADIAN_POLLING_ENABLED` (eventos sobre las ventas), `RADIAN_AUTO_RULES_ENABLED` (reglas RADIAN), `RADIAN_COMPLIANCE_DIGEST_ENABLED`, `APIDIAN_SUPPORT_DOCUMENT_PREVIEW_ENABLED`, `FE_ANNUAL_RENEWAL_ENABLED`, `BILLING_ADDON_ENFORCED`.
- [I] Por empresa (superadministrador): `enabled_document_types`, modo de pruebas por grupo, set de pruebas y resoluciones por tipo.

## Otros arreglos pequeños
- [I] Avisar antes de que una resolución se agote o venza; hoy solo bloquea cuando ya pasó.
- [I] Agregar la nota de ajuste del documento soporte al filtro de tipo en Documentos.
- [I] Guardar borradores (el estado `draft` existe en la base, pero no hay pantalla).
- [I] Corregir el comentario del controlador de emisión que mapea mal los eventos (dice 2 = recepción y 4 = rechazo; es 2 = reclamo y 4 = aceptación expresa).
- [I] Textos de marca en la pantalla: "Cliente", "Nuvicoins", la marca con mayúscula o sin tilde, voseo ("Configurá", "Pedile"), trato de usted en Estado y en el saldo insuficiente, y palabras técnicas visibles ("super-admin", "backend", "APIDIAN").
