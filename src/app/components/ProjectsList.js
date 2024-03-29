import React from 'react'
import Project from './Project'

const ProjectsList = ({list}) => {
  return (
    <div className='grid grid-auto-fit-md place-content-center place-items-center w-full mt-4 md:pt-4 lg:gap-x-6'>
      {list.map((project, index) => (
        <Project key={index} image={project.img} name={project.name} description={project.description} technologies={project.technologies} link={project.link}/>
      ))}
    </div>
  )
}

export default ProjectsList
