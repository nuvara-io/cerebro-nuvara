# Archivo y comparación con la DIAN

## Objetivo
Asegurar que todas las facturas del periodo están causadas, ordenadas y cruzadas con lo que reporta la DIAN antes de exportar.

<!-- fuentes: h-0e3c41c7a48d, h-356b484bdf40, h-f9bbb8990054 -->

## Requisitos
- Facturas aprobadas.
- El listado de facturas recibidas del mes, descargado de la DIAN (Excel; sirve también el que sale con el token).
- Para habilitar la comparación de un mes, debe haber al menos una factura aprobada en ese mes.

<!-- fuentes: h-3162db18d8b9, h-f05e1fbaf759, h-f9bbb8990054 -->

## Pasos: archivar y ver el archivo
1. En **Aprobadas** revisa las facturas, selecciónalas (todas, o por fechas) y pulsa **Archivar seleccionadas**. También existe **Archivar por fechas**: con las aprobadas filtradas por mes, crea las carpetas mes a mes.
2. Entra a **Ver archivos** (desde Causaciones u Operaciones › Archivo): la plataforma las organiza por **año y luego por mes**, con el historial de compras y ventas, el estado y la fecha de exportación de cada factura.
3. Desde la carpeta del mes puedes: ver o corregir la causación, **exportar** (Acciones › Exportar), ver el **balance de prueba** del mes, ver los **impuestos** del mes (IVA descontable, retenciones) y pulsar **Comparar con la DIAN**.
4. El balance de prueba agrupa lo causado por clase de cuenta (IVA descontable, IVA no descontable, gastos y costos, cuentas por pagar, otros) y se baja a Excel. Es simple y por mes; para un balance completo hay que cargar saldos iniciales.
5. Para buscar una factura puntual, usa la búsqueda por folio dentro del archivo: confirma que ya está archivada.
6. Archivar sin causar también es posible: sirve para que las facturas de meses anteriores alimenten el análisis de compras sin pasar por la causación.

<!-- fuentes: h-1b5ddf9047dc, h-1bf95f17e863, h-356b484bdf40, h-57509b5a0a19, h-577942d4a1de, h-5cb9422bb0c9, h-85f50952dea3, h-a2337e3bee2b, h-c6fcf2a8890e, h-c7dee3911650, h-f05e1fbaf759, h-f96fd89e31c6, h-fad9de9e12ed -->

## Pasos: comparar con la DIAN
1. Elige año y mes y pulsa **Comparar con la DIAN**.
2. Arrastra o carga el listado de recibidos del mes descargado de la DIAN. La columna obligatoria es el **CUFE**. Conviene filtrarlo por ese mes y solo recibidos; si trae compras y ventas mezcladas, la comparación identifica lo que corresponde.
3. El resultado separa **conciliadas**, **no causadas** (aún pendientes), **no encontradas** y **eliminadas**, con los totales de ambos lados. Las notas crédito se restan. Marca "solo los no encontrados" para ver únicamente lo que falta.
4. Abre el detalle de una factura no encontrada para ver su tipo de documento y saber si fue eliminada o nunca se descargó.
5. Resuelve lo que falta (ver "Qué hacer con los no encontrados"). Cuando los montos coinciden y no quedan diferencias, el mes queda cerrado: el 100 % de los documentos está cubierto.
6. Puedes descargar el reporte de la comparación (hoy sale en TXT, se puede copiar a Excel).

<!-- fuentes: h-1b5ddf9047dc, h-1bf95f17e863, h-23bf40f47dd3, h-3162db18d8b9, h-78a6d7ffada0, h-85f50952dea3, h-c7dee3911650, h-e5076d0a7373, h-f05e1fbaf759, h-f9bbb8990054 -->

## Qué hacer con los no encontrados
- **Eliminada en núvara:** pulsa **Restaurar factura** (botón verde) o recupérala desde la papelera (flujo 17). En una sesión algunas no se restauraron solas y quedaron resaltadas en verde claro para revisar.
- **No descargada de la DIAN:** vuelve a descargar de la DIAN el rango de fechas del mes (quitando el CUFE previo del filtro) para que la extensión traiga lo que falta. La extensión se puede minimizar y arrastrar si tapa el botón de descargar.
- **Manual:** copia el folio o el CUFE desde la plataforma, búscala en la DIAN › documentos recibidos, descárgala y sube el archivo comprimido (.zip) de esa factura. La DIAN a veces bloquea la descarga de algunas; esas hay que registrarlas a mano.
- Después vuelve a Causaciones › Pendientes, filtra por el mes, selecciona, causa y revisa en precausadas.
- **Documentos soporte y equivalentes:** los documentos soporte emitidos por el usuario aparecen en la DIAN pero no en núvara; los documentos equivalentes (por ejemplo, tiquetes de punto de venta) tampoco se causan aquí. Es la diferencia esperada, no un error.

<!-- fuentes: h-1b5ddf9047dc, h-1bf95f17e863, h-5cb9422bb0c9, h-6efbb6e48a66, h-e407b9d99c2a, h-f05e1fbaf759, h-f9bbb8990054 -->

## Cómo interpretar el resultado
- La comparación solo cruza lo cargado en núvara contra la DIAN; **no compara contra el software contable**. Por eso, para que la verificación sea completa, **todo se causa por núvara**: los registros manuales hechos por fuera no se pueden validar automáticamente (ver `por-confirmar.md`).
- Valida existencia y montos, pero **no compara fechas**. Una diferencia mínima (un peso) se considera redondeo.
- Las facturas que no están en la DIAN (por ejemplo, servicios públicos) pueden estar en núvara y no en la DIAN; es normal.
- Las facturas ya archivadas no vuelven a aparecer entre las pendientes: tenlas en cuenta al contar.
- Si el archivo de comparación se modificó después de cargarlo, vuelve a subirlo antes de comparar. Si el recuento del software contable no coincide con el de núvara, revisa si faltan por descargar de la DIAN o si están archivadas en otro mes.
- Una factura rechazada o descartada por el usuario y una faltante se ven igual en la comparación: lleva una marca de rechazadas en tu propio archivo.
- Una comparación con el token de la DIAN también sirve para el IVA: si el total de IVA de la DIAN coincide al peso con el IVA causado, la causación quedó bien. Para presentar IVA concilia el periodo completo antes de proyectarlo.
- Los PDF que descarga núvara son los que genera a partir de la DIAN, no el original del correo.

