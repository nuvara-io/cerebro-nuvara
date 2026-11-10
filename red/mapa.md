# Mapa del cerebro de núvara

Así se organiza el conocimiento de núvara para consultarlo:

| Término | Qué es | En este mapa |
|---|---|---|
| **Cerebro** | núvara completo | Todo este mapa y los nodos de `red/` |
| **Red neuronal** | Un módulo de la plataforma: causación, facturación electrónica, nómina, tesorería… | Cada sección "Red neuronal" |
| **Núcleo** | La entrada de una red: qué es el módulo, para quién y cómo se activa | Las filas de tipo `núcleo` |
| **Neurona** | Un apartado puntual o una acción específica, con su ruta en la plataforma y sus pasos | Las filas de tipo `neurona`, que cuelgan de un núcleo |
| **Conexión neuronal** | Lo que une dos núcleos o neuronas: dentro de la misma red (interna) o entre redes | La tabla de conexiones; el núcleo y sus neuronas quedan conectados sin escribirlo |

## Cómo funciona

```
pregunta ─▶ red neuronal ─▶ núcleo o neurona (+ máximo 1 conexión) ─▶ solo los fragmentos que aplican
```

1. El **enrutador** compara la pregunta con las palabras clave de `claves.json` y elige el núcleo o la neurona que más coincide. Si la pregunta pide **hacer** algo ("¿cómo…?", "¿dónde…?", "pasos para…"), prefiere la neurona; si pide **entender** ("¿qué es…?", "¿cuánto…?"), el núcleo.
2. Sigue como máximo **una** conexión neuronal, y solo si la pregunta toca los dos temas.
3. De cada nodo elegido trae **solo los fragmentos que aplican** a la pregunta. Una neurona se entrega completa, porque es una sola acción con sus pasos.
4. Las neuronas **siempre activas** (voz de marca y límites) acompañan cada respuesta.
5. Si el dato no está, o está "por confirmar", se escala a un asesor.

## Público y estado

Cada nodo tiene un público máximo y cada dato dentro del nodo tiene su propio público y estado.

| Público | Quién lo ve |
|---|---|
| **P**: público | Usuarios y prospectos (chat abierto), comerciales y agentes |
| **C**: comercial | Equipo comercial y agentes internos |
| **I**: interno | Solo el equipo de núvara y sus agentes |

| Estado | Qué hace el chat |
|---|---|
| **oficial** | Lo dice. Viene del sitio, de lo confirmado por el equipo o de la app. |
| **por confirmar** | No lo dice a P. A C e I se lo muestra marcado como "sin confirmar". |
| **descartado** | Nunca lo dice. Se guarda para reconocerlo si alguien lo repite (por ejemplo, "una venta cuesta $100"). |

## Siempre activas

| Nodo | Público | Contenido | Fuentes |
|---|---|---|---|
| `voz-de-marca` | P | núvara en minúscula con tilde, tú, créditos, usuario y no cliente, palabras prohibidas, "núvara prepara, tú apruebas" | `CLAUDE.md` (reglas de marca), `README.md` (reglas para escribir), `sitio-web.md` §Desvíos |
| `limites` | P | Qué no se afirma: cifras de marketing sin validar, módulos en desarrollo ofrecidos como disponibles, datos de otros usuarios. Cuándo escalar a un asesor | `por-confirmar.md` §4, `sitio-web.md` §Cifras de marketing, `producto.md` §En desarrollo, `README.md` §Privacidad |

## Red neuronal: Comercial

Qué es núvara, para quién, precios, créditos y cómo se vende.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `que-es-nuvara` | núcleo | P | "¿Qué hace núvara?", "¿qué es la causación?", "¿en qué me ayuda?" |  | `producto.md` §Qué hace, `sitio-web.md` §Posicionamiento y §Qué hace la causación |
| `para-quien` | núcleo | P (dolores: C) | "¿Sirve para un contador independiente?", "¿para una firma?", "¿para mi empresa?" |  | `producto.md` §A quién va dirigido, `demostraciones-y-ventas.md` §Perfiles y §Posicionamiento, `objeciones-y-dolores.md` §Dolores y §Lo que mueve a cada perfil |
| `modulos-disponibles` | núcleo | P (en desarrollo: I) | "¿Tienen nómina?", "¿qué más hace núvara?", "¿qué módulos hay?" |  | `producto.md` §Módulos y capacidades y §Mapa de menús, `sitio-web.md` §Otros módulos |
| `integraciones` | núcleo | P | "¿Se conecta con Siigo?", "¿con Alegra?", "¿y si uso otro software?" |  | `sitio-web.md` §Integraciones, `preguntas-frecuentes.md` §Exportación y software contable |
| `seguridad-y-soporte` | núcleo | P | "¿Mis datos están seguros?", "¿cómo los contacto?", "¿hay capacitación?" |  | `sitio-web.md` §Seguridad y soporte, `por-confirmar.md` §2 (capacitación incluida) |
| `precios` | núcleo | P (pendientes: C, discusiones de modelo: I) | "¿Cuánto cuesta?", "¿cuánto vale causar una compra?", "¿hay mínimo?", "¿hay descuentos?" |  | `sitio-web.md` §Precios, `CLAUDE.md` §Datos confirmados, `por-confirmar.md` §1 y §2, `producto.md` §Planes y créditos, `preguntas-frecuentes.md` §Precios y comercial |
| `creditos-y-recargas` | núcleo | P | "¿Cómo recargo?", "¿cuántas facturas me alcanzan?", "¿el saldo es por empresa?" |  | `flujos/12`, `preguntas-frecuentes.md` §Créditos y soporte |
| `competencia` | núcleo | C | "¿En qué se diferencia de X?", "¿por qué no uso solo Siigo?" |  | `sitio-web.md` §Comparativa con competidores |
| `argumentos-de-venta` | núcleo | C | "¿Qué le digo a un contador con mucho volumen?", "¿qué argumentos funcionan?" |  | `demostraciones-y-ventas.md` §Argumentos y §Qué decir y qué evitar |
| `objeciones` | núcleo | C | "Me dicen que es caro", "no confían en la automatización", "ya tienen otro software" |  | `objeciones-y-dolores.md` §Objeciones y dudas, `demostraciones-y-ventas.md` §Objeciones y §Preguntas de prospectos |
| `demostracion-en-vivo` | núcleo | C | "¿Cómo armo una demostración?", "¿cómo cierro?" |  | `demostraciones-y-ventas.md` §Cómo se estructura y §Cierre típico, `capacitacion.md` §Cómo adaptar según el perfil |
| `pagar-corte-mensual` | neurona | P | "¿Cómo pago el corte mensual?", "¿Cómo pago el consumo mínimo que tengo pendiente?" | `creditos-y-recargas` | `flujos/12`, código de `platform` |

