import React, { useState } from 'react'
import "../style/ProjectModal.css"
const ProjectModal = ({ onClose,getProjects }) => {

    const [project, setProject] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault()

        if(project==""){
            return alert("Please fill projectname")
        }
        fetch("https://skailama-gules.vercel.app/project/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
            body: JSON.stringify({
                projectName: project
            })

        }).then((res) => {
            return res.json()
        }).then((data) => {
           
            setProject("")
            getProjects()
            alert(data.msg)
            onClose()
            
        }).catch((err) => {
            console.log(err)
        })

    }
    return (
        <div className="modal-overlay1">
            <div className="modal-content1">
                <button className="close-button" onClick={onClose}>X</button>
                <h3>Create Project</h3>
                <form action="" className='form'>
                    <label htmlFor="">Enter Project Name:</label>
                    <br />
                    <input type="text" placeholder='Type here' value={project} onChange={(e) => setProject(e.target.value)} />
                </form>
                <div className='modalbtndiv'>
                    <button style={{ color: "red", borderColor: "white", backgroundColor: "white" }} onClick={onClose}>Cancel</button>
                    <button style={{ backgroundColor: "#7E22CE", color: "white", borderColor: "#7E22CE" }} onClick={(e) => handlesubmit(e)}>Create</button>
                </div>
            </div>
        </div>
    );

}

export default ProjectModal