<!-- fuentes: h-2eed69e6f27f, h-3162db18d8b9, h-3610bb8fc4d6, h-6efbb6e48a66, h-722e015bdc9c, h-85f50952dea3, h-a2337e3bee2b, h-c7dee3911650, h-e407b9d99c2a, h-f9bbb8990054, h-fad9de9e12ed -->

## Descargar las facturas del mes
- En el mes del archivo, selecciona las facturas y descarga en PDF (y XML). Sale un ZIP con las facturas organizadas por carpeta de proveedor, con el servicio y el número de factura en el nombre.
- Sirve para tener copia física, para imprimir tras archivar, o si el usuario deja el servicio. Solo se imprimen todas juntas después de aprobar y archivar.
- Contiene lo que el usuario trajo ese mes (por ejemplo, solo lo de la DIAN).
- En meses con cientos de facturas la descarga puede fallar por un límite: descarga en tandas más pequeñas.

<!-- fuentes: h-040559feec95, h-57509b5a0a19, h-5cb9422bb0c9, h-a2337e3bee2b, h-ac390aa796e4, h-c7dee3911650, h-e5076d0a7373, h-fad9de9e12ed -->

## Casos especiales
- **Unicidad:** se garantiza por el CUFE; si ya existe en la empresa, no se descarga otra vez, venga de donde venga.
- **Revisor externo:** la contadora de la empresa puede tener un usuario propio solo para consultar el archivo, ver las facturas y anular. El revisor puede anular una causación incorrecta y reenviarla corregida.
- **Transitorias:** son las facturas que aún tienen algo pendiente en la plataforma.
- **Meses ya causados a mano:** si el trabajo ya está hecho, no suele valer la pena recausarlo; se pidió exportar la salida de esos meses para cruzar diferencias y empezar oficialmente desde el mes siguiente.
- **Siigo:** en el archivo, selecciona las facturas del periodo y usa Acciones › **Buscar en Siigo** para ver cuáles ya migraron.
- **Correo y DIAN:** la plataforma trae las facturas de las dos fuentes: de la DIAN para que no se escape ninguna y del correo para ver la representación gráfica original del proveedor. Apoyarse en una sola hace perder IVA.
- **Retenciones aplicadas por error** a un proveedor que no era agente de retención: se pueden marcar como gasto no deducible, a juicio del contador del usuario.

<!-- fuentes: h-2021ec577723, h-220ed21c4a5b, h-57509b5a0a19, h-577942d4a1de, h-6efbb6e48a66, h-722e015bdc9c, h-fccf335cc6f1 -->

## Errores comunes
- Documentos que quedan en Pendientes por tener un evento no reconocido.
- Diferencias de fechas entre la DIAN y la plataforma.
- Archivo muy modificado (columnas extra): la plataforma responde "filas ambiguas" y pide excluirlas y volver a cargar. Sube el listado limpio del mes.
- No haber guardado el listado de la DIAN antes de la sesión: sin él no hay comparación.
- Una factura faltante que se había eliminado antes: hay que volver a traerla por correo o por la DIAN. **Importar por CUFE ya no existe** (se quitó por cambios de la DIAN); el CUFE sirve para consultar en la DIAN o copiar.
- Las facturas que el equipo contable eliminó al causar (por ejemplo, gastos no procedentes de personas naturales) aparecen como faltantes y se confunden con las que realmente faltan.
- El balance de prueba y el total de retenciones salen solo por cuenta contable; no hay detalle por tercero.

<!-- fuentes: h-3162db18d8b9, h-78a6d7ffada0, h-85f50952dea3, h-e407b9d99c2a, h-f05e1fbaf759 -->

## Tips del asesor
- Hazlo al cerrar cada mes, **siempre antes de exportar**: así se toma en cuenta el 100 % de las facturas.
- Sirve también como cierre de integridad antes de exportar.
- Descarga el listado de la DIAN al terminar el mes y guárdalo.
- Termina el flujo completo de una primera empresa antes de replicarlo en otras.

<!-- fuentes: h-1b5ddf9047dc, h-1bf95f17e863, h-f9bbb8990054 -->

## Novedades y en desarrollo
- **Detector de descuadres** por factura (total de la factura contra lo causado): ayuda a encontrar impuestos no reconocidos, como el impuesto al consumo de bebidas. Se acordó ignorar diferencias menores a 50 pesos; el umbral se está afinando y las notas crédito se detectan como descuadre por el signo.
- **En desarrollo, según el equipo (2026):** informes con detalle por tercero, sin fecha; un buscador global que ubique facturas en pendientes, aprobadas y archivadas; y mostrar el nombre del tercero y marcar las eliminadas manualmente en la comparación.
- **Planeado:** reporte de la comparación directo en Excel; conciliación con eventos RADIAN y "aceptación expresa" (acuse, recibo de bienes y aceptación) desde la plataforma. Por ahora los eventos se emiten desde el software contable del usuario.

<!-- fuentes: h-3162db18d8b9, h-3bfcdd9e3190, h-85f50952dea3, h-a8886865ddfd, h-b66360b1cf5c, h-e407b9d99c2a -->
