import { Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-neutral-900 to-black text-white py-16 sm:py-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-400 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Logo/Brand */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-black leading-tight">
              <span className="italic" style={{
                background: 'linear-gradient(135deg, #FF1744 0%, #FF4569 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Preparación
              </span>
              {' '}
              <span className="text-white">Física</span>
            </h2>
            <p className="text-sm sm:text-base text-white mt-1">fútbol</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com/Prepafisicafutbol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300"
            >
              <Facebook className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
            <a 
              href="https://www.instagram.com/preparacion.fisica.futbol/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors">
            <Mail className="w-5 h-5" />
            <a href="mailto:prepaphysiquefootball@gmail.com" className="text-base sm:text-lg">
              prepaphysiquefootball@gmail.com
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm sm:text-base text-gray-400">
            <p>© {new Date().getFullYear()} Preparación Física Football. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}