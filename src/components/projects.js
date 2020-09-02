import React from "react";
import { VscProject } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";

const Projects = ({ projects }) => {
  const projectList = projects.map((project) => {
    return (
      <div key={project.name} className="proDescription">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
          <li>{project.lang}</li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h4>
        <IconContext.Provider value={{ style: { "padding-right": "10px" } }}>
          <VscProject />
          Projects
        </IconContext.Provider>
      </h4>
      {projectList}
    </div>
  );
};

export default Projects;

/*
 const projectList = ()=>{
   
  return( this will return to the project list
  projects.map((project) => {
    return ( // this will return to the aannonymous function
      <div key={project.name}>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <ul>
          <li>{project.lang}</li>
        </ul>
      </div>
    );
  });
  )
};

return(
  {projectList} // this is wrong since projectlist has been assigned an expression
  //rather than a value/component , so we have to call it as a function like{projectList{}}
)


*/