## Red neuronal: Configuración e inicio

Crear la empresa y dejarla lista: usuarios, DIAN y correo.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `onboarding` | núcleo | P | "¿Cómo empiezo?", "¿qué configuro primero?" |  | `flujos/01`, `preguntas-frecuentes.md` §Configuración inicial, `capacitacion.md` §Los cuatro pasos iniciales |
| `usuarios-roles-y-empresas` | núcleo | P | "¿Puedo tener varias empresas?", "¿qué puede hacer un operador?" |  | `producto.md` §Tipos de cuenta y roles |
| `conectar-dian` | núcleo | P | "el token no funciona", "¿qué es la extensión?" |  | `flujos/02`, `preguntas-frecuentes.md` §DIAN y correo, `objeciones-y-dolores.md` §Descarga y DIAN, `por-confirmar.md` §DIAN y extensión |
| `conectar-correo` | núcleo | P | "¿Cómo conecto el correo?", "no llegan las facturas del correo" |  | `flujos/03`, `por-confirmar.md` §Correo |
| `invitar-miembro` | neurona | P | "¿Cómo agrego a mi auxiliar a núvara?", "¿Cómo le doy acceso a otra persona solo a algunas empresas?" | `usuarios-roles-y-empresas` | `flujos/01`, código de `platform` |
| `conectar-extension-dian` | neurona | P | "¿Cómo instalo la extensión de la DIAN?", "¿Cómo obtengo el token de la DIAN desde mi correo?" | `conectar-dian` | `flujos/02`, código de `platform` |

## Red neuronal: Causación

Traer las facturas, causarlas, revisarlas, aprobarlas y archivarlas.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `causar-y-revisar` | núcleo | P | "¿Qué pasa cuando causo una factura?", "¿qué significa cada estado?", "¿cómo decide la cuenta?" |  | `flujos/05`, `producto.md` §Estados y §Cómo decide la causación, `preguntas-frecuentes.md` §Causación y revisión, `por-confirmar.md` §Causación |
| `importar-facturas` | núcleo | P | "¿Cómo traigo las facturas?", "¿cómo filtro por fecha?" |  | `flujos/04`, `producto.md` §Cómo entran las facturas |
| `correcciones-y-aprendizaje` | núcleo | P | "Puso mal la cuenta", "¿aprende de mis cambios?" |  | `flujos/06` |
| `reglas-y-centros-de-costo` | núcleo | P | "¿qué regla gana si hay varias?", "¿para qué sirven los centros de costo?" |  | `flujos/07`, `preguntas-frecuentes.md` §Centros de costo y reglas, `objeciones-y-dolores.md` §Centros de costo, `por-confirmar.md` §Centros de costo |
| `aprobacion-en-bloque` | núcleo | P | "¿Puedo aprobar varias a la vez?" |  | `flujos/08` |
| `proveedores-y-retenciones` | núcleo | P | "¿qué retenciones calcula núvara?", "¿y si es autorretenedor?" |  | `flujos/09`, `preguntas-frecuentes.md` §Retenciones, `objeciones-y-dolores.md` §Cuentas, IVA y retenciones, `por-confirmar.md` §Retenciones e IVA y §5 |
| `ventas-y-autorretencion` | núcleo | P | "¿también causa mis ventas?", "¿cómo manejo la autorretención?" |  | `flujos/14` |
| `notas-credito-y-documento-soporte` | núcleo | P | "¿Cómo causo una nota crédito?", "¿qué hago con un documento soporte?" |  | `flujos/13` |
| `facturas-del-exterior` | núcleo | P | "Tengo facturas de otro país", "¿qué TRM usa una factura del exterior?" |  | `flujos/15` |
| `archivo-y-comparacion-dian` | núcleo | P | "¿Me falta alguna factura frente a la DIAN?", "¿dónde quedan las facturas?" |  | `flujos/11` |
| `papelera-y-limpieza` | núcleo | P | "Borré una factura", "¿qué pasa con lo que elimino?" |  | `flujos/17` |
| `inventario-y-productos` | núcleo | P | "¿maneja inventario?", "¿cómo se mueve el stock?" |  | `flujos/19`, `preguntas-frecuentes.md` §Productos e inventario, `objeciones-y-dolores.md` §Inventario, `por-confirmar.md` §Inventario |
| `glosario` | núcleo | P | "¿Qué es un asiento?", "¿qué significa precausar?" |  | `glosario.md` |
| `causar-facturas` | neurona | P | "¿Cómo causo una factura?", "¿cómo causo varias facturas?" | `causar-y-revisar` | `flujos/04`, `flujos/05` |
| `causar-por-lote` | neurona | P | "¿Cómo causo por lote?", "¿cómo causo todo el mes de una vez?" | `causar-y-revisar` | `flujos/05` |
| `revisar-causacion` | neurona | P | "¿Cómo reviso una causación?", "¿qué hago si no cuadra?" | `causar-y-revisar` | `flujos/05`, `flujos/06` |
| `aprobar-en-bloque` | neurona | P | "¿Cómo apruebo un grupo de facturas?", "¿cómo apruebo muchas a la vez?" | `aprobacion-en-bloque` | `flujos/08` |
| `archivar-aprobadas` | neurona | P | "¿Cómo archivo las facturas aprobadas?", "¿cómo dejo listo el mes para exportar?" | `archivo-y-comparacion-dian` | `flujos/05`, `flujos/08` |
| `comparar-con-la-dian` | neurona | P | "¿Cómo comparo mis facturas con el listado de la DIAN?", "¿Cómo sé qué facturas me faltan frente a la DIAN?" | `archivo-y-comparacion-dian` | `flujos/11`, código de `platform` |
| `restaurar-factura-eliminada` | neurona | P | "¿Cómo recupero una factura que eliminé?", "¿Cómo restauro varias facturas de la papelera a la vez?" | `papelera-y-limpieza` | `flujos/17`, código de `platform` |
| `excluir-proveedor` | neurona | P | "¿Cómo excluyo un proveedor para que no entren sus facturas?", "¿Cómo vuelvo a dejar entrar las facturas de un proveedor excluido?" | `papelera-y-limpieza` | `flujos/17`, código de `platform` |
| `asociar-productos` | neurona | P | "¿Cómo asocio varios productos del proveedor a uno de mi catálogo?", "¿Cómo uso la mesa de asociación?" | `inventario-y-productos` | `flujos/19`, código de `platform` |
| `configurar-proveedor` | neurona | P | "¿Cómo marco a un proveedor como autorretenedor?", "¿Cómo hago para retenerle solo la mitad a un proveedor?" | `proveedores-y-retenciones` | `flujos/09`, código de `platform` |
| `configurar-reteica` | neurona | P | "¿Cómo configuro la ReteICA por municipio?", "¿Cómo pongo la tarifa de ReteICA por actividad?" | `proveedores-y-retenciones` | `flujos/09`, código de `platform` |
| `crear-regla-fija` | neurona | P | "¿Cómo creo una regla fija desde una factura?", "¿Cómo hago para que un ítem vaya siempre a la misma cuenta?" | `reglas-y-centros-de-costo` | `flujos/07`, código de `platform` |
| `asignar-centro-de-costo` | neurona | P | "¿Cómo le asigno un centro de costo a una factura?", "¿Cómo divido una factura entre varios centros de costo?" | `reglas-y-centros-de-costo` | `flujos/07`, código de `platform` |
| `configurar-cuentas-de-ventas` | neurona | P | "¿Cómo configuro las cuentas de ingreso de mis ventas?", "¿Cómo configuro la autorrenta de la empresa?" | `ventas-y-autorretencion` | `flujos/14`, código de `platform` |

