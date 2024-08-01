import React from 'react'
import logo from '../assets/attachment_97037688-removebg-preview.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-20 bg-opacity-80 bg-[#1A1A1A] border-b-2 border-[#E1C2C3] flex justify-between md:px-10'>
      <img src={logo} className='w-20 h-20' />
      <div className='flex gap-32 md:px-48 justify-center items-center'>
      {/* <Link to='/' className='text-white text-2xl font-bold hover:text-yellow-500 hover:underline'>Home</Link>
      <Link to='/docs' className='text-white text-2xl font-bold hover:text-yellow-500 hover:underline'>Docs</Link> */}
      </div>
    </div>
  )
}

export default Navbar
