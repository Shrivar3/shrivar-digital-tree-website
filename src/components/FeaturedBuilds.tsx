"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectVisual } from "@/components/ProjectVisuals";
import { SectionShell } from "@/components/SectionShell";
import { featuredProjects } from "@/data/projects";

export function FeaturedBuilds() {
  const [view, setView] = useState<"commercial" | "technical">("commercial");
  const primaryProject = featuredProjects.find((project) => project.slug === "nps-customer-analytics");
  const supportingProjects = featuredProjects.filter((project) => project.slug !== "nps-customer-analytics");

  if (!primaryProject) return null;

  const commercialPoints = [
    ["The problem", primaryProject.problem],
    ["Who it serves", primaryProject.audience],
    ["Why it matters", primaryProject.whyItMatters]
  ];
  const technicalPoints = [
    ["Approach", primaryProject.approach],
    ["Current stage", primaryProject.currentStage],
    ["Existing evidence", primaryProject.evidence]
  ];
  const visiblePoints = view === "commercial" ? commercialPoints : technicalPoints;

  return (
    <SectionShell
      id="builds"
      number="01"
      title="Selected builds"
      intro="Proof that I can move from a difficult question to a useful artefact — with stage, uncertainty, and next steps kept honest."
      className="builds-section"
    >
      <article className="featured-project">
        <div className="featured-project-header">
          <div>
            <p className="project-status"><i />{primaryProject.status}</p>
            <h3>{primaryProject.title}</h3>
            <p>{primaryProject.shortDescription}</p>
          </div>

          <div className="view-switch" role="group" aria-label="Project explanation depth">
            <button
              type="button"
              className="focus-ring"
              aria-pressed={view === "commercial"}
              onClick={() => setView("commercial")}
            >
              Commercial view
            </button>
            <button
              type="button"
              className="focus-ring"
              aria-pressed={view === "technical"}
              onClick={() => setView("technical")}
            >
              Technical view
            </button>
          </div>
        </div>

        <div className="featured-project-grid">
          <dl className="featured-project-points" key={view}>
            {visiblePoints.map(([label, text]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
          <ProjectVisual type={primaryProject.visual} />
        </div>

        <div className="featured-project-footer">
          <div>
            <CheckCircle2 size={17} aria-hidden="true" />
            <span><strong>Next meaningful milestone</strong>{primaryProject.nextMilestone}</span>
          </div>
          <a href="#capabilities" className="focus-ring text-link">
            See the capabilities behind the work <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </article>

      <div className="supporting-projects">
        {supportingProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
