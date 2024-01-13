
// Express.js の users ルーター

import { Router } from 'express';

import prisma from '@src/lib/db_client';

const router = Router();

router.post('/getUserList', (req, res) => {
  prisma.users.findMany()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    },
    );
});

// POST /getUsers
type GetUserRequest = {
    firebaseId: string;
};
    
router.post('/getUser', (req, res) => {
  const { firebaseId } = req.body as GetUserRequest;
  console.log(firebaseId);
  prisma.users.findUnique({
    where: {
      firebaseId,
    },
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

type CreateUserRequest = {
    email: string;
    name: string;
    firebaseId: string;
};

router.post('/createUser', async (req, res) => {
  const { email, name, firebaseId } = req.body as CreateUserRequest;
  console.log(email, name, firebaseId);
  try {
    const newUser = await prisma.users.create({
      data: {
        firebaseId,
        email,
        name,
      },
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

type UpdateUserRequest = {
    userId: string;
    email: string;
    name: string;
};

router.post('/updateUser', async (req, res) => {
  const { userId, email, name} = req.body as UpdateUserRequest;
  console.log(userId, email, name);
  try {
    const updatedUser = await prisma.users.update({
      where: {
        userId,
      },
      data: {
        email,
        name,
        updatedAt: new Date(),
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;