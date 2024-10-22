//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const InscripcionesModel=db.define('inscripcions',{
  cursoId: {
    type: DataTypes.INTEGER,
  },
  alumnoId: {
    type: DataTypes.INTEGER,
  },
})
// Definir las relaciones
//UserModel.belongsToMany(CursoModel, {
  //through: InscripcionesModel,
  //foreignKey: 'alumnoId',
  //otherKey: 'cursoId',
//});

//CursoModel.belongsToMany(UserModel, {
  //through: InscripcionesModel,
  //foreignKey: 'cursoId',
  //otherKey: 'alumnoId',
//});
export default InscripcionesModel;
