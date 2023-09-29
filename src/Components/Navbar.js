import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaClipboardList, FaTimes } from 'react-icons/fa';
import '../StyleComponents/Navbar.css';
import Contact from './Contact';
import Forms from './Forms';
// import Services from './Services';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
     
    // Function to scroll to a section with a given ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu(); // Close the mobile menu after clicking a link
    }
}
  return (
    <div className='navbar'>
     <div className='navbar-container'>
      <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
         Issad Income Tax
      </Link>
    <div className='menu-icon' onClick={handleClick}>
    {click ? <FaTimes /> : <FaBars />}
    </div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-item'>
    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
      Home
    </Link>
    </li>

 
    <li className='nav-item'>
    {/* Use onClick to trigger scrolling */}
    <Link
      to="/contact"
      className='nav-links'
      onClick={closeMobileMenu}
    >
      Contact
    </Link>
  </li>

    <li className='nav-item'>
    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
      About
    </Link>
    </li>

    <li className='nav-item'>
    <Link to='/forms' className='nav-links' onClick={closeMobileMenu}>
      Forms
    </Link>
    </li>
</ul>
    
    </div>   
    </div>
  )
}

export default Navbar;




