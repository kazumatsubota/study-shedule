
// prisma の Seeding

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const monday = await prisma.daysOfWeek.create({
        data: {
            name: 'Monday',
        },
    });
    console.log(monday);
    const tuesday = await prisma.daysOfWeek.create({
        data: {
            name: 'Tuesday',
        },
    });
    console.log(tuesday);
    const wednesday = await prisma.daysOfWeek.create({
        data: {
            name: 'Wednesday',
        },
    });
    console.log(wednesday);
    const thursday = await prisma.daysOfWeek.create({
        data: {
            name: 'Thursday',
        },
    });
    console.log(thursday);
    const friday = await prisma.daysOfWeek.create({
        data: {
            name: 'Friday',
        },
    });
    console.log(friday);
    const saturday = await prisma.daysOfWeek.create({
        data: {
            name: 'Saturday',
        },
    });
    console.log(saturday);
    const sunday = await prisma.daysOfWeek.create({
        data: {
            name: 'Sunday',
        },
    });
    console.log(sunday);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })