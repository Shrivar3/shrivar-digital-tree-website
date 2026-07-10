import { ArrowRight } from "lucide-react";

function FinancePathVisual() {
  return (
    <svg viewBox="0 0 560 180" role="img" aria-label="Simulated financial paths with a highlighted drawdown and recovery">
      <defs>
        <linearGradient id="financeArea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5c8cff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#5c8cff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M22 146 C102 126 116 93 184 102 S276 42 342 69 S447 96 538 31 L538 164 L22 164 Z" fill="url(#financeArea)" />
      <path d="M22 146 C102 126 116 93 184 102 S276 42 342 69 S447 96 538 31" fill="none" stroke="#74a6ff" strokeWidth="2.2" />
      <path d="M22 146 C99 136 135 116 186 121 S276 88 342 98 S447 81 538 72" fill="none" stroke="#78f4df" strokeDasharray="5 8" strokeOpacity="0.72" />
      <path d="M22 146 C96 144 130 135 185 139 S284 124 348 134 S447 116 538 105" fill="none" stroke="#e7b85f" strokeDasharray="3 9" strokeOpacity="0.6" />
      <path d="M342 69V98" stroke="#e7b85f" strokeDasharray="3 4" />
      <circle cx="342" cy="69" r="4" fill="#e7b85f" />
      <text x="352" y="86" fill="#a7b7c8" fontSize="12">path risk</text>
    </svg>
  );
}

export function FinanceSection() {
  return (
    <div className="finance-lens">
      <div className="finance-copy">
        <p className="micro-label">A finance-aware analytical lens</p>
        <h3>Risk, path dependence, and implementation—not market theatre.</h3>
        <p>
          My quantitative finance foundation connects simulation, time series, stochastic methods,
          and portfolio reasoning. The emphasis is on assumptions, drawdowns, costs, and whether a
          model improves the decision. This is analytical context, not financial advice.
        </p>
        <a href="#foundation" className="focus-ring text-link">
          See the formal foundation <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="finance-visual">
        <FinancePathVisual />
      </div>
    </div>
  );
}
