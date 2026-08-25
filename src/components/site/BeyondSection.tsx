import { beyondItems } from "@/lib/site-content";

export function BeyondSection() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/50">
          Not on the payroll
        </p>
        <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
          Beyond the day job
        </h2>

        <div className="space-y-4">
          {beyondItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur-sm md:gap-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/25 bg-white/10 text-sm font-bold text-white">
                {item.initial}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2 py-0.5 text-xs uppercase tracking-wider text-cyan-200">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/55">{item.meta}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
