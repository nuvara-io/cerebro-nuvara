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
| `modulos-disponibles` | núcleo | P (en desarrollo: I) | "¿Tienen nómina?", "¿hacen facturación electrónica?", "¿qué módulos hay?" |  | `producto.md` §Módulos y capacidades y §Mapa de menús, `sitio-web.md` §Otros módulos |
| `integraciones` | núcleo | P | "¿Se conecta con Siigo?", "¿con Alegra?", "¿y si uso otro software?" |  | `sitio-web.md` §Integraciones, `preguntas-frecuentes.md` §Exportación y software contable |
| `seguridad-y-soporte` | núcleo | P | "¿Mis datos están seguros?", "¿cómo los contacto?", "¿hay capacitación?" |  | `sitio-web.md` §Seguridad y soporte, `por-confirmar.md` §2 (capacitación incluida) |
| `precios` | núcleo | P (pendientes: C, discusiones de modelo: I) | "¿Cuánto cuesta?", "¿cuánto vale causar una compra?", "¿hay mínimo?", "¿hay descuentos?" |  | `sitio-web.md` §Precios, `CLAUDE.md` §Datos confirmados, `por-confirmar.md` §1 y §2, `producto.md` §Planes y créditos, `preguntas-frecuentes.md` §Precios y comercial |
| `creditos-y-recargas` | núcleo | P | "¿Cómo recargo?", "¿cuántas facturas me alcanzan?", "¿el saldo es por empresa?" |  | `flujos/12`, `preguntas-frecuentes.md` §Créditos y soporte |
| `competencia` | núcleo | C | "¿En qué se diferencia de X?", "¿por qué no uso solo Siigo?" |  | `sitio-web.md` §Comparativa con competidores |
| `argumentos-de-venta` | núcleo | C | "¿Qué le digo a un contador con mucho volumen?", "¿qué argumentos funcionan?" |  | `demostraciones-y-ventas.md` §Argumentos y §Qué decir y qué evitar |
| `objeciones` | núcleo | C | "Me dicen que es caro", "no confían en la automatización", "ya tienen otro software" |  | `objeciones-y-dolores.md` §Objeciones y dudas, `demostraciones-y-ventas.md` §Objeciones y §Preguntas de prospectos |
| `demostracion-en-vivo` | núcleo | C | "¿Cómo armo una demostración?", "¿cómo cierro?" |  | `demostraciones-y-ventas.md` §Cómo se estructura y §Cierre típico, `capacitacion.md` §Cómo adaptar según el perfil |

## Red neuronal: Configuración e inicio

Crear la empresa y dejarla lista: usuarios, DIAN y correo.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `onboarding` | núcleo | P | "¿Cómo empiezo?", "¿qué configuro primero?" |  | `flujos/01`, `preguntas-frecuentes.md` §Configuración inicial, `capacitacion.md` §Los cuatro pasos iniciales |
| `usuarios-roles-y-empresas` | núcleo | P | "¿Puedo tener varias empresas?", "¿cómo invito a un auxiliar?" |  | `producto.md` §Tipos de cuenta y roles |
| `conectar-dian` | núcleo | P | "¿Cómo conecto la DIAN?", "el token no funciona", "¿qué es la extensión?" |  | `flujos/02`, `preguntas-frecuentes.md` §DIAN y correo, `objeciones-y-dolores.md` §Descarga y DIAN, `por-confirmar.md` §DIAN y extensión |
| `conectar-correo` | núcleo | P | "¿Cómo conecto el correo?", "no llegan las facturas del correo" |  | `flujos/03`, `por-confirmar.md` §Correo |

## Red neuronal: Causación

