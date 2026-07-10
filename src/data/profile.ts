export const profile = {
  name: "Shrivar Singh",
  role: "Quantitative founder-builder",
  location: "United Kingdom",
  heroHeadline: "I build quantitative systems that turn noisy data into better decisions.",
  heroBody:
    "Statistics, AI, analytics, and finance — translated into research, prototypes, and products with commercial judgement.",
  opportunityNote: "Open to select analytical, AI, and product opportunities.",
  philosophy:
    "Start with the decision. Make the uncertainty visible. Build the clearest useful thing.",
  capabilities: [
    {
      id: "decision-intelligence",
      title: "Decision intelligence and customer analytics",
      outcome:
        "Turn messy behavioural and feedback data into clearer priorities, with uncertainty and data quality kept visible."
    },
    {
      id: "uncertainty",
      title: "Statistical modelling and uncertainty",
      outcome:
        "Build models that separate signal, noise, assumptions, and limitations so decisions remain robust."
    },
    {
      id: "applied-ai",
      title: "Applied AI and agentic workflows",
      outcome:
        "Prototype AI workflows that research, reason, use tools, and verify their work against real constraints."
    },
    {
      id: "quantitative-systems",
      title: "Forecasting, simulation, and quantitative analysis",
      outcome:
        "Explore future paths, stress-test assumptions, and make risk easier to understand before committing."
    },
    {
      id: "data-products",
      title: "Data products and interactive dashboards",
      outcome:
        "Ship analytical tools that make complex information usable, shareable, and ready for action."
    },
    {
      id: "research-translation",
      title: "Research translation and technical communication",
      outcome:
        "Turn difficult technical ideas into clear narratives, visuals, and practical next steps."
    }
  ],
  differentiation: {
    statement:
      "Quantitative depth. Commercial judgement. AI-native execution. Clear communication.",
    body:
      "I can move between research, analysis, prototype, and presentation without losing the thread of the original decision. That range is useful when a problem is still ambiguous and the right output has not been decided yet.",
    stages: [
      {
        title: "Research",
        text: "Understand the question, assumptions, and context."
      },
      {
        title: "Analysis",
        text: "Model the problem and quantify what is uncertain."
      },
      {
        title: "Prototype",
        text: "Build quickly, test the idea, and expose constraints."
      },
      {
        title: "Presentation",
        text: "Make the result clear enough to support a decision."
      }
    ]
  },
  foundationLead:
    "Formal training across statistical inference, stochastic modelling, machine learning, optimisation, economics, and financial mathematics.",
  education: {
    institution: "University of Warwick",
    programme: "MMORSE",
    stream: "Data Analysis Stream with Financial Mathematics",
    summary:
      "Advanced quantitative training with an emphasis on using mathematical and statistical methods to reason about real-world problems."
  },
  experience: {
    organisation: "Barclays",
    area: "Retail Banking Data & Analytics, now Decision Intelligence",
    summary:
      "Practical exposure to data, decisions, stakeholder context, and financial services through the graduate programme."
  },
  foundationAreas: [
    {
      title: "Statistical inference and uncertainty",
      text: "Estimation, modelling, Bayesian methods, forecasting, and principled uncertainty quantification."
    },
    {
      title: "Machine learning and data systems",
      text: "Statistical learning, model selection, programming, data analysis, and visualisation."
    },
    {
      title: "Stochastic processes and quantitative finance",
      text: "Random systems, simulation, time series, stochastic calculus, risk, and pricing foundations."
    },
    {
      title: "Optimisation, economics, and decision-making",
      text: "Mathematical programming, game-theoretic thinking, economics, and sequential decisions."
    },
    {
      title: "Programming and technical communication",
      text: "Python, R, reproducible analysis, visual explanation, and technically grounded presentation."
    }
  ]
} as const;
