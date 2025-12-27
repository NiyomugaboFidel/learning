import express from 'express';
import dotenv from 'dotenv';
import connectionDb from './config/db.js';
import AuthRouter  from './routes/auth.routes.js'
dotenv.config();

const port  =  process.env.PORT 
const app =  express();

app.use(express.json())


app.get('/',(req, res)=>{
    
    res.status(200).json({message:"system is working successfully."});
})



app.use(AuthRouter);



app.listen(port, ()=>{
    connectionDb()
    console.log("server running successfully");
    console.log(`server is running on port ${port}`);
}
)


