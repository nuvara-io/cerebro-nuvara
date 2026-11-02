---
id: emitir-nomina-electronica
tipo: procedimiento
titulo: Emitir la nómina electrónica a la DIAN
tema: nomina
publico: P
estado: verificado en el código
ruta: [Nómina, Liquidación, Generar nómina, Emitir a la DIAN]
url: /{organización}/companies/{empresa}/payroll/generate
siguiente: generar-planilla-pila
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/18-modulo-de-nomina.md
  - platform@6fdbceaba
---

# Emitir la nómina electrónica a la DIAN

## Antes de empezar
- [P] La empresa está habilitada ante la DIAN con el tipo de documento **nómina**.
- [P] El periodo está confirmado y tienes saldo para los documentos.
- [P] En **Configuración**, elegiste cómo se emite: **acumulado del mes** (obligatorio con pago quincenal) o **cada liquidación** (solo con pago mensual).

## Pasos
1. [P] Entra a **Nómina › Liquidación › Generar nómina** y abre el periodo confirmado.
2. [P] Pulsa **Emitir a la DIAN** para todo el periodo, o por empleado desde su fila.
3. [P] Revisa el estado en **Nómina › Obligaciones › Nómina electrónica**: Aceptado, Esperando respuesta, Rechazado, No se pudo enviar o Sin emitir.
4. [P] Para corregir un documento ya aceptado, emite una **nota de ajuste** (reemplazo o eliminación).

## Resultado
- [P] Cada empleado tiene su documento de nómina electrónica aceptado por la DIAN.

## Si algo falla
- [P] Si no ves Nómina electrónica, la empresa no tiene habilitado ese tipo de documento: escribe a soporte.
- [P] Si el módulo está pausado por saldo, recarga para poder emitir.
- [P] Puedes activar en Configuración que se emita sola al confirmar la nómina.
