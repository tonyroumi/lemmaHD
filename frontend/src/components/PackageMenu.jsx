import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const PackageMenu = () => {
  const packages = [
    {
      id: 'single',
      title: 'Single Grad',
      duration: '(1 hour)',
      price: '$250'
    },
    {
      id: 'duo',
      title: 'Duo Grad',
      duration: '(1 hour)',
      price: '$350'
    },
    {
      id: 'group',
      title: 'Group Grad',
      duration: '(1-2 hours)',
      price: '$500-900'
    }
  ]

  return (
    <div className='flex flex-col items-center gap-4 py-16 text-white font-["Helvetica"]' id='packages'>
        <h1 className='text-3xl font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'> Packages </h1>
        <div className='flex justify-start sm:justify-center gap-4 pt-5 w-full px-8 sm:px-4 overflow-x-auto'>
            <div className='flex gap-6 sm:gap-4 sm:justify-center min-w-min'>
                {packages.map((pkg) => (
                    <Link 
                        key={pkg.id}
                        className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-20px] transition-all duration-500' 
                        to={{
                            pathname: '/booking',
                            search: `?package=${pkg.id}`
                        }}
                        state={{ packageType: pkg.id, packageDetails: pkg }}
                    >
                        <div className='w-48 md:w-64 h-48 md:h-64 mb-2 border border-white/50 bg-stone-300 rounded-lg flex flex-col p-4 text-black text-center'>
                            <h2 className='text-lg font-bold text-left mb-4 flex flex-row justify-between items-center'>
                                {pkg.title} <br className='md:hidden sm:hidden'/><br/> {pkg.duration}
                                <span className='text-base font-normal inline'>{pkg.price}</span>
                            </h2>
                            <p className='flex-grow flex items-center italic text-left'>Click for more details*</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PackageMenu
