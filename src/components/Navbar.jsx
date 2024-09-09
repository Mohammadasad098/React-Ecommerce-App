import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-[#f4e1d2] py-2 gap-6 flex justify-evenly flex-wrap items-center'>
        <div>
<img style={{width: "20%"}} src="https://www.softtechgroup.us/images/image-13-09-2023-15-06.png" alt="no image" />
        </div>
        <div className='flex'>
            <div className='mx-3'>
            <Link to='/'>Home</Link> 
            </div>
            <div className='mx-3'>
            <Link to='about'>About</Link>
            </div>
            <div className='mx-3'>
            <Link to='contact'>Contact</Link>
            </div>
            <div className='mx-3'> 
            <Link to='services'>Services</Link>
            </div>
            
            
            
            
        </div>
    </div>

    </>
  )
}

export default Navbar