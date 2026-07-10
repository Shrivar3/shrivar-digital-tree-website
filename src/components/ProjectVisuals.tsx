"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProjectVisual as ProjectVisualType } from "@/data/projects";

type ProjectVisualProps = {
  type: ProjectVisualType;
  compact?: boolean;
};

function SignalVisual() {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 720 300" className="project-svg" aria-hidden="true">
      <defs>
        <linearGradient id="signalBand" x1="0" x2="1">
          <stop offset="0" stopColor="#5c8cff" stopOpacity="0.02" />
          <stop offset="0.46" stopColor="#5c8cff" stopOpacity="0.2" />
          <stop offset="1" stopColor="#73e9ff" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      {[62, 122, 182, 242].map((y) => (
        <path key={y} d={`M20 ${y}H700`} className="visual-grid-line" />
      ))}
      <path
        d="M20 208 C80 160 118 192 166 150 C211 111 254 161 302 126 C354 88 392 146 440 119 C484 94 531 131 572 108 C615 82 655 98 700 62 L700 126 C650 153 615 128 572 151 C526 173 484 142 440 168 C392 194 350 142 302 179 C253 214 211 164 166 206 C119 244 78 210 20 254 Z"
        fill="url(#signalBand)"
      />
      <motion.path
        d="M20 231 C80 181 118 215 166 174 C211 135 254 184 302 151 C354 112 392 171 440 143 C484 118 531 155 572 131 C615 105 655 121 700 84"
        fill="none"
        stroke="#74a6ff"
        strokeWidth="3"
        strokeLinecap="round"
        initial={reduceMotion ? undefined : { pathLength: 0 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.35, ease: "easeOut" }}
      />
      <path d="M572 131 C612 88 654 72 700 48" className="segment-line segment-cyan" />
      <path d="M572 131 C621 128 656 124 700 109" className="segment-line segment-gold" />
      <path d="M572 131 C621 167 657 184 700 207" className="segment-line segment-violet" />
      {Array.from({ length: 46 }, (_, index) => {
        const x = 30 + index * 11.4;
        const y = 150 + Math.sin(index * 1.72) * 54 + ((index * 17) % 32);
        return <circle key={index} cx={x} cy={y} r="1.6" fill="#8db5db" opacity="0.24" />;
      })}
      <circle cx="572" cy="131" r="5" fill="#73e9ff" />
      <circle cx="572" cy="131" r="11" fill="none" stroke="#73e9ff" opacity="0.35" />
    </svg>
  );
}

function SpeechVisual() {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 440 240" className="project-svg" aria-hidden="true">
      <path d="M20 89H420M20 177H420" className="visual-grid-line" />
      {Array.from({ length: 56 }, (_, index) => {
        const x = 24 + index * 7;
        const height = 10 + Math.abs(Math.sin(index * 0.78) * 46) + (index % 5) * 3;
        return (
          <motion.rect
            key={index}
            x={x}
            y={90 - height / 2}
            width="2.4"
            height={height}
            rx="1.2"
            fill={index % 8 === 0 ? "#78f4df" : "#74a6ff"}
            animate={reduceMotion ? undefined : { opacity: [0.38, 0.95, 0.45] }}
            transition={{ duration: 1.8 + (index % 7) * 0.14, repeat: Infinity, delay: index * 0.025 }}
          />
        );
      })}
      <motion.path
        d="M24 194 C53 170 80 207 110 184 S163 160 194 184 S246 211 278 173 S331 151 359 177 S395 198 418 168"
        fill="none"
        stroke="#73e9ff"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={reduceMotion ? undefined : { pathLength: 0 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      {[24, 110, 194, 278, 359, 418].map((x, index) => (
        <circle key={x} cx={x} cy={[194, 184, 184, 173, 177, 168][index]} r="4" fill="#e7b85f" />
      ))}
    </svg>
  );
}

function AgentVisual() {
  const reduceMotion = useReducedMotion();
  const nodes = [
    [220, 38, "Plan"],
    [92, 104, "Retrieve"],
    [220, 104, "Use tools"],
    [348, 104, "Review"],
    [156, 179, "Execute"],
    [284, 179, "Verify"]
  ] as const;
  return (
    <svg viewBox="0 0 440 240" className="project-svg" aria-hidden="true">
      <g className="agent-paths">
        <motion.path d="M220 54V76H92V88" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -18] }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M220 54V88M220 54V76H348V88" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -18] }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M92 120V145H156V163M220 120V145H156M348 120V145H284V163" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -18] }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M284 195H386V38H250" className="verification-path" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -24] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      </g>
      {nodes.map(([x, y, label], index) => (
        <g key={label}>
          <rect x={x - 48} y={y - 16} width="96" height="32" rx="4" className="agent-node" />
          <circle cx={x - 34} cy={y} r="3" fill={index === 5 ? "#78f4df" : "#74a6ff"} />
          <text x={x - 25} y={y + 4} className="agent-label">{label}</text>
        </g>
      ))}
      <text x="333" y="222" className="visual-caption">verification loop</text>
    </svg>
  );
}

function SamplingVisual() {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 560 300" className="project-svg" aria-hidden="true">
      <g transform="rotate(-10 280 150)">
        {[220, 184, 148, 112, 78, 45].map((rx, index) => (
          <motion.ellipse
            key={rx}
            cx="280"
            cy="150"
            rx={rx}
            ry={rx * 0.47}
            fill="none"
            stroke={index > 3 ? "#e7b85f" : index > 1 ? "#78f4df" : "#5c8cff"}
            strokeOpacity={0.32 + index * 0.08}
            strokeDasharray={index % 2 ? "3 6" : undefined}
            animate={reduceMotion ? undefined : { opacity: [0.35, 0.9, 0.45] }}
            transition={{ duration: 4.8, repeat: Infinity, delay: index * 0.32 }}
          />
        ))}
      </g>
      {Array.from({ length: 74 }, (_, index) => {
        const angle = index * 2.22;
        const radius = 28 + ((index * 29) % 210);
        const x = 280 + Math.cos(angle) * radius;
        const y = 150 + Math.sin(angle) * radius * 0.47;
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={index % 11 === 0 ? 4 : 1.5}
            fill={index % 6 === 0 ? "#e7b85f" : index % 4 === 0 ? "#78f4df" : "#74a6ff"}
            opacity={0.35 + (index % 4) * 0.12}
          />
        );
      })}
      <path d="M95 208 C154 191 205 178 252 161 C290 148 322 138 367 115" fill="none" stroke="#dcecff" strokeOpacity="0.55" strokeDasharray="4 7" />
      {[95, 154, 205, 252, 290, 322, 367].map((x, index) => (
        <circle key={x} cx={x} cy={[208, 191, 178, 161, 148, 138, 115][index]} r={index === 6 ? 6 : 4} fill={index === 6 ? "#e7b85f" : "#73e9ff"} />
      ))}
    </svg>
  );
}

export function ProjectVisual({ type, compact = false }: ProjectVisualProps) {
  return (
    <div className="project-visual" data-compact={compact}>
      {type === "signals" ? <SignalVisual /> : null}
      {type === "speech" ? <SpeechVisual /> : null}
      {type === "agents" ? <AgentVisual /> : null}
      {type === "sampling" ? <SamplingVisual /> : null}
    </div>
  );
}
