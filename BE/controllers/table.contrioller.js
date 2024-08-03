// const projectModel = require("../models/project.model")

const tableModel = require("../models/table.model")



exports.addTable = async (req, res) => {
    try {
        const project = await tableModel(req.body)
        await project.save()
        return res.json({ msg: "Table created", data: project })
    } catch (error) {
        return res.json({ data: error })
    }
}


exports.getTable = async (req, res) => {
    const {projectId} =req.params
    try {
        // console.log("req",req.body)
        const projects = await tableModel.find({ UserID: req.body.UserID,projectId })
        return res.json({ data: projects })
    } catch (error) {

    }
}

exports.updateTable = async (req, res) => {
    const { id } = req.params;
    const { desc } = req.body
    try {
        const user = await tableModel.findByIdAndUpdate(id, { desc }); 
        if (!user) {
            return res.status(404).json({ msg: "Table not found" });
        }
        res.json({ msg: "Table Updated", data: user });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteTable = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await tableModel.findByIdAndDelete(id); 
        if (!user) {
            return res.status(404).json({ msg: "Table not found" });
        }
        res.json({ msg: "Table deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message }); 
    }
};