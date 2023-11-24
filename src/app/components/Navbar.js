"use client"
import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5"
import ColoredHash from './ColoredHash';
import ColoredLine from './ColoredLine';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
    }else {
      setIsMenuOpen(false)
    }
  }

  return (
    <div className='fixed top-0 bg-background z-10 w-full px-2 py-3 flex  gap-x-8 text-sm items-center'>
      <hr className='border-primary w-full ml-4 hidden md:flex' />
      <div className='flex justify-center items-center gap-x-4 mx-auto md:gap-x-8 text-lg md:pr-4 lg:pr-6 lg:gap-x-12 md:py-1'>
        <div className='hover:text-primary'>
        <a href='#skills' className='flex'>
          <ColoredHash />Skills
          </a>
        </div>
        <div className='hover:text-primary'>
        <a href='#projects' className='flex'>
          <ColoredHash />Projects
          </a>
        </div>
        <div className='hover:text-primary'>
          <a href='#contact' className='flex'>
            <ColoredHash />Contact
          </a>
        </div>
      </div>  
    </div>
  )
}

export default Navbar
