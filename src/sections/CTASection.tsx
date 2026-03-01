import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
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
      { threshold: 0.3, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-24 md:py-32 bg-navy"
    >
      <div className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ready to compare notes?
          </h2>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-cream/70 leading-relaxed mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Book a 20-minute call. We'll understand your Uruguay lane—and we'll
            be direct if there's a fit.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-bronze text-white font-medium text-sm tracking-wide transition-all duration-200 hover:bg-bronze-light hover:-translate-y-0.5 group"
            >
              Book a call
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Microcopy */}
          <p
            className={`mt-8 text-sm text-cream/50 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            No sales pitch. If it's not right, we'll say so.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
