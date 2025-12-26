import User from '../models/user.model.js';
import bcrypt from 'bcrypt'

 export  const signup =  async (req, res) =>{
    try {
        const { name,  email , password} =  req.body;
        if(!name || !email || !password){
           return res.status(400).json({message:"All input must be full filled."});
        }
        const userExist  =  await User.findOne({email:email})
        if(userExist){
            return res.statu(400).json({message:"Already user exist."});
        }
         const hashPassword =  bcrypt.hash(password);
        const  newUser  =  await User.create({name, email, password:hashPassword});
        return  res.stutas(201).json({massage:"user created successfully"}, {user:newUser})
    } catch (error) {
        console.log('something went wrong.');
        res.status(500).json({message:"Something went wrong."})
    }
     
}

