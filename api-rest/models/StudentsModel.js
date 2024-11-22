import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const StudentsModel = db.define('student', {
  id_a: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define id_a como clave primaria
    autoIncrement: true, // Genera valores únicos automáticamente
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false, // No puede ser nulo (si es necesario)
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obligatorio
  },
  ape_p: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obligatorio
  },
  ape_m: {
    type: DataTypes.STRING,
    allowNull: true, // Campo opcional
  },
  mat: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obligatorio
    unique: true, // Garantiza que no se repitan las matrículas
  },
  is_premium: {
    type: DataTypes.BOOLEAN,
    allowNull: false, // Campo obligatorio
    defaultValue: false, // Valor predeterminado
  },
}, {
  tableName: 'student', // Nombre exacto de la tabla
  timestamps: false, // Evita las columnas automáticas createdAt y updatedAt
});

export default StudentsModel;
