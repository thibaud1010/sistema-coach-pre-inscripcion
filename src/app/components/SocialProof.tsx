import { motion } from 'motion/react';
import { Users, Award, TrendingUp, Star, ArrowRight } from 'lucide-react';

// Photo de Thibaud
const photoThibaud = 'https://www.preparationphysiquefootball.com/images/thibaud-pr%C3%A9parateur-physique.jpg';

export function SocialProof() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight text-center mb-16 sm:mb-20"
        >
          Preparación Física Football
          <br />
          <span className="text-yellow-400">en cifras</span>
        </motion.h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
          Una comunidad de entrenadores que crece cada día desde 2017
        </p>

        {/* Grand glow central pulsant - Désactivé sur mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFD700] opacity-[0.15] rounded-full blur-[150px] hidden md:block md:animate-pulse"></div>

        {/* Petit glow en haut à droite - Visible sur tous les appareils */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFA500] opacity-[0.1] rounded-full blur-[120px]"></div>

        {/* Petit glow en bas à gauche - Visible sur tous les appareils */}
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#FFD700] opacity-[0.08] rounded-full blur-[100px]"></div>

        {/* Big stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {[
            {
              icon: Users,
              number: '+500 000',
              label: 'entrenadores nos siguen en las redes sociales',
            },
            {
              icon: Award,
              number: '+22 100',
              label: 'entrenadores ya se han unido a nuestros programas y guías en línea desde 2017',
            },
            {
              icon: TrendingUp,
              number: '+50 000',
              label: 'entrenadores reciben nuestros emails cada semana',
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 sm:p-10 bg-white/5 border-2 border-white/10 rounded-3xl hover:bg-white/10 hover:border-yellow-400 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-black" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl text-yellow-400 font-bold mb-6 mt-4">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    {stat.label}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-400/20 rounded-br-3xl group-hover:border-yellow-400/50 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Credentials row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-16 max-w-2xl mx-auto"
        >
          {/* 4,73/5 Card */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl text-center">
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-black mx-auto mb-3 sm:mb-4" />
            <p className="text-2xl sm:text-3xl text-black font-bold mb-2">
              4,73/5
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-black/80">
              Nota media según las valoraciones de los entrenadores
            </p>
          </div>

          {/* Vestiaires Magazine Badge */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl text-center border-4 border-yellow-300/50 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-2 justify-center mb-2 sm:mb-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl text-black font-bold">
                Visto en Vestiaires Magazine
              </h3>
              <span className="text-xl sm:text-2xl">🏆</span>
            </div>
            <p className="text-sm sm:text-base text-black/80">
              Nuestros ejercicios fueron destacados en el medio de referencia para entrenadores
            </p>
            
            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-r-4 border-black/10 rounded-br-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Trust section - White */}
      <div className="bg-white py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Title with glow effect */}
            <div className="relative">
              <h3 className="relative text-3xl sm:text-4xl lg:text-5xl text-black leading-tight text-center font-bold">
                ¿Por qué confiar en nosotros?
              </h3>
            </div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8 text-center max-w-4xl mx-auto"
            >
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                Hace algunos años, durante una formación con preparadores físicos y entrenadores amateurs, todos compartieron una misma conclusión:
              </p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative p-8 sm:p-10 bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-l-4 border-yellow-400 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-xl sm:text-2xl lg:text-3xl text-black leading-tight font-medium">
                      Existe una carencia real de información sobre la preparación física en el fútbol amateur.
                    </p>
                  </div>
                </div>
              </motion.div>

              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed pt-4">
                De esa conclusión nació la idea de este proyecto: <span className="text-black font-semibold">ofrecer a cada entrenador y educador acceso a los métodos de los mejores preparadores físicos del alto nivel</span>, adaptándolos a las realidades del fútbol amateur.
              </p>
            </motion.div>

            {/* Three pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-20"
            >
              <div className="text-center max-w-3xl mx-auto space-y-8 p-8 sm:p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 shadow-xl">
                <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                  Es también a partir de una <span className="text-black font-semibold">constatación simple</span>,<br />
                  la de una necesidad creciente y una falta de referencias, de lectura y de comprensión<br />
                  sobre el <span className="text-yellow-500 font-semibold">trabajo físico con balón</span>,<br />
                  que decidimos proponeros el <span className="text-black font-bold">Sistema Coach</span>.
                </p>
                
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
              </div>
            </motion.div>

            {/* Thibaud section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-20 relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative p-10 sm:p-12 bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl shadow-2xl border border-yellow-400/20">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Photo */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-50"></div>
                    <img
                      src={photoThibaud}
                      alt="Thibaud - Preparación Física Football"
                      className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-2xl sm:text-3xl text-white leading-relaxed mb-4">
                      <span className="text-yellow-400 font-bold">Un acompañamiento personalizado</span> está incluido en el programa:
                    </p>
                    <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                      <span className="text-white font-medium">Thibaud</span>, del equipo Preparación Física Football, está disponible para responder a todas vuestras preguntas, <span className="text-yellow-400 font-bold">7 días/7</span>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}