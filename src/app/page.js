import Image from 'next/image'
import Navbar from './components/Navbar'
import ColoredHash from './components/ColoredHash'
import ColoredLine from './components/ColoredLine'
import SkillsList from './components/SkillsList'
import ProjectsList from './components/ProjectsList'
import Contact from './components/Contact'

export const metadata = {
  title: 'Portfolio',
}
export default function Home() {
  
  const Projects = [
    {
      name: 'Piratajuegos',
      description: 'Download Free Games',
      img: 'https://i.postimg.cc/ydd7RqBw/piratajuegos-com-min.png',
      technologies: 'TailwindCSS, Next.js, Node.js, Express.js, ',
      link: 'https://piratajuegos.com',
    },
    {
      name: 'Authentication App',
      description: 'Authentication with Google/Github/Credentials and profile update',
      img: 'https://i.postimg.cc/mk13Mmd5/auth-app.png',
      technologies: 'TailwindCSS, Next.js, NextAuth, Prisma, PostgreSQL ',
      link: 'https://authentication-d9is70zxx-juanalv1.vercel.app/',
    },

  ]
  return (
    <main className="w-full h-full text-white ">
      <Navbar />
      <section className='px-4 pt-10 py-2'>
        <div className='flex md:pt-10 md:px-8 lg:px-16'>
          <div className='md:w-2/3 md:mt-6 md:pr-12'>
            <h1 className='mr-8 text-3xl mt-8'>
            Juan Alvarado, <span className='text-primary'>Full Stack Developer</span>
            </h1>
            <h2 className='text-gray-400 mt-6'>
              Building responsive web applications adapted to your needs
            </h2>
          </div>
          <div className='hidden md:flex w-1/3'>
            <img src='./lading-image.svg' />
          </div>

        </div>
        <div>
          <div className='mt-8 px-2 flex items-center gap-x-12 lg:px-12' id='skills'>
            <div className='hidden lg:flex w-1/3'>
              <img src='./skills-image.svg' />
            </div>
            <div className='w-full lg:w-2/3'>
            <h3 className='flex items-center md:text-lg' >
              <ColoredHash />skills <ColoredLine color={'#00D1FF'}/>
            </h3>
            <SkillsList />
            </div>
            
          </div>
          <div className='mt-16 px-2 md:px-8 lg:px-16 ' id='projects'>
            <h3 className='flex items-center md:text-lg md:pr-20 lg:pr-24' >
              <ColoredHash />projects <ColoredLine color={'#00D1FF'}/>
            </h3>
            <ProjectsList list={Projects}/>
          </div>
          </div>
        <div className='mt-16 px-2 ' id='contact'>
           <h3 className='flex items-center ' >
              <ColoredHash />contact <ColoredLine color={'#00D1FF'}/>
            </h3>
            <Contact />
          </div>
        
      </section>
    </main>
  )
}
