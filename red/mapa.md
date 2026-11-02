# Mapa de la red de conocimiento de núvara

Borrador del 02/11/2026. Define **qué nodos tiene la red, para quién es cada uno, de qué archivos de `conocimiento/` se alimenta y con qué otros nodos se conecta**. Todavía no hay nodos escritos: este mapa se valida primero.

## Cómo funciona

```
pregunta ─▶ enrutador ─▶ 1 o 2 nodos (+ máximo 1 conexión) ─▶ respuesta
              │                │
              └─ lee solo      └─ filtra por público y estado
                 este índice
```

1. El **enrutador** solo lee la columna "Cuándo se activa" de este mapa y elige 1 o 2 nodos. Si duda entre más de 2, pregunta antes de buscar.
2. Se cargan esos nodos y, solo si la pregunta lo pide, **una** conexión de la tabla de conexiones. Nunca se sigue de una conexión a otra.
3. Los **dos nodos transversales** (voz de marca y límites) se cargan siempre.
4. La respuesta sale solo de lo cargado. Si el dato no está, o está "por confirmar", se escala a un asesor.

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

## Capa 0: transversales (siempre activos)

| Nodo | Público | Contenido | Fuentes |
|---|---|---|---|
| `voz-de-marca` | P | núvara en minúscula con tilde, tú, créditos, usuario y no cliente, palabras prohibidas, "núvara prepara, tú apruebas" | `CLAUDE.md` (reglas de marca), `README.md` (reglas para escribir), `sitio-web.md` §Desvíos |
| `limites` | P | Qué no se afirma: cifras de marketing sin validar, módulos en desarrollo ofrecidos como disponibles, datos de otros usuarios. Cuándo escalar a un asesor | `por-confirmar.md` §4, `sitio-web.md` §Cifras de marketing, `producto.md` §En desarrollo, `README.md` §Privacidad |

## Capa 1: qué es núvara y lo comercial

| Nodo | Público | Cuándo se activa | Fuentes |
|---|---|---|---|
| `que-es-nuvara` | P | "¿Qué hace núvara?", "¿qué es la causación?", "¿en qué me ayuda?" | `producto.md` §Qué hace, `sitio-web.md` §Posicionamiento y §Qué hace la causación |
| `para-quien` | P (dolores: C) | "¿Sirve para un contador independiente?", "¿para una firma?", "¿para mi empresa?" | `producto.md` §A quién va dirigido, `demostraciones-y-ventas.md` §Perfiles y §Posicionamiento, `objeciones-y-dolores.md` §Dolores y §Lo que mueve a cada perfil |
| `modulos-disponibles` | P (en desarrollo: I) | "¿Tienen nómina?", "¿hacen facturación electrónica?", "¿qué módulos hay?" | `producto.md` §Módulos y capacidades y §Mapa de menús, `sitio-web.md` §Otros módulos |
| `integraciones` | P | "¿Se conecta con Siigo?", "¿con Alegra?", "¿y si uso otro software?" | `sitio-web.md` §Integraciones, `preguntas-frecuentes.md` §Exportación y software contable |
| `seguridad-y-soporte` | P | "¿Mis datos están seguros?", "¿cómo los contacto?", "¿hay capacitación?" | `sitio-web.md` §Seguridad y soporte, `por-confirmar.md` §2 (capacitación incluida) |
| `precios` | P (pendientes: C, discusiones de modelo: I) | "¿Cuánto cuesta?", "¿cuánto vale causar una compra?", "¿hay mínimo?", "¿hay descuentos?" | `sitio-web.md` §Precios, `CLAUDE.md` §Datos confirmados, `por-confirmar.md` §1 y §2, `producto.md` §Planes y créditos, `preguntas-frecuentes.md` §Precios y comercial |
| `creditos-y-recargas` | P | "¿Cómo recargo?", "¿cuántas facturas me alcanzan?", "¿el saldo es por empresa?" | `flujos/12`, `preguntas-frecuentes.md` §Créditos y soporte |
| `competencia` | C | "¿En qué se diferencia de X?", "¿por qué no uso solo Siigo?" | `sitio-web.md` §Comparativa con competidores |
| `argumentos-de-venta` | C | "¿Qué le digo a un contador con mucho volumen?", "¿qué argumentos funcionan?" | `demostraciones-y-ventas.md` §Argumentos y §Qué decir y qué evitar |
| `objeciones` | C | "Me dicen que es caro", "no confían en la automatización", "ya tienen otro software" | `objeciones-y-dolores.md` §Objeciones y dudas, `demostraciones-y-ventas.md` §Objeciones y §Preguntas de prospectos |
| `demostracion-en-vivo` | C | "¿Cómo armo una demostración?", "¿cómo cierro?" | `demostraciones-y-ventas.md` §Cómo se estructura y §Cierre típico, `capacitacion.md` §Cómo adaptar según el perfil |

