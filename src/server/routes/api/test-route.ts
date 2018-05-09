import * as express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    value: 20
  });
});

export default router;
