import { motion } from 'motion/react';
import { BookOpen, Wrench, Check, Zap } from 'lucide-react';

export function Overview() {
  return (
    <section id="systeme-coach" className="relative bg-white py-12 sm:py-16 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-50 to-transparent opacity-50" />
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight mb-6 px-4">
            ¿Qué vas a encontrar en{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                el Sistema Coach
              </span>
              <span className="absolute inset-0 blur-lg opacity-30 bg-gradient-to-r from-yellow-400 to-yellow-500" aria-hidden="true"></span>
            </span>
            {' '}?
          </h2>
          
          {/* Subtitle badges */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 px-4">
            <div className="flex items-center gap-3 bg-gradient-to-r from-black to-gray-900 px-6 py-3 rounded-full shadow-lg">
              <BookOpen className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="text-base sm:text-lg font-bold text-white whitespace-nowrap">
                Un sistema práctico
              </span>
            </div>

            <div className="flex items-center gap-1 text-yellow-500">
              <Zap className="w-5 h-5" />
              <Zap className="w-5 h-5" />
              <Zap className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 rounded-full shadow-lg border-2 border-yellow-300">
              <Wrench className="w-5 h-5 text-black flex-shrink-0" />
              <span className="text-base sm:text-lg font-bold text-black whitespace-nowrap">
                Herramientas de campo
              </span>
            </div>
          </div>
        </motion.div>

        {/* Two blocks side by side */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Block 1: La méthode */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="relative h-full p-10 bg-gradient-to-br from-black to-gray-900 rounded-3xl overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl text-white font-bold">
                  8 módulos
                  <span className="block text-yellow-400 mt-2">(el sistema)</span>
                </h3>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Un sistema completo que transforma tu forma de pensar el trabajo físico con balón
                </p>

                {/* Key points */}
                <ul className="space-y-3 pt-4">
                  {[
                    'Entender los principios',
                    'Decidir con conocimiento de causa',
                    'Ajustar según tu contexto',
                    'Pilotar tu temporada',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-base sm:text-lg">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent - moved lower with more spacing */}
                <div className="mt-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500" />
              </div>
            </div>
          </motion.div>

          {/* Block 2: Les outils */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative h-full p-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl overflow-hidden border-4 border-yellow-300">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                  <Wrench className="w-8 h-8 text-yellow-400" />
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl text-black font-bold">
                  Herramientas incluidas
                  <span className="block text-black/80 mt-2">(fichas + bonus)</span>
                </h3>

                {/* Description */}
                <p className="text-lg sm:text-xl text-black/80 leading-relaxed font-medium">
                  Recursos concretos para aplicar inmediatamente en el campo
                </p>

                {/* Key points */}
                <ul className="space-y-3 pt-4">
                  {[
                    '8 fichas prácticas (cualidad por cualidad)',
                    'Bonus descargables',
                    'Acceso de por vida + actualizaciones',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-black">
                      <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                      <span className="text-base sm:text-lg font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}