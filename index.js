import dotenv from 'dotenv'
dotenv.config() ;
import express from 'express' ; 
const app = express() ; 

// sayHello port : 
app.get('/sayHello' , (req , res , next)=>{
    try {
        res.status(200).json({ message: 'Hello User' }) ; 
    } catch (error) {
        res.status(400).json({message: error.message}) ; 
    }finally{
        console.log("done")  ; 
    }
})


// listining port 
app.listen(process.env.PORT , ()=>{
    console.log( "Listning on Port  " , process.env.PORT  )
})