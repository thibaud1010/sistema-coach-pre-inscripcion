import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Zap, ArrowRight } from 'lucide-react';

export function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      const scrolled = window.scrollY;
      const triggerAt = window.innerHeight * 1.2;
      setVisible(scrolled > triggerAt);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {/* Subtle gradient shadow above bar */}
          <div className="h-6 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

          <div
            className="relative px-4 py-3 sm:py-4"
            style={{
              background: 'rgba(10, 10, 10, 0.97)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255, 215, 0, 0.15)',
            }}
          >
            {/* Subtle glow at top of bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
              {/* Left — offer info */}
              <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                {/* Dot live */}
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                  <span
                    className="w-2 h-2 rounded-full bg-yellow-400"
                    style={{ boxShadow: '0 0 8px rgba(255,215,0,0.8)', animation: 'pulse 2s infinite' }}
                  />
                  <span className="text-white/40 text-xs tracking-wide uppercase">Offre de lancement</span>
                </div>

                {/* Separator */}
                <div className="hidden sm:block w-px h-6 bg-white/10" />

                {/* Price block */}
                <div className="flex items-baseline gap-2 flex-shrink-0">
                  <span
                    className="text-white/30 line-through text-sm"
                    style={{ textDecorationThickness: '1.5px', textDecorationColor: 'rgba(239,68,68,0.6)' }}
                  >
                    119€
                  </span>
                  <span
                    className="text-yellow-400 font-black text-xl sm:text-2xl"
                    style={{ textShadow: '0 0 20px rgba(255,215,0,0.4)' }}
                  >
                    35€
                  </span>
                </div>

                {/* Label — truncated on small */}
                <span className="text-white/60 text-sm hidden md:block truncate">
                  Le Système Coach
                </span>
              </div>

              {/* Right — CTA + close */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href="https://preparationphysiquefootball-shop.com/collections/les-formations/products/le-systeme-coach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-black font-bold text-sm sm:text-base transition-all duration-300 whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFC200 100%)',
                    boxShadow: '0 4px 20px rgba(255,215,0,0.35)',
                  }}
                >
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">J'accède maintenant</span>
                  <span className="sm:hidden">Accéder</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>

                <button
                  onClick={handleDismiss}
                  className="p-1.5 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
