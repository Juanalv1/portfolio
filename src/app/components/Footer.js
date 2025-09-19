import { FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#202630] text-gray-400 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-y-4">
        {/* COPYRIGHT */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Juan Alvarado. Todos los derechos reservados.
        </p>

        {/* LINKS SOCIALES */}
        <div className="flex gap-x-6 text-xl">
          <a
            href="https://github.com/Juanalv1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.link/9wy9je"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/Juanalv18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
}
