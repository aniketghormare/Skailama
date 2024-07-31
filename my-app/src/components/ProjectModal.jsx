import React from 'react'
import "../style/ProjectModal.css"
const ProjectModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Modal Title</h2>
                <p>Modal content goes here...</p>
            </div>
        </div>
    );

}

export default ProjectModal
