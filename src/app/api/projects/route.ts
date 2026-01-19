import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { Project, defaultProjects } from "@/lib/projects";

const projectsFile = path.join(process.cwd(), "data", "projects.json");

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    console.error("Failed to create data directory:", error);
  }
}

async function readProjects(): Promise<Project[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(projectsFile, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist or is invalid, return defaults
    await writeProjects(defaultProjects);
    return defaultProjects;
  }
}

async function writeProjects(projects: Project[]): Promise<void> {
  try {
    await ensureDataDir();
    await fs.writeFile(projectsFile, JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error("Failed to write projects:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const projects = await readProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Failed to read projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const project: Omit<Project, "id"> = await request.json();
    const projects = await readProjects();
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
    };
    projects.push(newProject);
    await writeProjects(projects);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...projectData }: Project = await request.json();
    const projects = await readProjects();
    const index = projects.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    projects[index] = { ...projectData, id };
    await writeProjects(projects);
    return NextResponse.json(projects[index]);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID parameter required" },
        { status: 400 }
      );
    }

    const projects = await readProjects();
    const filtered = projects.filter((p) => p.id !== id);

    if (filtered.length === projects.length) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    await writeProjects(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
