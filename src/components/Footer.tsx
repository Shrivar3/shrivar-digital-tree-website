import { ArrowIcon } from "@/components/ArrowIcon";
import { siteContent } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <span>{siteContent.name}</span>
        <p>Questions, models and systems for decisions under uncertainty.</p>
        <a href="#home" className="focus-ring">Back to the tree <ArrowIcon direction="up" /></a>
      </div>
    </footer>
  );
}
