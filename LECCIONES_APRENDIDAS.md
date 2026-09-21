# Lecciones aprendidas

Informe de cierre del curso de Ingeniería de Requisitos (UPB). Recoge lo que dejaron los tres casos del portafolio y responde las tres preguntas de la Misión 11. Cada afirmación remite a un archivo de este repositorio.

| Ficha del documento | |
|---|---|
| **ID único** | DOC-LECCIONES |
| **Versión** | 1.0 |
| **Estado final** | Entregado |
| **Autor o revisor** | Santiago Maya Horta |
| **Fecha de cierre** | 2026-09-21 |
| **Artefactos relacionados** | C1-BACKLOG, C1-RFC-B1, C1-IMPACT, C2-SRS, C2-TC, DOC-VAL, TOOL-MATRIZ |

## 1. ¿Qué funcionó bien y debería repetirse?

**Derivar requisitos y pruebas de un modelo, con IDs que se citan entre sí (caso 2).** Del diagrama de clases del simulador salieron 13 requisitos funcionales y 5 no funcionales, y cada caso de prueba dice qué requisitos verifica: TC-01 cubre RF-05 y RF-08, TC-05 cubre RNF-01. Cuando un requisito cambie, se sabe qué prueba revisar. Se debe repetir porque convierte «probar» en algo que se puede rastrear. *Evidencia:* `caso2-simulador/`.

**Prototipar para validar los requisitos, no solo para mostrarlos (caso 3).** Construir el prototipo obligó a cruzar la historia clínica con el catálogo de dietas y sacó huecos que el enunciado no mostraba: el catálogo de alimentos no tenía atributo de alérgenos (D-01, crítico) y nadie había definido qué pasa cuando ninguna dieta es segura (D-03). Se debe repetir porque los defectos de requisitos salen antes de escribir el código definitivo. *Evidencia:* sección 4 de `caso3-dietas/docs/Documento_de_validacion.md`.

**Referenciar IDs reales entre artefactos (caso 1).** El análisis de impacto de las RFC y el Impact Mapping citan las historias HU1–HU10 y las tareas T1–T12 del backlog, en lugar de nombres genéricos. Así se ve qué se toca al aprobar un cambio. *Evidencia:* `caso1-aerea/`.

**Automatizar la trazabilidad y probar la lógica crítica (U4A1).** La matriz se genera desde las etiquetas `@req` del código y desde las pruebas, y no se puede desactualizar en silencio. Las 13 pruebas automáticas protegen el requisito más riesgoso, el cruce de alergias (RF-A3): al dañar a propósito esa función, tres pruebas fallaron. *Evidencia:* `trazabilidad/` y `caso3-dietas/tests/`.

**Un solo repositorio con metadatos en cada artefacto.** Con ID, versión, estado final, autor, fecha de cierre y relacionados, alguien que no participó puede entender el contexto sin preguntar. *Evidencia:* los `METADATOS.md` de cada caso.

## 2. ¿Qué falló y cómo se detectó tarde?

| Qué falló | Cómo se detectó | Por qué tarde |
|---|---|---|
| **Criterios de aceptación que no se podían medir** (caso 3): «inequívoca», «completa» y «en un único paso» no tienen número; alergia, alérgeno e incompatibilidad se usaban con sentidos distintos (defectos D-02 a D-06) | Al aplicar la lista de verificación IEEE 830 / ISO 29148 sobre el prototipo ya construido | Se escribieron sin revisarlos contra esa lista; solo CA4 («menos de 90 s») era medible desde el principio |
| **Trazabilidad rota sin que nadie lo notara** (caso 3): un archivo de código sin requisito (`Login.jsx`), requisitos RF1–RF5 citados en el código pero no definidos en el documento, RNF-1 ausente en la pantalla «Objetivo», y un criterio nuevo (CA5) propuesto sin requisito, código ni pruebas | Con la hoja «Auditoría» que produce el script de la matriz | La tabla de trazabilidad hecha a mano parecía completa (la lista IEEE marcaba «Trazable: cumple»), pero no se contrastó con el código hasta automatizarla, en la última unidad |
| **Cambio propuesto sin gestión de cambios** (caso 3): el documento de validación propone reformular los criterios CA1–CA5, pero no existe una RFC que lo registre | La misma auditoría | La gestión de cambios se practicó en el caso 1 y no se aplicó a los otros casos |
| **Documentación y datos desalineados** (caso 3): el paso 3 de la pantalla «Objetivo» dice que las dietas de diabetes son «una segura, una con incompatibilidad y una con alergia», pero los datos dan una segura y dos con alergia | Al ejecutar los datos reales en las pruebas | Se redactó el texto de la pantalla sin verificarlo con los datos |
| **Métricas automáticas aceptadas sin comprobarlas**: la plantilla de la matriz traía fórmulas de cobertura que siempre daban 100 % y una alerta de «sin caso de prueba» que contaba mal | Al recalcular la plantilla con datos reales | Se confió en la plantilla en lugar de probarla con un caso conocido |
| **RFC hechas sin apoyarse en los artefactos previos** (caso 1): el análisis de impacto y el diagrama se hicieron primero con IDs genéricos y con menos campos de los que pedía la rúbrica | Por la indicación del profesor de que debían apoyarse en el backlog y la Vision Board, y al releer la rúbrica | Se empezó a llenar antes de leer los criterios y de reunir los artefactos previos |
| **Metadatos y versiones tardíos**: los artefactos no tenían ID ni versión hasta la Unidad 4 (las fechas de cierre hubo que reconstruirlas), y el repositorio del prototipo tuvo un solo commit; al subir carpetas por la web de GitHub se aplanó la estructura y falló el despliegue en Vercel | Al pedir la rúbrica de la Unidad 4 y al fallar el despliegue | No se usó Git desde el inicio ni se registraron los metadatos al crear cada artefacto |

## 3. ¿Qué haríamos diferente desde el inicio?

1. **Asignar ID único y una ficha de metadatos a cada artefacto el día que se crea**, no al final del curso.
2. **Escribir criterios de aceptación medibles** (con número y momento de medición) y un glosario de términos antes de prototipar, y pasarlos por la lista IEEE 830 / ISO 29148 al escribirlos.
3. **Etiquetar el código y las pruebas con el ID del requisito desde el primer commit** y generar la matriz en cada entrega, no solo al cierre.
4. **Registrar una RFC cada vez que se proponga cambiar un requisito o un criterio**, en cualquier caso.
5. **Usar Git desde el primer día**, con commits pequeños y mensajes claros, y nunca subir carpetas por la interfaz web.
6. **Ejecutar la prueba con usuarios antes de cerrar el documento de validación.** Al escribir este informe, los escenarios manuales del caso 3 (TC-M1 a TC-M5, incluida la prueba con usuarios de RNF-1) siguen pendientes y por eso los requisitos figuran como «Implementado» y no como «Verificado».
7. **Leer la rúbrica completa antes de empezar cada artefacto** y comprobar cada criterio al terminar.

## Dónde está la evidencia

| Tema | Archivo |
|---|---|
| Matriz de trazabilidad y auditoría | `trazabilidad/Matriz_de_trazabilidad.xlsx` |
| Cómo se genera la matriz | `trazabilidad/generar_matriz.py` |
| Defectos y validación de requisitos | `caso3-dietas/docs/Documento_de_validacion.md` |
| Pruebas automáticas y manuales | `caso3-dietas/tests/` |
| RFC e Impact Mapping | `caso1-aerea/` |
| SRS y casos de prueba del simulador | `caso2-simulador/` |
