import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchProjects from "./fetchprojects";
import ProjectCard from "./projectcard";

export default function ProjectCardList() {
    const projects = FetchProjects();
    return (
    <div className="container">
            <ProjectCard name ="Portfolio Website"
            short_desc = "The website you are currently on."
            progress= "30"
            link="/"
            />
            {projects.map((project) => (
              <ProjectCard name= {project.name} short_desc={project.short_desc} progress = {project.progress} link = {project.link}/>))}
        </div>
    )
}