import { Router } from 'express';
import * as roleCtrl from '../controllers/role.controller';
import { validate } from '../middlewares/validate.middleware';
import { validateObjectId } from '../middlewares/validateObjectId.middleware';
import { createRoleSchema, updateRoleSchema } from '../validators/role.validator';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', roleCtrl.list);
router.post('/', authenticate, validate(createRoleSchema), roleCtrl.create);
router.put('/:id', authenticate, validate(updateRoleSchema), validateObjectId('id'), roleCtrl.update);
router.delete('/:id', authenticate, validateObjectId('id'), roleCtrl.remove);

export default router;