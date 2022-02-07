import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const postTag = ({ id }: Prisma.PostTagWhereUniqueInput) => {
  return db.postTag.findUnique({
    where: { id },
  })
}

export const PostTag = {
  tag: (_obj, { root }: ResolverArgs<ReturnType<typeof postTag>>) =>
    db.postTag.findUnique({ where: { id: root.id } }).tag(),
}
