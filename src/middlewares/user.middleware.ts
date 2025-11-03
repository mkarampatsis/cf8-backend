import { Request, Response, NextFunction } from "express";
import { IRole } from "../models/role.model";

export const hasAdminRole = (req: Request, res: Response, next: NextFunction) => {
  try{
    const checkAdminRole = req.user.roles.some((r: IRole)=>r.role==='ADMIN'&& r.active);
    if (!checkAdminRole){
      console.log("Forbidden: Insufficient permissions");
      res.status(403).json({message:"Forbidden: Insufficient permissions"});
    }
    next()
  } catch (err) {
    res.status(401).json({message: 'Not Admin role'})
  }
}