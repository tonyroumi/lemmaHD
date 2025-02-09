import React, { useState } from 'react'

const Location = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [addresses, setAddresses] = useState([]);

  // Sample addresses - replace with your actual data source or API call
  const sampleAddresses = [
    '123 Main St, City, State',
    '456 Oak Ave, Town, State',
    '789 Pine Rd, Village, State',
    // Add more addresses as needed
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter addresses based on search query
    const filteredAddresses = sampleAddresses.filter(address =>
      address.toLowerCase().includes(query.toLowerCase())
    );
    setAddresses(filteredAddresses);
  };

  const handlePackageSelect = () => {
    // ... existing package selection logic ...
    
    const locationElement = document.getElementById('location-section');
    locationElement?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='text-white pb-56 pt-30' id='location-section'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Location Details</h2>
      <p className='text-center mb-6'>Please enter the address where your photo shoot will take place:</p>
      <div className='max-w-md mx-auto'>
        <input
          type="text"
          placeholder="Search address..."
          value={searchQuery}
          onChange={handleSearch}
          className='w-full px-4 py-2 text-gray-900 bg-white rounded-lg focus:outline-none'
        />
        
        {searchQuery && (
          <div className='mt-2 bg-gray-800 rounded-lg'>
            {addresses.map((address, index) => (
              <div 
                key={index}
                className='p-2 hover:bg-gray-700 cursor-pointer'
                onClick={() => setSearchQuery(address)}
              >
                {address}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Location
