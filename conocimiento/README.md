# Cerebro de conocimiento de núvara

Base de conocimiento construida a partir de notas de capacitaciones reales (notas automáticas de reuniones con transcripción). Sirve para escribir guiones de tutoriales, responder dudas y entrenar a quien acompañe a nuevos usuarios.

## Fuentes (genéricas)

Se analizaron 9 sesiones de trabajo con usuarios de núvara:

| Tipo de sesión | Cantidad |
|---|---|
| Capacitación a una firma contable (varios contadores y auxiliares) | 3 |
| Capacitación a un contador independiente con varias empresas | 4 |
| Capacitación a un empresario / administrador sin formación contable | 1 |
| Capacitación a un equipo administrativo de una empresa con alto volumen de facturas | 1 |

Además hubo una grabación sin transcripción útil y una reunión sobre otro producto (gestión documental), que se descartó por no tratar de núvara.

### Segunda tanda (reuniones de Drive)

Se revisaron 103 carpetas de reunión; 95 tenían notas legibles. Se incluyeron **67** y se descartaron 36 (ver `fuentes-procesadas.md`).

| Tipo (incluidas) | Cantidad |
|---|---|
| Capacitaciones de usuarios (incluye módulo de nómina) | 14 |
| Demostraciones y reuniones comerciales | 8 |
| Sesiones de soporte (incluye nómina) | 38 |
| Reuniones internas de producto o modelo comercial | 7 |

| Tipo (no incluidas) | Cantidad |
|---|---|
| Otro producto | 7 |
| Otros temas (personales, societarios) | 4 |
| Gestión interna sin contenido del producto | 14 |
| Notas vacías | 3 |
| Solo grabación (notas inaccesibles sin iniciar sesión) | 8 |

Total acumulado de fuentes con contenido analizado: 9 + 67 = **76**.

Las sesiones duran entre 35 minutos y más de 2 horas y son pantalla compartida: el asesor guía al usuario mientras este opera su propia empresa en la plataforma.

## Cómo está organizado

| Archivo | Para qué sirve |
|---|---|
| `producto.md` | Qué hace núvara, menús, pantallas, estados y créditos |
| `flujos/` | Un archivo por proceso enseñado, paso a paso |
| `preguntas-frecuentes.md` | Preguntas reales (anonimizadas) y respuestas dadas |
| `objeciones-y-dolores.md` | Dudas, frenos y dolores, y cómo se abordaron |
| `glosario.md` | Términos contables, tributarios y de la plataforma |
| `capacitacion.md` | Estructura de una sesión; plantilla de guion |
| `ideas-tutoriales.md` | Videos priorizados según lo que más cuesta a los usuarios |
| `por-confirmar.md` | Contradicciones, datos dudosos y posibles errores del producto |
| `demostraciones-y-ventas.md` | Cómo se hace una demostración en vivo, argumentos, preguntas y objeciones de prospectos |
| `fuentes-procesadas.md` | Registro de reuniones ya procesadas, para no repetir trabajo |

### Flujos disponibles

1. `flujos/01-onboarding-configuracion-inicial.md`
2. `flujos/02-conectar-dian-token-extension.md`
3. `flujos/03-conectar-correo.md`
4. `flujos/04-importar-y-filtrar-facturas.md`
5. `flujos/05-causar-y-revisar.md`
6. `flujos/06-correcciones-y-aprendizaje.md`
7. `flujos/07-reglas-fijas-y-centros-de-costo.md`
8. `flujos/08-aprobacion-en-bloque.md`
9. `flujos/09-proveedores-retenciones-y-autorretenedores.md`
10. `flujos/10-exportar-a-siigo-y-otros.md`
11. `flujos/11-archivo-y-comparacion-con-dian.md`
12. `flujos/12-creditos-y-recargas.md`
13. `flujos/13-notas-credito-y-documentos-soporte.md`
14. `flujos/14-ventas-retenciones-y-autorretencion.md`
15. `flujos/15-facturas-del-exterior-y-legalizacion-de-gastos.md`
16. `flujos/16-exportar-a-world-office-y-siigo-escritorio.md`
17. `flujos/17-papelera-bloqueo-y-limpieza-de-facturas.md`
18. `flujos/18-modulo-de-nomina.md`

## Regla de actualización

- Cada capacitación nueva se revisa y se vuelcan aquí solo los hechos nuevos o corregidos.
- Si un dato contradice lo ya escrito, no se borra: se agrega a `por-confirmar.md` hasta que el equipo lo valide.
- Si un comportamiento del producto cambia, se actualiza el flujo y se anota la fecha en `por-confirmar.md`.
- Los nombres de pantallas y botones se escriben como los dice el asesor; verifica contra la plataforma antes de grabar un video.

## Regla de privacidad

- Aquí no hay nombres de empresas, personas, NIT, correos, teléfonos, montos de operaciones de usuarios, proveedores ni números de factura.
- Las fuentes se citan de forma genérica ("firma contable", "empresario").
- Las preguntas de usuarios están parafraseadas.
- El texto crudo de las transcripciones **no** vive en este repositorio.

## Reglas de marca para escribir

- Escribe "núvara" en minúscula y con tilde.
- Di "usuario", no "cliente"; "plataforma", no "sistema".
- Di "créditos" (en las transcripciones aparece con otros nombres por error de transcripción).
- Nunca "IA" sola; nunca "automatizamos"; di "demostración en vivo", no "demo".
