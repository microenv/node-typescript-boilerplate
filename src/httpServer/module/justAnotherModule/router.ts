import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.post(
  '/hello/:name',
  controller.getHello,
);

export default router;
