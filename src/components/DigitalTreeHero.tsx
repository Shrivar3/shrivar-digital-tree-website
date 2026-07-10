"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  ChartNoAxesCombined,
  Cuboid,
  Network,
  Search
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring
} from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { branches, type Branch } from "@/data/nav";
import { profile } from "@/data/profile";

const accentStroke: Record<Branch["accent"], string> = {
  cyan: "#73e9ff",
  gold: "#e7b85f",
  mint: "#78f4df",
  azure: "#74a6ff"
};

const nodeIcons = [BrainCircuit, Network, ChartNoAxesCombined, BarChart3, Cuboid, Search];

function branchPath(branch: Branch, index: number) {
  const startY = 75 - Math.abs(50 - branch.y) * 0.28 + (index % 2) * 2;
  const bendX = branch.side === "left" ? 39 : 61;
  const nearX = branch.side === "left" ? branch.x + 10 : branch.x - 10;
  return `M 50 ${startY} C ${bendX} ${startY - 6}, ${nearX} ${branch.y + 7}, ${branch.x} ${branch.y}`;
}

function TreeNetwork({ activeIndex }: { activeIndex: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="A living digital tree connecting decision intelligence, AI, uncertainty, finance, data products, and research"
      className="tree-svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="trunkFlow" x1="50" x2="50" y1="5" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#73e9ff" />
          <stop offset="0.58" stopColor="#5c8cff" />
          <stop offset="1" stopColor="#e7b85f" />
        </linearGradient>
        <radialGradient id="treeAtmosphere" cx="50%" cy="46%" r="48%">
          <stop offset="0" stopColor="#5c8cff" stopOpacity="0.15" />
          <stop offset="0.68" stopColor="#041024" stopOpacity="0.04" />
          <stop offset="1" stopColor="#020711" stopOpacity="0" />
        </radialGradient>
        <filter id="treeGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.15" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="50" cy="51" rx="45" ry="42" fill="url(#treeAtmosphere)" />

      <g className="tree-canopy" opacity="0.34">
        <path d="M50 61 C39 51 35 37 28 22 M50 61 C60 51 64 37 74 19 M48 70 C34 65 27 58 16 52 M52 68 C67 64 77 58 86 48" />
        <path d="M45 54 C37 48 31 45 24 43 M55 50 C64 43 72 39 80 38 M46 44 C42 34 39 28 34 22 M56 39 C61 31 65 26 69 19" />
        <path d="M36 46 C30 37 24 33 18 31 M64 45 C73 36 81 33 88 31 M36 63 C25 62 18 65 12 70 M64 62 C74 61 83 64 91 69" />
      </g>

      <g className="tree-roots">
        <path d="M50 93 C42 89 34 88 23 92 M50 93 C58 89 68 88 80 92" />
        <path d="M50 92 C44 85 38 83 31 84 M50 92 C56 85 62 82 70 84" />
        <path d="M50 92 C50 84 49 79 48 75 M50 92 C40 94 31 96 16 97 M50 92 C62 94 73 96 89 97" />
      </g>

      <path
        d="M50 92 C47 80 49 70 50 60 C51 49 49 38 52 28 C53 20 51 14 54 7"
        className="tree-trunk-halo"
      />
      <motion.path
        d="M50 92 C47 80 49 70 50 60 C51 49 49 38 52 28 C53 20 51 14 54 7"
        className="tree-trunk"
        stroke="url(#trunkFlow)"
        strokeDasharray="8 9"
        animate={reduceMotion ? undefined : { strokeDashoffset: [0, -34] }}
        transition={{ duration: 6.8, ease: "linear", repeat: Infinity }}
      />
      <path d="M48.6 91 C51 78 48 67 50 56 C52 45 48 31 51 16" className="tree-trunk-detail" />

      {branches.map((branch, index) => {
        const active = index === activeIndex;
        const d = branchPath(branch, index);
        return (
          <g key={`${branch.label}-${index}`}>
            <path d={d} className="tree-branch-halo" />
            <motion.path
              d={d}
              className="tree-branch"
              stroke={active ? accentStroke[branch.accent] : "rgba(133, 178, 218, 0.42)"}
              strokeWidth={active ? 0.82 : 0.46}
              strokeDasharray={active ? "4 4" : "2 6"}
              animate={reduceMotion ? undefined : { strokeDashoffset: [0, -18] }}
              transition={{ duration: active ? 2.2 : 5, ease: "linear", repeat: Infinity }}
            />
            <circle
              cx={branch.x}
              cy={branch.y}
              r={active ? 2.5 : 1.65}
              fill="#03101f"
              stroke={accentStroke[branch.accent]}
              strokeWidth={active ? 0.78 : 0.42}
              filter={active ? "url(#treeGlow)" : undefined}
            />
            <circle
              cx={branch.x}
              cy={branch.y}
              r={active ? 0.74 : 0.42}
              fill={accentStroke[branch.accent]}
            />
          </g>
        );
      })}

      {Array.from({ length: 72 }, (_, index) => {
        const angle = index * 2.399;
        const radius = 11 + (index % 12) * 2.55;
        const x = 50 + Math.cos(angle) * radius * 1.08;
        const y = 50 + Math.sin(angle) * radius * 0.73;
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={index % 9 === 0 ? 0.42 : 0.2}
            fill={index % 7 === 0 ? "#e7b85f" : index % 5 === 0 ? "#78f4df" : "#73e9ff"}
            opacity={0.18 + (index % 5) * 0.08}
          />
        );
      })}
    </svg>
  );
}

export function DigitalTreeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 80, damping: 24 });
  const y = useSpring(rawY, { stiffness: 80, damping: 24 });
  const active = branches[activeIndex] ?? branches[0];

  return (
    <section
      id="home"
      className="hero"
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
        rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
      }}
      onPointerLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      <ParticleField />
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="hero-identity">{profile.name} — {profile.role}</p>
          <h1>{profile.heroHeadline}</h1>
          <p className="hero-body">{profile.heroBody}</p>
          <div className="hero-actions">
            <a href="#builds" className="focus-ring button-primary">
              Explore what I&apos;m building <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="focus-ring button-secondary">
              Discuss a venture <ArrowDownRight size={18} aria-hidden="true" />
            </a>
          </div>
          <a href="#contact" className="focus-ring opportunity-link">
            {profile.opportunityNote} <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <motion.div className="tree-stage" style={reduceMotion ? undefined : { x, y }}>
          <TreeNetwork activeIndex={activeIndex} />
          {branches.map((branch, index) => {
            const Icon = nodeIcons[index] ?? Network;
            return (
              <a
                key={`${branch.label}-${index}`}
                href={branch.href}
                className="focus-ring tree-node"
                data-active={activeIndex === index}
                data-accent={branch.accent}
                style={{ left: `${branch.x}%`, top: `${branch.y}%` }}
                onPointerEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <span className="tree-node-icon"><Icon size={16} aria-hidden="true" /></span>
                <span>{branch.label}</span>
              </a>
            );
          })}

          <div className="tree-preview" data-accent={active.accent}>
            <p className="micro-label">Active pathway</p>
            <h2>{active.label}</h2>
            <p>{active.description}</p>
            <a href={active.href} className="focus-ring text-link">
              Explore this area <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
      <a href="#builds" className="focus-ring hero-next">
        <span>Selected builds</span>
        <ArrowDownRight size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
