export type ProjectVisual = "signals" | "speech" | "agents" | "sampling" | "housing" | "portfolio" | "identity";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  audience: string;
  whyItMatters: string;
  approach: string;
  currentStage: string;
  evidence: string;
  nextMilestone: string;
  technicalDetail: string;
  tags: string[];
  status: "In progress" | "Research" | "Concept" | "Portfolio";
  visual: ProjectVisual;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  foundationAreas?: string[];
};

export const projects: Project[] = [
  {
    slug: "nps-customer-analytics",
    title: "NPS Modelling and Customer Analytics",
    shortDescription:
      "Turning noisy customer feedback into more trustworthy signals for operational decisions.",
    problem:
      "Customer feedback is noisy, unevenly sampled, and easy to over-interpret. A headline score can hide uncertainty and differences between customer groups.",
    audience:
      "Teams using customer feedback to prioritise service, product, or operational improvements.",
    whyItMatters:
      "When the measurement is fragile, teams can act confidently on the wrong signal.",
    approach:
      "Treat sample quality, uncertainty, segmentation, and model validity as part of the decision—not footnotes after it.",
    currentStage:
      "In progress: developing the modelling and decision-intelligence approach without claiming results before validation.",
    evidence:
      "The analytical scope is defined around uncertainty, sample quality, segmentation, model validity, and operational interpretation.",
    nextMilestone:
      "Build a reproducible validation and reporting workflow that makes the limits of each signal clear.",
    technicalDetail:
      "The technical work is organised around sampling behaviour, segment-level comparisons, statistical uncertainty, model diagnostics, and the translation of results into operational choices.",
    tags: ["Statistics", "Customer analytics", "Decision intelligence"],
    status: "In progress",
    visual: "signals",
    featured: true,
    foundationAreas: ["Statistics and inference", "Machine learning and data"]
  },
  {
    slug: "tone-conditioned-vits",
    title: "Tone-Conditioned VITS Speech Synthesis",
    shortDescription:
      "Exploring tone-conditioned speech synthesis for Twi language modelling and VITS fine-tuning.",
    problem:
      "Tone carries meaning, so speech generation that treats it as incidental risks losing important linguistic information.",
    audience:
      "Researchers and builders working on expressive, context-aware speech technology for tonal languages.",
    whyItMatters:
      "Speech quality is not only about acoustic smoothness; the generated voice also needs to preserve meaningful tonal structure.",
    approach:
      "Connect dataset preparation, explicit tone conditioning, VITS fine-tuning, and evaluation criteria in one research workflow.",
    currentStage:
      "Research: the project is framed around data preparation, conditioning strategy, fine-tuning, and honest evaluation.",
    evidence:
      "The current work defines the modelling questions and the constraints that a credible evaluation needs to address.",
    nextMilestone:
      "Document the dataset, tone representation, fine-tuning plan, and evaluation protocol before making performance claims.",
    technicalDetail:
      "The technical focus covers tone-aware data representation, VITS conditioning, fine-tuning design, evaluation, and limitations in data and modelling assumptions.",
    tags: ["Speech AI", "VITS", "Twi"],
    status: "Research",
    visual: "speech",
    featured: true,
    foundationAreas: ["Machine learning and data", "Programming"]
  },
  {
    slug: "agentic-ai-workflows",
    title: "Agentic AI Workflows",
    shortDescription:
      "Designing reusable AI workflows for research, coding, analysis, and presentation work.",
    problem:
      "General-purpose AI assistance becomes unreliable when instructions, tool use, and verification are left implicit.",
    audience:
      "People using AI across multi-step analytical and technical work where consistency and review matter.",
    whyItMatters:
      "Fast output has little value if it cannot be checked, reused, or connected to the actual task.",
    approach:
      "Use structured instructions, task decomposition, tool-aware execution, and explicit verification loops.",
    currentStage:
      "In progress: developing workflows and reusable instruction patterns across practical tasks.",
    evidence:
      "The current system design covers reusable agent profiles, decomposition, verification, and outputs that move between repositories, reports, and decks.",
    nextMilestone:
      "Formalise and document one end-to-end workflow with explicit checks, failure modes, and limits.",
    technicalDetail:
      "The work focuses on instruction architecture, specialised agent roles, context management, tool use, verification loops, and durable output formats.",
    tags: ["AI agents", "Verification", "Workflows"],
    status: "In progress",
    visual: "agents",
    featured: true,
    foundationAreas: ["Machine learning and data", "Technical communication"]
  },
  {
    slug: "nested-sampling-dissertation",
    title: "Nested Sampling Dissertation",
    shortDescription:
      "Investigating uncertainty in nested sampling, statistical computation, and evidence estimation.",
    problem:
      "Advanced computational methods can produce precise-looking answers while the uncertainty in the method itself remains difficult to understand.",
    audience:
      "Technical readers interested in Bayesian computation, evidence estimation, and uncertainty quantification.",
    whyItMatters:
      "Reliable inference depends on knowing what the computation can support, not only obtaining a numerical answer.",
    approach:
      "Study evidence estimation, nested-sampling behaviour, assumptions, and uncertainty while keeping the explanation connected to the mathematics.",
    currentStage:
      "Research: dissertation work focused on the behaviour and uncertainty of nested sampling.",
    evidence:
      "The work provides a rigorous research setting for statistical computation, evidence estimation, and uncertainty reasoning.",
    nextMilestone:
      "Translate the research into a concise public technical explanation and an interpretable visual narrative.",
    technicalDetail:
      "The research concerns evidence estimation, the contraction of likelihood regions, sampling behaviour, uncertainty quantification, and transparent communication of assumptions.",
    tags: ["Bayesian computation", "Uncertainty", "Research"],
    status: "Research",
    visual: "sampling",
    featured: true,
    foundationAreas: ["Statistics and inference", "Stochastic processes"]
  },
  {
    slug: "london-housing-analysis",
    title: "London Housing and Area Analysis",
    shortDescription:
      "Exploring housing, commute, affordability, and area trade-offs for clearer location decisions.",
    problem: "Location choices combine several incomplete and competing data sources.",
    audience: "People comparing London areas under practical budget and commute constraints.",
    whyItMatters: "A single ranking can conceal the trade-offs that matter to an individual decision.",
    approach: "Combine public data, constraints, proxies, and map-based explanation.",
    currentStage: "Concept: retained as a future data-product direction.",
    evidence: "The problem and intended data sources are defined; no completed output is claimed.",
    nextMilestone: "Validate data availability and create a first transparent comparison model.",
    technicalDetail:
      "The concept combines public datasets, commute constraints, affordability, area-quality proxies, and map-based communication.",
    tags: ["Cities", "Maps", "Decision-making"],
    status: "Concept",
    visual: "housing",
    featured: false
  },
  {
    slug: "investment-portfolio-analysis",
    title: "Investment Portfolio Analysis",
    shortDescription:
      "Exploring portfolio construction, factor tilts, drawdowns, and long-horizon wealth paths.",
    problem: "Portfolio choices are often discussed without path risk, fees, or implementation friction.",
    audience: "Readers interested in evidence-based long-term portfolio reasoning.",
    whyItMatters: "A theoretically attractive allocation may be fragile after costs and behaviour.",
    approach: "Compare risk, return, drawdowns, fees, tracking error, and simulated wealth paths.",
    currentStage: "Concept: an analytical direction, not financial advice or a finished product.",
    evidence: "The quantitative framework and relevant risk measures are defined.",
    nextMilestone: "Create a transparent scenario model with sensitivity analysis.",
    technicalDetail:
      "The concept covers allocation logic, expected return, volatility, drawdown, fees, tracking error, simulation, and implementation constraints.",
    tags: ["Finance", "Risk", "Simulation"],
    status: "Concept",
    visual: "portfolio",
    featured: false
  },
  {
    slug: "digital-identity-system",
    title: "Personal Website and Identity System",
    shortDescription:
      "Turning identity, values, and proof-of-work into an accessible interactive presence.",
    problem: "A conventional résumé does not show how someone frames, builds, and presents work.",
    audience: "Potential collaborators, investors, and employers evaluating fit and capability.",
    whyItMatters: "The presentation of proof changes how quickly a visitor can understand its relevance.",
    approach: "Use editable data, accessible motion, and an original digital-tree metaphor.",
    currentStage: "Portfolio: actively developed as the public proof-of-work layer.",
    evidence: "The live repository contains the responsive site, data model, SVG, canvas, and interaction work.",
    nextMilestone: "Continue replacing narrative claims with deeper project outputs as they become public.",
    technicalDetail:
      "Built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, SVG, and canvas-based visual systems.",
    tags: ["Design", "Next.js", "Identity"],
    status: "Portfolio",
    visual: "identity",
    featured: false,
    githubUrl: "https://github.com/Shrivar3/shrivar-digital-tree-website"
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
