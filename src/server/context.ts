import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/fetch'
// import { unstable_getServerSession } from "next-auth";
import { prisma } from './prisma'
// import { nextAuthOptions } from "../common/auth";

export const createContext = async (ctx: trpcNext.FetchCreateContextFnOptions) => {
  const { req, resHeaders } = ctx
  //   const session = await unstable_getServerSession(req, res, nextAuthOptions);

  return {
    req,
    resHeaders,
    // session
    prisma
  }
}

export type IContext = trpc.inferAsyncReturnType<typeof createContext>
