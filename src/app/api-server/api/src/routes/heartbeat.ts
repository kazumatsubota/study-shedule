
import { Router } from 'express';

const router = Router();

// GET /
router.get('/', (req, res) => {
  res.send('API is working!!');
});

export default router;