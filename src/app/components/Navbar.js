"use client"
import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5"
import ColoredHash from './ColoredHash';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 w-full bg-background shadow-lg z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO O NOMBRE */}
        <a href="#" className="text-xl font-bold text-primary hover:opacity-90 transition">
          Juan Alvarado
        </a>

        {/* LINKS (DESKTOP) */}
        <div className="hidden md:flex gap-x-8 text-base">
          <a href="#services" className="hover:text-primary flex items-center gap-x-1">
            <ColoredHash />Servicios
          </a>
          <a href="#projects" className="hover:text-primary flex items-center gap-x-1">
            <ColoredHash />Casos de Éxito
          </a>
          <a href="#contact" className="hover:text-primary flex items-center gap-x-1">
            <ColoredHash />Contacto
          </a>
        </div>

        {/* BOTÓN CTA */}
        <a href="#contact" className="hidden md:block">
          <button className="bg-primary text-stone-900 rounded-full px-5 py-2 font-semibold hover:scale-105 transition">
            Solicitar proyecto
          </button>
        </a>

        {/* MENÚ MÓVIL */}
        <button className="md:hidden text-2xl" onClick={handleClick}>
          {isMenuOpen ? <IoClose /> : <IoIosMenu />}
        </button>
      </div>

      {/* MENÚ LATERAL PARA MÓVIL */}
      {isMenuOpen && (
        <div className="bg-background md:hidden flex flex-col items-center py-6 gap-y-6 shadow-lg">
          <a href="#services" onClick={handleClick} className="hover:text-primary">
            <ColoredHash />Servicios
          </a>
          <a href="#projects" onClick={handleClick} className="hover:text-primary">
            <ColoredHash />Casos de Éxito
          </a>
          <a href="#contact" onClick={handleClick} className="hover:text-primary">
            <ColoredHash />Contacto
          </a>
          <a href="#contact" onClick={handleClick}>
            <button className="bg-primary text-stone-900 rounded-full px-6 py-2 font-semibold hover:scale-105 transition">
              Solicitar proyecto
            </button>
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
