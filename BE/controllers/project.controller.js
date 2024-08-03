const projectModel = require("../models/project.model")



exports.addProject = async (req,res) => {
    try {
        const project=await projectModel(req.body)
        await project.save()
        return res.json({msg:"Project created",data:project})
    } catch (error) {
        return res.json({data:error})
    }
}


exports.getProject = async(req,res) => {
    try {
        // console.log("req",req.body)
     const projects=await projectModel.find({UserID:req.body.UserID})
      return res.json({data:projects})
    } catch (error) {

    }
}

exports.updateProject = () => {
    try {

    } catch (error) {

    }
}

exports.deleteProject = () => {
    try {

    } catch (error) {

    }
}