import type { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <div
      className={`glass-line luminous-border rounded-lg p-[1px] transition duration-200 hover:-translate-y-1 hover:shadow-glow ${className}`}
    >
      <div className="h-full rounded-[7px] bg-ink/72 p-5">{children}</div>
    </div>
  );
}