## Red neuronal: Exportación

Llevar las causaciones y los comprobantes al software contable: por archivo o, con Siigo Nube, por envío directo.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `exportacion` | núcleo | P | "¿A qué programas exportan?", "¿qué se puede exportar?", "¿se puede exportar la nómina?" |  | `flujos/10`, `flujos/16`, código de `platform`, `por-confirmar.md` §Exportación a Siigo y §World Office |
| `exportar-archivo` | neurona | P | "¿Cómo exporto a Alegra?", "¿cómo descargo el archivo para mi programa contable?" | `exportacion` | `flujos/10`, código de `platform` |
| `conectar-siigo` | neurona | P | "¿Cómo conecto Siigo?", "¿dónde pongo el access key de Siigo?" | `exportacion` | `flujos/10`, código de `platform` |
| `enviar-a-siigo` | neurona | P | "¿Cómo paso los asientos a Siigo?", "¿cómo envío las facturas a Siigo?" | `exportacion` | `flujos/10`, código de `platform` |
| `exportar-world-office` | neurona | P | "¿Cómo exporto a World Office?", "¿cómo subo los ítems de inventario a World Office?" | `exportacion` | `flujos/16`, código de `platform` |
| `exportar-comprobantes-tesoreria` | neurona | P | "¿Cómo exporto los comprobantes de egreso?", "¿cómo saco los recibos de caja para Siigo?" | `exportacion` | `flujos/21`, código de `platform` |
| `historial-de-exportaciones` | neurona | P | "¿Cómo vuelvo a exportar un mes?", "¿dónde veo lo que ya exporté?" | `exportacion` | código de `platform` |

## Red neuronal: Facturación electrónica

