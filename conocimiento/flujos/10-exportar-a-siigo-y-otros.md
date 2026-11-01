# Exportar al software contable

## Objetivo
Llevar las causaciones aprobadas a Siigo (envío directo por API) o a otro software contable (archivo plano que el usuario importa). En los dos casos el usuario revisa antes: núvara prepara y el contador valida.

## Qué vía usar
| Software contable | Vía |
|---|---|
| Siigo en la nube (Nube) | API: se envía por factura desde Archivo. |
| Siigo Contador / Pyme, Alegra, Contai, Helisa, Odoo y World Office de escritorio | Archivo plano con *Exportar por fechas*. |
| World Office en la nube | API (ver `flujos/16-exportar-a-world-office-y-siigo-escritorio.md`). |
| Software propio | Formato a medida: el usuario entrega su plantilla de importación. |

- Las cuentas gratuitas de Siigo no permiten importar por API, y algunas empresas pueden no tener la licencia activa: a esas se les exporta por archivo. Hay quien conecta Siigo Contador por API y quien lo usa solo por archivo (ver `por-confirmar.md`).
- Cada empresa necesita su propia conexión.
<!-- fuentes: h-c7dee3911650, h-66174a17223f, h-294083954d31, h-6efbb6e48a66, h-a30f11ead348, h-1bf95f17e863, h-1adf87b5dfa6, h-f9bbb8990054 -->

## Requisitos
- Facturas aprobadas. Para el envío por API, además **archivadas**.
- Siigo por API: usuario de la API y clave de acceso (*access key*) generados en Siigo.
- Archivo plano: comprobante de compra configurado y, si el software lo pide, su plantilla de importación.
- El plan de cuentas de núvara debe coincidir con el del software contable; antes de causar con integración conviene traerlo desde allá.
<!-- fuentes: h-f9917fa6ff6d, h-a2337e3bee2b, h-220ed21c4a5b, h-7ff23bccd383 -->

## Pasos: Siigo en la nube por API

### Conectar (una vez por empresa)
1. En Siigo: **Alianzas › credenciales (Mi API)** › añadir aplicación de **desarrollo propio**, categoría "registro y gestión de compras", nombre núvara. Copia el usuario de la API y la clave de acceso.
2. En núvara: **Acciones › vincular sistema contable** (o Administración › Configuración › Integraciones). Pega usuario, clave y el identificador de socio de núvara, pulsa **probar conexión** y guarda. Si se queda pegado, recarga.
3. Verifica que la empresa conectada sea la correcta.
4. Para reconectar: desconecta, recarga, vuelve a conectar, guarda y **sincroniza catálogos**. Si sales sin guardar, aparece "hay un proceso en curso".

### Vincular (una vez)
Acciones › **sincronizar catálogos** y luego vincula:
- **Cuentas por pagar**: a la izquierda la cuenta de núvara, a la derecha la de Siigo. Si solo usas una, vincula solo esa.
- **Retenciones**: solo las que la empresa usa; si un proveedor tiene varios tipos según el servicio, vincula esa específica.
- **IVA**: descontable (19 % y 5 %). Sin ventas, no vinculas el generado. Si llevas el IVA como mayor valor del gasto o costo, vincula el impuesto genérico creado para eso en Siigo (no "IVA 19 %"); si no, el IVA termina en la cuenta descontable. Con mayor valor en gasto y en costo, ambas cuentas deben estar marcadas como impuesto en Siigo.
- **Comprobantes por tipo de documento**: factura de compra, nota débito, nota crédito y documento soporte, cada uno con su comprobante.
- **Inventario** y cuentas de compras, solo si la empresa los maneja. Cada categoría (por ejemplo "otros gastos") necesita una cuenta asignada.

### Ajustes de envío
- **Consecutivo estricto**: evita saltos y pausa el envío si hay error.
- **Detallar por producto**: cada línea llega con la descripción real; quítalo si prefieres un conglomerado. Sin inventario, puedes llevar todo directo al costo.
- **Aplicar reglas** antes de enviar, para que lleguen centros de costo, retenciones y descripción.

### Enviar
1. Operaciones › **Archivo** › año › mes. El envío no es automático al archivar.
2. **Primero una factura de prueba**: selecciónala, botón verde **Siigo**, confirma. Copia el número del indicador verde y búscala en Siigo con *ver contabilización*. Si está bien, envía el resto; la prueba no se duplica.
3. Envío masivo: casilla de emisión para marcar todas. Va por lotes de 50 (página por página), una a una al ritmo de Siigo, y puede tardar unos 10 minutos. Recarga para ver el avance y espera a que termine antes de reenviar.
4. Para ver las no enviadas, filtra por eso: el filtro "hoy" las oculta.

