import TeachersModel from '../models/TeachersModel.js';
import StudentsModel from '../models/StudentsModel.js'

// Obtener todos los profesores
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await TeachersModel.findAll();
    res.status(200).json(teachers); // Retorna todos los profesores
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la consulta
  }
};

// Obtener un profesor por ID
export const getTeacher = async (req, res) => {
  try {
    const teacher = await TeachersModel.findByPk(req.params.id_p); // Buscar por Primary Key (id_p)
    if (teacher) {
      res.status(200).json(teacher); // Retorna el profesor si lo encuentra
    } else {
      res.status(404).json({ message: 'Profesor no encontrado' }); // Si no se encuentra el profesor
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la consulta
  }
};

export const getTeacherByUserId = async (req, res) => {
  try {
    const teacher = await TeachersModel.findOne({
      where: { id: req.params.id }, // Buscar por la llave foránea (id)
    });
    if (teacher) {
      res.status(200).json(teacher); // Retorna el tutor si lo encuentra
    } else {
      res.status(404).json({ message: 'Tutor no encontrado' }); // Si no se encuentra el Tutor
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la consulta
  }
};

// Crear un nuevo profesor
export const createTeacher = async (req, res) => {
  try {
    const { id, name, ape_p, ape_m } = req.body; // Extraer los datos del cuerpo de la solicitud

    // Validación para asegurarse de que los campos estén presentes
    if (!id || !name || !ape_p || !ape_m) {
      return res.status(400).json({ message: 'Faltan datos necesarios' });
    }

    const newTeacher = await TeachersModel.create({ id, name, ape_p, ape_m }); // Crear el nuevo profesor
    res.status(201).json({ message: 'Profesor creado correctamente', teacher: newTeacher }); // Retorna mensaje de éxito
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la creación
  }
};

// Actualizar los datos de un profesor
export const updateTeacher = async (req, res) => {
  try {
    const { id_p } = req.params; // Obtener el ID del profesor a actualizar
    const { id, name, ape_p, ape_m } = req.body; // Nuevos datos del profesor

    const teacher = await TeachersModel.findByPk(id_p); // Buscar el profesor por ID
    if (teacher) {
      // Actualizar los datos del profesor
      await teacher.update({ id, name, ape_p, ape_m });
      res.status(200).json({ message: 'Profesor actualizado correctamente', teacher });
    } else {
      res.status(404).json({ message: 'Profesor no encontrado' }); // Si no se encuentra el profesor
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la actualización
  }
};

// Eliminar un profesor por ID
export const deleteTeacher = async (req, res) => {
  try {
    const { id_p } = req.params; // Obtener el ID del profesor a eliminar

    const teacher = await TeachersModel.findByPk(id_p); // Buscar el profesor por ID
    if (teacher) {
      await teacher.destroy(); // Eliminar el profesor
      res.status(200).json({ message: 'Profesor eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Profesor no encontrado' }); // Si no se encuentra el profesor
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la eliminación
  }
};
