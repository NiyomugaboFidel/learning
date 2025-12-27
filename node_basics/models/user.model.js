
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    profilePc:{
       type:String,
       default:"https://cdn-icons-png.flaticon.com/512/4908/4908415.png",
       required:true
    }
    ,
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


const User =  mongoose.model("User", userSchema)

export default User;