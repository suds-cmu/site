import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { projectSchema, type Project } from "./types";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = projectSchema.parse(data);

      return { slug, frontmatter, content };
    })
    .filter((project) => !project.frontmatter.draft);

  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}
