---
id: conectar-siigo
tipo: procedimiento
titulo: Conectar Siigo Nube
tema: exportacion
publico: P
estado: verificado en el código
ruta: [Administración, Configuración, Integraciones, Sistema contable externo, Conectar Siigo]
url: /{organización}/companies/{empresa}/settings/integrations
siguiente: enviar-a-siigo
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/10-exportar-a-siigo-y-otros.md
  - platform@5241b3430
---

# Conectar Siigo Nube

## Antes de empezar
- [P] Tienes Siigo Nube con acceso a la API. Las cuentas gratuitas de Siigo no lo permiten: en ese caso exporta por archivo.
- [P] En Siigo generaste las credenciales de la API: correo, **Access Key** y **Partner ID**. núvara nunca te pide la contraseña.
- [P] Cada empresa necesita su propia conexión.

## Pasos
1. [P] Entra a **Administración › Configuración › Integraciones** y, en **Sistema contable externo**, elige **Siigo Nube**.
2. [P] Pulsa **Conectar Siigo**.
3. [P] Escribe **Correo**, **Access Key API** y **Partner ID** y guarda. núvara prueba la conexión sola.
4. [P] Pulsa **Sincronizar catálogos** para traer cuentas, impuestos, terceros y comprobantes de Siigo.
5. [P] Sigue la guía de configuración: cuentas por pagar, retenciones, comprobantes de notas crédito y débito, inventario, IVA no descontable, cuentas de IVA, cuentas contables y ajustes del envío.

## Resultado
- [P] Aparece «Credenciales Siigo guardadas y verificadas» y en el Archivo ya puedes **Enviar a Siigo**.

## Si algo falla
- [P] «Las credenciales de Siigo vencieron o no son válidas»: genera unas nuevas en Siigo y pulsa **Editar**.
- [P] Usa **Probar conexión** para revisarla. **Desconectar** la apaga sin borrar las credenciales.
- [P] Revisa que la empresa conectada en Siigo sea la correcta antes de enviar.