Emitir documentos electrónicos ante la DIAN (factura de venta y notas, documento soporte y su nota de ajuste) y registrar los eventos RADIAN de las facturas que recibes. La nómina electrónica usa el mismo certificado, pero vive en la red de Nómina.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `facturacion-electronica-y-radian` | núcleo | P | "¿Puedo facturar desde núvara?", "¿qué documentos electrónicos emiten?", "¿emiten documentos POS?" |  | `flujos/20`, código de `platform` |
| `configuracion-facturacion-electronica` | núcleo | P | "¿Qué tengo que configurar antes de facturar?", "¿cuáles son los estados de la habilitación DIAN?" |  | `flujos/20`, código de `platform` |
| `solicitar-facturacion-electronica` | neurona | P | "¿Cómo activo la facturación electrónica?", "¿dónde solicito la habilitación?" | `configuracion-facturacion-electronica` | `flujos/20`, código de `platform` |
| `habilitar-ante-la-dian` | neurona | P | "¿Cómo me habilito ante la DIAN?", "¿dónde pongo el TestSetID?" | `configuracion-facturacion-electronica` | `flujos/20`, código de `platform` |
| `configurar-resoluciones` | neurona | P | "¿Cómo cargo la resolución de facturación?", "¿cómo cambio el consecutivo inicial?" | `configuracion-facturacion-electronica` | código de `platform` |
| `personalizar-pdf-y-notas` | neurona | P | "¿Cómo pongo mi logo en la factura?", "¿cómo cambio la plantilla del PDF?" | `configuracion-facturacion-electronica` | código de `platform` |
| `renovar-certificado` | neurona | P | "¿Cómo renuevo el certificado de firma digital?", "¿qué hago si se vence la firma?" | `configuracion-facturacion-electronica` | `flujos/20`, código de `platform` |
| `factura-de-venta-y-notas` | núcleo | P | "¿Qué datos lleva una factura de venta?", "¿qué estados tiene una factura emitida?", "¿qué motivos tiene una nota crédito?" |  | `flujos/20`, código de `platform` |
| `emitir-factura-de-venta` | neurona | P | "¿Cómo emito una factura de venta?", "¿cómo hago una factura electrónica?" | `factura-de-venta-y-notas` | `flujos/20`, código de `platform` |
| `emitir-nota-credito-o-debito` | neurona | P | "¿Cómo anulo una factura de venta?", "¿cómo emito una nota débito?", "me equivoqué en una factura ya emitida", "¿cómo anulo una factura?" | `factura-de-venta-y-notas` | `flujos/20`, código de `platform` |
| `crear-comprador` | neurona | P | "¿Cómo creo un comprador nuevo?", "¿cómo agrego a quien le voy a facturar?" | `factura-de-venta-y-notas` | código de `platform` |
| `crear-producto-para-facturar` | neurona | P | "¿Cómo creo un producto para facturar?", "¿dónde agrego un servicio al catálogo?" | `factura-de-venta-y-notas` | código de `platform` |
| `consultar-y-reintentar-documentos` | neurona | P | "¿Cómo reenvío una factura al comprador?", "¿cómo reintento una factura rechazada?" | `factura-de-venta-y-notas` | código de `platform` |
| `documento-soporte-electronico` | núcleo | P | "¿Qué es el documento soporte?", "¿cuándo debo emitir un documento soporte?" |  | `flujos/20`, código de `platform` |
| `emitir-documento-soporte` | neurona | P | "¿Cómo emito un documento soporte?", "¿cómo soporto una compra a un no obligado a facturar?", "le compro a alguien que no factura", "proveedor no obligado a facturar" | `documento-soporte-electronico` | `flujos/20`, código de `platform` |
| `emitir-nota-de-ajuste-ds` | neurona | P | "¿Cómo corrijo un documento soporte?", "¿cómo emito la nota de ajuste del documento soporte?" | `documento-soporte-electronico` | código de `platform` |
| `legalizar-gastos` | neurona | P | "¿Cómo legalizo los gastos de un viaje?", "¿Cómo paso los recibos de la tarjeta a un comprobante para Siigo?" | `documento-soporte-electronico` | `flujos/15`, código de `platform` |
| `facturacion-electronica-pendientes` | núcleo | I | "¿Cómo implementamos la ReteICA en la factura?", "¿qué falta para emitir con impuesto al consumo?", "¿qué hay que tocar para los eventos de título valor?" |  | código de `platform` |
| `eventos-radian` | núcleo | P | "¿Qué es RADIAN?", "¿para qué sirve el acuse de recibo?", "¿qué es la aceptación tácita?" |  | `flujos/20`, código de `platform` |
| `activar-radian` | neurona | P | "¿Cómo activo RADIAN?", "¿cómo habilito los eventos RADIAN?" | `eventos-radian` | código de `platform` |
| `registrar-eventos-radian` | neurona | P | "¿Cómo hago el acuse de recibo?", "¿cómo registro un evento RADIAN?" | `eventos-radian` | `flujos/20`, código de `platform` |
| `configurar-reglas-radian` | neurona | P | "¿Cómo configuro las reglas RADIAN?", "¿cómo hago que el acuse se envíe solo?" | `eventos-radian` | código de `platform` |
| `revisar-cumplimiento-radian` | neurona | P | "¿Dónde veo las facturas sin acuse?", "¿dónde veo las compras por vencer en RADIAN?" | `eventos-radian` | código de `platform` |

## Red neuronal: Nómina

Empleados, novedades, liquidación, nómina electrónica, PILA y causación de la nómina.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `nomina` | núcleo | P | "¿Cómo funciona la nómina?", "¿qué incluye el módulo de nómina?" |  | `flujos/18`, código de `platform` |
| `activar-nomina` | neurona | P | "¿Cómo activo la nómina?", "¿dónde compro el tramo de empleados?" | `nomina` | `flujos/18`, código de `platform` |
| `configurar-nomina` | neurona | P | "¿Cómo configuro la nómina?", "¿dónde cambio la frecuencia de pago?" | `nomina` | `flujos/18`, código de `platform` |
| `crear-empleado` | neurona | P | "¿Cómo creo un empleado?", "¿cómo importo los empleados?" | `nomina` | `flujos/18`, código de `platform` |
| `importar-historico-nomina` | neurona | P | "¿Cómo traigo el histórico de nómina de Siigo?", "¿cómo migro la nómina de otro programa?" | `nomina` | `flujos/18`, código de `platform` |
| `registrar-novedades` | neurona | P | "¿Cómo registro una incapacidad?", "¿dónde pongo las horas extra?" | `nomina` | `flujos/18`, código de `platform` |
| `generar-nomina` | neurona | P | "¿Cómo genero la nómina de la quincena?", "¿cómo liquido la nómina del mes?" | `nomina` | `flujos/18`, código de `platform` |
| `emitir-nomina-electronica` | neurona | P | "¿Cómo emito la nómina electrónica?", "¿cómo envío la nómina a la DIAN?" | `nomina` | `flujos/18`, código de `platform` |
| `generar-planilla-pila` | neurona | P | "¿Cómo genero la planilla PILA?", "¿dónde descargo el archivo de la PILA?" | `nomina` | `flujos/18`, código de `platform` |
| `causar-nomina` | neurona | P | "¿Cómo causo la nómina?", "¿cómo contabilizo la nómina?" | `nomina` | `flujos/18`, código de `platform` |
| `liquidar-prestaciones` | neurona | P | "¿Cómo liquido la prima?", "¿cómo pago las cesantías?" | `nomina` | `flujos/18`, código de `platform` |
| `liquidar-contrato` | neurona | P | "¿Cómo liquido a un empleado que se retira?", "¿cómo hago la liquidación de un contrato?" | `nomina` | `flujos/18`, código de `platform` |

## Red neuronal: App móvil

