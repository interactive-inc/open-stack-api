import { zValidator } from "@hono/zod-validator"
import { z } from "zod"
import { factory } from "@/factory"

const zUserInput = z.object({
  email: z.string().trim().email().max(254),
  name: z.string().trim().min(1).max(128),
})

const mockUsers = [
  {
    id: "1",
    email: "alice@example.com",
    name: "Alice",
  },
  {
    id: "2",
    email: "bob@example.com",
    name: "Bob",
  },
  {
    id: "3",
    email: "charlie@example.com",
    name: "Charlie",
  },
]

export const GET = factory.createHandlers((c) => {
  return c.json(mockUsers)
})

export const POST = factory.createHandlers(zValidator("json", zUserInput), (c) => {
  const input = c.req.valid("json")
  const userId = crypto.randomUUID()

  const newUser = {
    id: userId,
    ...input,
  }

  return c.json(newUser, 201)
})
