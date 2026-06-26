import { z } from "zod";

export const projectSchema = z.object({
  title: z.string(),
  partner: z.string(),
  partnerDescription: z.string(),
  keywords: z.array(z.string()).optional(),
  image: z.string().optional(),
  timeframe: z.string(),
  draft: z.boolean().optional().default(false),
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};
