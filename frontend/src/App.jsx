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
    <div className='min-h-screen bg-black'>
      <div>
        <Navbar/>


        <Routes>
          <Route path='/' element={<Book/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>  
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/appointment' element={<Appointment/>}/>

        </Routes>  
      </div>
    </div>
  )
}

export default App
