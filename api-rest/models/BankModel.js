//abstraccion de una tabla
import db from '../database/db.js';

import {DataTypes} from 'sequelize'

const BankModel=db.define('bank',{
  id_b:{ type:DataTypes.INTEGER },
  nom_tit:{ type:DataTypes.STRING },
  num:{ type:DataTypes.STRING },
  exp:{ type:DataTypes.DATEONLY },
  cvc:{ type:DataTypes.INTEGER },
  fecha_i:{ type:DataTypes.DATEONLY },
  fecha_f:{ type:DataTypes.DATEONLY },
  id_a:{ type:DataTypes.INTEGER }
})

export default BankModel;
