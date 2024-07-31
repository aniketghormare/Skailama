import React, { useState } from 'react'
import "../style/Project.css"
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

import Logo from "../images/directright.png"
import MainIMG from "../images/Mainimg.png"
import ProjectModal from '../components/ProjectModal';
const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <div className='mainconteiner'>
                    <p className='heading1'>Create a New Project</p>
                    <img className='img' src={MainIMG} alt="" />
                    <div className='content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                    </div>
                    {/* <div className='btndiv'> */}
                    <button className='blackbtn' onClick={handleOpenModal}>
                        <CiCirclePlus style={{ fontSize: '20px' }}/>
                        <span style={{ fontSize: '20px' }}>Create New Project</span></button>
                    {/* </div> */}
                </div>

            </div>
            {isModalOpen && <ProjectModal onClose={handleCloseModal} />}

        </div>
    )
}

export default Project