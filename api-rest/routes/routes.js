import express from 'express';
import {getAllUser,getUser,createUser,deleteUser,updateUser} from '../controllers/UserController.js';
import { deleteCurso, getAllCursos, getCurso, createCurso,updateCurso } from '../controllers/CursoController.js'
import {
  createInscripcion, deleteInscripcion,
  getAllInscripciones,
  getInscripcion,
  updateInscripcion
} from '../controllers/InscripcionesController.js'

const userRouter = express.Router();
userRouter.get('/', getAllUser);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

const cursoRouter = express.Router();
cursoRouter.get('/', getAllCursos);
cursoRouter.get('/:id', getCurso);
cursoRouter.post('/', createCurso);
cursoRouter.put('/:id', updateCurso);
cursoRouter.delete('/:id', deleteCurso);

const insRouter = express.Router();
insRouter.get('/', getAllInscripciones);
insRouter.get('/:id', getInscripcion);
insRouter.post('/', createInscripcion);
insRouter.put('/:id', updateInscripcion); // Actualizar inscripción por ID único
insRouter.delete('/:id', deleteInscripcion); // Eliminar inscripción por ID único


export const Routers = {
  userRouter,
  cursoRouter,
  insRouter
  //PIRouter,
};
