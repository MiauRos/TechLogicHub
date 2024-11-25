//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const TypeModel=db.define('type',{
  id_t:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Se generará automáticamente un valor único
  },
  name:{type:DataTypes.STRING},}, {
  tableName: 'type', // Nombre de la tabla en la base de datos
  timestamps: false, // Incluye las columnas createdAt y updatedAt
});

export default TypeModel;
