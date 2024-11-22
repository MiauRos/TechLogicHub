import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const BankModel = db.define('bank', {
  id_b: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define `id_b` como clave primaria
    autoIncrement: true, // Genera valores únicos automáticamente
  },
  nom_tit: {
    type: DataTypes.STRING,
    allowNull: false, // Este campo es obligatorio
  },
  num: {
    type: DataTypes.STRING,
    allowNull: false, // Este campo es obligatorio
    unique: true, // El número debe ser único
  },
  exp: {
    type: DataTypes.DATEONLY,
    allowNull: false, // Este campo es obligatorio
  },
  cvc: {
    type: DataTypes.INTEGER,
    allowNull: false, // Este campo es obligatorio
    validate: {
      len: [3, 4], // Valida que sea de 3 o 4 dígitos
    },
  },
  fecha_i: {
    type: DataTypes.DATEONLY,
    allowNull: false, // Este campo es obligatorio
  },
  fecha_f: {
    type: DataTypes.DATEONLY,
    allowNull: true, // Este campo es opcional
  },
  id_a: {
    type: DataTypes.INTEGER,
    allowNull: false, // Este campo es obligatorio
  },
}, {
  tableName: 'bank', // Evita pluralización del nombre de la tabla
  timestamps: false, // Evita las columnas automáticas `createdAt` y `updatedAt`
});

export default BankModel;
