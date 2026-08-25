"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experienceRoles } from "@/lib/site-content";

export function ExperienceSection() {
  const [openRole, setOpenRole] = useState<string | null>(experienceRoles[0]?.id ?? null);
  const [openItems, setOpenItems] = useState<Record<string, string | null>>({});

  const toggleRole = (id: string) => {
    setOpenRole((current) => (current === id ? null : id));
  };

  const toggleItem = (roleId: string, itemNumber: string) => {
    const key = `${roleId}-${itemNumber}`;
    setOpenItems((current) => ({
      ...current,
      [key]: current[key] ? null : key,
    }));
  };

  return (
    <section id="experience" className="scroll-mt-20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/50">
          Experience
        </p>
        <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
          What I&apos;ve built
        </h2>

        <div className="divide-y divide-white/10">
          {experienceRoles.map((role) => {
            const isOpen = openRole === role.id;

            return (
              <div key={role.id} className="py-2">
                <button
                  type="button"
                  onClick={() => toggleRole(role.id)}
                  className="flex w-full items-start gap-4 py-5 text-left transition hover:bg-white/5 md:gap-6 md:px-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/25 bg-white/10 text-sm font-bold text-white">
                    {role.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-lg font-semibold text-white md:text-xl">
                          {role.title} — {role.company}
                        </p>
                        <p className="mt-1 text-sm text-white/55">{role.meta}</p>
                      </div>
                      <ChevronDown
                        className={`mt-1 h-5 w-5 shrink-0 text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                    {isOpen && (
                      <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                        {role.summary}
                      </p>
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mb-4 ml-14 space-y-2 md:ml-20">
                    {role.items.map((item) => {
                      const itemKey = `${role.id}-${item.number}`;
                      const itemOpen = openItems[itemKey];

                      return (
                        <div key={item.number}>
                          <button
                            type="button"
                            onClick={() => toggleItem(role.id, item.number)}
                            className="flex w-full items-start gap-4 rounded-md px-2 py-3 text-left transition hover:bg-white/5"
                          >
                            <span className="text-xs font-medium text-cyan-200/80">
                              {item.number}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-white">{item.title}</p>
                              <p className="mt-1 text-sm text-white/65">
                                {item.description}
                              </p>
                            </div>
                            {item.details && (
                              <ChevronDown
                                className={`mt-1 h-4 w-4 shrink-0 text-white/40 transition-transform ${itemOpen ? "rotate-180" : ""}`}
                              />
                            )}
                          </button>
                          {itemOpen && item.details && (
                            <p className="ml-10 pb-3 text-sm leading-relaxed text-white/60">
                              {item.details}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
