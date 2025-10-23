import Navbar from './components/Navbar'
import ColoredHash from './components/ColoredHash'
import ColoredLine from './components/ColoredLine'
import ProjectsList from './components/ProjectsList'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata = {
  title: 'Juan Alvarado | Desarrollo Web y Sistemas',
}

export default function Home() {

  const Projects = [
    {
      name: 'FitCoach - Demo',
      description: 'Sitio demo para entrenador personal con secciones interactivas.',
      img: 'https://i.postimg.cc/26xvXsfJ/fitcoachpro-lovable-app.png',
      technologies: 'Next.js, TailwindCSS',
      link: 'https://fitcoachpro.lovable.app/',
    },
    {
      name: 'Furniro - Tienda de Muebles',
      description: 'E-commerce optimizado para vender muebles en línea. Incluye carrito de compras y panel de administración.',
      img: 'https://i.ibb.co/LpR5zs1/furniro-n.png',
      technologies: 'Next.js, TailwindCSS, Strapi',
      link: 'https://furniro-phi.vercel.app/',
    },
    {
      name: 'Landing Page',
      description: 'Página de aterrizaje moderna y diseñada para captar clientes.',
      img: 'https://i.ibb.co/fn46fxj/landing.png',
      technologies: 'Next.js, TailwindCSS',
      link: 'https://landing-page-9vwjybuht-juanalv1.vercel.app/'
    },
    {
      name: 'Xtrene Shop',
      description: 'Prototipo de tienda urbana en línea con diseño atractivo.',
      img: 'https://postimg.cc/rDQPhgR4',
      technologies: 'Next.js, TailwindCSS',
      link: 'https://xtrene-shop-urban-vibe.lovable.app/'
    },
    {
      name: 'Monito - Tienda de Mascotas',
      description: 'Demo de tienda online para mascotas con diseño atractivo y responsivo.',
      img: 'https://i.ibb.co/xCpBQW0/localhost-3000.png',
      technologies: 'Next.js, TailwindCSS',
      link: 'https://monito-xi.vercel.app/',
    },
    {
      name: 'Viajes Mágicos - Demo',
      description: 'Sitio demo para agencia de viajes con secciones interactivas.',
      img: 'https://i.postimg.cc/qvT4Fvhk/travel-dream-weaver-85-lovable-app-1.png',
      technologies: 'Next.js, TailwindCSS',
      link: 'https://travel-dream-weaver-85.lovable.app/',
    },
  ]

  return (
    <main className="w-full h-full text-white">
      <Navbar />

      {/* HERO */}
      <section className="px-4 pt-24 md:pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          🚀 Impulsa tu negocio con una <span className="text-primary">página web profesional</span>
        </h1>
        <h2 className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg md:text-xl">
          Desarrollo sitios web modernos, rápidos y personalizados para emprendedores y empresas que quieren vender más y automatizar su negocio.
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <a href="#contact">
            <button className="bg-primary text-stone-900 rounded px-8 py-3 text-lg font-semibold shadow hover:scale-105 transition">
              Solicitar un proyecto
            </button>
          </a>
          <a href="https://github.com/Juanalv1">
            <button className="border border-primary rounded px-8 py-3 text-lg font-semibold hover:bg-primary hover:text-stone-900 transition">
              Ver portafolio en GitHub
            </button>
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="services" className="bg-[#202630] px-6 md:px-16 py-16">
        <h3 className="flex items-center text-xl md:text-2xl mb-10">
          <ColoredHash />Servicios <ColoredLine color={'#00D1FF'} />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2f3641] p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Diseño de Páginas Web</h4>
            <p className="text-gray-300">Landing pages modernas para atraer y convertir visitantes en clientes.</p>
          </div>
          <div className="bg-[#2f3641] p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Sistemas a Medida</h4>
            <p className="text-gray-300">Desarrollo de sistemas internos para automatizar procesos y ahorrar tiempo.</p>
          </div>
          <div className="bg-[#2f3641] p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Integraciones</h4>
            <p className="text-gray-300">Conexión con WhatsApp, CRM, pasarelas de pago y más.</p>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="px-6 md:px-16 py-16">
        <h3 className="flex items-center text-xl md:text-2xl mb-8">
          <ColoredHash />Proyectos <ColoredLine color={'#00D1FF'} />
        </h3>
        <ProjectsList list={Projects} />
      </section>

      {/* CONTACTO */}
      <section id="contact" className="bg-[#202630] px-6 md:px-16 py-16">
        <h3 className="flex items-center text-xl md:text-2xl mb-6">
          <ColoredHash />Contacto <ColoredLine color={'#00D1FF'} />
        </h3>
        <p className="text-gray-400 mb-6 max-w-xl">
          Cuéntame tu idea y te responderé en menos de 24 horas.
          Estoy disponible por WhatsApp, Telegram o correo electrónico.
        </p>
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
