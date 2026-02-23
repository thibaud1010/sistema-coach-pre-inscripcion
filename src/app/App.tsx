import { Hero } from '@/app/components/Hero';
import { NarrativeAwwards } from '@/app/components/NarrativeAwwards';
import { Transition } from '@/app/components/Transition';
import { Transformation } from '@/app/components/Transformation';
import { ForWho } from '@/app/components/ForWho';
import { Benefits } from '@/app/components/Benefits';
import { Origin } from '@/app/components/Origin';
import { Overview } from '@/app/components/Overview';
import { Modules } from '@/app/components/Modules';
import { Content } from '@/app/components/Content';
import { Testimonials } from '@/app/components/Testimonials';
import { SocialProof } from '@/app/components/SocialProof';
import { Guarantee } from '@/app/components/Guarantee';
import { Pricing } from '@/app/components/Pricing';
import { FAQ } from '@/app/components/FAQ';
import { Footer } from '@/app/components/Footer';
import { InlineCTA } from '@/app/components/InlineCTA';
import { DecisionBridge } from '@/app/components/DecisionBridge';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <NarrativeAwwards />
      <Transition />
      <Transformation />
      
      <Benefits />
      <Origin />
      <Overview />
      
      <Modules />
      
      {/* Section Contenu du Programme */}
      <Content />
      
      {/* CTA Inline après Content */}
      <InlineCTA 
        title="Sí, quiero ver los módulos y las fichas prácticas" 
      />

      <Testimonials />
      <ForWho />
      <SocialProof />
      <Guarantee />

      {/* Pont de décision — empathie avant pricing */}
      <DecisionBridge />
      
      <Pricing />
      <FAQ />
      <Footer />

      {/* Barre sticky — toujours disponible, jamais agressive */}
      {/* <StickyBar /> */}
    </div>
  );
}