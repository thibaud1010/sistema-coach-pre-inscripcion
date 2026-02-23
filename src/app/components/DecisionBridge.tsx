import { motion } from 'motion/react';

export function DecisionBridge() {
  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-[720px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">
              Antes de decidir
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Main text */}
          <div className="space-y-7 text-gray-800">
            <p className="text-2xl sm:text-3xl leading-relaxed">
              Si todavía estás aquí, es probablemente porque algo resuena.
            </p>

            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              No necesitas que te convenzan de que el trabajo físico con balón importa.
              Ya lo sabes. Lo que el Sistema Coach te aporta es la{' '}
              <span className="text-black font-semibold italic">claridad</span> para pasar del
              "hago lo que puedo" al "sé exactamente por qué funciona".
            </p>

            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              La pregunta no es "¿va a funcionar?".{' '}
              La garantía de 12 meses responde a eso.
            </p>

            {/* La pregunta real */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-6 border-l-2 border-yellow-400"
            >
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed italic">
                La verdadera pregunta es: ¿en cuántas sesiones quieres empezar
                a entrenar con mucho más criterio?
              </p>
            </motion.div>
          </div>

          {/* Closing divider */}
          <div className="flex items-center gap-3 pt-4">
            <div className="h-px flex-1 bg-gray-100" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="h-px flex-1 bg-gray-100" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}