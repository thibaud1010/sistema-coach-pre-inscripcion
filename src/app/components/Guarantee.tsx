import { motion } from 'motion/react';
import { Shield, CheckCircle2, Mail, Clock, Star } from 'lucide-react';

export function Guarantee() {
  const benefits = [
    'ver todos los módulos',
    'usar las fichas prácticas',
    'probar los +300 ejercicios',
    'beneficiarte del acompañamiento y hacerme tus preguntas',
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Main section - Black with yellow accents */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-400 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Shield icon and title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-8 shadow-2xl">
              <Shield className="w-12 h-12 text-black" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              <span className="text-yellow-400">GARANTÍA 12 MESES</span>
              <br />
              Pruébalo en el campo y luego decide si quieres quedarte con el Sistema Coach
            </h2>
          </motion.div>

          {/* Main explanation box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-10 sm:p-12 bg-white rounded-3xl shadow-2xl">
              <p className="text-2xl sm:text-3xl text-black leading-relaxed text-center mb-8">
                Tras tu compra, tienes 12 meses completos para:
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-transparent rounded-xl"
                  >
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-black" />
                    </div>
                    <p className="text-lg sm:text-xl text-gray-900 leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />

              <div className="text-center space-y-4">
                <p className="text-xl sm:text-2xl text-black leading-relaxed">
                  Aplica el sistema con tu grupo.
                </p>
                <p className="text-xl sm:text-2xl text-black leading-relaxed">
                  Tómate perspectiva.
                </p>
                <p className="text-xl sm:text-2xl text-black leading-relaxed">
                  Observa los efectos a lo largo del tiempo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The guarantee itself - Yellow box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative p-10 sm:p-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative text-center space-y-6">
                <div className="flex justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-black text-black" />
                  ))}
                </div>

                <p className="text-xl sm:text-2xl lg:text-3xl text-black leading-snug font-normal max-w-3xl mx-auto px-4">
                  Y si, <span className="font-bold">a pesar de todo</span>, consideras que el Sistema Coach no te aporta ningún beneficio concreto, basta con enviar un simple email para ser{' '}
                  <span className="font-bold underline decoration-4 underline-offset-4">reembolsado al 100%</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                  <div className="flex items-center gap-3">
                    <Mail className="w-8 h-8 text-black" />
                    <span className="text-xl text-black font-medium">
                      Un email.
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-black" />
                    <span className="text-xl text-black font-medium">
                      En cualquier momento.
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-black" />
                    <span className="text-xl text-black font-medium">
                      100% reembolsado.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why we do this - White */}
      <div className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
              ¿Por qué una garantía así?
            </h3>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl sm:text-2xl text-gray-900 leading-relaxed">
                Porque sabemos que el Sistema Coach funciona.
              </p>

              <p className="text-xl sm:text-2xl text-gray-900 leading-relaxed">
                No queremos que la duda financiera te impida acceder a algo que puede transformar de verdad tu manera de entrenar.
              </p>

              <div className="pt-8 p-10 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl">
                <p className="text-2xl sm:text-3xl text-black leading-tight">
                  El riesgo lo asumimos nosotros,
                  <br />
                  <span className="text-yellow-600 font-medium">no tú.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}