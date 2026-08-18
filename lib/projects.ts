import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { projectSchema, type Project } from "./types";

const projectsDirectory = path.join(process.cwd(), "content/projects");

const SEASON_RANK: Record<string, number> = {
  spring: 1,
  summer: 2,
  fall: 3,
  winter: 4,
};

export type SemesterGroup = {
  timeframe: string;
  label: string;
  sortKey: number;
  projects: Project[];
};

function seasonRankFromText(text: string): number | undefined {
  const match = text.toLowerCase().match(/\b(spring|summer|fall|winter)\b/);
  return match ? SEASON_RANK[match[1]] : undefined;
}

/** Newer semesters sort higher. Ranges use the latest year/season mentioned. */
export function timeframeSortKey(timeframe: string): number {
  const years = [...timeframe.matchAll(/\b(19\d{2}|20\d{2})\b/g)].map((match) =>
    Number(match[1]),
  );
  const year = years.length > 0 ? Math.max(...years) : 0;
  const lastSegment = timeframe.split(/[-–]/).at(-1) ?? timeframe;
  const season = seasonRankFromText(lastSegment) ?? seasonRankFromText(timeframe) ?? 2;

  return year * 10 + season;
}

export function formatSemesterLabel(timeframe: string): string {
  const match = timeframe
    .trim()
    .match(/^(19\d{2}|20\d{2})\s+(Spring|Summer|Fall|Winter)$/i);

  if (!match) {
    return timeframe;
  }

  const season = match[2][0].toUpperCase() + match[2].slice(1).toLowerCase();
  return `${season} ${match[1]}`;
}

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

export function getProjectsGroupedBySemester(
  limitPerSemester = 3,
): SemesterGroup[] {
  const groups = new Map<string, Project[]>();

  for (const project of getAllProjects()) {
    const timeframe = project.frontmatter.timeframe.trim();
    const projects = groups.get(timeframe) ?? [];
    projects.push(project);
    groups.set(timeframe, projects);
  }

  return [...groups.entries()]
    .map(([timeframe, projects]) => {
      const sorted = [...projects].sort((a, b) =>
        a.frontmatter.title.localeCompare(b.frontmatter.title),
      );
      const featured = sorted.filter((project) => project.frontmatter.featured);
      const selected =
        featured.length > 0 ? featured.slice(0, limitPerSemester) : sorted;

      return {
        timeframe,
        label: formatSemesterLabel(timeframe),
        sortKey: timeframeSortKey(timeframe),
        projects: selected,
      };
    })
    .sort((a, b) => b.sortKey - a.sortKey || b.label.localeCompare(a.label));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}
