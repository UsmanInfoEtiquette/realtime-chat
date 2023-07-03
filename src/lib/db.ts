import { Redis } from '@upstash/redis'

export const db = new Redis({
  url : "https://us1-faithful-bream-38361.upstash.io",
  token:"AZXZASQgOTQwYjcxM2MtNjRjMi00MTU2LTkyYjQtNjE5MjUxMDc0YmIxMzI4ZmZmYjE5MmQ2NDFiZmIwOGQyMjFjMjhkMjVmYzk="
})