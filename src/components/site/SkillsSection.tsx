import { skillCategories } from "@/lib/site-content";

export function SkillsSection() {
  return (
    <section className="border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/50">
          What I work with
        </p>
        <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
          Skills &amp; tools
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="rounded-lg border border-white/20 bg-gradient-to-br from-white/15 via-white/8 to-white/5 p-6 backdrop-blur-xl"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-cyan-200">
                {category.label}
              </p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-white/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
