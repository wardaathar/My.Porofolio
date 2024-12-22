import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
   
 
      <div className='container pt-32'>

<Image
className="w-300 h-300 rounded-full  items-center mr-7 object-cover border-2 border-red-500"
src="/images/w.png.jpg"
alt="Author Image"
width={280} // Set the width in pixels
height={280} // Set the height in pixels
priority // Optional: For faster loading of important images
/>
<div>
  <h3 className="text-xl font-mono  text-violet-900 ">WARDAH ATHAR</h3>
  <p className='text-slate-600'> STUDENT | WEB DEVELOPER | MEHNDI ARTIST{""}
 </p>
</div>
      
    </div>
  );
};

export default Hero;
