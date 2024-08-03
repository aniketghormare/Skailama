const mongoose=require("mongoose")

const projectSchema=mongoose.Schema({
    projectName:{
        type:String,
        require:true
    },
    UserID:{
        type:String,
        require:true
    }
    
},{
    versionKey:false
})

const projectModel=mongoose.model("project",projectSchema)

module.exports=projectModel


