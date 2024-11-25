import CourseModel from '../models/CourseModel.js';

// Obtener todos los cursos
export const getAllCourses = async (req, res) => {
  try {
    const courses = await CourseModel.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un curso por ID
export const getCourse = async (req, res) => {
  try {
    const course = await CourseModel.findByPk(req.params.id_c);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo curso
export const createCourse = async (req, res) => {
  try {
    const { id_p, id_a, id_m, fecha, hora, duracion } = req.body;
    const newCourse = await CourseModel.create({ id_p, id_a, id_m, fecha, hora, duracion });
    res.status(201).json({ message: 'Curso creado exitosamente', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un curso
export const updateCourse = async (req, res) => {
  try {
    const { id_c } = req.params;
    const { id_p, id_a, id_m, fecha, hora, duracion } = req.body;

    const course = await CourseModel.findByPk(id_c);
    if (course) {
      await course.update({ id_p, id_a, id_m, fecha, hora, duracion });
      res.json({ message: 'Curso actualizado exitosamente', course });
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un curso
export const deleteCourse = async (req, res) => {
  try {
    const { id_c } = req.params;

    const course = await CourseModel.findByPk(id_c);
    if (course) {
      await course.destroy();
      res.json({ message: 'Curso eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
