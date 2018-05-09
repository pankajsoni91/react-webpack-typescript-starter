import * as express from 'express';
import { getData } from 'services';

const router = express.Router();
router.get('/', (req, res) => {
  const { value } = req.query;
  res.json({
    value
  });
});

router.get('/axiosTest', async (req, res) => {
  const response = await getData();
  res.json({
    value: response
  });
});

export default router;
