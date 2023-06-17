import React, { useState } from "react";
import "./projects.css";
import Details from "./details";
import ProjectCard from "./projectcard";
import FetchProjects from "./fetchprojects";

const Projects = () => {
  const [show, setShow] = useState(false);
  function onClick() {
    setShow(!show);
  }
  const projects = FetchProjects();
  console.log(projects);
  return (
    <>
      <button className="project button" onClick={onClick}>
        {show ? "Show Progess" : "Show Details"}
      </button>
      {show ? (
        <Details />
      ) : (
        <div className="container">
            <ProjectCard name ="Portfolio Website"
            short_desc = "The website you are currently on."
            progress= "30"
            link="/"
            />
            <ProjectCard name="Student Parent Guidance"
            short_desc="A website to help guide first time parents who are also full time students"
            />
            {projects.map((project) => (
              <ProjectCard name= {project.name} short_desc={project.short_desc} progress = {project.progress} link = {project.link}/>))}
        </div>
      )}
    </>
  );
};
export default Projects;
