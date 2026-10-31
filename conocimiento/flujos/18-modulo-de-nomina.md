# Módulo de nómina y nómina electrónica

El foco de núvara sigue siendo la causación, pero varias sesiones trataron un módulo de **nómina** que se vende vinculado a la facturación electrónica. Trátalo como información en validación (ver `por-confirmar.md`).

## Objetivo
Registrar el personal, liquidar la nómina y emitir la nómina electrónica a la DIAN desde la plataforma, dejando en el software contable solo el asiento.

## Requisitos
- Datos de los empleados (contratos, salarios, EPS, ARL) o plantilla de carga masiva en Excel.
- Habilitación de la empresa ante la DIAN para emitir nómina electrónica.
- Semana laboral de la empresa (por ejemplo, lunes a sábado) para calcular bien vacaciones.

## Pasos
1. Carga los **empleados** (masivo por plantilla o uno a uno). Revisa contratos activos y de prestación de servicios; estos últimos se manejan por **documento soporte**, no por nómina.
2. Define **perfiles de cargo** (administrativo, operativo, producción) para asociar la actividad económica de ARL y los centros de trabajo; así salen las plantillas **PILA**.
3. Registra **novedades**: horas extra, vacaciones, incapacidades, licencias (maternidad, paternidad, luto, matrimonio), ausencias injustificadas, préstamos y beneficios. La plataforma calcula los valores a cargo del empleador y de la EPS, y descuenta los días de salario y auxilio de transporte en ausencias injustificadas.
4. Para incrementos salariales anuales usa la **actualización masiva de salarios**.
5. Para bonificaciones, usa la **plantilla de Excel** de carga masiva; las que no deben ir a la DIAN requieren un manejo interno.
6. Liquida por quincena o mes, valida y **emite** la nómina electrónica a la DIAN; llega al correo de cada empleado.
7. Pide un archivo de Excel por quincena con todos los empleados para revisión de la gerencia.
8. La radicación de incapacidades ante EPS/ARL se hace por fuera; núvara solo lleva el registro contable y las cuentas por cobrar.

## Errores comunes
- PILA bloqueada por periodos faltantes: carga primero las quincenas atrasadas, contratos y métodos de pago.
- Error de consecutivo al emitir: ya existe ese número; revisa la vista previa.
- Cálculo de horas extra y recargos: depende de la plantilla de horarios de la empresa.
- Diferencias de redondeo de decimales en salarios.

## Tips del asesor
- La nómina se emite directamente desde núvara a la DIAN; en el software contable solo se registra el asiento.
- La migración desde otro software exige exportar el historial de datos; los datos incompletos se complementan en Excel.
- Se pidieron mejoras de interfaz: selectores en español, formato de mayúsculas uniforme, guardar como borrador al crear un empleado y textos de ayuda por cada tipo de ausencia.
