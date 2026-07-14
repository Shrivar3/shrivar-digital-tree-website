import { AgentEvidenceVisual, NpsEvidenceVisual, SamplingEvidenceVisual, ToneEvidenceVisual } from "@/components/ProjectVisuals";
import { workProjects } from "@/data/content";

const bySlug = Object.fromEntries(workProjects.map((project) => [project.slug, project]));

function ProjectHeader({ slug, index }: { slug: string; index: string }) {
  const project = bySlug[slug];
  return (
    <header className="project-heading">
      <div className="project-kicker"><span>{index}</span><i />{project.territory}<b>{project.status}</b></div>
      <h3>{project.question}</h3>
      <p>{project.summary}</p>
    </header>
  );
}

function ProjectState({ slug, labels }: { slug: string; labels: [string, string, string] }) {
  const project = bySlug[slug];
  return (
    <div className="project-state">
      <div><small>{labels[0]}</small><p>{project.hard}</p></div>
      <div><small>{labels[1]}</small><p>{project.current}</p></div>
      <div><small>{labels[2]}</small><p>{project.next}</p></div>
    </div>
  );
}

export function WorkSection() {
  const nps = bySlug["nps-customer-analytics"];
  const tone = bySlug["tone-conditioned-vits"];
  const sampling = bySlug["nested-sampling-dissertation"];
  const agents = bySlug["agentic-ai-workflows"];

  return (
    <section id="work" className="work-section section-numbered">
      <div className="coordinate-rail" aria-hidden="true"><span>02</span><i /></div>
      <div className="page-shell">
        <header className="work-intro">
          <p>Selected work</p>
          <h2>Four questions. Four different kinds of uncertainty.</h2>
        </header>

        <article id={nps.slug} className="project-case project-case-nps">
          <ProjectHeader slug={nps.slug} index="01" />
          <NpsEvidenceVisual />
          <div className="project-narrative">
            <p>{nps.work}</p>
            <ProjectState slug={nps.slug} labels={["Why the score is fragile", "What exists now", "Next test"]} />
          </div>
        </article>

        <article id={tone.slug} className="project-case project-case-tone">
          <div className="project-copy-column">
            <ProjectHeader slug={tone.slug} index="02" />
            <p className="project-work-copy">{tone.work}</p>
            <ProjectState slug={tone.slug} labels={["Why tone matters", "Research state", "Before any claim"]} />
          </div>
          <ToneEvidenceVisual />
        </article>

        <article id={sampling.slug} className="project-case project-case-sampling">
          <SamplingEvidenceVisual />
          <div className="project-copy-column">
            <ProjectHeader slug={sampling.slug} index="03" />
            <p className="project-work-copy">{sampling.work}</p>
            <details className="technical-disclosure">
              <summary className="focus-ring">Inside the method <span aria-hidden="true" /></summary>
              <ul>{sampling.technical?.map((item) => <li key={item}>{item}</li>)}</ul>
            </details>
            <ProjectState slug={sampling.slug} labels={["The difficult part", "Public evidence", "Next explanation"]} />
          </div>
        </article>

        <article id={agents.slug} className="project-case project-case-agents">
          <div className="agent-project-intro">
            <ProjectHeader slug={agents.slug} index="04" />
            <p className="project-work-copy">{agents.work}</p>
          </div>
          <AgentEvidenceVisual />
          <ProjectState slug={agents.slug} labels={["Where delegation breaks", "What exists", "Next workflow"]} />
        </article>
      </div>
    </section>
  );
}
