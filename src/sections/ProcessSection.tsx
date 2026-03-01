import { useEffect, useRef, useState } from 'react';

const ProcessSection = () => {
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
      { threshold: 0.15, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Intro call',
      description: 'We compare notes on specs, volume, and timing.',
    },
    {
      number: '02',
      title: 'Spec alignment',
      description: 'We confirm labels, documentation, and shipping preferences.',
    },
    {
      number: '03',
      title: 'Program setup',
      description: 'Fixed cadence, clear SLAs, and a backup plan.',
    },
    {
      number: '04',
      title: 'Execution & feedback',
      description: 'Weekly updates, claims handling, and continuous refinement.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-20 md:py-28 bg-cream"
    >
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Heading */}
          <div
            className={`w-full lg:w-[35%] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="label-mono mb-4 block">Process</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight">
              How it works.
            </h2>
            <p className="mt-6 text-navy/65 leading-relaxed">
              A straightforward onboarding process designed to get you up and
              running with minimal friction.
            </p>
          </div>

          {/* Right: Timeline */}
          <div
            className={`w-full lg:w-[60%] relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Vertical Line */}
            <div
              className={`absolute left-[19px] top-0 w-px bg-navy/15 h-full transition-all duration-1000 delay-500 ${
                isVisible ? 'scale-y-100' : 'scale-y-0'
              }`}
              style={{ transformOrigin: 'top' }}
            />

            {/* Steps */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex gap-6 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                  style={{ transitionDelay: `${300 + index * 120}ms` }}
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-cream border border-navy/20 flex-shrink-0">
                    <span className="font-mono text-xs font-medium text-bronze">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1.5">
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-navy/65 leading-relaxed">
                      {step.description}
                    </p>
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

export default ProcessSection;
