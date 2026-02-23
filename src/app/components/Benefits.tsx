import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CTAButton } from '@/app/components/CTAButton';

export function Benefits() {
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
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-yellow-50/20 to-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Subtle background */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, #FFD700 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, #FFD700 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, #FFD700 0%, transparent 50%)',
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
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Titre principal - Style éditorial */}
          <motion.h3
            variants={itemVariants}
            className="text-[36px] sm:text-[44px] md:text-[52px] text-center text-black leading-[1.2] tracking-tight font-bold"
          >
            Un ejemplo concreto para entender bien{' '}
            <span className="relative inline-block">
              por qué existe el Sistema Coach
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'center' }}
              />
            </span>
          </motion.h3>

          {/* BLOC 11 - TRANSITION VERS L'EXEMPLE */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8 py-12"
          >
            <p className="text-[24px] sm:text-[28px] md:text-[32px] text-gray-800 leading-[1.6]">
              Este problema de lectura,<br />
              lo he visto con mis propios ojos.
            </p>
            
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.6]">
              Aquí está el ejemplo que me hizo entender<br />
              que tener los buenos ejercicios<br />
              no era suficiente:
            </p>
          </motion.div>

          {/* L'histoire - Style éditorial sobre */}
          <motion.div variants={itemVariants} className="space-y-8 my-20">
            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Hace un tiempo, comparto un ejercicio simple con entrenadores que me siguen.
            </p>
            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-800 leading-[1.7]">
              Un <span className="font-medium text-black">1 contra 1 en transición</span>, pensado inicialmente para trabajar la velocidad y la transición defensiva.
            </p>

            {/* Image de l'exercice */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/20 my-16">
              <ImageWithFallback
                src="https://www.preparationphysiquefootball.com/images/explo-transit.png"
                alt="Schéma exercice 1v1 en transition"
                className="w-full h-auto"
              />
            </div>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Añado para darles ideas:
            </p>
            <div className="relative pl-8 border-l-4 border-yellow-400 py-6 bg-gradient-to-r from-yellow-50 to-transparent rounded-r-xl my-8">
              <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-900 italic leading-[1.6]">
                « Reduciendo ciertas distancias y ajustando las consignas, también se puede orientar el ejercicio hacia más explosividad. »
              </p>
            </div>
          </motion.div>

          {/* Suite - Dialogues épurés */}
          <motion.div variants={itemVariants} className="space-y-10 my-24">
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-black leading-[1.6] font-medium">
              Una semana después, llegan los mensajes.
            </p>

            <div className="relative pl-8 border-l-4 border-yellow-400 py-6 bg-gradient-to-r from-yellow-50 to-transparent rounded-r-xl">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-900 italic leading-[1.6]">
                « Profe, intentamos trabajar la explosividad con ese ejercicio. »
              </p>
            </div>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Respondo naturalmente:
            </p>

            <div className="relative pl-8 border-l-4 border-gray-300 py-6 bg-gray-50 rounded-r-xl">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 italic leading-[1.6]">
                « ¡Genial!<br />
                ¿Redujisteis las distancias?<br />
                ¿Cambiasteis las consignas? »
              </p>
            </div>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Respuesta:
            </p>

            <div className="relative pl-8 border-l-4 border-gray-300 py-6 bg-gray-50 rounded-r-xl">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-600 italic leading-[1.6]">
                « Eeh… no. »
              </p>
            </div>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Me sorprende.<br />
              Me parece raro.
            </p>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Insisto:
            </p>

            <div className="relative pl-8 border-l-4 border-gray-300 py-6 bg-gray-50 rounded-r-xl">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 italic leading-[1.6]">
                « Vale…<br />
                ¿Y visteis acciones realmente explosivas? »
              </p>
            </div>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Respuesta:
            </p>

            <div className="relative pl-8 border-l-4 border-gray-300 py-6 bg-gray-50 rounded-r-xl">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-600 italic leading-[1.6]">
                « Eeh… creo. »
              </p>
            </div>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Entonces hago la pregunta que lo cambia todo:
            </p>

            <div className="relative pl-8 border-l-4 border-gray-300 py-6 bg-gray-50 rounded-r-xl">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 italic leading-[1.6]">
                « ¿Arrancadas realmente explosivas?<br />
                ¿3-4 primeros apoyos explosivos desde la transición? »
              </p>
            </div>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]">
              Respuesta:
            </p>

            <div className="relative pl-8 border-l-4 border-gray-300 py-6 bg-gray-50 rounded-r-xl">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-600 italic leading-[1.6]">
                « Eeh… quizás… no lo sé muy bien. »
              </p>
            </div>
          </motion.div>

          {/* Le moment de révélation */}
          <motion.div
            variants={itemVariants}
            className="relative my-32 py-16 text-center"
          >
            <p className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.3] tracking-tight">
              <span className="relative inline-block">
                Y fue en ese preciso momento cuando lo entendí.
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
          </motion.div>

          {/* Explication - Grande typo éditoriale */}
          <motion.div variants={itemVariants} className="space-y-12 my-32">
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.7]">
              Ya sabía que el trabajo físico con balón planteaba problemas.
            </p>
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.7]">
              Recibía cada semana decenas de mensajes sobre los parámetros, la dosificación, la gestión de la carga…{' '}
              <span className="text-black font-medium">Pero ahí había entendido algo más profundo.</span>
            </p>
          </motion.div>

          {/* Problème identifié - Encadré sobre */}
          <motion.div
            variants={itemVariants}
            className="relative p-10 sm:p-14 lg:p-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-3xl border-2 border-yellow-200 my-32"
          >
            <div className="space-y-10">
              <p className="text-[26px] sm:text-[32px] md:text-[38px] text-black leading-[1.4] font-semibold">
                Querían trabajar una cualidad física concreta…<br />
                <span className="font-bold">pero sin saber:</span>
              </p>

              <div className="space-y-6 pl-8">
                {[
                  'cómo debía verse realmente en el juego',
                  'qué observar para asegurarse de que aparecía',
                  'ni qué parámetros modificar para provocarla cuando no era el caso'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-[14px] flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-800 leading-[1.7]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ce qu'ils avaient */}
          <motion.div variants={itemVariants} className="space-y-8 my-24 pl-8 border-l-4 border-gray-300">
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-800 leading-[1.6]">
              Tenían el ejercicio.
            </p>
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-800 leading-[1.6]">
              Tenían la intención.
            </p>
          </motion.div>

          {/* Ce qui manquait - Encadré noir sobre */}
          <motion.div
            variants={itemVariants}
            className="relative my-40 p-12 sm:p-16 lg:p-20 bg-gradient-to-br from-black to-gray-900 rounded-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full blur-[100px]" />
            </div>
            <div className="relative">
              <p className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-black text-center leading-[1.2] tracking-tight">
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Pero no tenían las referencias.
                </span>
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="my-24"
          >
            <CTAButton
              mainText="YO TAMBIÉN QUIERO ESAS REFERENCIAS DE CAMPO"
              subText="Para no perderme el verdadero trabajo físico."
              color="orange"
            />
          </motion.div>

          {/* Divider élégant */}
          <motion.div 
            variants={itemVariants}
            className="relative my-40"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
          </motion.div>

          {/* Conclusion éditoriale */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-12 my-32"
          >
            <p className="text-[28px] sm:text-[36px] md:text-[44px] text-gray-700 leading-[1.3]">
              No es una cuestión{' '}
              <span className="line-through text-gray-400">de ejercicios.</span>
            </p>

            <div className="space-y-6 pt-8">
              <p className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-black leading-[1.3]">
                Es una cuestión de <span className="relative inline-block">
                  lectura
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
              </p>
              <p className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-black leading-[1.3]">
                De <span className="relative inline-block">
                  parametrización
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
              </p>
              <p className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-black leading-[1.3]">
                De <span className="relative inline-block">
                  ajuste en plena sesión
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
              </p>
              <p className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-black leading-[1.3]">
                Y de <span className="relative inline-block">
                  dosificación a lo largo de la temporada
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
              </p>
            </div>

            <div className="pt-16">
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl px-8 sm:px-12 py-6 sm:py-8">
                  <p className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-black leading-[1.3]">
                    Eso es lo que vas a aprender a dominar ahora.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}