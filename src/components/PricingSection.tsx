import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import {
  BILLING_CYCLES,
  BillingCycle,
  PHONE_DISPLAY,
  PRICING_TIERS,
  buildWhatsAppUrl,
  formatInr,
} from '../data/academyData';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() =>
    Object.fromEntries(PRICING_TIERS.map((tier) => [tier.id, tier.defaultOptionId]))
  );
  const [copiedPhone, setCopiedPhone] = useState(false);

  const activeCycle =
    BILLING_CYCLES.find((cycle) => cycle.id === billingCycle) ?? BILLING_CYCLES[0];

  const handleSelectOption = (tierId: string, optionId: string) => {
    setSelectedOptions((prev) => ({ ...prev, [tierId]: optionId }));
  };

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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-orange-400">Coaching Fees in INR</p>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Transparent Plans Across All Four Tracks
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
              Select a billing period to preview exact multi-month savings. Quarterly (10%),
              Half-Yearly (15%), and Yearly (25%) discounts apply to Beginners and Intermediate
              programs only.
            </p>
          </div>

          {/* Billing Cycle Segmented Toggle */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <div
              role="group"
              aria-label="Select billing cycle"
              className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#121215] p-1"
            >
              {BILLING_CYCLES.map((cycle) => {
                const isSelected = billingCycle === cycle.id;
                return (
                  <button
                    key={cycle.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setBillingCycle(cycle.id)}
                    className={`min-h-10 rounded-md px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500 ${
                      isSelected
                        ? 'bg-orange-500 text-black'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {cycle.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* INR Pricing Cards (2x2 Balanced Grid) */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PRICING_TIERS.map((tier) => {
            const selectedOptionId = selectedOptions[tier.id] ?? tier.defaultOptionId;
            const selectedOption =
              tier.options.find((opt) => opt.id === selectedOptionId) ?? tier.options[0];

            const applyDiscount = tier.discountEligible && activeCycle.months > 1;
            const effectiveMonths = applyDiscount ? activeCycle.months : 1;
            const discountFactor = applyDiscount ? (100 - activeCycle.discountPercent) / 100 : 1;
            const selectedTotal = Math.round(
              selectedOption.monthlyInr * effectiveMonths * discountFactor
            );

            const whatsappPlanDetail = applyDiscount
              ? `${selectedOption.label} on the ${activeCycle.shortLabel} plan (${formatInr(selectedTotal)} after ${activeCycle.discountPercent}% off)`
              : `${selectedOption.label} (${formatInr(selectedOption.monthlyInr)} / month)`;

            const joinUrl = buildWhatsAppUrl(
              `Hi Leo Shuttlers Arena (LSA), I am interested in the ${tier.name} program — ${whatsappPlanDetail}. Please share batch availability.`
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
                    {!tier.discountEligible && (
                      <span className="text-zinc-400 whitespace-nowrap shrink-0">
                        Monthly Only
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
                    {tier.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {tier.description}
                  </p>

                  {/* Selectable INR Fee Options */}
                  <div
                    role="radiogroup"
                    aria-label={`${tier.name} coaching fee options`}
                    className="mt-6 divide-y divide-white/10 border-y border-white/10"
                  >
                    {tier.options.map((option) => {
                      const isOptionSelected = option.id === selectedOption.id;
                      const baseTotal = option.monthlyInr * effectiveMonths;
                      const finalTotal = Math.round(baseTotal * discountFactor);
                      const savings = baseTotal - finalTotal;
                      const perMonthEquivalent = Math.round(finalTotal / effectiveMonths);

                      return (
                        <button
                          key={option.id}
                          type="button"
                          role="radio"
                          aria-checked={isOptionSelected}
                          onClick={() => handleSelectOption(tier.id, option.id)}
                          className={`group flex w-full items-start justify-between gap-4 py-4 px-2 -mx-2 rounded-md text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-orange-500 ${
                            isOptionSelected ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                          }`}
                        >
                          <div className="flex items-start gap-2.5 min-w-0">
                            <span
                              aria-hidden="true"
                              className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-150 ${
                                isOptionSelected
                                  ? 'border-orange-500 bg-orange-500'
                                  : 'border-white/25 group-hover:border-white/50'
                              }`}
                            >
                              {isOptionSelected && (
                                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                              )}
                            </span>
                            <div className="min-w-0">
                              <p
                                className={`text-sm font-semibold transition-colors ${
                                  isOptionSelected ? 'text-white' : 'text-zinc-200'
                                }`}
                              >
                                {option.label}
                              </p>
                              <p className="mt-0.5 text-xs text-zinc-400">{option.sublabel}</p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="flex items-baseline justify-end gap-1.5">
                              {applyDiscount && (
                                <span className="text-xs text-zinc-500 line-through tabular-nums">
                                  {formatInr(baseTotal)}
                                </span>
                              )}
                              <span className="font-display text-2xl font-bold tracking-tight text-white tabular-nums">
                                {formatInr(finalTotal)}
                              </span>
                            </div>
                            <p className="text-[11px] font-medium text-zinc-400 tabular-nums">
                              {applyDiscount ? (
                                <>
                                  <span>{activeCycle.periodSuffix}</span>
                                  <span aria-hidden="true"> · </span>
                                  <span className="text-orange-400">
                                    {formatInr(perMonthEquivalent)}/mo
                                  </span>
                                </>
                              ) : (
                                '/ month'
                              )}
                            </p>
                            {applyDiscount && savings > 0 && (
                              <p className="mt-0.5 text-[11px] text-orange-400 tabular-nums">
                                Save {formatInr(savings)} ({activeCycle.discountPercent}% off)
                              </p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {!tier.discountEligible && activeCycle.months > 1 && (
                    <p className="mt-3 text-xs text-zinc-400">
                      Multi-month discounts apply only to Beginners & Intermediate. {tier.name}{' '}
                      plans are billed monthly.
                    </p>
                  )}

                  <ul className="mt-5 space-y-2.5">
                    {tier.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
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
                  <span className="truncate">
                    Book {selectedOption.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
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
