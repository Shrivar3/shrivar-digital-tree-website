export type Project = {
  title: string;
  description: string;
  audienceSummary: string;
  technicalDetail: string;
  tags: string[];
  status: "In progress" | "Research" | "Concept" | "Portfolio";
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Agentic AI Workflows",
    description:
      "Designing instruction systems and workflows for AI agents that support research, coding, analysis, and presentation work.",
    audienceSummary:
      "A practical systems project about making AI assistance more reliable, reusable, and aligned with the task.",
    technicalDetail:
      "Focus areas include structured prompts, reusable agent profiles, task decomposition, verification loops, and output formats that can move between repos, reports, and decks.",
    tags: ["AI", "Agents", "Systems", "Productivity"],
    status: "In progress"
  },
  {
    title: "Tone-Conditioned VITS Speech Synthesis",
    description:
      "Applied AI project exploring tone-conditioned speech synthesis for Twi language modelling and VITS fine-tuning.",
    audienceSummary:
      "A speech AI project aimed at more expressive and context-aware voice generation.",
    technicalDetail:
      "Work area for dataset preparation, tone conditioning, fine-tuning strategy, evaluation, and clear explanation of modelling assumptions and limitations.",
    tags: ["AI", "Speech", "VITS", "NLP"],
    status: "Research"
  },
  {
    title: "NPS Modelling and Customer Analytics",
    description:
      "Statistically rigorous customer analytics focused on improving NPS measurement, uncertainty, and operational decision-making.",
    audienceSummary:
      "A decision intelligence project for making customer feedback more trustworthy and useful.",
    technicalDetail:
      "Designed around uncertainty, sample quality, segmentation, model validity, and the translation of noisy customer signals into practical decisions.",
    tags: ["Statistics", "Analytics", "Customer Data", "Decision Intelligence"],
    status: "In progress"
  },
  {
    title: "Nested Sampling Dissertation",
    description:
      "Research project on uncertainty in nested sampling, statistical computation, and evidence estimation.",
    audienceSummary:
      "A rigorous research project about how uncertainty behaves in advanced statistical computation.",
    technicalDetail:
      "Explores evidence estimation, nested sampling behaviour, uncertainty quantification, assumptions, and how technical results can be explained without hiding the mathematics.",
    tags: ["Statistics", "Research", "Uncertainty", "Computation"],
    status: "Research"
  },
  {
    title: "London Housing and Area Analysis",
    description:
      "Analytical project exploring London housing, commute trade-offs, area quality, and data-driven location choice.",
    audienceSummary:
      "A real-world decision project that turns messy housing and location data into practical trade-offs.",
    technicalDetail:
      "Designed to combine public datasets, commute constraints, affordability, area quality proxies, and map-based communication for clearer location decisions.",
    tags: ["Data", "Cities", "Maps", "Decision-Making"],
    status: "Concept"
  },
  {
    title: "Investment Portfolio Analysis",
    description:
      "Long-term portfolio construction and risk analysis using evidence-based investing principles.",
    audienceSummary:
      "A finance project focused on sensible risk, compounding, and robust decision-making rather than short-term prediction.",
    technicalDetail:
      "Covers allocation logic, risk tolerance, long-run expected value, diversification, drawdowns, and the difference between analysis and financial advice.",
    tags: ["Finance", "Investing", "Risk", "Compounding"],
    status: "Concept"
  },
  {
    title: "Personal Website and Identity System",
    description:
      "A self-branding and design system project turning identity, values, and proof-of-work into an interactive digital presence.",
    audienceSummary:
      "The website itself is a proof-of-work layer: part portfolio, part identity system, part map of how I think.",
    technicalDetail:
      "Built with editable data, responsive interaction design, accessible animation, and an original digital-tree metaphor rather than a generic portfolio template.",
    tags: ["Design", "Brand", "Website", "Strategy"],
    status: "Portfolio",
    githubUrl: "https://github.com/Shrivar3/shrivar-digital-tree-website"
  }
];
