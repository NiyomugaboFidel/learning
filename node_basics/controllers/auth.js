import User from '../models/user.model.js';
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/token.js';

 export  const signup =  async (req, res) =>{
    try {
        const { name,  email , password} =  req.body;
        if(!name || !email || !password){
           return res.status(400).json({message:"All input must be full filled."});
        }
        const userExist  =  await User.findOne({email:email})
        if(userExist){
            return res.status(400).json({message:"Already user exist."});
        }
         const hashPassword =  bcrypt.hashSync(password,10);
          
        const  newUser  =  await User.create({name, email, password:hashPassword});
        const token = generateToken({name:newUser.name, email:newUser.email});

        return  res.status(201).json({massage:"user created successfully",user:newUser,token})
    } catch (error) {
        console.log('something went wrong.', error.message);
        res.status(500).json({message:"Something went wrong."})
    }
     
}


export const login = async(req, res)=>{

    try {
        const {email, password} = req.body

        if(!email, !password){
                return res.status(400).json({message:"all input are required"})
        }

         const userExist  =  await User.findOne({email:email})
        if(!userExist){
            return res.status(400).json({message:"User not exist, please register."});
        }

        let matchPassword  =  await bcrypt.compare(password, userExist.password);

        if(!matchPassword){
            return res.status(400).json({message:"Invalid credetials"});
        }

        const token = generateToken({name:userExist.name, email:userExist.email});
        return res.status(200).json({message:"login successfully.", user:userExist , token})
    } catch (error) {
           console.log('something went wrong.', error.message);
        res.status(500).json({message:"Something went wrong."})
    }
}