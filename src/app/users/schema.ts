import { z } from "zod"
export const SearchUserSchema = z.object({
  name: z.string()
})