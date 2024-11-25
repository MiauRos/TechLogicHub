import BankModel from '../models/BankModel.js';

// Obtener todos los bancos
export const getAllBanks = async (req, res) => {
  try {
    const banks = await BankModel.findAll();
    res.status(200).json(banks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un banco por ID
export const getBank = async (req, res) => {
  try {
    const bank = await BankModel.findByPk(req.params.id_b); // Buscar por ID
    if (bank) {
      res.status(200).json(bank);
    } else {
      res.status(404).json({ message: 'Banco no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo banco
export const createBank = async (req, res) => {
  try {
    const { nom_tit, num, exp, cvc, fecha_i, fecha_f, id_a } = req.body;

    // Crear un nuevo registro en la base de datos
    const newBank = await BankModel.create({
      nom_tit,
      num,
      exp,
      cvc,
      fecha_i,
      fecha_f,
      id_a
    });

    res.status(201).json({ message: 'Banco creado correctamente', bank: newBank });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un banco por ID
export const updateBank = async (req, res) => {
  try {
    const { id_b } = req.params;
    const { nom_tit, num, exp, cvc, fecha_i, fecha_f, id_a } = req.body;

    const bank = await BankModel.findByPk(id_b); // Buscar el banco por ID
    if (bank) {
      // Actualizar los datos del banco
      await bank.update({
        nom_tit,
        num,
        exp,
        cvc,
        fecha_i,
        fecha_f,
        id_a
      });

      res.status(200).json({ message: 'Banco actualizado correctamente', bank });
    } else {
      res.status(404).json({ message: 'Banco no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un banco por ID
export const deleteBank = async (req, res) => {
  try {
    const { id_b } = req.params;

    const bank = await BankModel.findByPk(id_b); // Buscar el banco por ID
    if (bank) {
      await bank.destroy(); // Eliminar el banco
      res.status(200).json({ message: 'Banco eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Banco no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
