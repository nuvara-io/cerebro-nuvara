---
id: onboarding
titulo: Primeros pasos y configuración inicial
publico: P
actualizado: 2026-11-02
conexiones:
  - conectar-dian               # el paso de conexión DIAN del asistente
  - conectar-correo             # el paso de correo del asistente
  - usuarios-roles-y-empresas   # crear otra empresa o sumar a tu equipo
fuentes:
  - conocimiento/flujos/01-onboarding-configuracion-inicial.md
  - conocimiento/preguntas-frecuentes.md#configuración-inicial
  - conocimiento/capacitacion.md#antes-de-la-sesión-los-cuatro-pasos-iniciales
  - conocimiento/por-confirmar.md#interfaz-registro-y-estabilidad
  - platform@5241b3430
---

# Primeros pasos y configuración inicial

Cómo empiezas en núvara: te registras, activas tu cuenta y configuras cada empresa con un asistente por pasos. Se hace una vez por empresa y todo se puede cambiar después.

## Qué necesitas antes de empezar
- [P] El **RUT** de la empresa en PDF, limpio y sin contraseña.
- [P] El **balance de prueba por tercero** en Excel o CSV, exportado de tu programa contable (Siigo, World Office, Helisa, TNS u otro), con el NIT del tercero en cada cuenta.
- [P] Si lo tienes, el plan de cuentas (PUC) completo, y saber cuántos dígitos usa el contador (seis u ocho).
- [P] Para traer facturas: acceso al correo donde llegan y la cédula del representante legal, que es la que pide la DIAN.
- [P] Google Chrome (o un navegador basado en Chromium) con un perfil normal, sin modo incógnito, si vas a usar la extensión de la DIAN.
- [P] Ideal: que esté el contador de la empresa para las preguntas de IVA, retenciones y cuentas.

## Cómo te registras y activas la cuenta
1. [P] Entra a núvara y elige registrarte, con tu correo y una contraseña o con tu cuenta de Google.
2. [P] Escribe el **nombre de tu organización**: ahí se agrupan todas las empresas que manejes.
3. [P] **Activa la cuenta** con la recarga inicial en tu saldo de créditos. Si te dieron un código de activación, lo escribes en **Tengo un código**.
4. [P] Entras a la bienvenida, con un video corto que puedes repetir cuando quieras.
- [C] Con un código de activación la cuenta entra como **prueba**: trae un crédito de bienvenida para causar un número limitado de facturas y no incluye la extensión de la DIAN. Cuando se acaba, la plataforma pide recargar para habilitar la cuenta.

## Pasos del asistente para crear una empresa
Ruta: **Empresas › Crear Empresa** (si manejas una sola empresa, el asistente arranca solo después del registro).
1. [P] **Bienvenida:** repasa los requisitos.
2. [P] **RUT y Tributaria:** sube el RUT; la plataforma lee razón social, NIT, actividad y responsabilidades. Corrige lo que salga mal.
3. [P] **Responsabilidades tributarias:** deja solo las que tiene la empresa. De ahí sale su calendario tributario.
4. [P] **Sistema contable:** elige el programa contable que usas (Siigo, World Office u otro).
5. [P] **Plan Contable:** sube el balance de prueba por tercero y elige el nivel de cuentas a importar (se sugiere auxiliar, de 8 dígitos). La plataforma reconoce los formatos de Siigo y World Office.
6. [P] **Agente contable:** responde las preguntas contables (contrapartida de compras, IVA, retenciones, inventario, tipo de empresa).
7. [P] **Correo IMAP** y **Conexión DIAN:** conecta de dónde llegan las facturas. Ambos pasos se pueden omitir y hacerse después en Integraciones. Al final verás **Listo**.

## Primeros pasos después de crear la empresa
- [P] Orden recomendado: configuración contable, luego traer las facturas (correo y DIAN) y al final conectar el programa contable.
- [P] Causa primero un par de facturas de prueba, compara bases, IVA y total con la original, ajusta y solo después causa el lote grande.
- [P] Elige una **fecha de inicio** para no traer facturas que ya contabilizaste.
- [P] En las cuentas de prueba aparece el panel **Primeros pasos** con tres tareas: **Configura tu empresa**, **Importa tus facturas** y **Causa tu primera factura**, cada una con su botón **Mostrar cómo**.

## Balance de prueba y plan de cuentas
- [P] El balance de prueba por tercero es la base: de ahí núvara toma las cuentas, los proveedores y la relación entre proveedor y cuenta para preparar las causaciones.
- [P] Debe traer el NIT de cada tercero. Sin NIT solo se importan unas pocas cuentas.
- [P] Si la carga falla, abre el archivo y borra las filas de encabezado y subtotales.
- [P] El PUC se importa en el plan de cuentas de la empresa: parte del PUC base, de un balance o pega tus cuentas desde Excel. Debe coincidir el número de cuenta con tu programa contable.
- [P] Si cambias el balance o el plan después, núvara no aprende solo las cuentas nuevas: úsalas en correcciones o reglas.

## Se puede cambiar después
- [P] Casi toda la configuración, IVA incluido, se cambia en **Administración › Configuración** (General, Tributaria, Operación, Integraciones), incluso después de empezar a causar.
- [P] Lo ya causado y aprobado queda igual; los cambios aplican a las facturas nuevas.
- [P] Si cambió el RUT de la empresa, actualiza los datos desde **Configuración › General**.

## Errores comunes al empezar
- [P] **El RUT no se lee:** PDF borroso, escaneado o con contraseña. Descarga uno limpio de la DIAN.
- [P] **Falla la carga del balance:** filas de encabezado o subtotales, o un balance sin NIT.
- [P] **Nombres raros o errores al importar:** desactiva el traductor del navegador.
- [P] **Trabajas en la empresa equivocada:** confirma arriba cuál empresa tienes abierta.
- [C] Si el registro o la carga del RUT se traban, recarga la página y avisa a soporte: en 2026 hubo fallas intermitentes en ese paso.

## Para el equipo
- [I] En el código, el paso **Plan Contable** del asistente y el **Agente contable** son opcionales, y el recorrido de prueba dice que el PUC es "recomendado, no obligatorio". `conocimiento/` lo presenta como requisito; para causar bien sigue siendo lo recomendado.
- [I] El registro ya no espera aprobación: la organización se crea y pasa por `/activar` (recarga inicial o código) antes de entrar. La organización nace multiempresa por defecto.
- [I] En prueba (`planFeatures.dian_extension = false`) la opción **Extensión DIAN** no aparece en Acciones; se importa con **Importar XML/ZIP de la DIAN**.
- [I] El saldo es de la organización, no de cada empresa (la billetera de la empresa redirige a Cuenta). El flujo 01 dice que cada empresa tiene su propio saldo: gana el código.
