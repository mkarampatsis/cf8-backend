import { Router } from "express"
import * as userCtrl from '../controllers/user.controller';

const router = Router();

router.get("/", userCtrl.list);

export default router;