import { Request, Response, NextFunction } from "express";
import * as authService from '../services/auth.service';

export const login = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    if (!result) {
      return res.status(401).json({message:"Invalid Credentials"})
    }
    res.status(200).json({token: result.token, user:result.user})
  } catch (err) { 
    res.status(401).json({message: "Problem in login", error: err})
  }
}