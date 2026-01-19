"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Project, defaultProjects } from "@/lib/projects";

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, "id">) => Promise<void>;
  updateProject: (id: string, project: Omit<Project, "id">) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  getProject: (id: string) => Project | undefined;
  isLoading: boolean;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch projects from API on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/projects");
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        setProjects(defaultProjects);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setProjects(defaultProjects);
    } finally {
      setIsLoading(false);
    }
  };

  const addProject = async (project: Omit<Project, "id">) => {
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      if (response.ok) {
        const newProject = await response.json();
        setProjects([...projects, newProject]);
      }
    } catch (error) {
      console.error("Failed to add project:", error);
      throw error;
    }
  };

  const updateProject = async (id: string, project: Omit<Project, "id">) => {
    try {
      const response = await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...project, id }),
      });
      if (response.ok) {
        const updated = await response.json();
        setProjects(projects.map((p) => (p.id === id ? updated : p)));
      }
    } catch (error) {
      console.error("Failed to update project:", error);
      throw error;
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const response = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setProjects(projects.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete project:", error);
      throw error;
    }
  };

  const getProject = (id: string) => {
    return projects.find((p) => p.id === id);
  };

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, updateProject, deleteProject, getProject, isLoading }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within ProjectProvider");
  }
  return context;
}
