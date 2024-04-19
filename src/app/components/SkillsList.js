import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { IoIosGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

const SkillsList = () => {
  return (
    <div className='mt-6 flex flex-wrap gap-x-6 gap-y-8 justify-around md:pt-12 xl:w-[565px] mx-auto'>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <FaReact className='text-5xl text-cyan-500'/>
        <h4 className='mt-1'>
          React.js
        </h4>
      </div>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <TbBrandNextjs className='text-5xl text-black'/>
        <h4 className='mt-1'>
          Next.js
        </h4>
      </div>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <SiTailwindcss className='text-5xl text-blue-400'/>
        <h4 className='mt-1'>
          TailwindCSS
        </h4>
      </div>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <FaNodeJs className='text-5xl text-green-500'/>
        <h4 className='mt-1'>
          Node.js
        </h4>
      </div>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <SiExpress className='text-5xl '/>
        <h4 className='mt-1'>
          Express.js
        </h4>
      </div>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <SiPostgresql className='text-5xl text-blue-500'/>
        <h4 className='mt-1'>
          PostgreSQL
        </h4>
      </div>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <SiPrisma className='text-5xl'/>
        <h4 className='mt-1'>
          Prisma
        </h4>
      </div>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <IoIosGitBranch className='text-5xl text-orange-500'/>
        <h4 className='mt-1'>
          git
        </h4>
      </div>
      <div className='justify-center items-center flex flex-col w-[84px] text-gray-300'>
        <FaGithub className='text-5xl '/>
        <h4 className='mt-1'>
          Github
        </h4>
      </div>
   </div>
  )
}

export default SkillsList
