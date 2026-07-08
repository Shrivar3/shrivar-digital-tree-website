import { BookOpen, ChevronDown } from "lucide-react";
import type { AcademicCluster, AcademicModule } from "@/data/academic";
import { getAcademicClusters } from "@/data/academic";

type CourseworkEvidenceProps = {
  clusterIds?: AcademicCluster["id"][];
  title: string;
  intro: string;
  compact?: boolean;
};

function ModuleBadge({ module }: { module: AcademicModule }) {
  return (
    <span className="rounded-md border border-white/10 bg-ink/70 px-2.5 py-2 text-xs leading-5 text-slate-300">
      {module.code ? <span className="font-semibold text-cyan">{module.code}</span> : null}
      {module.code ? " - " : ""}
      {module.title}
      <span className="ml-2 text-slate-500">{module.year}</span>
      {module.note ? (
        <span className="ml-2 rounded border border-gold/20 bg-gold/[0.06] px-1.5 py-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-gold">
          {module.note}
        </span>
      ) : null}
    </span>
  );
}

export function CourseworkEvidence({
  clusterIds,
  title,
  intro,
  compact = false
}: CourseworkEvidenceProps) {
  const clusters = getAcademicClusters(clusterIds);

  return (
    <div className="glass-line rounded-lg p-5">
      <div className="mb-5 flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
          <BookOpen size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Academic evidence
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{intro}</p>
        </div>
      </div>

      <div className={`grid gap-3 ${compact ? "lg:grid-cols-2" : "xl:grid-cols-2"}`}>
        {clusters.map((cluster) => (
          <details
            key={cluster.id}
            className="group rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan/35 hover:bg-cyan/[0.045]"
          >
            <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-4 rounded-md">
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {cluster.signal}
                </span>
                <span className="mt-2 block text-base font-semibold text-white">{cluster.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-300">{cluster.summary}</span>
              </span>
              <ChevronDown
                size={18}
                className="mt-1 shrink-0 text-cyan transition group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {cluster.modules.slice(0, compact ? 4 : 5).map((module) => (
                  <ModuleBadge
                    key={`${module.code ?? module.title}-${module.year}`}
                    module={module}
                  />
                ))}
              </div>
              {cluster.modules.length > (compact ? 4 : 5) ? (
                <div className="flex flex-wrap gap-2">
                  {cluster.modules.slice(compact ? 4 : 5).map((module) => (
                    <ModuleBadge
                      key={`${module.code ?? module.title}-${module.year}`}
                      module={module}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
