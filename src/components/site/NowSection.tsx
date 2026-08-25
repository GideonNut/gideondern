import { nowSection } from "@/lib/site-content";

const items = [
  { label: "Building", value: nowSection.building, active: true },
  { label: "Learning", value: nowSection.learning },
  { label: "Open to", value: nowSection.openTo },
];

export function NowSection() {
  return (
    <section className="relative border-y border-white/10 bg-white/5 backdrop-blur-md">
      <div className="site-dot-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
          What I&apos;m doing right now
        </h2>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {items.map((item) => (
            <div
              key={item.label}
              className={
                item.active
                  ? "rounded-lg border-2 border-dashed border-white/40 bg-white/5 p-6 backdrop-blur-sm"
                  : "p-2 md:p-0"
              }
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                {item.label}
              </p>
              <p className="text-base leading-relaxed text-white/85 md:text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
