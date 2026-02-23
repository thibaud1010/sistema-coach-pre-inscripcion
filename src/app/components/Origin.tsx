import { motion } from 'motion/react';

export function Origin() {
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
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-[720px] mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-gray-50 rounded-xl border-l-4 border-black p-8 sm:p-10 lg:p-12 shadow-sm"
        >
          {/* Titre */}
          <motion.h2
            variants={itemVariants}
            className="text-[26px] sm:text-[30px] md:text-[34px] font-bold text-black leading-[1.3] mb-8 text-center"
          >
            Cómo nació el Sistema Coach
          </motion.h2>

          {/* Contenido */}
          <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-[17px] sm:text-[18px] md:text-[19px] text-gray-800 leading-[1.7]"
            >
              Desde hace varios meses que entendí este problema,<br />
              me di cuenta de algo:
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[19px] sm:text-[21px] md:text-[23px] font-bold text-black leading-[1.6]"
            >
              Nadie enseñaba a los entrenadores a leer físicamente el juego.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-3"
            >
              <p className="text-[17px] sm:text-[18px] md:text-[19px] text-gray-800 leading-[1.7]">
                Os dan ejercicios.<br />
                Os explican las cualidades físicas.<br />
                Os hablan de intensidad, de carga, de recuperación.
              </p>
              
              <p className="text-[17px] sm:text-[18px] md:text-[19px] text-gray-800 leading-[1.7]">
                Pero nadie os enseña <span className="font-semibold text-black">las referencias de campo</span> para saber<br />
                si lo que hacéis funciona realmente.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pl-6 border-l-2 border-black/20"
            >
              <div className="flex items-start gap-3">
                <span className="text-[24px] sm:text-[26px] text-black flex-shrink-0 leading-none mt-1">→</span>
                <p className="text-[18px] sm:text-[19px] md:text-[20px] text-black leading-[1.7] italic">
                  Os dan sesiones...<br />
                  pero no las "gafas" para ver si funcionan.
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[19px] sm:text-[21px] md:text-[23px] font-bold text-black leading-[1.6] pt-4"
            >
              Así que decidí hacerlo.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[17px] sm:text-[18px] md:text-[19px] text-gray-800 leading-[1.7]"
            >
              Eso es el Sistema Coach.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}