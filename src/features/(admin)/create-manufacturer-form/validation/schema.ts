import { z } from "zod";

export const schema = z.object({
  name: z.string().trim().min(2).max(50),
});
