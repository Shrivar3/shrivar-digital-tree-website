"use client";

import { useEffect, useState } from "react";
import { BrainCircuit } from "lucide-react";
import { branches } from "@/data/nav";
import { profile } from "@/data/profile";

const navItems = [{ id: "home", label: "Home", href: "#home" }, ...branches];

export function Navigation() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = navItems
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
      {
        rootMargin: "-18% 0px -64% 0px",
        threshold: [0.08, 0.18, 0.32]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="glass-line mx-auto flex max-w-7xl items-center justify-between rounded-lg px-4 py-3"
      >
        <a href="#home" className="focus-ring flex items-center gap-2 rounded-md">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan/30 bg-cyan/10 text-cyan shadow-glow">
            <BrainCircuit size={18} aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`focus-ring rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                activeId === item.id
                  ? "bg-cyan/10 text-cyan"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring rounded-md border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold/15"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}
