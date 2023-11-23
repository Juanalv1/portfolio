import Image from 'next/image'
import Navbar from './components/Navbar'
import ColoredHash from './components/ColoredHash'
import ColoredLine from './components/ColoredLine'
import SkillsList from './components/SkillsList'
import ProjectsList from './components/ProjectsList'
import Contact from './components/Contact'


export default function Home() {
  const Projects = [
    {
      name: 'Piratajuegos',
      description: 'Download Free Games',
      img: 'https://i.postimg.cc/ydd7RqBw/piratajuegos-com-min.png',
      technologies: 'TailwindCSS, Next.js, Node.js, Express.js, ',
      link: 'https://piratajuegos.com',
    },

  ]
  return (
    <main className="w-full h-full text-white ">
      <Navbar />
      <section className='px-4 pt-10 py-2'>
        <h1 className='mr-8 text-3xl mt-8'>
          Juan Alvarado, <span className='text-primary'>Full Stack Developer</span>
        </h1>
        <h2 className='text-gray-400 mt-6'>
          Building responsive web applications adapted to your needs
        </h2>
        <div className='mt-16 px-2' id='skills'>
          <h3 className='flex items-center ' >
            <ColoredHash />skills <ColoredLine color={'#00D1FF'}/>
          </h3>
          <SkillsList />
        </div>
        <div className='mt-16 px-2 ' id='projects'>
          <h3 className='flex items-center ' >
            <ColoredHash />projects <ColoredLine color={'#00D1FF'}/>
          </h3>
          <ProjectsList list={Projects}/>
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
