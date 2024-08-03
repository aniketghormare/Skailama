const express=require("express")
// const { addProject, getProject, updateProject, deleteProject } = require("../controllers/project.controller")
const auth = require("../middleware/auth.middleware")
const { addTable, getTable, updateTable, deleteTable } = require("../controllers/table.contrioller")


const tableRouter=express.Router()


tableRouter.post("/add",auth,addTable)

tableRouter.get("/get/:projectId",auth,getTable)

tableRouter.patch("/update/:id",auth,updateTable)

tableRouter.delete("/delete/:id",auth,deleteTable)


module.exports=tableRouter