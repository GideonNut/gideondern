"use client";

import { useEffect, useRef, useState } from "react";
import { galleryImages, socialLinks } from "@/lib/site-content";
import { PhotoFrame } from "./PhotoFrame";

const socialImages = galleryImages.slice(0, 4);

export function SocialSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const updateIndex = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const rawProgress = Math.min(Math.max((viewportHeight - rect.top) / (rect.height + viewportHeight), 0), 1);
      const nextIndex = Math.min(
        socialImages.length - 1,
        Math.max(0, Math.round(rawProgress * (socialImages.length - 1)))
      );

      setActiveIndex(nextIndex);
    };

    updateIndex();
    window.addEventListener("scroll", updateIndex, { passive: true });
    window.addEventListener("resize", updateIndex);

    return () => {
      window.removeEventListener("scroll", updateIndex);
      window.removeEventListener("resize", updateIndex);
    };
  }, []);

  const trackOffset = activeIndex * 33.333;

  return (
    <section ref={sectionRef} className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
          Find me elsewhere
        </h2>
        <p className="mb-10 text-sm text-white/50">
          // not just code — here&apos;s the rest of it
        </p>

        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${trackOffset}%)` }}
          >
            {socialImages.map((image) => (
              <div
                key={image.src}
                className="w-[85%] shrink-0 px-2 sm:w-[50%] md:w-[33.333%]"
                aria-label={image.alt}
              >
                <PhotoFrame src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
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
