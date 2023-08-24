import { z } from 'zod'

import { router, publicProcedure } from './trpc'

// import { prisma } from '@/server/prisma'

export const appRouter = router({
  findAll: publicProcedure.query(async (opts) => {
    const { ctx } = opts
    const users = await ctx.prisma?.todo.findMany()
    console.log(users)
  })
})
// userById: publicProcedure.input(z.string()).query(async (opts) => {
//   const { input, ctx } = opts
//   const user = await ctx.prisma.user.findUnique({ where: { id: input } })
//   return user
// }),
// userCreate: publicProcedure.input(z.object({ name: z.string() })).mutation(async (opts) => {
//   const { input, ctx } = opts
//   const user = await ctx.prisma.user.create({
//     data: {
//       name: input.name
//     }
//   })
//   return user
// })
// })

export type AppRouter = typeof appRouter
