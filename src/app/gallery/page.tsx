import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site/Header";

const galleryImages = [
  { src: "/GALL/IMG_2160.JPEG", alt: "Gideon Dern portrait 1" },
  { src: "/GALL/IMG_2161.JPEG", alt: "Gideon Dern portrait 2" },
  { src: "/GALL/IMG_6965.JPEG", alt: "Gideon Dern portrait 3" },
  { src: "/GALL/IMG_6970.JPEG", alt: "Gideon Dern portrait 4" },
  { src: "/GALL/IMG_8250.JPEG", alt: "Gideon Dern portrait 5" },
  { src: "/GALL/IMG_8666.JPEG", alt: "Gideon Dern portrait 6" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen w-full bg-hero">
      <div className="min-h-screen w-full bg-black/40 backdrop-blur-sm">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/90">
                Gallery
              </p>
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                Moments, work, and presence.
              </h1>
            </div>

            <Link
              href="/"
              className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Back home
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
                  index % 3 === 0 ? "lg:col-span-2 lg:row-span-2" : "",
                ].join(" ")}
              >
                <div className="relative overflow-hidden">
                  <div
                    className={[
                      "relative w-full overflow-hidden bg-black/20",
                      index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]",
                    ].join(" ")}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
