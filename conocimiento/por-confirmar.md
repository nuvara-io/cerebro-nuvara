# Por confirmar

Todo lo que aquí aparece se dijo en sesiones pero necesita validación del equipo antes de usarlo en videos o respuestas.

## Confirmado por el equipo (31/10/2026)
Estos valores ya se pueden usar en videos y respuestas:
- **Causación de una venta:** 200 COP.
- **Mínimo mensual de consumo:** 80.000 COP, que se descuentan del saldo cada mes; lo no consumido se acumula para el mes siguiente.
- **Sigue pendiente la recarga mínima:** la billetera de la app dice 70.000 COP y la calculadora del sitio arranca en 200.000.

## Sitio oficial frente a las sesiones (31/10/2026)
- **World Office:** en las sesiones se exportaba por archivo plano; el sitio dice que ya hay API con token.
- **Conciliación bancaria:** en las sesiones figuraba como "en desarrollo"; el sitio la ofrece con extractos PDF de Bancolombia, Davivienda y Nu, o CSV.
- **Ventas:** se dijo que núvara "prioriza compras"; el sitio causa compras y ventas por igual.
- **Fuentes de facturas:** el sitio menciona chats y facturas físicas escaneadas; en las sesiones el OCR estaba en desarrollo.
- **Cifras de ahorro:** el sitio dice 80 %, 88 % y 90 % según la página, y 15 o más de 20 horas semanales. Hay que unificarlas antes de usarlas.

## Precios y números
- **Recarga inicial con capacitación:** se mencionó una recarga cercana a 271.000 COP equivalentes a unos 2.710 créditos y a unas 531 facturas; en otra sesión se habló de "270.000". Es el paquete de inicio, no la recarga mínima.
- **Costo por causación:** un asesor dijo unos 5,1 créditos por factura (cerca de 510 COP); otro número aproximado salió en otra sesión. Confirmar tarifa por causación de compra, venta, nómina y caja.
- **Costo de eventos RADIAN:** se mencionó 2,5 créditos; también que se "habilitarían la próxima semana". Confirmar si ya están disponibles.
- **Reducción de precios:** el asesor dijo que "bajaron un poquito". ¿Cuál es la lista vigente?
- **Nombre de la unidad:** en las transcripciones aparece con varios nombres (créditos, monedas, coins). La marca dice "créditos".
- **Planes empresariales:** se mencionó que empresas grandes pagarían del orden de 1,5 a 2 millones mensuales. No hay plan documentado.

## Métodos de pago
- Una sesión dijo que las transferencias aún no estaban habilitadas; otra pagó por transferencia y otra por tarjeta con problemas. Otra anunció PSE "la próxima semana". Confirmar canales vigentes.

## Producto: comportamientos dudosos
- **Sincronización de catálogo de Siigo:** el IVA llegó como "mayor valor" en vez de "descontable" (2408). El asesor quedó investigando.
- **API de Siigo:** falló el envío masivo con error "el comprobante ya existe" y falla de respuesta; en otra sesión no se pudieron guardar credenciales de la API de otro software contable.
- **Importación de comprobantes a Siigo desde archivo plano:** fallaron por cuentas inexistentes y terceros no reconocidos; pendiente la causa.
- **Siigo desglosa ítems:** no hay opción desde núvara; depende de la configuración en Siigo.
- **Configuración de ReteICA:** el campo de porcentaje con muchos decimales fue difícil de usar; el asesor dijo que lo simplificaría.
- **Filtros de la lista de pendientes:** una usuaria dijo que no filtraban todo lo esperado.
- **Mantenimiento nocturno:** se dijo que restringe el cambio global de cuentas. ¿Horario?
- **Documentos soporte:** una sesión dijo que el proceso completo estaba en desarrollo; otra descargó y cargó documentos soporte. Confirmar el alcance actual.
- **Outlook:** una sesión dijo que la vinculación estaba en desarrollo; otra la usó para el token. Confirmar disponibilidad.
- **Notas crédito:** las notas crédito siguen la lógica del valor bruto de la DIAN; el descuento se aplica al comprobante de pago. Confirmar si se agregará descuento automático.
- **Calidad de las notas fuente:** las notas automáticas confunden los nombres de la marca y del software contable (varias grafías erróneas) y tienen datos mal transcritos; no tomar nombres de menús textualmente sin validar con la plataforma.

## Cifras de negocio (no usar sin validar)
- Número de usuarios y empresas gestionadas (se dijo 20 usuarios y 100 empresas en una fecha).
- Capacidad de causación en una sesión (140 facturas en hora y media).
- Cambio de reglas de retención en la fuente con vigencia desde mayo: valores (umbral) que el asesor citó deben confirmarse con fuente oficial.

## Contradicciones entre sesiones
- Una sesión dice que la extensión solo es compatible con Chrome; otra la describe como extensión de Chromium.
- El manejo de documentos soporte y de eventos RADIAN difiere entre sesiones.
- Sobre el correo, se dijo que "la herramienta opera con Gmail" en una y que se conectan "múltiples correos" en otras.
- Capacidad de aprobación por lote: se dijeron 30 y 50 según el contexto.

## Segunda tanda de fuentes (soporte, demostraciones y reuniones internas)

