import { selectedModules } from "@/data/content";

export function CourseworkEvidence() {
  return (
    <details className="module-disclosure">
      <summary className="focus-ring">View selected Warwick modules <span aria-hidden="true" /></summary>
      <div>
        <p>Selected evidence from the MMORSE Data Analysis Stream with Financial Mathematics.</p>
        <ul>{selectedModules.map((module) => <li key={module}>{module}</li>)}</ul>
      </div>
    </details>
  );
}
