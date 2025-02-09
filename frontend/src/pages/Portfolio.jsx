import React from 'react'
import { galleryImages } from '../assets/assets_frontend/assets'

const Portfolio = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      {galleryImages.map((image, index) => (
        <div 
          key={index}
          className="w-full flex justify-center mb-8"
        >
          <img 
            src={image} 
            alt={`Gallery Image ${index + 1}`}
            className="w-[95vw] h-auto max-h-[80vh] object-contain shadow-xl rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}
export default Portfolio
