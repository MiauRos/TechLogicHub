import {Sequelize} from 'sequelize'
//conexion a la bse de datos
const db = new Sequelize('techlogichub','root','',{
  host:'localhost',
  dialect: 'mysql',
})

export default db;
