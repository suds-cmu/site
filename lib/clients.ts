import { z } from "zod";
import clientsData from "@/content/clients/clients.json";

const clientSchema = z.object({
  name: z.string(),
  logo: z.string(),
  url: z.string().url(),
  description: z.string().optional(),
});

export type Client = z.infer<typeof clientSchema>;

export function getClients(): Client[] {
  return z.array(clientSchema).parse(clientsData);
}
