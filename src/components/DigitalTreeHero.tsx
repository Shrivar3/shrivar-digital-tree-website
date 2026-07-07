"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Network, Sparkles } from "lucide-react";
import { branches, type Branch } from "@/data/nav";
import { profile } from "@/data/profile";
import { ParticleField } from "@/components/ParticleField";

const accentStroke: Record<Branch["accent"], string> = {
  cyan: "rgba(88, 230, 255, 0.88)",
  gold: "rgba(246, 200, 106, 0.86)",
  mint: "rgba(108, 241, 196, 0.82)",
  azure: "rgba(91, 156, 255, 0.86)"
};

function branchPath(branch: Branch) {
  const startX = 50;
  const startY = branch.y + 8;
  const firstControlX = branch.side === "left" ? 42 : 58;
  const secondControlX = branch.side === "left" ? branch.x + 10 : branch.x - 10;
  const branchLift = branch.y - 2;
  return `M ${startX} ${startY} C ${firstControlX} ${startY}, ${secondControlX} ${branchLift}, ${branch.x} ${branch.y}`;
}

export function DigitalTreeHero() {
  const [activeBranch, setActiveBranch] = useState(branches[1].id);
  const reduceMotion = useReducedMotion();
  const active = useMemo(
    () => branches.find((branch) => branch.id === activeBranch) ?? branches[1],
    [activeBranch]
  );

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-10"
    >
      <ParticleField />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_63%_42%,rgba(88,230,255,0.14),transparent_40%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan/20 bg-cyan/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            <Sparkles size={14} aria-hidden="true" />
            Digital identity system
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-[4.65rem]">
            {profile.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
            {profile.heroBody}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {profile.labels.map((label) => (
              <span
                key={label}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-md border border-cyan/50 bg-cyan/15 px-5 py-3 text-sm font-semibold text-cyan shadow-glow transition hover:bg-cyan/20"
            >
              Explore proof-of-work
              <ArrowRight size={17} className="transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-gold/45 hover:bg-gold/10 hover:text-gold"
            >
              How I think
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[580px] lg:min-h-[720px]" aria-label="Interactive digital tree navigation">
          <div className="absolute inset-x-0 top-0 mx-auto h-full max-w-4xl">
            <svg
              viewBox="0 0 100 100"
              role="img"
              aria-label="A glowing digital intelligence tree with branches for site navigation"
              className="h-full w-full drop-shadow-[0_0_36px_rgba(88,230,255,0.24)]"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="coreGlow" cx="50%" cy="54%" r="44%">
                  <stop offset="0%" stopColor="rgba(88, 230, 255, 0.8)" />
                  <stop offset="54%" stopColor="rgba(88, 230, 255, 0.18)" />
                  <stop offset="100%" stopColor="rgba(88, 230, 255, 0)" />
                </radialGradient>
                <linearGradient id="trunkGradient" x1="50" x2="50" y1="10" y2="94">
                  <stop offset="0%" stopColor="rgba(88, 230, 255, 0.95)" />
                  <stop offset="58%" stopColor="rgba(91, 156, 255, 0.78)" />
                  <stop offset="100%" stopColor="rgba(246, 200, 106, 0.82)" />
                </linearGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="1.7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle cx="50" cy="50" r="42" fill="url(#coreGlow)" opacity="0.58" />
              <path
                d="M50 92 C43 86 36 84 27 86 M50 92 C57 86 64 84 73 86 M50 92 C47 86 43 82 38 78 M50 92 C53 86 57 82 62 78 M50 92 C50 84 50 76 50 68"
                className="tree-line"
                stroke="rgba(246, 200, 106, 0.48)"
                strokeWidth="0.82"
                filter="url(#softGlow)"
              />
              <motion.path
                d="M50 88 C48 78 49 68 50 58 C51 47 50 35 50 23 C50 17 51 13 53 9"
                className="tree-line"
                stroke="url(#trunkGradient)"
                strokeWidth="2.3"
                filter="url(#softGlow)"
                strokeDasharray="10 8"
                animate={reduceMotion ? undefined : { strokeDashoffset: [0, -34] }}
                transition={{ duration: 6.5, ease: "linear", repeat: Infinity }}
              />
              <path
                d="M47 88 C48 76 50 67 50 56 C50 44 51 32 47 16"
                className="tree-line"
                stroke="rgba(255,255,255,0.24)"
                strokeWidth="0.42"
              />

              {branches.map((branch) => {
                const isActive = branch.id === active.id;
                return (
                  <g key={branch.id}>
                    <path
                      d={branchPath(branch)}
                      className="tree-line"
                      stroke="rgba(88, 230, 255, 0.09)"
                      strokeWidth="3.2"
                    />
                    <motion.path
                      d={branchPath(branch)}
                      className="tree-line"
                      stroke={isActive ? accentStroke[branch.accent] : "rgba(148, 212, 255, 0.22)"}
                      strokeWidth={isActive ? 1.18 : 0.68}
                      strokeDasharray="6 7"
                      filter={isActive ? "url(#softGlow)" : undefined}
                      animate={reduceMotion ? undefined : { strokeDashoffset: [0, -26] }}
                      transition={{
                        duration: isActive ? 2.7 : 5.4,
                        ease: "linear",
                        repeat: Infinity
                      }}
                    />
                    <circle
                      cx={branch.x}
                      cy={branch.y}
                      r={isActive ? 1.68 : 1.08}
                      fill={accentStroke[branch.accent]}
                      opacity={isActive ? 1 : 0.68}
                      filter="url(#softGlow)"
                    />
                  </g>
                );
              })}

              {Array.from({ length: 52 }).map((_, index) => {
                const angle = (index / 52) * Math.PI * 2;
                const radius = 18 + (index % 7) * 3.2;
                const x = 50 + Math.cos(angle) * radius * 1.08;
                const y = 49 + Math.sin(angle) * radius * 0.72;
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r={index % 5 === 0 ? 0.55 : 0.32}
                    fill={index % 6 === 0 ? "rgba(246,200,106,0.9)" : "rgba(88,230,255,0.72)"}
                    opacity={0.42 + (index % 4) * 0.08}
                  />
                );
              })}
            </svg>

            {branches.map((branch) => (
              <a
                key={branch.id}
                href={branch.href}
                className="branch-node focus-ring"
                data-accent={branch.accent}
                data-active={activeBranch === branch.id}
                data-side={branch.side}
                style={{ left: `${branch.x}%`, top: `${branch.y}%` }}
                onMouseEnter={() => setActiveBranch(branch.id)}
                onFocus={() => setActiveBranch(branch.id)}
              >
                <span className="branch-node-label">{branch.label}</span>
                <span className="branch-node-copy">{branch.description}</span>
              </a>
            ))}
          </div>

          <div className="absolute bottom-2 left-1/2 hidden w-[min(78%,27rem)] -translate-x-1/2 rounded-lg border border-white/10 bg-ink/72 p-4 text-sm text-slate-300 shadow-glow backdrop-blur lg:block">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
              <Network size={14} aria-hidden="true" />
              Active branch
            </div>
            <p className="text-white">{active.label}</p>
            <p className="mt-1 leading-6">{active.description}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
          {branches.map((branch) => (
            <a
              key={branch.id}
              href={branch.href}
              className="focus-ring rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan/40 hover:bg-cyan/10"
            >
              <span className="text-sm font-semibold text-white">{branch.label}</span>
              <span className="mt-1 block text-sm leading-6 text-slate-300">{branch.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
