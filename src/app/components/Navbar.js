"use client"
import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5"
import ColoredHash from './ColoredHash';

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
    <div className='fixed top-0 bg-background z-10 w-full px-2 py-3 border-b border-primary flex justify-center items-center gap-x-8 text-sm p'>
      <a href='#projects'>
        <div>
          <ColoredHash />Projects
        </div>
      </a>
      <a href='#skills'>
        <div>
          <ColoredHash />Skills
        </div>
      </a>
      <a href='#contact'>
        <div>
          <ColoredHash />Contact
        </div>
      </a>
    </div>
  )
}

export default Navbar
