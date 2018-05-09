import * as express from 'express';
import testRoute from './test-route';

const router = express.Router();
router.use('/', testRoute);

export default router;
