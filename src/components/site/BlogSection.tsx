import { blogPosts } from "@/lib/site-content";

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">
              Writing
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Notes from the build
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            View all posts
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-white/45">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {post.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <span className="text-white/50">{post.date}</span>
                <a
                  href={post.href}
                  className="font-medium text-cyan-200 transition group-hover:text-cyan-100"
                >
                  Read →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
