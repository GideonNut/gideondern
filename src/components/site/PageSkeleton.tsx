import { Skeleton } from "@/components/ui/skeleton";

export function PageSkeleton({ variant = "home" }: { variant?: "home" | "gallery" | "project" | "admin" }) {
  if (variant === "gallery") {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <Skeleton className="h-3 w-20 rounded-full bg-white/10" />
            <Skeleton className="h-12 w-72 rounded-lg bg-white/10 md:h-16 md:w-96" />
          </div>
          <Skeleton className="h-11 w-32 rounded-full bg-white/10" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              className={[
                "overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
                index % 3 === 0 ? "lg:col-span-2 lg:row-span-2" : "",
                index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "project") {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <div className="mb-6">
          <Skeleton className="h-5 w-20 rounded bg-white/10" />
        </div>

        <div className="space-y-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <Skeleton className="h-8 w-2/3 rounded bg-white/10 md:h-10" />
          <Skeleton className="h-4 w-24 rounded bg-white/10" />
          <Skeleton className="h-4 w-full rounded bg-white/10" />
          <Skeleton className="h-4 w-5/6 rounded bg-white/10" />
          <Skeleton className="h-4 w-3/4 rounded bg-white/10" />
          <div className="flex flex-wrap gap-2 pt-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-7 w-20 rounded-full bg-white/10" />
            ))}
          </div>
          <div className="space-y-3 pt-2">
            <Skeleton className="h-5 w-40 rounded bg-white/10" />
            <Skeleton className="h-4 w-full rounded bg-white/10" />
            <Skeleton className="h-4 w-11/12 rounded bg-white/10" />
            <Skeleton className="h-4 w-5/6 rounded bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "admin") {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <div className="space-y-6">
          <Skeleton className="h-8 w-48 rounded bg-white/10" />
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-32 rounded-2xl bg-white/10" />
            ))}
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <Skeleton className="h-6 w-1/3 rounded bg-white/10" />
            <Skeleton className="h-4 w-full rounded bg-white/10" />
            <Skeleton className="h-4 w-5/6 rounded bg-white/10" />
            <Skeleton className="h-4 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-hero">
      <div className="min-h-screen w-full bg-black/40 backdrop-blur-sm">
        <header className="sticky top-0 z-50 border-b border-white/15 bg-black/40 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
            <Skeleton className="h-7 w-24 rounded-md bg-white/10" />
            <nav className="flex items-center gap-4 md:gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-4 w-16 rounded bg-white/10 md:w-20" />
              ))}
            </nav>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <Skeleton className="h-4 w-28 rounded-full bg-white/10" />
                <Skeleton className="h-14 w-full rounded-xl bg-white/10 md:h-16" />
                <Skeleton className="h-14 w-4/5 rounded-xl bg-white/10 md:h-16" />
                <Skeleton className="h-5 w-full rounded bg-white/10" />
                <Skeleton className="h-5 w-5/6 rounded bg-white/10" />
                <div className="flex gap-3 pt-4">
                  <Skeleton className="h-12 w-32 rounded-full bg-white/10" />
                  <Skeleton className="h-12 w-32 rounded-full bg-white/10" />
                </div>
              </div>
              <Skeleton className="h-[420px] w-full rounded-[2rem] border border-white/10 bg-white/5" />
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-32 rounded-2xl border border-white/10 bg-white/5" />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
            <div className="space-y-5">
              <Skeleton className="h-8 w-48 rounded bg-white/10" />
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-28 rounded-2xl border border-white/10 bg-white/5" />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
