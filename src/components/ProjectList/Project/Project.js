import React from 'react';
import './Project.css';
import ProjectImg from '../../Image/ProjectImg/ProjectImg';
const project = props => {
    return (
        <>
        <div className = "Project">
            <div className = "TitleAndImg"> 
                <span className = "Title">{props.title}</span>
                <span className = "Img">
                    <ProjectImg imgSrc = {props.imgSrc}/>
                </span>
            </div> 
            <div className="DescContainer">
                <div className = "Description">{props.description}</div>
                <div className = "TechUsed">
                    {props.techUsed.join(', ')}
                    <div> Just adding this here. might place a link to the projects.</div>
                </div>
                
            </div>
        </div>
        <br/>
        </>
    );
}

export default project;