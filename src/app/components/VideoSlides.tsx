import React from 'react';

function SlideHeader({ title }: { title: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-between px-3 py-2 border-b border-white/10"
      style={{ background: '#0d0718' }}
    >
      <div className="flex items-center gap-2 min-w-0">
        {/* YouTube-like logo */}
        <div className="flex-shrink-0 w-5 h-5 bg-red-600 rounded flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span
          className="text-white font-black uppercase truncate"
          style={{ fontSize: '8px', letterSpacing: '0.05em' }}
        >
          {title}
        </span>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-1 h-1 bg-white/40 rounded-full" />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 1 — Resistencia de potencia
───────────────────────────────────────────── */
export function Slide1() {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: '#1a0e2e' }}>
      <SlideHeader title="RESISTENCIA DE POTENCIA" />

      <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ color: 'white' }}>
        {/* Titre principal */}
        <h2 style={{ fontSize: '12px', fontWeight: 800, lineHeight: 1.35 }}>
          Lo que el balón permite para la resistencia de potencia
        </h2>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)' }} />

        {/* Section 1 */}
        <p style={{ fontSize: '10px', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: '4px' }}>
          El balón activa naturalmente la intermitencia
        </p>

        <p style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.8)' }}>
          En fútbol, la intensidad no viene de un cronómetro
        </p>

        <div>
          <p style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
            Viene de:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
            {['Los duelos', 'Las pérdidas y transiciones', 'Los desmarques y repliegues'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '7px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '3px',
                  padding: '2px 5px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.8)' }}>
          Con balón, el juego crea espontáneamente:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {['Esfuerzos muy intensos', 'Recuperaciones cortas', 'Luego nuevos esfuerzos'].map((item) => (
            <div
              key={item}
              style={{
                fontSize: '8px',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '4px',
                padding: '4px 7px',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Check conclusion */}
        <div
          style={{
            background: 'rgba(234,179,8,0.1)',
            border: '1px solid rgba(234,179,8,0.3)',
            borderRadius: '4px',
            padding: '6px 8px',
            display: 'flex',
            gap: '5px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ color: '#eab308', fontSize: '9px', flexShrink: 0 }}>✓</span>
          <span style={{ fontSize: '8px', color: 'rgba(255,235,140,0.9)', lineHeight: 1.4 }}>
            Es exactamente la lógica de la resistencia de potencia.
          </span>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)' }} />

        {/* Section 2 */}
        <p style={{ fontSize: '10px', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: '4px' }}>
          El balón reproduce la intensidad real del partido
        </p>

        <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.65)', marginBottom: '3px' }}>
          La resistencia de potencia se expresa en partido:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
          {['Acelerando para atacar', 'Esprintando para defender', 'Frenando y volviendo', 'Decisiones bajo fatiga'].map((item) => (
            <div
              key={item}
              style={{
                fontSize: '7px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '3px',
                padding: '4px',
                color: 'rgba(255,255,255,0.8)',
                textAlign: 'center',
                lineHeight: 1.3,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 2 — Velocidad máxima
───────────────────────────────────────────── */
export function Slide2() {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: '#1a0e2e' }}>
      <SlideHeader title="VELOCIDAD MÁXIMA" />

      <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ color: 'white' }}>
        {/* Titre */}
        <h2 style={{ fontSize: '12px', fontWeight: 800, lineHeight: 1.35 }}>
          Lo que el balón permite menos: la velocidad máxima
        </h2>

        {/* Encadré rose/rouge = section "Para alcanzar" */}
        <div style={{ background: '#fee2e2', borderRadius: '4px', padding: '6px 8px' }}>
          <p style={{ fontSize: '8.5px', fontWeight: 700, color: '#1a1a1a' }}>
            Para alcanzar la velocidad máxima, se necesita:
          </p>
        </div>

        <ul
          style={{
            fontSize: '8px',
            color: 'rgba(255,255,255,0.85)',
            paddingLeft: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            listStyleType: 'disc',
          }}
        >
          {['una distancia suficiente', 'una intención de sprint total', 'una recuperación completa'].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* En el juego con balón */}
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '4px',
            padding: '6px 8px',
          }}
        >
          <p style={{ fontSize: '8.5px', fontWeight: 700, marginBottom: '4px' }}>
            En el juego con balón:
          </p>
          <ul
            style={{
              fontSize: '7.5px',
              color: 'rgba(255,255,255,0.8)',
              paddingLeft: '10px',
              listStyleType: 'disc',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
          >
            {[
              'las distancias son a menudo demasiado cortas.',
              'el jugador adapta su carrera a la situación.',
              'frena para leer, decidir o controlar',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p style={{ fontSize: '7.5px', color: 'rgba(239,68,68,0.9)', fontStyle: 'italic' }}>
          …es por tanto raramente alcanzada con el balón.
        </p>

        {/* Consecuencia */}
        <div>
          <p style={{ fontSize: '9px', fontWeight: 700, marginBottom: '4px' }}>
            Consecuencia importante para el entrenador:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ display: 'flex', gap: '5px', fontSize: '7.5px', color: 'rgba(255,255,255,0.85)', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', flexShrink: 0 }}>•</span>
              <span>El balón es excelente para la aceleración.</span>
            </div>
            <div style={{ display: 'flex', gap: '5px', fontSize: '7.5px', color: 'rgba(255,255,255,0.85)', alignItems: 'flex-start' }}>
              <span style={{ color: '#f87171', flexShrink: 0 }}>•</span>
              <span>
                Es <strong>más limitado</strong> para desarrollar la velocidad máxima.
              </span>
            </div>
          </div>
        </div>

        {/* À retenir — fond jaune */}
        <div style={{ background: '#fefce8', borderRadius: '4px', padding: '7px 8px' }}>
          <p style={{ fontSize: '8.5px', fontWeight: 800, color: '#1a1a1a', marginBottom: '5px' }}>
            A recordar
          </p>
          <div style={{ fontSize: '7.5px', color: '#1a1a1a', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {[
              ['⚽', 'Balón = muy buena herramienta para la aceleración'],
              ['⚽', 'Balón = herramienta parcial para la velocidad máxima'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', gap: '4px', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0 }}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
            <div
              style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'flex-start',
                fontStyle: 'italic',
                color: '#666',
              }}
            >
              <span style={{ flexShrink: 0 }}>→</span>
              <span>El entrenador debe saber lo que permite… y lo que permite menos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 3 — La explosividad
───────────────────────────────────────────── */
export function Slide3() {
  const sections = [
    {
      title: 'Repeticiones múltiples',
      text: 'Para desarrollar la explosividad, no basta con que aparezca una o dos veces durante el juego.',
    },
    {
      title: 'Intensidad máxima',
      text: 'Las repeticiones deben realizarse a la intensidad más alta posible, buscando el rendimiento máximo en cada esfuerzo.',
    },
    {
      title: 'Recuperación suficiente',
      text: 'Una recuperación adecuada entre cada esfuerzo es esencial para mantener la calidad y la intensidad máximas.',
    },
  ];

  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: '#1a0e2e' }}>
      <SlideHeader title="LA EXPLOSIVIDAD" />

      <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ color: 'white' }}>
        {/* Titre */}
        <h2 style={{ fontSize: '12px', fontWeight: 800, lineHeight: 1.35 }}>
          Este juego desarrolla poco la explosividad
        </h2>

        {/* Intro avec highlights rouges */}
        <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.55 }}>
          Ciertas condiciones son indispensables para el desarrollo de la explosividad:{' '}
          <strong style={{ color: '#f87171' }}>frescura</strong>,{' '}
          <strong style={{ color: '#f87171' }}>recuperación completa</strong>, e{' '}
          <strong style={{ color: '#f87171' }}>intensidad máxima</strong>.
        </p>

        <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
          A estos elementos, hay que añadir otro punto clave:{' '}
          <strong style={{ color: '#fbbf24' }}>el volumen</strong>.
        </p>

        {/* Trois encadrés sections */}
        {sections.map((section, i) => (
          <div key={i}>
            <div
              style={{
                background: '#fee2e2',
                borderRadius: '4px 4px 0 0',
                padding: '5px 8px',
              }}
            >
              <p style={{ fontSize: '8.5px', fontWeight: 700, color: '#991b1b' }}>
                {section.title}
              </p>
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(254,226,226,0.2)',
                borderTop: 'none',
                borderRadius: '0 0 4px 4px',
                padding: '5px 8px',
              }}
            >
              <p style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.45 }}>
                {section.text}
              </p>
            </div>
          </div>
        ))}

        {/* Conclusion */}
        <p style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, fontStyle: 'italic' }}>
          El desarrollo de la explosividad exige un entorno donde estas condiciones puedan controlarse
          y maximizarse, lo que a menudo es difícil de obtener en el flujo continuo de un juego con
          balón (tipo juego reducido).
        </p>
      </div>
    </div>
  );
}
