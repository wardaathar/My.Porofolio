import React from 'react';
import Nav from './Nav';

const Hero = () => {
  return (
    <div 
      id="hero" 
      className="min-h-screen bg-no-repeat bg-cover bg-center" 
      style={{
        backgroundImage: "url('/wr.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "right 20% top 15%"
      }}
    >
      <Nav />
      <div className="container grid h-[calc(100vh-60px)] lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block"></div>
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold italic text-center sm:text-left text-white">
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Wardah</p>
            <p data-aos="zoom-in-up">Ather</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
