import React, { useState } from 'react'
import "../style/Project.css"
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

import Logo from "../images/directright.png"
import MainIMG from "../images/Mainimg.png"
import ProjectModal from '../components/ProjectModal';
import ProjectCards from '../components/ProjectCards';
const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [project, setProjects] = useState([])
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='projectcontainer'>
            <div className='projectnav'>
                <div className='logo'>
                    <img width="100%" src={Logo} alt="" />
                    <span className='name'>LAMA.</span></div>
                <div className='alert'>
                    <IoSettingsOutline style={{ fontSize: '30px' }} />
                    <FaRegBell style={{ fontSize: '30px' }} />

                </div>
            </div>
            <div className='mainbox'>
                <button className='backtohomebtn'>
                    <IoHomeOutline style={{ fontSize: "18px" }} />
                    <span style={{ fontSize: "18px" }}>Back to Home</span>
                </button>

                {
                    project.length > 0 ? <div className='mainconteinerwithprojectdata'>
                        <div className='headerdata'>
                            <h1 style={{ color: "#7E22CE",fontSize:"45px" }}>Projects
                            </h1>
                            <button className='blacktwo' onClick={handleOpenModal}>
                                <CiCirclePlus style={{ fontSize: '20px' }} />
                                <span style={{ fontSize: '20px' }}>Create New Project</span>
                            </button>
                        </div>
                        <div className='carddiv'>
                            {/* <div className='card'>
                                <div className='cardname'>

                                    <p>SP</p>
                                </div>
                                <div className='cardcontent'>
                                    <div className='small'>
                                        <span className='projectname'>Sample Project</span>
                                        <span className='epi'>4 Episodes</span>
                                    </div>

                                    <p style={{ color: "#969696" }}>Last edited a week ago</p>
                                </div>
                            </div> */}
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, index) => {
                                    return (
                                        <ProjectCards />
                                    )
                                })
                            }

                        </div>

                    </div> :
                        <div className='mainconteiner'>
                            <p className='heading1'>Create a New Project</p>
                            <img className='img' src={MainIMG} alt="" />
                            <div className='content'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                            </div>
                            {/* <div className='btndiv'> */}
                            <button className='blackbtn' onClick={handleOpenModal}>
                                <CiCirclePlus style={{ fontSize: '20px' }} />
                                <span style={{ fontSize: '20px' }}>Create New Project</span></button>
                            {/* </div> */}
                        </div>
                }


            </div>
            {isModalOpen && <ProjectModal onClose={handleCloseModal} />}

        </div>
    )
}

export default Project
