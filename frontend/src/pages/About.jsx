import React from 'react'
import { assets , galleryImages} from '../assets/assets_frontend/assets'
const About = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className='text-center text-2xl pt-10 text-stone-300'>
      <p> ABOUT <span className='text-stone-500 font-medium'>ME </span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={galleryImages[0]} alt='about'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-stone-300'>
          <p> My name robel.</p>
          <p> My name robel.</p>
          <p> My name robel.</p>
          <p> My name robel.</p>
        </div>
      </div>


     
     
    </div>
  )
}

export default About
