
import { Router } from 'express';
const router = Router();

import prisma from '@src/lib/db_client';

type GetSchedulesRequest = {
    userId: string;
};

router.post('/getSchedulesList', (req, res) => {
  const { userId } = req.body as GetSchedulesRequest;
  prisma.schedules.findMany(
    {
      where: {
        userId,
      },
    },
  )
    .then((schedules) => {
      res.status(200).json(schedules);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    },
    );
});


// POST /createSchedule

type CreateScheduleRequest = {
    userId: string;
    dayOfWeekId: string;
    duration: number;
};

router.post('/createSchedule', async (req, res) => {
  const { userId, dayOfWeekId, duration } = req.body as CreateScheduleRequest;
  console.log(userId, dayOfWeekId, duration);
  try {
    const schedule = await prisma.schedules.findFirst({
      where: {
        userId,
        dayOfWeekId,
      },
    });
    if (!schedule) {          
      const newSchedule = await prisma.schedules.create({
        data: {
          userId,
          dayOfWeekId,
          duration,
        },
      });
      res.status(200).json(newSchedule);
    } else {
      throw new Error('Schedule already exists');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

type UpdateScheduleRequest = {
    scheduleId: string;
    duration: number;
};

router.post('/updateSchedule', async (req, res) => {
  const { scheduleId, duration } = req.body as UpdateScheduleRequest;
  console.log(scheduleId, duration);
  try {
    const updatedSchedule = await prisma.schedules.update({
      where: {
        scheduleId,
      },
      data: {
        duration,
      },
    });
    res.status(200).json(updatedSchedule);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;