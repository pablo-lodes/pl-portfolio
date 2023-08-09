import React from "react";

import logo from '../images/logo.svg';

export default function Projects() {

    const projects = [
        {
            id: 0,
            title: 'Projectname 1',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        },
        {
            id: 1,
            title: 'Projectname 2',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        },
        {
            id: 2,
            title: 'Projectname 3',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        }
    ];

    function ShowProject(currentProject) {
        return (
            <div id={currentProject.id} className="project">
                <div className="project-picture">
                    <img src={logo} alt={currentProject.title} />
                </div>
                <div className="project-information">
                    <h3>{currentProject.title}</h3>
                    <p>{currentProject.description}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="projects">
            <h2>Projects</h2>
            {projects.map(currentProject => ShowProject(currentProject))}
        </div>
    );
}