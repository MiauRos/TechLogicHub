import SubjectModel from "../models/SubjectModel.js";

// Obtener todas las materias
export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await SubjectModel.findAll();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una materia por ID
export const getSubject = async (req, res) => {
  try {
    const subject = await SubjectModel.findByPk(req.params.id_m);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva materia
export const createSubject = async (req, res) => {
  try {
    const { name, descr } = req.body;
    const newSubject = await SubjectModel.create({ name, descr });
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una materia por ID
export const updateSubject = async (req, res) => {
  try {
    const subject = await SubjectModel.findByPk(req.params.id_m);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    const { name, descr } = req.body;
    await subject.update({ name, descr });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una materia por ID
export const deleteSubject = async (req, res) => {
  try {
    const subject = await SubjectModel.findByPk(req.params.id_m);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    await subject.destroy();
    res.status(200).json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
