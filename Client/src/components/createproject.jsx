import React from "react";
import axios from "axios";

export default function CreateProject() {
    const postData = async () => {
        try {
            await axios.post(`http://localhost:5000/projekter/create`, {
                name: document.getElementById("projectName").value,
                short_desc: document.getElementById("projectShort").value,
                long_desc: document.getElementById("projectLong").value,
                link: document.getElementById("projectLink").value,
                progress: document.getElementById("projectProgress").value,
        })
        } catch (error) {
            console.log(err);
        }
    }
    const handleSubmit = () => {
        postData();
    }
    return (
        <div>
            <h1>Create Project</h1>
            <form onSubmit={handleSubmit} action="/projekter">
                <div className="form-group">
                
                    <label for="projectName">Projekt Navn</label>
                    <br></br>
                    <input type="text" className="project-text" id="projectName" placeholder="Enter Project Name" required></input>
                    <br></br>
                    <br></br>

                    <label for = "projectShort">Kort Beskrivelse</label>
                    <br></br>
                    <textarea className="project-area" id="projectShort" placeholder="Enter a short project description" required></textarea>
                    <br></br>
                    <br></br>

                    <label for = "projectLong">Lang Beskrivelse</label>
                    <br></br>
                    <textarea className="project-area" id="projectLong" placeholder="Enter a longer project description" required></textarea>
                    <br></br>
                    <br></br>

                    <label for = "projectLink">Projekt Link</label>
                    <br></br>
                    <input type="text" className="project-text" id="projectLink" placeholder="Enter Project Link"></input>
                    <br></br>
                    <br></br>

                    <label for = "projectProgress">Projekt Fremgang</label>
                    <br></br>
                    <input type="number" className="project-text" id="projectProgress" placeholder="Enter Project Progress"></input>
                    <br></br><br></br><br></br>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )}