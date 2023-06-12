import React, { useState } from "react";
import "./projects.css";
import Details from "./details";
import ProjectCard from "./projectcard";

const Projects = () => {
  const [show, setShow] = useState(false);
  function onClick() {
    setShow(!show);
  }

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
            description = "The website you are currently on."
            progress= "30"
            link="/"
            />
            <ProjectCard name="Student Parent Guidance"
            description="A website to help guide first time parents who are also full time students"
            />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
      )}
    </>
  );
};
export default Projects;
