import React, { useState, useEffect } from "react";

export default function FetchProjects() {
  const [projects, setProjects] = useState([]);
  async function fetchProjects() {
    const response = await fetch("/projects/get");
    const responseJson = await response.json();
    console.log(responseJson);
    setProjects(responseJson);
  }
  useEffect(() => {
    
    fetchProjects();
  }, []);
  return projects;
}
