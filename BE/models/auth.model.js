const mongoose=require("mongoose")

const authSchema=mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{
    versionKey:false
})

const authModel=mongoose.model("user",authSchema)

module.exports=authModel


