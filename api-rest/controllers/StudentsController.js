import StudentsModel from '../models/StudentsModel.js';

// Obtener todos los estudiantes
export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentsModel.findAll();
    res.status(200).json(students); // Retorna todos los estudiantes
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la consulta
  }
};

// Obtener un estudiante por ID
export const getStudent = async (req, res) => {
  try {
    const student = await StudentsModel.findByPk(req.params.id_a); // Buscar por Primary Key (id_a)
    if (student) {
      res.status(200).json(student); // Retorna el estudiante si lo encuentra
    } else {
      res.status(404).json({ message: 'Estudiante no encontrado' }); // Si no se encuentra el estudiante
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la consulta
  }
};

// Crear un nuevo estudiante
export const createStudent = async (req, res) => {
  try {
    const { id, name, ape_p, ape_m, mat, is_premium } = req.body; // Extraer los datos del cuerpo de la solicitud

    // Validación para asegurarse de que los campos estén presentes
    if (!id || !name || !ape_p || !mat) {
      return res.status(400).json({ message: 'Faltan datos necesarios' });
    }

    const newStudent = await StudentsModel.create({ id, name, ape_p, ape_m, mat, is_premium }); // Crear el nuevo estudiante
    res.status(201).json({ message: 'Estudiante creado correctamente', student: newStudent }); // Retorna mensaje de éxito
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la creación
  }
};

// Actualizar los datos de un estudiante
export const updateStudent = async (req, res) => {
  try {
    const { id_a } = req.params; // Obtener el ID del estudiante a actualizar
    const { id, name, ape_p, ape_m, mat, is_premium } = req.body; // Nuevos datos del estudiante

    const student = await StudentsModel.findByPk(id_a); // Buscar el estudiante por ID
    if (student) {
      // Actualizar los datos del estudiante
      await student.update({ id, name, ape_p, ape_m, mat, is_premium });
      res.status(200).json({ message: 'Estudiante actualizado correctamente', student });
    } else {
      res.status(404).json({ message: 'Estudiante no encontrado' }); // Si no se encuentra el estudiante
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la actualización
  }
};

// Eliminar un estudiante por ID
export const deleteStudent = async (req, res) => {
  try {
    const { id_a } = req.params; // Obtener el ID del estudiante a eliminar

    const student = await StudentsModel.findByPk(id_a); // Buscar el estudiante por ID
    if (student) {
      await student.destroy(); // Eliminar el estudiante
      res.status(200).json({ message: 'Estudiante eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Estudiante no encontrado' }); // Si no se encuentra el estudiante
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Error en caso de fallo en la eliminación
  }
};
