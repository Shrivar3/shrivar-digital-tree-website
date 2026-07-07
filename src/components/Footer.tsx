import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-sm text-slate-400 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name} - clear thinking, useful systems, and better decisions.</p>
        <p>Built as a living digital intelligence tree.</p>
      </div>
    </footer>
  );
}
