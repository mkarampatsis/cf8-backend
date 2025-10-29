import { Request, Response, NextFunction } from "express";
import * as userService from '../services/user.service';

export const list = async(req: Request, res:Response, next: NextFunction) => {
  try {
    const result = await userService.findAllUsers();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}