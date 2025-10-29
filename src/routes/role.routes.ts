import { Router } from 'express';
import * as roleCtrl from '../controllers/role.controller';

const router = Router();

router.get('/', roleCtrl.list);

export default router;