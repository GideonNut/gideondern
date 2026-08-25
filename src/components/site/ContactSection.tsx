import { siteMeta } from "@/lib/site-content";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600/80 via-cyan-500/70 to-indigo-600/80 backdrop-blur-sm">
        <div className="site-dot-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center md:px-6 md:py-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Got a project? Let&apos;s talk.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${siteMeta.email}`}
              className="inline-flex min-w-[240px] items-center justify-center rounded-md border border-white/30 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-white/90"
            >
              {siteMeta.email}
            </a>
            <a
              href={siteMeta.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[240px] items-center justify-center rounded-md border border-white/30 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-white/90"
            >
              {siteMeta.whatsappLabel}
            </a>
            <a
              href={siteMeta.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[240px] items-center justify-center rounded-md border border-white/30 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-white/90"
            >
              {siteMeta.telegramLabel}
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-black/30 py-6 text-center">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {siteMeta.name}
        </p>
      </footer>
    </section>
  );
}