Acceso desde el celular para clientes del contador y para el equipo.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `app-movil` | núcleo | P (sin confirmar: C) | "¿Tienen app?", "¿mi cliente puede ver su empresa en el celular?", "¿qué hace la app móvil?" |  | código de `platform`, app ejecutada en iOS |
| `dar-acceso-app-clientes` | neurona | P | "¿Cómo le doy acceso a la app a mi cliente?" | `app-movil` | código de `platform` |
| `dar-acceso-app-equipo` | neurona | P | "¿Cómo le doy la app a mi equipo?", "¿cómo creo un operador de caja?" | `app-movil` | código de `platform` |

## Red neuronal: Tesorería

Bancos, cobros, pagos, pago de nómina, conciliación y cajas.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `tesoreria` | núcleo | P | "¿Qué hace la tesorería?", "¿núvara maneja bancos y cartera?" |  | `flujos/21`, código de `platform` |
| `solicitar-tesoreria` | neurona | P | "¿Cómo activo la tesorería?", "¿dónde solicito la tesorería?" | `tesoreria` | `flujos/21`, código de `platform` |
| `crear-cuenta-bancaria` | neurona | P | "¿Cómo creo una cuenta bancaria?", "¿dónde registro el saldo inicial del banco?" | `tesoreria` | `flujos/21`, código de `platform` |
| `registrar-cobro` | neurona | P | "¿Cómo registro un cobro?", "¿cómo hago un recibo de caja?" | `tesoreria` | `flujos/21`, código de `platform` |
| `registrar-pago-proveedor` | neurona | P | "¿Cómo le pago a un proveedor?", "¿cómo hago un comprobante de egreso?" | `tesoreria` | `flujos/21`, código de `platform` |
| `pagar-nomina` | neurona | P | "¿Cómo pago la nómina?", "¿cómo envío los desprendibles?" | `tesoreria` | `flujos/21`, código de `platform` |
| `conciliacion-bancaria` | neurona | P | "¿Cómo concilio el banco?", "¿cómo cargo el extracto?" | `tesoreria` | `flujos/21`, código de `platform` |
| `manejar-caja` | neurona | P | "¿Cómo hago el arqueo de caja?", "¿cómo repongo la caja menor?" | `tesoreria` | `flujos/21`, código de `platform` |

## Red neuronal: Marketing y adquisición

Piezas gráficas, pauta (método de creativos y campañas en Meta), mensajes que se pueden afirmar, campañas con código de activación y el camino de un prospecto hasta su cuenta habilitada.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `marketing-y-adquisicion` | núcleo | C (pauta y atribución: I) | "¿Por qué canales conseguimos usuarios?", "¿hay programa de referidos?", "¿tenemos píxel de Meta?" |  | `diseno/README.md`, `demostraciones-y-ventas.md` §Posicionamiento, `sitio-web.md`, código de `platform` |
| `linea-grafica` | núcleo | C | "¿Qué tipografía usan las piezas?", "¿qué tamaño lleva una historia?", "¿qué fondo uso en un post?" |  | `diseno/README.md`, `diseno/redes.md`, `diseno/reels.md`, `diseno/tutoriales.md`, `docs/banco-fotos.md` |
| `crear-pieza-de-redes` | neurona | C | "¿Cómo hago un post para Instagram?", "¿cómo renderizo una pieza en Remotion?" | `linea-grafica` | `diseno/redes.md`, `CLAUDE.md` §Código, `src/posts/` |
| `elegir-foto-del-banco` | neurona | C | "¿Cómo elijo la foto de una portada?", "¿cómo traigo una foto del banco?" | `linea-grafica` | `docs/banco-fotos.md`, `scripts/foto.py` |
| `revisar-pieza-antes-de-publicar` | neurona | C | "¿Cómo reviso un anuncio antes de publicarlo?", "¿cómo reviso una pieza antes de publicarla?" | `linea-grafica` | `diseno/README.md`, `diseno/redes.md` §Desvíos, `diseno/reels.md` §Lo que no se repite |
| `planeacion-de-marketing` | núcleo | C (pendientes: I) | "¿Qué campañas hacemos este mes?", "¿qué está haciendo la competencia en pauta?", "¿qué fechas del contador aprovechamos?" |  | Calendario DIAN 2026, Actualícese, INCP, Meta Ad Library y sitios de la competencia (03/11/2026), código de `platform` |
| `calendario-de-marketing` | núcleo | C (detalle técnico: I) | "¿Dónde está el calendario de marketing?", "¿qué estados tiene una publicación?", "¿quién aprueba lo que se publica?" |  | `red/calendario.json`, `docs/campana-cierre-iva-2026-11.md` |
| `aprobar-publicacion` | neurona | C | "¿Cómo apruebo una publicación?", "¿cómo dejo una nota en el calendario?" | `calendario-de-marketing` | `red/calendario-de-marketing.md`, `red/revisar-pieza-antes-de-publicar.md` |
| `plan-de-redes` | núcleo | C (pendientes: I) | "¿Cuál es el plan de redes?", "¿qué tema va cada semana en redes?", "¿a qué hora publicamos?" |  | `red/calendario.json`, `diseno/redes.md`, `diseno/reels.md` |
| `plan-seo` | núcleo | C (pendientes: I) | "¿Cuál es el plan SEO?", "¿qué artículos faltan en el blog?", "¿cómo medimos el SEO?" |  | `red/calendario.json`, `conocimiento/sitio-web.md`, código de `platform` |
| `pauta-en-meta` | núcleo | C (techo de CPA y cifras del curso: I) | "¿Cómo armamos las campañas en Meta?", "¿cuándo apago un anuncio?", "¿cómo hago un creativo que funcione?", "¿por qué subió el costo por resultado?" |  | Curso "META ADS con CLAUDE" de Benjamín Cordero (YouTube, procesado el 09/11/2026), `planeacion-de-marketing`, `marketing-y-adquisicion` |
| `operar-pauta-con-claude` | neurona | I | "¿Cómo conecto Meta Ads a Claude Code?", "¿cómo corro el juez de la pauta?" | `pauta-en-meta` | Curso "META ADS con CLAUDE" (YouTube), `pauta-en-meta` |
| `mensajes-y-afirmaciones` | núcleo | C (desvíos del sitio: I) | "¿Qué cifras puedo poner en un anuncio?", "¿puedo decir 90 % menos tiempo?", "¿qué llamado a la acción uso?" |  | `diseno/README.md` §Voz y §Vocabulario, `sitio-web.md` §Cifras de marketing, `por-confirmar.md` §4 |
| `tecnicas-de-persuasion` | núcleo | C (riesgo legal: I) | "¿Qué técnica de venta uso en este anuncio?", "¿puedo poner últimos cupos?", "¿cómo uso testimonios?", "¿cómo presento los precios?" |  | Video "7 Técnicas de psicología oscura para vender" de Pedro Buerbaum (YouTube, procesado el 10/11/2026), `mensajes-y-afirmaciones`, `precios` |
| `embudo-de-adquisicion` | núcleo | C (métricas: I) | "¿Cómo llega un prospecto a ser usuario?", "¿cuándo se considera activa una cuenta?", "¿qué pasa cuando se acaba la prueba?" |  | `demostraciones-y-ventas.md` §Cierre típico, código de `platform` |
| `ver-embudo-de-activacion` | neurona | I | "¿Dónde veo el embudo de activación?", "¿dónde veo las organizaciones atascadas?" | `embudo-de-adquisicion` | código de `platform` |
| `campanas-de-activacion` | núcleo | C (administración: I) | "¿Qué es un código de activación?", "¿cuántas facturas regala un código?", "¿a quién le puedo mandar el correo de campaña?" |  | código de `platform` |
| `crear-campana-de-activacion` | neurona | I | "¿Cómo creo un código de activación?", "¿cómo armo una campaña nueva?" | `campanas-de-activacion` | código de `platform` |
| `enviar-campana-por-correo` | neurona | I | "¿Cómo envío la campaña por correo?", "¿cómo subo la lista de contactos?" | `campanas-de-activacion` | código de `platform` |
| `habilitar-cuenta-en-prueba` | neurona | I | "¿Cómo habilito una cuenta en prueba?", "¿cómo saco una cuenta de la prueba?" | `campanas-de-activacion` | código de `platform` |

