---
id: pagar-nomina
tipo: procedimiento
titulo: Pagar la nómina
tema: tesoreria
publico: P
estado: verificado en el código
ruta: [Tesorería, Cartera, Pago de nómina]
url: /{organización}/companies/{empresa}/treasury/pagos-nomina
siguiente: conciliacion-bancaria
actualizado: 2026-11-02
fuentes:
  - conocimiento/flujos/21-conciliacion-bancaria-y-pagos-a-proveedores.md
  - platform@6fdbceaba
---

# Pagar la nómina

## Antes de empezar
- [P] La nómina del periodo está confirmada.
- [P] Los empleados tienen sus datos bancarios y hay una cuenta bancaria de origen.

## Pasos
1. [P] Entra a **Tesorería › Cartera › Pago de nómina** (Pagos y desprendibles).
2. [P] Para un empleado: en la pestaña **Empleados**, abre **Registrar pago**, escribe valor, fecha y referencia, y pulsa **Registrar pago y egreso**.
3. [P] Para todos por banco: pulsa **Preparar lote bancario**, elige la cuenta de origen y revisa los datos de cada empleado.
4. [P] En la pestaña **Lotes bancarios**, sigue el lote en orden: **Revisar y aprobar**, **Descargar PAB**, súbelo al banco, **Comprobar aceptación**, **Registrar presentación**, **Registrar resultado del banco** y **Conciliar lote**.
5. [P] Pulsa **Enviar por correo a todos** para entregar los desprendibles.

## Resultado
- [P] Cada pago queda con su comprobante de egreso y los empleados reciben su desprendible.

## Si algo falla
- [P] Para comprobar la aceptación, el archivo que aceptó el banco debe ser exactamente el PAB descargado.
- [P] Si quieres que el pago se registre solo al confirmar la nómina, actívalo en la configuración de nómina; necesita una cuenta por defecto en pesos vinculada a su cuenta contable.
