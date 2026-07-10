import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  number?: string;
  label?: string;
  title: string;
  intro?: string;
  className?: string;
  headerClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  number,
  label,
  title,
  intro,
  className = "",
  headerClassName = "",
  children
}: SectionShellProps) {
  return (
    <section id={id} className={`site-section ${className}`}>
      <div className="site-container">
        <header className={`section-heading ${headerClassName}`}>
          {number || label ? (
            <div className="section-index" aria-hidden={!label}>
              {number ? <span>{number}</span> : null}
              <span className="section-index-line" />
              {label ? <span>{label}</span> : null}
            </div>
          ) : null}
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
