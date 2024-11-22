//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const SubjectModel=db.define('subject',{
  id_m:{ type:DataTypes.INTEGER },
  name:{type:DataTypes.STRING},
  descr:{ type:DataTypes.STRING }
})

export default SubjectModel;
