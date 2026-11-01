# Módulo de nómina y nómina electrónica

El foco de núvara sigue siendo la causación. La nómina es un **módulo aparte**, que requiere una explicación detallada y es una venta más compleja. Trátalo como información en validación (ver `por-confirmar.md`): no lo presentes como disponible en un video sin confirmarlo con el equipo.

## Qué está disponible y qué está en desarrollo
| Tema | Estado (fuente más reciente, agosto de 2026) |
|---|---|
| Módulo de nómina (empleados, novedades, liquidación) | Existe; hay que revisar con cada usuario cómo lo necesita para adaptarlo. El sitio lo anuncia como módulo propio. |
| **Emisión de nómina electrónica a la DIAN** | **Prevista, todavía no disponible** según la sesión más reciente |
| Carga de nómina por archivo plano (cuatro pasos hasta causar) | En desarrollo; lanzamiento estimado para finales de agosto de 2026, según el equipo |
| Reporte de horas extra por Telegram o WhatsApp | En desarrollo, mismo plazo estimado |
| Carga masiva de empleados y de bonificaciones por plantilla de Excel | Descrita por el asesor |
| Radicación de incapacidades ante EPS o ARL | No se hace en núvara |

Los pasos de abajo describen el módulo como lo presentó el equipo; los que implican emitir a la DIAN dependen de que esa emisión se lance.

<!-- fuentes: h-4cae519c5dd0, h-3a9a315786c4, h-f093ed31e568, h-1b5ddf9047dc -->

## Objetivo
Registrar el personal, liquidar la nómina y, cuando la emisión esté disponible, emitir la nómina electrónica a la DIAN desde la plataforma, dejando en el software contable solo el asiento. La nómina saldrá antes que la facturación electrónica.

## Requisitos
- Datos de los empleados (contratos, salarios, EPS, ARL) o plantilla de carga masiva en Excel.
- Habilitación de la empresa ante la DIAN para emitir nómina electrónica.
- Semana laboral de la empresa (por ejemplo, lunes a sábado) para calcular bien vacaciones.

## Pasos
1. Carga los **empleados** (masivo por plantilla o uno a uno). Revisa contratos activos y de prestación de servicios; estos últimos se manejan por **documento soporte**, no por nómina (ver flujo 13).
2. Define **perfiles de cargo** (administrativo, operativo, producción) para asociar la actividad económica de ARL y los centros de trabajo; así salen las plantillas **PILA**.
3. Registra **novedades**: horas extra, vacaciones, incapacidades, licencias (maternidad, paternidad, luto, matrimonio), ausencias injustificadas, préstamos y beneficios. La plataforma calcula los valores a cargo del empleador y de la EPS, y descuenta los días de salario y auxilio de transporte en ausencias injustificadas.
4. Para incrementos salariales anuales usa la **actualización masiva de salarios**.
5. Para bonificaciones, usa la **plantilla de Excel** de carga masiva; las que no deben ir a la DIAN requieren un manejo interno.
6. Liquida por quincena o mes, valida y **emite** la nómina electrónica a la DIAN; llega al correo de cada empleado. *(Emisión: prevista, aún no disponible.)*
7. Pide un archivo de Excel por quincena con todos los empleados para revisión de la gerencia.
8. La radicación de incapacidades ante EPS/ARL se hace por fuera; núvara solo lleva el registro contable y las cuentas por cobrar.

## Cómo se relaciona con la contabilidad
- El pasivo de nómina es todo lo que se queda debiendo al empleado: sueldos no pagados y prestaciones sociales que se acumulan mes a mes. Las colillas de pago sirven además para causar gastos y detectar préstamos.
- En el flujo mensual de una firma contable, la nómina y el pago de la seguridad social se hacen después de ventas, compras, recibos de caja, egresos y conciliación. En una sesión (diciembre de 2025) la contadora dijo que para esa etapa no hacía falta que la plataforma manejara nómina; otra usuaria preguntó por ella porque migrará las compras de un cliente suyo y todavía no empezaba con nómina.
- Un documento de dotación del personal no es nómina de sueldos: va a otra cuenta de gasto de personal, aunque en una etapa temprana la plataforma no dejaba cambiarla.

<!-- fuentes: h-66eba239a3cb, h-2eed69e6f27f, h-4cae519c5dd0, h-f7e9b0b7d233, h-f093ed31e568 -->

## Errores comunes
- PILA bloqueada por periodos faltantes: carga primero las quincenas atrasadas, contratos y métodos de pago.
- Error de consecutivo al emitir: ya existe ese número; revisa la vista previa.
- Cálculo de horas extra y recargos: depende de la plantilla de horarios de la empresa.
- Diferencias de redondeo de decimales en salarios.

## Tips del asesor
- Cuando la emisión esté disponible, la nómina se emitirá directamente desde núvara a la DIAN; en el software contable solo se registra el asiento.
- La migración desde otro software exige exportar el historial de datos; los datos incompletos se complementan en Excel.
- Se pidieron mejoras de interfaz: selectores en español, formato de mayúsculas uniforme, guardar como borrador al crear un empleado y textos de ayuda por cada tipo de ausencia.
