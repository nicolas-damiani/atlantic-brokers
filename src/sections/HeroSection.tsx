import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-cream overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Image Panel */}
        <div
          className={`relative w-full lg:w-[52vw] h-[50vh] lg:h-screen transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <img
            src="/images/hero_cattle.jpg"
            alt="Cattle grazing in Uruguay pasture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream/20 lg:to-cream/40" />
        </div>

        {/* Right: Content Panel */}
        <div
          className={`relative w-full lg:w-[48vw] flex flex-col justify-center px-6 md:px-12 lg:px-[4vw] py-16 lg:py-0 transition-all duration-1000 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          {/* Micro Label */}
          <div
            className={`mb-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <span className="label-mono">Uruguay Beef • US Importers</span>
          </div>

          {/* Headline */}
          <h1
            className={`font-heading text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-navy leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Uruguay beef programs for US buyers.
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-navy/70 max-w-lg mb-10 leading-relaxed transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            We manage supply continuity, documentation, and weekly execution—so you can plan with confidence.
          </p>

          {/* CTA Row */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button onClick={scrollToContact} className="btn-primary group">
              Book a call
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={scrollToProcess}
              className="inline-flex items-center justify-center text-navy/80 hover:text-navy font-medium text-sm transition-colors group"
            >
              <Mail size={16} className="mr-2" />
              Get market updates
              <ArrowRight
                size={14}
                className="ml-1 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-16 pt-8 border-t border-navy/10 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex flex-wrap gap-6">
              {[
                'Program-based supply',
                'Documentation-ready',
                'Weekly cadence',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-bronze" />
                  <span className="text-sm text-navy/60">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
