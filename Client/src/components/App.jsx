import React from 'react'
import '../App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import Header from './header'
import Footer from './footer'
import './body.css'

function App() {
  return (
    <>
    <div class="page-container">
      <div class="content-wrap">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default App
