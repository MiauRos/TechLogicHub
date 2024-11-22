import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const SubjectModel = db.define('subject', {
  id_m: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define `id_m` como clave primaria
    autoIncrement: true, // Genera valores únicos automáticamente
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Este campo es obligatorio
  },
  descr: {
    type: DataTypes.STRING,
    allowNull: true, // Este campo puede ser nulo
  },
}, {
  tableName: 'subject', // Nombre exacto de la tabla
  timestamps: false, // Evita las columnas automáticas createdAt y updatedAt
});

export default SubjectModel;
