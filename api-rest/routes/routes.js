import express from 'express';
import {
  getAllUser,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  //getUserByEmail
} from '../controllers/UserController.js'

import {
  getAllTeachers  ,
  getTeacher  ,
  createTeacher  ,
  updateTeacher  ,
  deleteTeacher
} from '../controllers/TeachersController.js'

import {
  getAllTypes ,
  getType ,
  createType ,
  updateType ,
  deleteType
} from '../controllers/TypeController.js'

import {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/StudentsController.js'

import {
  getAllBanks,
  getBank,
  createBank,
  updateBank,
  deleteBank
} from '../controllers/BankController.js';
/*import { deleteCurso, getAllCursos, getCurso, createCurso,updateCurso } from '../controllers/CursoController.js'
import {
  createInscripcion, deleteInscripcion,
  getAllInscripciones,
  getInscripcion,
  updateInscripcion
} from '../controllers/InscripcionesController.js'*/

const userRouter = express.Router();
userRouter.get('/', getAllUser);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

const typeRouter = express.Router();
typeRouter.get('/', getAllTypes);
typeRouter.get('/:id_t', getType);
typeRouter.post('/', createType);
typeRouter.put('/:id_t', updateType);
typeRouter.delete('/:id_t', deleteType);

const teacherRouter = express.Router();
teacherRouter.get('/', getAllTeachers);
teacherRouter.get('/:id_p', getTeacher);
teacherRouter.post('/', createTeacher);
teacherRouter.put('/:id_p', updateTeacher);
teacherRouter.delete('/:id_p', deleteTeacher);

const studentRouter = express.Router();

// Rutas para el CRUD de estudiantes
studentRouter.get('', getAllStudents); // Obtener todos los estudiantes
studentRouter.get('/:id_a', getStudent); // Obtener un estudiante por ID
studentRouter.post('', createStudent); // Crear un nuevo estudiante
studentRouter.put('/:id_a', updateStudent); // Actualizar un estudiante por ID
studentRouter.delete('/:id_a', deleteStudent); // Eliminar un estudiante por ID

const bankRouter = express.Router();

// Rutas del CRUD
bankRouter.get('/', getAllBanks); // Obtener todos los bancos
bankRouter.get('/:id_b', getBank); // Obtener un banco por ID
bankRouter.post('/', createBank); // Crear un nuevo banco
bankRouter.put('/:id_b', updateBank); // Actualizar un banco por ID
bankRouter.delete('/:id_b', deleteBank); // Eliminar un banco por ID
//userRouter.get('/email/:email', getUserByEmail);
/*
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
*/

export const Routers = {
  userRouter,
  typeRouter,
  teacherRouter,
  studentRouter,
  bankRouter
  //cursoRouter,
  //insRouter
  //PIRouter,
};
