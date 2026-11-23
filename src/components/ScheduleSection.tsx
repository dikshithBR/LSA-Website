import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  SCHEDULE_BATCHES,
  TrackCategory,
  buildWhatsAppUrl,
} from '../data/academyData';

type FilterTab = 'all' | TrackCategory;

const FILTER_TABS: { id: FilterTab; label: string }[] = [
  { id: 'all', label: 'All Batches' },
  { id: 'kids', label: 'Kids' },
  { id: 'adults', label: 'Adults' },
  { id: 'elite', label: 'Elite' },
];

export function ScheduleSection() {
  const [selectedCategory, setSelectedCategory] = useState<FilterTab>('all');

  const filteredBatches =
    selectedCategory === 'all'
      ? SCHEDULE_BATCHES
      : SCHEDULE_BATCHES.filter((batch) => batch.category === selectedCategory);

  return (
    <section id="schedule" className="border-b border-white/10 bg-[#09090B] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-orange-400">Training Schedule</p>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Morning & Evening Batches For Every Track
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Filter by age and intensity to find a court slot that fits your routine. Every batch
              runs on our structured coaching curriculum with hands-on court supervision.
            </p>
          </div>

          {/* Interactive Track Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter training batches by player track"
            className="inline-flex w-fit items-center gap-1 rounded-lg border border-white/10 bg-[#121215] p-1"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`min-h-10 rounded-md px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500 ${
                    isSelected
                      ? 'bg-orange-500 text-black'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Batch List */}
        <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-[#121215]">
          {filteredBatches.map((batch) => (
            <div
              key={batch.id}
              className="flex flex-col justify-between gap-6 p-6 transition-colors duration-150 hover:bg-[#16161A] lg:flex-row lg:items-center"
            >
              <div className="min-w-0 lg:max-w-md">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400">
                  <span className="text-orange-400">{batch.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{batch.levelLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-zinc-200">{batch.days}</span>
                </div>

                <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white">
                  {batch.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                  {batch.sessionFocus}
                </p>
              </div>

              <div className="flex flex-col gap-2.5 lg:items-end">
                <p className="text-xs font-medium text-zinc-400">
                  Select a slot to book on WhatsApp
                </p>
                <div className="flex flex-wrap gap-2.5 lg:justify-end">
                  {batch.timeSlots.map((slot) => {
                    const slotUrl = buildWhatsAppUrl(
                      `Hi Leo Shuttlers Arena (LSA), I want to book the "${batch.title}" batch (${batch.days}, ${slot}).`
                    );

                    return (
                      <a
                        key={`${batch.id}-${slot}`}
                        href={slotUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 min-h-10 rounded-md border border-white/15 bg-[#18181C] px-3.5 py-2 font-mono text-xs font-medium text-white tabular-nums transition-colors duration-150 hover:border-orange-500 hover:bg-orange-500 hover:text-black whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500"
                      >
                        <span>{slot}</span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-orange-400 transition-colors duration-150 group-hover:text-black"
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
