import { Router } from 'express';
const router = Router();

import prisma from '@src/lib/db_client';

/*
model Records {
  recordId   String   @id @default(uuid())
  userId     String
  date       DateTime
  duration   Int
  note       String?
  user       Users    @relation(fields: [userId], references: [userId])
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  deletedAt  DateTime?
}
*/

type CreateRecordRequest = {
    userId: string;
    date: Date;
    duration: number;
    note: string;
};
router.post('/createRecord', async (req, res) => {
  const { userId, date, duration, note } = req.body as CreateRecordRequest;
  console.log(userId, date, duration, note);
  try {
    const newRecord = await prisma.records.create({
      data: {
        userId,
        date,
        duration,
        note,
      },
    });
    res.status(200).json(newRecord);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

type GetRecordsRequest = {
    userId: string;
    startDate: Date;
    endDate: Date;
};

router.post('/getRecordsList', (req, res) => {
  const { userId, startDate, endDate } = req.body as GetRecordsRequest;
  prisma.records.findMany(
    {
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    },
  )
    .then((records) => {
      res.status(200).json(records);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    },
    );
});

export default router;