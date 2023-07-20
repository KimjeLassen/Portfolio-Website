import React, { useState } from "react";
import FetchProjects from "./fetchprojects";
import ProjectCard from "./projectcard";
export default function Details() {
    const [current, setCurrent] = useState(0);
  
  const projectList = FetchProjects();
  
  
  function nextProject() {
    setCurrent(current === projectList.length - 1 ? 0 : current + 1);
  }

  function prevProject() {
    setCurrent(current === 0 ? projectList.length - 1 : current - 1);
  }
    return (
        <div>
          <div className="project button left-arrow" onClick={prevProject}>
            Prev
          </div>
          <div className="project button right-arrow" onClick={nextProject}>
            Next
          </div>

          <div>
            {projectList.map(
              (projectList, index) =>
                current === index && <div><ProjectCard name= {projectList.name} short_desc={projectList.short_desc} progress = {projectList.progress} link = {projectList.link}/></div>
            )}
          </div>
        </div>
    )
}