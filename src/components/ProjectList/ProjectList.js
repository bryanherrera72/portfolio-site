import React from 'react';
import Project from './Project/Project';
import {StaticQuery, graphql} from 'gatsby';

const projectList = props => (
    <StaticQuery 
        query= {graphql`
            query ProjectsQuery{
                allProjectsJson{
                    edges{
                        node{
                            title
                            imgTitle
                            description
                            techUsed
                            link
                        }
                    }
                }
            }
            
        `}
        render = {
            data =>
                data.allProjectsJson.edges.map((project, index)=>{
                    return (<Project 
                                key = {index}
                                title={project.node.title} 
                                link={project.node.link}
                                imgSrc={project.node.imgTitle} 
                                description={project.node.description}
                                techUsed={project.node.techUsed}/>);
                })
            
        }/>
);

export default projectList;