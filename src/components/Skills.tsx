import React from 'react'

const Skills= () => {
  return (
    <div  id='skills' className='container pt-32' data-aos="fade-down">
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl'>Technology I work with</h2>
                <p className='text-gray-300 pt-2'>
                proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java for back-end programming.
              </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-right">Typescript</h2>
                        <h2 data-aos="zoom-in-right">React.js</h2>
                        <h2 data-aos="zoom-in-right">Next.js</h2>
                         </div>
                         <div className='space-y-2'>
                        <h2 data-aos="zoom-in-right">Tailwand</h2>
                        <h2 data-aos="zoom-in-right">Css</h2>
                        <h2 data-aos="zoom-in-right">Node.js</h2>
                         </div>
                     </div>
            </div>
        </div>
 </div>
  )
}

export default Skills