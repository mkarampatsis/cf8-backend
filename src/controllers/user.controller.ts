import { Request, Response, NextFunction } from "express";
import * as userService from '../services/user.service';

export const list = async(req: Request, res:Response, next: NextFunction) => {
  try {
    const result = await userService.findAllUsers();
    res.status(201).json(result);
  } catch (err) {
    // next(err);
    res.status(401).json(err)
    // res.status(401).json({message:'Users not found'})
  }
}

export const getOne = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.findUserById(req.params.id!)
    if (!result) 
      return res.status(404).json({message: "User not found"})
    res.status(201).json(result);
  } catch(err){
    next(err)
  }
}

export const create = async(req: Request, res:Response, next: NextFunction) => {
  try {
    const result = await userService.createUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err)
  }
}

export const update = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.updateUser(req.params.id!, req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err)
  }
}

export const remove = async(req:Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.deleteUser(req.params.id!)
    res.status(201).json(result);
  } catch (err) {
    next(err)
  }
}