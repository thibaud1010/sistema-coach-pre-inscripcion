import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  mainText: string;
  subText: string;
  color?: 'orange' | 'green';
  className?: string;
}

export function CTAButton({ mainText, subText, color = 'orange', className = '' }: CTAButtonProps) {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const targetPosition = pricingSection.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 3000;
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <motion.button
        onClick={scrollToPricing}
        className="group relative w-full sm:w-auto max-w-3xl"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Glow externe massif - couche 1 (le plus éloigné) */}
        <motion.div
          className="absolute -inset-10 rounded-3xl bg-yellow-500/25 blur-[50px] -z-20"
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow externe - couche 2 (intermédiaire) */}
        <motion.div
          className="absolute -inset-6 rounded-2xl bg-yellow-400/35 blur-[30px] -z-10"
          animate={{
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow proche - couche 3 */}
        <motion.div
          className="absolute -inset-3 rounded-2xl bg-yellow-300/40 blur-[20px] -z-10"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bordure fine OR avec shadow modéré */}
        <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 shadow-[0_0_25px_rgba(234,179,8,0.5),0_0_50px_rgba(234,179,8,0.25)]">
          {/* Contenu du bouton */}
          <div className="relative bg-yellow-400 rounded-2xl px-8 sm:px-12 py-5 sm:py-6 flex items-center justify-center sm:justify-between gap-4">
            {/* Texte */}
            <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
              <div className="text-[10px] sm:text-sm font-semibold tracking-wide uppercase text-black/60 leading-none">
                {subText}
              </div>
              <div className="font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-black leading-none mt-1">
                {mainText}
              </div>
            </div>

            {/* Flèche - Visible sur tous les appareils */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" strokeWidth={2.5} />
            </motion.div>
          </div>
        </div>
      </motion.button>
    </div>
  );
}