const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "San",
      email: "san@test.com"
    }
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());