---
id: nomina
titulo: Nómina
publico: P
actualizado: 2026-11-02
conexiones:
  - facturacion-electronica-y-radian   # la nómina electrónica usa el mismo certificado
  - precios
fuentes:
  - conocimiento/flujos/18-modulo-de-nomina.md
  - platform@6fdbceaba
---

# Nómina

Administrar empleados, novedades y liquidaciones, emitir la nómina electrónica a la DIAN, generar la PILA y dejar causado el asiento contable.

## Qué hace
- [P] **Empleados** con contrato, salario, datos bancarios y seguridad social, uno a uno o importados desde Excel.
- [P] **Novedades**: incapacidades, licencias, vacaciones, horas extra, préstamos, beneficios y descuentos recurrentes.
- [P] **Liquidación** quincenal o mensual, **prestaciones sociales** (prima, cesantías e intereses) y **liquidación de contratos**.
- [P] **Nómina electrónica** a la DIAN con sus notas de ajuste, **planillas PILA** y **causación contable** de la nómina.
- [P] **Informes**: costo de nómina, reportes de periodo, certificado de ingresos y retenciones y formulario 2276.
- [P] Trae el histórico desde World Office, Siigo Nómina, Helisa, Alegra Nómina o Contai.
- [P] **Estructura** de la empresa: áreas, cargos y sedes de trabajo, con la asignación de cada empleado (verificado en el código el 09/11/2026).
- [P] **Historia laboral** de cada empleado e **incremento salarial** a varios empleados a la vez, con vista previa obligatoria antes de aplicar.
- [P] **Horas extra y recargos** nocturnos, dominicales y festivos según la jornada; **embargos** y **pactos no salariales**.
- [P] **Pago a empleados** desde Tesorería: pago uno a uno con su egreso o **lote bancario** con archivo PAB, conciliación del lote y desprendibles por correo.
- [P] **Tablero de costo**: qué requiere atención, en qué se va la nómina, cómo cambia, rotación y ausentismo. La **biblioteca de informes** trae horas extra y recargos, aportes, deducciones, incapacidades por quién las asume y provisiones.

## Cómo se activa y cuánto cuesta
- [P] Se activa en **Cuenta › Módulos › Nómina › Activar**, eligiendo tu **tramo de empleados**. Solo un administrador puede activarla.
- [P] Es un módulo aparte de la causación. Se cobra un **valor anual por tramo de empleados**: el plan inicial de hasta 5 es $300.000 + IVA e incluye la habilitación de facturación electrónica; de 1 a 10 son $260.000 solo emisión o $480.000 con todo; de 11 a 20, $771.000; de 21 a 45, $1.400.000, y de 46 a 90, $2.480.000. Con más de 90 se cotiza. Pagas el tramo completo, aunque tengas menos empleados.
- [P] Cada tramo es de una sola empresa e incluye su certificado digital, el mismo de la facturación electrónica. Para emitirla, la empresa debe estar habilitada ante la DIAN con el tipo de documento nómina.

## Dónde está en la plataforma
- [P] Menú **Nómina**: Resumen, Personal, Novedades, Liquidación, Obligaciones (Planillas PILA y Nómina electrónica), Contabilidad, Informes y Configuración. El **Resumen** dice si el módulo está listo o qué falta.
- [P] El pago a empleados está en **Tesorería › Pago de nómina**.

## Quién puede
- [P] Generar y confirmar la nómina: administrador u operador.
- [P] Activar el módulo, aprobar la causación y cerrar periodos: administrador.

## Para el equipo
- [C] Los tramos vigentes son los de `precios`; lo que falta confirmar de cada uno está ahí.
- [I] Hasta aplicar el encargo de precios, la plataforma cobra cupos al mes con el saldo: si no alcanza, da 3 días de gracia y pausa el módulo.
- [I] El diálogo de activación se titula "Activar Nómina electrónica" aunque compra cupos de administración; los mensajes de saldo dicen "Nuvicoins".
