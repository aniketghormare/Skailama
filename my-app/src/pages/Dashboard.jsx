import React, { useState } from 'react';
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

const Dashboard = () => {

    const [show, setShow] = useState(false)
    const handleshow = () => {
        setShow(true)
    }
    // const handleOpenModal = () => {
    //     setShow(true);
    // };

    const handleCloseModal = () => {
        setShow(false);
    };

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <div className='DashboardContainer'>
                <div className='sidebar'>
                    <div className='logodash'>
                        <img width={"15%"} src={Logo} alt="" />
                        <span className='name'>LAMA.</span>
                    </div>
                    <div className='listdiv'>
                        <ul>
                            <li><span className='span'>1</span>Projects</li>
                            <li><span className='span'>2</span>Widget Configuration</li>
                            <li><span className='span'>3</span>Deployment</li>
                            <li><span className='span'>4</span>Pricing</li>
                        </ul>
                        <hr style={{ width: "90%", height: "1px", backgroundColor: "#E2D8EE" }} />
                    </div>
                    <div className='bottom'>
                        <hr style={{ width: "90%", height: "1px", backgroundColor: "#E2D8EE" }} />
                        <ul>
                            <li id='setting'><span className='span1'><IoSettingsOutline style={{ marginRight: "5px" }} /></span>Setting</li>
                        </ul>
                    </div>
                </div>
                <div className='dashboardmaincontainer'>
                    <div className='main'>
                        <div className='nav'>
                            <div className='nav1'>
                                <div style={{ display: "flex", alignItems: "center", gap: "3px", marginLeft: "3px", fontWeight: "500" }}>
                                    <IoHomeOutline style={{ border: "1px solid teal", color: "blueviolet", fontWeight: "500", fontSize: '20px' }} />
                                    <span style={{ color: "#999999", fontWeight: "500" }}>/ Sample Project </span>
                                    <span style={{ color: "blueviolet", fontWeight: "500" }}>/ Upload</span>
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
                                {/* <h1 style={{ color: "blueviolet" }}>Upload</h1> */}
                                <h1 style={{ color: "blueviolet" }}>Configuration</h1>
                                {/* <h1 style={{ color: "blueviolet" }}>Edit Transcript</h1> */}
                                <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                    <button style={{ padding: "10px", backgroundColor: "white", border: "2px solid #FF274C", color: "#FF274C" }}>Discard</button>
                                    <button style={{ padding: "10px", backgroundColor: "#211935", border: "2px solid #211935", color: "white" }}>Save & Exit</button>
                                </div>

                            </div>

                            <div className='configdiv'>
                                <div style={{ display: "flex", textAlign: "end", gap: "25px", fontWeight: "500" }}>
                                    <span>General</span>
                                    <span>Display</span>
                                    <span>Advanced</span>
                                </div>
                                <hr style={{ fontWeight: "500", height: "1px", backgroundColor: "#DADADA" }} />

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
                                            <div style={{display:"flex",flexDirection:"column"}}>
                                                {/* <div>
                                                <span style={{color:"blueviolet",fontWeight:"500"}}>Chat Icon</span>
                                                </div> */}
                                              
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
                                                {/* <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p> */}
                                            </div>
                                            {/* <div style={{display:"flex"}}>
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='generaldiv'>
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
                                </div> */}

                            </div>



                            {/* <div className='editdiv'>
                                <div className='btneditdiv'>
                                    <button>Edit Mode</button>
                                </div>
                                <div className='stringdiv'>
                                    Speaker
                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.

                                    In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains
                                </div>
                            </div> */}

                            {/* <div className='dashcard'>
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


                            <div className='bluebox'>
                                <span>All files are processed! Your widget is ready to go!</span>
                                <button>Try it out!</button>
                            </div>

                            <div className='table'>
                                <Table />
                            </div> */}

                            {/* <p style={{ textAlign: "center", color: "#999999", fontSize: "20px" }}>or</p> */}
                            {/* <div className='upload'>
                                <img width={"8%"} src={download} alt="" />
                                <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                                <p id='mp4'>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
                                <button
                                    onClick={handleshow}
                                    style={{ padding: "10px", borderRadius: "8px", backgroundColor: "white", borderColor: "blueviolet", color: "blueviolet" }}>Select File</button>
                            </div> */}
                        </div>
                    </div>
                </div>


            </div>
            {
                show && <DashModal onClose={handleCloseModal} />
            }


        </div>
    );
}

export default Dashboard;
