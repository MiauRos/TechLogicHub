import UserModel from '../models/UserModel.js';

// Obtener todos los usuarios
export const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Obtener un usuario por ID
export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Obtener un usuario por email
export const getUserByEmail = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: {
        email: req.params.email,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    // Validar que los campos requeridos están presentes
    const { email, password, type } = req.body;
    if (!email || !password || !type) {
      return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    const newUser = await UserModel.create({
      email,
      password,
      type,
    });
    res.json({ message: 'Registro correcto', user: newUser });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Actualizar un usuario por ID
export const updateUser = async (req, res) => {
  try {
    const { email, password, type } = req.body;
    const updated = await UserModel.update(
      { email, password, type },
      {
        where: { id: req.params.id },
      }
    );

    if (updated[0] === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Registro actualizado correctamente' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Eliminar un usuario por ID
export const deleteUser = async (req, res) => {
  try {
    const deleted = await UserModel.destroy({
      where: { id: req.params.id },
    });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.json({ message: err.message });
  }
};
