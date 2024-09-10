import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<div className="bg-[#dbbaba] w-full ">
  <div className="navbar flex justify-between items-center px-4 py-3">
    
    {/* Navbar Start: Dropdown Menu */}
    <div className="navbar-start md:hidden">  {/* Hidden on medium and larger screens */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-7"  // Increased size for better visibility on small screens
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/services'>Services</Link></li>
        </ul>
      </div>
    </div>
    
    {/* Navbar Center: Logo */}
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl">
        <img className="w-24 sm:w-24 md:w-32" src="https://www.softtechgroup.us/images/image-13-09-2023-15-06.png" alt="Logo" />
      </a>
    </div>

    {/* Full Navbar Links for Larger Screens */}
    <div className="navbar-start hidden md:flex">
      <ul className="menu menu-horizontal p-0 gap-4">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/services'>Services</Link></li>
      </ul>
    </div>
  </div>
</div>


  )
}

export default Navbar







