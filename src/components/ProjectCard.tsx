"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [technical, setTechnical] = useState(false);

  return (
    <article className="glass-line luminous-border flex h-full flex-col rounded-lg p-[1px] transition duration-200 hover:-translate-y-1 hover:shadow-glow">
      <div className="flex h-full flex-col rounded-[7px] bg-ink/78 p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {project.status}
            </p>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          </div>
          <span className="h-3 w-3 shrink-0 rounded-full bg-cyan shadow-[0_0_18px_rgba(88,230,255,0.72)]" />
        </div>

        <p className="text-pretty text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex rounded-md border border-white/10 bg-white/[0.03] p-1">
          <button
            type="button"
            onClick={() => setTechnical(false)}
            className={`focus-ring flex-1 rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
              !technical ? "bg-cyan/15 text-cyan" : "text-slate-400 hover:text-white"
            }`}
          >
            Summary
          </button>
          <button
            type="button"
            onClick={() => setTechnical(true)}
            className={`focus-ring flex-1 rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
              technical ? "bg-gold/15 text-gold" : "text-slate-400 hover:text-white"
            }`}
          >
            Technical
          </button>
        </div>

        <p className="mt-4 min-h-[4.5rem] text-sm leading-6 text-slate-300">
          {technical ? project.technicalDetail : project.audienceSummary}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="focus-ring mt-4 inline-flex items-center gap-2 self-start rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan/40 hover:text-cyan"
        >
          {expanded ? "Hide detail" : "Show detail"}
          <ChevronDown
            size={15}
            className={`transition ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {expanded ? (
          <div className="mt-4 rounded-md border border-cyan/15 bg-cyan/[0.045] p-4 text-sm leading-6 text-slate-300">
            <p>
              Space reserved for problem statement, method, result, visuals, screenshots, links, and
              next improvements. This keeps the project ready for richer proof-of-work without
              inventing details prematurely.
            </p>
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan/40 hover:text-cyan"
            >
              <Github size={15} aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-slate-500">
              <Github size={15} aria-hidden="true" />
              GitHub link later
            </span>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-gold/40 hover:text-gold"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-slate-500">
              <ExternalLink size={15} aria-hidden="true" />
              Demo link later
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
