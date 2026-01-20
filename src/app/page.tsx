"use client";

import Link from "next/link";
import { useProjects } from "@/context/ProjectContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { projects, isLoading } = useProjects();

  const ProjectSkeleton = () => (
    <Card className="bg-white/95 backdrop-blur border-0 shadow-lg h-full">
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4 bg-gray-300" />
          <Skeleton className="h-4 w-1/4 bg-gray-300" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-5/6 bg-gray-300" />
        </div>
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full bg-gray-300" />
          <Skeleton className="h-6 w-20 rounded-full bg-gray-300" />
          <Skeleton className="h-6 w-14 rounded-full bg-gray-300" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen w-full bg-hero">
      <div className="min-h-screen w-full bg-black/30 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center px-4 py-16">
          {/* Name Header */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight">
            Gideon Dern
          </h1>

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
                <Card className="bg-white/95 backdrop-blur border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg md:text-xl font-semibold text-gray-900">
                          {project.title}
                        </CardTitle>
                        {project.date && (
                          <CardDescription className="text-gray-500 text-sm mt-1">
                            {project.date}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm transition group-hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project →
                      </a>
                    )}
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
