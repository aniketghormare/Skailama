import React from 'react'
import "../style/Project.css"
const ProjectCards = () => {
    return (
        <div className='card'>
            <div className='cardname'>

                <span>SP</span>
            </div>
            <div className='cardcontent'>
                <div className='small'>
                    <span className='projectname'>Sample Project</span>
                    <span className='epi'>4 Episodes</span>
                </div>

                <span style={{ color: "#969696" }}>Last edited a week ago</span>
            </div>
        </div>

    )
}

export default ProjectCards
