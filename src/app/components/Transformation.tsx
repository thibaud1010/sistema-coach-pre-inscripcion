import { motion } from 'motion/react';
import { CTAButton } from '@/app/components/CTAButton';

export function Transformation() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Subtle background accent */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #FFD700 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #FFD700 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #FFD700 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative max-w-[720px] mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          className="space-y-16"
        >
          {/* Titre discret */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-gray-500 font-medium mb-2">
              Lo que esto cambia para ti
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
          </motion.div>

          {/* Phrase choc - Grande typo éditoriale avec icône ❌ */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-8 py-12"
          >
            <div className="flex items-start justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="flex-shrink-0 mt-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-3xl sm:text-4xl">
                  ❌
                </div>
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] text-black leading-[1.2] text-left font-bold tracking-tight">
                Ya no eres el entrenador que pone ejercicios con balón{' '}
                <span className="text-gray-400 font-normal">esperando que trabajen algo.</span>
              </h2>
            </div>
          </motion.div>

          {/* Lista des transformations avec icônes ✅ - Style éditorial */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8 py-16"
          >
            {[
              'Sabes exactamente qué estás desarrollando.',
              'Ves cuándo la cualidad está ahí… y cuándo desaparece.',
              'Ajustas en directo.',
              'Sabes cuándo parar.',
              'Vuelves a casa sin preguntarte si la sesión sirvió de verdad.'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-5 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    ✅
                  </div>
                </div>
                <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-800 leading-[1.6]">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Phrase finale mise en avant - Style éditorial */}
          <motion.div 
            variants={itemVariants}
            className="text-center pt-16 pb-8"
          >
            <div className="space-y-4">
              <p className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-black leading-[1.2] tracking-tight">
                Ya no es solo actividad.
              </p>
              <p className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.2] tracking-tight">
                <span className="relative inline-block">
                  Es desarrollo físico controlado.
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    style={{ transformOrigin: 'center' }}
                  />
                </span>
              </p>
            </div>
          </motion.div>

          {/* Image avec texte - Moment visuel fort */}
          <motion.div 
            variants={itemVariants}
            className="relative my-32 rounded-3xl overflow-hidden"
          >
            <div className="relative h-[450px] sm:h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1584801198917-796b389617f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjb2FjaCUyMHRlYW18ZW58MXx8fHwxNzY5MDk4MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Entraînement football"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
                <div className="space-y-6">
                  <p className="text-[22px] sm:text-[26px] md:text-[30px] text-white leading-[1.6]">
                    Tus jugadores lo sienten.
                  </p>
                  <p className="text-[22px] sm:text-[26px] md:text-[30px] text-white leading-[1.6]">
                    Tus sesiones ganan en coherencia.
                  </p>
                  <p className="text-[26px] sm:text-[32px] md:text-[38px] text-yellow-400 leading-[1.4] pt-4 font-semibold">
                    Y tú, por fin entrenas con un dominio real.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="mt-24"
          >
            <CTAButton
              mainText="APRENDO A LEER FÍSICAMENTE EL JUEGO"
              subText="Saber si mis ejercicios desarrollan algo de verdad."
              color="green"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}