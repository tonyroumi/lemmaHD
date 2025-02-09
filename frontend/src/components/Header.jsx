import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { galleryImages } from '../assets/assets_frontend/assets' 

const Header = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center px-6 md:px-10 lg:px-20 font-["Helvetica"] ' 
         style={{ 
           backgroundImage: `url(${galleryImages[2]})`, 
           backgroundSize: 'cover', 
           backgroundPosition: 'center' 
         }}>
      {/* Content */}
      <div className='flex flex-col items-center justify-center gap-4 text-center mt-[-100px] sm:mt-0'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight [text-shadow:_3px_3px_6px_rgb(0_0_0_/_60%)]'>
          Book An Appointment<br></br>
          for Senior Photos
        </p>
        <a href="#packages" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-black text-sm shadow-lg hover:scale-105 transition-all duration 300'>
            Book appointment <img className='w-3' src={assets.arrow_icon}/>
        </a>
      </div>
    </div>
  )
}

export default Header
