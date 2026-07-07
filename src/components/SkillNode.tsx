type SkillNodeProps = {
  title: string;
  skills: string[];
};

export function SkillNode({ title, skills }: SkillNodeProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-cyan/15 bg-cyan/[0.055] px-2.5 py-1.5 text-xs text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
