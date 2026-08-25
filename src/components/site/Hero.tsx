import { siteMeta } from "@/lib/site-content";
import { PhotoFrame } from "./PhotoFrame";

export function Hero() {
  const parts = siteMeta.tagline.split(siteMeta.taglineHighlight[0]);

  return (
    <section className="relative overflow-hidden">
      <div className="site-dot-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/90 md:text-sm">
          {siteMeta.role}
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          {parts[0]}
          <span className="relative inline-block">
            <span className="relative z-10">{siteMeta.taglineHighlight[0]}</span>
            <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-gradient-to-r from-blue-400/80 via-cyan-300/80 to-indigo-400/80 md:bottom-2 md:h-4" />
          </span>
          {parts[1]?.split(siteMeta.taglineAccent)[0]}
          <span className="text-cyan-200">{siteMeta.taglineAccent}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          {siteMeta.subtitle}
        </p>

        <div className="mt-12 max-w-md">
          <PhotoFrame
            src={siteMeta.heroImage}
            alt={siteMeta.name}
            priority
          />
          <p className="mt-3 text-center text-xs uppercase tracking-widest text-white/50">
            Updated {siteMeta.updated}
          </p>
        </div>
      </div>
    </section>
  );
}
