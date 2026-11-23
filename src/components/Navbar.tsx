import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ACADEMY_MEDIA, buildWhatsAppUrl } from '../data/academyData';

export type NavSectionId = 'home' | 'schedule' | 'pricing' | 'about';

interface NavbarProps {
  activeSection: NavSectionId;
}

const NAV_LINKS: { id: NavSectionId; label: string; href: string }[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'schedule', label: 'Schedule', href: '#schedule' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'about', label: 'About Us', href: '#about' },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trialUrl = buildWhatsAppUrl(
    'Hi Leo Shuttlers Arena (LSA), I would like to book a free badminton trial session.'
  );

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090B]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Primary Brand Logo */}
        <a
          href="#home"
          aria-label="LSA — Leo Shuttlers Arena"
          className="inline-flex items-center shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
        >
          <img
            src={ACADEMY_MEDIA.logo.src}
            alt={ACADEMY_MEDIA.logo.alt}
            referrerPolicy="no-referrer"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        {/* Zone 2: 4 Clean Single-Line Nav Links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-orange-500 transition-transform duration-150 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={trialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center min-h-10 rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition-colors duration-150 hover:bg-orange-400 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Book Trial
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden items-center justify-center h-11 w-11 rounded-md border border-white/10 text-white transition-colors duration-150 hover:border-orange-500/60 hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-orange-500"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#09090B] px-4 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`flex items-center min-h-11 rounded-md px-3 py-2 text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#18181B] text-orange-400'
                      : 'text-zinc-300 hover:bg-[#18181B] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-2 inline-flex items-center justify-center min-h-11 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-black transition-colors duration-150 hover:bg-orange-400"
            >
              Book Trial on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
