import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const PackageMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-white font-["Helvetica"]' id='packages'>
        <h1 className='text-3xl font-medium'> Packages </h1>
        <div className='flex justify-start sm:justify-center gap-4 pt-5 w-full px-8 sm:px-4 overflow-x-auto'>
            <div className='flex gap-6 sm:gap-4 sm:justify-center min-w-min'>
                <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to='/booking'>
                    <div className='w-48 md:w-64 h-48 md:h-64 mb-2 border border-white/50 rounded-lg flex flex-col p-4 text-center'>
                        <h2 className='text-lg font-bold text-left mb-4 flex flex-row justify-between items-center'>
                            Single Grad <br className='md:hidden sm:hidden'/><br/> (1 hour)
                            <span className='text-base font-normal inline'>$250</span>
                        </h2>
                        <p className='flex-grow flex items-center italic text-left'>Click for more details*</p>
                    </div>
                </Link>

                <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to='/booking'>
                    <div className='w-48 md:w-64 h-48 md:h-64 mb-2 border border-white/50 rounded-lg flex flex-col p-4 text-center'>
                        <h2 className='text-lg font-bold text-left mb-4 flex flex-row justify-between items-center'>
                            Duo Grad <br className='md:hidden sm:hidden'/><br/> (1 hour)
                            <span className='text-base font-normal inline'>$350</span>
                        </h2>
                        <p className='flex-grow flex items-center italic text-left'>Click for more details*</p>
                    </div>
                </Link>

                <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to='/booking'>
                    <div className='w-48 md:w-64 h-48 md:h-64 mb-2 border border-white/50 rounded-lg flex flex-col p-4 text-center'>
                        <h2 className='text-lg font-bold text-left mb-4 flex flex-row justify-between items-center'>
                            Group Grad <br className='md:hidden sm:hidden'/><br/>(1-2 hours)
                            <span className='text-base font-normal inline'>$500-900</span>
                        </h2>
                        <p className='flex-grow flex items-center italic text-left'>Click for more details*</p>
                    </div>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default PackageMenu