Traer las facturas, causarlas, revisarlas, aprobarlas, archivarlas y exportarlas.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `causar-y-revisar` | núcleo | P | "¿Qué pasa cuando causo una factura?", "¿qué significa cada estado?", "¿cómo decide la cuenta?" |  | `flujos/05`, `producto.md` §Estados y §Cómo decide la causación, `preguntas-frecuentes.md` §Causación y revisión, `por-confirmar.md` §Causación |
| `importar-facturas` | núcleo | P | "¿Cómo traigo las facturas?", "¿cómo filtro por fecha?" |  | `flujos/04`, `producto.md` §Cómo entran las facturas |
| `correcciones-y-aprendizaje` | núcleo | P | "Puso mal la cuenta", "¿aprende de mis cambios?" |  | `flujos/06` |
| `reglas-y-centros-de-costo` | núcleo | P | "¿Cómo creo una regla fija?", "¿cómo asigno centros de costo?" |  | `flujos/07`, `preguntas-frecuentes.md` §Centros de costo y reglas, `objeciones-y-dolores.md` §Centros de costo, `por-confirmar.md` §Centros de costo |
| `aprobacion-en-bloque` | núcleo | P | "¿Puedo aprobar varias a la vez?" |  | `flujos/08` |
| `proveedores-y-retenciones` | núcleo | P | "¿Cómo configuro las retenciones de un proveedor?", "¿y si es autorretenedor?" |  | `flujos/09`, `preguntas-frecuentes.md` §Retenciones, `objeciones-y-dolores.md` §Cuentas, IVA y retenciones, `por-confirmar.md` §Retenciones e IVA y §5 |
| `ventas-y-autorretencion` | núcleo | P | "¿Cómo causo mis ventas?", "¿cómo manejo la autorretención?" |  | `flujos/14` |
| `notas-credito-y-documento-soporte` | núcleo | P | "¿Cómo causo una nota crédito?", "¿qué hago con un documento soporte?" |  | `flujos/13` |
| `facturas-del-exterior` | núcleo | P | "Tengo facturas de otro país", "¿cómo legalizo gastos?" |  | `flujos/15` |
| `archivo-y-comparacion-dian` | núcleo | P | "¿Me falta alguna factura frente a la DIAN?", "¿dónde quedan las facturas?" |  | `flujos/11` |
| `papelera-y-limpieza` | núcleo | P | "Borré una factura", "¿cómo bloqueo facturas que no son mías?" |  | `flujos/17` |
| `exportar-siigo` | núcleo | P | "¿Cómo paso los asientos a Siigo?", "error al exportar a Siigo" |  | `flujos/10`, `por-confirmar.md` §Exportación a Siigo |
| `exportar-world-office` | núcleo | P | "¿Cómo exporto a World Office?", "¿y a Siigo escritorio?" |  | `flujos/16`, `por-confirmar.md` §World Office |
| `inventario-y-productos` | núcleo | P | "¿Cómo asocio productos?", "¿maneja inventario?" |  | `flujos/19`, `preguntas-frecuentes.md` §Productos e inventario, `objeciones-y-dolores.md` §Inventario, `por-confirmar.md` §Inventario |
| `glosario` | núcleo | P | "¿Qué es un asiento?", "¿qué significa precausar?" |  | `glosario.md` |
| `causar-facturas` | neurona | P | "¿Cómo causo una factura?", "¿cómo causo varias facturas?" | `causar-y-revisar` | `flujos/04`, `flujos/05` |
| `causar-por-lote` | neurona | P | "¿Cómo causo por lote?", "¿cómo causo todo el mes de una vez?" | `causar-y-revisar` | `flujos/05` |
| `revisar-causacion` | neurona | P | "¿Cómo reviso una causación?", "¿qué hago si no cuadra?" | `causar-y-revisar` | `flujos/05`, `flujos/06` |
| `aprobar-en-bloque` | neurona | P | "¿Cómo apruebo un grupo de facturas?", "¿cómo apruebo muchas a la vez?" | `aprobacion-en-bloque` | `flujos/08` |
| `archivar-aprobadas` | neurona | P | "¿Cómo archivo las facturas aprobadas?", "¿cómo dejo listo el mes para exportar?" | `archivo-y-comparacion-dian` | `flujos/05`, `flujos/08` |

## Red neuronal: Facturación electrónica

