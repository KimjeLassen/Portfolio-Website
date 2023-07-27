import React from 'react';
import FetchProjects from './fetchprojects';

export default function ThisProject() {
    const projects = FetchProjects();
    const projectOne = projects[0];
    return (
        <>
        <div className="thisheader">
            <h1>
                About THIS website
            </h1>
        </div>
        </>
    )
}