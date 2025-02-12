// import React from 'react'
// import {assets} from '../assets/assets_frontend/assets'
// import { galleryImages } from '../assets/assets_frontend/assets' 

// const Header = () => {
//   return (
//     <div className='w-full h-screen flex items-center justify-center px-6 md:px-10 lg:px-20 font-["Helvetica"] ' 
//          style={{ 
//            backgroundImage: `url(${galleryImages[2]})`, 
//            backgroundSize: 'cover', 
//            backgroundPosition: 'center' 
//          }}>
//       {/* Content */}
//       <div className='flex flex-col items-center justify-center gap-4 text-center mt-[-100px] sm:mt-0'>
//         <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight [text-shadow:_4px_4px_8px_rgb(0_0_0_/_100%)]'>
//           Book Your Senior Photos Now!
//         </p>
//         <button 
//           onClick={() => {
//             document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
//           }}
//           className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-black text-sm shadow-2xl hover:scale-105 transition-all duration 300 cursor-pointer'>
//             Book appointment <img className='w-3' src={assets.arrow_icon}/>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Header
// slideshow:

import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { galleryImages } from '../assets/assets_frontend/assets';

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 8000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='w-full h-screen flex items-center justify-center px-6 md:px-10 lg:px-20 font-["Helvetica"] relative'
      style={{
        backgroundImage: `url(${galleryImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      {/* Content */}
      <div className='flex flex-col items-center justify-center gap-4 text-center mt-[-100px] sm:mt-0'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-stone-300 font-semibold leading-tight md:leading-tight lg:leading-tight [text-shadow:_4px_4px_8px_rgb(0_0_0_/_100%)]'>
          Senior Graduation Photos
        </p>
        <button
          onClick={() => {
            document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
          }}
          className='flex items-center gap-2 bg-stone-300 px-8 py-3 rounded-full text-black text-sm shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer'
        >
          Book Now <img className='w-3' src={assets.arrow_icon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