## Red neuronal: Equipo interno

Lo que solo usa el equipo de núvara.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `capacitar-usuarios` | núcleo | I | "¿Cómo doy una capacitación?", "¿qué orden sigo?" |  | `capacitacion.md` (menos la plantilla de guion) |
| `problemas-conocidos` | núcleo | I | "¿Ese error ya pasó?", "¿qué falla se reporta más?" |  | `por-confirmar.md` §Interfaz, registro y estabilidad y §6, `objeciones-y-dolores.md` §Estabilidad y soporte, `producto.md` §Dudas de producto abiertas |
| `hoja-de-ruta` | núcleo | I | "¿Qué viene en desarrollo?", "¿cuándo sale X?" |  | `producto.md` §En desarrollo y §Ideas y visión, `por-confirmar.md` §Nómina, facturación electrónica, RADIAN… |

## Fuera de la red

| Archivo | Por qué |
|---|---|
| `ideas-tutoriales.md`, `capacitacion.md` §Plantilla de guion | Son para producir videos, no para responder |
| `fuentes-procesadas.md`, `README.md` §Fuentes, `por-confirmar.md` §7 | Registro de trabajo. La trazabilidad viaja en el campo `fuentes` de cada nodo |

## Conexiones neuronales (máximo 1 salto)

Una conexión se sigue solo si la pregunta toca los dos temas. Por ejemplo, "¿cuánto cuesta y cómo recargo?" carga `precios` y sigue a `creditos-y-recargas`; "¿cuánto cuesta?" carga solo `precios`.

