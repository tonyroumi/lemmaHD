import React, { lazy, Suspense } from 'react'
import { lemmaPics } from '../assets/assets_frontend/assets'

const Portfolio = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <Suspense fallback={<div className="animate-pulse bg-gray-200 w-[95vw] h-[80vh] rounded-lg"/>}>
        {lemmaPics.map((image, index) => (
          <div 
            key={index}
            className="w-full flex justify-center mb-8"
          >
            <img 
              src={image} 
              alt={`Gallery Image ${index + 1}`}
              loading="lazy"
              className="w-[95vw] h-auto max-h-[80vh] object-contain shadow-xl rounded-lg"
            />
          </div>
        ))}
      </Suspense>
    </div>
  )
}

export default Portfolio
