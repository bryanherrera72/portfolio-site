import React from 'react';
import Project from './Project/Project';

const projectList = props => {
    let list = [];
    let projectList = [
        {
            title: "Test 1",
            imgTitle: "img url here",
            description: `This is a test description to try and test the little testing panel test. Increasing the length
                            of one of the descriptions so that I can see how it works when the amount of text gets really long.This is a test description to try and test the little testing panel test.This is a test description to try and test the little testing panel test.This is a test description to try and test the little testing panel test.`,
            techUsed: ["This", "Will", "Contain", "Tech", "Used", "In", "The", "Project"]
        },
        {
            title: "Test 2",
            imgTitle: "img url here",
            description: "This is a test description to try and test the little testing panel test.",
            techUsed: ["This", "Will", "Contain", "Tech", "Used", "In", "The", "Project"] 
        },
        {
            title: "Test 3",
            imgTitle: "img url here",
            description: "This is a test description to try and test the little testing panel test.",
            techUsed: ["This", "Will", "Contain", "Tech", "Used", "In", "The", "Project"]  
        },
    ];
    if(projectList){
        list = projectList.map((project,index)=>{
            return (<Project 
                        key = {index}
                        title={project.title} 
                        imgTitle={project.imgTitle} 
                        description={project.description}
                        techUsed={project.techUsed}/>);
        });
    }
    return (
        <>
            {list}
        </>
    );
}

export default projectList;