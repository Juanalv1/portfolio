import Image from 'next/image'
import Navbar from './components/Navbar'
import ColoredHash from './components/ColoredHash'
import ColoredLine from './components/ColoredLine'
import SkillsList from './components/SkillsList'
import ProjectsList from './components/ProjectsList'
import Contact from './components/Contact'
import { FaGithub } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";

export const metadata = {
  title: 'Portfolio',
}
export default function Home() {

  const Projects = [
    {
      name: 'Furniro -  Furniture Marketplace',
      description: 'Furniture Commerce',
      img: 'https://i.ibb.co/LpR5zs1/furniro-n.png',
      technologies: 'Next.js, TailwindCSS, Strapi',
      link: 'https://furniro-phi.vercel.app/',
    },
    {
      name: 'Landing Page',
      description: 'Landing page design',
      img: 'https://i.ibb.co/fn46fxj/landing.png',
      technologies: 'Next.js, TailwindCSS',
      link: 'https://landing-page-9vwjybuht-juanalv1.vercel.app/'
    },
    {
      name: 'Catwiki',
      description: 'Breeds wiki for cats',
      img: 'https://i.ibb.co/3F2PYX2/catwiki-rust-vercel-app.png',
      technologies: 'Next.js, express.js, Node.js, Prisma, TailwindCSS',
      link: 'https://catwiki-rust.vercel.app/'
    },
    {
      name: 'Monito - Pet Store',
      description: 'Pet Store design',
      img: 'https://i.ibb.co/xCpBQW0/localhost-3000.png',
      technologies: 'TailwindCSS, Next.js',
      link: 'https://monito-xi.vercel.app/',
    },
    {
      name: 'Viajes Magios - Demo',
      description: 'Demo sencilla para una agencia de viajes',
      img: 'https://i.postimg.cc/Wbwd9gDp/travel-dream-weaver-85-lovable-app.png',
      technologies: 'TailwindCSS, Next.js',
      link: 'https://travel-dream-weaver-85.lovable.app/',
    },

  ]
  return (
    <main className="w-full h-full text-white ">
      <Navbar />
      <section className='px-4 pt-10 py-2'>
        <div className='flex md:pt-10 md:px-8 lg:px-16'>
          <div className='md:w-2/3 md:mt-6 md:pr-12'>
            <div>
              <h1 className='mr-8 text-3xl mt-8'>
                Juan Alvarado, <span className='text-primary'>Full Stack Developer</span>
              </h1>
              <h2 className='text-gray-400 mt-6'>
                Building responsive web applications adapted to your needs
              </h2>
            </div>
            <div className='flex flex-col md:flex-row gap-y-4 w-full md:h-1/3 h-1/4 py-2 mt-4 items-center md:py-0 md:mt-8 px-8 gap-x-8 md:pl-20'>
              <a href='https://github.com/Juanalv1' >
                <button className='border-primary hover:bg-primary hover:text-stone-800 border rounded px-6 py-2 text-semibold text-lg  flex  items-center justify-around gap-x-3'>
                  <FaGithub className='text-2xl hover:text-primary' /> Github</button>
              </a>
              <a href='#contact' >
                <button className='border-primary hover:bg-primary hover:text-stone-800 border rounded px-6 py-2 text-semibold text-lg  flex  items-center justify-around gap-x-3'>
                  <TbDeviceMobileMessage className='text-2xl hover:text-primary' />Contact</button>
              </a>
            </div>
          </div>
          <div className='hidden md:flex w-1/3'>
            <img src='./lading-image.svg' />
          </div>

        </div>
        <div>
          <div className='mt-16 px-2 md:px-8 lg:px-16 flex flex-col align-items-center' id='hackaton'>
            <h3 className='flex items-center md:text-lg md:pr-20 lg:pr-24' >
              <ColoredHash />hackaton <ColoredLine color={'#00D1FF'} />
            </h3>
            <div className=' lg:flex mt-3 w-full justify-between'>
              <div className=' text-gray-400 flex justify-center items-center text-center  flex-col'>
                <p className='md:px-16 text-xl text-white'>Ganador de la primera hackaton <a className='text-green-600 underline' href='https://www.corpoeureka.com/'>Corpoeureka</a> 2025 en la categoría de <span className='text-primary'>Front-end</span></p>
                <p className='font-normal mt-4 py-4 lg:mx-auto lg:px-8'>Actualmente trabajando como desarrollador novel en la misma</p>
              </div>
              <img src='https://i.postimg.cc/qvzQ0k0m/hackaton.png' className='rounded lg:w-1/3 mr-16' />
            </div>
          </div>
          <div className='mt-8 md:mt-2 px-2 flex items-center gap-x-12 lg:px-12' id='skills'>
            <div className='hidden lg:flex w-1/3'>
              <img src='./skills-image.svg' />
            </div>
            <div className='w-full lg:w-2/3'>
              <h3 className='flex items-center md:text-lg' >
                <ColoredHash />skills <ColoredLine color={'#00D1FF'} />
              </h3>
              <SkillsList />
            </div>
          </div>
          <div className='mt-16 px-2 md:px-8 lg:px-16 ' id='projects'>
            <h3 className='flex items-center md:text-lg md:pr-20 lg:pr-24' >
              <ColoredHash />projects <ColoredLine color={'#00D1FF'} />
            </h3>
            <ProjectsList list={Projects} />
          </div>
        </div>
        <div className='mt-16 px-2 ' id='contact'>
          <h3 className='flex items-center ' >
            <ColoredHash />contact <ColoredLine color={'#00D1FF'} />
          </h3>
          <Contact />
        </div>

      </section>
    </main>
  )
}
