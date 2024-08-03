import React from 'react'
import "../style/Project.css"
import { useNavigate } from 'react-router-dom'
const ProjectCards = ({el}) => {
    const  navigate=useNavigate()
   console.log(el)
    const handleCard=()=>{
      
        navigate(`/dashboard/${el._id}/${el.projectName}`)
    }
    return (
        <div className='card' onClick={handleCard}>
            <div className='cardname'>

                <span>SP</span>
            </div>
            <div className='cardcontent'>
                <div className='small'>
                    <span className='projectname'>{el.projectName}</span>
                    <span className='epi'>4 Episodes</span>
                </div>

                <span style={{ color: "#969696" }}>Last edited a week ago</span>
            </div>
        </div>

    )
}

export default ProjectCards
