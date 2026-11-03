---
id: excluir-proveedor
tipo: procedimiento
titulo: Excluir un proveedor para que sus facturas no entren
tema: papelera-y-limpieza
publico: P
estado: verificado en el código
ruta: [Administración, Configuración, Bloqueos, Proveedores excluidos, Excluir]
url: /{organización}/companies/{empresa}/settings/proveedores-excluidos
siguiente: papelera-y-limpieza
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/17-papelera-bloqueo-y-limpieza-de-facturas.md
  - platform@5241b3430
---

# Excluir un proveedor para que sus facturas no entren

## Antes de empezar
- [P] Llegan facturas de compra que no son de tu empresa (por ejemplo, compras personales) y no quieres gastar créditos en ellas.
- [P] La exclusión es **por empresa**: excluir un proveedor aquí no afecta a tus otras empresas.
- [P] Lo puede hacer el usuario desde Configuración; no hace falta pedírselo al asesor.

## Pasos
1. [P] Entra a **Administración › Configuración › Bloqueos › Proveedores excluidos**.
2. [P] En **Proveedor**, busca y elige el proveedor de tu lista. Los que ya excluiste aparecen marcados como «ya excluido».
3. [P] Si el proveedor todavía no tiene facturas en núvara, pulsa **No está en la lista — escribir el NIT** y escribe su NIT.
4. [P] Si quieres, escribe el **Motivo (opcional)** para que tu equipo sepa por qué se excluyó.
5. [P] Pulsa **Excluir**.

## Resultado
- [P] Aparece «Proveedor excluido»: sus próximas facturas de compra dejan de entrar por la DIAN y por el correo.
- [P] El proveedor queda en la tabla con su NIT, su motivo y la columna **Omitidas**, que cuenta las facturas que se han saltado.
- [P] Las facturas de ese proveedor que ya estaban no se tocan: si quieres sacarlas, elimínalas desde Causaciones.
- [P] Ese proveedor deja de salir como faltante en la comparación con la DIAN.

## Si algo falla
- [P] **Omitidas** sigue en «Ninguna todavía» después de un tiempo: revisa que el NIT esté bien escrito.
- [P] Para que el proveedor vuelva a entrar, pulsa **Quitar** en su fila. Las facturas que no entraron mientras estuvo excluido no vuelven solas: sincroniza otra vez ese periodo.
- [P] Si lo que no quieres son las ventas de la empresa, no es esta pantalla: usa **Bloqueos › Ingesta de ventas**.
