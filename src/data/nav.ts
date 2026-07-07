export type Branch = {
  id: string;
  label: string;
  href: string;
  description: string;
  x: number;
  y: number;
  side: "left" | "right";
  accent: "cyan" | "gold" | "mint" | "azure";
};

export const branches: Branch[] = [
  {
    id: "about",
    label: "About",
    href: "#about",
    description: "The case for hiring, backing, or building with me.",
    x: 22,
    y: 24,
    side: "left",
    accent: "gold"
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    description: "Proof-of-work across AI, analytics, research, and strategy.",
    x: 78,
    y: 24,
    side: "right",
    accent: "cyan"
  },
  {
    id: "research",
    label: "Research",
    href: "#research",
    description: "Uncertainty, modelling, and rigorous explanation.",
    x: 18,
    y: 39,
    side: "left",
    accent: "azure"
  },
  {
    id: "ai-startups",
    label: "AI & Startups",
    href: "#ai-startups",
    description: "Agent workflows, applied AI, and product thinking.",
    x: 82,
    y: 39,
    side: "right",
    accent: "mint"
  },
  {
    id: "finance",
    label: "Finance",
    href: "#finance",
    description: "Risk, compounding, and quantitative judgement.",
    x: 22,
    y: 54,
    side: "left",
    accent: "gold"
  },
  {
    id: "data",
    label: "Data & Analytics",
    href: "#data",
    description: "Turning messy information into useful decisions.",
    x: 78,
    y: 54,
    side: "right",
    accent: "cyan"
  },
  {
    id: "writing",
    label: "Writing",
    href: "#writing",
    description: "Essays, explainers, and technical notes.",
    x: 29,
    y: 69,
    side: "left",
    accent: "mint"
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    description: "Ways to connect, collaborate, or work together.",
    x: 71,
    y: 69,
    side: "right",
    accent: "azure"
  }
];
