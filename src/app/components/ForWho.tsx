import { motion } from 'motion/react';
import { ArrowRight, X, CheckCircle2, Check } from 'lucide-react';

export function ForWho() {
  const forYouPoints = [
    "eres entrenador de fútbol, en categorías inferiores o adultos",
    "ya trabajas (o quieres trabajar) el físico con balón, y quieres entender cómo hacerlo realmente eficaz en tus juegos",
    "quieres saber qué cualidad física trabajas, cómo debe expresarse en el juego, y qué observar para asegurarte de que progresa",
    "quieres que tus jugadores entiendan lo que les pides, y sientan que tus sesiones tienen un sentido real",
    "quieres saber cómo gestionar la carga del trabajo físico con balón",
    "eres entrenador de categorías inferiores y a veces haces trabajo sin balón (motricidad, coordinación, prevención…), pero quieres saber si ese trabajo se transfiere realmente al juego"
  ];

  const notForYouPoints = [
    "ya sabes reconocer sin dudar cómo se expresa cada cualidad física en el juego",
    "sabes dar consignas claras y eficaces para orientar precisamente a los jugadores hacia la cualidad buscada",
    "sabes modificar los parámetros de tus situaciones (espacios, reglas, duraciones, número de jugadores) para acentuar voluntariamente el trabajo de una cualidad física",
    "sabes dosificar la carga de entrenamiento con balón y mantener a tus jugadores en forma durante toda la temporada, sin sobrecargas ni lesiones",
    "ya no tienes ninguna duda, al terminar tus sesiones, sobre lo que se ha trabajado físicamente de verdad"
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            ¿El Sistema Coach es{' '}
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 50%, #FFB700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              para ti
            </span>
            {' '}?
          </h2>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* FOR YOU Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="relative bg-gradient-to-br from-white to-yellow-50/30 border-2 border-yellow-400/30 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-yellow-400/60">
              
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] mb-6 shadow-lg shadow-[#FFD700]/30">
                  <CheckCircle2 className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">
                  ✅ El Sistema Coach es para ti si…
                </h3>

                {/* Points */}
                <ul className="space-y-5">
                  {forYouPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + (index * 0.05),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="flex items-start gap-4 text-neutral-700 leading-relaxed text-lg sm:text-xl"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-black" strokeWidth={3} />
                      </div>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className="mt-10 pt-8 border-t-2 border-yellow-400/30">
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100/50 rounded-xl p-6 border border-yellow-400/30">
                    <p className="text-lg sm:text-xl font-bold text-yellow-900 flex flex-col gap-2">
                      <span className="flex items-center gap-3">
                        <ArrowRight className="w-6 h-6 flex-shrink-0 text-yellow-600" strokeWidth={2.5} />
                        <span>Si te has reconocido en varios de estos puntos,</span>
                      </span>
                      <span className="flex items-center gap-3">
                        <ArrowRight className="w-6 h-6 flex-shrink-0 text-yellow-600" strokeWidth={2.5} />
                        <span>el Sistema Coach ha sido diseñado para ti.</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* NOT FOR YOU Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="relative bg-gradient-to-br from-white to-neutral-50 border-2 border-neutral-300 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-neutral-400">
              
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 shadow-lg shadow-neutral-900/30">
                  <X className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">
                  ❌ El Sistema Coach no es para ti si…
                </h3>

                {/* Points */}
                <ul className="space-y-5">
                  {notForYouPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + (index * 0.05),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="flex items-start gap-4 text-neutral-700 leading-relaxed text-lg sm:text-xl"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center mt-1">
                        <X className="w-3.5 h-3.5 text-neutral-700" strokeWidth={3} />
                      </div>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className="mt-10 pt-8 border-t-2 border-neutral-300">
                  <div className="bg-gradient-to-r from-neutral-50 to-neutral-100/50 rounded-xl p-6 border border-neutral-300">
                    <p className="text-lg sm:text-xl font-bold text-neutral-800 flex flex-col gap-2">
                      <span className="flex items-center gap-3">
                        <ArrowRight className="w-6 h-6 flex-shrink-0 text-neutral-600" strokeWidth={2.5} />
                        <span>Si marcas todos estos puntos sin dudar,</span>
                      </span>
                      <span className="flex items-center gap-3">
                        <ArrowRight className="w-6 h-6 flex-shrink-0 text-neutral-600" strokeWidth={2.5} />
                        <span>este sistema probablemente no te aportará gran cosa.</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Closing statement removed as requested */}
        </motion.div>
      </div>
    </section>
  );
}