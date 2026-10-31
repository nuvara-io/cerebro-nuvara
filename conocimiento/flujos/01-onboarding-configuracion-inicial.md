# Onboarding y configuración inicial de una empresa

## Objetivo
Crear la empresa en núvara y dejar el perfil contable listo para que la precausación sea precisa.

## Requisitos
- RUT de la empresa (PDF).
- **Balance de prueba por tercero** en Excel, descargado del software contable, con el rango en el que sueles causar la empresa (por ejemplo, del año en curso).
- Saber cómo maneja la empresa: proveedores, inventario, IVA, retenciones.
- Navegador Google Chrome (la extensión de la DIAN lo exige).
- Ideal: que esté presente el contador de la empresa.

## Pasos
1. Entra a la plataforma y crea tu perfil (si es una firma, el nombre de la firma centraliza todas las empresas).
2. Pulsa **Comenzar** y crea la empresa. Por cada empresa nueva repites este proceso.
3. **Sube el RUT**. La plataforma extrae los datos fiscales. Si el RUT está muy desactualizado, se puede cargar manualmente.
4. **Verifica el NIT** y la información que aparece.
5. Baja hasta **Responsabilidades tributarias** y pulsa **Revisar**: de ahí sale el **calendario tributario**. Pulsa **Confirmar** (se puede ajustar después).
6. Pulsa **Siguiente**. Elige tu software contable y **arrastra el balance de prueba por tercero**.
7. Antes de subirlo, ábrelo en tu computador y **borra las filas azules iniciales** (hasta la fila 7; los datos arrancan en la fila 8). Si no, la carga falla.
8. Pulsa **Importar datos**. La plataforma crea relaciones entre cuentas y proveedores y muestra un perfil genérico de la empresa.
9. Describe la actividad de la empresa (por ejemplo comercializadora, productora, servicios) y su actividad principal. Responde si compra bienes para reventa y si tiene compras operativas.
10. Pulsa el botón de **inteligencia artificial** para que sugiera cuentas de gasto. Elimina con la **X** las que no apliquen y pulsa **Siguiente**.
11. Define contra qué se causa a proveedores (causación, no banco) y si maneja **auxiliar por proveedor** (cuentas 22 y 23 según gasto o compra).
12. Indica si maneja inventario contable (se refiere al contable, no al de elementos) y el costo de combustible.
13. Define el **manejo del IVA**: solo descontable, mayor valor del gasto o mixto; y si las facturas tienen productos gravados y no gravados (puede dejarse en **automático**).
14. Pulsa **Guardar configuración** → **Terminar** → **Personalización** → **Continuar**.
15. Conecta el correo o pulsa **Saltar** si lo harás todo desde la DIAN.
16. Ingresa el documento del representante (NIT o cédula), **Guardar**, **Siguiente** e **Ir a dashboard**.

## Errores comunes
- No quitar las filas azules del balance de prueba.
- No tener el balance de prueba a la mano al empezar la sesión (retrasa 10 a 15 minutos).
- Abrir la plataforma en un perfil de Chrome y la DIAN en otro: la extensión no aparece.
- Elegir mal el manejo del IVA por falta de claridad contable (ver `por-confirmar.md`).

## Variantes observadas
- **Empresa nueva sin terceros previos:** se opera con el plan de cuentas (PUC) y la plataforma aprende desde cero; no hay balance de prueba por tercero.
- **Cuentas auxiliares que no se importaron:** repite la importación copiando y pegando desde Excel en la categoría correspondiente; algunas cuentas (costos, retenciones) se crean a mano.
- **Si el IVA no se descuenta:** se configura como gasto con la cuenta de IVA no descontable (la tercera opción) o como "mayor valor del gasto".
- **Compra contra banco o contra cuentas por pagar:** solo se refleja como pagada de inmediato si se enruta a una cuenta bancaria; la opción con proveedores sigue disponible.
- **Firma con varias empresas:** agrega miembros sin costo y una firma puede transferir la propiedad de la cuenta después.
- **Alertas de seguridad de Google** al iniciar: se omiten desde la configuración avanzada del navegador.
- **Fecha de inicio** de recuperación: elige la fecha en que realmente quieres empezar a causar (por ejemplo, desde fines de un mes) para no traer facturas ya contabilizadas.
- **Tutorial integrado** en la esquina superior derecha de la sección de empresas.

## Tips del asesor
- "Por cada empresa que vayas a crear, haces este proceso."
- Se puede cambiar el manejo del IVA y casi toda la configuración después de empezar.
- Si quien opera no es contador, agenda una reunión con el contador de la empresa antes de definir IVA y cuentas.
- Si el IVA no está claro, usar temporalmente "mayor valor" y revisar luego.
