import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    '85CL / 90CL lean trim programs',
    'Primal & cut-specific options',
    'Labeling and documentation coordinated',
  ];

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="relative py-20 md:py-28 bg-cream"
    >
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div
            className={`w-full lg:w-[45%] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="label-mono mb-4 block">Programs</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight mb-6">
              Frozen and chilled beef programs.
            </h2>
            <p className="text-lg text-navy/70 leading-relaxed mb-8">
              Lean trim, primal/cut combinations, and custom specs—shipped from
              Uruguay to US ports with consistent monthly volume.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <Check size={16} className="text-bronze" strokeWidth={2} />
                  </div>
                  <span className="text-navy/80">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={scrollToProcess}
              className="inline-flex items-center text-navy font-medium hover:text-bronze transition-colors group"
            >
              See how it works
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Divider (desktop only) */}
          <div
            className={`hidden lg:block hairline-vertical h-[400px] transition-all duration-1000 delay-300 ${
              isVisible ? 'scale-y-100' : 'scale-y-0'
            }`}
            style={{ transformOrigin: 'top' }}
          />

          {/* Right: Image */}
          <div
            className={`w-full lg:w-[50%] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/programs_cut_beef.jpg"
                alt="Premium beef cuts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
