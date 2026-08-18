import { z } from "zod";
import formsData from "@/content/forms.json";

const formsSchema = z.object({
  clientContact: z.object({
    title: z.string(),
    description: z.string(),
    googleDriveUrl: z.string(),
  }),
  projectInterest: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const CONTACT_EMAIL = "sudscmu@gmail.com";

export type SiteForms = z.infer<typeof formsSchema>;

export function getSiteForms(): SiteForms {
  return formsSchema.parse(formsData);
}

export function isUsableHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return false;
    }

    const incompleteDriveFolder =
      url.hostname.includes("google.com") && /\/folders\/?$/.test(url.pathname);
    if (incompleteDriveFolder) {
      return false;
    }

    return url.pathname.length > 1 || url.search.length > 0 || url.hash.length > 0;
  } catch {
    return false;
  }
}

export function buildMailto(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
