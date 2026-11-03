---
id: configurar-proveedor
tipo: procedimiento
titulo: Configurar las retenciones de un proveedor
tema: proveedores-y-retenciones
publico: P
estado: verificado en el código
ruta: [Administración, Proveedores, Editar, Retención personalizada]
url: /{organización}/companies/{empresa}/suppliers/{proveedor}
siguiente: configurar-reteica
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/09-proveedores-retenciones-y-autorretenedores.md
  - platform@5241b3430
---

# Configurar las retenciones de un proveedor

## Antes de empezar
- [P] Ten a mano el RUT del proveedor: de ahí sale si es autorretenedor, gran contribuyente o de Régimen SIMPLE.
- [P] La configuración tributaria de tu empresa ya dice si retiene: sin ella no se calculan retenciones.
- [P] Lo que cambies vale para las facturas que lleguen después; las ya causadas se recausan.

## Pasos
1. [P] Entra a **Administración › Proveedores**, busca el proveedor y ábrelo.
2. [P] Pulsa **Editar**, arriba a la derecha. Se abre **Editar Proveedor**.
3. [P] En **Configuración Tributaria** revisa el **Régimen tributario** (Ordinario, Régimen SIMPLE (O-47) o No responsable de IVA) y marca **Autorretenedor**, **Gran Contribuyente** o **Exento de Retención**. Si la factura no trae la responsabilidad, usa los ajustes manuales **Agente retenedor de IVA (O-23)** y **Autorretenedor de ICA**: tienen prioridad sobre la factura.
4. [P] En **Retención personalizada**, para **ReteFuente**, **ReteIVA** y **ReteICA**, elige **Cuándo retener**: **Heredar** (la regla de la empresa), **Siempre** (sin importar la base mínima) o **Con mínimo**.
5. [P] Si a ese proveedor se le retiene solo una parte, escribe el **% de la retención calculada**: 100 es la retención completa y 50 la mitad; vacío hereda la configuración de la empresa. La tarifa la sigue calculando núvara.
6. [P] Si el proveedor tributa ICA en otro municipio que el de su RUT, elígelo en **Tributa ICA en**. En **ReteICA para este proveedor** elige **Automática (motor)**, **Retener siempre** (con su tarifa en por mil) o **No retener**.
7. [P] Pulsa **Guardar Cambios** y recausa las facturas Pre-causadas de ese proveedor.

## Resultado
- [P] Aparece «Proveedor actualizado correctamente» y las próximas facturas del proveedor se causan con esa configuración. Tú revisas la retención propuesta antes de aprobar.

## Si algo falla
- [P] Un proveedor del Régimen SIMPLE no puede ser Gran Contribuyente ni Autorretenedor. Con SIMPLE no se practica retefuente ni ReteICA; la ReteIVA aplica si tu empresa es responsable de IVA.
- [P] Marcar **Gran Contribuyente** no quita la retención por sí solo: solo **Autorretenedor** o **Exento de Retención** la quitan.
- [P] En ReteICA, la retención que ya trae la factura se aplica sin mínimo y el % parcial siempre se aplica.
- [P] Si sale «Error al actualizar el proveedor», vuelve a intentarlo. Las facturas ya causadas no cambian solas: recáusalas.
