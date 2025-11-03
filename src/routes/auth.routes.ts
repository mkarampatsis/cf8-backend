import { Router } from "express";
import * as authCtrl from '../controllers/auth.controller';
import { validate } from '../middlewares/validate.middleware';
import { loginSchema } from "../validators/auth.validator";

const router = Router();

/**
 * @openapi
 * /auth/login:
 *  post:
 *    summary: Login user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200: 
 *        description: Success Loggin
 *      401:
 *        description: Failure in login
 */
router.post('/login', validate(loginSchema), authCtrl.login);

export default router;