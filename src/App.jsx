import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Curri from './pages/curri/Curri'
import Tutor from './pages/tutor/Tutor'
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='curri' element={<Curri/>}/>
        <Route path='tutor' element={<Tutor/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App