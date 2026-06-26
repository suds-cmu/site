import { z } from "zod";
import boardData from "@/content/board/members.json";

const boardMemberSchema = z.object({
  name: z.string(),
  title: z.string(),
  picture: z.string(),
  linkedin: z.string().optional(),
});

export type BoardMember = z.infer<typeof boardMemberSchema>;

export function getBoardMembers(): BoardMember[] {
  return z.array(boardMemberSchema).parse(boardData);
}
