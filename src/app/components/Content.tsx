import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { FileText, Download, Sparkles, Star, Zap } from 'lucide-react';
import { Gift, Users, BookOpen, Check } from 'lucide-react';
import { useIsMobile, getAnimationDuration } from '@/app/hooks/useIsMobile';

export function Content() {
  const [isVisible, setIsVisible] = useState(true); // Changed from false to true
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

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
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fiches = [
    {
      color: 'from-red-600 to-red-700',
      accentColor: 'bg-red-600',
      glowColor: 'shadow-red-500/30',
      title: 'Ficha práctica 1 — Explosividad',
      description: 'Crear acciones breves y decisivas, sin confundirlas con la intensidad repetida',
      tagline: 'Para hacer a tus jugadores más incisivos, no solo más cansados.',
    },
    {
      color: 'from-orange-600 to-orange-700',
      accentColor: 'bg-orange-600',
      glowColor: 'shadow-orange-500/30',
      title: 'Ficha práctica 2 — Velocidad de reacción',
      description: 'Arrancar rápido y con precisión',
      tagline: 'La velocidad empieza en la toma de información.',
    },
    {
      color: 'from-yellow-500 to-yellow-600',
      accentColor: 'bg-yellow-500',
      glowColor: 'shadow-yellow-400/40',
      title: 'Ficha práctica 3 — Velocidad máxima y aceleración',
      description: 'Saber cuándo el juego permite ir rápido… y cuándo lo impide',
      tagline: 'Deja de confundir velocidad con agitación.',
    },
    {
      color: 'from-green-600 to-green-700',
      accentColor: 'bg-green-600',
      glowColor: 'shadow-green-500/30',
      title: 'Ficha práctica 4 — Vivacidad y agilidad',
      description: 'Hacer los apoyos útiles y transferibles al partido',
      tagline: 'Menos desplazamientos parásitos, más eficacia.',
    },
    {
      color: 'from-blue-600 to-blue-700',
      accentColor: 'bg-blue-600',
      glowColor: 'shadow-blue-500/30',
      title: 'Ficha práctica 5 — Resistencia aeróbica de base',
      description: 'Construir una base sólida sin convertir el entrenamiento en carrera continua',
      tagline: 'Aguantar sin renunciar al balón.',
    },
    {
      color: 'from-purple-600 to-purple-700',
      accentColor: 'bg-purple-600',
      glowColor: 'shadow-purple-500/30',
      title: 'Ficha práctica 6 — Resistencia de potencia',
      description: 'Repetir esfuerzos intensos sin quemar a los jugadores',
      tagline: 'Mantener la intensidad del partido, no solo los primeros minutos.',
    },
    {
      color: 'from-gray-700 to-gray-900',
      accentColor: 'bg-gray-800',
      glowColor: 'shadow-gray-600/30',
      title: 'Ficha práctica 7 — Fuerza',
      description: 'Desarrollar fuerza útil sin sala, sin máquinas',
      tagline: 'Identificar la fuerza real en el juego.',
    },
    {
      color: 'from-amber-700 to-amber-800',
      accentColor: 'bg-amber-700',
      glowColor: 'shadow-amber-600/30',
      title: 'Ficha práctica 8 — Prevención de lesiones',
      description: 'Reducir los riesgos mediante un trabajo inteligente',
      tagline: 'Para afrontar las exigencias del partido',
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
        {/* Title with parallax */}
        <motion.div 
          className="text-center space-y-8 mb-32"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-wide uppercase text-sm">Módulo 3 — Herramientas de campo</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl leading-tight"
          >
            <span className="text-white">Las fichas prácticas</span>
            <span className="block mt-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              (cualidad por cualidad)
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            En el Módulo 3, desbloqueas <span className="text-yellow-400 font-bold">8 fichas prácticas</span> para provocar cada cualidad física en el juego.
          </motion.p>
        </motion.div>

        {/* FREE BONUS - Redesigned as a spotlight feature */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto mb-32"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl overflow-hidden border-4 border-red-400/30 shadow-2xl">
            {/* Decorative grid overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,20,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative p-10 sm:p-16">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400 text-black font-bold text-lg rounded-full shadow-xl mb-8"
              >
                <Star className="w-6 h-6 fill-black" />
                <span className="uppercase tracking-wide">Bonus Gratuito</span>
              </motion.div>

              <div className="grid lg:grid-cols-[1fr,auto] gap-10 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl sm:text-5xl text-white font-bold mb-3">
                      Ficha de Explosividad
                      <span className="block text-yellow-400 mt-2">ofrecida gratuitamente</span>
                    </h3>
                    <p className="text-xl text-red-200">
                      Descárgala ahora y pruébala en tu próxima sesión
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <p className="text-lg sm:text-xl text-white leading-relaxed">
                      Identifica las acciones verdaderamente explosivas.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-bold text-sm rounded-xl">
                      <span>✓</span>
                      <span>GRATIS</span>
                    </div>
                    <span className="text-white/70 text-base">Formato PDF</span>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <motion.button
                    onClick={() => {
                      window.open('https://www.preparacionfisicafutbol.com/documentos/sistema-coach/explosividad.pdf', '_blank');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-6 bg-yellow-400 text-black font-bold text-xl rounded-2xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 flex items-center gap-3 whitespace-nowrap"
                  >
                    <Download className="w-7 h-7" />
                    <span>DESCARGO</span>
                  </motion.button>
                </div>
              </div>

              {/* Bottom notice */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10 pt-8 border-t border-white/20 text-center"
              >
                <p className="text-xl text-white font-medium">
                  Las <span className="text-yellow-400 font-bold">7 fichas restantes</span> están incluidas en El Sistema Coach
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Fiches grid - Premium 3D presentation */}
        <div className="space-y-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-3xl sm:text-4xl text-gray-400"
          >
            Descubre las <span className="text-yellow-400 font-bold">7 fichas restantes</span>
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {fiches.map((fiche, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
                style={{ perspective: '1500px' }}
              >
                <motion.div
                  animate={{
                    rotateY: hoveredIndex === index ? 8 : 0,
                    rotateX: hoveredIndex === index ? -5 : 0,
                    z: hoveredIndex === index ? 50 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative"
                >
                  {/* Main card */}
                  <div className={`relative bg-gradient-to-br ${fiche.color} rounded-2xl overflow-hidden shadow-2xl ${hoveredIndex === index ? fiche.glowColor + ' shadow-[0_0_60px]' : 'shadow-black/40'} transition-shadow duration-500`}>
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0"
                      initial={{ x: '-100%', y: '-100%' }}
                      animate={hoveredIndex === index ? { x: '100%', y: '100%' } : { x: '-100%', y: '-100%' }}
                      transition={{ duration: 0.8 }}
                      style={{ transform: 'rotate(-45deg) scale(2)' }}
                    />

                    {/* Cover content */}
                    <div className="relative aspect-[3/4.2] p-6 flex flex-col justify-between">
                      {/* Top section */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg border border-white/30">
                            <FileText className="w-4 h-4 text-white" />
                            <span className="text-xs text-white font-bold uppercase tracking-wider">PDF</span>
                          </div>
                          
                          {/* Large number badge */}
                          <div className="w-16 h-16 bg-black/30 backdrop-blur-md rounded-2xl border-2 border-white/40 flex items-center justify-center shadow-2xl">
                            <span className="text-4xl font-black text-white drop-shadow-lg">{index + 1}</span>
                          </div>
                        </div>
                        
                        <h5 className="text-xl font-bold text-white leading-tight drop-shadow-2xl">
                          {fiche.title}
                        </h5>
                      </div>

                      {/* Middle decorative text lines */}
                      <div className="space-y-1.5 opacity-20">
                        {[...Array(8)].map((_, i) => (
                          <div 
                            key={i}
                            className="h-0.5 bg-white rounded-full" 
                            style={{ width: `${Math.random() * 40 + 60}%` }}
                          />
                        ))}
                      </div>

                      {/* Bottom section */}
                      <div className="space-y-4">
                        <p className="text-sm text-white/95 leading-relaxed font-medium">
                          {fiche.description}
                        </p>
                        
                        {fiche.tagline && (
                          <div className="pt-3 border-t border-white/20">
                            <p className="text-xs text-white/90 flex items-start gap-2">
                              <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-white/80" />
                              <span className="italic">{fiche.tagline}</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Page thickness visualization on the right edge */}
                    <div className="absolute right-0 top-0 bottom-0 w-3">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-white/60"
                          style={{
                            height: '1px',
                            width: `${12 - i * 0.3}px`,
                            right: `-${i * 0.5}px`,
                            top: `${5 + i * 4.5}%`,
                            boxShadow: '1px 0 2px rgba(0,0,0,0.2)'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stacked pages effect - improved depth */}
                  {[1, 2, 3].map((layer) => (
                    <div
                      key={layer}
                      className={`absolute inset-0 bg-gradient-to-br ${fiche.color} rounded-2xl -z-${layer * 10}`}
                      style={{
                        transform: `translateZ(-${layer * 12}px) translateX(${layer * 4}px) translateY(${layer * 4}px)`,
                        opacity: 1 - layer * 0.25,
                        filter: `blur(${layer * 0.5}px)`
                      }}
                    />
                  ))}
                </motion.div>

                {/* Hover info overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute -bottom-16 left-0 right-0 text-center pointer-events-none"
                >
                  <p className="text-sm text-gray-400 italic">Incluso en El Sistema Coach</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-yellow-500/20 to-yellow-600/0 blur-3xl" />
          
          <div className="relative p-16 sm:p-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl text-center overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full"
              >
                <Sparkles className="w-5 h-5 text-black" />
                <span className="text-black font-bold text-sm uppercase tracking-wide">El pack completo</span>
              </motion.div>

              <h3 className="text-4xl sm:text-5xl lg:text-6xl text-black font-bold leading-tight">
                8 fichas prácticas
              </h3>
              <p className="text-3xl sm:text-4xl text-black/80 leading-relaxed max-w-3xl mx-auto">
                para dominar el trabajo físico con balón
              </p>
            </div>
          </div>
        </motion.div>

        {/* BONUS SECTION - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative"
        >
          {/* Background glow effects - more subtle */}
          <div className="absolute -inset-20 bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-500/10 blur-[100px]" />
          
          <div className="relative">
            {/* Title section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-full shadow-2xl shadow-yellow-400/20 mb-8"
              >
                <Gift className="w-6 h-6" />
                <span className="uppercase tracking-wide">Bonus Incluido</span>
              </motion.div>

              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                <span className="text-white">Y eso no es todo...</span>
              </h3>
              <p className="text-2xl sm:text-3xl text-gray-400 max-w-3xl mx-auto">
                También recibes estos bonus de valor
              </p>
            </div>

            {/* Two bonus cards */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Bonus 1: Module Management et Coaching */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group relative"
              >
                {/* Card glow - subtle golden */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
                
                <div className="relative bg-white rounded-3xl p-10 overflow-hidden border-2 border-gray-200 group-hover:border-yellow-400/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  {/* Subtle background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
                  
                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/30">
                      <Users className="w-10 h-10 text-black" strokeWidth={2.5} />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full">
                      <Sparkles className="w-4 h-4 text-yellow-600" />
                      <span className="text-yellow-700 font-bold text-sm uppercase tracking-wide">Bonus 1</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-3xl sm:text-4xl text-black font-black leading-tight">
                      Módulo completo
                      <span className="block text-yellow-600 mt-2">Gestión y Coaching</span>
                    </h4>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Un módulo completo dedicado a los aspectos humanos y tácticos del coaching: comunicación, gestión del grupo, liderazgo en el campo.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 pt-4">
                      {[
                        'Gestionar las dinámicas de grupo',
                        'Comunicación eficaz con tus jugadores',
                        'Liderazgo y toma de decisiones',
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-800">
                          <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom accent */}
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <p className="text-yellow-700 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        Valor inestimable
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bonus 2: 300 exercices */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="group relative"
              >
                {/* Card glow - subtle golden */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
                
                <div className="relative bg-white rounded-3xl p-10 overflow-hidden border-2 border-gray-200 group-hover:border-yellow-400/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  {/* Subtle background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
                  
                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/30">
                      <BookOpen className="w-10 h-10 text-black" strokeWidth={2.5} />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full">
                      <Zap className="w-4 h-4 text-yellow-600" />
                      <span className="text-yellow-700 font-bold text-sm uppercase tracking-wide">Bonus 2</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-3xl sm:text-4xl text-black font-black leading-tight">
                      Biblioteca de
                      <span className="block text-yellow-600 mt-2">300 ejercicios con balón</span>
                    </h4>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      300 ejercicios físicos con balón para trabajar la velocidad, la resistencia, las transiciones... Listos para usar y adaptados a todos los niveles.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 pt-4">
                      {[
                        'Clasificados por cualidad física',
                        'Adaptados a todos los niveles',
                        'Listos para usar en el campo',
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-800">
                          <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom accent */}
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <p className="text-yellow-700 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        300 ejercicios
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}