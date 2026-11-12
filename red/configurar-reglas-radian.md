---
id: configurar-reglas-radian
tipo: procedimiento
titulo: Configurar las reglas RADIAN
tema: eventos-radian
publico: P
estado: verificado en el código
ruta: [Facturación Electrónica, Ajustes, Configuración, Reglas RADIAN]
url: /{organización}/companies/{empresa}/electronic-billing/configuracion
siguiente: revisar-cumplimiento-radian
actualizado: 2026-11-03
fuentes:
  - platform@5241b3430
---

# Configurar las reglas RADIAN

## Antes de empezar
- [P] RADIAN está activo en la empresa.
- [P] Tu rol es administrador, operador o contador.
- [P] Las reglas no vienen encendidas: **cada empresa habilita las recomendadas o crea las suyas.**

## Pasos
1. [P] Entra a **Facturación Electrónica › Ajustes › Configuración** y abre **Reglas RADIAN**.
2. [P] Para empezar rápido, pulsa **Reglas recomendadas**: crea el acuse de recibo (030) cuando llega la compra y el recibo del bien o servicio (032) cuando apruebas la causación, sin espera.
3. [P] Para una regla propia, pulsa **Nueva regla**:
   - **NIT del proveedor:** vacío para todos los proveedores, o el NIT de uno. La regla del proveedor gana sobre la general.
   - **Evento:** acuse (030), recibo (032) o aceptación expresa (033). El reclamo no se automatiza.
   - **Contar la espera** (solo para el recibo): desde que se aprueba la causación (recomendado) o desde el acuse.
   - **Espera:** de 0 a 30 días hábiles.
   - **Aplicar también a compras pendientes:** incluye las de los últimos 60 días.
4. [P] Para que un proveedor no reciba un evento, crea una regla con su NIT y marca **Excepción: no enviar este evento**.
5. [P] Deja encendido el interruptor **Automatización RADIAN activa**.

## Lo que hay que saber
- [P] La aceptación expresa automática se envía solo si no hay reclamo y dentro de los 3 días hábiles siguientes al recibo; piénsalo bien antes de ponerla para todos los proveedores.
- [P] Solo aplica a compras a crédito con CUFE. Con el plan anual de RADIAN los eventos son ilimitados.
- [I] Hoy la plataforma todavía descuenta cada evento del saldo y, sin saldo, lo reintenta más tarde; cambia cuando se implemente el plan anual (11/11/2026).
- [P] Una regla que falla 3 veces queda **Auto-pausada**: revisa la causa y vuelve a encenderla.
