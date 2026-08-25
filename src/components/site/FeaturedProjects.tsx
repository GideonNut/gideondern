"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredProjects } from "@/lib/site-content";
import { PhotoFrame } from "./PhotoFrame";

export function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const total = featuredProjects.length;
  const current = featuredProjects[index];
  const prev = featuredProjects[(index - 1 + total) % total];
  const next = featuredProjects[(index + 1) % total];

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="work" className="scroll-mt-20">
      <div className="relative overflow-hidden border-y border-white/10 bg-black/20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400/90 via-cyan-300/90 to-indigo-400/90" />

        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              ({String(index + 1).padStart(2, "0")} — {String(total).padStart(2, "0")})
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold uppercase leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
                {current.title}
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                {current.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {current.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-white md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={current.href}
                target={current.href.startsWith("http") ? "_blank" : undefined}
                rel={current.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                {current.linkLabel ?? "View project →"}
              </a>
            </div>

            <div>
              <PhotoFrame
                src={current.image}
                alt={current.title}
                label={current.imageLabel}
              />
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-widest text-white/40">
              ({index + 1} of {total} projects shown)
            </p>
            <div className="hidden gap-6 text-sm text-white/50 md:flex">
              <span className="truncate max-w-[180px]">{prev.subtitle}</span>
              <span>·</span>
              <span className="truncate max-w-[180px]">{next.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
