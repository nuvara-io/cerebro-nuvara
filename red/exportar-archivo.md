---
id: exportar-archivo
tipo: procedimiento
titulo: Exportar las causaciones a un archivo
tema: exportacion
publico: P
estado: verificado en el código
ruta: [Operaciones, Exportar]
url: /{organización}/companies/{empresa}/exportaciones/exportar
siguiente: historial-de-exportaciones
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/10-exportar-a-siigo-y-otros.md
  - platform@5241b3430
---

# Exportar las causaciones a un archivo

## Antes de empezar
- [P] Las facturas del mes están **aprobadas** o **archivadas**.
- [P] Conoces el último consecutivo que usaste en tu programa contable, si vas a numerar por lote.

## Pasos
1. [P] Entra a **Operaciones › Exportar**. También puedes abrirlo desde **Operaciones › Archivo** con **Exportar todo el mes**.
2. [P] En **¿A qué sistema contable exportas?** elige tu programa: Siigo, World Office, Alegra, Contai, Helisa, Avansys, SEDI o Genérico.
3. [P] En **Documento** elige **Compras** o **Ventas**, y en **¿Qué mes exportas?** el mes.
4. [P] Elige la numeración: **Por tipo de comprobante** (recomendada), **Secuencia del lote** con el número en que arranca, o **Número de la factura**.
5. [P] En **Detalle del archivo** elige **Por factura** o **Con los ítems** si llevas inventario, y revisa los avisos de la **Vista previa**.
6. [P] En **Tu archivo** sigue el orden que indica: descarga primero el **Maestro de terceros** (con **Solo nuevos**) y, en Siigo, los **Códigos de impuesto**.
7. [P] Pulsa **Exportar** con el nombre de tu programa e importa el archivo allá en ese mismo orden.

## Resultado
- [P] Se descarga el archivo y las causaciones quedan marcadas como exportadas en un lote del historial.

## Si algo falla
- [P] «No hay causaciones aprobadas ni archivadas»: aprueba o archiva las del mes y vuelve a intentar.
- [P] Si el programa rechaza terceros, importa primero el maestro de terceros. Si rechaza una cuenta, créala allá o cámbiala en la causación y exporta de nuevo.
- [P] Siigo acepta 500 comprobantes por importación: el archivo llega partido en un .zip; sube cada parte.
