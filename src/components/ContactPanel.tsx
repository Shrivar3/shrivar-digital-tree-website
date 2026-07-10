import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { contactLinks } from "@/data/links";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github
};

export function ContactPanel() {
  const availableLinks = contactLinks.filter(
    (link): link is typeof link & { href: string } => Boolean(link.href)
  );

  return (
    <div className="contact-links" aria-label="Available contact links">
      {availableLinks.map((link) => {
        const Icon = iconMap[link.label as keyof typeof iconMap] ?? ArrowUpRight;
        const label = link.label === "LinkedIn" ? "Connect on LinkedIn" : "Explore GitHub";

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring contact-link"
            aria-label={`${label} (opens in a new tab)`}
          >
            <Icon size={21} aria-hidden="true" />
            <span>{label}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
