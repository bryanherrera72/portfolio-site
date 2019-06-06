import React from 'react';
import './Project.css';
import ProjectImg from '../../Image/ProjectImg/ProjectImg';
const project = props => {
    return (
        <>
        <div className = "Project">
            <div className = "TitleAndImg"> 
                <h1 className = "Title">{props.title}</h1>
                <span className = "Img">
                    <ProjectImg imgSrc = {props.imgSrc}/>
                </span>
            </div> 
            <div className="DescContainer">
                <div className = "Description">{props.description}</div>
                <div className = "TechUsed">
                    Tech Used: {props.techUsed.join(', ')}
                </div>
                <br/>
                <p>Find the project <a href = {props.link} style= {{color: 'white'}}>here =></a></p>
            </div>
        </div>
        <br/>
        </>
    );
}

export default project;