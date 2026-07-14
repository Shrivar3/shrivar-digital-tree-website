export type NowQuestion = {
  id: string;
  territory: string;
  question: string;
  context: string;
  href: string;
};

export type WorkProject = {
  slug: string;
  territory: string;
  question: string;
  summary: string;
  hard: string;
  work: string;
  current: string;
  next: string;
  status: "In progress" | "Research" | "Dissertation";
  visual: "nps" | "tone" | "sampling" | "agents";
  technical?: string[];
};

export const siteContent = {
  name: "Shrivar Singh",
  hero: {
    headline: "I work on problems where the answer is not obvious yet.",
    body:
      "I'm Shrivar Singh. I use statistics, software and AI to reason through uncertainty, then build the thing that makes the answer useful.",
    primaryCta: "See the work",
    secondaryCta: "What has my attention now"
  },
  now: {
    date: "July 2026",
    title: "What has my attention now",
    intro: "Three questions keep pulling me back."
  },
  thinking: {
    title: "A precise number can still be a bad answer.",
    body:
      "I am drawn to problems that sit between mathematics and action: enough structure to analyse, enough ambiguity to require judgement. I care about what the evidence can support, what it cannot, and what we can still build in the gap.",
    principles: [
      {
        title: "Start with the decision.",
        text: "What choice is someone actually trying to make?"
      },
      {
        title: "Show the uncertainty.",
        text: "Signal, noise and assumptions should not disappear after the model is built."
      },
      {
        title: "Build until it is usable.",
        text: "An answer has not finished its job if nobody can act on it."
      }
    ]
  },
  path: {
    title: "The path into the work",
    paragraphs: [
      "I grew up in KwaZulu-Natal and came to Warwick through mathematics. I stayed for the problems that were less tidy: uncertainty, stochastic systems, Bayesian computation, customer behaviour and finance.",
      "I am joining Barclays Decision Intelligence in London in August 2026. Outside work, I keep building small systems to test where statistics and AI can create disproportionate leverage."
    ],
    moments: [
      {
        label: "KwaZulu-Natal",
        note: "Curiosity, systems and storytelling."
      },
      {
        label: "Mathematics",
        note: "Learning to model the world."
      },
      {
        label: "Statistics",
        note: "Turning variability into understanding."
      },
      {
        label: "Warwick",
        note: "MMORSE, Data Analysis and Financial Mathematics."
      },
      {
        label: "Barclays internship",
        note: "Retail Banking Data & Analytics, completed."
      },
      {
        label: "Decision Intelligence",
        note: "Joining in London · August 2026."
      }
    ]
  },
  direction: {
    title:
      "I want to build systems that help people choose better before the outcome is obvious.",
    body:
      "Not another dashboard that explains yesterday more elegantly. I am interested in tools that expose uncertainty, combine evidence and improve the next decision."
  },
  contact: {
    title: "Bring me a hard problem.",
    body:
      "If the problem is ambiguous, measurable and worth getting right, I will probably want to hear about it."
  },
  photography: {
    portrait: "/images/shrivar-environmental-portrait.jpg",
    work: "/images/shrivar-working-session.jpg",
    life: "/images/shrivar-life-energy.jpg"
  }
} as const;

export const nowQuestions: NowQuestion[] = [
  {
    id: "customer-signals",
    territory: "Customer signals",
    question:
      "How do you make NPS useful when the people who answer are not the people you serve?",
    context:
      "Sparse surveys, uneven response, sample quality and the operational choice behind the score.",
    href: "#nps-customer-analytics"
  },
  {
    id: "tonal-speech",
    territory: "Tonal speech",
    question: "Where should tone enter a speech model when tone changes meaning?",
    context:
      "Explicit tone conditioning for Twi VITS, from dataset preparation to an evaluation that can support a claim.",
    href: "#tone-conditioned-vits"
  },
  {
    id: "ai-teams",
    territory: "AI teams",
    question:
      "How much useful work can a small human team delegate before oversight becomes the bottleneck?",
    context:
      "Roles, context, handoffs, review gates and durable outputs for specialised agent teams.",
    href: "#agentic-ai-workflows"
  }
];

