"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Project, defaultProjects } from "@/lib/projects";

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (id: string, project: Omit<Project, "id">) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize projects from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("projects");
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch {
        setProjects(defaultProjects);
      }
    } else {
      setProjects(defaultProjects);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever projects change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects, isLoaded]);

  const addProject = (project: Omit<Project, "id">) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: string, project: Omit<Project, "id">) => {
    setProjects(
      projects.map((p) => (p.id === id ? { ...project, id } : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const getProject = (id: string) => {
    return projects.find((p) => p.id === id);
  };

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, updateProject, deleteProject, getProject }}
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
