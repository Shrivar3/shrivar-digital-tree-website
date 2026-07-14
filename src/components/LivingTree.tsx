"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const branchMeta = [
  { id: "customer", label: "Customer signals", href: "#nps-customer-analytics", x: 79, y: 20, path: "M360 397C433 338 485 260 590 146" },
  { id: "tone", label: "Tonal speech", href: "#tone-conditioned-vits", x: 84, y: 37, path: "M360 417C440 389 512 345 627 294" },
  { id: "agents", label: "AI teams", href: "#agentic-ai-workflows", x: 82, y: 56, path: "M356 443C444 458 516 470 615 459" },
  { id: "uncertainty", label: "Algorithmic uncertainty", href: "#nested-sampling-dissertation", x: 77, y: 72, path: "M354 463C426 518 490 565 581 596" }
] as const;

const filaments = [
  "M590 146C551 106 520 82 480 57M590 146C623 113 654 90 690 79M590 146C647 151 688 142 724 122M541 203C505 171 475 147 436 132M541 203C578 179 613 174 653 177",
  "M627 294C594 262 573 236 559 201M627 294C667 268 703 259 744 260M627 294C661 310 696 324 731 349M554 343C520 322 488 310 450 308",
  "M615 459C579 423 557 397 536 363M615 459C661 434 704 425 750 431M615 459C655 477 693 498 728 527M529 448C496 425 465 414 426 416",
  "M581 596C545 560 519 538 487 522M581 596C622 571 657 560 700 561M581 596C619 627 650 648 693 667M507 548C465 563 430 577 395 604",
  "M360 397C329 324 286 267 224 218M354 463C312 513 264 552 201 586M359 430C310 415 267 406 211 412"
];

export function LivingTree() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 72, damping: 24 });
  const y = useSpring(rawY, { stiffness: 72, damping: 24 });

  const handlePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set(((event.clientX - rect.left) / rect.width - 0.5) * 9);
    rawY.set(((event.clientY - rect.top) / rect.height - 0.5) * 7);
  };

  return (
    <motion.div
      className="living-tree"
      style={reduceMotion ? undefined : { x, y }}
      onPointerMove={handlePointer}
      onPointerLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      <svg viewBox="0 0 760 760" role="img" aria-label="A biographical digital tree connecting Shrivar's roots to four live areas of work">
        <defs>
          <linearGradient id="livingTrunk" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0" stopColor="#d29b52" />
            <stop offset="0.28" stopColor="#79d9e7" />
            <stop offset="1" stopColor="#79d9e7" />
          </linearGradient>
          <filter id="livingGlow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="livingAtmosphere">
            <stop offset="0" stopColor="#2c8494" stopOpacity=".14" />
            <stop offset="1" stopColor="#061018" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="420" cy="363" rx="315" ry="310" fill="url(#livingAtmosphere)" />
        <g className="living-tree-roots">
          <path d="M354 650C275 628 197 633 78 687M354 650C431 620 521 625 690 688M354 650C289 580 229 576 139 600M354 650C419 574 497 566 604 605M354 650C337 581 327 535 342 476" />
          <path d="M249 632C210 650 174 675 143 714M465 630C509 650 544 679 579 718M187 646C141 641 103 650 62 669M533 642C588 640 629 651 699 678" />
        </g>
        <path d="M354 650C337 563 365 501 354 429C344 355 373 279 367 173C365 119 378 79 390 42" className="living-tree-halo" />
        <motion.path
          d="M354 650C337 563 365 501 354 429C344 355 373 279 367 173C365 119 378 79 390 42"
          className="living-tree-trunk"
          stroke="url(#livingTrunk)"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, -34] }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        />

        {branchMeta.map((branch, index) => (
          <g key={branch.id}>
            <path d={branch.path} className="living-branch-halo" />
            <motion.path
              d={branch.path}
              className="living-branch"
              data-active={active === index}
              animate={reduceMotion ? undefined : { strokeDashoffset: [0, -24] }}
              transition={{ duration: active === index ? 2.6 : 6.5, ease: "linear", repeat: Infinity }}
            />
          </g>
        ))}

        <g className="living-filaments">
          {filaments.map((path, index) => <path key={index} d={path} />)}
        </g>

        <g className="living-points">
          {Array.from({ length: 82 }, (_, index) => {
            const angle = index * 2.399;
            const radius = 74 + (index % 15) * 15;
            const cx = 455 + Math.cos(angle) * radius * 1.16;
            const cy = 323 + Math.sin(angle) * radius * 0.82;
            return <circle key={index} cx={cx} cy={cy} r={index % 13 === 0 ? 3 : 1.35} data-warm={index % 5 === 0} />;
          })}
        </g>
      </svg>

      <div className="tree-controls" aria-label="Live areas of work">
        {branchMeta.map((branch, index) => (
          <a
            key={branch.id}
            href={branch.href}
            className="focus-ring tree-branch-control"
            data-active={active === index}
            style={{ "--tree-y": branch.y + "%" } as CSSProperties}
            onPointerEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <span className="tree-control-line" aria-hidden="true"><i /></span>
            <span>{branch.label}</span>
          </a>
        ))}
      </div>

      <div className="tree-root-discoveries" aria-label="Roots">
        <span>KwaZulu-Natal</span><span>mathematics</span><span>statistics</span><span>Warwick</span>
      </div>
    </motion.div>
  );
}
