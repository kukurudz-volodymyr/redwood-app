import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String7431555', firstName: 'String', lastName: 'String' },
    },
    two: {
      data: { email: 'String1820059', firstName: 'String', lastName: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
