import { socialLinks } from "@/lib/site-content";
import { ImagePlaceholder } from "./PhotoFrame";

export function SocialSection() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
          Find me elsewhere
        </h2>
        <p className="mb-10 text-sm text-white/50">
          // not just code — here&apos;s the rest of it
        </p>

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ImagePlaceholder key={i} label={`Photo ${i + 1}`} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-md border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
