import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Check, Crown, Sparkles, BookOpen, Users, Zap, Star, Target, Calendar, Gift, ArrowRight, Shield } from 'lucide-react';

export function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = new Date('2026-03-23T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const plans = [
    {
      name: 'El Sistema Coach',
      featured: false,
      description: 'Todo para dominar el trabajo físico con balón',
      oldPrice: '119€',
      price: '35€',
      features: [
        'Acceso al Sistema Coach',
        'Los 8 módulos completos',
        '8 fichas prácticas descargables',
        '+300 ejercicios físicos con balón',
        'Acompañamiento personalizado 7 días/7',
        'Actualizaciones gratuitas de por vida',
        'Garantía de satisfacción o reembolso 12 meses',
      ],
    },
    {
      name: 'Pack Sistema Coach + Guía 1000 ejercicios físicos',
      featured: true,
      description: 'El sistema completo + 1000 ejercicios listos para usar',
      oldPrice: '226€',
      price: '49€',
      features: [
        'Todo del Sistema Coach',
        'Guía de 1000 ejercicios físicos (jóvenes y adultos)',
        'Acompañamiento personalizado 7 días/7',
        'Actualizaciones gratuitas de por vida',
        'Garantía de satisfacción o reembolso 12 meses',
      ],
    },
  ];

  return (
    <section id="pricing" className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 sm:py-24 overflow-hidden">
      {/* Grand glow central pulsant - Désactivé sur mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFD700] opacity-[0.15] rounded-full blur-[150px] hidden md:block md:animate-pulse"></div>

      {/* Petit glow en haut à droite - Visible sur tous les appareils */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFA500] opacity-[0.1] rounded-full blur-[120px]"></div>

      {/* Petit glow en bas à gauche - Visible sur tous les appareils */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#FFD700] opacity-[0.08] rounded-full blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge Offre de lancement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent border border-red-500/40 rounded-full backdrop-blur-xl"
          >
            <Sparkles className="w-5 h-5 text-red-500" />
            <span className="text-red-500 font-bold text-lg">
              Oferta de lanzamiento hasta el 23 de marzo de 2026
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-12">
            ELIGE TU
            <br />
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 50%, #FFB700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 60px rgba(255, 215, 0, 0.3)',
                filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.3))'
              }}
            >
              FÓRMULA
            </span>
          </h2>

        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div
                className={`relative h-full p-6 sm:p-10 lg:p-12 rounded-3xl border-2 transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 border-yellow-300 shadow-2xl lg:scale-105'
                    : 'bg-white/5 border-yellow-400/30 hover:bg-white/10 hover:border-yellow-400/80'
                }`}
              >
                {/* Plan name */}
                <div className="mb-8 text-center">
                  <h3
                    className={`text-3xl sm:text-4xl font-bold mb-4 ${
                      plan.featured ? 'text-black' : 'text-white'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-lg sm:text-xl ${
                      plan.featured ? 'text-black/80' : 'text-gray-400'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price placeholder */}
                <div className="mb-10 pb-10 border-b border-current border-opacity-20">
                  <div className="text-center space-y-4">
                    {/* Ancien prix barré - TRÈS VISIBLE */}
                    <div className="flex items-center justify-center gap-2">
                      <p className={`text-4xl sm:text-5xl md:text-6xl font-bold line-through ${plan.featured ? 'text-black/50' : 'text-gray-400'}`}
                        style={{
                          textDecoration: 'line-through',
                          textDecorationThickness: '4px',
                          textDecorationColor: plan.featured ? 'rgba(0, 0, 0, 0.6)' : 'rgba(239, 68, 68, 0.8)'
                        }}
                      >
                        {plan.oldPrice}
                      </p>
                    </div>
                    {/* Prix actuel */}
                    <div className="flex items-center justify-center gap-2">
                      <p className={`text-6xl sm:text-7xl lg:text-8xl font-black ${plan.featured ? 'text-black' : 'text-yellow-400'}`}
                        style={{
                          textShadow: plan.featured ? 'none' : '0 0 30px rgba(255, 215, 0, 0.5)'
                        }}
                      >
                        {plan.price}
                      </p>
                    </div>
                    {/* Badge de réduction */}
                    <div className="flex justify-center pt-2">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                        plan.featured 
                          ? 'bg-black/20' 
                          : 'bg-red-500/20 border border-red-500/40'
                      }`}>
                        <Sparkles className={`w-5 h-5 ${plan.featured ? 'text-black/70' : 'text-red-500'}`} />
                        <span className={`text-lg font-bold ${plan.featured ? 'text-black/70' : 'text-red-500'}`}>
                          {plan.featured ? '-78%' : '-71%'}
                        </span>
                      </div>
                    </div>


                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.featured ? 'bg-black' : 'bg-yellow-400'
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 ${
                            plan.featured ? 'text-yellow-400' : 'text-black'
                          }`}
                        />
                      </div>
                      <p
                        className={`text-lg ${
                          plan.featured ? 'text-black' : 'text-gray-300'
                        }`}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {plan.name === 'El Sistema Coach' ? (
                  <div className="mt-8 mb-6">
                    {/* Micro urgency */}
                    <p className="text-center text-sm text-gray-500 mb-3">
                      ⏱ Precio vuelve a <span className="text-red-400 font-semibold">119€</span> el 24 de marzo
                    </p>
                    <a
                      href="https://preparacionfisicafutbol-tienda.com/products/el-sistema-coach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full py-8 px-8 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-300 cursor-pointer block bg-yellow-400 text-black border-4 border-yellow-300 hover:bg-yellow-300"
                      style={{
                        boxShadow: '0 15px 60px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 215, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
                      }}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Zap className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 animate-bounce" />
                        <span className="font-black text-2xl sm:text-3xl">Compro el Sistema Coach ahora</span>
                        <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="mt-8 mb-6">
                    {/* Micro urgency */}
                    <p className="text-center text-sm text-black/50 mb-3">
                      ⏱ Precio vuelve a <span className="text-red-600 font-semibold">226€</span> el 24 de marzo
                    </p>
                    <a
                      href="https://preparacionfisicafutbol-tienda.com/products/pack-sistema-coach-guia-1000-ejercicios-fisicos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-full py-8 px-8 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-300 cursor-pointer block ${
                        plan.featured
                          ? 'bg-black text-yellow-400 border-4 border-yellow-400 hover:bg-black/90'
                          : 'bg-yellow-400 text-black border-4 border-yellow-300 hover:bg-yellow-300'
                      }`}
                      style={{
                        boxShadow: plan.featured 
                          ? '0 15px 60px rgba(255, 215, 0, 0.9), 0 0 100px rgba(255, 215, 0, 0.7), inset 0 2px 4px rgba(255, 215, 0, 0.3)'
                          : '0 15px 60px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 215, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
                      }}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Zap className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 animate-bounce" />
                        <span className="font-black text-2xl sm:text-3xl">Compro el Pack ahora</span>
                        <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 p-8 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <p className="text-lg text-gray-300 text-center sm:text-left">
                Garantía de satisfacción o reembolso <span className="text-yellow-400 font-bold">12 meses</span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Check className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <p className="text-lg text-gray-300 text-center sm:text-left">
                Acceso <span className="text-yellow-400 font-bold">inmediato</span> tras la compra
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <p className="text-lg text-gray-300 text-center sm:text-left">
                Pago <span className="text-yellow-400 font-bold">100% seguro</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
