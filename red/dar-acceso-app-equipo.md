---
id: dar-acceso-app-equipo
tipo: procedimiento
titulo: Darle acceso a la app a tu equipo
tema: app-movil
publico: P
estado: verificado en el código
ruta: [Tesorería, Bancos y cajas, Cajas, Operadores]
url: /{organización}/companies/{empresa}/cash
siguiente: manejar-caja
actualizado: 2026-11-04
fuentes:
  - platform@feat/fe-radian-precio-por-evento (apps/web, apps/api)
---

# Darle acceso a la app a tu equipo

## Antes de empezar
- [P] Para un operador de caja, el módulo **Caja** está activo y la caja ya existe.
- [P] Para un empleado de Nómina, su ficha tiene correo.

## Pasos
1. [P] **Operador de caja:** entra a **Tesorería › Bancos y cajas › Cajas › Operadores**, crea la persona con su correo y una clave temporal, y asígnale sus cajas.
2. [P] **Empleado de Nómina:** entra a **Nómina › Personal**, abre su ficha y, en **Acceso a la app**, pulsa **Dar acceso a la app**.
3. [P] En la ficha eliges qué hace: **jefe de área** con su equipo, **operador de caja** con sus cajas, o las dos.
4. [P] Entrégale el correo y la clave temporal. Si su ficha tiene teléfono, se los puedes enviar por WhatsApp.
5. [P] Si debe facturar desde la app, habilítalo en **Facturación electrónica** y elige sus documentos.

## Resultado
- [P] La persona entra a la app y solo ve lo que le asignaste. No ve el resto de la empresa.

## Si algo falla
- [P] Si el correo ya tiene cuenta, por ejemplo porque opera caja en otra empresa, la plataforma ofrece vincular esa cuenta.
- [P] Si un empleado se retira, su acceso se suspende solo. Si vuelve, lo recupera.
- [P] Para quitar un acceso, usa **Quitar acceso a la app** en su ficha o elimínalo de **Operadores**. Sus movimientos se conservan.
