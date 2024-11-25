import TypeModel from '../models/TypeModel.js';

export const getAllTypes = async (req, res) => {
  try {
    const types = await TypeModel.findAll();
    res.json(types);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getType = async (req, res) => {
  try {
    const type = await TypeModel.findByPk(req.params.id_t); // Buscar por Primary Key (id_t)
    if (type) {
      res.json(type);
    } else {
      res.status(404).json({ message: 'Tipo no encontrado' });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createType = async (req, res) => {
  try {
    const { name } = req.body; // Desestructurar el nombre del tipo
    const newType = await TypeModel.create({ name });
    res.json({ message: 'Tipo creado correctamente', type: newType });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const updateType = async (req, res) => {
  try {
    const { id_t } = req.params; // ID del tipo a actualizar
    const { name } = req.body; // Nuevos datos del tipo

    const type = await TypeModel.findByPk(id_t);
    if (type) {
      await type.update({ name }); // Actualizar el nombre del tipo
      res.json({ message: 'Tipo actualizado correctamente', type });
    } else {
      res.status(404).json({ message: 'Tipo no encontrado' });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const deleteType = async (req, res) => {
  try {
    const { id_t } = req.params;
    const type = await TypeModel.findByPk(id_t);
    if (type) {
      await type.destroy();
      res.json({ message: 'Tipo eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Tipo no encontrado' });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};