## Capa 2: cómo se usa (soporte)

| Nodo | Público | Cuándo se activa | Fuentes |
|---|---|---|---|
| `usuarios-roles-y-empresas` | P | "¿Puedo tener varias empresas?", "¿cómo invito a un auxiliar?" | `producto.md` §Tipos de cuenta y roles |
| `onboarding` | P | "¿Cómo empiezo?", "¿qué configuro primero?" | `flujos/01`, `preguntas-frecuentes.md` §Configuración inicial, `capacitacion.md` §Los cuatro pasos iniciales |
| `conectar-dian` | P | "¿Cómo conecto la DIAN?", "el token no funciona", "¿qué es la extensión?" | `flujos/02`, `preguntas-frecuentes.md` §DIAN y correo, `objeciones-y-dolores.md` §Descarga y DIAN, `por-confirmar.md` §DIAN y extensión |
| `conectar-correo` | P | "¿Cómo conecto el correo?", "no llegan las facturas del correo" | `flujos/03`, `por-confirmar.md` §Correo |
| `importar-facturas` | P | "¿Cómo traigo las facturas?", "¿cómo filtro por fecha?" | `flujos/04`, `producto.md` §Cómo entran las facturas |
| `causar-y-revisar` | P | "¿Qué pasa cuando causo una factura?", "¿qué significa cada estado?", "¿cómo decide la cuenta?" | `flujos/05`, `producto.md` §Estados y §Cómo decide la causación, `preguntas-frecuentes.md` §Causación y revisión, `por-confirmar.md` §Causación |
| `correcciones-y-aprendizaje` | P | "Puso mal la cuenta", "¿aprende de mis cambios?" | `flujos/06` |
| `reglas-y-centros-de-costo` | P | "¿Cómo creo una regla fija?", "¿cómo asigno centros de costo?" | `flujos/07`, `preguntas-frecuentes.md` §Centros de costo y reglas, `objeciones-y-dolores.md` §Centros de costo, `por-confirmar.md` §Centros de costo |
| `aprobacion-en-bloque` | P | "¿Puedo aprobar varias a la vez?" | `flujos/08` |
| `proveedores-y-retenciones` | P | "¿Cómo configuro las retenciones de un proveedor?", "¿y si es autorretenedor?" | `flujos/09`, `preguntas-frecuentes.md` §Retenciones, `objeciones-y-dolores.md` §Cuentas, IVA y retenciones, `por-confirmar.md` §Retenciones e IVA y §5 |
| `ventas-y-autorretencion` | P | "¿Cómo causo mis ventas?", "¿cómo manejo la autorretención?" | `flujos/14` |
| `notas-credito-y-documento-soporte` | P | "¿Cómo causo una nota crédito?", "¿qué hago con un documento soporte?" | `flujos/13` |
| `facturas-del-exterior` | P | "Tengo facturas de otro país", "¿cómo legalizo gastos?" | `flujos/15` |
| `archivo-y-comparacion-dian` | P | "¿Me falta alguna factura frente a la DIAN?", "¿dónde quedan las facturas?" | `flujos/11` |
| `papelera-y-limpieza` | P | "Borré una factura", "¿cómo bloqueo facturas que no son mías?" | `flujos/17` |
| `exportar-siigo` | P | "¿Cómo paso los asientos a Siigo?", "error al exportar a Siigo" | `flujos/10`, `por-confirmar.md` §Exportación a Siigo |
| `exportar-world-office` | P | "¿Cómo exporto a World Office?", "¿y a Siigo escritorio?" | `flujos/16`, `por-confirmar.md` §World Office |
| `inventario-y-productos` | P | "¿Cómo asocio productos?", "¿maneja inventario?" | `flujos/19`, `preguntas-frecuentes.md` §Productos e inventario, `objeciones-y-dolores.md` §Inventario, `por-confirmar.md` §Inventario |
| `nomina` | P | "¿Cómo funciona la nómina?", "¿qué incluye el módulo de nómina?" | `flujos/18`, código de `platform` |
| `facturacion-electronica-y-radian` | P | "¿Puedo facturar desde núvara?", "¿qué es RADIAN?", "¿qué documentos electrónicos emiten?" | `flujos/20`, código de `platform` |
| `conciliacion-bancaria` | P (en desarrollo: lo disponible se dice, lo demás va a I) | "¿Concilian el banco?", "¿qué bancos leen?" | `flujos/21`, `sitio-web.md` §Otros módulos |
| `glosario` | P | "¿Qué es un asiento?", "¿qué significa precausar?" | `glosario.md` |

