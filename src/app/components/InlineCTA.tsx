import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface InlineCTAProps {
  title: string;
  buttonText?: string;
}

export function InlineCTA({ title, buttonText = "ACCEDO AL SISTEMA COACH" }: InlineCTAProps) {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const start = window.scrollY;
      const end = pricingSection.offsetTop;
      const distance = end - start;
      const duration = 3000; // 3 secondes pour un défilement lent et fluide
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function pour un mouvement fluide
        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, start + distance * easeInOutCubic);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Effet de lumière en fond */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400 rounded-full blur-[150px]" />
      </div>

      {/* Grille subtile */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center">
          {/* Titre persuasif */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 sm:mb-10 md:mb-12 leading-tight"
          >
            {title}
          </motion.h3>

          {/* Bouton CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <button
              onClick={scrollToPricing}
              className="group relative px-8 sm:px-12 py-5 sm:py-6 bg-yellow-400 text-black font-black text-base sm:text-lg md:text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-yellow-300 flex items-center justify-center"
              style={{
                boxShadow: '0 15px 60px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 215, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {buttonText}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-yellow-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}