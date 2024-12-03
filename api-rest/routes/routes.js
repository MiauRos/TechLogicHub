import express from 'express';
import {
  getAllUser,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getUserByEmail
} from '../controllers/UserController.js'

import {
  getAllTeachers,
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherByUserId
} from '../controllers/TeachersController.js'

import {
  getAllTypes,
  getType,
  createType,
  updateType,
  deleteType
} from '../controllers/TypeController.js'

import {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentByUserId
} from '../controllers/StudentsController.js'

import {
  getAllBanks,
  getBank,
  createBank,
  updateBank,
  deleteBank
} from '../controllers/BankController.js';

import {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseByIdA,
  getCourseByIdP
} from '../controllers/CourseController.js';

import {
  getAllSubjects,
  getSubject,
  createSubject,
  updateSubject,
  deleteSubject,
} from "../controllers/SubjectController.js";

const userRouter = express.Router();
userRouter.get('/', getAllUser);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.get('/email/:email', getUserByEmail);

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
teacherRouter.get('/user/:id', getTeacherByUserId);

const studentRouter = express.Router();

// Rutas para el CRUD de estudiantes
studentRouter.get('', getAllStudents); // Obtener todos los estudiantes
studentRouter.get('/:id_a', getStudent); // Obtener un estudiante por ID
studentRouter.post('', createStudent); // Crear un nuevo estudiante
studentRouter.put('/:id_a', updateStudent); // Actualizar un estudiante por ID
studentRouter.delete('/:id_a', deleteStudent); // Eliminar un estudiante por ID
studentRouter.get('/user/:id', getStudentByUserId); // Obtener datos del estudiante mediante el id de usuario

const bankRouter = express.Router();

// Rutas del CRUD
bankRouter.get('/', getAllBanks); // Obtener todos los bancos
bankRouter.get('/:id_b', getBank); // Obtener un banco por ID
bankRouter.post('/', createBank); // Crear un nuevo banco
bankRouter.put('/:id_b', updateBank); // Actualizar un banco por ID
bankRouter.delete('/:id_b', deleteBank); // Eliminar un banco por ID

const courseRouter = express.Router();

// Rutas para el CRUD de cursos
courseRouter.get('/', getAllCourses); // Obtener todos los cursos
courseRouter.get('/:id_c', getCourse); // Obtener un curso por ID
courseRouter.post('/', createCourse); // Crear un nuevo curso
courseRouter.put('/:id_c', updateCourse); // Actualizar un curso por ID
courseRouter.delete('/:id_c', deleteCourse); // Eliminar un curso por ID
courseRouter.get('/student/:id_a', getCourseByIdA);
courseRouter.get('/teacher/:id_p', getCourseByIdP);

const subjectRouter = express.Router();

// Rutas para el CRUD de materias
subjectRouter.get("/", getAllSubjects); // Obtener todas las materias
subjectRouter.get("/:id_m", getSubject); // Obtener una materia por ID
subjectRouter.post("/", createSubject); // Crear una nueva materia
subjectRouter.put("/:id_m", updateSubject); // Actualizar una materia por ID
subjectRouter.delete("/:id_m", deleteSubject); // Eliminar una materia por ID
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
  bankRouter,
  courseRouter,
  subjectRouter
  //cursoRouter,
  //insRouter
  //PIRouter,
};
