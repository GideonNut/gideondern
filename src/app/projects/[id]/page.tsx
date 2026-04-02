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
            <Card className="bg-white/95 backdrop-blur border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Loading…</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Fetching project details.</CardContent>
            </Card>
          ) : !project ? (
            <Card className="bg-white/95 backdrop-blur border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Not found</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                We couldn’t find that project.
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/95 backdrop-blur border-0 shadow-lg">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl md:text-3xl text-gray-900">
                  {project.title}
                </CardTitle>
                {project.date && <p className="text-gray-600">{project.date}</p>}
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-800 leading-relaxed">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Key contributions
                    </h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
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
                      className="text-blue-700 hover:text-blue-800 font-medium underline underline-offset-4"
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

