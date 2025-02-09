import React, {useState} from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="lemma_logo"/>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>BOOK</li>
                <hr className='border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden'/>
            </NavLink>

            <NavLink to='/portfolio'>
                <li className='py-1'>PORTFOLIO</li>
                <hr className='border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden'/>
            </NavLink>

            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden'/>
            </NavLink>

            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden'/>
            </NavLink>

        </ul>      
        
        <div className='flex items-center gap-4'>
            <button onClick={()=>navigate('/appointment')} className='bg-black text-white px-8 py-3 rounded-full font-light md:block'>Book Now !</button>
        </div>
    </div>
  )
}

export default navbar
