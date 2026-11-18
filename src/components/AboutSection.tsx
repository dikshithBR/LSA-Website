import { ArrowUpRight } from 'lucide-react';
import {
  ACADEMY_MEDIA,
  CURRICULUM_STAGES,
  PHONE_DISPLAY,
  buildWhatsAppUrl,
} from '../data/academyData';
import { SmartImage } from './SmartImage';

export function AboutSection() {
  const coachChatUrl = buildWhatsAppUrl(
    'Hi Leo Shuttlers Arena (LSA), I would like to learn more about your Indonesian coaching curriculum and coaches.'
  );

  return (
    <section id="about" className="border-b border-white/10 bg-[#09090B] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Story & Visual Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-sm font-medium text-orange-400">About Leo Shuttlers Arena</p>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
                Indonesian Badminton Craft. Taught With Relentless Passion.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                Indonesia has shaped world badminton for generations through deceptive wrist speed,
                balanced footwork, and calm tactical intelligence. At{' '}
                <strong className="font-semibold text-white">Leo Shuttlers Arena (LSA)</strong>, we
                built our academy around that exact DNA—bringing experienced Indonesian coaching
                straight to kids, adults, and competitive players.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Our motto is simple: great players aren’t built by random rallies. They are built
                through a <span className="text-white">structured curriculum</span> delivered by{' '}
                <span className="text-white">passionate coaches</span> who care about every footwork
                step, grip adjustment, and recovery habit.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="font-display text-3xl font-bold text-white tabular-nums">4 Stages</p>
                <p className="mt-1 text-xs text-zinc-400">
                  Documented progression from grip to match mastery
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-orange-400 tabular-nums">
                  1:4 to 1:6
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  Focused coach-to-player ratio on every court
                </p>
              </div>
            </div>
          </div>

          {/* Right Paired Coaching & Footwork Photography */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#121215] min-h-[260px]">
              <SmartImage
                src={ACADEMY_MEDIA.indonesianCoach.src}
                alt={ACADEMY_MEDIA.indonesianCoach.alt}
                fallbackLabel="Indonesian Head Coaching"
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-transparent to-transparent"
              />
              <p className="absolute inset-x-0 bottom-0 p-4 text-xs font-medium text-white">
                Hands-on grip & wrist mechanics led by Indonesian coaches
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#121215] min-h-[260px]">
              <SmartImage
                src={ACADEMY_MEDIA.footworkDrills.src}
                alt={ACADEMY_MEDIA.footworkDrills.alt}
                fallbackLabel="Structured Multi-Shuttle Drills"
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-transparent to-transparent"
              />
              <p className="absolute inset-x-0 bottom-0 p-4 text-xs font-medium text-white">
                Multi-shuttle speed & six-corner recovery discipline
              </p>
            </div>
          </div>
        </div>

        {/* 4-Stage Structured Curriculum */}
        <div className="mt-14 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-orange-400">Our Structured Curriculum</p>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                How Players Progress At LSA
              </h3>
            </div>
            <a
              href={coachChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 transition-colors duration-150 hover:text-orange-300 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500"
            >
              <span>Speak With Our Coaching Desk ({PHONE_DISPLAY})</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CURRICULUM_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#121215] p-5"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="font-mono text-orange-400">Stage {stage.step}</span>
                    <span className="text-zinc-400 tabular-nums">{stage.duration}</span>
                  </div>
                  <h4 className="mt-3 font-display text-xl font-bold tracking-tight text-white">
                    {stage.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{stage.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