Emitir documentos electrónicos ante la DIAN y registrar eventos RADIAN.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `facturacion-electronica-y-radian` | núcleo | P | "¿Puedo facturar desde núvara?", "¿qué es RADIAN?", "¿qué documentos electrónicos emiten?" |  | `flujos/20`, código de `platform` |
| `emitir-factura-de-venta` | neurona | P | "¿Cómo emito una factura de venta?", "¿cómo hago una factura electrónica?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `solicitar-facturacion-electronica` | neurona | P | "¿Cómo activo la facturación electrónica?", "¿dónde solicito la habilitación?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `habilitar-ante-la-dian` | neurona | P | "¿Cómo me habilito ante la DIAN?", "¿dónde pongo el TestSetID?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `emitir-nota-credito-o-debito` | neurona | P | "¿Cómo anulo una factura de venta?", "¿cómo emito una nota débito?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `emitir-documento-soporte` | neurona | P | "¿Cómo emito un documento soporte?", "¿cómo soporto una compra a un no obligado a facturar?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `registrar-eventos-radian` | neurona | P | "¿Cómo hago el acuse de recibo?", "¿cómo registro un evento RADIAN?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `renovar-certificado` | neurona | P | "¿Cómo renuevo el certificado de firma digital?", "¿qué hago si se vence la firma?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |

## Red neuronal: Nómina

Empleados, novedades, liquidación, nómina electrónica, PILA y causación de la nómina.

| Nodo | Tipo | Público | Cuándo se activa | Núcleo | Fuentes |
|---|---|---|---|---|---|
| `nomina` | núcleo | P | "¿Cómo funciona la nómina?", "¿qué incluye el módulo de nómina?" |  | `flujos/18`, código de `platform` |
| `activar-nomina` | neurona | P | "¿Cómo activo la nómina?", "¿dónde compro cupos de empleados?" | `nomina` | `flujos/18`, código de `platform` |
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
| `integraciones` | `exportar-siigo`, `exportar-world-office` | Cómo se hace la exportación, no solo si existe |
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
| `exportar-siigo`, `exportar-world-office` | `inventario-y-productos` | Productos o bodegas en la exportación |
| `objeciones`, `demostracion-en-vivo` | `argumentos-de-venta` | Qué responder o qué mostrar |
| `que-es-nuvara` | `seguridad-y-soporte` | "¿Es seguro?", "¿quién me ayuda si algo falla?" |
| `integraciones` | `competencia` | Solo C: comparar con el programa contable que ya usa |
| `competencia` | `argumentos-de-venta` | Qué decirle a quien ya usa otro programa |
| `capacitar-usuarios` | `onboarding` | El orden de la configuración inicial en la sesión |
| `problemas-conocidos` | `seguridad-y-soporte` | Cómo reportar el error o a quién escalarlo |
| `modulos-disponibles` | `hoja-de-ruta` | Solo I: cuándo sale un módulo en desarrollo |
| `facturacion-electronica-y-radian` | `precios` | Cuánto cuesta la habilitación o cada documento |
| `facturacion-electronica-y-radian` | `nomina` | La nómina electrónica sale de la misma habilitación |
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
| `renovar-certificado` | `precios` | Precio de la renovación |
| `activar-nomina` | `configurar-nomina` | Después de activar: dejarla lista |
| `activar-nomina` | `creditos-y-recargas` | Pagar los cupos con el saldo |
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
| cualquiera | `glosario` | La respuesta usa un término que el usuario no entiende |

## Cómo agregar una red neuronal

1. Escribe el núcleo (`red/<id>.md`) con qué es el módulo, cómo se activa y quién puede usarlo.
2. Escribe una neurona por acción, con `tipo: procedimiento`, la ruta en la plataforma y los pasos, y verifícala contra el código de `platform`.
3. Agrega aquí la sección "Red neuronal", las conexiones neuronales y las palabras clave en `claves.json`.
4. Agrega las preguntas de prueba en `red/pruebas/` y corre `bun run red:validar`.
