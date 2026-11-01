# Preguntas frecuentes (reales, anonimizadas)

## Configuración inicial
**¿Qué necesito para crear una empresa?**
El RUT y el balance de prueba por tercero en Excel. Por cada empresa nueva repites el proceso.

**¿Por dónde creo una empresa nueva?**
Desde el panel de empresas, con la opción de crear una nueva; sigues los mismos pasos iniciales.

**¿Qué rango de fechas debo usar en el balance de prueba?**
El rango con el que sueles causar la empresa. Si causas mes a mes, el año en curso es suficiente.

**¿Por qué falla la carga del balance?**
Probablemente tiene filas azules al inicio. Ábrelo en tu computador y bórralas (hasta la fila 7).

**Si tengo cinco empresas, ¿las encuentro todas juntas?**
Sí, en el panel de empresas de tu perfil.

**¿Puedo cambiar la configuración después?**
Sí, incluso después de haber empezado a causar.

**¿Cómo manejo el IVA si la empresa no tiene actividad gravada?**
Se puede llevar como mayor valor del gasto, con línea separada por cuenta de IVA. Si no tienes claro el tratamiento, usa "mayor valor" y revisa con el contador.

## DIAN y correo
**¿Por qué necesito instalar una extensión?**
La plataforma de la DIAN es técnicamente compleja y bloquea descargas; la extensión (de Chromium, verificada, propia de núvara) evita bloqueos. Se instala una sola vez por equipo.

**¿La extensión funciona en Firefox?**
No; requiere Google Chrome en perfil estándar, sin modo incógnito.

**La extensión no aparece. ¿Dónde está?**
Probablemente la instalaste en otro perfil de Chrome distinto al que usas para núvara.

**¿Siempre tengo que pedir el token?**
El token permite descargar sin repetir el proceso manual constantemente mientras sea válido; si caduca, lo solicitas de nuevo.

**La DIAN me bota o muestra error. ¿Qué hago?**
Descarga una factura manualmente, recarga la página y retoma la descarga masiva con la extensión.

**¿Por qué algunas facturas salen "fallidas"?**
Son documentos que ya existían (por ejemplo, ya importados desde el correo).

**¿Por qué solo entró un documento al sincronizar el correo?**
Prioriza la integración directa con la DIAN; el correo puede tardar o tener pocas facturas con el formato esperado.

**¿Tengo que descargar todos los meses?**
Se recomienda descargar todo el año y causar de manera global.

**¿Las facturas futuras llegan solas?**
Sí, con el correo sincronizado y la extensión activa.

**¿Necesito eventos RADIAN?**
En un caso se aclaró que no eran necesarios para esas operaciones.

## Causación y revisión
**¿Qué pasa en cada estado?**
Pendientes: recibidas. Precausadas: procesadas y editables. Aprobadas: validadas. Archivadas: listas y ordenadas.

**¿Se cobra al descargar?**
No; se cobra al precausar. Lo irrelevante se elimina antes.

**¿Cómo corrijo una factura?**
Si no se envió al software contable, en núvara directamente; si ya se envió, se anula y se vuelve a causar.

**¿Puedo clasificar productos distintos de una misma factura en cuentas distintas?**
Sí, seleccionas el producto dentro de la factura y le asignas otra cuenta; la plataforma aprende.

**¿La corrección afecta todo o solo ese proveedor?**
Tú eliges: global, por proveedor o por concepto.

**¿Hay que revisar factura por factura?**
Al inicio sí; luego por grupos.

**¿Qué hago con una factura que no es un gasto de la empresa?**
Eliminarla desde la plataforma.

**¿Se puede causar a seis y a ocho dígitos?**
Se puede ajustar la configuración incluso después de empezar.

## Retenciones
**El proveedor es autorretenedor pero la plataforma retiene. ¿Qué hago?**
Edita la ficha del proveedor y marca autorretenedor; queda configurado para futuras facturas.

**¿ReteICA se calcula sola?**
Se agrega manualmente en la causación y se puede dejar fija para ese proveedor.

**Mi usuario es del Régimen Simple.**
La plataforma no detecta todas las retenciones; ajustes manuales.

## Centros de costo y reglas
**¿Tengo que crear una regla por cada centro de costo?**
No; si comparten lógica, se agrupan en una sola.

**¿Las reglas aplican entre empresas?**
No, cada empresa tiene las suyas.

**¿Cómo traigo los centros de costo?**
Con la sincronización de etiquetas desde el correo; los faltantes se crean en la plataforma.

## Exportación
**¿Puedo generar reportes en Excel o PDF?**
La exportación está disponible una vez aprobados los documentos.

**¿Cómo manejo los consecutivos al exportar?**
El usuario indica el consecutivo; la plataforma no lo genera para evitar choques con registros manuales.

**¿Puedo crear terceros masivamente?**
Sí, la exportación identifica los proveedores nuevos.

