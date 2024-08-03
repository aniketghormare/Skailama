const express=require("express")
const { addProject, getProject, updateProject, deleteProject } = require("../controllers/project.controller")
const auth = require("../middleware/auth.middleware")


const projectRouter=express.Router()


projectRouter.post("/add",auth,addProject)

projectRouter.get("/get",auth,getProject)

projectRouter.patch("/update",auth,updateProject)

projectRouter.delete("/delete",auth,deleteProject)


module.exports=projectRouter