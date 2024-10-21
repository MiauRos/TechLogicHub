import UserModel from '../models/UserModel.js'


export const getAllUser=async (req,res)=>{
  try{
    const user= await UserModel.findAll()
    res.json(user)
  }catch(err){
    res.json({message:err.message})
  }
}

export const getUser=async (req,res)=>{
  try{
    const user= await UserModel.findAll({
      where:{
        id:req.params.id
      }
    })
    res.json(user[0])
  }catch(err){
    res.json({message:err.message})
  }
}
//crear
export const createUser=async (req,res)=>{
  try{
    await UserModel.create(req.body)
    res.json({ message: 'registro correcto' })
  }catch(err){
    res.json({message:err.message})
  }
}

export const updateUser=async (req,res)=>{
  try{
    await UserModel.update(req.body,{
      where:{id:req.params.id}
    })
    res.json({ message: 'registro actualizado correcto' })
  }catch(err){
    res.json({message:err.message})
  }
}

export const deleteUser=async (req,res)=>{
  try{
    await UserModel.destroy({
      where:{id:req.params.id}
    })
    res.json({ message: 'eliminado correcto' })
  }catch(err){
    res.json({message:err.message})
  }
}

