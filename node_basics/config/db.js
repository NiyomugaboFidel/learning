import mongoose  from "mongoose";


const connectionDb =  ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log("Mongodb connection failed:", error.message);
    }
}

export default connectionDb

