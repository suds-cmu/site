import { z } from "zod";
import formData from "@/content/forms.json";

const projectInterestFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  embedUrl: z.string().url(),
});

export type ProjectInterestFormConfig = z.infer<typeof projectInterestFormSchema>;

export function getProjectInterestForm(): ProjectInterestFormConfig {
  return projectInterestFormSchema.parse(formData);
}
