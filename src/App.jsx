/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { AnimatePresence } from "framer-motion";
import AnimatedPage from './Components/AnimatedPage'
import './App.css'


function App() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className='w-full mx-0 '>
        <Navbar />
      </header>
    <div className="flex-grow p-6 w-full">
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Hero />
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/services"
          element={
            <AnimatedPage>
              <Services />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
    </div>
      <Footer />
    </div>  
  );
}

export default App