| Desde | Hacia | Cuándo se sigue |
|---|---|---|
| `precios` | `creditos-y-recargas` | Cómo pagar, recargar, saldo o cuántas facturas alcanzan |
| `precios` | `modulos-disponibles` | Precio de un módulo que aún no tiene tarifa |
| `precios` | `objeciones` | Solo C: "es caro", comparación de costo |
| `que-es-nuvara` | `para-quien`, `modulos-disponibles` | "¿Me sirve a mí?", "¿qué más hace?" |
| `integraciones` | `exportacion` | Cómo se hace la exportación, no solo si existe |
| `modulos-disponibles` | `nomina`, `facturacion-electronica-y-radian`, `conciliacion-bancaria` | Cómo funciona el módulo, no solo si existe |
| `onboarding` | `conectar-dian`, `conectar-correo`, `usuarios-roles-y-empresas` | El paso de configuración puntual |
| `conectar-dian` | `importar-facturas`, `archivo-y-comparacion-dian` | Ya conectó y no ve las facturas, o faltan frente a la DIAN |
| `conectar-correo` | `importar-facturas` | Ya conectó y no ve las facturas |
| `importar-facturas` | `papelera-y-limpieza` | Facturas que sobran o que no son suyas |
| `causar-y-revisar` | `correcciones-y-aprendizaje`, `aprobacion-en-bloque` | Corregir una cuenta o aprobar muchas |
| `correcciones-y-aprendizaje` | `reglas-y-centros-de-costo` | Quiere que la corrección quede fija |
| `proveedores-y-retenciones` | `ventas-y-autorretencion` | Retenciones en ventas además de compras |
| `notas-credito-y-documento-soporte` | `causar-y-revisar` | Cómo queda causada |
| `facturas-del-exterior` | `notas-credito-y-documento-soporte` | Documento soporte de una compra al exterior |
| `exportacion` | `inventario-y-productos` | Productos o bodegas en la exportación |
| `exportar-world-office` | `inventario-y-productos` | Productos o bodegas de World Office |
| `archivar-aprobadas` | `exportar-archivo` | Ya archivado: sacar el archivo del mes |
| `archivar-aprobadas` | `enviar-a-siigo` | Ya archivado: enviarlo a Siigo |
| `conectar-siigo` | `enviar-a-siigo` | Ya conectado: enviar |
| `enviar-a-siigo` | `historial-de-exportaciones` | Corregir o reenviar un documento que ya llegó |
| `exportar-archivo` | `historial-de-exportaciones` | Volver a exportar o descargar un lote |
| `exportar-comprobantes-tesoreria` | `registrar-pago-proveedor` | Comprobantes de egreso en borrador |
| `exportar-comprobantes-tesoreria` | `registrar-cobro` | Comprobantes de ingreso en borrador |
| `exportacion` | `tesoreria` | Exportar los movimientos de bancos y cartera |
| `causar-nomina` | `exportacion` | Llevar la nómina al programa contable |
| `objeciones`, `demostracion-en-vivo` | `argumentos-de-venta` | Qué responder o qué mostrar |
| `que-es-nuvara` | `seguridad-y-soporte` | "¿Es seguro?", "¿quién me ayuda si algo falla?" |
| `integraciones` | `competencia` | Solo C: comparar con el programa contable que ya usa |
| `competencia` | `argumentos-de-venta` | Qué decirle a quien ya usa otro programa |
| `capacitar-usuarios` | `onboarding` | El orden de la configuración inicial en la sesión |
| `problemas-conocidos` | `seguridad-y-soporte` | Cómo reportar el error o a quién escalarlo |
| `modulos-disponibles` | `hoja-de-ruta` | Solo I: cuándo sale un módulo en desarrollo |
| `facturacion-electronica-y-radian` | `precios` | Cuánto cuestan los paquetes de documentos |
| `facturacion-electronica-y-radian` | `nomina` | La nómina electrónica usa el mismo certificado |
| `solicitar-facturacion-electronica` | `habilitar-ante-la-dian` | Después de pagar: el paso ante la DIAN |
| `habilitar-ante-la-dian` | `emitir-factura-de-venta` | Ya en producción: emitir |
| `emitir-factura-de-venta` | `emitir-nota-credito-o-debito` | Anular o ajustar una factura emitida |
| `emitir-factura-de-venta` | `creditos-y-recargas` | Saldo insuficiente para emitir |
| `emitir-factura-de-venta` | `ventas-y-autorretencion` | Cómo queda causada la venta emitida |
| `emitir-factura-de-venta` | `usuarios-roles-y-empresas` | Quién puede emitir |
| `emitir-factura-de-venta` | `registrar-eventos-radian` | A crédito: el comprador debe hacer el acuse |
| `registrar-eventos-radian` | `causar-y-revisar` | El costo deducible de las compras a crédito |
| `emitir-documento-soporte` | `notas-credito-y-documento-soporte` | Cómo se causa un documento soporte recibido |
| `emitir-documento-soporte` | `facturas-del-exterior` | Legalización de gastos |
| `renovar-certificado` | `precios` | Precio del paquete del nuevo año |
| `activar-nomina` | `configurar-nomina` | Después de activar: dejarla lista |
| `activar-nomina` | `creditos-y-recargas` | Comprar el tramo de nómina |
| `configurar-nomina` | `crear-empleado` | Ya configurada: cargar el personal |
| `crear-empleado` | `registrar-novedades` | Novedades del empleado |
| `importar-historico-nomina` | `crear-empleado` | Empleados que no vienen en el histórico |
| `registrar-novedades` | `generar-nomina` | Las novedades entran en la liquidación |
| `generar-nomina` | `emitir-nomina-electronica` | Enviar el periodo confirmado a la DIAN |
| `generar-nomina` | `generar-planilla-pila` | Aportes del mes |
| `generar-nomina` | `causar-nomina` | El asiento contable del periodo |
| `generar-nomina` | `liquidar-prestaciones` | Prima y cesantías |
| `emitir-nomina-electronica` | `habilitar-ante-la-dian` | La empresa aún no está habilitada para nómina |
| `emitir-nomina-electronica` | `creditos-y-recargas` | Saldo para los documentos o módulo en pausa |
| `liquidar-contrato` | `causar-nomina` | El asiento de la liquidación |
| `crear-empleado` | `emitir-documento-soporte` | Contratistas por prestación de servicios |
| `tesoreria` | `facturacion-electronica-y-radian` | Las ventas emitidas llegan a cartera |
| `tesoreria` | `precios` | Cómo se cobra la tesorería |
| `nomina` | `precios` | Cuánto cuestan los tramos o la nómina electrónica |
| `solicitar-tesoreria` | `crear-cuenta-bancaria` | Ya activa: crear las cuentas |
| `crear-cuenta-bancaria` | `conciliacion-bancaria` | Conciliar la cuenta con el extracto |
| `emitir-factura-de-venta` | `registrar-cobro` | Una venta a crédito queda en cuentas por cobrar |
| `registrar-cobro` | `conciliacion-bancaria` | El cobro aparece en el extracto |
| `aprobar-en-bloque` | `registrar-pago-proveedor` | Las compras aprobadas quedan por pagar |
| `registrar-pago-proveedor` | `proveedores-y-retenciones` | La retención al pagar |
| `registrar-pago-proveedor` | `conciliacion-bancaria` | El pago aparece en el extracto |
| `generar-nomina` | `pagar-nomina` | Pagar el periodo confirmado |
| `pagar-nomina` | `conciliacion-bancaria` | El lote aparece en el extracto |
| `manejar-caja` | `crear-cuenta-bancaria` | Fondear la caja desde el banco |
| `app-movil` | `dar-acceso-app-clientes` | Darle acceso a un cliente del contador |
| `app-movil` | `dar-acceso-app-equipo` | Darle acceso a operadores y jefes de área |
| `app-movil` | `manejar-caja` | Las cajas que se trabajan desde el celular |
| `app-movil` | `registrar-pago-proveedor` | Los pagos que se aprueban en la app |
| `dar-acceso-app-equipo` | `manejar-caja` | Crear la caja que se le asigna |
| `modulos-disponibles` | `app-movil` | Qué hace la app móvil |
| `marketing-y-adquisicion` | `demostracion-en-vivo` | La demostración como etapa de venta |
| `linea-grafica` | `voz-de-marca` | Cómo se escribe el texto de la pieza |
| `mensajes-y-afirmaciones` | `precios` | Qué tarifas se pueden publicar |
| `mensajes-y-afirmaciones` | `argumentos-de-venta` | Qué mensaje mueve a cada perfil |
| `tecnicas-de-persuasion` | `mensajes-y-afirmaciones` | Qué cifras y frases se pueden usar en cada técnica |
| `tecnicas-de-persuasion` | `pauta-en-meta` | En qué etapa del embudo va cada técnica |
| `revisar-pieza-antes-de-publicar` | `tecnicas-de-persuasion` | Si la urgencia, el testimonio o el tercero que usa la pieza son reales |
| `revisar-pieza-antes-de-publicar` | `mensajes-y-afirmaciones` | Si una cifra se puede publicar |
| `embudo-de-adquisicion` | `onboarding` | Lo que ve el usuario al registrarse y activar |
| `embudo-de-adquisicion` | `campanas-de-activacion` | La prueba con código |
| `embudo-de-adquisicion` | `demostracion-en-vivo` | La etapa que más cierra |
| `campanas-de-activacion` | `mensajes-y-afirmaciones` | Qué se dice en el correo de campaña |
| `enviar-campana-por-correo` | `revisar-pieza-antes-de-publicar` | Revisar el correo de prueba |
| `habilitar-cuenta-en-prueba` | `precios` | El mínimo mensual que se empieza a cobrar |
| `planeacion-de-marketing` | `competencia` | Qué decirle a un prospecto que viene de otra solución |
| `planeacion-de-marketing` | `campanas-de-activacion` | Crear el código que mide la campaña |
| `planeacion-de-marketing` | `calendario-de-marketing` | Donde se aprueba cada anuncio |
| `plan-de-redes` | `calendario-de-marketing` | Donde se aprueba cada publicación |
| `plan-seo` | `calendario-de-marketing` | Donde se aprueba cada artículo o página |
| `plan-de-redes` | `planeacion-de-marketing` | Las fechas y temas del mes |
| `plan-seo` | `planeacion-de-marketing` | Las fechas que dan tema a los artículos |
| `plan-seo` | `mensajes-y-afirmaciones` | Qué se puede afirmar en el sitio |
| `plan-seo` | `modulos-disponibles` | No se posiciona lo que no está disponible |
| `plan-de-redes` | `linea-grafica` | Cómo se ven las piezas |
| `plan-de-redes` | `mensajes-y-afirmaciones` | Qué se puede afirmar en redes |
| `calendario-de-marketing` | `revisar-pieza-antes-de-publicar` | La lista que se revisa en cada pieza |
| `pauta-en-meta` | `mensajes-y-afirmaciones` | Qué se puede decir en el anuncio |
| `pauta-en-meta` | `campanas-de-activacion` | El código que mide cada anuncio |
| `pauta-en-meta` | `crear-pieza-de-redes` | Producir el creativo |
| `planeacion-de-marketing` | `pauta-en-meta` | Cómo se monta y se decide la campaña del mes |
| `marketing-y-adquisicion` | `pauta-en-meta` | Cómo se lleva la pauta paga |
| `operar-pauta-con-claude` | `revisar-pieza-antes-de-publicar` | Revisar el creativo antes de subirlo |
| `facturacion-electronica-y-radian` | `configuracion-facturacion-electronica`, `factura-de-venta-y-notas`, `documento-soporte-electronico`, `eventos-radian` | La parte del módulo por la que pregunta |
| `configurar-resoluciones` | `emitir-factura-de-venta` | Ya cargada la resolución: emitir |
| `crear-producto-para-facturar` | `emitir-factura-de-venta` | Usar el producto en una factura |
| `consultar-y-reintentar-documentos` | `emitir-nota-credito-o-debito` | Corregir un documento ya aceptado |
| `factura-de-venta-y-notas` | `ventas-y-autorretencion` | Cómo queda causada la venta emitida |
| `documento-soporte-electronico` | `notas-credito-y-documento-soporte` | Cómo se causa el documento soporte |
| `emitir-documento-soporte` | `emitir-nota-de-ajuste-ds` | Corregir o anular el documento soporte |
| `eventos-radian` | `causar-y-revisar` | El costo deducible de las compras a crédito |
| `activar-radian` | `habilitar-ante-la-dian` | La factura aún no está en producción |
| `configurar-reglas-radian` | `revisar-cumplimiento-radian` | Ver qué envió la automatización y qué falta |
| `revisar-cumplimiento-radian` | `registrar-eventos-radian` | Enviar a mano el evento que falta |
| `habilitar-ante-la-dian` | `configurar-resoluciones` | Ya en producción: la resolución de numeración |
| `crear-comprador` | `emitir-factura-de-venta` | Seguir con la factura al comprador creado |
| `emitir-factura-de-venta` | `crear-comprador`, `crear-producto-para-facturar` | El comprador o el producto que la factura necesita |
| `emitir-factura-de-venta` | `consultar-y-reintentar-documentos` | Rechazada, falló el envío o reenviarla por email |
| `emitir-nota-credito-o-debito` | `consultar-y-reintentar-documentos` | Ver el estado de la nota emitida |
| `emitir-documento-soporte` | `legalizar-gastos` | Emitirlo desde la legalización de gastos |
| `legalizar-gastos` | `emitir-documento-soporte` | El recibo de un no obligado a facturar lleva documento soporte |
| `activar-radian` | `configurar-reglas-radian` | Que los eventos se envíen solos |
| `facturacion-electronica-pendientes` | `hoja-de-ruta` | Cuándo se planea implementarlo |
| cualquiera | `glosario` | La respuesta usa un término que el usuario no entiende |

## Cómo agregar una red neuronal

1. Escribe el núcleo (`red/<id>.md`) con qué es el módulo, cómo se activa y quién puede usarlo.
2. Escribe una neurona por acción, con `tipo: procedimiento`, la ruta en la plataforma y los pasos, y verifícala contra el código de `platform`.
3. Agrega aquí la sección "Red neuronal", las conexiones neuronales y las palabras clave en `claves.json`.
4. Agrega las preguntas de prueba en `red/pruebas/` y corre `bun run red:validar`.
