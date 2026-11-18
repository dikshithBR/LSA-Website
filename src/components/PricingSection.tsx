import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import {
  BillingCycle,
  PHONE_DISPLAY,
  PRICING_TIERS,
  buildWhatsAppUrl,
  formatInr,
} from '../data/academyData';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      setCopiedPhone(false);
    }
  };

  const trialMessageUrl = buildWhatsAppUrl(
    'Hi Leo Shuttlers Arena (LSA), I would like to schedule my complimentary trial & skill assessment.'
  );

  return (
    <section id="pricing" className="border-b border-white/10 bg-[#0D0D10] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-orange-400">Coaching Fees in INR</p>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Transparent Plans Across Every Age Track
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
              All coaching packages include structured court drills, shuttle feeding, and direct
              Indonesian coaching supervision.
            </p>
          </div>

          {/* Billing Cycle Segmented Toggle */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div
              role="group"
              aria-label="Select billing cycle"
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-[#121215] p-1"
            >
              <button
                type="button"
                aria-pressed={billingCycle === 'monthly'}
                onClick={() => setBillingCycle('monthly')}
                className={`min-h-10 rounded-md px-4 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500 ${
                  billingCycle === 'monthly'
                    ? 'bg-orange-500 text-black'
                    : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                aria-pressed={billingCycle === 'quarterly'}
                onClick={() => setBillingCycle('quarterly')}
                className={`min-h-10 rounded-md px-4 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500 ${
                  billingCycle === 'quarterly'
                    ? 'bg-orange-500 text-black'
                    : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                Quarterly · Save 12%
              </button>
            </div>
          </div>
        </div>

        {/* INR Pricing Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const activePrice =
              billingCycle === 'monthly' ? tier.monthlyInr : tier.quarterlyInr;
            const cycleLabel = billingCycle === 'monthly' ? '/ month' : '/ quarter';
            const savingsAmount =
              billingCycle === 'quarterly' ? tier.monthlyInr * 3 - tier.quarterlyInr : 0;

            const joinUrl = buildWhatsAppUrl(
              `Hi Leo Shuttlers Arena (LSA), I am interested in the "${tier.name}" plan (${formatInr(activePrice)} ${cycleLabel}). Please share batch availability.`
            );

            return (
              <article
                key={tier.id}
                className={`flex flex-col justify-between rounded-xl border p-6 sm:p-7 transition-colors duration-150 ${
                  tier.featured
                    ? 'border-orange-500/70 bg-[#151519]'
                    : 'border-white/10 bg-[#121215] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs font-medium">
                    <span className="text-zinc-400">{tier.audience}</span>
                    {tier.featured && (
                      <span className="text-orange-400 whitespace-nowrap shrink-0">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                    {tier.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {tier.description}
                  </p>

                  <div className="mt-6 border-y border-white/10 py-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-bold tracking-tight text-white tabular-nums">
                        {formatInr(activePrice)}
                      </span>
                      <span className="text-xs font-medium text-zinc-400">{cycleLabel}</span>
                    </div>

                    <p className="mt-1.5 text-xs text-zinc-400 tabular-nums">
                      {tier.sessionsPerWeek}
                      {savingsAmount > 0 && (
                        <>
                          <span aria-hidden="true"> · </span>
                          <span className="text-orange-400">
                            Save {formatInr(savingsAmount)} per quarter
                          </span>
                        </>
                      )}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-200">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-orange-400"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 min-h-11 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-orange-500 ${
                    tier.featured
                      ? 'bg-orange-500 text-black hover:bg-orange-400'
                      : 'border border-white/15 bg-[#18181C] text-white hover:border-orange-500/60 hover:text-orange-400'
                  }`}
                >
                  <span>Join via WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        {/* Complimentary Trial Callout */}
        <div className="mt-8 flex flex-col justify-between gap-5 rounded-xl border border-white/10 bg-[#121215] p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium text-orange-400 tabular-nums">
              First Session Assessment · ₹0
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-white">
              Not Sure Which Track Fits Best? Start With A Free Court Assessment
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Message us on WhatsApp ({PHONE_DISPLAY}) and our head coach will recommend the right
              batch after a 30-minute on-court session.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopyNumber}
              className="inline-flex items-center justify-center gap-2 min-h-10 rounded-md border border-white/15 bg-[#18181C] px-4 py-2 text-xs font-medium text-zinc-200 transition-colors duration-150 hover:border-orange-500/60 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500"
            >
              {copiedPhone ? (
                <>
                  <Check className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
                  <span>Copied {PHONE_DISPLAY}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copy {PHONE_DISPLAY}</span>
                </>
              )}
            </button>

            <a
              href={trialMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 min-h-10 rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-black transition-colors duration-150 hover:bg-orange-400 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500"
            >
              <span>WhatsApp Now</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
