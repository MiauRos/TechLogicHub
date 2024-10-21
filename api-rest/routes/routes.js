import express from 'express';
import {getAllUser,getUser,createUser,deleteUser,updateUser} from '../controllers/UserController.js';
const router=express.Router();

router.get('/',getAllUser)
router.get('/:id',getUser)
router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

export default router;
