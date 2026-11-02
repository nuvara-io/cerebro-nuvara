# Facturación electrónica, documento soporte y eventos RADIAN

## Estado: disponible
Confirmado por el equipo y verificado en el código de la plataforma (repo `platform`, commit `6fdbceaba`, 02/11/2026). Reemplaza la descripción de abril de 2026, que contaba cómo se planteaba el módulo.

- Se emiten desde núvara: **factura de venta** con sus **notas crédito y débito**, **documento soporte** (para compras a no obligados a facturar) con su **nota crédito**, **eventos RADIAN** y **nómina electrónica** con sus notas de ajuste (flujo 18).
- **No se emite POS** (documento equivalente): la plataforma lo muestra como "No disponible: Núvara no emite documentos POS".
- El proveedor tecnológico es APIDIAN (Factura LATAM). El certificado de firma digital lo gestiona el equipo.

## Cuánto cuesta
- **Habilitación: $150.000, pago único** (confirmado por el equipo). Incluye la configuración inicial y la firma digital por un año. El precio es el mismo sin importar cuántos tipos de documento se habiliten.
- **Renovación anual del certificado:** al año vence. La plataforma avisa por correo a los 30, 7 y 1 día, y se renueva desde Ajustes › Estado › "Renovar certificado", al precio vigente.
- **Cada documento emitido se cobra en créditos.** El precio varía según el flujo de facturación de cada empresa: se pacta un acuerdo de facturas o se descuenta del saldo de la billetera (confirmado por el equipo). Si el saldo no alcanza, la plataforma no deja emitir y ofrece recargar.
- Las pruebas ante la DIAN no se cobran.

## Requisitos
- Facturación electrónica activa para la empresa (habilitación pagada y aprobada).
- La empresa habilitada ante la DIAN en modo "Software propio" y con su resolución de numeración asociada.
- Para emitir: rol con permiso de crear facturas (administrador, operador o contador; el rol cliente no puede).
- Para la habilitación ante la DIAN: rol administrador. Para solicitar el módulo: administrador de la organización.
- Créditos en la billetera, o un acuerdo de facturas vigente.

## Pasos: solicitar la facturación electrónica
1. Entra a **Cuenta › Módulos** y busca la tarjeta **Facturación electrónica**. Pulsa **Activar** (o **Solicitar habilitación**, que abre el chat con el equipo). También se puede pedir directamente al equipo.
2. Completa la **Solicitud de habilitación DIAN** en cuatro pasos: **Tipos de documento** (factura electrónica, nómina electrónica, documento para no obligados a facturar, eventos RADIAN), **Datos fiscales**, **Documentos** (RUT actualizado, cédula del representante legal y certificado de existencia y representación de máximo 28 días) y **Confirmar**.
3. Paga la habilitación (pago único). El equipo revisa la solicitud, gestiona el certificado digital y configura la empresa. El estado avanza por: Solicitud recibida, En revisión, Cert. en gestión, Cert. cargado, En pruebas, Activa.

## Pasos: habilitar la empresa ante la DIAN
En **Facturación Electrónica › Ajustes › Configuración**, pestaña **Habilitación DIAN** (solo administrador):
1. En el portal de la DIAN, con el usuario del representante legal, entra a "Facturando electrónicamente" › "Habilitación" y regístrate como facturador si aún no lo estás.
2. Registra el software en modo **"Software propio"** (por ejemplo, "núvara") y define un PIN. Guarda el **Software ID** que te asigna la DIAN.
3. Copia el **TestSetID** del set de pruebas.
4. En núvara escribe el Software ID, el PIN y el TestSetID y pulsa **Iniciar pruebas**. La plataforma envía sola los documentos de prueba; no se cobran.
5. Cuando la DIAN apruebe, asocia en el portal el rango de numeración de tu resolución, vuelve a núvara y pulsa **Pasar a producción**.
- La pestaña **Resoluciones DIAN** permite **Sincronizar desde MUISCA (DIAN)** o editar a mano prefijo, número de resolución, rango y vigencia.
- Estados por grupo: Sin iniciar, Enviando pruebas, Esperando a la DIAN, Listo para producción, En producción, Requiere revisión.

