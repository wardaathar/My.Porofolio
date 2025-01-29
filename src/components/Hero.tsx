import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-center pt-20 px-6 md:px-12'>
      {/* Image Section */}
      <div className='w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg'>
        <Image
          src="/images/w.png.jpg"
          alt="Wardah Athar"
          width={240} 
          height={240} 
          className='object-cover w-full h-full'
          priority
        />
      </div>
      
      {/* Text Section */}
      <div className='text-center md:text-left md:ml-10 mt-6 md:mt-0'>
        <h1 className='text-3xl md:text-4xl font-bold text-violet-900'>Wardah Athar</h1>
        <p className='text-lg md:text-xl text-gray-600 mt-2'>
          Student | Web Developer | Mehndi Artist
        </p>
        <button className='mt-4 px-6 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition'>
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Hero;