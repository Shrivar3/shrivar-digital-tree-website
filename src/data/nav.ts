export type Branch = {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
  description: string;
  x: number;
  y: number;
  side: "left" | "right";
  accent: "cyan" | "gold" | "mint" | "azure";
};

export const branches: Branch[] = [
  {
    id: "builds",
    label: "Decision intelligence",
    shortLabel: "Builds",
    href: "#builds",
    description: "Customer analytics and proof-of-work built around real decisions.",
    x: 76,
    y: 18,
    side: "right",
    accent: "cyan"
  },
  {
    id: "capabilities",
    label: "Applied AI",
    shortLabel: "Capabilities",
    href: "#capabilities",
    description: "Agentic workflows, prototypes, and practical automation.",
    x: 28,
    y: 30,
    side: "left",
    accent: "azure"
  },
  {
    id: "research",
    label: "Uncertainty",
    shortLabel: "Research",
    href: "#research",
    description: "Statistical reasoning, modelling, and research made legible.",
    x: 20,
    y: 50,
    side: "left",
    accent: "mint"
  },
  {
    id: "foundation",
    label: "Quantitative finance",
    shortLabel: "Foundation",
    href: "#foundation",
    description: "Stochastic systems, simulation, risk, and decision foundations.",
    x: 80,
    y: 56,
    side: "right",
    accent: "gold"
  },
  {
    id: "capabilities",
    label: "Data products",
    shortLabel: "Capabilities",
    href: "#capabilities",
    description: "Interactive tools that translate analysis into action.",
    x: 73,
    y: 67,
    side: "right",
    accent: "azure"
  },
  {
    id: "research",
    label: "Research translation",
    shortLabel: "Research",
    href: "#research",
    description: "Technical ideas communicated without hiding the assumptions.",
    x: 29,
    y: 69,
    side: "left",
    accent: "mint"
  }
];

export const navigationItems = [
  { id: "builds", label: "Builds", href: "#builds" },
  { id: "capabilities", label: "Capabilities", href: "#capabilities" },
  { id: "research", label: "Research", href: "#research" },
  { id: "foundation", label: "Foundation", href: "#foundation" },
  { id: "contact", label: "Contact", href: "#contact" }
] as const;
