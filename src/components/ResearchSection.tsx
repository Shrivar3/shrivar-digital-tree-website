import { ArrowRight, Braces, FlaskConical, ScanSearch } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisuals";
import { SectionShell } from "@/components/SectionShell";
import { projects } from "@/data/projects";

export function ResearchSection() {
  const research = projects.find((project) => project.slug === "nested-sampling-dissertation");
  if (!research) return null;

  const points = [
    {
      icon: ScanSearch,
      title: "The question",
      text: "How should uncertainty in nested sampling and evidence estimation be understood, rather than hidden behind one precise-looking number?"
    },
    {
      icon: FlaskConical,
      title: "Method",
      text: research.approach
    },
    {
      icon: Braces,
      title: "What it demonstrates",
      text: "The ability to work through an abstract computational method, challenge its assumptions, and explain the reasoning without flattening the technical detail."
    }
  ];

  return (
    <SectionShell
      id="research"
      number="03"
      title="Research, made legible"
      intro="Technical depth matters most when the assumptions, uncertainty, and practical meaning remain visible."
      className="research-section"
    >
      <article className="research-feature">
        <div className="research-intro">
          <p className="micro-label">Selected technical depth</p>
          <h3>{research.title}</h3>
          <p>{research.shortDescription}</p>
          <p>{research.problem}</p>
          <a href="#foundation" className="focus-ring text-link">
            See the quantitative foundation <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <dl className="research-points">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <dt><Icon size={17} aria-hidden="true" />{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>

        <div className="research-visual">
          <div className="research-visual-label">
            <span>Broad prior</span>
            <span>Contracting likelihood regions</span>
            <span>Evidence accumulation</span>
          </div>
          <ProjectVisual type="sampling" />
          <p>
            The visual shows the intuition: explore a broad space, progressively concentrate on
            higher-likelihood regions, and keep track of how the evidence estimate accumulates.
          </p>
        </div>
      </article>
    </SectionShell>
  );
}