## Pasos: emitir una factura de venta
1. Entra a **Facturación Electrónica › Emitir** y elige **Factura de venta**. Puedes llenarla de corrido (modo **Factura**) o por pasos (**Paso a paso**).
2. **Datos del comprador** (paso «Cliente» en la plataforma): identificación, nombre o razón social, correo, teléfono, dirección, tipo de documento, tipo de organización, régimen y responsabilidad tributaria.
3. **Líneas:** producto o servicio, descripción, cantidad, precio unitario e IVA. ReteIVA: sin ReteIVA, 15 % o 100 %.
4. **Pago:** forma de pago **Contado** o **Crédito** (con fecha de vencimiento) y medio de pago (efectivo, consignación, transferencia, tarjeta de crédito o débito). Marca **Enviar copia al cliente por email** si quieres que le llegue.
5. Agrega comentarios al pie si hace falta, revisa con **Vista previa** y pulsa **Emitir factura**.
- La factura viaja a la DIAN y pasa por En cola, Enviado a DIAN y **Aceptado** (o Rechazado / Falló envío). Desde el resultado descargas el PDF y el XML; desde **Documentos** puedes reenviarla por email.
- Si la empresa usa Tesorería, la factura aceptada queda registrada como venta y se causa; de contado pide la caja o cuenta bancaria, a crédito queda en cuentas por cobrar.

## Pasos: notas crédito y débito, documento soporte
- **Nota crédito o débito de venta:** Emitir › Nota crédito (o Nota débito). Pasos: **Factura origen**, **Ajuste** (motivo según el catálogo DIAN) y **Numeración**.
- **Documento soporte:** Emitir › Documento soporte. Pasos: **Proveedor**, **Líneas** y **Pago y numeración**. Su nota crédito sale de **NC documento soporte**, partiendo del documento soporte de origen. También se emite desde **Legalización de gastos** (flujo 15).

## Eventos RADIAN
Los eventos le dicen a la DIAN qué pasó con una factura que recibiste. Hacerlos permite que el costo sea **deducible** en compras a crédito; si no se hacen, en una fiscalización pueden desconocerlo. En la DIAN aparecen como documentos en cero de tipo "aplicación de respuesta".
1. Primero, la factura electrónica de la empresa debe estar en producción. En el portal de la DIAN, regístrate en RADIAN con el mismo software; luego, en Habilitación DIAN, pulsa **Activar RADIAN**.
2. Para registrar un evento: **Facturación Electrónica › Documentos**, pestaña **Eventos RADIAN** › **Nuevo evento**, buscando la factura por CUFE.
3. Eventos disponibles: **Acuse de recibo**, **Recibo del bien y/o prestación del servicio**, **Aceptación expresa** y **Reclamo / Rechazo** (con motivo del catálogo DIAN). La aceptación tácita la registra la DIAN y la plataforma la trae.
4. Solo aplican a compras **a crédito**: las de contado no llevan eventos.
5. **Reglas RADIAN** (Ajustes › Configuración): envían eventos solos por proveedor, desde que llega la compra, desde el evento anterior o desde que se aprueba la causación. El reclamo nunca es automático.

## Errores comunes
- Facturar a crédito cuando fue de contado, o al revés: afecta el acuse y el costo deducible.
- Crear productos sin IVA porque la empresa hoy no es responsable; cuando pase a serlo hay que recrear la base.
- Intentar emitir sin saldo ni acuerdo: la plataforma bloquea la emisión hasta recargar.
- Dejar vencer el certificado: hay que renovarlo cada año.

## Por confirmar con el equipo
- Retefuente y ReteICA en la factura de venta todavía no tienen pantalla.
- Las reglas RADIAN automáticas dependen de una activación del lado de la plataforma.
- El mensaje de saldo insuficiente dice "Nuvicoins"; por marca se dice **créditos**.
- No se encontró que la emisión descuente inventario.
