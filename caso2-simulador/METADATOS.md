# Metadatos — Caso 2: Simulador de conducción (transmisión mecánica)

Cada artefacto lleva los seis metadatos que exige la rúbrica: **ID único, versión, estado final, autor o revisor, fecha de cierre y artefactos relacionados**. La columna «Archivo» es la ruta dentro de esta carpeta. El script `trazabilidad/generar_matriz.py` lee esta tabla y la incluye en el catálogo de la matriz. Si en el curso hiciste más artefactos de este caso (modelos UML de casos de uso, actividad o secuencia), agrega su archivo y una fila aquí. Si un artefacto no se relaciona con otro, escribe `ninguno`.

| ID | Artefacto | Tipo | Archivo | Versión | Estado final | Autor o revisor | Fecha de cierre | Artefactos relacionados |
|---|---|---|---|---|---|---|---|---|
| C2-SRS | SRS del Módulo de Transmisión Mecánica (13 RF y 5 RNF) | Documento | `SRS_Simulador_Transmision_Mecanica.docx` | 1.0 | Entregado | Santiago Maya Horta | 2026-08-13 | C2-TC |
| C2-TC | Test Case del Módulo de Transmisión (TC-01 a TC-05) | Documento | `Test_Case_Simulador_Transmision.docx` | 1.0 | Entregado | Santiago Maya Horta | 2026-08-13 | C2-SRS |
