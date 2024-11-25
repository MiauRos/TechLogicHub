import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const CourseModel = db.define('course', {
  id_c: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define `id_c` como clave primaria
    autoIncrement: true, // Genera valores únicos automáticamente
  },
  id_p: {
    type: DataTypes.INTEGER,
    allowNull: false, // Este campo es obligatorio
  },
  id_a: {
    type: DataTypes.INTEGER,
    allowNull: false, // Este campo es obligatorio
  },
  id_m: {
    type: DataTypes.INTEGER,
    allowNull: false, // Este campo es obligatorio
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false, // Este campo es obligatorio
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false, // Este campo es obligatorio
  },
  duracion: {
    type: DataTypes.FLOAT,
    allowNull: false, // Este campo es obligatorio
  },
}, {
  tableName: 'course', // Nombre exacto de la tabla
  timestamps: false, // Evita las columnas automáticas `createdAt` y `updatedAt`
});

export default CourseModel;