**¿Los documentos soporte se pueden causar en núvara?**
En una sesión se dijo que aún debían seguir su proceso en Siigo.

**¿Hay integración con otros softwares contables?**
Se intentó con API y, si falla, archivo plano. Para Siigo Pyme el archivo plano estaba validado.

## Nuevas preguntas de sesiones de soporte y demostraciones

### Entrada de facturas
**¿Cómo causo facturas del exterior o legalizaciones de viaje que no vienen de la DIAN?**
Impórtalas manualmente en PDF desde Operaciones → Causaciones; para gastos de viaje usa la legalización de gastos (flujo 15).

**¿Y si mis facturas llegan a un correo de gerencia y me las reenvían?**
Usa la importación manual de PDF, XML o zip, o conecta ese correo; la plataforma asigna cada documento por el NIT.

**Eliminé facturas y vuelven a aparecer. ¿Por qué?**
Antes se restauraban en cada sincronización; ahora van a una papelera y no se restauran solas (flujo 17).

**¿Puedo evitar que se descarguen ciertas facturas (compras personales, ventas que no necesito)?**
Se habilitó un bloqueo para facturas no deseadas; para ventas que llegan por correo se pidió ampliarlo.

**¿Por qué mis facturas de ventas descargadas son menos que las de la DIAN?**
La plataforma se diseñó sobre todo para compras; envía el archivo y el token al soporte.

**¿Con qué frecuencia se descarga el correo?**
Es configurable (se usó cada 15 minutos).

**El token no se reconoce, ¿qué hago?**
Copia la dirección del enlace del correo del token y pégala en una pestaña del mismo navegador donde tienes la sesión de núvara y la extensión.

**¿Puedo procesar meses atrasados?**
Sí; sincronizando correo y DIAN por lotes. Para ventas descarga mes a mes.

### Causación y revisión
**¿Por qué la plataforma no aplicó una retención de restaurantes o de arrendamiento?**
La interpretó como compra de productos o aplicó el arrendamiento a la inmobiliaria; el asesor se comprometió a ajustar las reglas (ver `por-confirmar.md`).

**¿Puedo asignar centros de costo en bloque?**
Sí: Precausadas → Acciones, filtra los registros sin centro y asigna.

**¿Cambio cuentas después de revisar?**
En cualquier etapa antes de enviar al software contable; después, en el software.

**¿Qué hago si tengo una cuenta de inventario que no existe en mi plan?**
Fusiona la cuenta con la correcta y usa el cambio de cuenta en lote.

**¿Puedo agregar una retención que no se aplicó en una factura aprobada?**
Sí: retefuente personalizada desde el detalle (ícono de ojo).

**Dos IVA en una misma factura (compras y servicios).**
Era una falla del modelo en revisión; reporta el caso al soporte.

### Exportación
**¿Cómo mando el detalle de los productos al software contable?**
Importa dos archivos (contabilización y movimientos de inventario) o activa el detalle por producto en los ajustes de envío de Siigo.

**¿Por qué mi importación falla con "cuentas inexistentes" o "terceros no reconocidos"?**
Revisa el plan de cuentas del software, crea los terceros primero y mantén cerrados los archivos.

**¿Por qué las notas crédito heredan el consecutivo de la factura?**
Usa un tipo de comprobante propio para notas crédito y revisa el consecutivo real.

### Ventas, nómina y otros módulos
**¿Puedo configurar ReteICA en ventas por ciudad?**
Sí, por sede o ciudad de prestación del servicio; en general o por comprador.

**¿Se puede emitir la nómina electrónica desde núvara?**
Sí, directamente a la DIAN; en el software contable solo se registra el asiento (flujo 18).

**¿Hay un módulo de egresos, conciliación o cajas menores?**
Están en desarrollo o validación (ver `producto.md`).

### Precios y comercial
**¿Cuánto cuesta causar una factura de venta?**
200 COP por factura (confirmado).

**¿Cuál es la recarga mínima?**
80.000 COP (confirmado).

Lo que sigue está a validar.

**¿Hay permanencia mínima?**
No se mencionó cláusula de permanencia.

**¿Qué incluye el primer pago?**
La recarga inicial con la capacitación (2 horas más 1 hora de acompañamiento).

**¿Me cobran si no uso la plataforma?**
Desde el segundo mes se habló de un consumo mínimo mensual (ver `por-confirmar.md`).

**¿Quién responde si hay un error de la plataforma?**
El chat de soporte integrado es el canal oficial.

## Créditos y soporte
**¿Cuánto cuesta cada causación?**
Una cantidad fija de créditos (ver `por-confirmar.md`).

**¿Con qué puedo pagar?**
Tarjeta; transferencia con comprobante por el grupo.

**¿Cuánto dura una capacitación?**
Normalmente unas 2 horas; hay soporte por WhatsApp y videos tutoriales en preparación.
