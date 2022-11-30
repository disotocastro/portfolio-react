import React from 'react';
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

      <div>
        <img src={logo} alt="logo" style={{ width: '50px' }} />
      </div>

      {/* Menu */}
      <div>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className='hidden'>
        <FaBars />
      </div>

      {/* Mobile menu */}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Work</li>
      </ul>


      {/* socials icons */}
      <div></div>

    </div>
  );
};

export default Navbar;