"use client";

import { useState } from "react";
import Link from "next/link";
import { useProjects } from "@/context/ProjectContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/lib/projects";

export default function AdminPage() {
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    link: "",
    technologies: [],
    date: new Date().getFullYear().toString(),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const techs = e.target.value.split(",").map((t) => t.trim());
    setFormData((prev) => ({ ...prev, technologies: techs }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateProject(editingId, formData);
      setEditingId(null);
    } else {
      addProject(formData);
    }
    setFormData({
      title: "",
      description: "",
      link: "",
      technologies: [],
      date: new Date().getFullYear().toString(),
    });
    setIsFormOpen(false);
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      link: project.link || "",
      technologies: project.technologies || [],
      date: project.date || "",
    });
    setEditingId(project.id);
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      link: "",
      technologies: [],
      date: new Date().getFullYear().toString(),
    });
  };

  return (
    <div className="min-h-screen w-full bg-hero">
      <div className="min-h-screen w-full bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-300">Manage your portfolio projects</p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Add Project Button */}
        {!isFormOpen && (
          <button
            onClick={() => setIsFormOpen(true)}
            className="mb-8 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            + Add New Project
          </button>
        )}

        {/* Form */}
        {isFormOpen && (
          <Card className="mb-8 bg-slate-800/90 backdrop-blur border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                {editingId ? "Edit Project" : "Add New Project"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="Project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="Project description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Link (optional)
                  </label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="https://github.com/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Technologies (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.technologies?.join(", ") || ""}
                    onChange={handleTechChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="React, TypeScript, Node.js"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Year
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="2025"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    {editingId ? "Update Project" : "Add Project"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 bg-slate-700 text-gray-200 rounded-lg font-medium hover:bg-slate-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Projects List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Projects ({projects.length})
          </h2>
          {projects.length === 0 ? (
            <p className="text-gray-400">No projects yet. Add one to get started!</p>
          ) : (
            projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-800/90 backdrop-blur border-slate-700 hover:border-slate-600 transition"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl">
                        {project.title}
                      </CardTitle>
                      {project.date && (
                        <CardDescription className="text-gray-400">
                          {project.date}
                        </CardDescription>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-300">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700 text-gray-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-green-400 hover:text-green-300 transition"
                    >
                      View Project →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
