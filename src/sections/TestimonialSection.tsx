import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
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

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="relative py-24 md:py-32 bg-cream"
    >
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div
            className={`flex justify-center mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <Quote size={40} className="text-bronze/40" strokeWidth={1} />
          </div>

          {/* Quote Text */}
          <blockquote
            className={`font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-navy leading-snug mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            "Atlantic keeps our Uruguay lane predictable. Weekly updates, clean
            docs, and no surprises—that's why we keep booking."
          </blockquote>

          {/* Portrait */}
          <div
            className={`flex flex-col items-center transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-navy/10">
              <img
                src="/images/testimonial_portrait.jpg"
                alt="Procurement Director"
                className="w-full h-full object-cover"
              />
            </div>
            <cite className="not-italic text-sm text-navy/60">
              — Procurement Director, US Protein Trading Firm
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
