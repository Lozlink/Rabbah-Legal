/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

import './App.css'

function App() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <header className='w-full mx-0 '>
        <Navbar />
      </header>
      <div className="flex-grow p-6 w-full">
        <Routes>
          <Route path='/' element={
            <>
           <Hero />
           <Home /> 
           </>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>  
    
     
  );
}

export default App
