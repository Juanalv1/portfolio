import React from 'react'

const Project = ({image, name, description, technologies, link}) => {
  return (
    <a href={link} className='mt-8 '>
      <div className='border-gray-400 border-2 w-72 bg-[#2f3641] h-[340px] hover:bg-[#2b3649]'>
        <div className='w-full h-[170px]'>
          <img src={image} className='w-full h-full '/>
        </div>
        <hr className='border-gray-400 w-full border' />
        <div className='px-4 py-2 '>
          <h2 className='text-lg my-2 font-semibold'>{name}</h2>
          <p className='my-1 text-sm'>{description}</p>
        </div>

      </div>
    </a>
  )
}

export default Project
