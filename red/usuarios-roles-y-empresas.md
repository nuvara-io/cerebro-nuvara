---
id: usuarios-roles-y-empresas
titulo: Usuarios, roles y varias empresas
publico: P
actualizado: 2026-11-02
fuentes:
  - conocimiento/producto.md#tipos-de-cuenta-y-roles-disponible
  - conocimiento/flujos/01-onboarding-configuracion-inicial.md#varias-empresas-usuarios-y-roles
  - conocimiento/preguntas-frecuentes.md#configuración-inicial
  - platform@5241b3430
---

# Usuarios, roles y varias empresas

Cómo se organiza una cuenta de núvara: una organización agrupa tus empresas y tu equipo, y cada persona entra con un rol que define qué ve y qué puede hacer.

## Organización y empresas
- [P] Al registrarte creas una **organización**: es tu firma o tu negocio, y ahí viven todas tus empresas.
- [P] Una **firma contable** o un contador independiente maneja varias empresas desde la misma cuenta, sin mínimo de empresas.
- [P] Cada empresa es su propio mundo: su configuración, plan de cuentas, proveedores, reglas y centros de costo van por separado.
- [P] El **saldo de créditos es de la organización** y se usa en todas sus empresas.
- [P] Cada organización es independiente: si dos firmas llevan la misma empresa, no comparten datos.

## Cómo creo otra empresa
Ruta: **Empresas › Crear Empresa**
1. [P] Abre **Empresas** en el menú lateral y elige **Crear Empresa**.
2. [P] Sigue el mismo asistente de la primera: RUT, responsabilidades, sistema contable, balance de prueba y preguntas contables.
3. [P] Para cambiar de empresa, usa el nombre de la empresa en la parte superior o **Empresas › Todas las Empresas**.
- [P] Pueden crear empresas los administradores y los operadores de la organización.

## Roles de la organización
- [P] **Administrador:** gestiona los miembros y tiene acceso a todas las empresas de la organización.
- [P] **Operador:** solo entra a las empresas que le asignes. Dentro de ellas tiene uno de dos perfiles: **Operador**, con acceso operativo (causar, editar cuentas, configurar), o **Contador**, que administra varias empresas sin gestionar miembros.
- [P] Las firmas contables tienen además un **rol de consulta** para el dueño de una empresa que atienden: solo ve la información de las empresas que le asignes.
- [P] Un auxiliar contable entra normalmente como operador con las empresas que le correspondan.

## Cómo invito a un auxiliar o a otro usuario
Ruta: **Miembros › Agregar miembro** (también en **Configuración › Miembros**)
1. [P] Pulsa **Agregar miembro**.
2. [P] Escribe nombre completo, correo electrónico y una contraseña de al menos 8 caracteres. El teléfono es opcional.
3. [P] Elige el **Rol** y, si es operador, su perfil y las **Empresas asignadas** (al menos una).
4. [P] Pulsa **Crear cuenta y agregar miembro**.
5. [P] Entrégale el correo y la contraseña a esa persona; conviene que la cambie al entrar.
- [P] Solo un administrador puede agregar miembros.

## Editar, suspender o quitar un miembro
- [P] En **Miembros** cada persona tiene las acciones **Editar**, **Suspender** (o **Reactivar**) y **Eliminar**.
- [P] Con **Editar** cambias su rol o las empresas a las que entra.
- [P] **Suspender** le corta el acceso sin borrarlo; puedes reactivarlo después.
- [P] La propiedad de la organización se puede transferir a otro miembro.
- [P] Varias personas pueden trabajar en la misma empresa a la vez.

## Para el equipo
- [C] La cantidad de miembros depende del plan de la organización: si llega al tope, la plataforma no deja agregar más. No prometas "usuarios ilimitados" sin confirmarlo con el equipo.
- [I] El tope sale de `maxUsersPerCompany` del plan; el valor de respaldo en el código es 2 y se cuenta por organización. `conocimiento/` dice "los que quieras": gana el código.
- [I] No se envía correo de invitación: el administrador crea la cuenta con contraseña (`POST /api/users`). El flujo 01 decía que no llega correo; coincide.
- [I] Suspender ya existe en **Miembros**; `producto.md` todavía lo da como "próximamente".
- [I] La interfaz nombra el rol de consulta con la palabra que la marca evita (y la pestaña de firmas en Configuración igual). En el chat se dice rol de consulta o dueño de la empresa.
- [I] Existen roles personalizados por empresa (`company-roles`, con permisos por recurso) y las rutas `settings/roles`, `settings/users`, `settings/external-accountants` y `settings/shared-access`, pero el grupo "Miembros" se quitó del menú de configuración de la empresa: hoy el acceso se gestiona solo desde la organización.
- [I] El menú **Miembros** se oculta si la organización maneja una sola empresa o si el plan trae `users: false`; en ese caso queda en el menú de la cuenta como **Usuarios**.
