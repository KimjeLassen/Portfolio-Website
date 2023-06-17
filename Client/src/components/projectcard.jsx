import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Progress } from "flowbite-react";


export default function ProjectCard (props){
  console.log(props);
  var progress;
  var started = true;
  if (props.progress == undefined) {
    progress = 0;
    started = false;
  } else {
    progress = props.progress;
  }
  return (
    <div class="card">
      <div class="card-header">{props.name}</div>
      <div class="card-body card-header description">
        <p class="card-text">{props.short_desc}</p>
        <br></br>
      </div>
      <br></br>
      {started ? (
        <Progress
          progress={progress}
          labelProgress
          progressLabelPosition="inside"
          labelText
          size="lg"
          textLabel="Progress:"
          textLabelPosition="outside"
        />
      ) : (
        <p>Not Started</p>
      )}
      <br></br>
      <a href={props.link} class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
}