## Capa 3: interna

| Nodo | Público | Cuándo se activa | Fuentes |
|---|---|---|---|
| `capacitar-usuarios` | I | "¿Cómo doy una capacitación?", "¿qué orden sigo?" | `capacitacion.md` (menos la plantilla de guion) |
| `problemas-conocidos` | I | "¿Ese error ya pasó?", "¿qué falla se reporta más?" | `por-confirmar.md` §Interfaz, registro y estabilidad y §6, `objeciones-y-dolores.md` §Estabilidad y soporte, `producto.md` §Dudas de producto abiertas |
| `hoja-de-ruta` | I | "¿Qué viene en desarrollo?", "¿cuándo sale X?" | `producto.md` §En desarrollo y §Ideas y visión, `por-confirmar.md` §Nómina, facturación electrónica, RADIAN… |

## Capa 4: procedimientos (cómo se hace)

Un procedimiento responde "¿cómo hago X?" con la **ruta en la plataforma** (menú › pantalla › botón) y los **pasos numerados**. Cada uno cuelga de un tema de la capa 2: si la pregunta pide hacer algo y el tema gana, el enrutador entrega su procedimiento. El tema y su procedimiento quedan conectados sin escribir la conexión abajo.

Mientras no se verifiquen contra la plataforma, los procedimientos llevan `estado: según capacitación` y los nombres de pantallas y botones son los que usa el asesor.

| Nodo | Público | Cuándo se activa | Tema | Fuentes |
|---|---|---|---|---|
| `causar-facturas` | P | "¿Cómo causo una factura?", "¿cómo causo varias facturas?" | `causar-y-revisar` | `flujos/04`, `flujos/05` |
| `causar-por-lote` | P | "¿Cómo causo por lote?", "¿cómo causo todo el mes de una vez?" | `causar-y-revisar` | `flujos/05` |
| `revisar-causacion` | P | "¿Cómo reviso una causación?", "¿qué hago si no cuadra?" | `causar-y-revisar` | `flujos/05`, `flujos/06` |
| `aprobar-en-bloque` | P | "¿Cómo apruebo un grupo de facturas?", "¿cómo apruebo muchas a la vez?" | `aprobacion-en-bloque` | `flujos/08` |
| `archivar-aprobadas` | P | "¿Cómo archivo las facturas aprobadas?", "¿cómo dejo listo el mes para exportar?" | `archivo-y-comparacion-dian` | `flujos/05`, `flujos/08` |
| `emitir-factura-de-venta` | P | "¿Cómo emito una factura de venta?", "¿cómo hago una factura electrónica?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `solicitar-facturacion-electronica` | P | "¿Cómo activo la facturación electrónica?", "¿dónde solicito la habilitación?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `habilitar-ante-la-dian` | P | "¿Cómo me habilito ante la DIAN?", "¿dónde pongo el TestSetID?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `emitir-nota-credito-o-debito` | P | "¿Cómo anulo una factura de venta?", "¿cómo emito una nota débito?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `emitir-documento-soporte` | P | "¿Cómo emito un documento soporte?", "¿cómo soporto una compra a un no obligado a facturar?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `registrar-eventos-radian` | P | "¿Cómo hago el acuse de recibo?", "¿cómo registro un evento RADIAN?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `renovar-certificado` | P | "¿Cómo renuevo el certificado de firma digital?", "¿qué hago si se vence la firma?" | `facturacion-electronica-y-radian` | `flujos/20`, código de `platform` |
| `activar-nomina` | P | "¿Cómo activo la nómina?", "¿dónde compro cupos de empleados?" | `nomina` | `flujos/18`, código de `platform` |
| `configurar-nomina` | P | "¿Cómo configuro la nómina?", "¿dónde cambio la frecuencia de pago?" | `nomina` | `flujos/18`, código de `platform` |
| `crear-empleado` | P | "¿Cómo creo un empleado?", "¿cómo importo los empleados?" | `nomina` | `flujos/18`, código de `platform` |
| `importar-historico-nomina` | P | "¿Cómo traigo el histórico de nómina de Siigo?", "¿cómo migro la nómina de otro programa?" | `nomina` | `flujos/18`, código de `platform` |
| `registrar-novedades` | P | "¿Cómo registro una incapacidad?", "¿dónde pongo las horas extra?" | `nomina` | `flujos/18`, código de `platform` |
| `generar-nomina` | P | "¿Cómo genero la nómina de la quincena?", "¿cómo liquido la nómina del mes?" | `nomina` | `flujos/18`, código de `platform` |
| `emitir-nomina-electronica` | P | "¿Cómo emito la nómina electrónica?", "¿cómo envío la nómina a la DIAN?" | `nomina` | `flujos/18`, código de `platform` |
| `generar-planilla-pila` | P | "¿Cómo genero la planilla PILA?", "¿dónde descargo el archivo de la PILA?" | `nomina` | `flujos/18`, código de `platform` |
| `causar-nomina` | P | "¿Cómo causo la nómina?", "¿cómo contabilizo la nómina?" | `nomina` | `flujos/18`, código de `platform` |
| `liquidar-prestaciones` | P | "¿Cómo liquido la prima?", "¿cómo pago las cesantías?" | `nomina` | `flujos/18`, código de `platform` |
| `liquidar-contrato` | P | "¿Cómo liquido a un empleado que se retira?", "¿cómo hago la liquidación de un contrato?" | `nomina` | `flujos/18`, código de `platform` |

## Fuera de la red

| Archivo | Por qué |
|---|---|
| `ideas-tutoriales.md`, `capacitacion.md` §Plantilla de guion | Son para producir videos, no para responder |
| `fuentes-procesadas.md`, `README.md` §Fuentes, `por-confirmar.md` §7 | Registro de trabajo. La trazabilidad viaja en el campo `fuentes` de cada nodo |

## Conexiones (máximo 1 salto)

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
| cualquiera | `glosario` | La respuesta usa un término que el usuario no entiende |

## Cómo se verá un nodo (ejemplo: `precios`)

Solo un esbozo para validar el formato. Las cifras son las que hoy son oficiales.

```markdown
---
id: precios
publico: P
actualizado: 2026-11-02
conexiones: [creditos-y-recargas, modulos-disponibles, objeciones]
fuentes: [sitio-web.md#precios, CLAUDE.md#datos-confirmados, por-confirmar.md#2]
---

## Oficial
- [P] 1 crédito = $100 COP.
- [P] Causar una compra: $510 (5,1 créditos).
- [P] Causar una venta: $200 (2,0 créditos).
- [P] Mínimo mensual de consumo: $80.000. Lo que no consumes se acumula.

## Por confirmar
- [C] Recarga mínima: sin definir (la app dice $70.000; la calculadora arranca en $200.000).
- [C] Tarifas de documento soporte, RADIAN, nómina y facturación electrónica.
- [C] Si el mínimo mensual aplica desde el primer mes.

## Descartado (no decir nunca)
- Venta a $100. Compra a $870, $750, $600, $490 o $300.

## Si no está aquí
"Ese valor te lo confirma un asesor de núvara."
```

## Decisiones para validar

1. **Tamaño de los nodos:** 38 nodos (2 transversales, 11 comerciales, 22 de uso y 3 internos). ¿Se juntan o se separan algunos? Por ejemplo, `proveedores-y-retenciones` y `ventas-y-autorretencion` podrían ser uno solo.
2. **Públicos:** ¿el chat abierto lo usan prospectos sin cuenta, usuarios con cuenta o los dos? Cambia qué datos de soporte se muestran.
3. **Dónde vive la red:** propuesta, `red/` con un archivo por nodo, generado a partir de `conocimiento/` y revisado a mano. `procesar-reuniones` actualiza los dos.
4. **Quién marca lo oficial:** hoy lo oficial sale del sitio y de lo confirmado el 31/10/2026. Hace falta una persona del equipo que apruebe cada cambio a "oficial".
