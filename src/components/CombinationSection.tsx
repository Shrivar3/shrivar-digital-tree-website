import { ArrowRight, Box, ChartSpline, Presentation, Search } from "lucide-react";
import { profile } from "@/data/profile";

const stageIcons = [Search, ChartSpline, Box, Presentation];

export function CombinationSection() {
  return (
    <section id="advantage" className="combination-section">
      <div className="site-container combination-inner">
        <div className="combination-label">Why the combination matters</div>
        <div className="combination-content">
          <h2>{profile.differentiation.statement}</h2>
          <p>{profile.differentiation.body}</p>
          <div className="execution-path" aria-label="How I move from a question to a decision-ready output">
            {profile.differentiation.stages.map((stage, index) => {
              const Icon = stageIcons[index] ?? Search;
              return (
                <div key={stage.title} className="execution-stage">
                  <div className="execution-stage-top">
                    <span><Icon size={18} aria-hidden="true" /></span>
                    {index < profile.differentiation.stages.length - 1 ? <ArrowRight size={17} aria-hidden="true" /> : null}
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
