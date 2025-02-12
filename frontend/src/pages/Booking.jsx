import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [searchParams] = useSearchParams()
  
  // Get package info from state
  const packageType = searchParams.get('package')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneExt: '+1',
    phone: '',
    email: '',
    comments: '',
    school: ''
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({ ...validationErrors, [name]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'phone', 'email', 'school'];
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        errors[field] = true;
      }
    });

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <section className='gap-3 flex flex-col min-h-screen text-white bg-zinc-800 p-4 md:p-8'>
      <div className='flex-3 flex flex-col lg:flex-row items-center lg:items-start mx-auto lg:ml-20 gap-8 lg:gap-24 w-full max-w-[1600px]'>
        <div className='relative bg-white p-8 md:p-16 rounded-lg shadow-md w-full lg:w-[900px]'>
          <button 
            onClick={() => navigate(-1)}
            className='absolute left-4 top-4 text-gray-600 hover:text-gray-800 flex items-center gap-1 
            transition-all duration-200 hover:scale-105 active:scale-95 p-2 rounded-lg hover:bg-gray-100'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <h1 className='text-gray-800 text-xl font-semibold mb-1 mt-8 text-center'> Your Details </h1>
          <p className='text-gray-600 mb-4 text-center'> Your registration will be confirmed by email </p>
          <h2 className='text-gray-800 text-lg mb-4 text-center'></h2>
          <form className='max-w-2xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-3 mb-3'>
              <div className='w-full md:flex-1'>
                <label htmlFor="firstName" className='block text-gray-700 mb-2'>First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange}
                  className={`w-full p-2 border rounded bg-gray-100 text-black ${validationErrors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {validationErrors.firstName && <p className='text-red-500 text-sm mt-1'>First name is required</p>}
              </div>
              <div className='w-full md:flex-1'>
                <label htmlFor="lastName" className='block text-gray-700 mb-2'>Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange}
                  className={`w-full p-2 border rounded bg-gray-100 text-black ${validationErrors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {validationErrors.lastName && <p className='text-red-500 text-sm mt-1'>Last name is required</p>}
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-3 mb-3'>
              <div className='w-full md:flex-1'>
                <label htmlFor="phone" className='block text-gray-700 mb-2'>Phone *</label>
                <div className='flex gap-2'>
                  <select
                    name="phoneExt"
                    value={formData.phoneExt}
                    onChange={handleChange}
                    className='w-24 p-2 border rounded bg-gray-100 border-gray-300 text-black'
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+64">+64</option>
                    <option value="+353">+353</option>
                  </select>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className={`w-full p-2 border rounded bg-gray-100 text-black ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                </div>
                {validationErrors.phone && <p className='text-red-500 text-sm mt-1'>Phone number is required</p>}
              </div>
              <div className='w-full md:flex-1'>
                <label htmlFor="email" className='block text-gray-700 mb-2'>Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  className={`w-full p-2 border rounded bg-gray-100 text-black ${validationErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {validationErrors.email && <p className='text-red-500 text-sm mt-1'>Email is required</p>}
              </div>
            </div>

            <div className='mb-3'>
              <label htmlFor="school" className='block text-gray-700 mb-2'>School *</label>
              <input 
                type="text" 
                id="school" 
                name="school" 
                value={formData.school} 
                onChange={handleChange}
                className={`w-full p-2 border rounded bg-gray-100 text-black ${validationErrors.school ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {validationErrors.school && <p className='text-red-500 text-sm mt-1'>School is required</p>}
            </div>

            <div className='mb-3'>
              <label htmlFor="comments" className='block text-gray-700 mb-1'>Comments</label>
              <textarea 
                id="comments" 
                name="comments" 
                value={formData.comments} 
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded bg-gray-100 text-black'
                rows="3"
              />
            </div>

            <button 
              type="submit" 
              onClick={handleSubmit}
              className='w-full max-w-md mx-auto block bg-black text-white py-1.5 px-4 rounded hover:bg-blue-600'
            >
              Submit
            </button>
          </form>
          
          <div className='mt-8 flex justify-center max-w-2xl mx-auto'>
            <div className='bg-gray-200 p-6 rounded-lg shadow-md w-full'>
              <h3 className='text-gray-800 text-lg font-semibold mb-2'>Important Information</h3>
              <p className='text-gray-600 text-sm'>
                Please ensure all required fields marked with an asterisk (*) are completed. 
                After submission, you will receive a confirmation email with further instructions.
                If you have any questions, feel free to include them in the comments section above.
              </p>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col gap-8 w-full lg:w-[400px]'>
          <div className='hidden lg:block bg-white p-6 rounded-lg shadow-md'>
            <img 
              src={assets.placeholder} 
              alt="Photography sample" 
              className='w-full h-64 object-cover rounded-lg mb-4'
            />
            <p className='text-gray-800 text-lg font-semibold'>Photography</p>
            <p className='text-gray-600'>Professional photography services for your special moments.</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-gray-800 text-lg font-semibold mb-3'>Order Summary</h3>
            <div className='space-y-2'>
              <div className='flex justify-between text-gray-600'>
                <span>Service Type:</span>
                <span>Photography</span>
              </div>
              <div className='flex justify-between text-gray-600'>
                <span>Duration:</span>
                <span>2 Hours</span>
              </div>
              <div className='flex justify-between text-gray-600'>
                <span>Location:</span>
                <span>School Premises</span>
              </div>
              <div className='mt-4 pt-4 border-t border-gray-200'>
                <div className='flex justify-between text-gray-800 font-semibold'>
                  <span>Total Amount:</span>
                  <span>$299.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