### Precios y créditos: contradicciones y datos nuevos
- **Tarifa por documento:** compra unos 510 COP (5,1 créditos); venta 200 COP (confirmado); en la misma conversación otro número fue "500 por factura adicional". Equivalencia dicha: 1 crédito ≈ 100 COP.
- **Recarga inicial:** 271.000 COP por 250 documentos con capacitación (2 h + 1 h de acompañamiento); otra sesión habló de 300.000 COP por 300 facturas con capacitación (150.000 de capacitación + 150.000 de recarga) y de recargas siguientes de 150.000 COP; una usuaria negoció 250 → 300 documentos. Una venta de 6.000 créditos por 600.000 COP "con descuento". ¿Cuál es la lista vigente?
- **Consumo mínimo mensual:** 80.000 COP (confirmado; ≈156 documentos), solo desde el segundo mes, para cubrir soporte y almacenamiento. En sesiones previas no se mencionaba y los créditos "no vencían". Confirmar si aplica a usuarios antiguos (se habló de migrarlos a un nuevo esquema a inicios del año siguiente).
- **Vigencia de los créditos:** "se acumulan" (una sesión), "vigencia acumulativa de dos meses" (otra), "no se vencen" (internas). Contradicción.
- **Nuevo modelo comercial (reunión interna):** se acordó eliminar el modelo de recargas para ventas nuevas y pasar a suscripción con consumo mínimo; saldo y consumo en pesos; bloqueo de cuenta tras unos meses sin pago (3 a 5 mencionados) y posible eliminación o cobro de descarga de la información; planes por tramos de causaciones (un plan básico de hasta 1.000 al mes); pago inicial de habilitación de 150.000 COP con certificado digital para facturación electrónica; planes de nómina por rangos de empleados con cobro anual; nómina obligatoriamente vinculada a facturación electrónica. **Todo en discusión; pendiente asesoría legal para débitos automáticos.** No usar en materiales.
- **Compensación única** de 100 facturas adicionales a un usuario que perdió créditos por ventas no deseadas, "sin más compensaciones". Confirmar política.
- **Nombre de la unidad:** en las notas aparece como "Nubic Coins", "No Coins" y "Nubi Coins"; se acordó internamente llamarlos **créditos** y mostrar el saldo en pesos.
- **Métodos de pago:** ahora se mencionan enlace de pago con tarjeta y PSE (pasarela de un banco); antes PSE era futuro. Confirmar.
- **Cifras comerciales dichas por el asesor:** "85 % de causaciones correctas desde el inicio", "respuesta de soporte menor a 10 minutos", "hasta 6.000 facturas atrasadas procesadas". No usar sin validar.

### Producto
- **Descarga previa de la DIAN:** una sesión dijo que ya no hacía falta descargar antes (la DIAN redujo medidas de seguridad); el flujo sigue pidiendo extensión y token. Contradicción.
- **Sincronización del correo:** cada 15 minutos (una sesión) y cada 24 horas por configuración (otra). Confirmar el valor por defecto.
- **Ventas:** se dijo que núvara "prioriza compras"; otras sesiones configuran ventas con retenciones particulares y autorretención. Una comparación de ventas con la DIAN mostró menos documentos en núvara. Pendiente.
- **Documentos soporte:** una sesión dijo que la plataforma ya los emite; otra que debían seguir su proceso en el software contable; otra que la facturación electrónica estaba en pruebas.
- **Eventos RADIAN:** una sesión acordó filtrarlos de la importación; una reunión interna los incluye como parte de la facturación electrónica; antes se dijo que se habilitarían "la próxima semana".
- **Retención por servicios de restaurante (3,5 %) e impoconsumo:** el asesor se comprometió a crear una regla; también la retención de arrendamiento se aplicaba a la inmobiliaria en vez del propietario. Confirmar fecha de disponibilidad.
- **Autorretención:** se citó una tarifa del 3,5 % vigente hasta una fecha y tarifas de ReteICA para dos ciudades; son datos tributarios del usuario, **no** de la plataforma; validar con fuente oficial.
- **Error de "descuadre" de centavos** al guardar una causación, y fallo con un proveedor cuyo documento trae descuentos; investigados por el equipo.
- **Fallos mencionados:** pantalla en blanco al cambiar de pestaña; lentitud con importaciones grandes; regresión en el registro de nuevas firmas (volver a elegir tipo de organización). Estados actuales desconocidos.
- **Etiqueta "gasto" en cuentas de IVA:** se acordó eliminarla; confirmar si ya se hizo.
- **Perfil de usuario no administrador:** puede mostrar otra empresa o impedir el acceso; se resolvió cambiando credenciales. Confirmar causa.
- **Módulos en desarrollo:** egresos, conciliación bancaria, cajas menores, aplicación móvil, tesorería, legalización masiva, traducción de idiomas asiáticos, lectura óptica (OCR) para escaneos. Sin fechas.
- **Cifras de capacidad dichas en demostraciones:** hasta 50 facturas por página en envío masivo; lotes de más de 200 se dividen por semanas.
- **Nómina:** emisión electrónica directa a la DIAN desde núvara; algunos usuarios migraron de otro software. Confirmar madurez antes de grabar videos.

### Notas de calidad de las fuentes
- Los nombres de la marca y de otros productos aparecen con grafías erróneas en las notas automáticas.
- Varias sesiones mezclan temas ajenos (personales, societarios, otro producto); se excluyeron.
- Hay carpetas con grabación y atajo a notas que no se pudo abrir sin iniciar sesión: pendiente de procesar (ver `fuentes-procesadas.md`).

## Contenidos de apoyo
- Una sesión grabada no tiene transcripción útil (no hubo conversación en un idioma admitido).
- Una sesión sobre un producto distinto (gestión documental) se excluyó.
