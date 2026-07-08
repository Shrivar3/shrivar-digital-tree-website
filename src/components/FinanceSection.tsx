"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Calculator,
  CandlestickChart,
  LineChart,
  Orbit,
  ShieldAlert,
  Sigma
} from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { SectionShell } from "@/components/SectionShell";
import {
  financeDetails,
  financeModules,
  financePillars,
  financeToolkit
} from "@/data/finance";

const pillarIcons = [Orbit, Sigma, BarChart3];

export function FinanceSection() {
  const [activeDetailId, setActiveDetailId] = useState(financeDetails[0].id);
  const activeDetail = useMemo(
    () => financeDetails.find((detail) => detail.id === activeDetailId) ?? financeDetails[0],
    [activeDetailId]
  );

  return (
    <SectionShell
      id="finance"
      eyebrow="Finance"
      title="Investing, financial mathematics, and portfolio analytics."
      intro="This section presents finance as a disciplined way of thinking under uncertainty: long-term investing, quantitative modelling, stochastic methods, and practical portfolio implementation. It is a personal analytical framework, not financial advice."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <GlowCard>
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-gold/25 bg-gold/10 text-gold">
              <CandlestickChart size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Framework
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-8 text-white">
                Global market beta first; complexity has to earn its place.
              </h3>
              <p className="mt-4 text-pretty text-base leading-8 text-slate-300">
                My default investing lens is a low-cost, globally diversified equity core, with
                factor tilts considered carefully rather than assumed to outperform. I am interested
                in expected return, volatility, Sharpe ratio, drawdown, fees, tracking error,
                rebalancing burden, tax wrappers, inflation, and long-horizon compounding.
              </p>
            </div>
          </div>
        </GlowCard>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["Core", "Global equity beta"],
            ["Tilts", "Value, size, quality, momentum"],
            ["Constraint", "Avoid complexity without expected benefit"]
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_30px_rgba(88,230,255,0.05)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                {label}
              </p>
              <p className="mt-3 text-lg font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {financePillars.map((pillar, index) => {
          const Icon = pillarIcons[index] ?? LineChart;
          return (
            <GlowCard key={pillar.title}>
              <Icon size={26} className="text-cyan" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.summary}</p>
              <div className="mt-5 space-y-2">
                {pillar.points.map((point) => (
                  <div key={point} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_12px_rgba(246,200,106,0.7)]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="glass-line rounded-lg p-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Risk tabs
          </p>
          <div className="grid gap-2">
            {financeDetails.map((detail) => (
              <button
                key={detail.id}
                type="button"
                onClick={() => setActiveDetailId(detail.id)}
                aria-pressed={activeDetailId === detail.id}
                className={`focus-ring rounded-md border px-4 py-3 text-left transition ${
                  activeDetailId === detail.id
                    ? "border-cyan/50 bg-cyan/15 text-white shadow-glow"
                    : "border-white/10 bg-white/[0.035] text-slate-300 hover:border-gold/35 hover:bg-gold/[0.06] hover:text-white"
                }`}
              >
                <span className="block text-sm font-semibold">{detail.label}</span>
                <span className="mt-1 block text-xs leading-5 text-slate-400">{detail.short}</span>
              </button>
            ))}
          </div>
        </div>

        <GlowCard>
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
              <ShieldAlert size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Hidden detail
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{activeDetail.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{activeDetail.detail}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {activeDetail.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-md border border-cyan/15 bg-cyan/[0.055] px-3 py-2 text-sm text-slate-300"
              >
                {metric}
              </span>
            ))}
          </div>
        </GlowCard>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <GlowCard>
          <div className="mb-5 flex items-center gap-3">
            <Calculator size={24} className="text-gold" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-white">Warwick financial mathematics map</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {financeModules.map((module) => (
              <div
                key={module.code}
                className="rounded-md border border-white/10 bg-white/[0.035] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                      {module.code}
                    </p>
                    <h4 className="mt-2 text-sm font-semibold text-white">{module.title}</h4>
                  </div>
                  <ArrowUpRight size={15} className="shrink-0 text-gold" aria-hidden="true" />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {module.concepts.slice(0, 4).map((concept) => (
                    <span
                      key={concept}
                      className="rounded border border-white/10 bg-ink/60 px-2 py-1 text-[0.7rem] text-slate-400"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{module.application}</p>
              </div>
            ))}
          </div>
        </GlowCard>

        <div className="space-y-6">
          <GlowCard>
            <Activity size={26} className="text-mint" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-white">Quantitative finance toolkit</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The toolkit is broad, but the principle is simple: use enough model complexity to
              improve the decision, then remain honest about uncertainty, overfitting, data mining,
              transaction costs, and model risk.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {financeToolkit.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-mint/15 bg-mint/[0.045] px-3 py-2 text-sm text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </GlowCard>

          <div className="rounded-lg border border-gold/25 bg-gold/[0.055] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Guardrail
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              This is not financial advice. It is a public summary of how I connect personal
              investing, financial mathematics, statistical modelling, and practical portfolio
              analytics.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
