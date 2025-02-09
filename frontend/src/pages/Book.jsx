import React from 'react'
import Header from '../components/Header'
import PackageMenu from '../components/PackageMenu'

const Book = () => {
  return (
    <div>
        <Header/>
        <hr className="border-0 h-[5px] md:h-[10px] bg-white mx-auto w-full"/>
        <PackageMenu/>
    </div>
  )
}

export default Book
