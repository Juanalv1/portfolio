import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='mt-4  p-2 flex flex-col gap-y-4 lg:flex-row lg:gap-x-6 lg:justify-center lg:pb-4'>
      <a href='https://wa.link/9wy9je' className='hover:text-primary'>
        <p className='flex'>
          <FaWhatsapp className='w-6 h-6 ' />
          : +58 4145772057
        </p>
      </a>
      <a href='https://t.me/Juanalv18' className='hover:text-primary'>
        <p className='flex'>
          <FaTelegram className='w-6 h-6 ' />
          : @Juanalv18
        </p>
      </a>
      <p className='flex'>
        <MdOutlineEmail className='w-6 h-6 ' />
        : juanjose1811jj@gmail.com
      </p>
    </div>
  )
}

export default Contact
