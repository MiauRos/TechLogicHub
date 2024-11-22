//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const UserModel=db.define('user',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey: true, // Esto es lo que falta
    autoIncrement: true, // Opcional, si deseas que sea autoincremental
  },
  email:{type:DataTypes.STRING},
  password:{type:DataTypes.STRING},
  //matricula:{type:DataTypes.STRING},
  type: {
    type: DataTypes.INTEGER, // Cambiado de NUMBER a INTEGER
    allowNull: false,
    validate: {
      isInt: true, // Verifica que sea un número entero
    },
  },
}, {
  tableName: 'user', // Nombre de la tabla en la base de datos
  timestamps: false, // Incluye las columnas createdAt y updatedAt
});

export default UserModel;
