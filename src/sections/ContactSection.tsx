import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    setDialogMessage('Thank you for your inquiry. We will respond within one business day.');
    setShowDialog(true);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const volumeOptions = [
    'Less than 1 container/month',
    '1-2 containers/month',
    '3-5 containers/month',
    '5+ containers/month',
    'Not sure / Exploring',
  ];

  const productOptions = [
    'Lean trim programs (85CL/90CL)',
    'Frozen boneless beef',
    'Primal/cut-specific programs',
    'Chilled beef',
    'Multiple / Not sure yet',
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 md:py-28 bg-cream"
    >
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <div
            className={`w-full lg:w-[40%] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="label-mono mb-4 block">Contact</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight mb-6">
              Let's talk.
            </h2>
            <p className="text-lg text-navy/70 leading-relaxed mb-10">
              Tell us what you're sourcing. We'll respond within one business day.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-navy/15 flex-shrink-0">
                  <Mail size={18} className="text-bronze" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="label-mono block mb-1">Email</span>
                  <a
                    href="mailto:hello@atlanticmeatbrokers.com"
                    className="text-navy hover:text-bronze transition-colors"
                  >
                    hello@atlanticmeatbrokers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-navy/15 flex-shrink-0">
                  <Phone size={18} className="text-bronze" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="label-mono block mb-1">Phone</span>
                  <a
                    href="tel:+15550132400"
                    className="text-navy hover:text-bronze transition-colors"
                  >
                    +1 (555) 013-2400
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-navy/15 flex-shrink-0">
                  <MapPin size={18} className="text-bronze" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="label-mono block mb-1">Offices</span>
                  <p className="text-navy/70">Miami, FL • Montevideo, UY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`w-full lg:w-[55%] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card-surface p-8 md:p-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="label-mono block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-cream border border-navy/15 text-navy placeholder:text-navy/40 focus:border-bronze focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="label-mono block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 bg-cream border border-navy/15 text-navy placeholder:text-navy/40 focus:border-bronze focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="label-mono block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-cream border border-navy/15 text-navy placeholder:text-navy/40 focus:border-bronze focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="label-mono block mb-2">
                    Phone <span className="text-navy/40">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-cream border border-navy/15 text-navy placeholder:text-navy/40 focus:border-bronze focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Monthly Volume */}
                <div>
                  <label htmlFor="volume" className="label-mono block mb-2">
                    Monthly Volume
                  </label>
                  <select
                    id="volume"
                    name="volume"
                    required
                    className="w-full px-4 py-3 bg-cream border border-navy/15 text-navy focus:border-bronze focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select volume range</option>
                    {volumeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Product Interest */}
                <div>
                  <label htmlFor="product" className="label-mono block mb-2">
                    Product Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    className="w-full px-4 py-3 bg-cream border border-navy/15 text-navy focus:border-bronze focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select product type</option>
                    {productOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-6">
                <label htmlFor="notes" className="label-mono block mb-2">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-3 bg-cream border border-navy/15 text-navy placeholder:text-navy/40 focus:border-bronze focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your current sourcing needs, challenges, or questions..."
                />
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto group"
                >
                  Send inquiry
                  <Send
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-cream border border-navy/10">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl text-navy">
              Inquiry Received
            </DialogTitle>
            <DialogDescription className="text-navy/70">
              {dialogMessage}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
