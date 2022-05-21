import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import seedRouter from "./router/seedRoutes.js"
import userRouter from "./router/userRouter.js"
import cors from "cors"
const port=process.env.PORT || 8000

dotenv.config()
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("connected to the database")
})
.catch(err=>{
    console.log(err.message)
})
const app=express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Welcome to react native application.")
})
app.use("/api/create",seedRouter)
app.use("/api/user",userRouter)


app.use((err,req,res,next)=>{
res.status(500).send({err:err.message})
})

app.listen(port, () => {
    console.log(`Serve at http://192.168.8.103:${port}`);
});