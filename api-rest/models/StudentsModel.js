//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const StudentsModel=db.define('student',{
  id_a:{ type:DataTypes.INTEGER },
  id:{ type:DataTypes.INTEGER },
  name:{type:DataTypes.STRING},
  ape_p:{ type:DataTypes.STRING },
  ape_m:{ type:DataTypes.STRING },
  mat:{ type:DataTypes.STRING },
  is_premium:{type:DataTypes.BOOLEAN}
})

export default StudentsModel;
