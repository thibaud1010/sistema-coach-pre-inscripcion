import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export function Transition() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

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
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Subtle animated gradient background */}
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
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Divider - Subtle editorial */}
          <motion.div 
            variants={itemVariants}
            className="relative my-16"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full" />
          </motion.div>

          {/* Title - Editorial style */}
          <motion.div 
            variants={itemVariants}
            className="text-center my-16"
          >
            <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-black text-black leading-[1.1] tracking-tight">
              La diferencia que{' '}
              <span className="relative inline-block">
                lo cambia todo
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Two-column comparison - Garde le tableau car c'est visuel et impactant */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 my-32"
          >
            {/* Left column */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-3xl p-8 sm:p-12">
              <div className="mb-8">
                <div className="inline-block bg-green-600 text-white text-sm font-bold tracking-wider px-4 py-2 rounded-full mb-4">
                  LO QUE DOMINAS
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mt-4">
                  Sabes leer el juego<br />
                  <span className="text-green-600">tácticamente</span>
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  'Ver los espacios',
                  'Entender los desplazamientos',
                  'Analizar las decisiones de los jugadores',
                  'Detectar los desequilibrios'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 text-green-600 flex-shrink-0 mt-1">✓</div>
                    <p className="text-xl text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-3xl p-8 sm:p-12">
              <div className="mb-8">
                <div className="inline-block bg-orange-600 text-white text-sm font-bold tracking-wider px-4 py-2 rounded-full mb-4">
                  LO QUE TE FALTA
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mt-4">
                  ¿Pero sabes leer el juego<br />
                  <span className="text-orange-600">físicamente?</span>
                </h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="text-xl font-semibold text-gray-900 mb-1">
                    Reconocer una acción verdaderamente explosiva
                  </p>
                  <p className="text-lg text-gray-600 italic">No una carrera rápida.</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="text-xl font-semibold text-gray-900 mb-1">
                    Saber si tu juego desarrolla la resistencia de potencia…
                  </p>
                  <p className="text-lg text-gray-600 italic">¿o genera sobre todo fatiga?</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="text-xl font-semibold text-gray-900 mb-1">
                    Reconocer un trabajo de fuerza real
                  </p>
                  <p className="text-lg text-gray-600 italic">No solo duelos.</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="text-xl font-semibold text-gray-900 mb-1">
                    Ver si se está solicitando la velocidad de reacción
                  </p>
                  <p className="text-lg text-gray-600 italic">¿Y cómo verificarlo?</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Explanation - Editorial style avec grande typo */}
          <motion.div 
            variants={itemVariants}
            className="space-y-12 my-32 text-center"
          >
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.7]">
              Si <span className="text-red-600 font-bold">no sabes leer físicamente el juego</span>, es muy difícil hacer un trabajo de calidad real.
            </p>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-600 leading-[1.7]">
              Es como querer trabajar la táctica <span className="text-red-600 font-semibold">sin saber reconocer</span> un bloque bajo, un pressing mal coordinado o malos posicionamientos.
            </p>

            <p className="text-[24px] sm:text-[28px] md:text-[32px] text-black leading-[1.6] font-semibold pt-4">
              Para lo físico, <span className="text-red-600">es exactamente lo mismo.</span>
            </p>

            <div className="pt-8">
              <p className="text-[26px] sm:text-[32px] md:text-[38px] text-black font-bold leading-[1.4]">
                <span className="text-red-600">Sin esta lectura</span>, tu trabajo <span className="text-red-600">no es óptimo.</span>
              </p>
            </div>
          </motion.div>

          {/* BLOC 10 - COÛT DE L'IGNORANCE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="my-40"
          >
            <div className="space-y-10 text-center py-20">
              <p className="text-[26px] sm:text-[30px] md:text-[34px] text-gray-800 leading-[1.6]">
                Sin esta lectura, navegas a ciegas.
              </p>
              
              <p className="text-[24px] sm:text-[28px] md:text-[32px] text-gray-700 leading-[1.6]">
                Crees que estás desarrollando a tus jugadores,<br />
                pero en realidad, a menudo solo los fatigas<br />
                sin hacerlos progresar de verdad.
              </p>
              
              <p className="text-[26px] sm:text-[30px] md:text-[34px] text-black leading-[1.5] font-medium pt-4">
                Esa es toda la diferencia entre<br />
                un equipo que entrena…<br />
                y un equipo que se prepara.
              </p>
            </div>
          </motion.div>

          {/* The big reveal - But it's a skill */}
          <motion.div
            variants={itemVariants}
            className="my-40"
          >
            <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 border-4 border-yellow-400 rounded-3xl p-10 sm:p-16">
              <div className="text-center space-y-8">
                <div className="text-2xl sm:text-3xl font-black text-gray-800 uppercase tracking-wider">
                  PERO
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-2xl sm:text-3xl lg:text-4xl font-black">
                    <span className="text-yellow-600 text-3xl">+</span>
                    <span className="text-black">Leer físicamente el juego</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-2xl sm:text-3xl lg:text-4xl font-black">
                    <span className="text-red-600 text-3xl">×</span>
                    <span className="text-gray-600">no es un talento</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-2xl sm:text-3xl lg:text-4xl font-black">
                    <span className="text-green-600 text-3xl">✓</span>
                    <span className="text-yellow-600">Es una competencia que se aprende</span>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t-2 border-yellow-300">
                  <p className="text-2xl sm:text-3xl font-bold text-black">
                    Y es uno de los pilares fundamentales que dominarás con{' '}
                    <span className="text-yellow-600">el Sistema Coach.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What you were taught - Editorial style */}
          <motion.div 
            variants={itemVariants}
            className="space-y-12 my-32"
          >
            <p className="text-[24px] sm:text-[28px] md:text-[32px] text-gray-700 leading-[1.6]">
              Te formaron para:
            </p>

            <div className="space-y-6">
              {[
                'construir situaciones técnico-tácticas',
                'dinamizar sesiones',
                'organizar el juego',
                'y quizás también en preparación física: cómo desarrollar las cualidades físicas, cómo planificarlas',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-[14px] flex-shrink-0" />
                  <span className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-600 leading-[1.7]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What you were NOT taught */}
          <motion.div 
            variants={itemVariants}
            className="space-y-12 my-32"
          >
            <p className="text-[24px] sm:text-[28px] md:text-[32px] text-black leading-[1.6] font-medium">
              Mucho menos para:
            </p>

            <div className="space-y-6">
              {[
                'Ver en 10 segundos si tu juego reducido trabaja realmente la fuerza',
                'Entender rápidamente si tu juego produce explosividad… y tener los recursos para provocarla cuando no es el caso',
                'Ajustar una situación en pleno entrenamiento, tocando los parámetros correctos (espacio, reglas, tiempo, recuperaciones, consignas…) para obtener el efecto físico deseado',
                'Saber cuándo parar porque la cualidad física se desvanece',
                'Gestionar la carga con balón sin agotar a tus jugadores semana tras semana',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50 to-transparent border-l-4 border-yellow-400"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-[14px] flex-shrink-0" />
                  <span className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-900 leading-[1.7]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution intro - Editorial divider */}
          <motion.div 
            variants={itemVariants}
            className="relative my-40"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[32px] sm:text-[40px] md:text-[48px] text-black leading-[1.3] text-center font-bold tracking-tight my-24"
          >
            Es exactamente por eso que{' '}
            <span className="relative inline-block">
              el Sistema Coach
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
            {' '}existe.
          </motion.p>

          {/* Big statement - Keep this impactful moment */}
          <motion.div
            variants={itemVariants}
            className="relative my-32 p-12 sm:p-16 lg:p-20 bg-gradient-to-br from-black to-gray-900 rounded-3xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
            
            <p className="relative text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.3]">
              <span className="text-white">El Sistema Coach permite al entrenador </span>
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                dominar mejor el trabajo físico con balón.
              </span>
            </p>
          </motion.div>

          {/* What it doesn't bring */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6 my-24 text-center"
          >
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-600 leading-[1.7]">No te da recetas.</p>
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-600 leading-[1.7]">No te impone un método.</p>
          </motion.div>

          {/* What it brings */}
          <motion.p
            variants={itemVariants}
            className="text-[26px] sm:text-[32px] md:text-[38px] text-black leading-[1.5] text-center font-semibold my-24"
          >
            Te da la mirada (del preparador físico) y las referencias que te faltan para:
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="space-y-6 my-24"
          >
            {[
              'saber qué cualidad física buscas trabajar',
              'entender cómo debe expresarse en el juego',
              'identificar las condiciones necesarias para que aparezca',
              'observar las señales correctas para saber si funciona',
              'ajustar los parámetros cuando no es el caso',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="flex items-start gap-6 group"
              >
                <span className="text-yellow-400 flex-shrink-0 text-[28px] font-bold group-hover:scale-110 transition-transform">→</span>
                <span className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-900 leading-[1.7]">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}