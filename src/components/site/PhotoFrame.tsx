import Image from "next/image";

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

export function PhotoFrame({
  src,
  alt,
  label,
  priority = false,
}: {
  src?: string;
  alt: string;
  label?: string;
  priority?: boolean;
}) {
  if (!src) {
    return <ImagePlaceholder label={label ?? alt} />;
  }

  return (
    <div className="relative w-full overflow-hidden border-4 border-white/30 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/25 bg-black/20">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
        />
      </div>
    </div>
  );
}
