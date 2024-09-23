import React, { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = () => {
    const isSignedIn = false; // Simulate sign-in status
    if (!isSignedIn) {
      setIsModalOpen(true);
    } else {
      // Navigate to explore page
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>


    <div className='bg-custom-image h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-blend-soft-light bg-slate-800 bg-no-repeat'>
      <h1 className='text-white text-5xl font-bold mb-4 drop-shadow-md'>Welcome to HD Movie</h1>
      <p className='text-white text-lg max-w-lg mb-6 drop-shadow-md'>
        Discover the latest blockbusters, classic gems, and hidden treasures from around the world. 
        Join our community of film enthusiasts and dive into the captivating world of cinema.
      </p>
      <button 
        className='bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 shadow-lg transform hover:scale-105'
        onClick={handleExploreClick}
      >
        Explore Now
      </button>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70'>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 scale-95 hover:scale-100'>
            <h2 className='text-xl font-bold mb-4'>Sign In Required</h2>
            <p className='mb-4'>
              To explore our amazing collection, please sign in to your account.
            </p>
            <button 
              className='bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    <div>
      
    </div>
    </div>  
  );
};

export default Home;
