import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
export default function Header() {
    return (
        <>
        <div className="rowC">
            <Link to="/">
            <button className="homeHeader button">Home</button>
            </Link>
            <Link to="/about">
            <button className="aboutHeader button">About</button>
            </Link>
            <Link to="/projects">
            <button className="projectsHeader button">Projects</button>
            </Link>
            <Link to="/projects/create">
            <button className="createProjectHeader button">Create Project</button>
            </Link>
            <Link to="/current">
                <button className="currentHeader button">About This Website</button>
            </Link>
        </div>
        </>
    )
}