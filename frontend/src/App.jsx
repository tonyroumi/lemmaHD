import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Book from './pages/Book'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>


      <Routes>
        <Route path='/' element={<Book/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>  
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/appointment' element={<Appointment/>}/>

      </Routes>  
    </div>
  )
}

export default App
