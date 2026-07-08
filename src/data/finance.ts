export type FinancePillar = {
  title: string;
  summary: string;
  points: string[];
};

export type FinanceModule = {
  code: string;
  title: string;
  concepts: string[];
  application: string;
};

export type FinanceDetail = {
  id: string;
  label: string;
  title: string;
  short: string;
  detail: string;
  metrics: string[];
};

export const financePillars: FinancePillar[] = [
  {
    title: "Investing philosophy",
    summary:
      "A long-horizon, globally diversified, low-cost equity framework: global market beta as the base, with any factor tilt treated as a hypothesis to test rather than a promise of excess return.",
    points: [
      "Global equity core before complexity",
      "Costs, tax wrappers, and implementation drag matter",
      "Factor tilts need evidence, definitions, and humility",
      "Robust compounding beats fragile optimisation"
    ]
  },
  {
    title: "Financial mathematics foundation",
    summary:
      "Warwick MMORSE training connects portfolio thinking to stochastic processes, derivative pricing, Bayesian forecasting, Monte Carlo methods, time series, statistical learning, and stochastic control.",
    points: [
      "Risk-neutral pricing and stochastic calculus",
      "Forecasts as distributions, not point guesses",
      "Simulation for stress testing and wealth paths",
      "Model risk and overfitting as first-order concerns"
    ]
  },
  {
    title: "Portfolio analytics",
    summary:
      "A practical toolkit for comparing portfolios using expected return, volatility, Sharpe ratio, CAGR, max drawdown, fees, tracking error, rebalancing burden, inflation, and contribution schedules.",
    points: [
      "CAGR versus arithmetic returns",
      "Drawdowns and sequence risk",
      "Fees, tax efficiency, and rebalancing",
      "Sensitivity analysis before false precision"
    ]
  }
];

export const financeModules: FinanceModule[] = [
  {
    code: "ST401",
    title: "Stochastic Methods for Finance",
    concepts: [
      "Brownian motion",
      "martingales",
      "Ito calculus",
      "risk-neutral pricing",
      "Black-Scholes"
    ],
    application:
      "Derivative valuation, hedging, arbitrage-free pricing, and the idea that assets can be modelled under different probability measures."
  },
  {
    code: "ST405",
    title: "Bayesian Forecasting & Intervention",
    concepts: [
      "Bayesian updating",
      "state-space models",
      "posterior distributions",
      "intervention analysis"
    ],
    application:
      "Forecasting market, macro, or business uncertainty as distributions rather than overconfident point predictions."
  },
  {
    code: "ST407",
    title: "Monte Carlo Methods",
    concepts: [
      "Monte Carlo integration",
      "variance reduction",
      "MCMC",
      "SMC",
      "bootstrap methods"
    ],
    application:
      "Option pricing, VaR/CVaR estimation, portfolio stress testing, Bayesian computation, and long-term wealth simulations."
  },
  {
    code: "ST411",
    title: "Dynamic Stochastic Control",
    concepts: [
      "dynamic programming",
      "Bellman equations",
      "HJB equations",
      "stochastic control"
    ],
    application:
      "Sequential decisions such as portfolio choice, consumption-investment trade-offs, rebalancing, and risk control."
  },
  {
    code: "ST420",
    title: "Statistical Learning & Big Data",
    concepts: [
      "regularisation",
      "cross-validation",
      "model selection",
      "high-dimensional modelling",
      "tree-based methods"
    ],
    application:
      "Return prediction, factor modelling, alternative data, customer analytics, and avoiding in-sample stories that fail out of sample."
  },
  {
    code: "ST909",
    title: "Applications of Stochastic Calculus",
    concepts: [
      "Ito processes",
      "stochastic integration",
      "martingale methods",
      "change of measure"
    ],
    application:
      "Continuous-time asset dynamics, risk-neutral valuation, interest-rate modelling, and derivative pricing."
  },
  {
    code: "ST958",
    title: "Advanced Trading Strategies",
    concepts: [
      "systematic trading",
      "backtesting",
      "alpha signals",
      "execution costs",
      "risk limits"
    ],
    application:
      "Separating theoretical strategy performance from live tradability after transaction costs, market impact, and operational constraints."
  },
  {
    code: "ST965",
    title: "Time Series",
    concepts: [
      "ARMA/ARIMA",
      "stationarity",
      "autocorrelation",
      "volatility clustering",
      "diagnostics"
    ],
    application:
      "Returns, volatility, macro indicators, risk forecasting, and the limits of predictability in financial time series."
  }
];

export const financeDetails: FinanceDetail[] = [
  {
    id: "drawdowns",
    label: "Drawdowns",
    title: "Drawdowns and sequence risk",
    short:
      "The same average return can feel completely different depending on path, timing, and contribution or withdrawal schedule.",
    detail:
      "I treat max drawdown, recovery time, and sequence risk as practical measures of whether a portfolio is behaviourally and financially survivable. For long horizons, the question is not only expected CAGR; it is whether the investor can stay invested through adverse paths without being forced into bad decisions.",
    metrics: ["Max drawdown", "time to recovery", "sequence risk", "rolling returns"]
  },
  {
    id: "factors",
    label: "Factor tilts",
    title: "Factor evidence without factor certainty",
    short:
      "Value, size, quality, momentum, and multifactor ETFs are interesting, but definitions and realised outcomes matter.",
    detail:
      "I see factor tilts as academically motivated but uncertain in implementation. ETF construction, fees, turnover, capacity, tracking error, tax effects, and factor definitions can all dilute the clean academic story. A tilt should earn its place against a simple global market portfolio.",
    metrics: ["tracking error", "turnover", "expense ratio", "factor definition"]
  },
  {
    id: "simulation",
    label: "Simulation",
    title: "Monte Carlo and wealth-path thinking",
    short:
      "Simulation is useful when closed-form intuition is not enough, especially for contributions, inflation, fees, and withdrawals.",
    detail:
      "Monte Carlo wealth simulations can test sensitivity to return assumptions, volatility, inflation, contribution paths, withdrawal rates, fees, and bad early-market sequences. The goal is not false precision; it is to understand which assumptions actually drive the decision.",
    metrics: ["CAGR", "volatility", "inflation", "withdrawal rate"]
  },
  {
    id: "implementation",
    label: "Implementation",
    title: "The gap between theory and live portfolios",
    short:
      "A portfolio or strategy only matters after costs, liquidity, rebalancing, tax wrappers, and behaviour are considered.",
    detail:
      "I am sceptical of complexity that cannot justify its operational burden. A theoretically elegant allocation can be inferior if it adds fees, turnover, tax friction, rebalancing difficulty, or behavioural fragility without a clear expected benefit.",
    metrics: ["fees", "tax wrappers", "rebalancing burden", "liquidity"]
  }
];

export const financeToolkit = [
  "stochastic processes",
  "Monte Carlo methods",
  "Bayesian inference",
  "time series",
  "statistical learning",
  "optimisation",
  "dynamic programming",
  "backtesting",
  "portfolio construction",
  "risk modelling"
];