### Verificar y auditar
- **Jobs recientes / estado de sincronización**: enviando, reintentando o error con el motivo; las exitosas muestran el número de comprobante de Siigo.
- **Punto de consistencia** junto a cada factura: compara lo causado con lo guardado en Siigo. Verde, igual; rojo, revisa. Tarda en actualizarse.
- **Buscar en Siigo** (Acciones): cuántas facturas ya están vinculadas y cuántas no. Úsalo antes de enviar para no causar doble.
- Botón de más: *ver contabilización* y PDF. La observación en Siigo lleva el enlace al PDF original, útil ante una fiscalización de la DIAN.
- Para ubicarla en Siigo: Reportes › *consecutivo de comprobantes*, filtra mes y tipo y busca con Ctrl+F. Siigo la contabiliza con la fecha del documento, no la del envío.
- El consecutivo lo lleva Siigo: en automático (recomendado) o en manual si quieres fijar el punto de partida (ver `por-confirmar.md`).
<!-- fuentes: h-2021ec577723, h-20227cba2708, h-57509b5a0a19, h-356b484bdf40, h-6efbb6e48a66, h-78a6d7ffada0, h-ba672f6fbb0d, h-bc93e1619497, h-4b29b889ffdd, h-797a6adc3390, h-577942d4a1de, h-f9bbb8990054, h-f05e1fbaf759, h-4cae519c5dd0, h-c18467806240 -->

## Pasos: archivo plano (Siigo Contador/Pyme y otros)
1. En el mes del Archivo, **Acciones › Exportar por fechas**, y elige el programa contable.
2. **Terceros**: con "solo proveedores nuevos" / "ver faltantes", núvara genera primero el archivo de terceros. Impórtalo antes que los comprobantes.
3. **Primer comprobante** (una vez): código en el software (por ejemplo 10 u 11 para compras), nombre y prefijo, y los documentos que lleva: facturas de compra, documentos soporte, notas crédito y débito. Puedes separar por cuenta (por ejemplo, la clase 14). Usa el prefijo de la factura, no el del comprobante, para que los números no se repitan; guarda antes de exportar.
4. **Códigos de impuesto** (IVA 19 %, retención 1 %): salen de la configuración de impuestos de Siigo; importa el código, no la cuenta. Solo se piden la primera vez. Si sale `01` y Siigo pide `1`, edítalo en la vista previa.
5. **Consecutivo**: el siguiente al último usado en el software (créale un comprobante nuevo a Siigo para verlo). núvara no lo genera sola, para no chocar con registros manuales, y al terminar avisa cuál fue el último. Siigo no libera el número de un comprobante eliminado.
6. **Detallar mercancía por producto**: cada ítem en su línea; desmárcalo si no hay inventario.
7. Revisa la **vista previa** y descarga el Excel; puedes corregirlo con filtros antes de importar. Exporta por fechas para evitar duplicados. Las facturas que fallaron salen en un Excel aparte.

### Importar en Siigo
1. **Terceros**: engranaje › Clientes y proveedores › *Importación de clientes y proveedores* › subir el documento.
2. **Comprobantes**: Contabilidad › *Importación de comprobantes contables* › Siguiente › Terminar. El resumen muestra totales, importados y errores.
3. Máximo **500 comprobantes** por importación: núvara entrega un .zip en partes; descomprime y sube cada una.
4. Importar es seguro: solo entra lo que falta. Corrige y repite hasta que los errores queden en cero. Verifica en el balance de prueba › detalle de comprobantes.
5. Si Siigo Nube y Contador se comportan distinto, prueba con una sola factura.

### Formato del plano de Siigo Pyme
- Cuentas de **10 dígitos** (las de 8 más dos ceros); en Siigo Contador, de 8.
- Centro de costo con guion (001-1, no 001), sucursal en cero. Los campos numéricos obligatorios (cargo, descuento, cheque, porcentajes, base de retención) van en cero.
- Descripción: número de factura al inicio y resumen, hasta 50 caracteres. Cantidad: 1 en cuentas de resultado (clases 5, 6 y 7), 0 en las demás.
- Cada cuenta de pasivo lleva un código de **forma de pago**, que se carga por Excel.
- Prefijo y número de factura de hasta seis caracteres; se recorta de derecha a izquierda.
<!-- fuentes: h-1adf87b5dfa6, h-19e5ebd1eb97, h-7ff23bccd383, h-b967a73c48ed, h-f96fd89e31c6, h-c7dee3911650, h-1b5ddf9047dc, h-1bf95f17e863, h-4e1fc0ab7387, h-e407b9d99c2a, h-088d516b4772, h-2e1e6ac39318 -->

