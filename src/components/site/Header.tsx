"use client";

import Link from "next/link";
import { siteMeta } from "@/lib/site-content";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: siteMeta.github, external: true },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="#"
          className="text-lg font-bold tracking-tight text-white md:text-xl"
        >
          {siteMeta.shortName}
          <span className="text-cyan-300">.</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={"external" in link && link.external ? "_blank" : undefined}
              rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
              className="text-xs font-medium uppercase tracking-widest text-white/80 transition hover:text-white md:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
