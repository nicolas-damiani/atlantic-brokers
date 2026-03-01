import { useEffect, useRef, useState } from 'react';

const CoverageSection = () => {
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

  const stats = [
    {
      value: '10+',
      label: 'Years',
      description: 'Average team tenure in protein trade',
    },
    {
      value: 'Weekly',
      label: 'Updates',
      description: 'Market updates and execution reports',
    },
    {
      value: 'Full',
      label: 'Chain',
      description: 'Plant → port → cold storage coordination',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="coverage"
      className="relative py-20 md:py-28 bg-cream"
    >
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div
            className={`w-full lg:w-[50%] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/coverage_processing.jpg"
                alt="Meat processing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`w-full lg:w-[45%] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="label-mono mb-4 block">Coverage</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight mb-6">
              Nationwide supply. Single point of contact.
            </h2>
            <p className="text-lg text-navy/70 leading-relaxed mb-10">
              We support US importers, traders, and processors with recurring
              Uruguay programs—backed by responsive coordination and clear
              documentation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-navy/10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="label-mono text-bronze mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-navy mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-navy/50 leading-snug">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
