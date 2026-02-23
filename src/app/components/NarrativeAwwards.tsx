import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export function NarrativeAwwards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
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
    <div ref={containerRef} className="relative bg-white">
      {/* SECCIÓN 1 - VALIDACIÓN */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
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
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="mb-24"
          >
            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-black leading-[1.1] tracking-tight text-black">
              "Hoy trabajo todo<br />
              con balón."
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.6] mb-24"
          >
            Si eres entrenador, es muy probable que esto sea cierto.<br />
            <span className="text-black font-medium">Y no es casualidad.</span>
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[24px] sm:text-[28px] md:text-[32px] text-black font-semibold leading-[1.5] mb-12"
          >
            Tomas esta decisión por buenas razones:
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 mb-24"
          >
            {[
              'los jugadores están más implicados',
              'las sesiones tienen más sentido',
              'el disfrute está presente',
              'el juego sigue siendo el eje central',
              'y en el fútbol amateur, a menudo no se tiene preparador físico'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex items-start gap-6 group"
              >
                <motion.div 
                  className="w-2 h-2 bg-yellow-400 rounded-full mt-[14px] flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <span className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.6] group-hover:text-black transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-800 leading-[1.6] mb-8"
          >
            Así que te adaptas.<br />
            <span className="text-black font-medium">Integras lo físico en el juego.</span>
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-600 leading-[1.7] mb-6"
          >
            Quizás te apoyas en enfoques<br />
            como la <span className="text-black font-semibold">periodización táctica</span><br />
            o la <span className="text-black font-semibold">preparación física integrada</span>.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="mt-24 pt-16 border-t border-gray-200"
          >
            <p className="text-[26px] sm:text-[32px] md:text-[38px] text-black font-bold leading-[1.4] tracking-tight">
              El balón se convierte entonces<br />
              <span className="relative inline-block">
                en el soporte principal
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              <br />
              de tu trabajo físico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 2 - ENTRENAMIENTO */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-gray-50">
        <div className="relative max-w-[720px] mx-auto px-8 sm:px-12 lg:px-16">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[24px] sm:text-[30px] md:text-[36px] text-black font-medium leading-[1.5] mb-16"
          >
            Esta semana, en el entrenamiento,<br />
            <span className="font-bold">todo fue bien.</span>
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-3 mb-20"
          >
            {[
              'Los jugadores estaban enchufados.',
              'Había intensidad.',
              'Ritmo.',
              'Vida.'
            ].map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.6]"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-800 leading-[1.6] mb-4"
          >
            Trabajaste con balón.<br />
            <span className="text-black font-semibold">Mucho con balón.</span>
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="my-24"
          >
            <div className="relative inline-block">
              <p className="text-[40px] sm:text-[52px] md:text-[64px] font-black text-black leading-none tracking-tight">
                Normal.
              </p>
              <motion.div 
                className="absolute -bottom-4 left-0 w-full h-2 bg-yellow-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-600 leading-[1.7] mb-20"
          >
            En el amateur, a menudo es lo que mejor funciona.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-3 mb-16"
          >
            {[
              'Los jugadores estaban implicados.',
              'Encadenaban acciones.',
              'Se entregaban.'
            ].map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.6]"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.6] mb-24"
          >
            Sudaban.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="pt-16 border-t border-gray-300"
          >
            <p className="text-[40px] sm:text-[52px] md:text-[64px] font-black text-black leading-[1.1] tracking-tight">
              En definitiva,<br />
              <span className="text-gray-700">la sensación era buena.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3 - EL PARTIDO / MINUTO 70 */}
      <section className="relative py-32 sm:py-40 lg:py-48 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.03) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative max-w-[720px] mx-auto px-8 sm:px-12 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16 mb-32"
          >
            {[
              'Luego llega el partido.',
              'El domingo.',
              'A menudo, hacia el minuto 70.'
            ].map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.3,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-[24px] sm:text-[30px] md:text-[36px] text-gray-800 leading-[1.5] font-medium"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* 70:00 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative my-40"
          >
            <div className="relative text-center">
              <motion.div
                className="absolute inset-0 blur-3xl opacity-20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)' }}
              />
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-black leading-none tracking-tighter text-black">
                  70:00
                </div>
                <motion.div 
                  className="absolute -bottom-4 sm:-bottom-6 left-0 w-full h-2 sm:h-3 bg-red-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  style={{ transformOrigin: 'center' }}
                />
                <motion.div 
                  className="absolute inset-0 border-4 border-red-500 rounded-2xl"
                  animate={{ opacity: [0, 0.3, 0], scale: [1, 1.1, 1.2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 mt-32"
          >
            <motion.p
              variants={itemVariants}
              className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]"
            >
              El sistema de juego sigue en pie.<br />
              Los principios están ahí.<br />
              La organización se mantiene.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[26px] sm:text-[32px] md:text-[38px] text-black font-semibold leading-[1.5] pt-12"
            >
              Pero físicamente…<br />
              <span className="italic">algo ya no responde.</span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-3 pt-12"
            >
              {[
                'Tus jugadores llegan tarde a los balones.',
                'Pierden los duelos.',
                'Los superan en velocidad.'
              ].map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[22px] sm:text-[26px] md:text-[30px] text-black leading-[1.6] pt-12 font-medium"
            >
              Sin necesariamente jugar peor,<br />
              tu equipo empieza a sufrir.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7] pt-8 italic"
            >
              Y a menudo, es en ese momento cuando el partido se decide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 4 - REVELACIÓN */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-white">
        <div className="relative max-w-[720px] mx-auto px-8 sm:px-12 lg:px-16">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.7] mb-12"
          >
            En ese momento,<br />
            no te dices:
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="pl-8 border-l-2 border-gray-200 mb-16"
          >
            <p className="text-[19px] sm:text-[22px] md:text-[26px] text-gray-400 leading-[1.7] italic">
              "Hemos trabajado mal esta semana."
            </p>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.7] mb-12"
          >
            Sino más bien:
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 mb-32"
          >
            {[
              '"No lo entiendo."',
              '"En el entrenamiento, respondía."',
              '"Sin embargo, habíamos trabajado bien."'
            ].map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40, rotateX: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative pl-10 pr-6 py-6 border-l-4 border-yellow-400">
                  <p className="text-[22px] sm:text-[28px] md:text-[34px] text-black leading-[1.4] font-semibold italic">
                    {quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="mb-32"
          >
            <p className="text-[28px] sm:text-[36px] md:text-[44px] text-black font-bold leading-[1.3] tracking-tight">
              Y es exactamente ahí<br />
              donde aparece el verdadero problema.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 mb-32"
          >
            <motion.p
              variants={itemVariants}
              className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.7]"
            >
              En el entrenamiento,<br />
              tu atención se centra naturalmente en el juego.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-2">
              {[
                'En la táctica.',
                'En la técnica.',
                'En los desplazamientos.',
                'En las decisiones de los jugadores.'
              ].map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-600 leading-[1.7]"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[24px] sm:text-[28px] md:text-[32px] text-black font-medium leading-[1.6]"
            >
              Es normal.<br />
              Es tu papel como entrenador.<br />
              Es ahí donde tu mirada es más aguda.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-16">
              <p className="text-[28px] sm:text-[34px] md:text-[40px] text-black font-bold leading-[1.4] tracking-tight">
                Pero el trabajo físico,<br />
                cuando está integrado en el juego,<br />
                <span className="text-red-600">no se lee con los mismos indicadores.</span>
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.7]"
            >
              No salta a la vista.<br />
              <span className="text-black font-medium">Se esconde detrás del juego.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7] mb-4">
                Todo se mezcla:
              </p>
              <div className="space-y-2 pl-8">
                {[
                  'el ritmo,',
                  'las decisiones,',
                  'la intensidad aparente,',
                  'los comportamientos tácticos.'
                ].map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[18px] sm:text-[22px] md:text-[26px] text-gray-500 leading-[1.7]"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Resultado */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="mb-32 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
          >
            <p className="text-[24px] sm:text-[28px] md:text-[32px] text-black font-semibold leading-[1.5] mb-8">
              Resultado:
            </p>
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-700 leading-[1.7]">
              Lo físico puede estar ahí…<br />
              pero no tienes <span className="text-black font-bold">ninguna forma segura</span> de saber<br />
              qué produce realmente.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 mb-32"
          >
            <motion.p
              variants={itemVariants}
              className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-700 leading-[1.7]"
            >
              Puedes tener la sensación de haber trabajado bien,<br />
              sin saber si, físicamente,<br />
              tus sesiones han hecho progresar realmente a tu equipo.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[22px] sm:text-[26px] md:text-[30px] text-black leading-[1.7]"
            >
              Y es exactamente así<br />
              como te sorprenden,<br />
              partido tras partido,<br />
              alrededor del minuto <sup className="text-[16px]">70</sup>.
            </motion.p>
          </motion.div>

          {/* LAS 3 FLECHAS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 mb-32"
          >
            {[
              'No es falta de trabajo.',
              'No es falta de seriedad.',
              'No es un problema de balón.'
            ].map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6 group"
              >
                <motion.div
                  className="text-[32px] sm:text-[40px] md:text-[48px] text-yellow-400 font-black"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.div>
                <p className="text-[24px] sm:text-[28px] md:text-[32px] text-black leading-[1.5] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  {line}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CONCLUSIÓN FUERTE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 rounded-3xl blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <p className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-black font-black leading-[1.1] tracking-tight">
                Es un problema<br />
                <span className="relative inline-block">
                  de lectura.
                  <motion.span 
                    className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-2 sm:h-3 bg-yellow-400 block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 5 - PIVOT FINAL */}
      <section className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-white via-yellow-50/30 to-white overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative max-w-[900px] mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute -inset-12 bg-yellow-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="relative text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.2] tracking-tight">
                <span className="text-black font-semibold">Leer </span>
                <span className="text-black font-black text-[42px] sm:text-[58px] md:text-[76px] lg:text-[96px]">"físicamente"</span>
                <br />
                <span className="relative inline-block text-black font-semibold">
                  el juego.
                  <motion.span 
                    className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-2 sm:h-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    style={{ transformOrigin: 'center' }}
                  />
                  <motion.span 
                    className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-2 sm:h-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full blur-sm block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    style={{ transformOrigin: 'center' }}
                  />
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
