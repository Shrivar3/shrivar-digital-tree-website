import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisuals";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="supporting-project">
      <div className="supporting-project-topline">
        <span>0{index + 2}</span>
        <span className="project-status"><i />{project.status}</span>
      </div>

      <div className="supporting-project-visual">
        <ProjectVisual type={project.visual} compact />
      </div>

      <div className="supporting-project-copy">
        <h3>{project.title}</h3>
        <p className="supporting-project-lead">{project.shortDescription}</p>
        <dl className="project-essentials">
          <div>
            <dt>The problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{project.approach}</dd>
          </div>
        </dl>

        <details className="project-details">
          <summary className="focus-ring">
            Technical depth <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <div className="project-details-content">
            <p>{project.technicalDetail}</p>
            <div>
              <strong>Current stage</strong>
              <span>{project.currentStage}</span>
            </div>
            <div>
              <strong>Next meaningful milestone</strong>
              <span>{project.nextMilestone}</span>
            </div>
          </div>
        </details>

        {project.githubUrl || project.demoUrl ? (
          <div className="project-links">
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="focus-ring text-link">
                <Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : null}
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="focus-ring text-link">
                View demo <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
