import React from 'react'
import { RiMenuFold4Fill } from "react-icons/ri";

function Nav() {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center' > 
            <div className='text-xl font-medium'> Wardah </div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'> Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#Myprojects'>MyProjects</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            <RiMenuFold4Fill className='md:hidden' size={30} />
        </div>

    </div>
  )
}

export default Nav