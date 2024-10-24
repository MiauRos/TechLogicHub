  import cors from 'cors';
  import express from 'express';
  import db from "./database/db.js"
  import { Routers } from './routes/routes.js'

  const app=express();
  app.use(cors());
  app.use(express.json());

  app.use('/user', Routers.userRouter);
  app.use('/curso', Routers.cursoRouter);
  app.use('/ins',Routers.insRouter);


  try{
    await db.authenticate()
    console.log('Conexion exitosa')
  }catch(error){
    console.error('Error en cuenta'+error)
  }



  app.listen(3000, () => {
    console.log('Server started on port 3000')
  })
