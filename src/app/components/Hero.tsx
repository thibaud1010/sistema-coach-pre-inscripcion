import { motion } from 'motion/react';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { CTAButton } from '@/app/components/CTAButton';

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen bg-black flex items-start justify-center overflow-hidden pt-24 sm:pt-28">
      
      {/* Grille subtile avec dots OR */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Grande lumière centrale de fond - EFFET SPOTLIGHT - Identique sur tous les appareils */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.45) 0%, rgba(255, 215, 0, 0.35) 30%, rgba(255, 215, 0, 0.18) 60%, transparent 100%)',
          filter: 'blur(80px)'
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 3 glows OR - Visibles sur tous les appareils pour design uniforme */}
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FFD700] rounded-full blur-[150px]"
        animate={{
          opacity: [0, 0.28, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#FFD700] rounded-full blur-[100px] opacity-[0.15]" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#FFD700] rounded-full blur-[120px] opacity-[0.12]" />

      {/* Dégradé vertical pour transition douce */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Carte flottante "Pour coachs de jeunes et seniors" - Top Right (très discrète) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 1.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="hidden lg:block absolute top-28 right-8 xl:right-16 z-20"
          >
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              {/* Glow de fond */}
              <div className="absolute inset-0 bg-[#FFD700] rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
              
              {/* Carte */}
              <div className="relative px-5 py-3 rounded-2xl border border-[#FFD700]/15 bg-black/30 backdrop-blur-2xl shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.7)]"
                  />
                  <p className="text-white/60 text-xs font-medium tracking-wide">
                    Para entrenadores de <span className="text-[#FFD700]/90 font-semibold">categorías inferiores</span> y <span className="text-[#FFD700]/90 font-semibold">adultos</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* VERSION MOBILE - compacte sous le badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:hidden mb-12 flex justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -0.5, 0, 0.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative inline-block"
            >
              {/* Glow de fond */}
              <div className="absolute inset-0 bg-[#FFD700] rounded-full blur-lg opacity-10" />
              
              {/* Carte compacte */}
              <div className="relative px-4 py-2 rounded-full border border-[#FFD700]/15 bg-black/20 backdrop-blur-lg">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                  />
                  <p className="text-white/50 text-xs font-medium tracking-wide whitespace-nowrap">
                    Para entrenadores de <span className="text-[#FFD700]/80 font-semibold">categorías inferiores</span> y <span className="text-[#FFD700]/80 font-semibold">adultos</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Badge "★ LE SYSTÈME COACH" */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-20 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FFD700]/20 via-[#FFD700]/10 to-transparent border border-[#FFD700]/30 rounded-full backdrop-blur-xl shadow-2xl shadow-[#FFD700]/10">
              <span className="text-[#FFD700] text-lg">★</span>
              <span className="text-[#FFD700] font-bold uppercase text-sm sm:text-base" style={{ letterSpacing: '0.2em' }}>
                El Sistema Coach
              </span>
            </div>
          </motion.div>

          {/* Titre "100% BALLON" sur une seule ligne */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
              {/* 100% avec dégradé OR */}
              <div className="relative">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] font-black leading-none tracking-tight block"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 50%, #FFB700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 80px rgba(255, 215, 0, 0.3)',
                    filter: 'drop-shadow(0 0 80px rgba(255, 215, 0, 0.3))',
                    fontWeight: 900
                  }}
                >
                  100%
                </motion.span>
                
                {/* Ligne élégante sous 100% */}
                <div className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 flex justify-center">
                  <div className="relative w-3/4">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="h-0.5 sm:h-1 rounded-full"
                      style={{
                        transformOrigin: 'left',
                        background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 70%, transparent 100%)',
                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.6), 0 2px 10px rgba(255, 215, 0, 0.3)'
                      }}
                    />
                    {/* Glow blur layer */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="absolute inset-0 h-0.5 sm:h-1 rounded-full blur-sm"
                      style={{
                        transformOrigin: 'left',
                        background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 70%, transparent 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* BALLON en blanc */}
              <motion.span
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] font-black leading-none tracking-tight text-white"
                style={{
                  textShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                  fontWeight: 900
                }}
              >
                BALÓN
              </motion.span>
            </div>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-4xl mx-auto tracking-tight mt-6 sm:mt-8 md:mt-12 px-4"
          >
            Aprende a leer físicamente el juego
            <br />
            y a ajustar tus ejercicios para que tu trabajo físico con balón sea{' '}
            <span 
              className="italic font-semibold"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 50%, #FFB700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              realmente
            </span>{' '}
            eficaz
          </motion.p>

          {/* Phrase complémentaire en italique */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 italic leading-relaxed mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto tracking-tight px-4"
          >
            Para ver a tu equipo dominar físicamente sus partidos
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <CTAButton
              mainText="ACCEDO AL SISTEMA COACH"
              subText=""
              color="orange"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade vers blanc */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}