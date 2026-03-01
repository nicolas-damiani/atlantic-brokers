import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cream border-t border-navy/10">
      <div className="section-padding py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Logo + Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-lg text-navy">
                Atlantic
              </span>
              <span className="text-navy/40">|</span>
              <span className="font-mono text-xs uppercase tracking-wider text-bronze">
                Meat Brokers
              </span>
            </div>
            <p className="text-sm text-navy/50">
              © {new Date().getFullYear()} Atlantic Meat Brokers. All rights reserved.
            </p>
          </div>

          {/* Center: Links */}
          <nav className="flex flex-wrap gap-6">
            {[
              { label: 'Programs', id: 'programs' },
              { label: 'How It Works', id: 'process' },
              { label: 'Coverage', id: 'coverage' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  const element = document.getElementById(link.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-sm text-navy/60 hover:text-navy transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-navy/60 hover:text-navy transition-colors group"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Bottom: Legal */}
        <div className="mt-10 pt-6 border-t border-navy/10">
          <p className="text-xs text-navy/40 leading-relaxed max-w-3xl">
            Atlantic Meat Brokers facilitates connections between US buyers and
            Uruguay beef suppliers. We do not sell directly to consumers. All
            import documentation, certifications, and compliance requirements are
            coordinated with your designated importer of record. Final
            eligibility, labels, and import steps are handled in partnership with
            licensed importers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
