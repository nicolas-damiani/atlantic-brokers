import { useEffect, useRef, useState } from 'react';
import { Bell, Shield, Clock } from 'lucide-react';

const ExecutionSection = () => {
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
      icon: Clock,
      label: 'Weekly Cadence',
      description: 'Status updates and vessel tracking.',
    },
    {
      icon: Bell,
      label: 'Early Warnings',
      description: 'Head off delays before they become problems.',
    },
    {
      icon: Shield,
      label: 'Claims Support',
      description: 'Clear process for feedback and resolution.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="execution"
      className="relative py-20 md:py-28 bg-cream"
    >
      <div className="section-padding">
        {/* Top: Wide Image */}
        <div
          className={`relative w-full aspect-[21/9] mb-16 overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="/images/execution_port.jpg"
            alt="International shipping port"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom: Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Heading */}
          <div
            className={`w-full lg:w-[40%] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="label-mono mb-4 block">Execution</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight">
              From pasture to port.
            </h2>
          </div>

          {/* Right: Description + Steps */}
          <div
            className={`w-full lg:w-[55%] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg text-navy/70 leading-relaxed mb-10">
              We coordinate with Uruguay plants, logistics, and your importer of
              record to keep timelines predictable and paperwork clean.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.label}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-navy/15 flex-shrink-0">
                    <step.icon
                      size={18}
                      className="text-bronze"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <span className="label-mono text-navy block mb-1">
                      {step.label}
                    </span>
                    <p className="text-navy/65">{step.description}</p>
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

export default ExecutionSection;
