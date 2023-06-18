import React, { useState } from "react";
import "./projects.css";
import Details from "./details";
import ProjectCardList from "./projectcardlist";

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
        <ProjectCardList />
      )}
    </>
  );
};
export default Projects;
