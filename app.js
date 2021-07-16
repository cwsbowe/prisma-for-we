

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// A `main` function so that you can use async/await
async function main() {
    // ... you will write your Prisma Client queries here
    console.log("you will write your Prisma Client queries here")
    // const user = await prisma.user.create({
    //     data: {
    //         email: 'elsa@prisma.io',
    //         name: 'Elsa Prisma',
    //     },
    // })

    const user = await prisma.user.findUnique({
        where: {
            email: 'elsa@prisma.io',
        },
    })
    console.log(user.name)

    const upsertUser = await prisma.user.upsert({
        where: {
            email: 'viola@prisma.io',
        },
        update: {
            name: 'Viola the Magnificent',
        },
        create: {
            email: 'viola@prisma.io',
            name: 'Viola the Failure',
        },
    })

    console.log(upsertUser.name)


}
main()
    .catch(e => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
