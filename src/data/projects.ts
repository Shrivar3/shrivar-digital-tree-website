export type Project = {
  title: string;
  description: string;
  audienceSummary: string;
  technicalDetail: string;
  tags: string[];
  status: "In progress" | "Research" | "Concept" | "Portfolio";
  githubUrl?: string;
  demoUrl?: string;
  academicEvidence?: string[];
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
    status: "In progress",
    academicEvidence: [
      "ST420 Statistical Learning & Big Data",
      "Machine Learning Frameworks",
      "Programming for Data Science",
      "ST237 Visualisation and Communication"
    ]
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
    status: "Research",
    academicEvidence: [
      "Machine Learning Frameworks",
      "ST420 Statistical Learning & Big Data",
      "Programming for Data Science"
    ]
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
    status: "In progress",
    academicEvidence: [
      "Applied Statistical Modelling (L4+)",
      "Generalised Linear Models",
      "Bayesian Statistics and Decision Theory (L4+)",
      "ST237 Visualisation and Communication"
    ]
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
    status: "Research",
    academicEvidence: [
      "ST407 Monte Carlo Methods",
      "Probability Theory",
      "Measure Theory for Probability",
      "Applied Stochastic Processes (L4+)"
    ]
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
    status: "Concept",
    academicEvidence: [
      "ST236 Python for Data Analytics",
      "ST237 Visualisation and Communication",
      "ST234 Games and Decisions",
      "EC220 Mathematical Economics 1A"
    ]
  },
  {
    title: "Investment Portfolio Analysis",
    description:
      "Long-term portfolio construction, factor-tilt evaluation, drawdown analysis, and wealth-path modelling using evidence-based investing principles.",
    audienceSummary:
      "A finance project focused on global diversification, sensible risk, compounding, tax-aware implementation, and robust decision-making rather than short-term market prediction.",
    technicalDetail:
      "Covers allocation logic, expected return versus volatility, Sharpe ratio, CAGR, max drawdown, sequence risk, fees, tracking error, Monte Carlo wealth simulations, factor definitions, and the difference between analytical modelling and financial advice.",
    tags: ["Finance", "Investing", "Risk", "Monte Carlo"],
    status: "Concept",
    academicEvidence: [
      "ST401 Stochastic Methods for Finance",
      "ST407 Monte Carlo Methods",
      "ST965 Time Series",
      "ST235 Finance and Financial Reporting"
    ]
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
    githubUrl: "https://github.com/Shrivar3/shrivar-digital-tree-website",
    academicEvidence: [
      "ST237 Visualisation and Communication",
      "Programming for Data Science",
      "ST236 Python for Data Analytics"
    ]
  }
];
