import React, { useState } from 'react';
import { RiMenuFold4Fill } from "react-icons/ri";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Wardah</div>
            <ul className={`md:flex gap-10 lg:gap-16 ${isMenuOpen ? 'flex' : 'hidden'} md:block`}>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#Myprojects'>My Projects</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            <RiMenuFold4Fill 
              className='md:hidden cursor-pointer' 
              size={30} 
              onClick={toggleMenu}
            />
        </div>
    </div>
  );
}

export default Nav;
