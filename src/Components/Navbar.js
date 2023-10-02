import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaClipboardList, FaTimes } from 'react-icons/fa';
import '../StyleComponents/Navbar.css';
import Contact from './Contact';
import Forms from './Forms';

// Define the Navbar component
function Navbar() {
    // Create state to manage the click event for mobile menu
    const [click, setClick] = useState(false);

     // Function to handle the click event for mobile menu
    const handleClick = () => setClick(!click);

        // Function to close the mobile menu
    const closeMobileMenu = () => setClick(false);
     

  return (
    <div className='navbar'>
     <div className='navbar-container'>
     {/* Define navigation links */}

      <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
         Issad Income Tax
      </Link>
    <div className='menu-icon' onClick={handleClick}>
    {click ? <FaTimes /> : <FaBars />}
    </div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-item'>
      {/* Use onClick to trigger scrolling */}
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
      Contact & Schedule
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




