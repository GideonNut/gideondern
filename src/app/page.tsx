"use client";

import Link from "next/link";
import { useProjects } from "@/context/ProjectContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { projects, isLoading } = useProjects();

  const ProjectSkeleton = () => (
    <Card className="h-full border-white/20 bg-white/12 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4 bg-white/30" />
          <Skeleton className="h-4 w-1/4 bg-white/20" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-white/20" />
          <Skeleton className="h-4 w-5/6 bg-white/20" />
        </div>
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full bg-white/20" />
          <Skeleton className="h-6 w-20 rounded-full bg-white/20" />
          <Skeleton className="h-6 w-14 rounded-full bg-white/20" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen w-full bg-hero">
      <div className="min-h-screen w-full bg-black/30 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center px-4 py-16">
          {/* Name Header */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Gideon Dern
          </h1>

          {/* View CV Button */}
          <a
            href="https://docs.google.com/document/d/1DLCHgS-zeq_45dWMTs4sm3avwEtlYY66fJXdqgmXvx8/edit?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-16 px-4 py-1 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 rounded"
          >
            View CV →
          </a>

          {/* Portfolio Grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {isLoading ? (
              // Skeleton loaders
              Array.from({ length: 4 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))
            ) : projects.length === 0 ? (
              <div className="col-span-full text-center text-white">
                <p className="text-lg mb-4">No projects yet. Add some to get started!</p>
                <Link
                  href="/admin"
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
                >
                  Go to Admin
                </Link>
              </div>
            ) : (
              projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <Card className="relative h-full overflow-hidden border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_20px_55px_rgba(0,0,0,0.5)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400/90 via-cyan-300/90 to-indigo-400/90" />
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg md:text-xl font-semibold text-white drop-shadow-sm">
                          {project.title}
                        </CardTitle>
                        {project.date && (
                          <CardDescription className="text-white/70 text-sm mt-1">
                            {project.date}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-white/85 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/30 bg-white/15 px-2 py-1 text-xs text-white"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="rounded-full border border-white/25 bg-white/10 px-2 py-1 text-xs text-white/90">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center rounded-md border border-white/30 bg-white/15 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/25"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project →
                    </Link>
                  </CardContent>
                </Card>
              </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
