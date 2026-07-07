import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, intro, children }: SectionShellProps) {
  return (
    <section id={id} className="relative px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            {intro}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
