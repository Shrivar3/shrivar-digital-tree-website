"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigationItems } from "@/data/nav";
import { profile } from "@/data/profile";

const observedItems = [
  { id: "home", label: "Home", href: "#home" },
  ...navigationItems
];

function TreeMark() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
      <path
        d="M14 24V13M14 18c-2.5-4.2-5.3-6.4-9-7.4M14 15.8c2.7-4.3 5.8-6.8 9.4-7.5M14 21.2c-3.1.2-5.7 1.2-7.8 3M14 21.2c3 .1 5.6 1 7.7 2.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.35"
      />
      <circle cx="5" cy="10.6" r="1.5" fill="currentColor" />
      <circle cx="23.4" cy="8.3" r="1.5" fill="currentColor" />
      <circle cx="14" cy="12.5" r="1.35" fill="currentColor" />
    </svg>
  );
}

export function Navigation() {
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = observedItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0.08, 0.2, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));

    let scrollFrame = 0;
    const handleScroll = () => {
      if (scrollFrame) return;

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        const atPageEnd =
          window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
        if (atPageEnd) setActiveId("contact");
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav">
        <a href="#home" className="focus-ring brand-link" aria-label={`${profile.name}, home`}>
          <span className="brand-mark">
            <TreeMark />
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="nav-links" aria-label="Page sections">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={activeId === item.id ? "location" : undefined}
              className="focus-ring nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="focus-ring nav-menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-navigation" className="mobile-nav" data-open={menuOpen}>
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="focus-ring mobile-nav-link"
            aria-current={activeId === item.id ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>{item.label}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
      </div>
    </header>
  );
}
