import { useEffect, useRef, useState } from 'react';
import { Calendar, FileCheck, Eye } from 'lucide-react';

const ValueSection = () => {
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

  const cards = [
    {
      icon: Calendar,
      title: 'Program continuity',
      description:
        'Monthly cadence, fixed specs, and early warnings if anything shifts.',
      delay: 'delay-200',
    },
    {
      icon: FileCheck,
      title: 'Documentation-ready',
      description:
        'Labels, certs, and import paperwork coordinated with your importer of record.',
      delay: 'delay-300',
    },
    {
      icon: Eye,
      title: 'Transparent execution',
      description:
        'Weekly updates. No surprises. Clear timelines from plant to port.',
      delay: 'delay-400',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="value"
      className="relative py-20 md:py-28 bg-cream"
    >
      <div className="section-padding">
        {/* Header */}
        <div
          className={`max-w-xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="label-mono mb-4 block">Value</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight">
            Built for importers who need consistency.
          </h2>
          <div className="mt-6 hairline max-w-xs origin-left" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`card-surface p-8 transition-all duration-700 ${card.delay} ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              } ${index === 1 ? 'md:mt-8' : ''}`}
            >
              <div className="mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-navy/15">
                  <card.icon size={24} className="text-bronze" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {card.title}
              </h3>
              <p className="text-navy/65 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
