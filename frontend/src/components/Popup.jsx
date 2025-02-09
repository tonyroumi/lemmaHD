import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Book', path: '/' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-white text-2xl cursor-pointer"
      >
        ☰
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-start justify-center z-50 
          animate-[slideIn_0.3s_ease-out]">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white text-2xl"
          >
            ×
          </button>

          <img 
            src={assets.logo} 
            alt="lemma_logo" 
            className="w-24 mb-12 cursor-pointer ml-16"
            onClick={() => {
              navigate('/');
              setIsOpen(false);
            }}
          />

          <nav className="flex flex-col items-start gap-8 ml-16 w-full">
            {menuItems.map((item) => (
              <div key={item.title} className="w-[90%] border-b border-white/10 pb-4">
                <button
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                  className="text-white text-xl font-light hover:text-gray-300 transition-all"
                >
                  {item.title}
                </button>
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Popup;