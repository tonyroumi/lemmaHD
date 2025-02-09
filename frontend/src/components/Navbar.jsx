import React, {useState} from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setActiveItem(null); // Reset active item when closing menu
    };

    const toggleInfo = (item) => {
        setActiveItem(activeItem === item ? null : item);
    };

    return (
        <div className='w-full bg-black'>
            <div className='flex items-center justify-between text-white text-sm py-1 border-b border-white px-4 font-["Helvetica"]'>
                <img className='w-14 cursor-pointer' src={assets.logo} alt="lemma_logo" onClick={() => navigate('/')}/>
                
                <ul className='hidden md:flex items-start gap-5 text-xs'>
                    <NavLink to='/'>
                        <li className='py-1'>BOOK</li>
                        <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'/>
                    </NavLink>

                    <NavLink to='/portfolio'>
                        <li className='py-1'>PORTFOLIO</li>
                        <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'/>
                    </NavLink>

                    <NavLink to='/about'>
                        <li className='py-1'>ABOUT</li>
                        <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'/>
                    </NavLink>

                    <NavLink to='/contact'>
                        <li className='py-1'>CONTACT</li>
                        <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'/>
                    </NavLink>

                </ul>      

                <button className='md:hidden text-white' onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <>
                                <circle cx="12" cy="6" r="2" />
                                <circle cx="12" cy="12" r="2" />
                                <circle cx="12" cy="18" r="2" />
                            </>
                        )}
                    </svg>
                </button>

                {isOpen && (
                    <div className='md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 z-50 flex items-start justify-between
                        transition-all duration-500 ease-in-out font-["Helvetica"]'
                        style={{
                            animation: 'slideAndFade 0.5s ease-in-out',
                            transformOrigin: 'left'
                        }}>
                        <ul className='flex flex-col items-start gap-4 font-medium w-full text-base pt-8 text-xs'>
                            <NavLink to='/' onClick={toggleMenu} className='w-full'>
                                <li className='py-2 animate-fadeIn px-3 flex justify-between items-center'>
                                    <img src={assets.logo} alt="Logo" className='w-12'/>
                                    <svg 
                                        className="w-4 h-4 cursor-pointer" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleMenu();
                                        }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </li>
                                <hr className='border-t-[0.5px] border-gray-600 w-[95%] mx-auto opacity-50'></hr>
                            </NavLink>
                            <NavLink to='/' onClick={(e) => {
                                e.preventDefault();
                                toggleInfo('book');
                            }} className='w-full'>
                                <li className='py-2 animate-fadeIn px-3 flex justify-between items-center' style={{animationDelay: '0.1s'}}>
                                    <span className="flex justify-center items-center">Book</span>
                                    <svg 
                                        className={`w-4 h-4 arrow ${activeItem === 'book' ? 'arrow-rotate' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </li>
                                <div className={`info-box ${activeItem === 'book' ? 'active' : ''} bg-gray-900 px-3 py-2 text-sm`}>
                                    Book your photography session here
                                </div>
                                <hr className='border-t-[0.5px] border-gray-600 w-[95%] mx-auto opacity-50'></hr>
                            </NavLink>
                            <NavLink to='/portfolio' onClick={(e) => {
                                e.preventDefault();
                                toggleInfo('portfolio');
                            }} className='w-full'>
                                <li className='py-2 animate-fadeIn px-3 flex justify-between items-center' style={{animationDelay: '0.2s'}}>
                                    <span>Portfolio</span>
                                    <svg 
                                        className={`w-4 h-4 arrow ${activeItem === 'portfolio' ? 'arrow-rotate' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </li>
                                <div className={`info-box ${activeItem === 'portfolio' ? 'active' : ''} bg-gray-900 px-3 py-2 text-sm`}>
                                    View our portfolio of stunning photography
                                </div>
                                <hr className='border-t-[0.5px] border-gray-600 w-[95%] mx-auto opacity-50'></hr>
                            </NavLink>
                            <NavLink to='/about' onClick={(e) => {
                                e.preventDefault();
                                toggleInfo('about');
                            }} className='w-full'>
                                <li className='py-2 animate-fadeIn px-3 flex justify-between items-center' style={{animationDelay: '0.3s'}}>
                                    <span>About</span>
                                    <svg 
                                        className={`w-4 h-4 arrow ${activeItem === 'about' ? 'arrow-rotate' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </li>
                                <div className={`info-box ${activeItem === 'about' ? 'active' : ''} bg-gray-900 px-3 py-2 text-sm`}>
                                    Learn more about our team and our mission
                                </div>
                                <hr className='border-t-[0.5px] border-gray-600 w-[95%] mx-auto opacity-50'></hr>
                            </NavLink>
                            <NavLink to='/contact' onClick={(e) => {
                                e.preventDefault();
                                toggleInfo('contact');
                            }} className='w-full'>
                                <li className='py-2 animate-fadeIn px-3 flex justify-between items-center' style={{animationDelay: '0.4s'}}>
                                    <span>Contact</span>
                                    <svg 
                                        className={`w-4 h-4 arrow ${activeItem === 'contact' ? 'arrow-rotate' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </li>
                                <div className={`info-box ${activeItem === 'contact' ? 'active' : ''} bg-gray-900 px-3 py-2 text-sm`}>
                                    Get in touch with us for any inquiries
                                </div>
                                <hr className='border-t-[0.5px] border-gray-600 w-[95%] mx-auto opacity-50'></hr>
                            </NavLink>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default navbar
