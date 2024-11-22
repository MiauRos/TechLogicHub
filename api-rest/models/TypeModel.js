//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const TypeModel=db.define('type',{
  id_t:{ type:DataTypes.INTEGER },
  name:{type:DataTypes.STRING}
})

export default TypeModel;
