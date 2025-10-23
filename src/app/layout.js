import './globals.css'

export const metadata = {
  title: 'Juan Alvarado | Desarrollador Web',
  description:
    'Soy Juan Alvarado, desarrollador web especializado en crear soluciones digitales para negocios que buscan dar el salto al mundo online. Diseño sitios web modernos, rápidos y orientados a resultados.',
  keywords: [
    'Juan Alvarado',
    'desarrollador web',
    'frontend developer',
    'Next.js',
    'React',
    'portafolio web',
    'tiendas online',
    'ecommerce',
    'landing pages',
    'sitios web para negocios',
  ],
  authors: [{ name: 'Juan Alvarado', url: 'https://juanalvarado.dev' }],
  openGraph: {
    title: 'Juan Alvarado | Desarrollador Web',
    description:
      'Desarrollo sitios web y tiendas online modernas para negocios que quieren digitalizarse. Conoce mis proyectos y cómo puedo ayudarte a crecer online.',
    url: 'https://juanalvarado.dev',
    siteName: 'Juan Alvarado | Dev',
    images: [
      {
        url: 'https://i.postimg.cc/vZpfg5jX/www-juanalvarado-dev.png', // coloca aquí una imagen de vista previa de tu portafolio
        width: 1200,
        height: 630,
        alt: 'Portafolio de Juan Alvarado - Desarrollador Web',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Alvarado | Desarrollador Web',
    description:
      'Desarrollo sitios web modernos y funcionales para negocios que buscan crecer online.',
    creator: '@juanalvaradodev', // opcional si tienes Twitter
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://juanalvarado.dev'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className=' scroll-smooth scroll-pt-16'>
      <body className='bg-background font-fira '>{children}</body>
    </html>
  )
}
