---
id: embudo-de-adquisicion
titulo: Embudo de adquisición
publico: C
actualizado: 2026-11-03
conexiones:
  - onboarding              # lo que ve el usuario al registrarse
  - demostracion-en-vivo    # la etapa que más cierra
  - campanas-de-activacion  # el código que abre la prueba
  - precios                 # la recarga inicial
fuentes:
  - conocimiento/demostraciones-y-ventas.md#cierre-típico
  - conocimiento/demostraciones-y-ventas.md#posicionamiento-y-público
  - platform@5241b3430     # registro, activación, prueba y embudo, verificado el 03/11/2026
---

# Embudo de adquisición

El camino de un prospecto desde que ve una pieza hasta que su cuenta queda habilitada, y dónde se mide cada paso.

## Etapas
1. [C] **Contacto:** una pieza, un anuncio, el sitio o un correo de campaña lo llevan al WhatsApp del asesor o a un enlace de registro.
2. [C] **Demostración en vivo** (opcional, pero es la que más cierra): diagnóstico, qué hay hoy y qué está en desarrollo, crear la empresa y ver la causación con sus facturas.
3. [C] **Registro** en `app.nuvara.com.co/signup`: nombre, correo y contraseña, o Google. Después nombra su organización. El registro es abierto: no hay que pedir acceso.
4. [C] **Activación** en **Activa tu cuenta**: paga la **recarga inicial**, que es el mínimo mensual ($80.000), por Wompi, Bre-B o QR. Si pide capacitación, paga $230.000: $150.000 de la capacitación y esos $80.000 de saldo. Si tiene un código, lo escribe en **Tengo un código** y entra a la **prueba** sin pagar.
5. [C] **Prueba:** causa con el crédito de bienvenida (por defecto, 20 facturas) en una sola empresa, con hasta 20 facturas traídas del correo y sin la extensión de la DIAN. La guía **Primeros pasos** lo acompaña: configurar la empresa, importar facturas y causar la primera.
6. [C] **Habilitación:** cuando se acaba el crédito, la plataforma le muestra "Se acabó tu prueba gratis" con el botón **Habilitar mi cuenta**. Al recargar al menos el mínimo mensual, la cuenta pasa sola al plan de mínimo mensual, conserva su saldo y desbloquea la extensión.
7. [C] **Capacitación y piloto:** si la pidió, se agenda la capacitación y se empieza con una empresa antes de pasar las demás.

## Qué cuenta como cuenta activa
- [C] Una organización está **activa** cuando alguna de sus empresas causó al menos 2 facturas en un mes.

## Dónde se mide
- [I] **Plataforma › Panel**, pestaña **Retención y activación**, sección **Embudo de activación** (solo administradores): Organizaciones creadas → Crearon una empresa → Cargaron facturas → Causaron su primera factura → Llegaron a estar activas. Tiene rangos de 3, 6 y 12 meses o todo, y la lista de **Organizaciones atascadas** con el correo del dueño para hacerles seguimiento.
- [I] Por campaña, en **Códigos de activación**: Canjes → Causaron → Crédito agotado → Habilitadas. Por correo: Contactos → Enviados → Entregados → Registrados.
- [I] **Adopción de usuarios:** activos en 7 y 30 días e inactivos hace más de 30 días.
- [I] Ningún tablero separa por fuente, por UTM ni entre prueba y pago.

## Para el equipo
- [I] Quedan fuera de la activación el personal de núvara y las organizaciones de contador externo.
- [I] La pantalla de activación puede mostrar un botón para agendar la demostración por WhatsApp si se configura su enlace en los parámetros de cobro. Hoy ese botón dice "demo": por marca debería decir "demostración en vivo".
- [I] La recarga inicial ($80.000, el mínimo mensual) no es la recarga mínima de la billetera ($70.000), que aplica a las recargas siguientes.
