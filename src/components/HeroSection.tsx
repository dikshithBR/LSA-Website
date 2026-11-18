import { ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  ACADEMY_MEDIA,
  ACADEMY_PILLARS,
  HERO_PROOF_STRIP,
  buildWhatsAppUrl,
} from '../data/academyData';
import { SmartImage } from './SmartImage';

export function HeroSection() {
  const whatsappTrialHref = buildWhatsAppUrl(
    'Hi Leo Shuttlers Arena (LSA), I want to book a trial badminton session. Please share available court slots.'
  );

  return (
    <section id="home" className="border-b border-white/10 bg-[#09090B]">
      {/* Hero Split Frame */}
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-12 sm:px-6 lg:px-8 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Focal Copy */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-sm font-medium tracking-wide text-orange-400">
                Indonesian Coaching · Structured Curriculum · Passionate Coaches
              </p>

              <h1
                style={{ fontSize: 'clamp(2.5rem, 4.6vw, 4.25rem)' }}
                className="mt-4 font-display font-bold leading-[1.02] tracking-tight text-white [text-wrap:balance]"
              >
                Train With Indonesian Precision At Leo Shuttlers Arena
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300">
                LSA brings authentic Indonesian badminton coaching and a disciplined multi-stage
                curriculum to players of every age—from kids learning clean fundamentals to adults
                building match fitness and elite athletes chasing tournament podiums.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappTrialHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-11 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-orange-400 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <span>Book Free Trial on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 min-h-11 rounded-md border border-white/15 bg-[#121215] px-5 py-3 text-sm font-medium text-white transition-colors duration-150 hover:border-orange-500/60 hover:text-orange-400 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <span>View Batch Schedule</span>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right 16:9 Court Photography */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-white/10 bg-[#121215]">
              <SmartImage
                src={ACADEMY_MEDIA.heroSmash.src}
                alt={ACADEMY_MEDIA.heroSmash.alt}
                fallbackLabel="Leo Shuttlers Arena · Court Action"
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-[#09090B]/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-medium text-orange-400">
                  All Ages & Skill Levels
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Kids Foundation · Adult Fitness & Technique · Elite High-Performance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Proof Strip */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_PROOF_STRIP.map((item) => (
            <div key={item.label} className="bg-[#121215] px-5 py-4">
              <p className="text-xs font-medium text-zinc-400">{item.label}</p>
              <p className="mt-1 font-display text-xl font-semibold tracking-wide text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Academy Motto Pillars */}
      <div className="border-t border-white/10 bg-[#0D0D10]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-orange-400">Why Leo Shuttlers Arena</p>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
                Three Pillars Behind Every Rally
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400">
              No aimless knocking around. Every session combines Indonesian court craft, measurable
              progression, and coaches who care deeply about your form.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ACADEMY_PILLARS.map((pillar) => (
              <article
                key={pillar.index}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#121215] p-6 transition-colors duration-150 hover:border-orange-500/40"
              >
                <div>
                  <span className="font-mono text-sm font-medium text-orange-400">
                    {pillar.index}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-xs font-medium text-zinc-400 tabular-nums">
                    {pillar.metric}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