## Errores de importación y envío en Siigo
Son la primera causa de soporte. Casi todos vienen de cómo está parametrizado Siigo, no de núvara: **la importación depende de la configuración de cada usuario**.

### Cuentas e impuestos
| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| "La cuenta contable no existe" / "el código no existe" | Existe en núvara, no en Siigo. núvara crea proveedores allá, **no cuentas**. | Crearla en Siigo (clase y nivel correctos) o reemplazarla en el Excel; reenviar. Usa *validar cuenta en Siigo* antes. |
| "Debe ser transaccional" / sin último nivel | La cuenta es mayor o padre, o de seis dígitos. | Crear el auxiliar de ocho dígitos o ponerla a nivel transaccional. |
| Cuenta inactiva (en rojo) | Desactivada. | Activarla o cambiarla en la causación. |
| "No está marcada con impuestos" / "el impuesto no tiene relación con la cuenta" | núvara manda un código de impuesto y Siigo lo traduce a la cuenta; si no está asociada, la factura queda con punto rojo. | Siigo › Contabilidad › Impuestos: crear el impuesto y asociar la cuenta. |
| "Desvincular la cuenta 51… de IVA" | En la vinculación de IVA quedó una cuenta de gasto. | Dejar solo cuentas de IVA reales. |
| Cuenta por pagar (2205) rechazada | Sin manejo de vencimientos y la factura trae fecha de vencimiento. | Marcarlo en el PUC de Siigo. |

### Comprobantes y consecutivos
| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| "Tipo de comprobante no es de compra / inactivo" | El tipo de factura de compra apunta a otro comprobante. | Acciones › Comprobantes › vincular el correcto. |
| Rechazo por numeración | El comprobante de compras y gastos exige número manual. | En Siigo: Configuración › Compras y gastos › editar › numeración automática. En núvara no se cambia nada. |
| "Tipo de comprobante cero no existe" | Las notas crédito salen con tipo y consecutivo en cero. | Escribir a mano el tipo de compra en el exportable. Falla conocida, escalada al equipo técnico. |
| "El comprobante ya existe" | Reimportaste lo ya cargado, o dos filas comparten número. | No es problema: solo faltan los rechazados. Siigo no reemplaza uno existente. Si fue falla de la API, cancela y reintenta cuando se restablezca. |
| "Descuadrado entre débito y crédito" | Cambiaste una cuenta sin su contrapartida. | Revisar el comprobante en Siigo. |
| Decimales mal interpretados | Consecutivo no continuo. | Reordenar por consecutivo. |
| "Código de producto no válido" o campos obligatorios vacíos | La empresa no maneja inventario. | Quitar cantidad y código de producto, o desmarcar *detallar por producto*. |
| Dos facturas del mismo proveedor quedan como una | El campo de número es corto y se pierde el último dígito. | Numerar de derecha a izquierda. |

### Centros de costo y terceros
| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| "El centro de costo asignado no existe" (queda *reintentando*) | La factura no lo tiene, o el comprobante lo exige. | Cancelar la importación, asignar el centro, volver a archivar y reenviar; o crear en núvara los centros de Siigo, o quitar allá "centro de costo obligatorio". |
| "Centro de costo sin el tamaño correcto" | Siigo exige el formato con guion. | Corregirlo en el Excel. |
| "La factura no puede contabilizarse" (menciona al proveedor) | El tercero está como persona natural siendo empresa, o con una casilla que bloquea compras. | Corregirlo en Siigo y reenviar solo las fallidas. |
| Faltan terceros | No se importaron antes. | Importar primero el archivo de terceros. |
| Terceros rechazados | Plantilla nueva: país de tres letras (COP) y tipo de entidad obligatorio. | Ajustar el archivo. |
| Teléfonos | Siigo exige 10 dígitos, sin espacios, indicativo ni +57. | Limpiar antes. |

### Errores sin explicación
- **Filtros** aplicados en el Excel exportado: quítalos todos.
- **Fechas de transacciones bloqueadas** en Siigo.
- **Perfil de la organización** con datos mal escritos.
- **Comprobante de compras sin libro oficial de compras y ventas**: la columna de bases genera conflicto.
- **Empresa equivocada** o catálogo de otra empresa: desconecta y reconecta.
- **Página de Siigo caída o lenta**: espera o reinicia la pestaña; mientras, sigue causando y aprobando.
- **Factura ya enviada**: no se reenvía; si la eliminaste en Siigo, límpiala del historial de jobs. Tras corregir, Acciones › **limpiar errores** y reenvía.

