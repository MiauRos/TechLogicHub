//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const CursoModel=db.define('cursos',{
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY, // Solo la fecha
    allowNull: false,
  },
  startTime: {
    type: DataTypes.STRING, // Puedes manejar el tiempo como string en formato 'HH:mm'
    allowNull: false,
  },
  endTime: {
    type: DataTypes.STRING, // Hora de finalización como string
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

export default CursoModel;
