import { ArrowUpRight, Linkedin, Mail, FileText, Github } from "lucide-react";
import { contactLinks } from "@/data/links";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  CV: FileText
};

export function ContactPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {contactLinks.map((link) => {
        const Icon = iconMap[link.label as keyof typeof iconMap] ?? ArrowUpRight;
        const content = (
          <>
            <span className="grid h-11 w-11 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
              <Icon size={19} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-white">{link.label}</span>
              <span
                className={`mt-1 block break-words text-sm ${
                  link.placeholder ? "text-slate-500" : "text-slate-300"
                }`}
              >
                {link.value}
              </span>
            </span>
            {link.href ? (
              <ArrowUpRight size={17} className="ml-auto shrink-0 text-gold" aria-hidden="true" />
            ) : null}
          </>
        );

        if (link.href) {
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring glass-line flex items-center gap-4 rounded-lg p-5 transition hover:-translate-y-1 hover:border-cyan/45 hover:shadow-glow"
            >
              {content}
            </a>
          );
        }

        return (
          <div key={link.label} className="glass-line flex items-center gap-4 rounded-lg p-5">
            {content}
          </div>
        );
      })}
    </div>
  );
}
