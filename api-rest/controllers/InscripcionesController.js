import InscripcionesModel from '../models/InscripcionesModel.js';

// Obtener todas las inscripciones
export const getAllInscripciones = async (req, res) => {
  try {
    const inscripciones = await InscripcionesModel.findAll();
    res.json(inscripciones);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Obtener una inscripción específica (por cursoId y alumnoId)
export const getInscripcion = async (req, res) => {
  try {
    const inscripcion = await InscripcionesModel.findOne({
      where: {
        cursoId: req.params.cursoId,
        alumnoId: req.params.alumnoId
      }
    });
    res.json(inscripcion);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Crear una nueva inscripción
export const createInscripcion = async (req, res) => {
  try {
    await InscripcionesModel.create(req.body);
    res.json({ message: 'Inscripción creada correctamente' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Actualizar una inscripción (por cursoId y alumnoId)
export const updateInscripcion = async (req, res) => {
  const { id } = req.params; // Obtener ID único

  try {
    const [updated] = await InscripcionesModel.update(req.body, {
      where: { id }
    });

    if (updated) {
      res.json({ message: 'Inscripción actualizada correctamente' });
    } else {
      res.status(404).json({ message: 'Inscripción no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Eliminar una inscripción (por cursoId y alumnoId)
export const deleteInscripcion = async (req, res) => {
  const { id } = req.params; // Obtener ID único

  try {
    const result = await InscripcionesModel.destroy({
      where: { id }
    });

    if (result === 0) {
      return res.status(404).json({ message: 'Inscripción no encontrada' });
    }

    res.json({ message: 'Inscripción eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

