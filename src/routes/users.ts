import { factory } from "@/factory"

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

export const POST = factory.createHandlers((c) => {
  const userId = crypto.randomUUID()

  const newUser = {
    id: userId,
    name: "New User",
    email: "newuser@example.com",
  }

  return c.json(newUser)
})
