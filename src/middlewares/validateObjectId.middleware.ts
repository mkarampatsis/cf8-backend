import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const validateObjectId = (params='id') => (req: Request, res: Response, next: NextFunction) => {
  const value = req.params[params]
  if (!value || !mongoose.Types.ObjectId.isValid(value)) {
    return res.status(400).json({message: "Not correct ObjectId"})
  }
  next();
}