import React from 'react';
import Layout from '../components/Layout/layout';
import ProjectList from '../components/ProjectList/ProjectList';
import '../styles/projects.css';

const projects = props => {
    return (
        <Layout>
            <div className = "ProjectsContainer">
                <ProjectList/>
            </div>
        </Layout>
    );
}

export default projects;