---
id: crear-cuenta-bancaria
tipo: procedimiento
titulo: Crear una cuenta bancaria
tema: tesoreria
publico: P
estado: verificado en el código
ruta: [Tesorería, Bancos y cajas, Cuentas, Nueva cuenta]
url: /{organización}/companies/{empresa}/treasury
siguiente: conciliacion-bancaria
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/21-conciliacion-bancaria-y-pagos-a-proveedores.md
  - platform@6fdbceaba
---

# Crear una cuenta bancaria

## Antes de empezar
- [P] Tesorería está activa.
- [P] Tienes el banco, el número de cuenta y la cuenta del PUC (grupo 11) que la representa.

## Pasos
1. [P] Entra a **Tesorería › Bancos y cajas › Cuentas** y pulsa **Nueva cuenta**.
2. [P] Escribe el **banco**, un **alias** y el **número de cuenta**.
3. [P] Elige el **tipo de cuenta** (corriente, ahorros, caja menor o dólares) y la **moneda**. Marca si es la cuenta por defecto.
4. [P] **Vincula la cuenta PUC** (grupo 11). Si no existe el auxiliar, lo puedes crear ahí mismo. Pulsa **Crear cuenta**.
5. [P] En el aviso de saldo, pulsa **Registrar** y escribe el **saldo inicial** con su fecha.

## Resultado
- [P] La cuenta muestra su saldo real y queda lista para cobros, pagos y conciliación.

## Si algo falla
- [P] Para corregir un saldo inicial ya registrado, la plataforma pide confirmar con un motivo.
- [P] Si la nómina debe registrar sus pagos sola, marca una cuenta en pesos como **cuenta por defecto**.
