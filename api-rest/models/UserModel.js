//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const UserModel=db.define('users',{
  name:{type:DataTypes.STRING},
  email:{type:DataTypes.STRING},
  password:{type:DataTypes.STRING},
  //matricula:{type:DataTypes.STRING},
  type:{type:DataTypes.NUMBER}
})

export default UserModel;
