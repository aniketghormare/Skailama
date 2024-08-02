import React from 'react'
import "../style/DashModal.css"
import Youtube from "../images/Vector.png";
const DashModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div style={{display:"flex"}}>
                    <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img  width={"60%"} src={Youtube} alt="" />
                    </div>

                    <h2 style={{marginTop:"3px",marginLeft:"5px"}}>Upload from Youtube</h2>
                </div>

                <form action="" className='form'>
                    <label htmlFor="">Name</label>
                    <br />
                    <input type="text" placeholder='Type here' />
                    <label htmlFor="">Link</label>
                    <br />
                    <input type="text" placeholder='Type here' />
               
                </form>
                <div className='modalbtndiv'>
                    {/* <button style={{ color: "red", borderColor: "white", backgroundColor: "white" }} onClick={onClose}>Cancel</button> */}
                    <button style={{width:"60px", backgroundColor: "black", color: "white", borderColor: "black" }}>Upload</button>
                </div>
            </div>
        </div>
    );

}

export default DashModal
