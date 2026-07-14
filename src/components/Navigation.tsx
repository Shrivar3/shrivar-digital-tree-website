"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";
import { siteContent } from "@/data/content";

const navigation = [
  { id: "now", label: "Now" },
  { id: "work", label: "Work" },
  { id: "thinking", label: "Thinking" },
  { id: "path", label: "Path" },
  { id: "contact", label: "Contact" }
] as const;

function TreeMark() {
  return (
    <svg viewBox="0 0 30 30" aria-hidden="true">
      <path d="M15 27V14M15 20C10 14 7 12 3 11M15 17C20 11 23 8 28 7M15 24C10 24 7 26 4 29M15 24C21 24 24 26 28 29" />
      <circle cx="3" cy="11" r="1.5" /><circle cx="28" cy="7" r="1.5" />
    </svg>
  );
}

export function Navigation() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", ...navigation.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0.08, 0.2, 0.45] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <nav className="page-shell site-navigation" aria-label="Primary navigation">
        <a href="#home" className="focus-ring brand" aria-label="Shrivar Singh, home"><TreeMark /><span>{siteContent.name}</span></a>
        <div className="desktop-navigation">
          {navigation.map((item) => <a key={item.id} href={"#" + item.id} className="focus-ring" aria-current={active === item.id ? "location" : undefined}>{item.label}</a>)}
        </div>
        <button type="button" className="focus-ring menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </nav>
      <div id="mobile-nav" className="page-shell mobile-navigation" data-open={open}>
        {navigation.map((item) => (
          <a key={item.id} href={"#" + item.id} className="focus-ring" aria-current={active === item.id ? "location" : undefined} onClick={() => setOpen(false)}>
            <span>{item.label}</span><ArrowIcon />
          </a>
        ))}
      </div>
    </header>
  );
}
