import CursoModel from '../models/CursoModel.js';

// Obtener todos los cursos
export const getAllCursos = async (req, res) => {
  try {
    const cursos = await CursoModel.findAll();
    res.json(cursos);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Obtener un curso por ID
export const getCurso = async (req, res) => {
  try {
    const curso = await CursoModel.findAll({
      where: { id: req.params.id }
    });
    res.json(curso[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Crear un nuevo curso
export const createCurso = async (req, res) => {
  try {
    await CursoModel.create(req.body);
    res.json({ message: 'Curso creado correctamente' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Actualizar un curso por ID
export const updateCurso = async (req, res) => {
  try {
    await CursoModel.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ message: 'Curso actualizado correctamente' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Eliminar un curso por ID
export const deleteCurso = async (req, res) => {
  try {
    await CursoModel.destroy({
      where: { id: req.params.id }
    });
    res.json({ message: 'Curso eliminado correctamente' });
  } catch (err) {
    res.json({ message: err.message });
  }
};
