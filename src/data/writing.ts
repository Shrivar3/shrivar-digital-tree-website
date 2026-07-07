export type WritingItem = {
  title: string;
  category: string;
  description: string;
  status: "Draft space" | "Planned" | "Coming soon";
};

export const writing: WritingItem[] = [
  {
    title: "Uncertainty as a Practical Tool",
    category: "Statistics",
    description:
      "Notes on using uncertainty to make better decisions rather than treating it as a weakness.",
    status: "Draft space"
  },
  {
    title: "Agent Workflows That Actually Help",
    category: "AI",
    description:
      "A practical look at AI systems that improve research, coding, analysis, and communication.",
    status: "Planned"
  },
  {
    title: "Compounding, Risk, and Patience",
    category: "Finance",
    description:
      "A clear explanation of long-term portfolio thinking without pretending to predict the market.",
    status: "Planned"
  },
  {
    title: "From Research to Useful Systems",
    category: "Startups",
    description:
      "How technical ideas can become products when the problem, audience, and execution are clear.",
    status: "Coming soon"
  }
];
