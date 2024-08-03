import React, { useState, useEffect } from 'react';
import "../style/Project.css";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

import Logo from "../images/directright.png";
import MainIMG from "../images/Mainimg.png";
import ProjectModal from '../components/ProjectModal';
import ProjectCards from '../components/ProjectCards';
import LoginSignupModal from '../components/LoginSignupModal';
import { useLocation, useNavigate } from 'react-router-dom';

const Project = () => {
    const location=useLocation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true); 
    const [projects, setProjects] = useState([]);
    const [token, setToken] = useState((localStorage.getItem("token")) || null)

    const getProjects = () => {
        const token = localStorage.getItem("token");
        fetch("https://skailama-gules.vercel.app/project/get", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
             setProjects(data.data);
            console.log("data",data);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        // console.log("hllo")
         if (token) {
            getProjects()
         }
    }, [])

    // useEffect(()=>{
    //     if(projects.length>0){
    //         setIsLoginModalOpen(false)
    //     }
    // },[location])

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLoginSuccess = () => {
        setIsLoginModalOpen(false); 
    };

    return (
        <div className='projectcontainer'>
            <div className='projectnav'>
                <div className='logo'>
                    <img width="100%" src={Logo} alt="" />
                    <span className='name'>LAMA.</span>
                </div>
                <div className='alert'>
                    <IoSettingsOutline style={{ fontSize: '30px' }} />
                    <FaRegBell style={{ fontSize: '30px' }} />
                </div>
            </div>
            <div className='mainbox'>
                <button className='backtohomebtn'>
                    <IoHomeOutline style={{ fontSize: "18px" }} />
                    <span style={{ fontSize: "18px" }}  onClick={()=>setIsLoginModalOpen(true)}>Login Signup</span>
                </button>
                {
                    projects?.length > 0 ? (
                        <div className='mainconteinerwithprojectdata'>
                            <div className='headerdata'>
                                <h1 style={{ color: "#7E22CE", fontSize: "45px" }}>Projects</h1>
                                <button className='blacktwo' onClick={handleOpenModal}>
                                    <CiCirclePlus style={{ fontSize: '20px' }} />
                                    <span style={{ fontSize: '20px' }}>Create New Project</span>
                                </button>
                            </div>
                            <div className='carddiv'>
                                {
                                    projects.map((el, index) => (
                                        <ProjectCards el={el} key={index} />
                                    ))
                                }
                            </div>
                        </div>
                    ) : (
                        <div className='mainconteiner'>
                            <p className='heading1'>Create a New Project</p>
                            <img className='img' src={MainIMG} alt="" />
                            <div className='content'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                            </div>
                            <button className='blackbtn' onClick={handleOpenModal}>
                                <CiCirclePlus style={{ fontSize: '20px' }} />
                                <span style={{ fontSize: '20px' }}>Create New Project</span>
                            </button>
                        </div>
                    )
                }
            </div>
            {isModalOpen && <ProjectModal getProjects={getProjects} onClose={handleCloseModal} />}
            {isLoginModalOpen && <LoginSignupModal getProjects={getProjects} onClose={() => setIsLoginModalOpen(false)} onLoginSuccess={handleLoginSuccess} />}
        </div>
    );
};

export default Project;
