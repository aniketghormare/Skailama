import React, { useEffect, useState } from 'react';
import "../style/Dashboard.css";
import Logo from "../images/directright.png";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import flag from "../images/England.png";
import { FaRegBell } from "react-icons/fa";
import Youtube from "../images/Vector.png";
import { IoSettingsOutline } from 'react-icons/io5';
import download from "../images/download.png";
import DashModal from '../components/DashModal';
import ProjectModal from '../components/ProjectModal';
import Table from '../components/Table';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
// import { getTable } from '../../../BE/controllers/table.contrioller';

const Dashboard = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [show, setShow] = useState(false)
    const [dis1, setdis1] = useState(true)
    const [editedDis, setEditedDis] = useState("")
    const [editData, setEditData] = useState("")
    const [ID, setId] = useState("")
    const params = useParams()
    const [config, setCongig] = useState("General")
    const navigate = useNavigate()
    // const selected = searchParams.get('selected');
    const selected = (searchParams.get('selected'))
    const [data, setData] = useState([])
    // const data = [
    //     { name: 'File1', uploadDate: '2024-08-02 10:00 AM', status: 'Uploaded', action: 'View' },
    //     { name: 'File2', uploadDate: '2024-08-01 09:30 AM', status: 'Failed', action: 'Retry' },
    //     { name: 'File3', uploadDate: '2024-07-31 04:20 PM', status: 'Uploaded', action: 'View' },
    //     { name: 'File4', uploadDate: '2024-08-02 10:00 AM', status: 'Uploaded', action: 'View' },
    //     { name: 'File5', uploadDate: '2024-08-01 09:30 AM', status: 'Failed', action: 'Retry' },
    //     { name: 'File6', uploadDate: '2024-07-31 04:20 PM', status: 'Uploaded', action: 'View' },
    // ];

    const handleshow = () => {
        setShow(true)
    }
    // const handleOpenModal = () => {
    //     setShow(true);
    // };

    console.log("selected", selected)
    useEffect(() => {

    }, [selected])

    useEffect(() => {
        setSearchParams({ selected: "projects" });
    }, [])

    const handleCloseModal = () => {
        setShow(false);
    };

    const handleList = (e) => {
        let value = e.target.getAttribute('data-value');
        setSearchParams({ selected: value });
        console.log(value);
    }
    const getTabledata = () => {
        // const token = localStorage.getItem("token");
        fetch(`http://localhost:5000/table/get/${params.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
            // body:{
            //     projectId:params.id
            // }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            //  setProjects(data.data);
            setData(data?.data)
            console.log("table", data);
        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        getTabledata()
    }, [])

    const handlesavedesc = (id) => {
        fetch(`http://localhost:5000/table/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
            body: JSON.stringify({
                desc:editData
            })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            //  setProjects(data.data);
            // setData(data?.data)
            alert("Desc updated")
            setdis1(true)
            console.log("table", data);
            getTabledata()
        }).catch((err) => {
            console.log(err);
        });
    }

    console.log("params", params.projectName)

    console.log("editeddata", editData)

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <div className='DashboardContainer'>
                <div className='sidebar'>
                    <div className='logodash' onClick={() => navigate("/")}>
                        <img width={"15%"} src={Logo} alt="" />
                        <span className='name'>LAMA.</span>
                    </div>
                    <div className='listdiv'>
                        <ul>
                            <li data-value="projects" style={selected === "projects" ? { backgroundColor: "blueviolet", color: "white" } : null} onClick={(e) => handleList(e)}><span className='span'>1</span>Projects</li>
                            <li data-value="Widget" style={selected === "Widget" ? { backgroundColor: "blueviolet", color: "white" } : null} onClick={(e) => handleList(e)}><span className='span'>2</span>Widget Configuration</li>
                            <li data-value="Deployment" style={selected === "Deployment" ? { backgroundColor: "blueviolet", color: "white" } : null} onClick={(e) => handleList(e)}><span className='span'>3</span>Deployment</li>
                            <li data-value="Pricing" style={selected === "Pricing" ? { backgroundColor: "blueviolet", color: "white" } : null} onClick={(e) => handleList(e)}><span className='span'>4</span>Pricing</li>

                        </ul>
                        <hr style={{ width: "90%", height: "1px", backgroundColor: "#E2D8EE" }} />
                    </div>
                    <div className='bottom'>
                        <hr style={{ width: "90%", height: "1px", backgroundColor: "#E2D8EE" }} />
                        <ul>
                            <li id='setting' data-value="setting" style={selected === "setting" ? { backgroundColor: "blueviolet", color: "white" } : null} onClick={(e) => handleList(e)}><span className='span1'><IoSettingsOutline style={{ marginRight: "5px" }} /></span>Setting</li>
                        </ul>
                    </div>
                </div>
                <div className='dashboardmaincontainer'>
                    <div className='main'>
                        <div className='nav'>
                            <div className='nav1'>
                                <div style={{ display: "flex", alignItems: "center", gap: "3px", marginLeft: "3px", fontWeight: "500" }}>
                                    <IoHomeOutline style={{ border: "1px solid teal", color: "blueviolet", fontWeight: "500", fontSize: '20px' }} />
                                    <span style={{ color: "#999999", fontWeight: "500" }}>/ {params.projectName} </span>
                                    <span style={{ color: "blueviolet", fontWeight: "500" }}>{selected == "edit" ? "/ Transcript" : selected == "Widget" ? "/ Widget Configuration" : selected == "Deployment" ? "/ Deployment" : selected == "setting" ? "/ Setting" : selected == "Pricing" ? "/ Pricing" : "/ Upload"}</span>
                                </div>
                            </div>
                            <div className='nav2'>
                                <span><IoMdArrowDropdown style={{ fontSize: '25px', marginTop: "7px" }} /></span>
                                <span>EN</span>
                                <span style={{ height: "60%", width: "30px" }}><img width={"100%"} src={flag} alt="" /></span>
                                &nbsp; &nbsp; &nbsp;
                                <FaRegBell style={{ fontSize: '30px' }} />
                            </div>
                        </div>
                        <div className='containerdash'>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                {
                                    selected == "projects" && <h1 style={{ color: "blueviolet" }}>Upload</h1>
                                }
                                {
                                    selected == "Widget" && <h1 style={{ color: "blueviolet" }}>Configuration</h1>
                                }
                                {
                                    selected == "edit" && <h1 style={{ color: "blueviolet" }}>Edit Transcript</h1>
                                }
                                {
                                    selected == "edit" && <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                        <button style={{ padding: "10px", backgroundColor: "white", border: "2px solid #FF274C", color: "#FF274C" }}>Discard</button>
                                        <button style={{ padding: "10px", backgroundColor: "#211935", border: "2px solid #211935", color: "white" }} onClick={() => handlesavedesc(ID)}>Save & Exit</button>
                                    </div>
                                }


                            </div>
                            {
                                ((selected == "Widget" && selected != "edit" && selected != "projects") && (config == "General" || config == "Display" || config == "Advanced")) &&

                                <>
                                    <div className='configdiv'>
                                        <div style={{ display: "flex", textAlign: "end", gap: "25px", fontWeight: "500" }}>
                                            <span onClick={() => setCongig("General")} style={config == "General" ? { textDecoration: "underline", textDecorationThickness: "3px", color: "blueviolet" } : null}>General</span>
                                            <span onClick={() => setCongig("Display")} style={config == "Display" ? { textDecoration: "underline", textDecorationThickness: "3px", color: "blueviolet" } : null}>Display</span>
                                            <span onClick={() => setCongig("Advanced")} style={config == "Advanced" ? { textDecoration: "underline", textDecorationThickness: "3px", color: "blueviolet" } : null}>Advanced</span>
                                        </div>
                                        <hr style={{ fontWeight: "500", height: "1px", backgroundColor: "#DADADA" }} />
                                        {
                                            config == "Display" &&

                                            <>
                                                <div className='displaydiv'>
                                                    <div className='containerdisplay'>
                                                        <div className='form1'>
                                                            <div>
                                                                <label htmlFor="">Primary Color</label>
                                                                <input type="text" />
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                                                            </div>
                                                            <div>
                                                                <label htmlFor="">Font Color</label>
                                                                <input type="text" />
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>


                                                            </div>
                                                            <div>
                                                                <label htmlFor="">Font Size (in px)</label>
                                                                <input type="text" />
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>

                                                            </div>
                                                            <div>
                                                                <label htmlFor="">Chat Height (in % of total screen)</label>
                                                                <input type="text" />
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                                                            </div>
                                                            <div>
                                                                <label htmlFor="">Show Sources</label>
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                                                            </div>
                                                            <div>
                                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                                            </div>
                                                        </div>
                                                        <div className='form2'>
                                                            <div style={{ display: "flex", flexDirection: "column" }}>


                                                                <label htmlFor="">Chat Icon Size</label>
                                                                <input type="text" />
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                                                            </div>
                                                            <div>
                                                                <label htmlFor="">Position on Screen</label>
                                                                <input type="text" />
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>


                                                            </div>
                                                            <div>
                                                                <label htmlFor="">Distance from Bottom (in px)</label>
                                                                <input type="text" />
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>

                                                            </div>
                                                            <div>
                                                                <label htmlFor="">Horizontal Distance (in px)</label>
                                                                <input type="text" />
                                                                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                                                            </div>
                                                            <div className='file'>
                                                                <label htmlFor="">Bot Icon</label><br />
                                                                <input type="file" />

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }

                                    </div>
                                </>

                            }

                            {
                                (config == "General" && selected == "Widget") && <div className='generaldiv'>
                                    <form>
                                        <label htmlFor="">Chatbot Name</label>
                                        <input type="text" />
                                        <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                                        <label htmlFor="">Welcome Message</label>
                                        <input type="text" />
                                        <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                                        <label htmlFor="">Input Placeholder</label>
                                        <input type="text" />
                                        <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                                    </form>
                                </div>

                                // </div>
                            }



                            {
                                selected == "edit" && <div className='editdiv'>
                                    <div className='btneditdiv'>
                                        <button onClick={() => setdis1(false)}>Edit Mode</button>
                                    </div>
                                    <textarea disabled={dis1} className='stringdiv'
                                        // value={editData}
                                        value={editData}
                                        onChange={(e) => setEditData(e.target.value)}
                                    >
                                        {/* {editData} */}


                                    </textarea>
                                </div>
                            }

                            {
                                (selected !== "edit" && selected !== "Widget" && selected !== "Deployment" && selected !== "Pricing" && selected !== "setting") && <>
                                    <div className='dashcard'>
                                        {[0, 1, 2].map((el) => (
                                            <div className='carddash' key={el} onClick={handleshow}>
                                                <div className='card1' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <div style={{ height: "60px", width: "60px", borderRadius: "50%", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                        <img width={"75%"} src={Youtube} alt="" />
                                                    </div>
                                                </div>
                                                <div className='card2'>
                                                    <div className='smallbox'>
                                                        <span>Upload</span>
                                                        <span>Youtube Video</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {
                                        data.length > 0 ? <><div className='bluebox'>
                                            <span>All files are processed! Your widget is ready to go!</span>
                                            <button>Try it out!</button>
                                        </div>

                                            <div className='table'>
                                                <Table setId={setId} setEditData={setEditData} getTabledata={getTabledata} data={data} setSearchParams={setSearchParams} />
                                            </div>
                                        </> : <> <p style={{ textAlign: "center", color: "#999999", fontSize: "20px" }}>or</p>
                                            <div className='upload'>
                                                <img width={"8%"} src={download} alt="" />
                                                <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                                                <p id='mp4'>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
                                                <button
                                                    onClick={handleshow}
                                                    style={{ padding: "10px", borderRadius: "8px", backgroundColor: "white", borderColor: "blueviolet", color: "blueviolet" }}>Select File</button>
                                            </div>
                                        </>
                                    }
                                </>
                            }




                        </div>
                    </div>
                </div>


            </div>
            {
                show && <DashModal getTabledata={getTabledata} onClose={handleCloseModal} />
            }


        </div >
    );
}

export default Dashboard;
