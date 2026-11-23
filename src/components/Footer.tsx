import { ArrowUpRight } from 'lucide-react';
import { ACADEMY_MEDIA, PHONE_DISPLAY, buildWhatsAppUrl } from '../data/academyData';

export function Footer() {
  const whatsappHref = buildWhatsAppUrl(
    'Hi Leo Shuttlers Arena (LSA), I have an enquiry about joining badminton coaching.'
  );

  return (
    <footer className="bg-[#09090B] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div>
            <a
              href="#home"
              aria-label="LSA — Leo Shuttlers Arena"
              className="inline-flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            >
              <img
                src={ACADEMY_MEDIA.logo.src}
                alt={ACADEMY_MEDIA.logo.alt}
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="mt-3 max-w-md text-sm text-zinc-400">
              Passionate coaches, a structured curriculum, and Indonesian coaching expertise for
              kids, adults, and elite players.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-300">
            <a
              href="#home"
              className="transition-colors duration-150 hover:text-orange-400 whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#schedule"
              className="transition-colors duration-150 hover:text-orange-400 whitespace-nowrap"
            >
              Schedule
            </a>
            <a
              href="#pricing"
              className="transition-colors duration-150 hover:text-orange-400 whitespace-nowrap"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="transition-colors duration-150 hover:text-orange-400 whitespace-nowrap"
            >
              About Us
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-orange-400 transition-colors duration-150 hover:text-orange-300 whitespace-nowrap"
            >
              <span>WhatsApp {PHONE_DISPLAY}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Leo Shuttlers Arena (LSA). All rights reserved.</p>
          <p>Static Academy Portal · WhatsApp Bookings {PHONE_DISPLAY}</p>
        </div>
      </div>
    </footer>
  );
}
