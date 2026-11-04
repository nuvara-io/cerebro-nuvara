---
id: nomina
titulo: Nómina
publico: P
actualizado: 2026-11-02
conexiones:
  - facturacion-electronica-y-radian   # la nómina electrónica sale de la misma habilitación DIAN
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

## Cómo se activa y cuánto cuesta
- [P] Se activa en **Cuenta › Módulos › Nómina › Activar**, eligiendo los **cupos de empleados**. Solo un administrador puede activarla.
- [P] Es un módulo aparte de la causación. Se cobra una **mensualidad por tramo de empleados**: hasta 5 son $480.000 al año o $44.000 mes a mes, hasta 10 son $960.000 o $88.000, hasta 30 son $2.160.000 o $198.000 y hasta 50 son $3.000.000 o $275.000. Hasta 100 se cotiza. Pagas el tramo completo, aunque tengas menos empleados.
- [P] Con la habilitación de $150.000 al año, si no la tienes ya, las nóminas electrónicas van incluidas en el plan. Para emitirlas, la empresa debe estar habilitada ante la DIAN con el tipo de documento nómina.
- [P] Si el saldo no cubre los cupos, el módulo tiene 3 días de gracia y luego se pausa: en pausa no se emite a la DIAN.

## Dónde está en la plataforma
- [P] Menú **Nómina**: Resumen, Personal, Novedades, Liquidación, Obligaciones (Planillas PILA y Nómina electrónica), Contabilidad, Informes y Configuración. El **Resumen** dice si el módulo está listo o qué falta.
- [P] El pago a empleados está en **Tesorería › Pago de nómina**.

## Quién puede
- [P] Generar y confirmar la nómina: administrador u operador.
- [P] Activar el módulo, aprobar la causación y cerrar periodos: administrador.

## Para el equipo
- [C] El precio de cada cupo y sus tramos no está publicado: confírmalo con el equipo antes de darlo.
- [I] El diálogo de activación se titula "Activar Nómina electrónica" aunque compra cupos de administración; los mensajes de saldo dicen "Nuvicoins".
