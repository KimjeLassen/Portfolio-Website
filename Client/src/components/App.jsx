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
import Website from "./website";
import Login from "./login";

function App() {
  return (
    <>
      <div class="page-container">
        <div class="content-wrap">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projekter" element={<Projects />} />
            <Route path="/projekter/create" element={<CreateProject />} />
            <Route path="/current" element={<Website/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
