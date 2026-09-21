# Metadatos — Caso 3: Dietas al día

> Generado automáticamente por `trazabilidad/generar_matriz.py` a partir del encabezado de cada archivo. No lo edites a mano: cambia el encabezado del archivo y vuelve a ejecutar el script.

| ID | Artefacto | Tipo | Archivo | Versión | Estado final | Autor o revisor | Fecha de cierre | Artefactos relacionados |
|---|---|---|---|---|---|---|---|---|
| DOC-PROMPT | Prompt para AI Studio (versión corregida) | Documentación | `docs/PROMPT_AI_STUDIO.md` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-20 | DOC-VAL |
| DOC-README | README del repositorio | Documentación | `README.md` | 1.0 | Entregado | Santiago Maya Horta | 2026-09-21 | DOC-VAL, TOOL-MATRIZ |
| DOC-VAL | Documento de validación de la épica EPC28 | Documento | `docs/Documento_de_validacion.md` | 1.0 | En desarrollo | Santiago Maya Horta | pendiente | COD-LOGIC, COD-PATIENTVIEW, COD-ASSIGN, COD-DRAWER, COD-CONTEXT, TEST-MANUAL |
| COD-ABOUT | Pantalla «Objetivo» con los requisitos priorizados | Código | `src/screens/About.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | DOC-VAL |
| COD-APP | Componente raíz y registro de asignaciones | Código | `src/App.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-PATIENTVIEW, COD-PATIENTS, COD-LOGIN |
| COD-ASSIGN | Modal de confirmación de la asignación | Código | `src/screens/AssignModal.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-LOGIC, COD-PATIENTVIEW, TEST-MANUAL |
| COD-CATALOG | Consulta de catálogos (solo lectura) | Código | `src/screens/Catalog.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-DATA |
| COD-CONTEXT | Franja de contexto del paciente | Código | `src/screens/PatientContext.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-DRAWER, COD-PATIENTVIEW |
| COD-DATA | Datos de demostración (alimentos, dietas, pacientes) | Código | `src/data.js` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-LOGIC, TEST-LOGIC |
| COD-DRAWER | Panel lateral con la ficha técnica de la dieta | Código | `src/screens/DietDrawer.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-LOGIC, COD-CONTEXT, COD-PATIENTVIEW |
| COD-LOGIC | Cruce de dietas con alergias e incompatibilidades | Código | `src/logic.js` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-DATA, TEST-LOGIC, DOC-VAL |
| COD-LOGIN | Inicio de sesión simulado con Google | Código | `src/screens/Login.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-APP, COD-DATA |
| COD-MAIN | Punto de entrada de la aplicación | Código | `src/main.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-APP, COD-THEME |
| COD-PATIENTS | Pantalla de selección de paciente | Código | `src/screens/Patients.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-APP, COD-PATIENTVIEW |
| COD-PATIENTVIEW | Vista del paciente: dietas, alertas y asignación | Código | `src/screens/PatientView.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-LOGIC, COD-DRAWER, COD-ASSIGN, COD-CONTEXT, DOC-VAL |
| COD-SW | Service worker de la PWA | Código | `public/sw.js` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-MAIN |
| COD-THEME | Tema visual y estilos globales | Código | `src/theme.js` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-UI, COD-MAIN |
| COD-UI | Componentes de interfaz reutilizables | Código | `src/ui.jsx` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-20 | COD-THEME |
| TEST-LOGIC | Pruebas automáticas de la lógica y los datos de demostración | Suite de pruebas | `tests/logic.test.js` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-21 | COD-LOGIC, COD-DATA, DOC-VAL |
| TEST-MANUAL | Escenarios de prueba manuales de la interfaz | Suite de pruebas | `tests/escenarios_manuales.md` | 0.1.0 | En desarrollo | Santiago Maya Horta | pendiente | DOC-VAL, COD-PATIENTVIEW, COD-ASSIGN, COD-DRAWER |
| TOOL-MATRIZ | Generador de la matriz de trazabilidad (caso Dietas al día) | Script | `../trazabilidad/generar_matriz.py` | 0.1.0 | Implementado | Santiago Maya Horta | 2026-09-21 | DOC-VAL, TEST-LOGIC, TEST-MANUAL, COD-ABOUT |
