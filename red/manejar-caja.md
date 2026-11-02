---
id: manejar-caja
tipo: procedimiento
titulo: Crear una caja y hacer el arqueo
tema: tesoreria
publico: P
estado: verificado en el código
ruta: [Tesorería, Bancos y cajas, Cajas]
url: /{organización}/companies/{empresa}/cash
siguiente: 
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/21-conciliacion-bancaria-y-pagos-a-proveedores.md
  - platform@6fdbceaba
---

# Crear una caja y hacer el arqueo

## Antes de empezar
- [P] El módulo **Caja** está activo.
- [P] Sabes quién custodia la caja y con qué cuenta contable se maneja.

## Pasos
1. [P] Entra a **Tesorería › Bancos y cajas › Cajas** y crea la caja: nombre, código, centro de costo, **custodio**, si opera con efectivo o con cuenta bancaria, **cuenta contable**, cada cuánto se liquida y se hace el arqueo, y el tope de descuadre.
2. [P] Si alguien la maneja desde el celular, agrégalo en **Operadores**.
3. [P] Para darle dinero, usa **Fondear desde el banco**.
4. [P] Para contar el efectivo, usa **Registrar arqueo**.
5. [P] Para recuperar lo gastado en una caja menor, usa **Reponer caja**.

## Resultado
- [P] La caja muestra su saldo y cada fondeo o reposición deja su asiento. Un arqueo que cuadra no genera asiento.

## Si algo falla
- [P] Si el arqueo da faltante o sobrante, la diferencia queda en una cuenta puente y un contador debe clasificarla.
