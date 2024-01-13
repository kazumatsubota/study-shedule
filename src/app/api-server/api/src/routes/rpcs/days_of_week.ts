
import { Router } from 'express';
const router = Router();

import prisma from '@src/lib/db_client';


router.post('/getDaysOfWeekList', (req, res) => {
  prisma.daysOfWeek.findMany()
    .then((daysOfWeek) => {
      res.status(200).json(daysOfWeek);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    },
    );
});

type updateDaysOfWeekRequest = {
    dayOfWeekId: string;
    name: string;
};

router.post('/updateDayOfWeek', async (req, res) => {
  const { dayOfWeekId, name } = req.body as updateDaysOfWeekRequest;
  console.log(dayOfWeekId, name);
  try {
    const updatedDaysOfWeek = await prisma.daysOfWeek.update({
      where: {
        dayOfWeekId,
      },
      data: {
        name,
      },
    });
    res.status(200).json(updatedDaysOfWeek);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;