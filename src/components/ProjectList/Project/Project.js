import React from 'react';
import './Project.css';
const project = props => {
    return (
        <div className = "Project">
            <div className = "TitleAndImg"> 
                <span className = "Title">{props.title}</span>
                <span className = "Img"> <img src = "https://via.placeholder.com/200x200"/></span>
            </div> 
            <div className="DescContainer">
                <div className = "Description">{props.description}</div>
                <div className = "TechUsed">
                    {props.techUsed.join(', ')}
                    <div> Just adding this here. might place a link to the projects.</div>
                </div>
                
            </div>
        </div>
    );
}

export default project;