//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const UserModel=db.define('user',{
  name:{type:DataTypes.STRING},
  email:{type:DataTypes.STRING},
  password:{type:DataTypes.STRING},
  type:{type:DataTypes.NUMBER}
})

export default UserModel;
