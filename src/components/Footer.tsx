import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <p>{profile.name} — quantitative founder-builder.</p>
        <a href="#home" className="focus-ring footer-link">
          Back to the tree <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
