import * as path from 'path';
import * as express from 'express';

const router = express.Router();

const indexPage = path.resolve(__dirname, './index.html');

router.get('*', (req, res, next) => {
  console.log(req.originalUrl);
  res.sendFile(indexPage);
});

export default router;