### Cómo depurar
Importa, lee el resumen, filtra la cuenta o el código en el Excel, corrige en bloque y reimporta solo lo que faltó (también la parte 2). Si tu plan de cuentas difiere del de núvara, **homologa cuentas y códigos en núvara** para no editar cada vez. En un Siigo nuevo es normal corregir cuenta por cuenta. Una factura ya exportada no se edita: corrige la cuenta, ábrela de nuevo y reexporta.
<!-- fuentes: h-1adf87b5dfa6, h-7ff23bccd383, h-b967a73c48ed, h-ba672f6fbb0d, h-20227cba2708, h-4cae519c5dd0, h-797a6adc3390, h-6efbb6e48a66, h-f05e1fbaf759, h-f96fd89e31c6, h-c18467806240, h-568b1428fb13, h-4e1fc0ab7387, h-c7dee3911650, h-3b10fe0f0da1, h-78a6d7ffada0, h-bc93e1619497, h-ea07c173c7f7, h-1bf95f17e863 -->

## Otros programas por archivo
- Consecutivo repetido: sobrescribe o el software ignora el comprobante.
- Archivo con columnas de más (World Office) o con el formato de otro programa: se construye el formato específico.
- Si la cuenta no existe en la empresa destino, el programa rechaza el movimiento: créala y reimporta.
- Los códigos de retención cambian según el tipo de transacción (factura y nota crédito) para caer en débito o crédito.
- Prueba el archivo en una empresa de práctica, para no duplicar facturas.
<!-- fuentes: h-a921afd858ce, h-088d516b4772, h-2eed69e6f27f, h-a8886865ddfd, h-d35e1cc2634f, h-a30f11ead348 -->

## Casos especiales
- **Prefijos por archivo**: núvara importa solo el consecutivo; el prefijo se configura en configuraciones generales. Para firmas sin prefijo, se indica desde qué número y fecha arrancar y núvara numera factura por factura.
- **Siigo Contador sin balance de prueba cargado**: las cuentas se asocian a mano al principio.
- **Plan de contador independiente**: no admite centros de costo en la factura de Siigo; se ven en núvara. Alternativa: usar las observaciones para la placa.
- **Inventario**: se exporta solo el movimiento contable. En Siigo el stock no se actualiza sin *mover stock* ni con el producto sin mapear.
- **Facturas ya causadas a mano**: usa *Buscar en Siigo*. Los documentos soporte y las cuentas de cobro no se contabilizan: quítalos.
- **Precausación → revisión → aprobación → archivo**: el archivo es el que envía.
<!-- fuentes: h-23bf40f47dd3, h-12027d283e58, h-f96fd89e31c6, h-577942d4a1de, h-a59810d87210, h-72ec6e3363ae, h-ac5a1e51c5ed, h-f05e1fbaf759 -->

## En desarrollo o pendiente
- Exportar con prefijos correctos por archivo (en desarrollo según el equipo, 2026).
- Exportar solo los terceros del mes, reemplazar comprobantes existentes y base gravable por impuesto en el archivo.
- Egresos, recibos de caja y cajas menores por archivo plano.
- Validador de versión de Siigo, cápsulas de video al conectar y figurar como aliado de Siigo.
- Emitir documentos desde núvara y contabilizar en Siigo (en validación).
- Escalados: IVA del 5 % que no sincroniza, archivadas que reaparecen como no enviadas, notas crédito en cero.
<!-- fuentes: h-23bf40f47dd3, h-e407b9d99c2a, h-b967a73c48ed, h-3bfcdd9e3190, h-ed9c331e7c17, h-294083954d31, h-fad9de9e12ed, h-78a6d7ffada0, h-6efbb6e48a66 -->

## Tips del asesor
- Verifica si el documento ya está en Siigo antes de enviar.
- Envía una factura de prueba y exporta por fechas.
- Lo duro es configurar: el primer mes se invierte tiempo y el siguiente casi nada.
- Si la API falla, cancela la importación para evitar bloqueos y espera aviso.
- Corregir el Excel con filtros por cuenta es más rápido que causación por causación.
<!-- fuentes: h-2e1e6ac39318, h-b967a73c48ed, h-577942d4a1de, h-1adf87b5dfa6, h-ba672f6fbb0d, h-20227cba2708, h-bc93e1619497 -->
