import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const techTag = await prisma.tag.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Tech',
    },
  })
  const sportTag = await prisma.tag.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Sport',
    },
  })
  const user = await prisma.user.upsert({
    where: { email: 'john.snow@test.com' },
    update: {},
    create: {
      email: 'john.snow@test.com',
      firstName: 'John',
      lastName: 'Snow',
      avatar:
        'https://cdn3.vectorstock.com/i/1000x1000/38/17/male-face-avatar-logo-template-pictograph-vector-11333817.jpg',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          postTag: {
            create: {
              tagId: techTag.id,
            },
          },
        },
      },
    },
  })
  console.log('user: ', user)

  const user2 = await prisma.user.upsert({
    where: { email: 'will.smith@test.com' },
    update: {},
    create: {
      email: 'will.smith@test.com',
      firstName: 'Will',
      lastName: 'Smith',
      avatar:
        'https://cdn3.vectorstock.com/i/1000x1000/38/17/male-face-avatar-logo-template-pictograph-vector-11333817.jpg',
      posts: {
        create: {
          title: 'About Racing',
          body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          postTag: {
            create: {
              tagId: sportTag.id,
            },
          },
        },
      },
    },
  })

  console.log({ user, user2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
