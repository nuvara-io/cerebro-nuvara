---
id: configurar-reteica
tipo: procedimiento
titulo: Configurar las reglas de ReteICA por municipio
tema: proveedores-y-retenciones
publico: P
estado: verificado en el código
ruta: [Administración, Configuración, Impuestos y retenciones, Retención ICA, Agregar Regla]
url: /{organización}/companies/{empresa}/settings?tab=taxes
siguiente: configurar-proveedor
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/09-proveedores-retenciones-y-autorretenedores.md
  - platform@5241b3430
---

# Configurar las reglas de ReteICA por municipio

## Antes de empezar
- [P] Tu empresa practica ReteICA a sus proveedores en el municipio donde declara.
- [P] Tienes en tu plan de cuentas las cuentas de ReteICA (grupo 2368), una por municipio o tarifa.
- [P] La tarifa la fija cada municipio según la actividad: confírmala con tu contador.

## Pasos
1. [P] Entra a **Administración › Configuración**, pestaña **Impuestos y retenciones**, y baja a **Retenciones › Retención ICA**.
2. [P] Pulsa **Detectar de mis cuentas** para que núvara proponga reglas desde tus cuentas 2368, o **Agregar Regla** para crear una vacía.
3. [P] En cada regla elige el **Municipio** y escribe la **Tarifa x 1.000**: va en **por mil** (por ejemplo 9,66), no en porcentaje.
4. [P] En **Actividades (CIIU)** deja **Todas las actividades** o elige Industria, Comercio, Servicios, Financiero, Construcción, Agropecuario o códigos CIIU puntuales.
5. [P] Elige la **Cuenta PUC** y, si aplica, la **Base mínima** en UVT o en COP. Deja la regla **Activa**.
6. [P] Ordénalas arrastrando: se revisan en orden y se aplica la primera que coincide. Pon las específicas arriba y la genérica de **Todas las actividades** al final.
7. [P] Pulsa **Guardar reglas** y recausa lo que esté en Pre-causadas.

## Resultado
- [P] Aparece «Reglas ICA guardadas» y la ReteICA de las compras se calcula con esas reglas al causar. Tú la revisas antes de aprobar.

## Si algo falla
- [P] «Cada regla ACTIVA necesita municipio, tarifa mayor a 0 y cuenta PUC»: completa la regla o apágala. Las reglas apagadas e incompletas no se guardan.
- [P] «Esta regla nunca se aplicará: la regla #… »: una regla de más arriba ya la cubre. Súbela o haz más específica la de arriba.
- [P] «No se encontraron cuentas 2368 con municipio en el nombre»: crea las reglas a mano con **Agregar Regla**.
- [P] Si la factura no trae la actividad o el municipio del proveedor, ajústalo en su ficha (**Tributa ICA en** y **ReteICA para este proveedor**).
