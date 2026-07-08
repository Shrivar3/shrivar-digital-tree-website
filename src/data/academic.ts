export type AcademicModule = {
  code?: string;
  title: string;
  year: "Year 1" | "Year 2" | "Year 3" | "Final year";
  note?: string;
};

export type AcademicCluster = {
  id:
    | "quant-finance"
    | "statistics-inference"
    | "machine-learning-data"
    | "stochastic-probability"
    | "foundations-optimisation";
  title: string;
  signal: string;
  summary: string;
  modules: AcademicModule[];
};

export const academicClusters: AcademicCluster[] = [
  {
    id: "quant-finance",
    title: "Quantitative finance",
    signal: "Pricing, risk, trading, portfolio analysis",
    summary:
      "Formal grounding for investment reasoning, derivative pricing, stochastic finance, trading strategy evaluation, and financial reporting.",
    modules: [
      {
        code: "ST401",
        title: "Stochastic Methods for Finance",
        year: "Final year"
      },
      {
        code: "ST909",
        title: "Applications of Stochastic Calculus",
        year: "Final year"
      },
      {
        code: "ST958",
        title: "Advanced Trading Strategies",
        year: "Final year"
      },
      {
        code: "ST407",
        title: "Monte Carlo Methods",
        year: "Final year"
      },
      {
        code: "ST965",
        title: "Time Series",
        year: "Final year"
      },
      {
        title: "Introduction to Mathematical Finance",
        year: "Year 3"
      },
      {
        code: "ST235",
        title: "Finance and Financial Reporting",
        year: "Year 2"
      },
      {
        code: "EC220",
        title: "Mathematical Economics 1A",
        year: "Year 2"
      }
    ]
  },
  {
    id: "statistics-inference",
    title: "Statistics and inference",
    signal: "Models, uncertainty, decision theory",
    summary:
      "Evidence behind claims about statistical reasoning, uncertainty, model validity, Bayesian thinking, and applied inference.",
    modules: [
      {
        title: "Applied Statistical Modelling",
        year: "Year 3",
        note: "Level 4+ / master's level"
      },
      {
        title: "Bayesian Statistics and Decision Theory",
        year: "Year 3",
        note: "Level 4+ / master's level"
      },
      {
        code: "ST405",
        title: "Bayesian Forecasting & Intervention",
        year: "Final year"
      },
      {
        title: "Generalised Linear Models",
        year: "Year 3"
      },
      {
        title: "Multivariate Statistics",
        year: "Year 3",
        note: "Level 4+ / master's level"
      },
      {
        code: "ST230",
        title: "Mathematical Statistics",
        year: "Year 2"
      },
      {
        code: "ST229",
        title: "Probability for Mathematical Statistics",
        year: "Year 2"
      },
      {
        code: "ST231",
        title: "Linear Statistical Modelling with R",
        year: "Year 2"
      },
      {
        code: "ST228",
        title: "Mathematical Modelling for Statistics",
        year: "Year 2"
      }
    ]
  },
  {
    id: "machine-learning-data",
    title: "Machine learning and data",
    signal: "Prediction, programming, visualisation",
    summary:
      "A data-analysis stream foundation for machine learning, model selection, programming, analytics, and communicating results clearly.",
    modules: [
      {
        code: "ST420",
        title: "Statistical Learning & Big Data",
        year: "Final year"
      },
      {
        title: "Machine Learning Frameworks",
        year: "Year 3"
      },
      {
        title: "Programming for Data Science",
        year: "Year 3"
      },
      {
        code: "ST236",
        title: "Python for Data Analytics",
        year: "Year 2"
      },
      {
        code: "ST237",
        title: "Visualisation and Communication",
        year: "Year 2"
      },
      {
        code: "ST231",
        title: "Linear Statistical Modelling with R",
        year: "Year 2"
      }
    ]
  },
  {
    id: "stochastic-probability",
    title: "Stochastic processes and probability",
    signal: "Random systems, measures, simulation",
    summary:
      "The mathematical layer behind uncertainty, stochastic modelling, simulation, time-evolving systems, and risk under different probability views.",
    modules: [
      {
        title: "Applied Stochastic Processes",
        year: "Year 3",
        note: "Level 4+ / master's level"
      },
      {
        code: "ST227",
        title: "Stochastic Processes",
        year: "Year 2"
      },
      {
        title: "Probability Theory",
        year: "Year 3"
      },
      {
        title: "Measure Theory for Probability",
        year: "Year 3"
      },
      {
        code: "ST401",
        title: "Stochastic Methods for Finance",
        year: "Final year"
      },
      {
        code: "ST411",
        title: "Dynamic Stochastic Control",
        year: "Final year"
      },
      {
        code: "ST407",
        title: "Monte Carlo Methods",
        year: "Final year"
      },
      {
        code: "ST965",
        title: "Time Series",
        year: "Final year"
      }
    ]
  },
  {
    id: "foundations-optimisation",
    title: "Mathematical foundations and optimisation",
    signal: "Analysis, linear algebra, decisions, economics",
    summary:
      "The foundational mathematics and decision-science base behind modelling, optimisation, economics, and technical reasoning.",
    modules: [
      {
        code: "MA271",
        title: "Mathematical Analysis 3",
        year: "Year 2"
      },
      {
        code: "MA222",
        title: "Metric Spaces",
        year: "Year 2"
      },
      {
        title: "Vectors and Matrices",
        year: "Year 1"
      },
      {
        title: "Calculus 1",
        year: "Year 1"
      },
      {
        code: "MA143",
        title: "Calculus 2",
        year: "Year 1"
      },
      {
        code: "MA241",
        title: "Combinatorics",
        year: "Year 2"
      },
      {
        code: "IB207",
        title: "Mathematical Programming 2",
        year: "Year 2"
      },
      {
        code: "ST234",
        title: "Games and Decisions",
        year: "Year 2"
      },
      {
        code: "EC106",
        title: "EC106",
        year: "Year 1"
      },
      {
        code: "IB104",
        title: "IB104",
        year: "Year 1"
      },
      {
        code: "MA133",
        title: "MA133",
        year: "Year 1"
      },
      {
        code: "MA141",
        title: "MA141",
        year: "Year 1"
      },
      {
        code: "ST117",
        title: "ST117",
        year: "Year 1"
      },
      {
        code: "ST118",
        title: "ST118",
        year: "Year 1"
      },
      {
        code: "ST119",
        title: "ST119",
        year: "Year 1"
      }
    ]
  }
];

export function getAcademicClusters(ids?: AcademicCluster["id"][]) {
  if (!ids?.length) {
    return academicClusters;
  }

  return academicClusters.filter((cluster) => ids.includes(cluster.id));
}
