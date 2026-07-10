import { ChevronDown } from "lucide-react";
import { academicClusters } from "@/data/academic";

export function CourseworkEvidence() {
  return (
    <details className="academic-drawer">
      <summary className="focus-ring academic-drawer-summary">
        <span>
          <span className="academic-drawer-title">View detailed academic modules</span>
          <span className="academic-drawer-note">
            Optional evidence for visitors who want the underlying coursework.
          </span>
        </span>
        <ChevronDown className="academic-drawer-chevron" size={20} aria-hidden="true" />
      </summary>

      <div className="academic-drawer-content">
        {academicClusters.map((cluster) => (
          <section key={cluster.id} className="academic-cluster" aria-labelledby={`${cluster.id}-title`}>
            <div>
              <p className="academic-cluster-signal">{cluster.signal}</p>
              <h3 id={`${cluster.id}-title`}>{cluster.title}</h3>
              <p>{cluster.summary}</p>
            </div>
            <ul>
              {cluster.modules.map((module) => (
                <li key={`${module.code ?? module.title}-${module.year}`}>
                  <span>
                    {module.code ? <strong>{module.code}</strong> : null}
                    {module.code ? " · " : ""}
                    {module.title}
                  </span>
                  <span>{module.year}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </details>
  );
}
