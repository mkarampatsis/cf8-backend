import { Router } from 'express';
import * as roleCtrl from '../controllers/role.controller';

const router = Router();

router.get('/', roleCtrl.list);
router.post('/', roleCtrl.create);
router.put('/:id', roleCtrl.update);

export default router;