export const workProjects: WorkProject[] = [
  {
    slug: "nps-customer-analytics",
    territory: "Customer signals",
    question: "Customer feedback is not a census.",
    summary:
      "A statistical decision system for treating sparse, uneven survey responses as uncertain evidence rather than a clean score.",
    hard:
      "The people who respond are a sample, often a distorted one. A headline score can hide sparse segments, response bias and wide uncertainty.",
    work:
      "I am developing an independent modelling direction around sample quality, segmentation, uncertainty and the operational choice behind the score. The data shown here is synthetic.",
    current:
      "The statistical framing and validation workflow are defined. No result is claimed before the model is tested.",
    next:
      "Build a reproducible analysis that compares raw and adjusted signals, keeps uncertainty visible and tests sensitivity to sampling choices.",
    status: "In progress",
    visual: "nps"
  },
  {
    slug: "tone-conditioned-vits",
    territory: "Tonal speech",
    question: "Tone is part of the word.",
    summary:
      "Exploring explicit tone conditioning in Twi speech synthesis instead of treating meaning-bearing pitch as incidental.",
    hard:
      "A speech model can sound smooth and still lose meaning if it treats lexical tone as a side effect of the acoustics.",
    work:
      "Current work with Farmerline covers dataset preparation, tone representation, conditioning strategy, VITS fine-tuning and an evaluation plan.",
    current:
      "The conditioning architecture remains a research question. No MOS, WER or model-quality improvement is claimed.",
    next:
      "Fix the tone representation and evaluation protocol before comparing conditioning strategies.",
    status: "Research",
    visual: "tone"
  },
  {
    slug: "nested-sampling-dissertation",
    territory: "Algorithmic uncertainty",
    question: "How uncertain is the algorithm itself?",
    summary:
      "My Warwick dissertation studied run-to-run uncertainty in nested sampling and a single-run bootstrap designed to approximate it.",
    hard:
      "Evidence estimates can look precise while stochastic shrinkage and the construction of the sample path still vary from run to run.",
    work:
      "I studied dead and phantom points, stochastic shrinkage and a bootstrap based on an empirical two-sweep ladder construction.",
    current:
      "The dissertation provides the mathematical and computational basis. This public visual is an explanation, not a new empirical result.",
    next:
      "Turn the method into a concise technical note with enough detail for a specialist to inspect the assumptions.",
    status: "Dissertation",
    visual: "sampling",
    technical: [
      "Evidence estimation",
      "Dead and phantom points",
      "Stochastic shrinkage",
      "Single-run bootstrap",
      "Empirical two-sweep ladder"
    ]
  },
  {
    slug: "agentic-ai-workflows",
    territory: "AI teams",
    question: "AI is useful when the workflow is explicit.",
    summary:
      "I am building specialised agent teams with roles, handoffs and verification designed before execution.",
    hard:
      "Delegation becomes unreliable when context, tools, review and the required durable output are left implicit.",
    work:
      "I am testing small teams for research, coding, statistics, venture scouting and marketing workflows, with bounded roles and human review gates.",
    current:
      "Reusable instructions, handoff patterns and verification loops exist across practical tasks. No business outcome is claimed.",
    next:
      "Document one workflow from brief to checked artefact, including its failure modes and the points where human judgement must remain.",
    status: "In progress",
    visual: "agents"
  }
];

export const selectedModules = [
  "ST401 · Stochastic Methods for Finance",
  "ST405 · Bayesian Forecasting & Intervention",
  "ST407 · Monte Carlo Methods",
  "ST411 · Dynamic Stochastic Control",
  "ST420 · Statistical Learning & Big Data",
  "ST909 · Applications of Stochastic Calculus",
  "ST958 · Advanced Trading Strategies",
  "ST965 · Time Series",
  "Bayesian Statistics and Decision Theory"
] as const;
