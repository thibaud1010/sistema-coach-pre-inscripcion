import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Plus, Minus, Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
  isObjection?: boolean;
}

const faqData: FAQItem[] = [
  {
    question: "Ya hago muchos juegos con balón. ¿Me va a ayudar igualmente?",
    answer: "Sí. Y es precisamente para eso que existe el Sistema Coach. No se trata de hacer más juegos, sino de entender qué producen físicamente tus juegos, y cómo ajustarlos para que sean realmente eficaces. Si ya trabajas con balón pero a veces dudas del efecto real, estás exactamente en el perfil ideal."
  },
  {
    question: "No soy preparador físico. ¿Es un problema?",
    answer: "No. El Sistema Coach está diseñado para entrenadores, no para preparadores físicos. No te pide que te conviertas en experto en fisiología. Te enseña a observar, leer y decidir a partir de lo que ves en el campo."
  },
  {
    question: "Me falta tiempo en los entrenamientos. ¿Está adaptado?",
    answer: "Sí. Todo el sistema está pensado para contextos con pocas sesiones por semana, jugadores amateurs y pocos o ningún recurso. El objetivo es que cada minuto cuente, no añadir más."
  },
  {
    question: "Cada grupo es diferente. ¿Puede funcionar realmente para mí?",
    answer: "Precisamente porque cada grupo es diferente. El Sistema Coach no te da un programa rígido. Te da una lógica de decisión, adaptable a la edad, el nivel, el número de jugadores y el calendario. Tú ajustas según tu contexto real."
  },
  {
    question: "¿Y si a veces trabajo sin balón?",
    answer: "No es un problema. El Sistema Coach te ayuda precisamente a transferir ese trabajo sin balón al juego, y a verificar que esa transferencia es real y útil en el partido. Es especialmente interesante para entrenadores de categorías inferiores."
  },
  {
    question: "¿No es demasiado teórico?",
    answer: "No. El sistema está basado en situaciones de juego, observaciones de campo y ajustes concretos. La teoría sirve únicamente para entender mejor lo que ves, no para rellenar tablas."
  },
  {
    question: "¿A quién va dirigido el Sistema Coach?",
    answer: "A todos los entrenadores de fútbol: de categorías inferiores o adultos, amateurs, con o sin preparador físico. Que trabajan (o quieren trabajar) el físico con balón y quieren dejar de improvisar."
  },
  {
    question: "¿Qué voy a aprender exactamente?",
    answer: "Aprenderás a: saber qué cualidad física trabajas realmente, entender cómo se expresa en el juego, reconocer si funciona o no, ajustar tus situaciones en directo, gestionar mejor la carga con balón, y ser más claro en tu discurso a los jugadores."
  },
  {
    question: "¿Cuál es el formato del programa?",
    answer: "Módulos en línea, fichas prácticas PDF, ejercicios en 3D. Acceso en línea, a tu ritmo (teléfono, tableta, ordenador). Puedes avanzar cuando quieras, volver atrás, probar en el campo."
  },
  {
    question: "Tengo poca experiencia en preparación física. ¿Puedo seguirlo?",
    answer: "Sí. No se necesita ningún conocimiento previo. El sistema está construido para aclarar, no para impresionar."
  },
  {
    question: "¿Cuánto tiempo tengo acceso al contenido?",
    answer: "El acceso es de por vida. Puedes volver cuando quieras, en cualquier momento de la temporada."
  },
  {
    question: "¿Voy a recibir soporte?",
    answer: "Sí. Se incluye un acompañamiento personalizado para responder a tus preguntas y ayudarte a adaptar el sistema a tu contexto."
  },
  {
    question: "¿Cómo puedo estar seguro de que va a funcionar para mí?",
    answer: "Porque el sistema no te pide que creas. Te pide que lo pruebes en el campo. Y si consideras que no te es útil, estás cubierto por la garantía."
  },
  {
    question: "¿Cuánto tiempo hay que esperar para ver resultados?",
    answer: "Muchos entrenadores sienten un cambio rápidamente: más claridad, menos dudas, mejores ajustes en sesión. Los efectos físicos, en cambio, se inscriben en la duración, como cualquier trabajo serio."
  },
  {
    question: "¿Puedo pagar a plazos?",
    answer: "Sí. Se ofrecen soluciones de pago fraccionado."
  },
  {
    question: "¿Hay garantía de satisfacción o reembolso?",
    answer: "Sí. La garantía es total. Puedes usar el sistema, aplicarlo, y decidir después si te conviene. Si no es el caso, te reembolsamos."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              PREGUNTAS FRECUENTES
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-20">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-lg sm:text-xl pr-8">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-black" />
                    ) : (
                      <Plus className="w-5 h-5 text-black" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact section */}
          <motion.div
            variants={itemVariants}
            className="relative mt-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
                <Mail className="w-8 h-8 text-yellow-400" />
              </div>

              <h3 className="text-3xl sm:text-4xl mb-4 text-black">
                ¿Necesitas ayuda?
              </h3>

              <p className="text-lg sm:text-xl text-black/80 mb-6">
                Contáctanos, te respondemos rápidamente
              </p>

              <a
                href="mailto:prepaphysiquefootball@gmail.com"
                className="inline-block text-lg sm:text-xl text-black hover:text-black/70 transition-colors duration-300 underline underline-offset-4 decoration-2 break-all px-4"
              >
                prepaphysiquefootball@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}