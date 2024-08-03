const mongoose = require("mongoose")
const { type } = require("os")

const tableSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    }
    ,
    uploadDate:Date,
    UserID: {
        type: String,
        require: true
    }
    ,
    status: {
        type: String,
        default: "Uploded"
    },
    projectId:{
        type: String,
        require: true
    }

}, {
    versionKey: false,
    timestamps: true
})

const tableModel = mongoose.model("table", tableSchema)

module.exports = tableModel


