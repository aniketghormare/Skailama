import React, { useState } from 'react'
import "../style/DashModal.css"
import Youtube from "../images/Vector.png";
import { useParams } from 'react-router-dom';
const DashModal = ({ onClose ,getTabledata}) => {
    const params=useParams()
    const [name, setname] = useState("")

    const [desc, setDesc] = useState("")
    console.log(params)

    const handleupload = (e) => {
        e.preventDefault()
        fetch("https://skailama-gules.vercel.app/table/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
            body: JSON.stringify({
                name
                ,desc
                ,
                projectId:params.id
            })

        }).then((res) => {
            return res.json()
        }).then((data) => {
           
            setDesc("")
            setname()
            getTabledata()
            alert(data.msg)
            onClose()
            
        }).catch((err) => {
            console.log(err)
        })

    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div style={{ display: "flex" }}>
                    <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img width={"60%"} src={Youtube} alt="" />
                    </div>

                    <h2 style={{ marginTop: "3px", marginLeft: "5px" }}>Upload from Youtube</h2>
                </div>

                <form action="" className='form'>
                    <label htmlFor="">Name</label>
                    <br />
                    <input type="text" placeholder='Type here' value={name} onChange={(e) => setname(e.target.value)} />
                    <label htmlFor="">Desc</label>
                    <br />
                    <input type="text" placeholder='Type here' value={desc} onChange={(e) => setDesc(e.target.value)} />

                </form>
                <div className='modalbtndiv'>
                    {/* <button style={{ color: "red", borderColor: "white", backgroundColor: "white" }} onClick={onClose}>Cancel</button> */}
                    <button style={{ width: "60px", backgroundColor: "black", color: "white", borderColor: "black",marginTop:"-5px" }} onClick={handleupload}>Upload</button>
                </div>
            </div>
        </div>
    );

}

export default DashModal
