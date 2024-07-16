import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({project : {title, imageSrc, description, demo, skills, source}}) => {

    // const project = props.project;

    return (

        <div className="projectcard-container">
            <img src={require(`../../${imageSrc}`)} alt={`Pic of ${title}`}  className="projectcard-image"/>
            
            <h3 className="projectcard-title">{title}</h3>
            <p className="projectcard-description">{description}</p>
            <ul className="projectcard-skills">
                {skills.map((skill, id) => {

                   return <li key={id} className="projectcard-skill">{skill}</li>
                })}
            </ul>

            <div className="projectcard-links">
                <a href={demo} className="projectcard-link">Demo</a>
                <a href={source} className="projectcard-link">Source</a>
            </div>
        </div>

    )

}

export default ProjectCard