import { z } from "zod";
import clientsData from "@/content/clients/clients.json";

const clientSchema = z.object({
  name: z.string(),
  logo: z.string(),
  url: z.string().url(),
  description: z.string().optional(),
});

export type Client = z.infer<typeof clientSchema>;

export function getClients(limit?: number): Client[] {
  const clients = z.array(clientSchema).parse(clientsData);
  return typeof limit === "number" ? clients.slice(0, limit) : clients;
}
