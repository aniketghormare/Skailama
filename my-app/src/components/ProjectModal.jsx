import React from 'react'
import "../style/ProjectModal.css"
const ProjectModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h3>Create Project</h3>
                <form action="" className='form'>
                    <label htmlFor="">Enter Project Name:</label>
                    <br />
                    <input type="text" placeholder='Type here' />
                </form>
                <div className='modalbtndiv'>
                    <button style={{ color: "red", borderColor: "white", backgroundColor: "white" }} onClick={onClose}>Cancel</button>
                    <button style={{ backgroundColor: "#7E22CE", color: "white", borderColor: "#7E22CE" }}>Create</button>
                </div>
            </div>
        </div>
    );

}

export default ProjectModal
