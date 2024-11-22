import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const TeachersModel = db.define('teacher', {
  id_p: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Se generará automáticamente un valor único
  },
  id: {
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  ape_p: {
    type: DataTypes.STRING
  },
  ape_m: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'teacher', // Nombre exacto de la tabla
  timestamps: false, // Si no deseas las columnas createdAt y updatedAt
});

export default TeachersModel;
