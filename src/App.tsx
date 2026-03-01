import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import ValueSection from './sections/ValueSection';
import ProgramsSection from './sections/ProgramsSection';
import ExecutionSection from './sections/ExecutionSection';
import CoverageSection from './sections/CoverageSection';
import TestimonialSection from './sections/TestimonialSection';
import ProcessSection from './sections/ProcessSection';
import CTASection from './sections/CTASection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-cream transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main ref={mainRef} className="relative">
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: Value Proposition */}
        <ValueSection />
        
        {/* Section 3: Programs */}
        <ProgramsSection />
        
        {/* Section 4: Execution */}
        <ExecutionSection />
        
        {/* Section 5: Coverage */}
        <CoverageSection />
        
        {/* Section 6: Testimonial */}
        <TestimonialSection />
        
        {/* Section 7: How It Works */}
        <ProcessSection />
        
        {/* Section 8: Final CTA */}
        <CTASection />
        
        {/* Section 9: Contact */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
