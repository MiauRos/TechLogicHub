//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const TeachersModel=db.define('teacher',{
  id_p:{ type:DataTypes.INTEGER },
  id:{ type:DataTypes.INTEGER },
  name:{type:DataTypes.STRING},
  ape_p:{ type:DataTypes.STRING },
  ape_m:{ type:DataTypes.STRING }
})

export default TeachersModel;
