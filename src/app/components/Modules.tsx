import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Eye, FileText, Search, Settings, Activity, MessageCircle, Calendar, Zap, ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';
import { useIsMobile, getAnimationDuration } from '@/app/hooks/useIsMobile';

export function Modules() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const modules = [
    {
      number: 1,
      icon: BookOpen,
      title: 'Hacer verdadero trabajo físico con balón',
      subtitle: "Entender lo que ya haces… y por qué no siempre es suficiente",
      intro: "Ya trabajas con balón, y es lógico.\nPero jugar y hacer progresar físicamente no es lo mismo.\n\nEste módulo sienta las bases del Sistema Coach.\nEntiendes por qué el 100% balón es pertinente,\ndónde empiezan los errores,\ny por qué muchas situaciones fatigan… sin desarrollar de verdad.",
      content: "Identificas los problemas frecuentes del trabajo físico con balón\ny tomas conciencia de lo que más falta:",
      bullets: [
        "referencias claras para leer lo que tus juegos producen realmente"
      ],
      conclusion: "No cambias todavía tus ejercicios.\nCambias primero tu mirada."
    },
    {
      number: 2,
      icon: Eye,
      title: 'La lógica del Sistema Coach',
      subtitle: "Entender cómo el balón produce realmente trabajo físico",
      intro: "Con balón, todo produce un efecto físico.\nLa verdadera pregunta no es si trabaja… sino qué trabaja.\n\nEn este módulo, descubres la idea central del Sistema Coach:\nel juego puede exponer, mantener o desarrollar una cualidad física.",
      content: "Entiendes los 3 roles físicos del juego,\ny sobre todo cuándo el balón es suficiente… y cuándo limita el trabajo.",
      bullets: [],
      conclusion: "Este módulo te ayuda a leer el juego de otra manera:\npasas de un ejercicio que \"cansa\"\na una situación con una intención física clara."
    },
    {
      number: 3,
      icon: FileText,
      title: 'Leer y desarrollar cada cualidad física',
      subtitle: "Referencias concretas, cualidad por cualidad",
      intro: "Explosividad, velocidad, resistencia, potencia, fuerza…\nTodo el mundo habla de ellas. Pocos saben realmente qué provocar en el juego.",
      content: "Este módulo te da referencias concretas, cualidad por cualidad, para:",
      bullets: [
        "saber lo que realmente buscas",
        "reconocer cuándo se solicita la cualidad",
        "ajustar sin añadir \"físico aparte\""
      ],
      conclusion: "Miras tus juegos de otra manera."
    },
    {
      number: 4,
      icon: Search,
      title: 'Ver a un entrenador pensar (estudio de caso)',
      subtitle: "Estudio de caso de campo completo",
      intro: "¿Y si pudieras entrar en la cabeza de un entrenador\nque planifica y ajusta su trabajo físico semana tras semana?",
      content: "En este módulo, desgranas un caso real:",
      bullets: [
        "las decisiones",
        "las dudas",
        "los ajustes",
        "los errores evitados"
      ],
      conclusion: "Entiendes cómo se decide, no solo qué se hace."
    },
    {
      number: 5,
      icon: Settings,
      title: 'Transformar cualquier ejercicio en trabajo físico',
      subtitle: "El dominio de los parámetros",
      intro: "¿Por qué el mismo ejercicio agota enormemente a un equipo…\ny casi nada a otro?\n\nPorque todo depende de los parámetros.",
      content: "En este módulo, aprendes a dominar:",
      bullets: [
        "los espacios",
        "las duraciones",
        "el número de jugadores",
        "las reglas"
      ],
      conclusion: "Por fin sabes cómo desencadenar la carga que quieres, con balón."
    },
    {
      number: 6,
      icon: Activity,
      title: 'Leer, dosificar y ajustar la carga',
      subtitle: "Gestionar la carga con balón, de forma sencilla",
      intro: "No tienes GPS.\nNo tienes preparador físico.\nPero igualmente debes gestionar la fatiga.\n\nEn este módulo, aprendes a leer la carga con herramientas sencillas:\nel RPE, cuestionarios cortos y la observación de campo.",
      content: "Entiendes cómo detectar las alertas,\ny sobre todo cómo ajustar concretamente tus sesiones.",
      bullets: [],
      conclusion: "Dejas de gestionar \"a ojo\".\nTomas decisiones para mantener a tus jugadores más frescos… cuando importa."
    },
    {
      number: 7,
      icon: MessageCircle,
      title: 'El discurso del entrenador',
      subtitle: "Lo que dices cambia lo que tus jugadores producen",
      intro: "Un ejercicio puede estar bien construido…\ny sin embargo no producir el efecto buscado.\n\nA menudo, la diferencia está en el discurso.\nLo que explicas. Lo que resaltas. Lo que observas.\n\nEn este módulo, entiendes lo que los jugadores buscan comprender,\nlos errores de discurso más frecuentes,\ny cómo tus palabras influyen en la adhesión y la calidad producida.",
      content: "Aprendes a usar el discurso como una palanca física real,\nno solo para motivar, sino para orientar lo que ocurre en el campo.",
      bullets: [],
      conclusion: ""
    },
    {
      number: 8,
      icon: Calendar,
      title: 'El sistema en toda la temporada',
      subtitle: "De la sesión aislada a la visión de 10 meses",
      intro: "Es aquí donde todo encaja.",
      content: "Este módulo te enseña a:",
      bullets: [
        "eliminar las semanas de \"un poco de todo\"",
        "jerarquizar las cualidades físicas",
        "usar las microdosis de forma inteligente",
        "proteger la frescura física en los momentos clave"
      ],
      conclusion: "Pasas de sesiones aisladas a una visión clara sobre 10 meses de temporada."
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* Premium background with golden glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/40 via-white to-yellow-50/40" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Title section */}
      <div className="relative py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Badge with glow effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-full backdrop-blur-sm shadow-lg shadow-yellow-400/10"
            >
              <Zap className="w-4 h-4 text-yellow-600" />
              <span className="text-yellow-700 font-bold text-sm uppercase tracking-wider">El sistema completo</span>
            </motion.div>

            {/* Title with golden glow */}
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
              <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-black">8 módulos para </span>
                <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  dominar el físico con balón
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Cada módulo responde a una pregunta real de entrenador
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modules Grid - Award winning design */}
      <div className="relative pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                  
                  <div className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 group-hover:border-yellow-400/60 rounded-2xl overflow-hidden transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-yellow-400/20">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-50/0 group-hover:via-yellow-50/50 to-transparent transition-all duration-500" />
                    
                    {/* Header - Always visible, clickable */}
                    <button
                      onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                      className="relative w-full p-8 text-left"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        {/* Number Badge with golden gradient */}
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-xl shadow-yellow-400/30"
                        >
                          <span className="text-2xl font-black text-black">{module.number}</span>
                        </motion.div>
                        
                        {/* Icon */}
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl flex items-center justify-center border border-yellow-200/50">
                          <Icon className="w-6 h-6 text-yellow-700" strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-black mb-2 leading-tight group-hover:text-yellow-900 transition-colors">
                        {module.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-base text-gray-600 font-medium mb-4">
                        {module.subtitle}
                      </p>

                      {/* Chevron indicator */}
                      <div className="flex items-center justify-center w-full mt-4">
                        <motion.div
                          animate={{ rotate: expandedModule === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                        >
                          <ChevronDown className="w-5 h-5 text-black" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Content - Expandable */}
                    <AnimatePresence>
                      {expandedModule === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 space-y-4">
                            {/* Intro */}
                            <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed">
                              {module.intro}
                            </p>

                            {/* Content */}
                            {module.content && (
                              <p className="text-base text-yellow-800 font-semibold">
                                {module.content}
                              </p>
                            )}

                            {/* Bullets */}
                            {module.bullets && (
                              <ul className="space-y-2 pl-2">
                                {module.bullets.map((bullet, bulletIndex) => (
                                  <li 
                                    key={bulletIndex}
                                    className="text-base text-gray-600 flex items-start gap-2"
                                  >
                                    <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Conclusion */}
                            {module.conclusion && (
                              <div className="pt-4 mt-4 border-t border-yellow-200/50">
                                <div className="flex items-start gap-2 p-3 bg-gradient-to-r from-yellow-50/50 to-transparent rounded-lg">
                                  <Zap className="w-4 h-4 flex-shrink-0 mt-0.5 text-yellow-600" strokeWidth={2.5} />
                                  <p className="text-base text-yellow-800 font-semibold leading-relaxed">
                                    {module.conclusion}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Closing statement with golden glow */}
      <div className="relative pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl opacity-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
            
            <p className="relative text-2xl sm:text-3xl lg:text-4xl font-black text-black leading-tight">
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">Entiendes</span>, <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">decides</span>, <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">ajustas</span>,{' '}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">pilotas</span> tu temporada.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}