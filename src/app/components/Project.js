import React from 'react'

const Project = ({image, name, description, technologies, link}) => {
  return (
    <a href={link} className='mt-8'>
      <div className='border-white border-2 w-64 '>
        <div className=' h-full w-full'>
          <img src={image} className='w-full'/>
        </div>
        <div className='px-4 py-2 '>
          <h2 className='text-lg my-2'>{name}</h2>
          <p className='my-1'>{description}</p>
          <p className='mt-3 text-gray-300'>{technologies}</p>
        </div>

      </div>
    </a>
  )
}

export default Project
