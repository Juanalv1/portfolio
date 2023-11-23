import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='mt-4 border-2 border-gray-300 p-2 flex flex-col gap-y-2'>
      <p className='flex'>
      <FaWhatsapp className='w-6 h-6 '/>
       : +57 3052037466
      </p>
      <p className='flex'>
      <FaTelegram className='w-6 h-6 '/>
       : @Juanalv18
      </p>
      <p className='flex'>
      <MdOutlineEmail className='w-6 h-6 '/>
       : juanjose1811jj@gmail.com
      </p>
    </div>
  )
}

export default Contact
