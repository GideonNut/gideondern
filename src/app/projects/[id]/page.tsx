"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useProjects } from "@/context/ProjectContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectDetailsPage() {
  const params = useParams<{ id: string }>();
  const { getProject, isLoading } = useProjects();

  const id = params?.id;
  const project = id ? getProject(id) : undefined;

  return (
    <div className="min-h-screen w-full bg-hero">
      <div className="min-h-screen w-full bg-black/30 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-3xl px-4 py-12">
          <div className="mb-6">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition underline underline-offset-4"
            >
              ← Back
            </Link>
          </div>

          {isLoading ? (
            <Card className="border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.35)]">
              <CardHeader>
                <CardTitle className="text-white">Loading…</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">Fetching project details.</CardContent>
            </Card>
          ) : !project ? (
            <Card className="border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.35)]">
              <CardHeader>
                <CardTitle className="text-white">Not found</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                We couldn’t find that project.
              </CardContent>
            </Card>
          ) : (
            <Card className="relative overflow-hidden border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.42)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400/90 via-cyan-300/90 to-indigo-400/90" />
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl md:text-3xl text-white drop-shadow-sm">
                  {project.title}
                </CardTitle>
                {project.date && <p className="text-white/75">{project.date}</p>}
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="leading-relaxed text-white/90">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/30 bg-white/15 px-2 py-1 text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-white">
                      Key contributions
                    </h2>
                    <ul className="list-disc space-y-1 pl-5 text-white/90">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.link && (
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cyan-200 underline underline-offset-4 transition hover:text-cyan-100"
                    >
                      External link →
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

