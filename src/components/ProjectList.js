import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {


/*   const projectItems = projects.map((project) => {
   const technology = project.technologies.map((technology) => {
      return (<span key={projects.id} >{technology}</span>)}) 
    return (
    <div key={project.id}>
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div className="technologies">
        {technology}
      </div>
    </div>)
  }) */

  const projectItems = projects.map((project) => {
    return <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
    
    />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
