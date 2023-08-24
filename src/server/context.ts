import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
// import { unstable_getServerSession } from "next-auth";
import { prisma } from './prisma'

type CreateContextOptions = Record<string, never>

const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  return {
    prisma
  }
}

export const createContext = (_opts: CreateNextContextOptions) => {
  return createInnerTRPCContext({})
}

export type Context = inferAsyncReturnType<typeof createContext>
