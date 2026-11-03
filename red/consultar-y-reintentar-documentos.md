---
id: consultar-y-reintentar-documentos
tipo: procedimiento
titulo: Consultar, reenviar o reintentar un documento emitido
tema: factura-de-venta-y-notas
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Documentos]
url: /{organización}/companies/{empresa}/electronic-billing/historial
siguiente: null
actualizado: 2026-11-03
fuentes:
  - platform@5241b3430
---

# Consultar, reenviar o reintentar un documento emitido

## Pasos
1. [P] Entra a **Facturación Electrónica › Documentos**. Filtra por tipo, estado (Aceptado, Enviado, Rechazado, Fallido, En cola) o busca el documento.
2. [P] **Reenviar al comprador:** en una factura o nota aceptada, pulsa **Reenviar por email**.
3. [P] **Descargar:** abre el documento y descarga el PDF o el XML, o pulsa **Copiar CUFE**.
4. [P] **Rechazado o Fallido:** pulsa **Editar y reintentar** para corregir los datos y volver a emitir, o **Reintentar** para enviarlo igual.
5. [P] **Enviado sin confirmar:** si ves "No reemitas: verifica en la DIAN", pulsa **Verificar en la DIAN** antes de hacer nada más.
6. [P] **Reportes:** **Exportar Excel** o **Libro auxiliar PDF** con lo emitido.

## Lo que hay que saber
- [P] Reintentar vuelve a cobrar el documento y toma un consecutivo nuevo.
- [P] Un documento **Aceptado** no se edita: se corrige con una nota crédito o débito.
