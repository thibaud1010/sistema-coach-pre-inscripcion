import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Thomas L.',
      role: 'Entrenador Sub-17',
      quote: "Probé la ficha de resistencia de potencia en un simple 4v4 en transición. Y ahí entendí por qué, antes, no producía realmente el efecto que esperaba. Creía que estaba metiendo intensidad, pero faltaban condiciones precisas para repetir los esfuerzos correctamente. Con las referencias de la ficha, ajusté dos detalles… y el juego ya no tenía la misma intensidad ni el mismo impacto físico.",
      highlight: "Con la primera ficha, vi lo que le faltaba a mi 4v4.",
    },
    {
      name: 'Marc D.',
      role: 'Entrenador sénior',
      quote: "Creía que trabajaba la velocidad metiendo ritmo e intensidad. Con el Sistema Coach, entendí que no era así. Veía sobre todo carreras rápidas, no verdadera velocidad. Todavía no lo he probado todo, lo estoy descubriendo. Pero al menos ahora entiendo qué condiciones tienen que darse para que la velocidad aparezca de verdad en el juego. Ya os daré más feedback. Gracias.",
      highlight: "Me doy cuenta de que no sabía trabajar la velocidad de verdad en mis juegos.",
    },
    {
      name: 'Julien R.',
      role: 'Entrenador Sub-15',
      quote: "No hay nada peor que un jugador que te pregunta: \"¿Por qué hacemos esto? ¿Cómo se supone que hay que hacerlo?\" Y responder algo vago. El módulo del discurso ya me ha ayudado muchísimo. Aún no he terminado todo, pero en 2-3 sesiones, mis consignas ya son más precisas, más pertinentes. Sé lo que pido. Y sobre todo, por qué lo pido. Creo que los chicos lo notan: están mucho más implicados. Me va a ayudar de verdad. Gracias.",
      highlight: "Mi pesadilla era no saber qué responderles a los jugadores.",
    },
    {
      name: 'Karim A.',
      role: 'Entrenador Sub-13',
      quote: "Entreno a Sub-13. Antes, hacía sesiones intensas, pero mis consignas a veces seguían siendo difusas. Desde que uso el Sistema Coach, entiendo mejor lo que quiero provocar físicamente. Así que mis consignas son más simples y más precisas. Padres e incluso un directivo me lo han dicho: \"Se entiende mejor lo que les pides.\" Cuando tú lo entiendes, los jugadores lo notan. Y hasta el entorno lo aprecia.",
      highlight: "Incluso desde fuera, se ve que está más claro.",
    },
    {
      name: 'David S.',
      role: 'Entrenador sénior',
      quote: "Antes gestionaba la carga a ojo, un poco al azar. Desde que empecé el Sistema Coach hace poco, el módulo sobre la gestión de la carga con el RPE y los cuestionarios me ha hecho entender bastantes cosas. Estoy empezando a ponerlos en práctica. Por ahora solo son dos semanas, pero ya he detectado 2-3 alertas. Y sobre todo, lo he entendido fácilmente, cuando pensaba que iba a ser complicado. Gracias.",
      highlight: "Antes gestionaba la carga a ojo, un poco al azar.",
    },
    {
      name: 'Hamza B.',
      role: 'Entrenador Sub-17',
      quote: "Acabo de empezar el Sistema Coach. Pero desde el entrenamiento de ayer, ya estaba más atento a detalles físicos. Antes me fijaba sobre todo en la técnica y la táctica. No prestaba realmente atención a ciertas señales físicas en el juego. Ahora sé dónde mirar. Voy a seguir leyendo el sistema y aplicar los consejos. Gracias.",
      highlight: "Acabo de empezar, pero ya miro mis sesiones de otra manera.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Title section - Black */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 sm:py-24">
        {/* Grand glow central pulsant - Désactivé sur mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFD700] opacity-[0.15] rounded-full blur-[150px] hidden md:block md:animate-pulse"></div>

        {/* Petit glow en haut à droite - Visible sur tous les appareils */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFA500] opacity-[0.1] rounded-full blur-[120px]"></div>

        {/* Petit glow en bas à gauche - Visible sur tous les appareils */}
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#FFD700] opacity-[0.08] rounded-full blur-[100px]"></div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight text-center">
              Los primeros entrenadores que descubrieron{' '}
              <span className="text-yellow-400">el Sistema Coach</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 text-center max-w-4xl mx-auto">
              Aquí están los comentarios de los entrenadores que lo probaron en avant-première.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Testimonials - White */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 sm:p-10 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl hover:border-yellow-400 hover:shadow-2xl transition-all duration-300">
                  {/* Quote icon */}
                  <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg text-3xl text-black">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Highlight quote */}
                  <p className="text-2xl sm:text-3xl text-black leading-tight mb-6 font-medium">
                    "{testimonial.highlight}"
                  </p>

                  {/* Full quote */}
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-200 group-hover:border-yellow-400 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl text-black font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-xl text-black font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-base text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-400/20 rounded-br-3xl group-hover:border-yellow-400/50 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}