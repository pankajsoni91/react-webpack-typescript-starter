import { Router, Request, Response } from 'express';
import { getData } from 'services';

const router: Router = Router();
router.get('/', (req: Request, res: Response) => {
  const { value } = req.query;
  res.json({
    value
  });
});

router.get('/axiosTest', async (req: Request, res: Response) => {
  const response = await getData();
  res.json({
    value: response
  });
});

export default router;
