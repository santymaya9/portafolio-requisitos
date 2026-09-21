# Metadatos — Caso 1: Academia de Operaciones Aéreas

Cada artefacto lleva los seis metadatos que exige la rúbrica: **ID único, versión, estado final, autor o revisor, fecha de cierre y artefactos relacionados**. La columna «Archivo» es la ruta dentro de esta carpeta. El script `trazabilidad/generar_matriz.py` lee esta tabla y la incluye en el catálogo de la matriz, y avisa si falta un archivo o un dato. Estados usados: ver el README de la raíz.

| ID | Artefacto | Tipo | Archivo | Versión | Estado final | Autor o revisor | Fecha de cierre | Artefactos relacionados |
|---|---|---|---|---|---|---|---|---|
| C1-VB | Product Vision Board | Documento | `Product_Vision_Board.docx` | 1.0 | Entregado | Santiago Maya Horta | pendiente | C1-BACKLOG |
| C1-BACKLOG | Product Backlog priorizado (HU1–HU10, T1–T12) | Documento | `Product_Backlog_Priorizado.docx` | 1.0 | Entregado | Santiago Maya Horta | pendiente | C1-VB |
| C1-RFC-A1 | RFC-A1 · Parámetro de clima extremo | Documento | `RFC-A1_Clima_Extremo.docx` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-09 | C1-BACKLOG, C1-VB |
| C1-RFC-A2 | RFC-A2 · Notificaciones automáticas | Documento | `RFC-A2_Notificaciones.docx` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-09 | C1-BACKLOG, C1-VB |
| C1-RFC-B1 | RFC-B1 · Nuevo criterio de puntuación | Documento | `RFC-B1_Criterio_Puntuacion.docx` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-09 | C1-BACKLOG, C1-VB, C1-IMPACT |
| C1-RFC-B2 | RFC-B2 · Fórmula híbrida (simulación + vuelo real) | Documento | `RFC-B2_Formula_Hibrida.docx` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-09 | C1-BACKLOG, C1-VB |
| C1-RFC-C1 | RFC-C1 · Predicción con IA | Documento | `RFC-C1_IA_Predictiva.docx` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-09 | C1-BACKLOG, C1-VB |
| C1-RFC-C2 | RFC-C2 · Alineación normativa NAC-2026 | Documento | `RFC-C2_Alineacion_Normativa.docx` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-09 | C1-BACKLOG, C1-VB |
| C1-IMPACT | Impact Mapping de la RFC-B1 | Diagrama | `Impact_Mapping_RFC-B1.png` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-09 | C1-RFC-B1, C1-BACKLOG, C1-VB |
