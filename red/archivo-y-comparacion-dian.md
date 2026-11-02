---
id: archivo-y-comparacion-dian
titulo: Archivo y comparación con la DIAN
publico: P
actualizado: 2026-11-02
conexiones:
  - archivar-aprobadas  # cómo pasan las aprobadas al Archivo
  - conectar-dian       # traer lo que falta frente a la DIAN
fuentes:
  - conocimiento/flujos/11-archivo-y-comparacion-con-dian.md
  - platform@5241b3430
---

# Archivo y comparación con la DIAN

El **Archivo** es donde quedan las facturas aprobadas y archivadas, ordenadas por año y mes. La **comparación con la DIAN** cruza lo que tienes en núvara contra el listado de la DIAN para saber si te falta alguna factura antes de exportar.

## Dónde quedan las facturas
- [P] Cuando archivas las aprobadas, pasan a **Operaciones › Archivo**, organizadas por **año y mes**, con compras y ventas, su estado y la fecha de exportación.
- [P] En la carpeta del mes tienes las vistas **Facturas**, **Balance de prueba**, **Impuestos** y **Comparar DIAN**.
- [P] Desde el mes puedes ver la causación, exportar, enviar a Siigo y descargar los PDF en un .zip con **Descargar PDFs (ZIP) por rangos**.
- [P] El balance de prueba agrupa lo causado por cuenta y se baja a Excel. Es por mes y por cuenta, sin detalle por tercero.
- [P] Las facturas archivadas ya no aparecen en Pendientes: tenlas en cuenta al contar.

## Cómo se compara con la DIAN
**Operaciones › Causaciones › Acciones › Comparar con DIAN**
1. [P] Descarga del portal de la DIAN el listado del mes, **solo recibidas** (compras) o **solo emitidas** (ventas), sin mezclar.
2. [P] Elige compras o ventas, y el año y el mes.
3. [P] Arrastra el archivo: sirve el .zip de la DIAN o el Excel directo (.xlsx o .xls). La columna que manda es el **CUFE**.
4. [P] Revisa el resultado: **Conciliadas**, **Solo en DIAN** (te faltan en núvara), **Solo en núvara** y **Diferencias**, con los totales de los dos lados.
5. [P] Resuelve lo que falta (ver la sección siguiente) y vuelve a comparar hasta que todo cuadre.
6. [P] Si lo necesitas, descarga el reporte de la comparación.

## Qué hacer con las que faltan
- [P] **La eliminaste en núvara**: pulsa **Restablecer factura** (botón verde) en la fila y vuelve a la lista sin pedir nada a la DIAN.
- [P] **Nunca se descargó**: copia el CUFE con **Copiar CUFE**, descarga el .zip de esa factura en la DIAN y súbelo con **Subir ZIP**.
- [P] También puedes volver a descargar con la extensión de la DIAN el rango de fechas del mes para que traiga lo que falta.
- [P] Después ve a **Causaciones › Pendientes**, filtra por el mes, causa y revisa.
- [P] Importar por CUFE ya no existe: el CUFE sirve para buscarla en la DIAN o copiarla.

## Cómo leer el resultado
- [P] La comparación cruza núvara contra la DIAN, **no contra tu programa contable**. Lo que registraste a mano por fuera no se puede validar.
- [P] Valida que exista y que los montos coincidan; **no compara fechas**. Una diferencia de un peso es redondeo.
- [P] Los documentos soporte y los documentos equivalentes (tiquetes de punto de venta, peajes) se muestran en su propio grupo: es una diferencia esperada, no un error.
- [P] Las facturas de proveedores que excluiste no cuentan como faltantes: se informan aparte.
- [P] Las facturas en cero y la nómina electrónica se pueden excluir con los filtros **Sin $0** y **Sin nómina**.
- [P] Las notas crédito se restan.

## Cuándo hacerlo
- [P] Al cerrar cada mes y **siempre antes de exportar**: así cubres el 100 % de las facturas.
- [P] Descarga el listado de la DIAN al terminar el mes y guárdalo; sin él no hay comparación.
- [P] Si cuadra al peso el IVA de la DIAN con el IVA causado, la causación del periodo quedó bien.

## Errores comunes
- [P] **Archivo con compras y ventas mezcladas** o con columnas agregadas: la plataforma marca filas ambiguas. Sube el listado limpio, separado por tipo.
- [P] **Una factura rechazada o eliminada a propósito aparece como faltante**: lleva tu propia marca de las que descartaste.
- [P] **El recuento de tu programa contable no coincide**: revisa si faltan por descargar de la DIAN o si están archivadas en otro mes.
- [P] **Meses con cientos de facturas**: descarga los PDF en tandas más pequeñas.

## Para el equipo
- [C] Están anunciados sin fecha: informes con detalle por tercero, un buscador global entre pendientes, aprobadas y archivadas, y la conciliación con eventos RADIAN.
- [I] La página del comparador es `/comparador-dian` y no depende del flag de `dian-sync-alt`. También se abre desde la pestaña **Comparar DIAN** del mes en el Archivo.
- [I] `flujos/11` decía que el listado podía venir mezclado y que la comparación lo separaba; la pantalla actual pide expresamente "solo Recibidas o solo Emitidas, sin mezcla" y ofrece **Excluir ambiguas**. Gana el código.
- [I] `flujos/11` nombraba los grupos "conciliadas, no causadas, no encontradas y eliminadas"; en el código son Conciliadas, Solo en DIAN, Solo en núvara y Diferencias, y la acción se llama **Restablecer factura** (no "Restaurar factura").
- [I] El comparador ahora acepta .zip además de Excel. El reporte sigue saliendo en .txt (`reconciliacion_<tipo>_<año>-<mes>.txt`).
- [I] La pantalla del comparador escribe la marca con mayúscula en las etiquetas de faltantes; en respuestas, di núvara.
- [I] El Archivo tiene además **Chequeo pre-cierre** y **Cerrar periodo** en Acciones › Cierre del mes; no están en las capacitaciones.
