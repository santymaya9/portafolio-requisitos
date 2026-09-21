# Portafolio de Ingeniería de Requisitos

Repositorio con los artefactos construidos en el curso de Ingeniería de Requisitos (UPB, Programa de Ingeniería de Software) y la **matriz de trazabilidad generada automáticamente**. Actividad U4A1: Trazabilidad de un requisito.

**Autor:** Santiago Maya Horta

## Qué hay aquí

| Carpeta | Contenido | Metadatos |
|---|---|---|
| [`caso1-aerea/`](caso1-aerea) | Academia de Operaciones Aéreas: Product Vision Board, Product Backlog, 6 RFC e Impact Mapping | [`METADATOS.md`](caso1-aerea/METADATOS.md) |
| [`caso2-simulador/`](caso2-simulador) | Simulador de conducción: SRS del módulo de transmisión mecánica | [`METADATOS.md`](caso2-simulador/METADATOS.md) |
| [`caso3-dietas/`](caso3-dietas) | Dietas al día: prototipo (código), documento de validación, pruebas | [`METADATOS.md`](caso3-dietas/METADATOS.md) |
| [`trazabilidad/`](trazabilidad) | Script generador, plantilla y **`Matriz_de_trazabilidad.xlsx`** | — |

## Cómo se cumple cada criterio de la rúbrica

1. **Metadatos.** Todos los artefactos de los tres casos llevan ID único, versión, estado final, autor o revisor, fecha de cierre y artefactos relacionados. En los casos 1 y 2 están en la tabla `METADATOS.md` de cada carpeta; en el caso 3 están en el encabezado de cada archivo y `caso3-dietas/METADATOS.md` se genera solo. La hoja «Catálogo de artefactos» de la matriz junta los de los tres casos.
2. **Herramienta con control de versiones.** Todo vive en este repositorio de Git: documentos (SRS, RFC), diagramas, prototipo y código, con su historial de commits.
3. **Matriz de trazabilidad generada desde el código.** [`trazabilidad/generar_matriz.py`](trazabilidad/generar_matriz.py) lee los requisitos del documento de validación, las etiquetas `@req` del código y las pruebas del caso 3 (el único con código), ejecuta las pruebas y escribe [`Matriz_de_trazabilidad.xlsx`](trazabilidad/Matriz_de_trazabilidad.xlsx), con una hoja de auditoría que señala las rupturas de la cadena.

## Estados finales

`En desarrollo` · `Implementado` (código terminado) · `Entregado` (artefacto entregado en el curso) · `Aprobado` · `Archivado`.

## Regenerar la matriz

Desde la raíz del repositorio (requiere Python 3 y, para las pruebas automáticas, Node.js):

```bash
pip install openpyxl        # una sola vez
python trazabilidad/generar_matriz.py
```

El script actualiza `trazabilidad/Matriz_de_trazabilidad.xlsx` y `caso3-dietas/METADATOS.md`.
