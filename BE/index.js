const express=require("express")
const cors=require("cors")
const connection = require("./db")
const authRouter = require("./routers/auth.router")
const projectRouter = require("./routers/project.router")
const tableRouter = require("./routers/table.route")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cors())
let PORT=process.env.PORT || 5000

app.use("/auth",authRouter)
app.use("/project",projectRouter)

app.use("/table",tableRouter)
app.get("/",(req,res)=>{
   return res.json({msg:"home"})
})


app.listen(PORT,()=>{
    try {
        connection
        console.log(`server is running on ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})