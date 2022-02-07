import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        author: {
          create: {
            email: 'String5740076',
            firstName: 'String',
            lastName: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        author: {
          create: {
            email: 'String2057302',
            firstName: 'String',
            lastName: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
