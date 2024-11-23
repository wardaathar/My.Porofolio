import React from 'react'
import Nav from './Nav'

const Hero = () => {
  return (
    <div id="hero" className=' min-h-screen bg-no-repeat bg-[url(/wr.jpg)]'
    style={{backgroundSize: "25%", backgroundPosition: " right 500px top 200px"}}  data-aos="zoom-in-center"
    >
      <Nav />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg-block'></div>
        <div className='text-[80px] sm:text:[100px] font-bold-itallic leading-tight flex justify-center items-center'>
          <div> 
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up"> Wardah</p>
            <p data-aos="zoom-in-up"> Ather</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero 