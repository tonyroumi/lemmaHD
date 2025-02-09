import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const PackageMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-white font-["Helvetica"]' id='packages'>
        <h1 className='text-3xl font-medium'> Select a Package </h1>
        <p className= 'sm:w-1/3 text-center text-sm'> Browse through the list of packages and schedule a booking.</p>
        <div className='flex justify-start sm:justify-center gap-4 pt-5 w-full px-8 sm:px-4 overflow-x-auto'>
            <div className='flex gap-6 sm:gap-4 sm:justify-center min-w-min'>
                <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to='/appointment/basic'>
                    <div className='w-48 md:w-64 h-48 md:h-64 mb-2 border border-white/50 rounded-lg flex flex-col p-4 text-center'>
                        <h2 className='text-lg font-bold text-left mb-4 flex flex-row justify-between items-center'>
                            Individual <br className='md:hidden sm:hidden'/> Shoot
                            <span className='text-base font-normal inline'>$200</span>
                        </h2>
                        <p className='flex-grow flex items-center italic text-left'>Basic service includes one hour of photography</p>
                    </div>
                </Link>

                <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to='/appointment/standard'>
                    <div className='w-48 md:w-64 h-48 md:h-64 mb-2 border border-white/50 rounded-lg flex flex-col p-4 text-center'>
                        <h2 className='text-lg font-bold text-left mb-4 flex flex-row justify-between items-center'>
                            Group <br className='md:hidden sm:hidden'/> Shoot
                            <span className='text-base font-normal inline'>$250</span>
                        </h2>
                        <p className='flex-grow flex items-center italic text-left'>Standard service includes two hours of photography</p>
                    </div>
                </Link>

                <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to='/appointment/premium'>
                    <div className='w-48 md:w-64 h-48 md:h-64 mb-2 border border-white/50 rounded-lg flex flex-col p-4 text-center'>
                        <h2 className='text-lg font-bold text-left mb-4 flex flex-row justify-between items-center'>
                            Partner <br className='md:hidden sm:hidden'/>Shoot
                            <span className='text-base font-normal inline'>$300</span>
                        </h2>
                        <p className='flex-grow flex items-center italic text-left'>Premium service includes three hours of photography</p>
                    </div>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default PackageMenu
