/**
 * @artifact TEST-LOGIC
 * @tipo Suite de pruebas
 * @nombre Pruebas automáticas de la lógica y los datos de demostración
 * @version 0.1.0
 * @estado Implementado
 * @autor Santiago Maya Horta
 * @cierre 2026-09-21
 * @relacionados COD-LOGIC, COD-DATA, DOC-VAL
 *
 * Se ejecutan con `npm test` (usa el ejecutor de pruebas incluido en Node, sin dependencias nuevas).
 * Cada prueba lleva su ID (TC-nn) en el título y, justo encima, el requisito que verifica con la etiqueta de requisito.
 * El script trazabilidad/generar_matriz.py lee esas etiquetas y el resultado de la ejecución.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { DIETS, DISEASES, FLAG_LABELS, FOODS, PATIENTS_SEED } from '../src/data.js';
import { analyzeDiet } from '../src/logic.js';

const paciente = (id) => PATIENTS_SEED.find((p) => p.id === id);
const dieta = (id) => DIETS.find((d) => d.id === id);
const cruce = (idDieta, idPaciente) => analyzeDiet(dieta(idDieta), paciente(idPaciente));

// Pacientes de demostración usados abajo (ver README):
//   p1 María Fernanda (alergia: frutos secos; no tolera: lactosa; diabetes e hipertensión)
//   p3 Luisa Fernanda (anemia; ninguna dieta libre de alertas)
//   p4 Carlos Andrés (celiaquía; todas las dietas seguras)
//   p6 Pedro Nel (sin alergias ni enfermedad registrada)

// @req RF-A3 CA2
test('TC-01: una dieta con un alimento al que el paciente es alérgico se marca como crítica', () => {
  const r = cruce('d-glucemico', 'p1');
  assert.equal(r.level, 'critical');
  assert.ok(r.conflicts.some((c) => c.kind === 'alergia' && c.flag === 'frutos-secos'));
});

// @req RF-A3 CA2
test('TC-02: una dieta con solo incompatibilidades se marca como advertencia', () => {
  const r = cruce('d-dash', 'p1');
  assert.equal(r.level, 'warning');
  assert.ok(r.conflicts.length > 0 && r.conflicts.every((c) => c.kind === 'incompatibilidad'));
});

// @req RF-A3 CA2
test('TC-03: una dieta sin alimentos en conflicto se marca como segura y no trae alertas', () => {
  const r = cruce('d-ig-bajo', 'p1');
  assert.equal(r.level, 'safe');
  assert.deepEqual(r.conflicts, []);
});

// @req RF-A3 CA2
test('TC-04: si hay alergia e incompatibilidad a la vez, prevalece el nivel crítico y se listan ambas', () => {
  const r = cruce('d-glucemico', 'p1');
  const tipos = new Set(r.conflicts.map((c) => c.kind));
  assert.ok(tipos.has('alergia') && tipos.has('incompatibilidad'));
  assert.equal(r.level, 'critical');
});

// @req RF-A3 CA2
test('TC-05: un paciente sin alergias ni incompatibilidades no recibe alertas en ninguna dieta', () => {
  assert.equal(paciente('p6').alergias.length + paciente('p6').incompatibilidades.length, 0);
  DIETS.forEach((d) => assert.equal(analyzeDiet(d, paciente('p6')).level, 'safe', d.id));
});

// @req RF-A2 CA1
test('TC-06: cada enfermedad registrada en un paciente tiene al menos una dieta asociada', () => {
  PATIENTS_SEED.flatMap((p) => p.enfermedades).forEach((id) => {
    assert.ok(DISEASES.some((e) => e.id === id), `enfermedad inexistente: ${id}`);
    assert.ok(DIETS.some((d) => d.diseases.includes(id)), `sin dietas: ${id}`);
  });
});

// @req RF-A2 CA1
test('TC-07: María Fernanda ve 3 dietas para diabetes y 2 para hipertensión', () => {
  const cuantas = (enf) => DIETS.filter((d) => d.diseases.includes(enf)).length;
  assert.deepEqual(paciente('p1').enfermedades, ['dm2', 'hta']);
  assert.equal(cuantas('dm2'), 3);
  assert.equal(cuantas('hta'), 2);
});

// @req RF-A1 CA1
test('TC-08: toda historia clínica trae los datos que exige el requisito', () => {
  const textos = ['nombre', 'apellidos', 'domicilio', 'telefono', 'ss', 'nacimiento', 'antecedentes'];
  const numeros = ['peso', 'talla'];
  const listas = ['alergias', 'incompatibilidades', 'enfermedades', 'asignaciones'];
  PATIENTS_SEED.forEach((p) => {
    textos.forEach((k) => assert.ok(typeof p[k] === 'string' && p[k].length > 0, `${p.id}.${k}`));
    numeros.forEach((k) => assert.ok(typeof p[k] === 'number' && p[k] > 0, `${p.id}.${k}`));
    listas.forEach((k) => assert.ok(Array.isArray(p[k]), `${p.id}.${k}`));
  });
});

// @req RF-A3 CA2
test('TC-09: alergias, incompatibilidades y alimentos usan un vocabulario común de etiquetas', () => {
  const vocabulario = new Set(Object.keys(FLAG_LABELS));
  const usadas = [
    ...FOODS.flatMap((f) => f.flags),
    ...PATIENTS_SEED.flatMap((p) => [...p.alergias, ...p.incompatibilidades]),
  ];
  usadas.forEach((e) => assert.ok(vocabulario.has(e), `etiqueta fuera del vocabulario: ${e}`));
});

// @req RF-A4 CA3
test('TC-10: toda dieta trae los diez campos de la ficha técnica', () => {
  const campos = ['objetivos', 'definicion', 'kcal', 'componentes', 'ingesta', 'via', 'duracion', 'dosificacion', 'pauta', 'suplementos'];
  DIETS.forEach((d) =>
    campos.forEach((k) => {
      const v = d[k];
      assert.ok(v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0), `${d.id}.${k}`);
    })
  );
});

// @req RF-A3 RF-A4 CA2 CA3
test('TC-11: los componentes de cada dieta existen en el catálogo de alimentos', () => {
  const ids = new Set(FOODS.map((f) => f.id));
  DIETS.forEach((d) => d.componentes.forEach((c) => assert.ok(ids.has(c.food), `${d.id}: ${c.food}`)));
});

// @req RF-A3 CA2
test('TC-12: Luisa Fernanda no tiene ninguna dieta libre de alertas para su enfermedad', () => {
  const dietas = DIETS.filter((d) => d.diseases.includes('anemia'));
  assert.ok(dietas.length > 0);
  assert.ok(dietas.every((d) => analyzeDiet(d, paciente('p3')).level !== 'safe'));
});

// @req RF-A3 CA2
test('TC-13: todas las dietas de Carlos Andrés son seguras', () => {
  const dietas = DIETS.filter((d) => d.diseases.includes('celiaca'));
  assert.ok(dietas.length > 0);
  assert.ok(dietas.every((d) => analyzeDiet(d, paciente('p4')).level === 'safe'));
});
