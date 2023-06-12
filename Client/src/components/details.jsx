import React, { useState } from "react";
export default function Details() {
    const [current, setCurrent] = useState(0);

  const projectList = [<p>1</p>,
  <p>2</p>];
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
                current === index && <div>{projectList}</div>
            )}
          </div>
        </div>
    )
}