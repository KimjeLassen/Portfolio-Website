import React from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Header from "./header";
import Footer from "./footer";
import "./body.css";
import Projects from "./projects";
import CreateProject from "./createproject";

function App() {
  return (
    <>
      <div class="page-container">
        <div class="content-wrap">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/create" element={<CreateProject />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
