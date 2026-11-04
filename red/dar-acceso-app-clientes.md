---
id: dar-acceso-app-clientes
tipo: procedimiento
titulo: Darle acceso a la app a tus clientes
tema: app-movil
publico: P
estado: verificado en el código
ruta: [Configuración, Clientes, Nuevo cliente]
url: /{organización}/settings/clients
siguiente: 
actualizado: 2026-11-04
fuentes:
  - platform@feat/fe-radian-precio-por-evento (apps/web, apps/api)
---

# Darle acceso a la app a tus clientes

## Antes de empezar
- [P] Tu organización es una firma contable y eres administrador.
- [P] La empresa de tu cliente ya está creada en tu organización.

## Pasos
1. [P] Entra a **Configuración › Clientes** y pulsa **Nuevo cliente**.
2. [P] Escribe su **nombre**, su **correo** y una **contraseña** temporal de al menos 8 caracteres.
3. [P] Elige las **empresas** que puede ver y pulsa **Crear cliente**.
4. [P] Entrégale el correo y la contraseña. La primera vez que entre a la app, la cambia por una propia.
5. [P] Si quieres que facture desde la app, habilítalo en **Facturación electrónica** y elige qué documentos puede emitir.

## Resultado
- [P] Tu cliente ve solo esas empresas: cómo van, Tesorería, Cajas y Reportes. Aprueba los pagos que programes y te envía comprobantes.

## Si algo falla
- [P] Si no ves **Clientes** en Configuración, tu organización no es una firma contable o no eres administrador.
- [P] Para quitarle una empresa, revoca el acceso en **Configuración › Clientes**.
