//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const CourseModel=db.define('course',{
  id_c:{ type:DataTypes.INTEGER },
  id_p:{ type:DataTypes.INTEGER },
  id_a:{ type:DataTypes.INTEGER },
  id_m:{ type:DataTypes.INTEGER },
  fecha:{ type:DataTypes.DATEONLY },
  hora:{ type:DataTypes.TIME },
  duracion:{ type:DataTypes.FLOAT }
})

export default CourseModel;
