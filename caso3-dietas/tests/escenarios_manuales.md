<!--
@artifact TEST-MANUAL
@tipo Suite de pruebas
@nombre Escenarios de prueba manuales de la interfaz
@version 0.1.0
@estado En desarrollo
@autor Santiago Maya Horta
@cierre pendiente
@relacionados DOC-VAL, COD-PATIENTVIEW, COD-ASSIGN, COD-DRAWER
-->
# Escenarios de prueba manuales

Verifican lo que las pruebas automáticas no alcanzan: la interfaz. Salen de la columna «Cómo se verifica» de la tabla de trazabilidad de `docs/Documento_de_validacion.md` y de la sección 5 de ese mismo documento.

**Cómo usar este archivo:** ejecuta cada escenario en https://dietas-al-dia.vercel.app (cuenta `natalia.restrepo@clinicanutri.co`) y escribe en la tabla el resultado (`Pasado`, `Fallido` o `Bloqueado`), la fecha en formato AAAA-MM-DD y lo que observaste. Después, desde la raíz del repositorio, ejecuta `python trazabilidad/generar_matriz.py`: los requisitos con todas sus pruebas en `Pasado` pasan a `Verificado`. Cuando todos los escenarios estén ejecutados, cambia `@estado` a `Entregado` y `@cierre` a la fecha de hoy (arriba, en el comentario).

| ID | Requisitos | Escenario | Resultado esperado | Resultado | Fecha | Observaciones |
|---|---|---|---|---|---|---|
| TC-M1 | RF-A1, RF-A2 | Ingresar, abrir a María Fernanda Ospina y ver las dietas de diabetes | Aparecen las 3 dietas de diabetes sin acciones adicionales, las seguras primero; la pestaña «Historia clínica» muestra sus datos | Pendiente | | |
| TC-M2 | RF-A3 | Con María Fernanda, intentar asignar «Dieta de control glucémico con lácteos» | Aparece la alerta de alergia y la confirmación queda bloqueada hasta marcar la casilla de reconocimiento | Pendiente | | |
| TC-M3 | RF-A4 | Abrir «Ver ficha técnica» de una dieta | El panel lateral muestra los campos de la ficha y el paciente con sus alergias sigue visible | Pendiente | | |
| TC-M4 | RF-A5, RNF-1 | Prueba con usuarios (sección 5 del documento de validación): 3 a 5 personas que no hayan visto la app asignan una dieta segura a María Fernanda con diabetes, sin ayuda | Cada participante confirma una dieta sin alertas, sin ayuda y en menos de 90 s | Pendiente | | |
| TC-M5 | RF-A5 | Asignar «Dieta de bajo índice glucémico» a María Fernanda y abrir la pestaña «Historia clínica» | La dieta aparece en «Dietas asignadas» con fecha, médico y, si hubo alertas, las alertas reconocidas | Pendiente | | |
