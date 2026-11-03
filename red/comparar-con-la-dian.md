---
id: comparar-con-la-dian
tipo: procedimiento
titulo: Comparar tus facturas con el listado de la DIAN
tema: archivo-y-comparacion-dian
publico: P
estado: verificado en el código
ruta: [Operaciones, Causaciones, Acciones, Comparar con DIAN]
url: /{organización}/companies/{empresa}/comparador-dian
siguiente: conectar-extension-dian
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/11-archivo-y-comparacion-con-dian.md
  - platform@5241b3430
---

# Comparar tus facturas con el listado de la DIAN

## Antes de empezar
- [P] Descarga del portal de la DIAN el listado del mes, **solo recibidas** (compras) o **solo emitidas** (ventas), sin mezclar y sin columnas agregadas.
- [P] Sirve el .zip de la DIAN o el Excel directo (.xlsx o .xls). La comparación es por mes y cruza por **CUFE**.

## Pasos
1. [P] Entra a **Operaciones › Causaciones**, abre **Acciones** y elige **Comparar con DIAN**. También está en la pestaña **Comparar DIAN** del mes en **Operaciones › Archivo**.
2. [P] Elige **Compras** o **Ventas** y el **Mes**.
3. [P] Si quieres, marca en **Excluir de la comparación**: **Facturas en $0**, **Nómina electrónica** o **Excluir ambiguas (unknown)**.
4. [P] Arrastra el archivo o haz clic para subirlo.
5. [P] Revisa los totales: **En DIAN**, **En núvara**, **Conciliadas** y **Faltan en núvara**. La vista abre en **Diferencias**; usa **Todas** o **Conciliadas** para ver el resto.
6. [P] En **Diferencias**, la columna **Solo en DIAN** son las facturas que te faltan en núvara y **Solo en núvara** las que la DIAN no reporta en ese listado.
7. [P] Resuelve las faltantes: **Restablecer factura** si la eliminaste en núvara, o **Copiar CUFE**, descarga su ZIP en la DIAN y súbelo con **Subir ZIPs**. Después compara de nuevo con **Subir otro archivo** y, si lo necesitas, pulsa **Descargar reporte**.

## Resultado
- [P] Sabes qué facturas del mes tienes en núvara, cuáles te faltan y cuáles no cuadran, antes de exportar. Las que trajiste quedan en **Causaciones › Pendientes** para causar.

## Si algo falla
- [P] «El archivo es de …»: el listado es de otro mes; núvara cambia el mes y compara ese periodo.
- [P] Te avisa que muchas filas no pudieron clasificarse: el archivo mezcla recibidas y emitidas. Activa **Excluir ambiguas (unknown)** y vuelve a cargarlo, o sube un listado limpio.
- [P] Aparecen documentos soporte o documentos equivalentes (tiquetes, peajes) en su propio grupo: es una diferencia esperada, no un error.
- [P] La comparación no revisa fechas ni tu programa contable: valida que la factura exista y que los montos coincidan. Una diferencia de un peso es redondeo.
