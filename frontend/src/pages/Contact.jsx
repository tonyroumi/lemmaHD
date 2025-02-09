import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex flex-col items-center">
          {/* Contact information */}
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold mb-2">Your Name</h2>
            <p className="text-white mb-2">email@example.com</p>
            <p className="text-white mb-2">(555) 123-4567</p>
            <p className="text-white">Location, Country</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
