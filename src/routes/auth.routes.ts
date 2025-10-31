import { Router } from "express";
import * as authCtrl from '../controllers/auth.controller';
import { validate } from '../middlewares/validate.middleware';
import { loginSchema } from "../validators/auth.validator";

const router = Router();

router.post('/login', validate(loginSchema), authCtrl.login);

export default router;