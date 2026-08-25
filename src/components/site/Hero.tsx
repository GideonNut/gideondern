import { siteMeta } from "@/lib/site-content";

export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative w-full overflow-hidden border-4 border-white/30 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm">
      <div className="flex aspect-[4/3] w-full items-center justify-center border border-dashed border-white/25 bg-black/20">
        <div className="space-y-2 px-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
            <svg
              className="h-6 w-6 text-white/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-xs uppercase tracking-widest text-white/40">
            Photo placeholder
          </p>
          <p className="text-sm text-white/60">{label}</p>
        </div>
      </div>
    </div>
  );
}

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
          <ImagePlaceholder label={siteMeta.location} />
          <p className="mt-3 text-center text-xs uppercase tracking-widest text-white/50">
            Updated {siteMeta.updated}
          </p>
        </div>
      </div>
    </section>
  );
}
